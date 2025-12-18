"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/content";
import { Language } from "@/lib/types";

type LanguageContextValue = {
  lang: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "te") {
      requestAnimationFrame(() => {
        setLang((current) => (current === stored ? current : stored));
      });
    }
  }, []);

  const setLanguage = (value: Language) => {
    setLang(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", value);
    }
  };

  const toggleLanguage = () => {
    setLanguage(lang === "en" ? "te" : "en");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function useTranslations() {
  const { lang } = useLanguage();
  return translations[lang];
}

