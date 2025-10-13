// MegaMenu.tsx file

"use client"
import { cn } from "@/lib/utils"

type MegaMenuProps = {
  open: boolean
  onClose?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenu({ open, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className={cn("absolute left-0 right-0 top-full z-40", open ? "block" : "hidden")}
      role="dialog"
      aria-label="Industries"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="glass">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["Consumer", ["Retail", "Travel", "Luxury"]],
              ["Healthcare", ["Pharma", "Providers", "MedTech"]],
              ["Industrial", ["Automotive", "Energy", "Manufacturing"]],
              ["Technology", ["Software", "Cloud", "AI"]],
            ].map(([group, items]) => (
              <div key={group as string} className="space-y-2">
                <div className="font-semibold">{group as string}</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {(items as string[]).map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-foreground focus:outline-none focus:underline">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}