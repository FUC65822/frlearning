"use client";

import { Flag, Map, Landmark, ChevronDown } from "lucide-react";
import { useState } from "react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function FranceClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [openFactIndex, setOpenFactIndex] = useState<number | null>(null);
  const tDict = dict.subPages.france;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-blue-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="blue" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-100 p-2 text-blue-900">
            <Flag className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.desc}
          </p>
        </header>

        {/* Overview & History */}
        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-2xl font-semibold text-neutral-950">{tDict.historyTitle}</h2>
          <div className="relative border-l border-stone-200 ml-3 md:ml-4 space-y-8">
            {tDict.history.map((item: any, idx: number) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white"></div>
                <h3 className="font-semibold text-neutral-900 mb-1">{item.period}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scenery */}
        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <Map className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.geoTitle}</h2>
          </div>
          <p className="mb-6 text-sm text-neutral-600">{tDict.geoDesc}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {tDict.scenery.map((item: any, idx: number) => (
              <div key={idx} className="rounded-md border border-stone-200 bg-stone-50 p-5 hover:border-blue-300 transition-colors">
                <h3 className="mb-2 font-semibold text-blue-900">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <Landmark className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.landmarksTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tDict.landmarks.map((item: any, idx: number) => (
              <div key={idx} className="rounded-md border border-stone-200 p-5 hover:bg-stone-50 transition-colors">
                <h3 className="mb-2 font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fun Facts Accordion */}
        <section className="rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-950">{tDict.funFactsTitle}</h2>
          <div className="space-y-4">
            {tDict.funFacts.map((fact: any, idx: number) => {
              const isOpen = openFactIndex === idx;
              return (
                <div key={idx} className="rounded-md border border-stone-200 bg-stone-50 overflow-hidden">
                  <button
                    onClick={() => setOpenFactIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-4 text-left font-medium text-neutral-900 hover:bg-stone-100 transition-colors focus:outline-none"
                  >
                    <span>{fact.q}</span>
                    <ChevronDown className={`h-5 w-5 text-neutral-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-sm text-blue-800 border-t border-stone-200 mt-2 bg-blue-50/50">
                      <p className="mt-2 font-medium">{fact.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}
