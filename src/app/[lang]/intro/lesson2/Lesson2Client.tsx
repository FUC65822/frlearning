"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Volume2, Info } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { specialRulesData } from "@/lib/specialRulesData";
import { playTTS, initTTS } from "@/lib/tts";

export default function Lesson2Client({ dict, lang }: { dict: Dictionary; lang: string }) {
  const l2Dict = dict.intro.lesson2;

  useEffect(() => {
    initTTS();
  }, []);

  // Helper to render text with highlighted substring
  const renderHighlightedText = (text: string, highlight?: string) => {
    if (!highlight) return text;
    
    const parts = text.split(highlight);
    if (parts.length === 1) return text;

    return (
      <>
        {parts[0]}
        <span className="text-emerald-600 font-extrabold relative">
          {highlight}
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-emerald-500 rounded-full opacity-50"></span>
        </span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />

      <main className="mx-auto max-w-[96rem] px-5 pt-8 md:px-8 md:pt-12">
        {/* Back navigation */}
        <Link 
          href={`/${lang}/intro`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="h-4 w-4" />
          {l2Dict.back || "Back"}
        </Link>

        {/* Header */}
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl"
          >
            {l2Dict.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 md:text-xl"
          >
            {l2Dict.desc}
          </motion.p>

          {lang !== 'zh' && dict.common?.aiTranslationNotice && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-500/20"
            >
              <Info className="h-4 w-4 shrink-0 text-amber-600" />
              {dict.common.aiTranslationNotice}
            </motion.div>
          )}
        </div>

        {/* Rules */}
        <div className="space-y-10">
          {specialRulesData.map((rule, idx) => {
            const ruleTitle = rule.title[lang as keyof typeof rule.title] || rule.title.en;
            // Handle markdown-like **bold** in descriptions
            const rawDesc = rule.desc[lang as keyof typeof rule.desc] || rule.desc.en;
            const formattedDesc = rawDesc.split('\\n').map((line, i) => {
              const boldParts = line.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="mb-2 last:mb-0">
                  {boldParts.map((part, j) => 
                    j % 2 === 1 ? <strong key={j} className="font-bold text-neutral-900">{part}</strong> : part
                  )}
                </p>
              );
            });

            return (
              <motion.div 
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="border-b border-stone-100 bg-stone-50/50 p-6 sm:p-8">
                  <h2 className="flex items-center gap-3 text-2xl font-bold text-neutral-900">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm text-emerald-700">
                      {idx + 1}
                    </span>
                    {ruleTitle}
                  </h2>
                  <div className="mt-4 text-neutral-600 leading-relaxed">
                    {formattedDesc}
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {rule.examples.map((ex, eIdx) => {
                      const note = ex.note[lang as keyof typeof ex.note] || ex.note.en;
                      return (
                        <div key={eIdx} className="group relative flex flex-col justify-between rounded-xl border border-stone-100 bg-stone-50 p-5 transition-all hover:border-emerald-200 hover:bg-emerald-50/30">
                          <div>
                            <div className="mb-2 text-3xl font-medium tracking-tight text-neutral-900">
                              {renderHighlightedText(ex.text, ex.highlight)}
                            </div>
                            <div className="flex items-start gap-2 text-sm text-neutral-500">
                              <Info className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                              <p>{note}</p>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => playTTS(ex.ttsText || ex.text, 0.8)}
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm ring-1 ring-stone-200 transition-all hover:scale-110 hover:bg-emerald-50 hover:ring-emerald-300"
                            title={l2Dict.playTTS || "Play audio"}
                          >
                            <Volume2 className="h-5 w-5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
