"use client";

import { Store, ShoppingBag, MessageSquare, CheckCircle2, XCircle, RefreshCw, Volume2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

export default function MagasinClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tDict = dict.subPages.magasin;
  const cDict = dict.subPages.common;
  const currentQuiz = tDict.quizzes[currentQuizIndex];

  const handleOptionSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const nextQuiz = () => {
    setCurrentQuizIndex((prev) => (prev + 1) % tDict.quizzes.length);
    resetQuiz();
  };

  const calculateScore = () => {
    let score = 0;
    currentQuiz.forEach((q: any, idx: number) => {
      if (userAnswers[idx] === q.a) score++;
    });
    return score;
  };

  const score = isSubmitted ? calculateScore() : 0;
  const percentage = Math.round((score / currentQuiz.length) * 100);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-cyan-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="cyan" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-cyan-100 p-2 text-cyan-900">
            <Store className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.desc}
          </p>
        </header>

        {/* Shops Section */}
        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <ShoppingBag className="h-6 w-6 text-cyan-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.shopType}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tDict.shops.map((cat: any, idx: number) => (
              <div key={idx} className="rounded-md border border-stone-200 p-6 bg-stone-50 hover:border-cyan-600 transition-colors">
                <h3 className="mb-4 text-lg font-semibold text-cyan-900">{cat.cat}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item: any, itemIdx: number) => (
                    <li key={itemIdx} className="border-b border-stone-200 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-baseline group">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-neutral-900">{item.fr}</span>
                          <button onClick={() => playTTS(item.fr)} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-600 hover:bg-cyan-100 rounded-full p-1">
                            <Volume2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-neutral-600">{item.zh}</span>
                      </div>
                      {item.note && (
                        <p className="mt-1 text-xs text-neutral-500 italic">💡 {item.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Section */}
        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <MessageSquare className="h-6 w-6 text-cyan-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.dialogue}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tDict.templates.map((group: any, idx: number) => (
              <div key={idx} className="rounded-md border border-stone-200 bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="bg-cyan-50 px-4 py-3 border-b border-stone-200">
                  <h3 className="font-semibold text-cyan-900">{group.t}</h3>
                </div>
                <div className="p-4 space-y-4 flex-1">
                  {group.lines.map((line: any, lineIdx: number) => (
                    <div key={lineIdx} className={`rounded-md p-3 text-sm group relative ${lineIdx % 2 === 0 ? "bg-stone-50 border border-stone-100" : "bg-cyan-50 border border-cyan-100"}`}>
                      <button onClick={() => playTTS(line.fr)} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-700 p-1 hover:bg-white rounded-full">
                        <Volume2 className="h-4 w-4" />
                      </button>
                      <p className="font-bold text-neutral-900 mb-1 pr-6">{line.fr}</p>
                      <p className="text-neutral-600">{line.zh}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz Section */}
        <section className="rounded-md border border-stone-200 bg-white p-8 shadow-sm overflow-hidden">
          <div className="mb-8 flex items-center justify-between border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.quizTitle}</h2>
            <button
              onClick={nextQuiz}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-900"
            >
              <RefreshCw className="h-4 w-4" />
              {tDict.refresh}
            </button>
          </div>

          <div className="mb-6 bg-stone-100 h-2 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-cyan-500"
               initial={{ width: 0 }}
               animate={{ width: `${(Object.keys(userAnswers).length / currentQuiz.length) * 100}%` }}
               transition={{ duration: 0.3 }}
             />
          </div>

          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
            {currentQuiz.map((q: any, idx: number) => {
              const userAnswer = userAnswers[idx] || "";
              let isCorrect = false;
              if (isSubmitted) {
                isCorrect = userAnswer === q.a;
              }

              return (
                <motion.div 
                  key={idx + currentQuizIndex * 100}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <p className="font-medium text-neutral-950">{idx + 1}. {q.q}</p>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    {q.ops.map((option: string) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(idx, option)}
                        disabled={isSubmitted}
                        className={`flex w-full items-center justify-between rounded-md border p-3 text-left text-sm transition-colors ${
                          isSubmitted
                            ? option === q.a
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : userAnswer === option && !isCorrect
                                ? "border-red-600 bg-red-600 text-white"
                                : "border-stone-200 bg-white text-neutral-700"
                            : userAnswer === option
                              ? "border-cyan-900 bg-cyan-900 text-white"
                              : "border-stone-200 bg-white text-neutral-700 hover:border-neutral-400"
                        }`}
                      >
                        {option}
                        {isSubmitted && option === q.a && <CheckCircle2 className="h-4 w-4" />}
                        {isSubmitted && userAnswer === option && !isCorrect && <XCircle className="h-4 w-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-6 flex flex-wrap gap-4 items-center">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(userAnswers).length !== currentQuiz.length}
                className="inline-flex items-center justify-center rounded-md bg-cyan-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cDict.submit}
              </button>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 items-center">
                <div className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                  percentage === 100 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}>
                  {percentage === 100 ? cDict.perfect : `${cDict.score}: ${score} / ${currentQuiz.length} (${percentage}%)`}
                </div>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center rounded-md border border-stone-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-700 hover:bg-stone-50 transition-colors"
                >
                  {cDict.tryAgain}
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
