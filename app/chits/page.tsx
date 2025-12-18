"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  chits,
  scheduleEntries,
  howItWorksSteps,
  chitBenefits,
  faqItems,
} from "@/data/content";
import { formatCurrency } from "@/lib/utils";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

type StatusFilter = "all" | "Active" | "Upcoming";
type FrequencyFilter = "all" | "Monthly" | "Weekly";

export default function ChitsPage() {
  const { lang } = useLanguage();
  const t = useTranslations();
  const [status, setStatus] = useState<StatusFilter>("all");
  const [frequency, setFrequency] = useState<FrequencyFilter>("all");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const filtered = useMemo(() => {
    return chits.filter((chit) => {
      const statusMatch = status === "all" ? true : chit.status === status;
      const freqMatch = frequency === "all" ? true : chit.frequency === frequency;
      const minMatch = minAmount ? chit.amount >= Number(minAmount) : true;
      const maxMatch = maxAmount ? chit.amount <= Number(maxAmount) : true;
      return statusMatch && freqMatch && minMatch && maxMatch;
    });
  }, [status, frequency, minAmount, maxAmount]);

  const resetFilters = () => {
    setStatus("all");
    setFrequency("all");
    setMinAmount("");
    setMaxAmount("");
  };

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">
          {t.chitsPage.title}
        </p>
        <h1 className="text-3xl font-semibold text-[#0a1a2e]">{t.chitsPage.subtitle}</h1>
      </header>

      <section className="card-surface space-y-4 p-4 md:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#123b7a]">
            {t.actions.filter}
          </span>
          <span className="text-sm text-slate-600">{t.chitsPage.resultsCount(filtered.length)}</span>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          <Select
            label={t.chitsPage.filters.status}
            value={status}
            onChange={(value) => setStatus(value)}
            options={[
              { value: "all", label: t.chitsPage.filters.statusOptions.all },
              { value: "Active", label: t.chitsPage.filters.statusOptions.active },
              { value: "Upcoming", label: t.chitsPage.filters.statusOptions.upcoming },
            ]}
          />
          <Select
            label={t.chitsPage.filters.frequency}
            value={frequency}
            onChange={(value) => setFrequency(value)}
            options={[
              { value: "all", label: t.chitsPage.filters.frequencyOptions.all },
              { value: "Monthly", label: t.chitsPage.filters.frequencyOptions.monthly },
              { value: "Weekly", label: t.chitsPage.filters.frequencyOptions.weekly },
            ]}
          />
          <Input
            label={t.chitsPage.filters.minAmount}
            value={minAmount}
            onChange={setMinAmount}
            type="number"
          />
          <Input
            label={t.chitsPage.filters.maxAmount}
            value={maxAmount}
            onChange={setMaxAmount}
            type="number"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={resetFilters}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#123b7a] transition hover:border-[#123b7a] hover:bg-blue-50"
          >
            {t.actions.clear}
          </button>
          <Link href="/services" className="text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]">
            {t.auction.title} →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {filtered.length === 0 ? (
          <div className="col-span-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-10 text-center text-slate-600">
            {t.chitsPage.empty}
          </div>
        ) : (
          filtered.map((chit) => (
            <article key={chit.id} className="card-surface flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-[#123b7a]">{chit.name[lang]}</h3>
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
              <p className="text-2xl font-semibold" suppressHydrationWarning>
                {formatCurrency(chit.amount)}
              </p>
              <p className="text-sm text-slate-600">
                {chit.durationMonths} months · {chit.members} members ·{" "}
                {chit.frequency === "Monthly"
                  ? t.chitsPage.filters.frequencyOptions.monthly
                  : t.chitsPage.filters.frequencyOptions.weekly}
              </p>
              {chit.description && <p className="text-sm text-slate-600">{chit.description[lang]}</p>}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]"
              >
                {t.actions.contactUs} →
              </Link>
            </article>
          ))
        )}
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.schedules.title}</h2>
          <button className="pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md shadow-indigo-900/10">
            {t.schedules.download}
          </button>
        </div>
        <p className="text-sm text-slate-600">{t.schedules.subtitle}</p>
        <div className="grid gap-3 md:grid-cols-2">
          {scheduleEntries.map((entry, idx) => (
            <div key={idx} className="card-surface p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#123b7a]">{entry.category[lang]}</p>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#123b7a]">
                  {entry.series}
                </span>
              </div>
              <p className="mt-2 text-lg font-semibold">{entry.value}</p>
              <p className="mt-1 text-sm text-slate-600">
                {entry.duration} · {entry.members} members · Max bidding {entry.maxBidding}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 grid gap-3 md:grid-cols-3">
          {t.schedules.howToJoinSteps.map((step, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-[#123b7a]">
              {idx + 1}. {step}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.howItWorks.title}</h2>
        <p className="text-sm text-slate-600">{t.howItWorks.subtitle}</p>
        <div className="grid gap-3 md:grid-cols-3">
          {howItWorksSteps.map((step, idx) => (
            <div key={idx} className="card-surface h-full p-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#123b7a]">
                {idx + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#123b7a]">{step.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.description[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.howItWorks.benefitsTitle}</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {chitBenefits.map((benefit, idx) => (
            <div key={idx} className="card-surface h-full p-4">
              <h3 className="text-base font-semibold text-[#123b7a]">{benefit.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{benefit.description[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.howItWorks.faqTitle}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqItems.map((faq, idx) => (
            <div key={idx} className="card-surface p-4">
              <h3 className="text-base font-semibold text-[#123b7a]">{faq.question[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{faq.answer[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
      {label}
      <select
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
      />
    </label>
  );
}

