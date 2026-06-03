"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Columns,
  FileText,
  Flag,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Mail,
  MessageSquareText,
  PlayCircle,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/dictionaries";

export default function HomeClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [activeModal, setActiveModal] = useState<"none" | "civi" | "text">("none");

  const closeModal = () => setActiveModal("none");

  const metrics = [
    { value: "8+", label: dict.hero.metrics.m1 },
    { value: "3", label: dict.hero.metrics.m2 },
    { value: "24/7", label: dict.hero.metrics.m3 },
  ];

  const solutions = [
    {
      title: dict.solutions.items[0].title,
      desc: dict.solutions.items[0].desc,
      icon: BriefcaseBusiness,
    },
    {
      title: dict.solutions.items[1].title,
      desc: dict.solutions.items[1].desc,
      icon: LayoutDashboard,
    },
    {
      title: dict.solutions.items[2].title,
      desc: dict.solutions.items[2].desc,
      icon: Building2,
    },
  ];

  const resources = [
    { title: dict.resources.introTitle, desc: dict.resources.introDesc, href: `/${lang}/intro`, icon: PlayCircle },
    { title: dict.resources.items[2].title, desc: dict.resources.items[2].desc, href: `/${lang}/temps`, icon: MessageSquareText },
    { title: dict.resources.items[3].title, desc: dict.resources.items[3].desc, href: `/${lang}/number`, icon: FileText },
    { title: dict.resources.items[4].title, desc: dict.resources.items[4].desc, href: `/${lang}/magasin`, icon: BookOpen },
    { title: dict.resources.items[5].title, desc: dict.resources.items[5].desc, href: `/${lang}/france`, icon: Flag },
  ];

  const advantages = dict.method.items;

  return (
    <main className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-emerald-200 selection:text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[96rem] items-center justify-between px-5 md:px-8">
          <Link href={`/${lang}`} className="flex items-center gap-3" aria-label={dict.nav.home}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-stone-50">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-semibold tracking-normal">FrLearning</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <a className="transition-colors hover:text-emerald-800" href="#solutions">
              {dict.nav.solutions}
            </a>
            <a className="transition-colors hover:text-emerald-800" href="#resources">
              {dict.nav.resources}
            </a>
            <a className="transition-colors hover:text-emerald-800" href="#contact">
              {dict.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} noticeText={dict.common.aiTranslationNotice} />
            <a
              href="#resources"
              className="hidden md:inline-flex h-11 items-center justify-center gap-2 rounded-md bg-emerald-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-950"
            >
              {dict.nav.viewEntry}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-200 bg-stone-100">
        <div className="mx-auto grid max-w-[96rem] items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-900/20 bg-white px-3 py-2 text-sm font-semibold text-emerald-900 shadow-sm">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {dict.hero.tag}
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-neutral-950 md:text-6xl">
              {dict.hero.title1}<br />{dict.hero.title2}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-700 md:text-xl">
              {dict.hero.desc}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solutions"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 text-base font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                {dict.hero.primaryBtn}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#resources"
                className="inline-flex h-12 items-center justify-center rounded-md border border-stone-300 bg-white px-6 text-base font-semibold text-neutral-950 transition-colors hover:border-emerald-900 hover:text-emerald-900"
              >
                {dict.hero.secondaryBtn}
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-stone-300 border-y border-stone-300 py-5">
              {metrics.map((metric) => (
                <div key={metric.label} className="px-4 first:pl-0 last:pr-0">
                  <p className="text-2xl font-semibold text-neutral-950">{metric.value}</p>
                  <p className="mt-1 text-sm text-neutral-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-md border border-stone-300 bg-white shadow-2xl shadow-neutral-950/10">
              <Image
                src="/corporate-learning-hero.png"
                alt="Hero Image"
                width={1792}
                height={1024}
                priority
                className="aspect-[4/3] w-full object-cover lg:aspect-[16/11]"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-md border border-stone-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm md:left-auto md:w-80">
              <p className="text-sm font-semibold text-neutral-950">{dict.hero.featureTitle}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {dict.hero.featureDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[96rem] px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-emerald-900">{dict.solutions.tag}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-5xl">{dict.solutions.title}</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              {dict.solutions.desc}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.title} className="rounded-md border border-stone-200 bg-stone-50 p-7">
                <item.icon className="h-8 w-8 text-emerald-900" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-neutral-950 py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-[96rem] gap-12 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-amber-300">{dict.method.tag}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-5xl">{dict.method.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="rounded-md border border-white/15 bg-white/5 p-5">
                <CheckCircle2 className="h-5 w-5 text-amber-300" aria-hidden="true" />
                <p className="mt-4 font-medium leading-7 text-stone-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-stone-50 py-20 md:py-24">
        <div className="mx-auto max-w-[96rem] px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-normal text-emerald-900">{dict.resources.tag}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-5xl">{dict.resources.title}</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-700">
                {dict.resources.desc}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("https") ? "_blank" : undefined}
                rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                className="group rounded-md border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-900 hover:shadow-xl hover:shadow-neutral-950/10"
              >
                <div className="flex items-start justify-between gap-5">
                  <item.icon className="h-8 w-8 text-emerald-900" aria-hidden="true" />
                  <ArrowRight className="h-5 w-5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-emerald-900" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{item.desc}</p>
              </a>
            ))}

          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-[96rem] gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-stone-200 bg-stone-50 p-8">
            <Globe className="h-9 w-9 text-emerald-900" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-semibold tracking-normal">{dict.features.title}</h2>
            <p className="mt-5 leading-8 text-neutral-700">
              {dict.features.desc}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-md border border-stone-200 p-6">
              <Users className="h-8 w-8 text-emerald-900" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{dict.features.f1Title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{dict.features.f1Desc}</p>
            </div>
            <div className="rounded-md border border-stone-200 p-6">
              <Lock className="h-8 w-8 text-emerald-900" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{dict.features.f2Title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{dict.features.f2Desc}</p>
            </div>
            <div className="rounded-md border border-stone-200 p-6 sm:col-span-2">
              <Flag className="h-8 w-8 text-emerald-900" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">{dict.features.f3Title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{dict.features.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-[96rem] px-5 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-950 text-stone-50">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-semibold">FrLearning</span>
              </div>
              <p className="mt-5 max-w-md leading-7 text-neutral-700">
                {dict.footer.desc}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">{dict.footer.nav}</h3>
              <ul className="mt-4 space-y-3 text-neutral-700">
                <li>
                  <a className="hover:text-emerald-900" href="#solutions">
                    {dict.nav.solutions}
                  </a>
                </li>
                <li>
                  <a className="hover:text-emerald-900" href="#resources">
                    {dict.nav.resources}
                  </a>
                </li>

              </ul>
            </div>

            <div>
              <h3 className="font-semibold">{dict.footer.contact}</h3>
              <a className="mt-4 inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-900" href="mailto:support@learnfr.de">
                <Mail className="h-4 w-4" aria-hidden="true" />
                support@learnfr.de
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-300 pt-6 sm:flex-row">
            <div className="text-sm text-neutral-600">
              Copyright 2026 Hugo. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <Link href={`/${lang}/privacy`} className="hover:text-emerald-900">
                {dict.subPages.common.privacyLink || "Privacy Policy"}
              </Link>
              <Link href={`/${lang}/terms`} className="hover:text-emerald-900">
                {dict.subPages.common.termsLink || "Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {activeModal !== "none" && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              className="relative w-full max-w-md overflow-hidden rounded-md border border-stone-200 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-stone-200 p-6">
                <h3 className="text-xl font-semibold">{activeModal === "civi" ? dict.modal.civiTitle : dict.modal.textTitle}</h3>
                <button
                  onClick={closeModal}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-stone-100 hover:text-neutral-950"
                  aria-label={dict.common.close}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="space-y-3 p-6">
                {activeModal === "civi" ? (
                  <>
                    <Link
                      href={`/${lang}/civilization/civi11`}
                      className="flex items-center justify-between rounded-md border border-stone-200 bg-stone-50 p-4 font-medium transition-colors hover:border-emerald-900 hover:text-emerald-900"
                    >
                      {dict.modal.civiLink}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <button disabled className="w-full rounded-md border border-dashed border-stone-300 p-4 text-left font-medium text-neutral-400">
                      {dict.modal.soon}
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/${lang}/text/c11`}
                      className="flex items-center justify-between rounded-md border border-stone-200 bg-stone-50 p-4 font-medium transition-colors hover:border-emerald-900 hover:text-emerald-900"
                    >
                      {dict.modal.textLink}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <button disabled className="w-full rounded-md border border-dashed border-stone-300 p-4 text-left font-medium text-neutral-400">
                      {dict.modal.soon}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
