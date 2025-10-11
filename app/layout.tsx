import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileTabBar } from "@/components/mobile-tab-bar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "konneckin",
  description: "Shaping the Future, Together.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var ls = localStorage.getItem('theme');
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var theme = ls ? ls : (mql.matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (_) {}
})();`,
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
            <SiteHeader />
            {children}
            <div className="hidden md:block">
              <SiteFooter />
            </div>
            <MobileTabBar />
            {/* spacer for bottom tabbar safe area on mobile */}
            <div className="h-16 md:hidden" aria-hidden="true" />
          </Providers>
          {isProduction && <Analytics />}
        </Suspense>
      </body>
    </html>
  )
}
