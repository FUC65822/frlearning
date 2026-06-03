"use client";

import { FileText } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function TermsClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const tDict = dict.subPages.terms;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-stone-200 p-2 text-stone-700">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            {tDict.lastUpdated}
          </p>
        </header>

        <article className="prose prose-stone max-w-none rounded-md border border-stone-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="space-y-8 text-neutral-700">
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">{tDict.p1Title}</h2>
              <p className="leading-relaxed">{tDict.p1Desc}</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">{tDict.p2Title}</h2>
              <p className="leading-relaxed">{tDict.p2Desc}</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 mb-3">{tDict.p3Title}</h2>
              <p className="leading-relaxed">{tDict.p3Desc}</p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
