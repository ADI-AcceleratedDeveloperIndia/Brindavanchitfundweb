"use client";

import {
  auctionBenefits,
  auctionFeatures,
  auctionProcess,
  vrmBenefits,
  vrmFeatures,
} from "@/data/content";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">
          {t.servicesSection.title}
        </p>
        <h1 className="text-3xl font-semibold text-[#0a1a2e]">{t.servicesSection.subtitle}</h1>
      </header>

      <section className="card-surface p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">
              {t.auction.title}
            </p>
            <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.auction.subtitle}</h2>
          </div>
          <button className="pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md shadow-indigo-900/10">
            {t.auction.cta}
          </button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {auctionFeatures.map((feature, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <h3 className="text-base font-semibold text-[#123b7a]">{feature.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{feature.description[lang]}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a2e]">{t.auction.processTitle}</h3>
          <div className="grid gap-3 md:grid-cols-3">
            {auctionProcess.map((step, idx) => (
              <div key={idx} className="card-surface h-full border border-slate-100 p-4 shadow-none">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#123b7a]">
                  {idx + 1}
                </div>
                <h4 className="mt-2 text-base font-semibold text-[#123b7a]">{step.title[lang]}</h4>
                <p className="mt-1 text-sm text-slate-600">{step.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a2e]">{t.auction.benefitsTitle}</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {auctionBenefits.map((benefit, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <h4 className="text-base font-semibold text-[#123b7a]">{benefit.title[lang]}</h4>
                <p className="mt-1 text-sm text-slate-600">{benefit.description[lang]}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600">{t.auction.note}</p>
        </div>
      </section>

      <section className="card-surface p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">{t.vrm.title}</p>
            <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.vrm.subtitle}</h2>
          </div>
          <button className="pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md shadow-indigo-900/10">
            {t.vrm.cta}
          </button>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {vrmFeatures.map((feature, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <h3 className="text-base font-semibold text-[#123b7a]">{feature.title[lang]}</h3>
              <p className="mt-1 text-sm text-slate-600">{feature.description[lang]}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-semibold text-[#0a1a2e]">{t.vrm.benefitsTitle}</h3>
          <div className="grid gap-3 md:grid-cols-3">
            {vrmBenefits.map((benefit, idx) => (
              <div key={idx} className="card-surface h-full border border-slate-100 p-4 shadow-none">
                <h4 className="text-base font-semibold text-[#123b7a]">{benefit.title[lang]}</h4>
                <p className="mt-1 text-sm text-slate-600">{benefit.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

