"use client";

import { CloudSun, CheckCircle2, XCircle, Volume2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

export default function TempsClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const tDict = dict.subPages.temps;
  const cDict = dict.subPages.common;
  const currentQuiz = tDict.quiz.questions[currentQuizIndex];
  
  const quizTitles = [tDict.quiz.q1, tDict.quiz.q2, tDict.quiz.q3];

  const handleOptionSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [`q${qIndex}`]: option }));
  };

  const handleTranslationChange = (qIndex: number, value: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [`q${qIndex}`]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    currentQuiz.forEach((q: any, idx: number) => {
      const userAnswer = userAnswers[`q${idx}`] || "";
      if (q.type === 'mcq') {
        if (userAnswer === q.a) score++;
      } else {
        const answers = Array.isArray(q.a) ? q.a : [q.a];
        const isCorrect = answers.some((ans: string) => userAnswer.toLowerCase().trim().includes(ans.toLowerCase()));
        if (isCorrect) score++;
      }
    });
    return score;
  };

  const resetQuiz = (index: number) => {
    setCurrentQuizIndex(index);
    setUserAnswers({});
    setIsSubmitted(false);
    setShowAnswers(false);
  };

  const score = isSubmitted ? calculateScore() : 0;
  const percentage = Math.round((score / currentQuiz.length) * 100);

  const VocabularyItem = ({ fr, trans }: { fr: string, trans: string }) => (
    <li className="flex items-center justify-between group">
      <div>
        <span className="font-medium">{fr}</span>
        <button 
          onClick={() => playTTS(fr)}
          className="ml-2 inline-flex items-center justify-center rounded-full bg-stone-100 p-1.5 text-emerald-700 opacity-0 transition-opacity hover:bg-emerald-100 group-hover:opacity-100"
          title={cDict.listen}
        >
          <Volume2 className="h-3.5 w-3.5" />
        </button>
      </div>
      <span className="text-neutral-500">{trans}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-emerald-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-amber-100 p-2 text-amber-900">
            <CloudSun className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.desc}
          </p>
        </header>

        <section className="mb-10 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-950">{tDict.categories.title}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-stone-200 p-5 hover:border-emerald-900 transition-colors">
              <h3 className="mb-3 font-semibold text-emerald-900 border-b border-stone-200 pb-2">{tDict.categories.sunny}</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <VocabularyItem fr="Le soleil" trans={tDict.categories.items.sun} />
                <VocabularyItem fr="Ensoleillé" trans={tDict.categories.items.sunny} />
                <VocabularyItem fr="Il fait beau" trans={tDict.categories.items.fine} />
              </ul>
            </div>
            <div className="rounded-md border border-stone-200 p-5 hover:border-emerald-900 transition-colors">
              <h3 className="mb-3 font-semibold text-emerald-900 border-b border-stone-200 pb-2">{tDict.categories.cloudy}</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <VocabularyItem fr="Un nuage" trans={tDict.categories.items.cloud} />
                <VocabularyItem fr="Nuageux" trans={tDict.categories.items.cloudy} />
                <VocabularyItem fr="Il y a des nuages" trans={tDict.categories.items.hasClouds} />
              </ul>
            </div>
            <div className="rounded-md border border-stone-200 p-5 hover:border-emerald-900 transition-colors">
              <h3 className="mb-3 font-semibold text-emerald-900 border-b border-stone-200 pb-2">{tDict.categories.rainy}</h3>
              <ul className="space-y-3 text-sm text-neutral-700">
                <VocabularyItem fr="La pluie" trans={tDict.categories.items.rain} />
                <VocabularyItem fr="Il pleut" trans={tDict.categories.items.raining} />
                <VocabularyItem fr="Une averse" trans={tDict.categories.items.shower} />
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
           <h2 className="mb-6 text-2xl font-semibold text-neutral-950">{tDict.expressions.title}</h2>
           <div className="space-y-4">
             <div className="rounded-md border border-stone-200 bg-stone-50 p-4 flex items-center justify-between group">
               <div>
                 <p className="font-medium text-neutral-950 italic">Quel temps fait-il aujourd'hui ?</p>
                 <p className="text-neutral-600 mt-1">{tDict.expressions.q1}</p>
               </div>
               <button onClick={() => playTTS("Quel temps fait-il aujourd'hui ?")} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-emerald-100 text-emerald-700">
                 <Volume2 className="h-5 w-5" />
               </button>
             </div>
             <div className="rounded-md border border-stone-200 bg-stone-50 p-4 flex items-center justify-between group">
               <div>
                 <p className="font-medium text-neutral-950 italic">Il fait un froid de canard.</p>
                 <p className="text-neutral-600 mt-1">{tDict.expressions.q2}</p>
               </div>
               <button onClick={() => playTTS("Il fait un froid de canard.")} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-emerald-100 text-emerald-700">
                 <Volume2 className="h-5 w-5" />
               </button>
             </div>
           </div>
        </section>

        <section className="rounded-md border border-stone-200 bg-white p-8 shadow-sm overflow-hidden">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-950">{tDict.quiz.title}</h2>
          
          <div className="mb-6 flex flex-wrap gap-2 border-b border-stone-200 pb-4">
            {quizTitles.map((title, idx) => (
              <button
                key={idx}
                onClick={() => resetQuiz(idx)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  currentQuizIndex === idx
                    ? "bg-emerald-900 text-white"
                    : "bg-stone-100 text-neutral-600 hover:bg-stone-200"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          <div className="mb-4 bg-stone-100 h-2 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-emerald-500"
               initial={{ width: 0 }}
               animate={{ width: `${(Object.keys(userAnswers).length / currentQuiz.length) * 100}%` }}
               transition={{ duration: 0.3 }}
             />
          </div>

          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
            {currentQuiz.map((q: any, idx: number) => {
              const userAnswer = userAnswers[`q${idx}`] || "";
              let isCorrect = false;
              if (isSubmitted) {
                if (q.type === 'mcq') {
                  isCorrect = userAnswer === q.a;
                } else {
                  const answers = Array.isArray(q.a) ? q.a : [q.a];
                  isCorrect = answers.some((ans: string) => userAnswer.toLowerCase().trim().includes(ans.toLowerCase()));
                }
              }

              return (
                <motion.div 
                  key={idx + currentQuizIndex * 10}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <p className="font-medium text-neutral-950">{q.q}</p>
                  
                  {q.type === 'mcq' ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {q.ops?.map((option: string) => (
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
                                ? "border-emerald-900 bg-emerald-900 text-white"
                                : "border-stone-200 bg-white text-neutral-700 hover:border-neutral-400"
                          }`}
                        >
                          {option}
                          {isSubmitted && option === q.a && <CheckCircle2 className="h-4 w-4" />}
                          {isSubmitted && userAnswer === option && !isCorrect && <XCircle className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => handleTranslationChange(idx, e.target.value)}
                        disabled={isSubmitted}
                        className={`w-full rounded-md border p-3 text-sm focus:border-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-900 ${
                          isSubmitted && isCorrect
                            ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                            : isSubmitted && !isCorrect
                            ? "border-red-600 bg-red-50 text-red-900"
                            : "border-stone-200 bg-white text-neutral-950"
                        }`}
                      />
                      {isSubmitted && !isCorrect && (
                        <p className="mt-2 text-sm text-red-600">
                          {Array.isArray(q.a) ? q.a.join(" / ") : q.a}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
            </AnimatePresence>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-6">
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(userAnswers).length !== currentQuiz.length}
                className="inline-flex items-center justify-center rounded-md bg-emerald-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {cDict.submit}
              </button>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                  percentage === 100 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                }`}>
                  {percentage === 100 ? cDict.perfect : `${cDict.score}: ${score} / ${currentQuiz.length} (${percentage}%)`}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowAnswers(!showAnswers)}
                    className="inline-flex items-center justify-center rounded-md border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-stone-50"
                  >
                    {showAnswers ? cDict.hideAnswers : cDict.showAnswers}
                  </button>
                  <button
                    onClick={() => resetQuiz(currentQuizIndex)}
                    className="inline-flex items-center justify-center rounded-md bg-emerald-900 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
                  >
                    {cDict.tryAgain}
                  </button>
                </div>

                {showAnswers && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="rounded-md border border-stone-200 bg-stone-50 p-6 overflow-hidden">
                    <ul className="space-y-4">
                      {currentQuiz.map((q: any, idx: number) => (
                        <li key={idx} className="text-sm">
                          <p className="font-medium text-neutral-700">{q.q}</p>
                          <p className="mt-1 font-semibold text-emerald-700">
                            {Array.isArray(q.a) ? q.a.join(" / ") : q.a}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
