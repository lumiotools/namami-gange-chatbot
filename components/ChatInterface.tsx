"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MarkdownRenderer } from "./MarkdownRenderer";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "## Hello!\n\nHow can I assist you today regarding the **Namami Gange Programme**? Whether you have questions about its objectives, achievements, or how to get involved, feel free to ask!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]); // Added scrollToBottom to dependencies

  const parseStreamChunk = (chunk: string) => {
    try {
      const lines = chunk.split("\n");
      let content = "";

      for (const line of lines) {
        if (line.startsWith("0:")) {
          // Remove the '0:' prefix and any surrounding quotes
          const cleanedContent = line
            .slice(2)
            .replace(/^"/, "")
            .replace(/"$/, "");
          // Replace escaped newlines with actual newlines
          content += cleanedContent.replace(/\\n/g, "\n");
        }
      }
      return content;
    } catch (error) {
      console.error("Error parsing chunk:", error);
      return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error(response.statusText);

      setIsLoading(false);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No reader available");

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const parsedContent = parseStreamChunk(chunk);
        accumulatedContent += parsedContent;

        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === "assistant") {
            return [
              ...prev.slice(0, -1),
              { ...lastMessage, content: accumulatedContent },
            ];
          }
          return prev;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, an error occurred. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-2 rounded-2xl border border-gray-100 bg-white flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex-grow p-6 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "items-start gap-3"
            }`}
          >
            {message.role === "assistant" && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`inline-block rounded-2xl p-4 max-w-[80%] ${
                message.role === "user" ? "bg-[#E8F5F0]" : "bg-gray-50"
              }`}
            >
              <MarkdownRenderer content={message.content} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="inline-block rounded-2xl bg-gray-50 p-4">
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Chatbot.."
            className="flex-grow rounded-full border-gray-200 !outline-none !ring-0 !ring-transparent focus:border-[#00875A]"
          />
          <Button
            type="submit"
            className="rounded-full bg-[#00875A] hover:bg-[#007A51]"
            disabled={isLoading}
          >
            <>Send</>
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
