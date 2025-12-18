"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { classNames } from "@/lib/utils";
import { useLanguage, useTranslations } from "./LanguageProvider";

const navOrder = ["home", "chits", "news", "services", "about", "contact"] as const;

export function Navbar() {
  const { lang, setLanguage, toggleLanguage } = useLanguage();
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = {
    home: { label: t.nav.home, href: "/" },
    chits: { label: t.nav.chits, href: "/chits" },
    news: { label: t.nav.news, href: "/news" },
    services: { label: t.nav.services, href: "/services" },
    about: { label: t.nav.about, href: "/about" },
    contact: { label: t.nav.contact, href: "/contact" },
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="peacock-gradient">
        <div className="flex w-full items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-16 overflow-hidden rounded-lg bg-white p-1.5 ring-2 ring-white/20">
              <Image
                src="/BRINDAVANLOGO.jpeg"
                alt="Brindavan Chits logo"
                fill
                className="object-contain"
                sizes="64px"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight text-white">
              <span className="text-sm font-semibold uppercase tracking-wide">
                Brindavan Chits
              </span>
              <span className="text-xs text-white/80">Karimnagar (India) Pvt. Ltd.</span>
            </div>
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{open ? "×" : "≡"}</span>
          </button>
          <nav className="hidden items-center gap-2 text-sm font-medium text-white md:flex">
            {navOrder.map((key) => (
              <Link
                key={key}
                href={navItems[key].href}
                className={classNames(
                  "rounded-full px-4 py-2 transition-colors",
                  isActive(navItems[key].href)
                    ? "bg-white/20 text-white"
                    : "hover:bg-white/10 text-white/90",
                )}
              >
                {navItems[key].label}
              </Link>
            ))}
            <div className="ml-3 flex overflow-hidden rounded-full border border-white/25 bg-white/10">
              {(["en", "te"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={classNames(
                    "px-3 py-1 text-xs uppercase transition-colors",
                    lang === code ? "bg-white/80 text-[#0a1a2e]" : "text-white/80 hover:bg-white/20",
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
          </nav>
        </div>
        {open && (
          <div className="border-t border-white/15 bg-gradient-to-b from-[#0a1a2e] to-[#1b4f9c] px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-2 pt-2">
              {navOrder.map((key) => (
                <Link
                  key={key}
                  href={navItems[key].href}
                  onClick={() => setOpen(false)}
                  className={classNames(
                    "rounded-lg px-4 py-3 text-sm font-medium text-white",
                    isActive(navItems[key].href) ? "bg-white/15" : "bg-white/5",
                  )}
                >
                  {navItems[key].label}
                </Link>
              ))}
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-white">
                <span className="text-xs uppercase text-white/70">Language</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={classNames(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    lang === "en" ? "bg-white text-[#0a1a2e]" : "bg-white/10 text-white/80",
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("te")}
                  className={classNames(
                    "rounded-full px-3 py-1 text-xs font-semibold",
                    lang === "te" ? "bg-white text-[#0a1a2e]" : "bg-white/10 text-white/80",
                  )}
                >
                  TE
                </button>
                <button
                  onClick={toggleLanguage}
                  className="ml-auto rounded-full bg-white/15 px-3 py-1 text-xs hover:bg-white/25"
                >
                  ↔
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

