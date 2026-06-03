"use client";

import { Hash, Calculator, Clock, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

const frenchNumbers: Record<number, string> = {
  0: 'zéro', 1: 'un', 2: 'deux', 3: 'trois', 4: 'quatre', 5: 'cinq', 6: 'six', 7: 'sept', 8: 'huit', 9: 'neuf',
  10: 'dix', 11: 'onze', 12: 'douze', 13: 'treize', 14: 'quatorze', 15: 'quinze', 16: 'seize', 17: 'dix-sept', 18: 'dix-huit', 19: 'dix-neuf',
  20: 'vingt', 21: 'vingt et un', 30: 'trente', 40: 'quarante', 50: 'cinquante', 60: 'soixante', 70: 'soixante-dix', 80: 'quatre-vingts', 90: 'quatre-vingt-dix', 100: 'cent'
};

const getNumberString = (num: number): string => {
  if (frenchNumbers[num]) return frenchNumbers[num];
  if (num < 70) {
    const ten = Math.floor(num / 10) * 10;
    const unit = num % 10;
    if (unit === 1) return `${frenchNumbers[ten]} et un`;
    return `${frenchNumbers[ten]}-${frenchNumbers[unit]}`;
  }
  if (num < 80) {
    const unit = num % 10;
    if (unit === 1) return `soixante et onze`;
    return `soixante-${frenchNumbers[10 + unit]}`;
  }
  if (num < 90) {
    const unit = num % 10;
    return `quatre-vingt-${frenchNumbers[unit]}`;
  }
  if (num < 100) {
    const unit = num % 10;
    return `quatre-vingt-${frenchNumbers[10 + unit]}`;
  }
  return num.toString();
};

const daysFr = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const monthsFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export default function NumberClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const [practiceNumber, setPracticeNumber] = useState(0);
  const [numberInput, setNumberInput] = useState("");
  const [numberFeedback, setNumberFeedback] = useState("");
  const [numberIsCorrect, setNumberIsCorrect] = useState<boolean | null>(null);

  const tDict = dict.subPages.number;
  const cDict = dict.subPages.common;

  const generateNewNumber = () => {
    setPracticeNumber(Math.floor(Math.random() * 100));
    setNumberInput("");
    setNumberFeedback("");
    setNumberIsCorrect(null);
  };

  useEffect(() => {
    generateNewNumber();
  }, []);

  const checkNumber = () => {
    const correct = getNumberString(practiceNumber);
    const normalize = (str: string) => str.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    
    if (normalize(numberInput) === normalize(correct)) {
      setNumberFeedback(`${cDict.correct}! 🎉`);
      setNumberIsCorrect(true);
    } else {
      setNumberFeedback(`${cDict.wrong}. ${correct}`);
      setNumberIsCorrect(false);
    }
  };

  const handlePlayNumber = () => {
    playTTS(getNumberString(practiceNumber));
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-teal-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="teal" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-teal-100 p-2 text-teal-900">
            <Hash className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.desc}
          </p>
        </header>

        <section className="mb-12 rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <Calculator className="h-6 w-6 text-teal-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.structTitle}</h2>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-medium text-teal-800">{tDict.basic}</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {Array.from({length: 21}).map((_, i) => (
                <button
                  key={i} 
                  onClick={() => playTTS(frenchNumbers[i])}
                  className="flex flex-col items-center justify-center rounded-md border border-stone-200 bg-stone-50 p-3 hover:border-teal-500 hover:bg-teal-50 transition-colors group cursor-pointer"
                  title={cDict.listen}
                >
                  <span className="text-xl font-bold text-neutral-900 group-hover:text-teal-700">{i}</span>
                  <span className="text-sm text-neutral-600 group-hover:text-teal-600">{frenchNumbers[i]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="mb-4 text-lg font-medium text-teal-800">{tDict.special}</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-md border border-stone-200 p-5 bg-stone-50">
                <h4 className="font-semibold text-neutral-900 mb-2">{tDict.s70.t}</h4>
                <p className="text-sm text-neutral-600">{tDict.s70.d}</p>
              </div>
              <div className="rounded-md border border-stone-200 p-5 bg-stone-50">
                <h4 className="font-semibold text-neutral-900 mb-2">{tDict.s80.t}</h4>
                <p className="text-sm text-neutral-600">{tDict.s80.d}</p>
              </div>
              <div className="rounded-md border border-stone-200 p-5 bg-stone-50">
                <h4 className="font-semibold text-neutral-900 mb-2">{tDict.s90.t}</h4>
                <p className="text-sm text-neutral-600">{tDict.s90.d}</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-stone-200 bg-stone-50 p-6 sm:p-10 relative overflow-hidden">
            <h3 className="mb-6 text-center text-xl font-semibold text-neutral-900">{tDict.quizTitle}</h3>
            <div className="mx-auto max-w-sm text-center relative z-10">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={practiceNumber}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="mb-6 inline-flex h-24 items-center justify-center rounded-md border-2 border-neutral-900 bg-white text-5xl font-bold text-teal-700 shadow-sm relative group cursor-pointer px-10"
                  onClick={handlePlayNumber}
                  title={cDict.listen}
                >
                  {practiceNumber}
                  <Volume2 className="absolute right-3 top-3 h-4 w-4 text-stone-300 group-hover:text-teal-600 transition-colors" />
                </motion.div>
              </AnimatePresence>
              <input
                type="text"
                value={numberInput}
                onChange={(e) => setNumberInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkNumber()}
                placeholder={tDict.placeholder}
                className={`mb-4 w-full rounded-md border p-3 text-center focus:outline-none focus:ring-1 focus:ring-teal-700 ${
                  numberIsCorrect === true ? "border-teal-500 bg-teal-50 text-teal-900" :
                  numberIsCorrect === false ? "border-red-500 bg-red-50 text-red-900" :
                  "border-stone-300 bg-white"
                }`}
              />
              <div className="flex justify-center gap-3">
                <button
                  onClick={checkNumber}
                  className="rounded-md bg-neutral-900 px-6 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
                >
                  {cDict.check}
                </button>
                <button
                  onClick={generateNewNumber}
                  className="rounded-md border border-stone-300 bg-white px-6 py-2 text-sm font-medium text-neutral-700 hover:bg-stone-100 transition-colors"
                >
                  {cDict.next}
                </button>
              </div>
              {numberFeedback && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 font-medium ${numberIsCorrect ? "text-teal-700" : "text-red-600"}`}
                >
                  {numberFeedback}
                </motion.p>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-200 pb-4">
            <Clock className="h-6 w-6 text-teal-700" />
            <h2 className="text-2xl font-semibold text-neutral-950">{tDict.timeDate}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-medium text-teal-800">{tDict.days}</h3>
              <ul className="space-y-2">
                {daysFr.map((fr, idx) => (
                  <li key={fr} className="flex justify-between border-b border-stone-100 py-2 text-sm items-center group">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-neutral-800">{fr}</span>
                      <button onClick={() => playTTS(fr)} className="opacity-0 group-hover:opacity-100 text-teal-600 hover:bg-teal-50 p-1 rounded-full transition-all">
                        <Volume2 className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-neutral-500">{tDict.daysList[idx]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium text-teal-800">{tDict.months}</h3>
              <ul className="space-y-2">
                {monthsFr.slice(0,6).map((fr, i) => (
                   <li key={fr} className="flex justify-between border-b border-stone-100 py-2 text-sm">
                    <div className="flex gap-4 items-center group">
                      <span className="font-medium text-neutral-800 w-20">{fr}</span>
                      <button onClick={() => playTTS(fr)} className="opacity-0 group-hover:opacity-100 text-teal-600 hover:bg-teal-50 p-1 rounded-full transition-all">
                        <Volume2 className="h-3 w-3" />
                      </button>
                      <span className="text-neutral-500 w-20">{tDict.monthsList[i]}</span>
                    </div>
                    <div className="flex gap-4 items-center group">
                      <span className="font-medium text-neutral-800 w-20">{monthsFr[i+6]}</span>
                      <button onClick={() => playTTS(monthsFr[i+6])} className="opacity-0 group-hover:opacity-100 text-teal-600 hover:bg-teal-50 p-1 rounded-full transition-all">
                        <Volume2 className="h-3 w-3" />
                      </button>
                      <span className="text-neutral-500 w-20">{tDict.monthsList[i+6]}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-lg font-medium text-teal-800">{tDict.seasons}</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {tDict.seasonsList.map((s: any) => (
                <div key={s.fr} className="rounded-md border border-stone-200 bg-stone-50 p-4 text-center group relative cursor-pointer" onClick={() => playTTS(s.fr)}>
                  <Volume2 className="absolute top-2 right-2 h-4 w-4 text-stone-300 group-hover:text-teal-600 transition-colors" />
                  <p className="font-semibold text-neutral-900 group-hover:text-teal-800 transition-colors">{s.fr}</p>
                  <p className="mt-1 text-sm text-neutral-500">{s.zh} · {s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
