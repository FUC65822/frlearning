"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function IntroClient({ dict, lang }: { dict: Dictionary; lang: string }) {
  const introData = dict.intro;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />

      <main className="mx-auto max-w-[96rem] px-5 py-12 md:px-8 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:grid-cols-[0.8fr_1.2fr]">
          
          {/* Left Column: Title & Info (Sticky on Large Screens) */}
          <div className="lg:sticky lg:top-32 lg:h-max">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-left"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 shadow-sm">
                <PlayCircle className="h-7 w-7" aria-hidden="true" />
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-normal md:text-5xl lg:text-6xl">{introData.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl lg:max-w-md">{introData.desc}</p>
              
              <div className="mt-10 hidden border-t border-stone-200 pt-8 lg:block">
                {/* Optional decorative element or additional info space to fill the left column */}
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-neutral-950">Course Structure</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Follow the timeline on the right. Complete each module step by step to build a solid foundation in your language journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative ml-4 border-l-2 border-stone-200 pl-8 md:ml-6 md:pl-10 lg:ml-0 lg:py-4">
            {introData.timeline.map((lesson: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-stone-50 bg-emerald-500 shadow-sm md:-left-[49px]"></div>
                
                <div className="group rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <span className="mb-3 inline-block rounded-md bg-stone-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">Module {index + 1}</span>
                      <h3 className="text-xl font-semibold text-neutral-950 md:text-2xl">{lesson.title}</h3>
                      <p className="mt-3 leading-relaxed text-neutral-600">{lesson.desc}</p>
                    </div>
                    {index <= 1 ? (
                      <Link
                        href={`/${lang}/intro/lesson${index + 1}`}
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow"
                        aria-label={introData.start}
                      >
                        {introData.start}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-stone-100 px-6 text-sm font-medium text-stone-400 transition-colors disabled:opacity-60"
                        aria-label={introData.soon || "Coming soon"}
                      >
                        {introData.soon || "Coming soon"}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
