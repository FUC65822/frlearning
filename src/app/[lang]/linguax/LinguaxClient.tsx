"use client";

import { Presentation, Briefcase, Route, GraduationCap, Languages, Target, ArrowRight } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function LinguaxClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const lxDict = dict.subPages.linguax;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Hero */}
        <section className="mb-24 text-center">
          <h1 className="mb-6 text-5xl font-semibold uppercase tracking-tight text-neutral-900 md:text-7xl">
            <span className="block text-emerald-900">{lxDict.heroTitle1}</span>
            <span>{lxDict.heroTitle2}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            {lxDict.heroSubtitle}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#courses"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-900 px-8 font-semibold text-white transition-colors hover:bg-emerald-950"
            >
              {lxDict.heroButton}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-semibold text-neutral-900 md:text-4xl">
            {lxDict.featuresTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <Presentation className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">{lxDict.feature1Title}</h3>
              <p className="text-neutral-600">{lxDict.feature1Desc}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <Languages className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">{lxDict.feature2Title}</h3>
              <p className="text-neutral-600">{lxDict.feature2Desc}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <Route className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-4 text-xl font-semibold text-neutral-900">{lxDict.feature3Title}</h3>
              <p className="text-neutral-600">{lxDict.feature3Desc}</p>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section id="instructors" className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-semibold text-neutral-900 md:text-4xl">
            {lxDict.instructorsTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                {lxDict.tagPhD}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">{lxDict.instructor1Title}</h3>
              <p className="mb-4 font-medium text-emerald-700">{lxDict.instructor1Subtitle}</p>
              <p className="text-sm text-neutral-600">{lxDict.instructor1Desc}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                {lxDict.tagCATTI}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">{lxDict.instructor2Title}</h3>
              <p className="mb-4 font-medium text-emerald-700">{lxDict.instructor2Subtitle}</p>
              <p className="text-sm text-neutral-600">{lxDict.instructor2Desc}</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                {lxDict.tagExpert}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">{lxDict.instructor3Title}</h3>
              <p className="mb-4 font-medium text-emerald-700">{lxDict.instructor3Subtitle}</p>
              <p className="text-sm text-neutral-600">{lxDict.instructor3Desc}</p>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="mb-24 rounded-2xl bg-stone-100 p-8 md:p-16">
          <h2 className="mb-12 text-center text-3xl font-semibold text-neutral-900 md:text-4xl">
            {lxDict.coursesTitle}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900" dangerouslySetInnerHTML={{__html: lxDict.course1Title}}></h3>
              <p className="mb-8 flex-grow text-neutral-600">{lxDict.course1Desc}</p>
              <button className="w-full rounded-md bg-stone-100 py-3 font-semibold text-stone-700 transition-colors hover:bg-stone-200 hover:text-emerald-900">
                {lxDict.courseButton}
              </button>
            </div>
            <div className="flex flex-col rounded-xl bg-white p-8 shadow-sm border-2 border-emerald-900">
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900" dangerouslySetInnerHTML={{__html: lxDict.course2Title}}></h3>
              <p className="mb-8 flex-grow text-neutral-600">{lxDict.course2Desc}</p>
              <button className="w-full rounded-md bg-emerald-900 py-3 font-semibold text-white transition-colors hover:bg-emerald-950">
                {lxDict.courseButton_2}
              </button>
            </div>
            <div className="flex flex-col rounded-xl bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900" dangerouslySetInnerHTML={{__html: lxDict.course3Title}}></h3>
              <p className="mb-8 flex-grow text-neutral-600">{lxDict.course3Desc}</p>
              <button className="w-full rounded-md bg-stone-100 py-3 font-semibold text-stone-700 transition-colors hover:bg-stone-200 hover:text-emerald-900">
                {lxDict.courseButton_3}
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
