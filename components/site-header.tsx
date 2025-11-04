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
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const { t } = useI18n()
  const pathname = usePathname()
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  // Ref to hold the timer ID for hover intent
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  // When mouse enters either the link OR the menu, cancel any pending close actions
  const handleServicesMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }
    setServicesMenuOpen(true)
  }

  // When mouse leaves either the link OR the menu, start a timer to close it
  const handleServicesMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setServicesMenuOpen(false)
    }, 200) // 200ms grace period
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={cn("sticky top-0 z-50 w-full")}>
        <div className="glass backdrop-blur-md">
          <div className="mx-auto flex container items-center justify-between px-4 lg:px-0 py-3">
            <div className="flex flex-1 items-center">
              <Link href="/">
                {/* Light Mode Logo */}
                <Image
                  src="/konneckin-logo.png"
                  alt="Konneckin Logo"
                  width={752}
                  height={98}
                  className="block h-8 w-auto dark:hidden"
                  style={{
                    width: 'auto',
                    height: '2rem',
                    aspectRatio: '752/98'
                  }}
                  priority
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/konneckin-logo-white.png"
                  alt="Konneckin Logo"
                  width={752}
                  height={98}
                  className="hidden h-8 w-auto dark:block"
                  style={{
                    width: 'auto',
                    height: '2rem',
                    aspectRatio: '752/98'
                  }}
                  priority
                />
              </Link>
            </div>

            {/* Centered nav (desktop) */}
            <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <ul className="flex items-center gap-6 text-sm">
                <li
                  className="relative"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link 
                    href="/services" 
                    className={cn(
                      "hover:underline transition-colors",
                      isActive("/services") ? "text-primary font-medium" : ""
                    )}
                  >
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/industries" 
                    className={cn(
                      "hover:underline transition-colors",
                      isActive("/industries") ? "text-primary font-medium" : ""
                    )}
                  >
                    {t("industries")}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/insights" 
                    className={cn(
                      "hover:underline transition-colors",
                      isActive("/insights") ? "text-primary font-medium" : ""
                    )}
                  >
                    {t("insights")}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers" 
                    className={cn(
                      "hover:underline transition-colors",
                      isActive("/careers") ? "text-primary font-medium" : ""
                    )}
                  >
                    {t("careers")}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={cn(
                      "hover:underline transition-colors",
                      isActive("/about") ? "text-primary font-medium" : ""
                    )}
                  >
                    {t("about")}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right controls */}
            <div className="flex flex-1 items-center justify-end gap-2">
              <div className="hidden lg:block">
                {/* <LanguageSwitcher /> */}
              </div>
              <ThemeToggle />
              <Link href="/contact" className="hidden lg:inline-flex">
                <Button variant="default">{t("contact")}</Button>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
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
                      <li>
                        <Link 
                          href="/" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("home")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/services" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/services") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("services")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/industries" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/industries") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("industries")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/insights" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/insights") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("insights")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/careers" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/careers") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("careers")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/about" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/about") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("about")}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/contact" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/contact") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          {t("contact")}
                        </Link>
                      </li>
                    </ul>

                    <div className="mt-6 mb-3 text-xs font-medium uppercase text-muted-foreground">Legal</div>
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          href="/privacy-policy" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/privacy-policy") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/terms" 
                          className={cn(
                            "block rounded-sm px-2 py-2 hover:bg-muted transition-colors",
                            isActive("/terms") ? "bg-primary/10 text-primary font-medium" : ""
                          )}
                        >
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="mt-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                      {/* <LanguageSwitcher /> */}
                      <Link href="/contact">
                        <Button size="sm">{t("contact")}</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Mega menu is now controlled by the services link hover state */}
        <MegaMenu
          open={servicesMenuOpen}
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
        />
      </header>
    </>
  )
}