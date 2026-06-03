"use client";

import { BookOpen, Quote, Volume2 } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

export default function TextC12Client({ dict, lang }: { dict: Dictionary, lang: string }) {
  const tDict = dict.subPages.text_c12;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-stone-200 p-2 text-stone-700">
            <BookOpen className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            {tDict.subtitle}
          </p>
        </header>

        <div className="space-y-12">
          {/* Story 1 */}
          <article className="rounded-md border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-semibold text-neutral-900 md:text-2xl">
              {tDict.s1Title}
            </h2>
            <div className="space-y-6 text-neutral-700">
              {[tDict.s1P1, tDict.s1P2, tDict.s1P3, tDict.s1P4, tDict.s1P5].map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => playTTS([tDict.s1P1, tDict.s1P2, tDict.s1P3, tDict.s1P4, tDict.s1P5].join(" "), lang)}
                className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 hover:text-emerald-900"
              >
                <Volume2 className="h-4 w-4" />
                {dict.subPages.common.listen || "Listen"}
              </button>
            </div>
          </article>

          {/* Story 2 */}
          <article className="rounded-md border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-xl font-semibold text-neutral-900 md:text-2xl">
              {tDict.s2Title}
            </h2>
            <div className="mb-6 flex justify-end text-sm text-neutral-500">
              {tDict.s2P1}
            </div>
            <div className="space-y-4 text-neutral-700">
              {[tDict.s2P2, tDict.s2P3, tDict.s2P4, tDict.s2P5, tDict.s2P6, tDict.s2P7].map((p, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <Quote className="h-4 w-4 text-stone-300" />
                  </div>
                  <p className="leading-relaxed text-stone-600">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => playTTS([tDict.s2P2, tDict.s2P3, tDict.s2P4, tDict.s2P5, tDict.s2P6, tDict.s2P7].join(" "), lang)}
                className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200 hover:text-emerald-900"
              >
                <Volume2 className="h-4 w-4" />
                {dict.subPages.common.listen || "Listen"}
              </button>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
