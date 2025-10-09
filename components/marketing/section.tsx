import type { ElementType, ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  as?: ElementType
  title?: string
  subtitle?: string
  className?: string
  children?: ReactNode
}
export function Section({ as: Comp = "section", title, subtitle, className, children }: SectionProps) {
  return (
    <Comp className={cn("w-full py-10 md:py-16 lg:py-20", className)}>
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        {subtitle ? (
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-2 animate-in fade-in">{subtitle}</p>
        ) : null}
        {title ? (
          <h2 className="font-serif text-pretty text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-2">
            {title}
          </h2>
        ) : null}
        <div className="prose prose-invert max-w-none text-pretty leading-relaxed animate-in fade-in duration-500">
          {children}
        </div>
      </div>
    </Comp>
  )
}
