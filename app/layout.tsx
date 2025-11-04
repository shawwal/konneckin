import type React from "react"
import type { Metadata } from "next"
import { Poppins, Heebo } from "next/font/google" // Changed import
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileTabBar } from "@/components/mobile-tab-bar"

// Changed to Poppins for body/sans-serif text
const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans", // Use a generic variable
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

// Changed to Heebo for heading text
const fontHeading = Heebo({
  subsets: ["latin"],
  variable: "--font-heading", // Use a generic variable
  display: "swap",
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  // Set the base URL for resolving images and other assets
  metadataBase: new URL('https://konneckin.com'),

  // --- START: IMPROVED SECTION ---

  // Title & Description
  title: {
    default: 'Konneckin | Market Entry & Business Expansion Services', // More descriptive
    template: '%s | Konneckin',
  },
  description: 'Konneckin simplifies your business expansion. We provide expert market entry services, including company registration, market research, payroll, and tax solutions.',

  // SEO & Keywords
  keywords: [
    'market entry services',
    'business expansion',
    'company registration',
    'consulting firm',
    'payroll management',
    'tax accounting',
    'market research'
  ],

  // --- END: IMPROVED SECTION ---

  creator: 'Konneckin',
  publisher: 'Konneckin',

  // For Search Engine Crawlers - This allows indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Favicons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png', // Fallback for some browsers
    apple: '/apple-touch-icon.png', // For iOS devices
    // Add any other specific icon sizes you generated, e.g.:
    // other: [
    //   { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    // ],
  },
  manifest: '/site.webmanifest',

  // --- START: IMPROVED OPEN GRAPH & TWITTER ---

  // Open Graph (for social media sharing)
  openGraph: {
    title: 'Konneckin | Market Entry & Business Expansion Services', // Consistent title
    description: 'Konneckin simplifies business expansion with expert services in market entry, company registration, payroll, and tax solutions.', // Consistent description
    url: 'https://konneckin.com',
    siteName: 'Konneckin',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Konneckin - Market Entry & Business Expansion Services', // Descriptive alt text
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Konneckin | Market Entry & Business Expansion Services', // Consistent title
    description: 'Konneckin simplifies business expansion with expert services in market entry, company registration, payroll, and tax solutions.', // Consistent description
    site: '@konneckin',
    creator: '@konneckin',
    images: ['/og-image.png'],
  },

  // --- END: IMPROVED OPEN GRAPH & TWITTER ---
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    // Updated className with the new font variables
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable} antialiased`} suppressHydrationWarning>
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
      {/* The `font-sans` class here will now apply Poppins */}
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