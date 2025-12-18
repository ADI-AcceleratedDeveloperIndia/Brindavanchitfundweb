"use client";

import { Footer } from "./Footer";
import { LanguageProvider } from "./LanguageProvider";
import { Navbar } from "./Navbar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <main className="w-full pb-16 pt-10">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

