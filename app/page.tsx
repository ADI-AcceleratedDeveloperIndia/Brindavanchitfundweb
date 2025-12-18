"use client";

import Link from "next/link";
import { branches, chits, newsItems } from "@/data/content";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

const featuredIds = ["classic-100k", "200k-20m", "1m", "50k-weekly"];

export default function Home() {
  const { lang } = useLanguage();
  const t = useTranslations();

  const featured = chits.filter((chit) => featuredIds.includes(chit.id)).slice(0, 4);
  const latestNews = [...newsItems]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  const upcomingChits = chits.filter((chit) => chit.status === "Upcoming");

  return (
    <div className="space-y-14">
      <section className="w-full bg-white py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 rounded-[24px] bg-white px-4 py-6 text-center shadow-[0_10px_40px_rgba(10,26,46,0.08)] md:px-6 md:py-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#0a1a2e]">
            {t.hero.badge}
          </div>
          <div className="space-y-3">
            <p className="text-gradient text-4xl font-extrabold leading-tight md:text-5xl">
              {t.hero.title}
            </p>
            <p className="text-lg font-semibold text-slate-700">{t.hero.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/chits"
              className="pill inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-md shadow-indigo-900/20 transition hover:translate-y-[-1px] hover:shadow-lg"
            >
              {t.actions.getStarted}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-[#123b7a] transition hover:border-[#123b7a] hover:bg-blue-50"
            >
              {t.actions.learnMore}
            </Link>
          </div>
          <div className="grid w-full gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-3">
            <TrustCard label={t.trust.founded} />
            <TrustCard label={t.trust.customers} />
            <TrustCard label={t.trust.active} />
          </div>

          {upcomingChits.length > 0 && (
            <div className="w-full">
              <div className="marquee-shell px-3 py-2">
                <div className="mb-1 flex items-center justify-center gap-2 px-1 text-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0a1a2e] shadow-sm">
                    UPCOMING CHITS
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <div className="marquee-track">
                    {upcomingChits.map((chit, idx) => (
                      <div key={`${chit.id}-${idx}`} className="marquee-item relative">
                        <span className="max-w-[140px] truncate text-sm font-semibold">{chit.name[lang]}</span>
                        <span className="text-base font-bold">{formatCurrency(chit.amount)}</span>
                        <span className="text-[11px] text-white/80">
                          {chit.durationMonths} months · {chit.members} members ·{" "}
                          {chit.frequency === "Monthly"
                            ? t.chitsPage.filters.frequencyOptions.monthly
                            : t.chitsPage.filters.frequencyOptions.weekly}
                        </span>
                        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          {chit.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title={t.featuredChits.title} subtitle={t.featuredChits.subtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((chit) => (
            <div key={chit.id} className="card-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#123b7a]">{chit.name[lang]}</p>
                  <p className="mt-1 text-2xl font-semibold" suppressHydrationWarning>
                    {formatCurrency(chit.amount)}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {chit.durationMonths} months · {chit.members} members ·{" "}
                    {chit.frequency === "Monthly" ? t.chitsPage.filters.frequencyOptions.monthly : t.chitsPage.filters.frequencyOptions.weekly}
                  </p>
                  {chit.description && (
                    <p className="mt-1 text-sm text-slate-600">{chit.description[lang]}</p>
                  )}
                </div>
                <span
                  className={
                    chit.status === "Active"
                      ? "rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#123b7a]"
                      : "rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700"
                  }
                >
                  {chit.status}
                </span>
              </div>
              <Link
                href="/chits"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]"
              >
                {t.actions.viewDetails} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title={t.newsSection.title} subtitle={t.newsSection.subtitle} actionHref="/news" actionLabel={t.actions.viewAll} />
        <div className="grid gap-4 md:grid-cols-3">
          {latestNews.map((item) => (
            <article key={item.id} className="card-surface p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#123b7a]" suppressHydrationWarning>
                {formatDate(item.date, lang)}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.summary[lang]}</p>
              <Link href="/news" className="mt-3 inline-flex items-center text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]">
                {t.actions.viewDetails} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title={t.branchesSection.title} subtitle={t.branchesSection.subtitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {branches.map((branch) => (
            <div key={branch.name.en} className="card-surface p-4">
              <h3 className="text-base font-semibold text-[#123b7a]">{branch.name[lang]}</h3>
              <p className="mt-2 text-sm text-slate-600">{branch.address}</p>
              <p className="mt-1 text-sm text-slate-600">Phone: {branch.phone}</p>
              <p className="mt-1 text-sm text-slate-600">Cell: {branch.cell}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]"
        >
          {t.contact.title} →
        </Link>
      </section>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  actionHref,
  actionLabel,
}: {
  title: string;
  subtitle?: string;
  actionHref?: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
      </div>
      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]"
        >
          {actionLabel} →
        </Link>
      )}
    </div>
  );
}

function TrustCard({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-[#123b7a] shadow-sm">
      {label}
    </div>
  );
}
