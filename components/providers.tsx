"use client"
import { dictionaries, Locale } from "@/translations/dictionary"
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
    } catch { }
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    document.documentElement.classList.toggle("dark", t === "dark")
    try {
      localStorage.setItem("theme", t)
    } catch { }
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null
      if (saved) setLocaleState(saved)
    } catch { }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem("locale", l)
    } catch { }
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
