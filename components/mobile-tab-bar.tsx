"use client"
import { Home, FileText, Layers, Phone } from "lucide-react"
import { useI18n } from "./providers"
import { cn } from "@/lib/utils"
import Link from "next/link"

const tabs = [
  { key: "home", labelKey: "home", icon: Home, href: "/" },
  { key: "insights", labelKey: "insights", icon: FileText, href: "/insights" },
  { key: "services", labelKey: "services", icon: Layers, href: "/services" },
  { key: "contact", labelKey: "contact", icon: Phone, href: "/contact" },
]

export function MobileTabBar() {
  const { t } = useI18n()
  return (
    <nav
      className={cn("fixed inset-x-0 bottom-0 z-50 border-t bg-card/95 glass backdrop-blur md:hidden")}
      aria-label="Primary"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ key, labelKey, icon: Icon, href }) => (
          <li key={key}>
            <Link href={href} className="flex flex-col items-center justify-center gap-1 py-2 text-xs">
              <Icon className="size-5" aria-hidden="true" />
              <span>{t(labelKey)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
