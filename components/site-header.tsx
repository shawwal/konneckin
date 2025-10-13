"use client"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"
import { MegaMenu } from "./mega-menu"
import { useI18n } from "./providers"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"

export function SiteHeader() {
  const { t } = useI18n()
  const [industriesOpen, setIndustriesOpen] = useState(false)
  // Ref to hold the timer ID
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  // When mouse enters either the link OR the menu, cancel any pending close actions
  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
    setIndustriesOpen(true)
  }

  // When mouse leaves either the link OR the menu, start a timer to close it
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIndustriesOpen(false)
    }, 200) // 200ms grace period
  }

  return (
    <>
      <header className={cn("sticky top-0 z-50 w-full")}>
        <div className="liquid-glass">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-0 py-3">
            <div className="flex flex-1 items-center">
              <a href="/">
                {/* Light Mode Logo */}
                <Image
                  src="/konneckin-logo.png"
                  alt="Konneckin Logo"
                  width={721}
                  height={111}
                  className="block h-8 w-auto dark:hidden"
                  priority
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/konneckin-logo-white.png"
                  alt="Konneckin Logo"
                  width={721}
                  height={111}
                  className="hidden h-8 w-auto dark:block"
                  priority
                />
              </a>
            </div>

            {/* Centered nav (desktop) - UPDATED BREAKPOINT */}
            <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a href="/services" className="hover:underline">
                    {t("services")}
                  </a>
                </li>
                <li
                  className="relative group"
                  // Apply the timer handlers to the trigger
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                >
                  <a href="/industries" className="hover:underline">
                    {t("industries")}
                  </a>
                </li>
                <li>
                  <a href="/insights" className="hover:underline">
                    {t("insights")}
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    {t("careers")}
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    {t("about")}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right controls */}
            <div className="flex flex-1 items-center justify-end gap-2">
              {/* UPDATED BREAKPOINT */}
              <div className="hidden lg:block">
                <LanguageSwitcher />
              </div>
              <ThemeToggle />
              {/* UPDATED BREAKPOINT */}
              <a href="/contact" className="hidden lg:inline-flex">
                <Button variant="default">{t("contact")}</Button>
              </a>

              <Sheet>
                <SheetTrigger asChild>
                  {/* UPDATED BREAKPOINT */}
                  <Button className="lg:hidden" variant="ghost" aria-label="Open menu">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-sm glass backdrop-blur-md">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Main navigation menu for the website.</SheetDescription>
                  </SheetHeader>
                  
                  <div className="p-4">
                    <div className="font-serif text-lg font-semibold">konneckin</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {t("insights")}: Strategy, Digital, Sustainability
                    </div>
                  </div>

                  <nav className="px-4">
                    <div className="mb-3 text-xs font-medium uppercase text-muted-foreground">Main</div>
                    <ul className="space-y-2">
                      <li><a href="/" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("home")}</a></li>
                      <li><a href="/services" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("services")}</a></li>
                      <li><a href="/industries" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("industries")}</a></li>
                      <li><a href="/insights" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("insights")}</a></li>
                      <li><a href="/careers" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("careers")}</a></li>
                      <li><a href="/about" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("about")}</a></li>
                      <li><a href="/contact" className="block rounded-sm px-2 py-2 hover:bg-muted">{t("contact")}</a></li>
                    </ul>

                    <div className="mt-6 mb-3 text-xs font-medium uppercase text-muted-foreground">Legal</div>
                    <ul className="space-y-2">
                      <li><a href="/privacy-policy" className="block rounded-sm px-2 py-2 hover:bg-muted">Privacy Policy</a></li>
                      <li><a href="/terms" className="block rounded-sm px-2 py-2 hover:bg-muted">Terms of Use</a></li>
                    </ul>
                  </nav>

                  <div className="mt-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                      <LanguageSwitcher />
                      <a href="/contact">
                        <Button size="sm">{t("contact")}</Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        
        {/* Mega menu stays here and also gets the timer handlers */}
        <MegaMenu
          open={industriesOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </header>
    </>
  )
}