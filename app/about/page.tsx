"use client";

import { branches, leadership, teamMembers } from "@/data/content";
import { useLanguage, useTranslations } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = useTranslations();

  const achievements = [
    { label: lang === "en" ? "30,000+ members served" : "30,000+ సభ్యులకు సేవలు", value: "30,000+" },
    { label: lang === "en" ? "2,500+ active members" : "2,500+ యాక్టివ్ సభ్యులు", value: "2,500+" },
    { label: lang === "en" ? "17+ years experience" : "17+ ఏళ్ల అనుభవం", value: "17+" },
    { label: lang === "en" ? "3 branches across Telangana" : "తెలంగాణలో 3 శాఖలు", value: "3" },
  ];

  const departments = [
    { key: "Management", label: lang === "en" ? "Management" : "మ్యానేజ్‌మెంట్" },
    { key: "Accounting", label: lang === "en" ? "Accounting" : "అకౌంటింగ్" },
    { key: "Verification", label: lang === "en" ? "Verification" : "వెరిఫికేషన్" },
    { key: "Development", label: lang === "en" ? "Development" : "డెవలప్‌మెంట్" },
    { key: "Collection", label: lang === "en" ? "Collection" : "కలెక్షన్" },
  ];

  const grouped = departments.map((dept) => ({
    dept: dept.label,
    members: teamMembers.filter((m) => m.department === dept.key),
  }));

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#123b7a]">
          {t.about.title}
        </p>
        <h1 className="text-3xl font-semibold text-[#0a1a2e]">{t.about.subtitle}</h1>
        <p className="text-sm text-slate-600">{t.about.story}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card-surface space-y-3 p-4">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.about.companyInfoTitle}</h2>
          <p className="text-sm text-slate-600">
            Brindavan Chits Karimnagar (India) Pvt. Ltd. | Registration Address: 7-2-616,
            Mankamma Thota, Karimnagar, Telangana, India - 505001.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {branches.map((branch) => (
              <div key={branch.name.en} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm">
                <p className="font-semibold text-[#123b7a]">{branch.name[lang]}</p>
                <p className="text-slate-600">{branch.address}</p>
                <p className="text-slate-600">Phone: {branch.phone}</p>
                <p className="text-slate-600">Cell: {branch.cell}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface space-y-3 p-4">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.about.achievementsTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {achievements.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-lg font-semibold text-[#123b7a]">{item.value}</p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card-surface space-y-3 p-4">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.about.missionTitle}</h2>
          <p className="text-sm text-slate-600">{t.mission}</p>
        </div>
        <div className="card-surface space-y-3 p-4">
          <h2 className="text-xl font-semibold text-[#0a1a2e]">{t.about.valuesTitle}</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {t.values.map((value) => (
              <li key={value} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#6f41d8]" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.team.title}</h2>
        <p className="text-sm text-slate-600">{t.team.subtitle}</p>
        <div className="grid gap-3 md:grid-cols-4">
          <StatCard label={t.team.stats.members} value="22" />
          <StatCard label={t.team.stats.departments} value="5" />
          <StatCard label={t.team.stats.experience} value="17+" />
          <StatCard label={t.team.stats.served} value="30,000+" />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">Leadership</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {leadership.map((leader) => (
            <div key={leader.name.en} className="card-surface p-4">
              <p className="text-base font-semibold text-[#123b7a]">{leader.name[lang]}</p>
              <p className="text-sm text-slate-600">{leader.role[lang]}</p>
              {leader.since && <p className="text-xs text-slate-500">Since {leader.since}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-[#0a1a2e]">{t.team.subtitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {grouped.map((group) => (
            <div key={group.dept} className="card-surface p-4">
              <p className="text-base font-semibold text-[#123b7a]">{group.dept}</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {group.members.map((member) => (
                  <li key={member.name} className="flex items-center justify-between">
                    <span>{member.name}</span>
                    <span className="text-xs text-slate-500">{member.designation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xl font-semibold text-[#123b7a]">{value}</p>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
}

