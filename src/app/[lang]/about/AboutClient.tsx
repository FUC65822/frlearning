"use client";

import { Info, Target, Lightbulb, Rocket, ArrowRight } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const aDict = dict.subPages.about;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-emerald-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Hero */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-md bg-emerald-100 p-3 text-emerald-900">
              <Info className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="mb-6 text-4xl font-semibold tracking-normal text-neutral-950 md:text-6xl">
              {aDict.hero_title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 md:text-xl">
              {aDict.hero_subtitle}
            </p>
          </motion.div>
        </section>

        <div className="space-y-12">
          {/* Mission */}
          <section className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 rounded-xl border border-stone-200 bg-white p-10 shadow-sm md:order-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-600">
                <Target className="h-4 w-4" />
                {aDict.mission_tag}
              </div>
              <h2 className="mb-4 text-3xl font-semibold text-neutral-900">{aDict.mission_title}</h2>
              <p className="leading-relaxed text-neutral-700">{aDict.mission_text}</p>
            </div>
            <div className="order-1 flex items-center justify-center rounded-xl bg-stone-200 p-12 md:order-2">
              <Target className="h-32 w-32 text-stone-400" />
            </div>
          </section>

          {/* Philosophy */}
          <section className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex items-center justify-center rounded-xl bg-emerald-900 p-12">
              <Lightbulb className="h-32 w-32 text-emerald-700" />
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-10 shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-900">
                <Lightbulb className="h-4 w-4" />
                {aDict.philosophy_tag}
              </div>
              <h2 className="mb-4 text-3xl font-semibold text-neutral-900">{aDict.philosophy_title}</h2>
              <p className="leading-relaxed text-neutral-700">{aDict.philosophy_text}</p>
            </div>
          </section>

          {/* Story */}
          <section className="rounded-xl border border-stone-200 bg-white p-10 shadow-sm md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-600">
                <Rocket className="h-4 w-4" />
                {aDict.story_tag}
              </div>
              <h2 className="mb-6 text-3xl font-semibold text-neutral-900">{aDict.story_title}</h2>
              <p className="text-lg leading-relaxed text-neutral-700">{aDict.story_text}</p>
            </div>
            <Rocket className="absolute -bottom-10 -right-10 h-64 w-64 text-stone-100/50" />
          </section>
        </div>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-neutral-900">{aDict.cta_title}</h2>
          <p className="mb-8 text-neutral-600">{aDict.cta_subtitle}</p>
          <Link
            href={`/${lang}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-900 px-8 text-base font-semibold text-white transition-colors hover:bg-emerald-950"
          >
            {aDict.cta_button}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </section>

      </main>
    </div>
  );
}
