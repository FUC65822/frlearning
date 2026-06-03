"use client";

import { BookOpen, Quote, Volume2 } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

export default function TextClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const tDict = dict.subPages.text;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-emerald-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8 text-center md:text-left">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-emerald-100 p-2 text-emerald-900">
            <BookOpen className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.subtitle}
          </p>
        </header>

        {/* Part 1 */}
        <section className="mb-10 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-neutral-950">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-900 text-sm text-white">01</span>
            SYMBOLES DE LA FRANCE
          </h2>
          
          <div className="space-y-8">
            <div className="group relative">
              <button onClick={() => playTTS(tDict.p1s1_fr)} className="absolute -left-12 top-0 p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                <Volume2 className="h-5 w-5" />
              </button>
              <div className="flex items-start justify-between">
                 <p className="text-lg font-medium text-neutral-950 pr-4">{tDict.p1s1_fr}</p>
                 <button onClick={() => playTTS(tDict.p1s1_fr)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-100 md:hidden flex-shrink-0">
                  <Volume2 className="h-5 w-5" />
                 </button>
              </div>
              <p className="mt-3 pl-4 border-l-2 border-stone-300 text-neutral-600">
                {tDict.p1s1_trans}
              </p>
            </div>
            
            <div className="group relative">
              <button onClick={() => playTTS(tDict.p1s2_fr)} className="absolute -left-12 top-0 p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                <Volume2 className="h-5 w-5" />
              </button>
              <div className="flex items-start justify-between">
                 <p className="text-lg font-medium text-neutral-950 pr-4">{tDict.p1s2_fr}</p>
                 <button onClick={() => playTTS(tDict.p1s2_fr)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-100 md:hidden flex-shrink-0">
                  <Volume2 className="h-5 w-5" />
                 </button>
              </div>
              <p className="mt-3 pl-4 border-l-2 border-stone-300 text-neutral-600">
                {tDict.p1s2_trans}
              </p>
            </div>
            
            <div className="group relative">
              <button onClick={() => playTTS(tDict.p1s3_fr)} className="absolute -left-12 top-0 p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                <Volume2 className="h-5 w-5" />
              </button>
              <div className="flex items-start justify-between">
                 <p className="text-lg font-medium text-neutral-950 pr-4">{tDict.p1s3_fr}</p>
                 <button onClick={() => playTTS(tDict.p1s3_fr)} className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full opacity-100 md:hidden flex-shrink-0">
                  <Volume2 className="h-5 w-5" />
                 </button>
              </div>
              <p className="mt-3 pl-4 border-l-2 border-stone-300 text-neutral-600">
                {tDict.p1s3_trans}
              </p>
            </div>
          </div>
        </section>

        {/* Part 2 */}
        <section className="mb-10 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 flex items-center gap-3 text-xl font-semibold text-neutral-950">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-900 text-sm text-white">02</span>
            T&apos;ES PAS COMME NOUS !
          </h2>
          
          <div className="mb-8 rounded-md border border-amber-200 bg-amber-50 p-5">
            <p className="leading-7 text-amber-900">
              <span className="font-semibold mb-1 block">{tDict.p2_bgTitle}</span>
              {tDict.p2_bg}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-5 text-lg font-semibold text-neutral-950 border-b border-stone-200 pb-3 flex justify-between items-center">
                {tDict.frTitle}
                <button onClick={() => playTTS(`${tDict.p2s1_fr} ${tDict.p2s2_fr} ${tDict.p2s3_fr}`)} className="text-emerald-700 hover:text-emerald-900 flex items-center gap-2 text-sm font-normal bg-emerald-50 px-3 py-1 rounded-full">
                  <Volume2 className="h-4 w-4" />
                  {dict.subPages.common.listen}
                </button>
              </h3>
              <div className="space-y-5 leading-relaxed text-neutral-700">
                <p>{tDict.p2s1_fr}</p>
                <p>{tDict.p2s2_fr}</p>
                <p className="font-medium text-neutral-950 whitespace-pre-wrap">{tDict.p2s3_fr}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-neutral-950 border-b border-stone-200 pb-3">
                {tDict.transTitle}
              </h3>
              <div className="space-y-5 leading-relaxed text-neutral-600">
                <p>{tDict.p2s1_trans}</p>
                <p>{tDict.p2s2_trans}</p>
                <p className="font-medium text-neutral-800 whitespace-pre-wrap">{tDict.p2s3_trans}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer info */}
        <section className="rounded-md border border-stone-200 bg-stone-100 p-8">
          <div className="flex gap-4">
            <Quote className="h-6 w-6 text-stone-400 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase text-neutral-500">{tDict.authorTitle}</h3>
              <p className="leading-7 text-neutral-700">
                {tDict.authorDesc}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
