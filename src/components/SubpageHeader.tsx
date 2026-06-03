"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/dictionaries";

export default function SubpageHeader({ dict, lang, colorTheme = "emerald" }: { dict: Dictionary, lang: string, colorTheme?: string }) {
  const hoverColors: Record<string, string> = {
    emerald: "hover:text-emerald-900",
    teal: "hover:text-teal-900",
    cyan: "hover:text-cyan-900",
    rose: "hover:text-rose-900",
  };

  const colorClass = hoverColors[colorTheme] || hoverColors.emerald;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href={`/${lang}`} className={`inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors ${colorClass}`}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {dict.subPages.common.backHome}
        </Link>
        <LanguageSwitcher currentLang={lang} noticeText={dict.common.aiTranslationNotice} />
      </div>
    </header>
  );
}
