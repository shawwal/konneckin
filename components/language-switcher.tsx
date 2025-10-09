"use client"
import { useI18n } from "./providers"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  return (
    <Select value={locale} onValueChange={(v) => setLocale(v as any)}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Lang" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="id">Bahasa Indonesia</SelectItem>
      </SelectContent>
    </Select>
  )
}
