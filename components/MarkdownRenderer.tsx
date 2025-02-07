import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      className={cn("prose dark:prose-invert prose-sm w-full break-words", className)}
      components={{
        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        code: ({ children }) => <code className="bg-muted px-1 py-0.5 rounded">{children}</code>,
        pre: ({ children }) => <pre className="bg-muted p-3 rounded-lg overflow-x-auto">{children}</pre>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

