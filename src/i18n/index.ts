import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ar, type Dictionary } from "./ar";
import { en } from "./en";
import {
  dealership,
  formatMileage,
  formatNumber,
  formatPrice,
  type Language,
} from "@/config/dealership";

export type { Dictionary };
export type { Language };

export const dictionaries: Record<Language, Dictionary> = { ar, en };

export const STORAGE_KEY = "elite-motors:lang";

export const availableLanguages: Language[] = dealership.bilingual ? ["ar", "en"] : ["en"];

export const resolveLanguage = (value: string | null | undefined): Language | null =>
  value === "ar" || value === "en" ? value : null;

export const dirFor = (lang: Language) => (lang === "ar" ? "rtl" : "ltr");

type I18nContextValue = {
  lang: Language;
  dir: "rtl" | "ltr";
  t: Dictionary;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  /** Formats a price using the configured currency and active locale. */
  price: (value: number) => string;
  /** Formats a km value using the configured distance unit. */
  mileage: (km: number) => string;
  num: (value: number) => string;
};

const initialLang: Language = dealership.bilingual ? dealership.defaultLanguage : "en";

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(initialLang);

  // Restore the saved preference after hydration (SSR-safe).
  useEffect(() => {
    if (!dealership.bilingual) return;
    const saved = resolveLanguage(window.localStorage.getItem(STORAGE_KEY));
    if (saved && saved !== lang) setLangState(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep <html lang/dir> in sync without a page reload.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirFor(lang);
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — preference simply isn't persisted */
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      dir: dirFor(lang),
      t: dictionaries[lang],
      setLang,
      toggleLang: () => setLang(lang === "ar" ? "en" : "ar"),
      price: (v: number) => formatPrice(v, lang),
      mileage: (km: number) => formatMileage(km, lang),
      num: (v: number) => formatNumber(v, lang),
    }),
    [lang, setLang],
  );

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
