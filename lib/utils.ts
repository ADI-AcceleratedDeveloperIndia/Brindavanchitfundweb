import { Language } from "./types";

export const classNames = (...classes: Array<string | boolean | undefined | null>) =>
  classes.filter(Boolean).join(" ");

export function formatCurrency(value: number) {
  // Always use en-IN locale for consistent formatting (currency format is same in both languages)
  // This prevents hydration mismatches between server and client
  // Language parameter removed as currency format is consistent across languages
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: string, lang: Language) {
  return new Date(date).toLocaleDateString(lang === "en" ? "en-IN" : "te-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

