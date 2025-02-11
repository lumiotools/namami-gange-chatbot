import "./globals.css"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google" // Import Ubuntu font
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react" // Added import for React

// Use Ubuntu font with Latin subset
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" })

export const metadata: Metadata = {
  title: "Namami Gange Programme Chatbot",
  description: "Learn about the Namami Gange Programme through our AI chatbot",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script id="warmly-script-loader" src="https://opps-widget.getwarmly.com/warmly.js?clientId=86babbef40c5d6164dcf5948140d010d" defer></script>
      </head>
      <body className={`${ubuntu.className} antialiased`}> {/* Apply Ubuntu font */}
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
