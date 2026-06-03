"use client";

import { Download, LayoutDashboard, Database, BarChart3, Settings, Bot } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { motion } from "framer-motion";

export default function AppMainpageClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const mDict = dict.subPages.app_mainpage;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="flex-1 space-y-6 md:pr-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700">
              {mDict.hero_badge}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-neutral-900 md:text-6xl" dangerouslySetInnerHTML={{__html: mDict.hero_title}}></h1>
            <p className="max-w-xl text-lg text-neutral-600">
              {mDict.hero_subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://github.com/FUC65822/frlearning/releases/download/%E5%AD%A6%E4%B9%A0%E6%B3%95%E8%AF%AD/learnfr.apk"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-neutral-900 px-6 font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                <Download className="h-5 w-5" />
                {mDict.hero_btn_download}
              </a>
            </div>
          </div>
          <div className="flex-1 md:flex md:justify-end">
            <div className="relative h-96 w-64 overflow-hidden rounded-[2.5rem] border-[8px] border-neutral-900 bg-white shadow-xl">
              <img src="/images/dcb7faee8a1360a2952e5f07e2a3bec4.jpg" alt="App Home" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Features Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl">{mDict.features_title}</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-stone-300"></div>
        </div>

        {/* Features List */}
        <div className="space-y-24">
          
          {/* Feature 1 */}
          <section className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1 md:order-2">
              <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-3xl border-4 border-stone-200 bg-white shadow-lg">
                <img src="/images/0753dc4c053039fe5377d3a150c728db.jpg" alt="Feature 1" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1 md:order-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900">{mDict.feature1_title}</h3>
              <p className="text-lg text-neutral-600">{mDict.feature1_desc}</p>
            </div>
          </section>

          {/* Feature 2 */}
          <section className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-3xl border-4 border-stone-200 bg-white shadow-lg">
                <img src="/images/4870de0bf5a184dd3a1a1239004ea71a.jpg" alt="Feature 2" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900">{mDict.feature2_title}</h3>
              <p className="text-lg text-neutral-600">{mDict.feature2_desc}</p>
            </div>
          </section>

          {/* Feature 3 */}
          <section className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1 md:order-2">
              <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-3xl border-4 border-stone-200 bg-white shadow-lg">
                <img src="/images/5b09ec6d46af4d78a9bb6ae919522859.jpg" alt="Feature 3" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1 md:order-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900">{mDict.feature3_title}</h3>
              <p className="text-lg text-neutral-600">{mDict.feature3_desc}</p>
            </div>
          </section>

          {/* Feature 4 */}
          <section className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-3xl border-4 border-stone-200 bg-white shadow-lg">
                <img src="/images/935a945f873595a3416bb3264777ff9d.jpg" alt="Feature 4" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-neutral-900">{mDict.feature4_title}</h3>
              <p className="text-lg text-neutral-600">{mDict.feature4_desc}</p>
            </div>
          </section>

          {/* Feature 5 (AI) */}
          <section className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm md:p-12">
            <div className="flex flex-col items-center gap-10 md:flex-row">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                  <Bot className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-neutral-900">{mDict.feature5_title}</h3>
                <p className="mb-6 text-lg text-neutral-600">{mDict.feature5_desc}</p>
                <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-600">
                  {mDict.feature5_note}
                </span>
              </div>
              <div className="flex-1 md:flex md:justify-end">
                <div className="relative mx-auto h-80 w-56 overflow-hidden rounded-3xl border-4 border-stone-200 bg-white shadow-lg">
                  <img src="/images/f4f35b99bccfc2e97b434f3e0c7b4d01.jpg" alt="AI Settings" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* CTA */}
        <section className="mt-24 rounded-2xl bg-stone-200 p-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-neutral-900">{mDict.download_title}</h2>
          <p className="mb-8 text-neutral-700">{mDict.download_subtitle}</p>
          <a
            href="https://github.com/FUC65822/frlearning/releases/download/%E5%AD%A6%E4%B9%A0%E6%B3%95%E8%AF%AD/learnfr.apk"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-neutral-900 px-8 font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            <Download className="h-5 w-5" />
            {mDict.download_button}
          </a>
        </section>

      </main>
    </div>
  );
}
