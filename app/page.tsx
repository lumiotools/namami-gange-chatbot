import AboutSection from "@/components/AboutSection";
import ChatInterface from "@/components/ChatInterface";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#00B96F]/[0.07] via-[#FFFFFC] to-[#00B96F]/[0.04]">
      <header className="py-4 px-6 border-b border-gray-200">
        <h1 className="text-[#00875A] font-semibold text-sm sm:text-xl">
          Namami Gange Programme
        </h1>
      </header>
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl px-6 py-10 mx-auto space-y-12">
          <AboutSection />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoSection />
            <ChatInterface />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
