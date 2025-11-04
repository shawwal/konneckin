import type React from "react"
import type { Metadata } from "next"
import { Poppins, Heebo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileTabBar } from "@/components/mobile-tab-bar"

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const fontHeading = Heebo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://konneckin.com'),

  title: {
    default: 'Konneckin | Market Entry & Business Expansion Services',
    template: '%s | Konneckin',
  },
  description: 'Konneckin simplifies your business expansion. We provide expert market entry services, including company registration, market research, payroll, and tax solutions.',

  keywords: [
    'market entry services',
    'business expansion',
    'company registration',
    'consulting firm',
    'payroll management',
    'tax accounting',
    'market research'
  ],

  creator: 'Konneckin',
  publisher: 'Konneckin',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Konneckin | Market Entry & Business Expansion Services',
    description: 'Konneckin simplifies business expansion with expert services in market entry, company registration, payroll, and tax solutions.',
    url: 'https://konneckin.com',
    siteName: 'Konneckin',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Konneckin - Market Entry & Business Expansion Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Konneckin | Market Entry & Business Expansion Services',
    description: 'Konneckin simplifies business expansion with expert services in market entry, company registration, payroll, and tax solutions.',
    site: '@konneckin',
    creator: '@konneckin',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
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
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={<div>Loading...</div>}>
          <Providers>
            <SiteHeader />
            <main id="main-content">
              {children}
            </main>
            <div className="hidden md:block">
              <SiteFooter />
            </div>
            <MobileTabBar />
            <div className="h-16 md:hidden" aria-hidden="true" />
          </Providers>
          {isProduction && <Analytics />}
        </Suspense>
      </body>
    </html>
  )
}