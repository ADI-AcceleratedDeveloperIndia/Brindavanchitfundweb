"use client";

import { newsItems } from "@/data/content";
import { formatDate } from "@/lib/utils";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

export default function NewsPage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  const sorted = [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">
          {t.newsSection.badge}
        </p>
        <h1 className="text-3xl font-semibold text-[#0a1a2e]">{t.newsSection.title}</h1>
        <p className="text-sm text-slate-600">{t.newsSection.subtitle}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {sorted.map((item) => (
          <article key={item.id} className="card-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#123b7a]" suppressHydrationWarning>
              {formatDate(item.date, lang)}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0a1a2e]">{item.title[lang]}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.summary[lang]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

