"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Paperclip, Send } from "lucide-react";
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]); // Scroll when messages change or loading state changes

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

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message.content },
      ]);
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
              className={`inline-block rounded-2xl p-4 max-w-[80%] prose prose-sm ${
                message.role === "user" ? "bg-[#E8F5F0]" : ""
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
            <div className="inline-block rounded-2xl bg-gray-100 p-4">
              <p className="text-sm">Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
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
