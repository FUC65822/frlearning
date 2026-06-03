"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Globe } from "lucide-react";
import { i18n } from "@/dictionaries";

export default function LanguageSwitcher({ currentLang, noticeText }: { currentLang: string, noticeText: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale: string) => {
    if (locale === currentLang) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("frlearning_lang", locale);
    }
    const newPath = pathname.replace(`/${currentLang}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  const languageNames: Record<string, string> = {
    zh: "中文",
    en: "English",
    fr: "Français",
    es: "Español",
    de: "Deutsch",
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-stone-200 hover:text-emerald-900"
      >
        <Globe className="h-4 w-4" />
        <span>{languageNames[currentLang]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {i18n.locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLang === locale
                    ? "bg-stone-100 text-emerald-900 font-semibold"
                    : "text-neutral-700 hover:bg-stone-50"
                }`}
              >
                {languageNames[locale]}
              </button>
            ))}
          </div>
          <div className="border-t border-stone-200 px-4 py-2 bg-stone-50 rounded-b-md">
            <p className="text-[10px] text-neutral-500 leading-tight">
              {noticeText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
