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
  // Set the base URL for resolving images and other assets
  metadataBase: new URL('https://www.konneckin.com'), // <-- IMPORTANT: REPLACE WITH YOUR DOMAIN

  // Title & Description
  title: {
    default: 'Konneckin | Shaping the Future, Together.',
    template: '%s | Konneckin', // For sub-pages: "Services | Konneckin"
  },
  description: 'Konneckin provides expert strategy, digital, and sustainability consulting to help businesses navigate complexity and shape a better future.',
  
  // SEO & Keywords
  keywords: ['consulting', 'strategy', 'digital transformation', 'sustainability', 'business growth', 'innovation'],
  creator: 'Konneckin',
  publisher: 'Konneckin',
  
  // For Search Engine Crawlers - PREVENTS INDEXING
  robots: {
    index: false,
    follow: false, // Prevents crawlers from following links from this page
    googleBot: {
      index: false,
      follow: false,
    },
  },

  // Favicons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Web App Manifest for PWAs
  // manifest: '/site.webmanifest',

  // Open Graph (for social media sharing on Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Konneckin | Shaping the Future, Together.',
    description: 'Expert strategy, digital, and sustainability consulting.',
    // url: 'https://www.konneckin.com', 
    url: 'https://konneckin.shawwals.com', // <-- IMPORTANT: REPLACE WITH YOUR DOMAIN
    siteName: 'Konneckin',
    images: [
      {
        url: '/og-image.png', // <-- IMPORTANT: IMAGE PATH
        width: 1200,
        height: 630,
        alt: 'Konneckin - Shaping the Future, Together.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card (for sharing on Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Konneckin | Shaping the Future, Together.',
    description: 'Expert strategy, digital, and sustainability consulting.',
    site: '@konneckin', // <-- IMPORTANT: REPLACE WITH YOUR TWITTER HANDLE
    creator: '@konneckin', // <-- IMPORTANT: REPLACE WITH YOUR TWITTER HANDLE
    images: ['/og-image.png'], // <-- IMPORTANT: IMAGE PATH
  },
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
