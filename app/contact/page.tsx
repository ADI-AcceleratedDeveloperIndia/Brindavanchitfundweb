"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { branches } from "@/data/content";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

type FormState = {
  name: string;
  phone: string;
  message: string;
  preferredTime: string;
};

export default function ContactPage() {
  const t = useTranslations();
  const { lang } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
    preferredTime: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  const updateField = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">{t.contact.title}</p>
        <h1 className="text-3xl font-semibold text-[#0a1a2e]">{t.contact.subtitle}</h1>
      </header>

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="card-surface space-y-4 p-4 md:p-6">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.contact.formTitle}</h2>
          <p className="text-sm text-slate-600">{t.contact.formDescription}</p>

          <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
            {t.contact.name}
            <input
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
            {t.contact.phone}
            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
            {t.contact.message}
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="min-h-[120px] rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-[#0a1a2e]">
            {t.contact.preferredTime}
            <input
              value={form.preferredTime}
              onChange={(e) => updateField("preferredTime", e.target.value)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-[#123b7a] focus:ring-2 focus:ring-[#6f41d8]/30"
              placeholder="10:00 AM - 6:00 PM"
            />
          </label>

          {status === "success" && (
            <p className="rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-[#123b7a]">
              {t.contact.success}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
              Please fill all required fields.
            </p>
          )}

          <button
            type="submit"
            className="pill inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-md shadow-indigo-900/15"
          >
            {t.contact.submit}
          </button>
        </form>

        <div className="card-surface space-y-4 p-4 md:p-6">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.branchesSection.title}</h2>
          <p className="text-sm text-slate-600">{t.branchesSection.subtitle}</p>
          <div className="grid gap-3">
            {branches.map((branch) => (
              <div key={branch.name.en} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-base font-semibold text-[#123b7a]">{branch.name[lang]}</p>
                <p className="text-sm text-slate-600">{branch.address}</p>
                <p className="text-sm text-slate-600">Phone: {branch.phone}</p>
                <p className="text-sm text-slate-600">Cell: {branch.cell}</p>
              </div>
            ))}
          </div>
          <Link
            href="/chits"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#123b7a] hover:text-[#6f41d8]"
          >
            {t.actions.getStarted} →
          </Link>
        </div>
      </div>
    </div>
  );
}

