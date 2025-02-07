import ChatInterface from "@/components/ChatInterface"
import InfoSection from "@/components/InfoSection"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-2xl font-bold">Namami Gange Programme Chatbot</h1>
        <ThemeToggle />
      </header>
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoSection />
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  )
}

