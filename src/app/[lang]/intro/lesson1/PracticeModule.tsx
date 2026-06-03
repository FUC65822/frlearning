"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Check, X, RefreshCcw, Trophy, ArrowLeft, LayoutGrid } from "lucide-react";
import { phoneticsData } from "@/lib/phoneticsData";
import { playTTS, initTTS } from "@/lib/tts";
import confetti from "canvas-confetti";

type Question = {
  word: string;
  correctSymbol: string;
  options: string[];
};

const predefinedSets: Record<string, string[]> = {
  set1: ['i', 'e', 'a', 'u', 'o', 'y', 'i', 'e', 'a', 'u'], // Basic Vowels
  set2: ['ε', 'ɔ', 'ø', 'œ', 'ə', 'ɛ̃', 'œ̃', 'ã', 'ɔ̃', 'ε'], // Advanced Vowels & Nasals
  set3: ['p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'p', 'b'], // Basic Consonants
  set4: ['s', 'z', 'ʃ', 'ʒ', 'l', 'm', 'n', 'ɲ', 'ʁ', 'j'], // Adv Consonants & Semi
  set5: ['y', 'u', 'ø', 'œ', 'ɛ̃', 'ã', 'ɔ̃', 'ʁ', 'ʒ', 'ɥ'], // Mix
};

export default function PracticeModule({ dict }: { dict: any }) {
  const pDict = dict?.intro?.lesson1?.practice;

  const [mode, setMode] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shake, setShake] = useState(false);

  const startPractice = (selectedMode: string) => {
    const allItems = [...phoneticsData];
    const newQuestions: Question[] = [];
    
    let targetSymbols: string[] = [];

    if (selectedMode === "random") {
      for (let i = 0; i < 10; i++) {
        targetSymbols.push(allItems[Math.floor(Math.random() * allItems.length)].symbol);
      }
    } else {
      targetSymbols = [...predefinedSets[selectedMode]].sort(() => Math.random() - 0.5);
    }
    
    for (const sym of targetSymbols) {
      const targetItem = allItems.find(item => item.symbol === sym) || allItems[0];
      
      const allWords = targetItem.rules.flatMap(r => 
        r.examples.split(",").map(w => w.trim()).filter(w => w.length > 0)
      );
      
      const word = allWords[Math.floor(Math.random() * allWords.length)] || "bonjour";

      const otherSymbols = new Set<string>();
      while (otherSymbols.size < 3) {
        const randSymbol = allItems[Math.floor(Math.random() * allItems.length)].symbol;
        if (randSymbol !== targetItem.symbol) {
          otherSymbols.add(randSymbol);
        }
      }

      const options = [targetItem.symbol, ...Array.from(otherSymbols)].sort(() => Math.random() - 0.5);

      newQuestions.push({
        word,
        correctSymbol: targetItem.symbol,
        options
      });
    }

    setQuestions(newQuestions);
    setMode(selectedMode);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsFinished(false);
  };

  useEffect(() => {
    initTTS();
  }, []);

  const handleSelect = (symbol: string) => {
    if (selectedAnswer !== null) return;

    const currentQ = questions[currentIndex];
    setSelectedAnswer(symbol);

    if (symbol === currentQ.correctSymbol) {
      setIsCorrect(true);
      setScore(s => s + 1);
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#34d399', '#fcd34d']
      });
    } else {
      setIsCorrect(false);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const saveIntroProgress = () => {
    if (typeof window !== "undefined") {
      try {
        const percent = Math.round((score / questions.length) * 100);
        const progressData = {
          completed: true,
          score: percent,
          correctCount: score,
          totalCount: questions.length,
          lastPlayed: new Date().toISOString().slice(0, 10)
        };
        localStorage.setItem("frlearning_progress_intro_lesson1", JSON.stringify(progressData));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setIsFinished(true);
      saveIntroProgress();
    }
  };

  if (mode === null) {
    const modes = [
      { id: "set1", label: pDict?.set1 || "Set 1" },
      { id: "set2", label: pDict?.set2 || "Set 2" },
      { id: "set3", label: pDict?.set3 || "Set 3" },
      { id: "set4", label: pDict?.set4 || "Set 4" },
      { id: "set5", label: pDict?.set5 || "Set 5" },
      { id: "random", label: pDict?.randomMode || "Random" }
    ];

    return (
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-stone-200 p-8 text-center">
        <div className="mb-6 flex justify-center text-emerald-600">
          <LayoutGrid className="h-12 w-12" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-8">{pDict?.menuTitle || "Select Practice Mode"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modes.map((m) => (
            <button 
              key={m.id} 
              onClick={() => startPractice(m.id)}
              className="group flex h-16 items-center justify-center rounded-xl border-2 border-stone-100 bg-stone-50 px-4 font-semibold text-neutral-700 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-900 hover:shadow-sm"
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  if (isFinished) {
    return (
      <div className="mx-auto w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-stone-200">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <Trophy className="h-10 w-10" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-neutral-900">{pDict?.finishTitle || "Practice Completed!"}</h3>
        <p className="mb-8 text-lg text-neutral-600">
          {(pDict?.finishDesc || "Your score: {score} / {total}")
            .replace("{score}", score.toString())
            .replace("{total}", questions.length.toString())}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => setMode(null)}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-200 bg-white px-8 py-3 font-semibold text-neutral-700 transition-all hover:bg-stone-50 hover:text-neutral-900"
          >
            <ArrowLeft className="h-5 w-5" />
            {pDict?.backToMenu || "Menu"}
          </button>
          <button
            onClick={() => startPractice(mode)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
          >
            <RefreshCcw className="h-5 w-5" />
            {pDict?.restart || "Restart"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-stone-200">
      {/* Header & Progress */}
      <div className="bg-stone-50 p-6 pb-5 border-b border-stone-100">
        <div className="mb-4 flex items-center justify-between text-sm font-medium">
          <button 
            onClick={() => setMode(null)}
            className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {pDict?.backToMenu || "Menu"}
          </button>
          <span className="text-neutral-500">
            {(pDict?.questionOf || "Question {x} / {y}")
              .replace("{x}", (currentIndex + 1).toString())
              .replace("{y}", questions.length.toString())}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
          <motion.div
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 text-center">
        <p className="mb-8 text-neutral-600">{pDict?.desc || "Listen to the word and select the phonetic symbol."}</p>
        
        <button
          onClick={() => playTTS(currentQ.word, 0.85)}
          className="group mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm transition-all hover:scale-105 hover:bg-emerald-200 hover:shadow-md active:scale-95"
          title={pDict?.playAudio || "Play audio"}
        >
          <Volume2 className="h-10 w-10 transition-transform group-hover:scale-110" />
        </button>

        <motion.div 
          className="grid grid-cols-2 gap-4 sm:gap-6"
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedAnswer === opt;
            const isRight = isSelected && isCorrect;
            const isWrong = isSelected && !isCorrect;
            const isCorrectOption = selectedAnswer !== null && opt === currentQ.correctSymbol;

            let btnClass = "border-stone-200 bg-white text-neutral-700 hover:border-emerald-300 hover:bg-stone-50";
            if (isRight || isCorrectOption) {
              btnClass = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500";
            } else if (isWrong) {
              btnClass = "border-red-500 bg-red-50 text-red-800 ring-1 ring-red-500";
            } else if (selectedAnswer !== null) {
              btnClass = "border-stone-200 bg-stone-50 text-stone-400 opacity-50 cursor-not-allowed";
            }

            return (
              <button
                key={idx}
                disabled={selectedAnswer !== null}
                onClick={() => handleSelect(opt)}
                className={`relative flex h-20 items-center justify-center rounded-xl border-2 text-2xl font-bold transition-all ${btnClass}`}
              >
                [{opt}]
                {isRight && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <Check className="h-4 w-4" />
                  </motion.div>
                )}
                {isWrong && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white shadow-sm">
                    <X className="h-4 w-4" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedAnswer !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between rounded-xl bg-stone-50 p-4 border border-stone-100"
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isCorrect ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                  {isCorrect ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-neutral-900">{isCorrect ? pDict?.correct || "Awesome!" : pDict?.incorrect || "Oops, try again!"}</p>
                  <p className="text-sm text-neutral-600">{pDict?.wordWas || "The word was:"} <span className="font-bold text-neutral-900">{currentQ.word}</span></p>
                </div>
              </div>
              
              <button
                onClick={handleNext}
                className="w-full sm:w-auto rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-md"
              >
                {pDict?.next || "Next"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
