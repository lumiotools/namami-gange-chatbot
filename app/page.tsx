import ChatInterface from "@/components/ChatInterface"
import InfoSection from "@/components/InfoSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#00B96F]/[0.07] via-[#FFFFFC] to-[#00B96F]/[0.04]">
      <header className="py-4 px-6 border-b border-gray-200">
        <h1 className="text-gray-800 font-bold">Namami Gange Programme Chatbot</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoSection />
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  )
}
