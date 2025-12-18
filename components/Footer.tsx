"use client";

import Image from "next/image";
import Link from "next/link";
import { branches } from "@/data/content";
import { useTranslations } from "./LanguageProvider";

export function Footer() {
  const t = useTranslations();
  const hq = branches[0];

  return (
    <footer className="mt-16 bg-gradient-to-r from-[#0a1a2e] via-[#123b7a] to-[#6f41d8] text-white">
      <div className="w-full px-4 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-16 overflow-hidden rounded-lg bg-white p-1.5 ring-2 ring-white/20">
                <Image
                  src="/BRINDAVANLOGO.jpeg"
                  alt="Brindavan Chits logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Brindavan Chits</p>
                <p className="text-xs text-white/80">Karimnagar (India) Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-white/80">{t.about.subtitle}</p>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-base font-semibold">{t.branchesSection.title}</p>
            <p className="text-white/80">{hq.address}</p>
            <p className="text-white/80">Phone: {hq.phone}</p>
            <p className="text-white/80">Cell: {hq.cell}</p>
            <Link href="/contact" className="inline-flex text-white underline decoration-white/60 underline-offset-4">
              {t.contact.title}
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-base font-semibold">{t.footer.builtBy}</p>
            <Link
              href="https://aideveloperindia.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white transition hover:bg-white/15"
            >
              <div className="relative h-10 w-12 overflow-hidden rounded-lg bg-white p-1">
                <Image
                  src="/A-LOGO.jpeg"
                  alt="AI Developer India"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="text-sm font-semibold">AI Developer India</span>
            </Link>
            <p className="text-xs text-white/70">{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

