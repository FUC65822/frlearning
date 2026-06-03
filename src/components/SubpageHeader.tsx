"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/dictionaries";

const GeminiIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 296 298" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="gemini-mask" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
      <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"/>
    </mask>
    <g mask="url(#gemini-mask)">
      <g filter="url(#gemini-b)"><ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"/></g>
      <g filter="url(#gemini-c)"><ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"/></g>
      <g filter="url(#gemini-d)"><ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"/></g>
      <g filter="url(#gemini-e)"><path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"/></g>
      <g filter="url(#gemini-f)"><path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"/></g>
      <g filter="url(#gemini-g)"><path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"/></g>
      <g filter="url(#gemini-h)"><path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"/></g>
    </g>
    <defs>
      <filter id="gemini-b" width="464" height="390" x="-69" y="-46" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="18"/>
      </filter>
      <filter id="gemini-c" width="265" height="273" x="-99" y="6" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="gemini-d" width="265" height="273" x="-113" y="12" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
    </defs>
  </svg>
);

export default function SubpageHeader({ dict, lang, colorTheme = "emerald", backUrl, backLabel }: { dict: Dictionary, lang: string, colorTheme?: string, backUrl?: string, backLabel?: string }) {
  const pathname = usePathname();
  const hoverColors: Record<string, string> = {
    emerald: "hover:text-emerald-900",
    teal: "hover:text-teal-900",
    cyan: "hover:text-cyan-900",
    rose: "hover:text-rose-900",
  };

  const colorClass = hoverColors[colorTheme] || hoverColors.emerald;
  const isCourse = pathname && !pathname.includes("/privacy") && !pathname.includes("/terms") && !pathname.includes("/about");

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between px-5 md:px-8">
        <Link href={backUrl || `/${lang}`} className={`inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors ${colorClass}`}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{backLabel || dict.subPages.common.backHome}</span>
        </Link>
        <LanguageSwitcher currentLang={lang} noticeText={dict.common.aiTranslationNotice} />
      </div>

      {/* Gemini AI Translation Alert Banner */}
      {isCourse && (lang === "de" || lang === "es") && (
        <div className="bg-gradient-to-r from-blue-500/[0.04] via-purple-500/[0.04] to-amber-500/[0.04] border-t border-stone-200/80 px-5 md:px-8 py-2.5 transition-colors duration-200">
          <div className="mx-auto max-w-[96rem] flex items-center gap-3 text-xs md:text-sm text-stone-600 dark:text-stone-400">
            <div className="p-1 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex-shrink-0 flex items-center justify-center">
              <GeminiIcon className="h-4 w-4" />
            </div>
            <p className="leading-relaxed">
              <span className="font-semibold text-stone-800 dark:text-stone-200 mr-1.5">
                {lang === "de" ? "Gemini AI-Übersetzung:" : "Traducción de Gemini AI:"}
              </span>
              {lang === "de"
                ? "Dieser Kurs wurde von der KI automatisch übersetzt und kann Ungenauigkeiten enthalten."
                : "Este curso ha sido traducido automáticamente por IA y puede contener imprecisiones."}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
