"use client"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type React from "react"

type Theme = "light" | "dark"
const ThemeCtx = createContext<{ theme: Theme; setTheme: (t: Theme) => void } | null>(null)

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error("useTheme must be used within Providers")
  return ctx
}

// Simple dictionaries; extendable
type Locale = "en" | "fr" | "id"
type Dict = Record<string, string>
const dictionaries: Record<Locale, Dict> = {
  en: {
    headline: "Shaping the Future, Together.",
    subheadline: "We partner with leaders to unlock transformative growth.",
    videoHeadline: "Your business in Indonesia — Launched with clarity, grown with confidence",
    videoSubheadline: "Set up your foreign-owned company, secure investor or working permit, and stay compliant — with Konneckin as your trusted local partner from day one.",
    cta_discover: "Discover Our Impact",
    latest_thinking: "Latest Thinking.",
    services: "What We Do",
    client_impact: "Client Impact",
    getInTouch: "Get in Touch",
    seeHowWeWork: "See How We Work",
    contact: "Contact Us",
    insights: "Insights",
    industries: "Industries",
    careers: "Careers",
    about: "About Us",
    home: "Home",
    learn_more: "Learn more",
  },
  fr: {
    headline: "Façonner l’avenir, ensemble.",
    subheadline: "Nous collaborons avec des dirigeants pour libérer une croissance transformatrice.",
    videoHeadline: "Votre entreprise en Indonésie — Lancée avec clarté, développée en toute confiance.",
    videoSubheadline: "Créez votre société à capitaux étrangers, obtenez un permis d'investisseur ou de travail, et restez en conformité — avec Konneckin comme partenaire local de confiance dès le premier jour.",
    cta_discover: "Découvrir notre impact",
    latest_thinking: "Dernières réflexions.",
    services: "Nos services",
    client_impact: "Impact client",
    contact: "Nous contacter",
    insights: "Analyses",
    industries: "Secteurs",
    careers: "Carrières",
    about: "À propos",
    home: "Accueil",
    learn_more: "En savoir plus",
  },
  id: {
    headline: "Membangun masa depan — bersama.",
    subheadline: "Kami bermitra dengan para pemimpin untuk membuka pertumbuhan yang transformatif.",
    videoHeadline: "Bisnis Anda di Indonesia — Dimulai dengan pasti, berkembang dengan percaya diri.",
    videoSubheadline: "Dirikan perusahaan penanaman modal asing Anda, amankan izin investor atau kerja, dan tetap patuh pada peraturan — bersama Konneckin sebagai mitra lokal terpercaya Anda sejak hari pertama.",
    cta_discover: "Jelajahi Dampak Kami",
    latest_thinking: "Wawasan Terbaru.",
    services: "Layanan",
    client_impact: "Dampak Klien",
    contact: "Hubungi Kami",
    insights: "Wawasan",
    industries: "Industri",
    careers: "Karier",
    about: "Tentang Kami",
    home: "Beranda",
    learn_more: "Pelajari lebih lanjut",
  },
}

const I18nCtx = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
} | null>(null)

export function useI18n() {
  const ctx = useContext(I18nCtx)
  if (!ctx) throw new Error("useI18n must be used within Providers")
  return ctx
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [locale, setLocaleState] = useState<Locale>("en")

  // hydrate theme from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as Theme | null
      const t = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      setThemeState(t)
      document.documentElement.classList.toggle("dark", t === "dark")
    } catch {}
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    document.documentElement.classList.toggle("dark", t === "dark")
    try {
      localStorage.setItem("theme", t)
    } catch {}
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null
      if (saved) setLocaleState(saved)
    } catch {}
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem("locale", l)
    } catch {}
  }

  const t = useMemo(() => {
    const dict = dictionaries[locale]
    return (key: string) => dict[key] ?? key
  }, [locale])

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      <I18nCtx.Provider value={{ locale, setLocale, t }}>{children}</I18nCtx.Provider>
    </ThemeCtx.Provider>
  )
}
