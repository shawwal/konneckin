"use client"

import { cn } from "@/lib/utils"

export function RichContent({
  html,
  className,
}: {
  html: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "rich-content text-foreground leading-relaxed [&_*]:max-w-full",
        "[&>h1]:text-2xl [&>h1]:font-semibold [&>h1]:mb-4",
        "[&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-3",
        "[&>p]:mb-4",
        "[&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2",
        "[&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2",
        "[&>a]:underline",
        "[&>img]:rounded-md [&>img]:my-4",
        "[&>blockquote]:border-l-2 [&>blockquote]:pl-4 [&>blockquote]:italic",
        className,
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
