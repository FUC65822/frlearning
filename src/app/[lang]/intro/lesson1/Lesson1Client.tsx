"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronDown, Gamepad2, ArrowDown } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { phoneticsData } from "@/lib/phoneticsData";
import { playTTS, initTTS } from "@/lib/tts";
import PracticeModule from "./PracticeModule";

export default function Lesson1Client({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [activeTab, setActiveTab] = useState<"vowel" | "semiVowel" | "consonant" | "nasal">("vowel");
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [showPractice, setShowPractice] = useState(false);

  const l1Dict = dict.intro?.lesson1;
  const pDict = l1Dict?.practice;

  const tabs = [
    { id: "vowel", label: l1Dict?.tabs.vowel || "元音 (Voyelles)" },
    { id: "semiVowel", label: l1Dict?.tabs.semiVowel || "半元音 (Semi-voyelles)" },
    { id: "consonant", label: l1Dict?.tabs.consonant || "辅音 (Consonnes)" },
    { id: "nasal", label: l1Dict?.tabs.nasal || "鼻化元音 (Voyelles nasales)" }
  ] as const;

  const getCategory = (id: string) => {
    if (id === "semiVowel") return "semi-vowel";
    return id;
  };

  const currentData = phoneticsData.filter(item => item.category === getCategory(activeTab));

  useEffect(() => {
    initTTS();
  }, []);

  const toggleAccordion = (symbol: string) => {
    setOpenCardId(prev => (prev === symbol ? null : symbol));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 pb-20">
      <SubpageHeader 
        dict={dict} 
        lang={lang} 
        colorTheme="emerald" 
        backUrl={`/${lang}/intro`}
        backLabel={l1Dict?.back || "返回课程页"}
      />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold md:text-5xl">{l1Dict?.title || "第一课：字母与核心发音"}</h1>
          <p className="mt-4 text-lg text-neutral-600">{l1Dict?.desc || "点击下方音标了解发音规则并聆听纯正法语发音"}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "text-emerald-900" : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-emerald-600"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 items-start">
          {currentData.map((item) => {
            const isOpen = openCardId === item.symbol;
            return (
              <div 
                key={item.symbol} 
                className={`overflow-hidden rounded-xl border bg-white transition-all ${
                  isOpen ? "border-emerald-500 shadow-md ring-1 ring-emerald-500" : "border-stone-200 shadow-sm hover:border-emerald-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.symbol)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-xl font-bold text-emerald-900">
                      [{item.symbol}]
                    </div>
                    <span className="font-semibold text-neutral-900">{l1Dict?.rules || "发音要领与拼写"}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-neutral-400 transition-transform ${isOpen ? "rotate-180 text-emerald-900" : ""}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-stone-100 bg-stone-50/50 p-5 pt-4">
                        <p className="mb-4 text-sm leading-relaxed text-neutral-700">
                          {typeof item.desc === "string" ? item.desc : item.desc[lang as keyof typeof item.desc] || item.desc.en || item.desc.zh}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{l1Dict?.spellAndExamples || "拼写与例词"}</h4>
                          {item.rules.map((rule, idx) => (
                            <div key={idx} className="flex flex-col gap-2 rounded-md bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex-1">
                                <span className="font-semibold text-emerald-900">{rule.spell}</span>
                                {rule.cond && (
                                  <span className="ml-2 text-xs text-neutral-500">
                                    ({typeof rule.cond === "string" ? rule.cond : rule.cond[lang as keyof typeof rule.cond] || rule.cond.en || rule.cond.zh})
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 sm:w-1/2">
                                <span className="flex-1 text-sm text-neutral-700">{rule.examples}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playTTS(rule.examples, 0.8);
                                  }}
                                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 transition-colors hover:bg-emerald-200"
                                  title={l1Dict?.playTTS || "朗读法语例词"}
                                >
                                  <Volume2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Practice Module CTA */}
        <div className="mt-20 border-t border-stone-200 pt-16 text-center">
          {!showPractice ? (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => {
                setShowPractice(true);
                setTimeout(() => {
                  document.getElementById("practice-section")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
            >
              <Gamepad2 className="h-5 w-5" />
              {pDict?.cta || "我已经掌握了，开始练习 ➔"}
            </motion.button>
          ) : (
            <div id="practice-section" className="scroll-mt-24">
              <button
                onClick={() => setShowPractice(false)}
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {pDict?.hide || "收起练习"}
                <ArrowDown className="h-4 w-4 rotate-180" />
              </button>
              
              <PracticeModule dict={dict} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
