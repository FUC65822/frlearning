"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Hash, 
  Calculator, 
  Clock, 
  Volume2, 
  Sliders, 
  VolumeX, 
  Sparkles, 
  HelpCircle,
  TrendingUp,
  Volume1,
  RotateCcw,
  CheckCircle2,
  Calendar,
  AlertCircle,
  PlayCircle
} from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

// -- French Numbers helper arrays/objects --
const frenchNumbers: Record<number, string> = {
  0: 'zéro', 1: 'un', 2: 'deux', 3: 'trois', 4: 'quatre', 5: 'cinq', 6: 'six', 7: 'sept', 8: 'huit', 9: 'neuf',
  10: 'dix', 11: 'onze', 12: 'douze', 13: 'treize', 14: 'quatorze', 15: 'quinze', 16: 'seize', 17: 'dix-sept', 18: 'dix-huit', 19: 'dix-neuf',
  20: 'vingt', 30: 'trente', 40: 'quarante', 50: 'cinquante', 60: 'soixante', 70: 'soixante-dix', 80: 'quatre-vingts', 90: 'quatre-vingt-dix', 100: 'cent'
};

const getNumberUnder1000 = (num: number, isFollowedByAdjective = false): string => {
  if (num === 0) return "zéro";
  
  const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
  const teens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  const tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
  
  if (num < 10) return units[num];
  if (num >= 10 && num < 20) return teens[num - 10];
  
  if (num < 70) {
    const ten = Math.floor(num / 10);
    const unit = num % 10;
    if (unit === 0) return tens[ten];
    if (unit === 1) return `${tens[ten]} et un`;
    return `${tens[ten]}-${units[unit]}`;
  }
  
  if (num < 80) {
    const unit = num % 10;
    if (unit === 0) return "soixante-dix";
    if (unit === 1) return "soixante et onze";
    return `soixante-${teens[unit]}`;
  }
  
  if (num < 90) {
    const unit = num % 10;
    if (unit === 0) return isFollowedByAdjective ? "quatre-vingt" : "quatre-vingts";
    return `quatre-vingt-${units[unit]}`;
  }
  
  if (num < 100) {
    const unit = num % 10;
    if (unit === 0) return "quatre-vingt-dix";
    return `quatre-vingt-${teens[unit]}`;
  }
  
  const hundred = Math.floor(num / 100);
  const remainder = num % 100;
  const hundredStr = hundred === 1 ? "cent" : `${units[hundred]} cent`;
  
  if (remainder === 0) {
    return (hundred === 1 || isFollowedByAdjective) ? "cent" : `${units[hundred]} cents`;
  }
  
  return `${hundredStr} ${getNumberUnder1000(remainder, isFollowedByAdjective)}`;
};

const getNumberString = (num: number): string => {
  if (num === 0) return "zéro";
  
  if (num < 1000) {
    return getNumberUnder1000(num, false);
  }
  
  if (num >= 1000000) {
    const millions = Math.floor(num / 1000000);
    const remainder = num % 1000000;
    const millionsStr = millions === 1 ? "un million" : `${getNumberUnder1000(millions, false)} millions`;
    
    if (remainder === 0) {
      return millionsStr;
    }
    
    return `${millionsStr} ${getNumberString(remainder)}`;
  }
  
  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;
  const thousandsStr = thousands === 1 ? "mille" : `${getNumberUnder1000(thousands, true)} mille`;
  
  if (remainder === 0) {
    return thousandsStr;
  }
  
  return `${thousandsStr} ${getNumberUnder1000(remainder, false)}`;
};

const daysFr = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
const monthsFr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const TIME_EXPRESSIONS = [
  { fr: "Quelle heure est-il ?", id: "time_ask" },
  { fr: "Il est une heure.", id: "time_1" },
  { fr: "Il est deux heures et quart.", id: "time_2_15" },
  { fr: "Il est trois heures et demie.", id: "time_3_30" },
  { fr: "Il est quatre heures moins le quart.", id: "time_4_45" },
  { fr: "Il est midi.", id: "time_noon" },
  { fr: "Il est minuit.", id: "time_midnight" },
];

// -- Translations (Encapsulated for the reset) --
const getTrans = (lang: string) => {
  const t: Record<string, any> = {
    zh: {
      title: "数字与时间探索",
      desc: "掌握法语数字规则，探索实时数字翻译与地道时间表达",
      structTitle: "法语数字系统",
      basicNumbers: "基础数字 & 整数位",
      tab0_20: "0-20 (最基础数字)",
      tabTens: "十位整点 (10-100)",
      tabSpecial: "特殊计数法",
      converterTitle: "0-999,999,999 实时数字转换器",
      converterDesc: "拖动滑块或输入数字，即可实时将数字翻译为地道法语，点击卡片可收听真人发音",
      converterPlaceholder: "输入 0 - 999,999,999...",
      quizTitle: "数字听力与拼写测验",
      quizDesc: "听法语数字发音，写出正确的阿拉伯数字，挑战不同难度！",
      quizPlaceholder: "输入你听到的数字 (如: 42)",
      levelFacile: "初级 (0-20)",
      levelMoyen: "中级 (0-100)",
      levelDifficile: "高级 (100 - 1,000,000)",
      timeTitle: "时间与日期表达 (L'heure)",
      days: "星期表达 (Les Jours)",
      months: "月份表达 (Les Mois)",
      timeSection: "常用时间说法",
      listen: "点击发音",
      check: "检查答案",
      next: "下一题",
      correct: "回答正确！🎉",
      wrong: "再试一次",
      time_ask: "几点了？ / 您有时间吗？",
      time_1: "1点整 (注意 heure 用单数)",
      time_2_15: "2点一刻 (et quart)",
      time_3_30: "3点半 (et demie)",
      time_4_45: "3点45 / 差一刻4点 (moins le quart)",
      time_noon: "中午12点 (midi)",
      time_midnight: "半夜12点 (minuit)",
      quizModeSpelling: "写单词 (看数写拼写)",
      quizModeListening: "听力题 (听音写数字)",
      quizSpellingInstruction: "看数字，写出对应的法语单词：",
      quizListeningInstruction: "听音频，写出正确的阿拉伯数字：",
      specialFormula: "运算公式",
    },
    en: {
      title: "Numbers & Time Explorer",
      desc: "Master French numbers, explore real-time translations, and practice authentic time expressions.",
      structTitle: "French Number System",
      basicNumbers: "Basic Numbers & Tens",
      tab0_20: "0-20 (Fundamental)",
      tabTens: "Tens (10-100)",
      tabSpecial: "Special Counting Rules",
      converterTitle: "0-999,999,999 Real-time Number Converter",
      converterDesc: "Drag the slider or type a number to see its authentic French spelling. Click to hear pronunciation.",
      converterPlaceholder: "Enter a number 0 - 999,999,999...",
      quizTitle: "Number Listening & Writing Quiz",
      quizDesc: "Listen to the French number and type the correct digit. Challenge yourself with different levels!",
      quizPlaceholder: "Type the digit you hear (e.g. 42)",
      levelFacile: "Easy (0-20)",
      levelMoyen: "Medium (0-100)",
      levelDifficile: "Hard (100 - 1,000,000)",
      timeTitle: "Time & Date (L'heure)",
      days: "Days of the week (Les Jours)",
      months: "Months of the year (Les Mois)",
      timeSection: "Telling the Time",
      listen: "Click to listen",
      check: "Check",
      next: "Next",
      correct: "Correct! 🎉",
      wrong: "Try again",
      time_ask: "What time is it? / Do you have the time?",
      time_1: "1 o'clock (note 'heure' is singular)",
      time_2_15: "Quarter past two",
      time_3_30: "Half past three",
      time_4_45: "Quarter to four",
      time_noon: "12:00 PM (Noon)",
      time_midnight: "12:00 AM (Midnight)",
      quizModeSpelling: "Spelling (Type word)",
      quizModeListening: "Listening (Type digit)",
      quizSpellingInstruction: "Write down the French word for this number:",
      quizListeningInstruction: "Listen and write down the Arabic numeral:",
      specialFormula: "Formula",
    },
    fr: {
      title: "Nombres et Heure",
      desc: "Maîtrisez les nombres français, découvrez la traduction en temps réel et apprenez à donner l'heure.",
      structTitle: "Le Système Numérique",
      basicNumbers: "Nombres de base & Dizaines",
      tab0_20: "0-20 (Fondamentaux)",
      tabTens: "Dizaines (10-100)",
      tabSpecial: "Règles Particulières",
      converterTitle: "Convertisseur de Nombres 0-999 999 999",
      converterDesc: "Déplacez le curseur ou saisissez un nombre pour voir son orthographe en français. Cliquez pour écouter.",
      converterPlaceholder: "Saisir un nombre 0 - 999 999 999...",
      quizTitle: "Quiz d'Écoute et d'Écriture",
      quizDesc: "Écoutez le nombre en français et tapez le chiffre correspondant. Relevez le défi !",
      quizPlaceholder: "Saisissez le chiffre (ex: 42)",
      levelFacile: "Facile (0-20)",
      levelMoyen: "Moyen (0-100)",
      levelDifficile: "Difficile (100 - 1 000 000)",
      timeTitle: "Temps et Calendrier (L'heure)",
      days: "Les Jours de la semaine",
      months: "Les Mois de l'année",
      timeSection: "Dire l'Heure",
      listen: "Écouter",
      check: "Vérifier",
      next: "Suivant",
      correct: "Correct ! 🎉",
      wrong: "Réessayez",
      time_ask: "Quelle heure est-il ? / Auriez-vous l'heure ?",
      time_1: "Il est une heure (singulier)",
      time_2_15: "Il est deux heures et quart",
      time_3_30: "Il est trois heures et demie",
      time_4_45: "Il est quatre heures moins le quart",
      time_noon: "Il est midi",
      time_midnight: "Il est minuit",
      quizModeSpelling: "Orthographe",
      quizModeListening: "Écoute",
      quizSpellingInstruction: "Écrivez le nombre en français :",
      quizListeningInstruction: "Écoutez l'audio et écrivez le chiffre :",
      specialFormula: "Formule",
    },
    es: {
      title: "Números y la Hora",
      desc: "Domina los números en francés, explora traducciones en tiempo real y practica las expresiones del tiempo.",
      structTitle: "Sistema de Números",
      basicNumbers: "Números Básicos y Decenas",
      tab0_20: "0-20 (Básicos)",
      tabTens: "Decenas (10-100)",
      tabSpecial: "Reglas Especiales",
      converterTitle: "Conversor de Números 0-999.999.999",
      converterDesc: "Arrastra la barra o escribe un número para ver su ortografía en francés. Haz clic para escuchar.",
      converterPlaceholder: "Ingresa un número 0 - 999.999.999...",
      quizTitle: "Prueba de Escucha y Escritura",
      quizDesc: "Escucha el número en francés y escribe el dígito correcto. ¡Ponte a prueba!",
      quizPlaceholder: "Escribe el dígito (ej. 42)",
      levelFacile: "Fácil (0-20)",
      levelMoyen: "Medio (0-100)",
      levelDifficile: "Difícil (100 - 1.000.000)",
      timeTitle: "Hora y Calendario (L'heure)",
      days: "Los Días de la semana",
      months: "Los Meses del año",
      timeSection: "Decir la Hora",
      listen: "Escuchar",
      check: "Comprobar",
      next: "Siguiente",
      correct: "¡Correcto! 🎉",
      wrong: "Inténtalo de nuevo",
      time_ask: "¿Qué hora es? / ¿Tiene la hora?",
      time_1: "Es la una (heure es singular)",
      time_2_15: "Son las dos y cuarto",
      time_3_30: "Son las tres y media",
      time_4_45: "Son las cuatro menos cuarto",
      time_noon: "Es mediodía",
      time_midnight: "Es medianoche",
      quizModeSpelling: "Ortografía",
      quizModeListening: "Escucha",
      quizSpellingInstruction: "Escribe el número en francés:",
      quizListeningInstruction: "Escucha el audio y escribe el dígito:",
      specialFormula: "Fórmula",
    },
    de: {
      title: "Zahlen & Uhrzeit",
      desc: "Meistern Sie die französischen Zahlen, übersetzen Sie in Echtzeit und lernen Sie die Uhrzeit.",
      structTitle: "Zahlensystem",
      basicNumbers: "Grundzahlen & Zehner",
      tab0_20: "0-20 (Grundlagen)",
      tabTens: "Zehner (10-100)",
      tabSpecial: "Besondere Regeln",
      converterTitle: "Zahlenkonverter 0-999.999.999",
      converterDesc: "Ziehen Sie den Schieberegler oder tippen Sie eine Zahl ein, um die französische Schreibweise zu sehen. Klicken zum Hören.",
      converterPlaceholder: "Zahl eingeben 0 - 999.999.999...",
      quizTitle: "Hör- und Schreibquiz",
      quizDesc: "Hören Sie die Zahl auf Französisch und geben Sie die Ziffer ein. Wählen Sie Ihre Schwierigkeit!",
      quizPlaceholder: "Ziffer eingeben (z.B. 42)",
      levelFacile: "Einfach (0-20)",
      levelMoyen: "Mittel (0-100)",
      levelDifficile: "Schwer (100 - 1.000.000)",
      timeTitle: "Uhrzeit & Datum (L'heure)",
      days: "Wochentage (Les Jours)",
      months: "Monate (Les Mois)",
      timeSection: "Die Uhrzeit sagen",
      listen: "Hören",
      check: "Prüfen",
      next: "Weiter",
      correct: "Richtig! 🎉",
      wrong: "Versuchen Sie es noch einmal",
      time_ask: "Wie spät ist es? / Wie viel Uhr ist es?",
      time_1: "Es ist ein Uhr (heure im Singular)",
      time_2_15: "Es ist Viertel nach zwei",
      time_3_30: "Es ist halb vier",
      time_4_45: "Es ist Viertel vor vier",
      time_noon: "Es ist Mittag",
      time_midnight: "Es ist Mitternacht",
      quizModeSpelling: "Schreiben",
      quizModeListening: "Hören",
      quizSpellingInstruction: "Schreiben Sie die Zahl auf Französisch:",
      quizListeningInstruction: "Hören Sie das Audio und schreiben Sie die Ziffer:",
      specialFormula: "Formel",
    }
  };
  return t[lang] || t.en;
};

export default function NumberClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = getTrans(lang);
  
  // Tabs: 'explorer' (includes grid & converter), 'special', 'time'
  const [activeMainTab, setActiveMainTab] = useState<"explorer" | "special" | "time">("explorer");
  const [activeGridSubTab, setActiveGridSubTab] = useState<"0-20" | "tens">("0-20");

  // Real-time Converter State
  const [converterVal, setConverterVal] = useState<number>(42);
  const [converterTextVal, setConverterTextVal] = useState<string>("42");

  // Quiz States
  const [quizLevel, setQuizLevel] = useState<"facile" | "moyen" | "difficile">("moyen");
  const [quizMode, setQuizMode] = useState<"spelling" | "listening">("listening");
  const [practiceNumber, setPracticeNumber] = useState<number>(0);
  const [numberInput, setNumberInput] = useState("");
  const [numberFeedback, setNumberFeedback] = useState("");
  const [numberIsCorrect, setNumberIsCorrect] = useState<boolean | null>(null);

  const generateNewNumber = (level = quizLevel) => {
    let max = 100;
    let min = 0;
    if (level === "facile") {
      max = 21;
    } else if (level === "moyen") {
      max = 101;
    } else {
      min = 100;
      max = 1000000;
    }
    const rand = Math.floor(Math.random() * (max - min)) + min;
    setPracticeNumber(rand);
    setNumberInput("");
    setNumberFeedback("");
    setNumberIsCorrect(null);
  };

  useEffect(() => {
    generateNewNumber(quizLevel);
  }, [quizLevel, quizMode]);

  const saveNumberProgress = (correct: boolean) => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("frlearning_progress_numbers");
        let progress = { completed: true, correctCount: 0, totalCount: 0, lastPlayed: new Date().toISOString().slice(0, 10), maxNumberExplored: 999999 };
        if (stored) {
          progress = JSON.parse(stored);
        }
        progress.totalCount += 1;
        if (correct) {
          progress.correctCount += 1;
        }
        progress.lastPlayed = new Date().toISOString().slice(0, 10);
        const score = Math.round((progress.correctCount / progress.totalCount) * 100);
        localStorage.setItem("frlearning_progress_numbers", JSON.stringify({
          completed: true,
          score,
          correctCount: progress.correctCount,
          totalCount: progress.totalCount,
          lastPlayed: progress.lastPlayed,
          maxNumberExplored: 999999
        }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const checkNumber = () => {
    const correctSpelling = getNumberString(practiceNumber);
    const normalize = (str: string) => str.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    
    if (quizMode === "spelling") {
      if (normalize(numberInput) === normalize(correctSpelling)) {
        setNumberFeedback(`${t.correct}`);
        setNumberIsCorrect(true);
        playTTS("Très bien !");
        saveNumberProgress(true);
      } else {
        setNumberFeedback(`${t.wrong}. 💡: ${correctSpelling}`);
        setNumberIsCorrect(false);
        saveNumberProgress(false);
      }
    } else {
      // Listening mode - checks digits
      if (numberInput.trim() === practiceNumber.toString()) {
        setNumberFeedback(`${t.correct}`);
        setNumberIsCorrect(true);
        playTTS("Très bien !");
        saveNumberProgress(true);
      } else {
        setNumberFeedback(`${t.wrong}. 💡: ${practiceNumber}`);
        setNumberIsCorrect(false);
        saveNumberProgress(false);
      }
    }
  };

  const handlePlayNumber = () => {
    playTTS(getNumberString(practiceNumber));
  };

  // Synchronize converter numeric input and range slider input
  const handleConverterSliderChange = (val: number) => {
    setConverterVal(val);
    setConverterTextVal(val.toString());
  };

  const handleConverterTextChange = (txt: string) => {
    setConverterTextVal(txt);
    const parsed = parseInt(txt, 10);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 999999999) {
      setConverterVal(parsed);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 font-sans selection:bg-teal-200">
      <SubpageHeader dict={dict} lang={lang} colorTheme="teal" />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-stone-100 mb-6 text-teal-600"
          >
            <Hash className="h-8 w-8" strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto"
          >
            {t.desc}
          </motion.p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-stone-200/60 rounded-2xl border border-stone-200">
            <button
              onClick={() => setActiveMainTab("explorer")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeMainTab === "explorer" 
                  ? "bg-white text-teal-700 shadow-sm" 
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {t.structTitle}
            </button>
            <button
              onClick={() => setActiveMainTab("special")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeMainTab === "special" 
                  ? "bg-white text-teal-700 shadow-sm" 
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {t.tabSpecial}
            </button>
            <button
              onClick={() => setActiveMainTab("time")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeMainTab === "time" 
                  ? "bg-white text-teal-700 shadow-sm" 
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {t.timeTitle}
            </button>
          </div>
        </div>

        {/* Tab 1: Number Grid and Real-time Converter */}
        {activeMainTab === "explorer" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* Real-time Converter Card */}
            <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
                <Sliders className="h-6 w-6 text-teal-600" />
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900">{t.converterTitle}</h2>
                  <p className="text-sm text-neutral-500">{t.converterDesc}</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                <div className="w-full md:w-2/5 space-y-5">
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="1000000" 
                      value={converterVal}
                      onChange={(e) => handleConverterSliderChange(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                    />
                    <input
                      type="number"
                      min="0"
                      max="999999999"
                      value={converterTextVal}
                      onChange={(e) => handleConverterTextChange(e.target.value)}
                      className="w-32 text-center rounded-xl border border-stone-200 bg-stone-50 p-2 font-bold text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[71, 80, 201, 1000, 80000, 200000, 1000000, 80000000].map(preset => (
                      <button
                        key={preset}
                        onClick={() => handleConverterSliderChange(preset)}
                        className="px-3 py-1 text-xs rounded-lg border border-stone-200 hover:border-teal-500 hover:bg-teal-50 text-neutral-600 transition-colors"
                      >
                        {preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full flex justify-center">
                  <button
                    onClick={() => playTTS(getNumberString(converterVal))}
                    className="w-full group relative overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-6 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center cursor-pointer min-h-[140px]"
                  >
                    <span className="absolute top-3 right-3 text-stone-300 group-hover:text-teal-500 transition-colors">
                      <Volume2 className="h-5 w-5" />
                    </span>
                    <span className="text-3xl font-extrabold text-teal-600 mb-2">{converterVal}</span>
                    <span className="text-lg font-medium text-neutral-800 leading-tight group-hover:text-neutral-950 transition-colors px-4">
                      {getNumberString(converterVal)}
                    </span>
                  </button>
                </div>
              </div>
            </section>

            {/* Basic Numbers Grid */}
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-teal-600" />
                  <h2 className="text-2xl font-semibold text-neutral-900">{t.basicNumbers}</h2>
                </div>

                {/* Sub Tab Controls */}
                <div className="inline-flex p-1 bg-stone-200/50 rounded-xl border border-stone-200/80">
                  <button
                    onClick={() => setActiveGridSubTab("0-20")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeGridSubTab === "0-20" 
                        ? "bg-white text-teal-700 shadow-sm" 
                        : "text-stone-600"
                    }`}
                  >
                    {t.tab0_20}
                  </button>
                  <button
                    onClick={() => setActiveGridSubTab("tens")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activeGridSubTab === "tens" 
                        ? "bg-white text-teal-700 shadow-sm" 
                        : "text-stone-600"
                    }`}
                  >
                    {t.tabTens}
                  </button>
                </div>
              </div>

              {/* Sub Tab: 0-20 Grid */}
              {activeGridSubTab === "0-20" && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {Array.from({length: 21}).map((_, i) => (
                    <motion.button
                      key={i} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      onClick={() => playTTS(frenchNumbers[i])}
                      className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-4 hover:border-teal-400 hover:shadow-sm hover:scale-[1.03] transition-all group cursor-pointer text-center min-h-[90px]"
                    >
                      <span className="text-xl font-bold text-neutral-900 group-hover:text-teal-700">{i}</span>
                      <span className="text-sm font-medium text-neutral-500 mt-1">{frenchNumbers[i]}</span>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Sub Tab: Tens Grid */}
              {activeGridSubTab === "tens" && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num, i) => (
                    <motion.button
                      key={num} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      onClick={() => playTTS(frenchNumbers[num])}
                      className="flex flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white p-4 hover:border-teal-400 hover:shadow-sm hover:scale-[1.03] transition-all group cursor-pointer text-center min-h-[90px]"
                    >
                      <span className="text-xl font-bold text-neutral-900 group-hover:text-teal-700">{num}</span>
                      <span className="text-sm font-medium text-neutral-500 mt-1">{frenchNumbers[num]}</span>
                    </motion.button>
                  ))}
                </div>
              )}
            </section>
          </motion.div>
        )}

        {/* Tab 2: Special Counting Rules */}
        {activeMainTab === "special" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {/* Card 70 */}
            <div className="rounded-3xl border border-stone-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-neutral-900">70</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-600 font-semibold border border-teal-100">
                    {t.specialFormula}: 60 + 10
                  </span>
                </div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">soixante-dix</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {lang === "zh" 
                    ? "法语中没有直接表达“七十”的词。拼写为 60 (soixante) 加上 10 (dix)。以此类推，71 为 60 + 11 (soixante et onze)，72 为 60 + 12 (soixante-douze)。"
                    : "There is no single word for 70. It is literally sixty-ten (60 + 10). Following this pattern, 71 is sixty-and-eleven, and 72 is sixty-twelve."}
                </p>
              </div>
              <button 
                onClick={() => playTTS("soixante-dix")}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 text-sm font-semibold transition-colors"
              >
                <Volume2 className="h-4 w-4" /> Listen 70
              </button>
            </div>

            {/* Card 80 */}
            <div className="rounded-3xl border border-stone-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-neutral-900">80</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-600 font-semibold border border-teal-100">
                    {t.specialFormula}: 4 × 20
                  </span>
                </div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">quatre-vingts</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {lang === "zh" 
                    ? "八十的拼写是“四个二十 (4 × 20)”。注意：正好为 80 时 vingt 后面有复数 s，但如果后面跟其他数字（如 81 quatre-vingt-un），则 s 消失。"
                    : "80 is expressed as four-twenties (4 × 20). Note that 'vingts' is plural and takes an 's' only when it ends the number. For 81, it becomes quatre-vingt-un (no 's')."}
                </p>
              </div>
              <button 
                onClick={() => playTTS("quatre-vingts")}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 text-sm font-semibold transition-colors"
              >
                <Volume2 className="h-4 w-4" /> Listen 80
              </button>
            </div>

            {/* Card 90 */}
            <div className="rounded-3xl border border-stone-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-neutral-900">90</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-600 font-semibold border border-teal-100">
                    {t.specialFormula}: (4 × 20) + 10
                  </span>
                </div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">quatre-vingt-dix</h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {lang === "zh" 
                    ? "九十的拼写结合了八十与十，即“四个二十加十”。因此，91 拼写为 quatre-vingt-onze (4×20+11)，92 为 quatre-vingt-douze (4×20+12)。"
                    : "90 is four-twenty-ten (4 × 20 + 10). Following this logic, 91 is four-twenty-eleven (91 = 80 + 11) and 92 is four-twenty-twelve (92 = 80 + 12)."}
                </p>
              </div>
              <button 
                onClick={() => playTTS("quatre-vingt-dix")}
                className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 text-sm font-semibold transition-colors"
              >
                <Volume2 className="h-4 w-4" /> Listen 90
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Time and Date Section */}
        {activeMainTab === "time" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* L'heure Time Telling Sub-section */}
            <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
                <Clock className="h-6 w-6 text-teal-600" />
                <h3 className="text-xl font-semibold text-neutral-900">{t.timeSection}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {TIME_EXPRESSIONS.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => playTTS(ex.fr)}
                    className="group flex flex-col justify-between rounded-2xl border border-stone-150 bg-stone-50/50 p-5 hover:bg-white hover:border-teal-300 hover:shadow-md transition-all text-left min-h-[120px]"
                  >
                    <div>
                      <p className="font-bold text-neutral-900 mb-1 group-hover:text-teal-700 transition-colors">{ex.fr}</p>
                      <p className="text-sm text-neutral-500 font-medium">
                        {t[ex.id]}
                      </p>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-stone-100 text-stone-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                        <Volume2 className="h-4 w-4" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Days and Months side by side */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Days of the Week */}
              <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
                  <Calendar className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-neutral-900">{t.days}</h3>
                </div>

                <div className="space-y-2">
                  {daysFr.map((fr, idx) => (
                    <div 
                      key={fr}
                      onClick={() => playTTS(fr)} 
                      className="flex justify-between items-center py-2.5 px-4 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-neutral-900 group-hover:text-teal-700 transition-colors">{fr}</span>
                        <span className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Volume2 className="h-3.5 w-3.5 text-teal-500" />
                        </span>
                      </div>
                      <span className="text-sm text-neutral-500 font-medium">
                        {dict.subPages.number.daysList[idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Months of the Year */}
              <section className="bg-white border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-6">
                  <Calendar className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-neutral-900">{t.months}</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {monthsFr.map((fr, idx) => (
                    <div 
                      key={fr}
                      onClick={() => playTTS(fr)} 
                      className="flex justify-between items-center py-2 px-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="font-bold text-neutral-800 text-sm group-hover:text-teal-700 transition-colors truncate">{fr}</span>
                      </div>
                      <span className="text-xs text-neutral-500 truncate text-right">
                        {dict.subPages.number.monthsList[idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        )}

        {/* Section 4: Premium Interlocking Listening Quiz (Dark Mode) */}
        <section className="mt-20 rounded-[2.5rem] bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Calculator className="w-64 h-64 text-teal-400" />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-800 pb-6 mb-8">
              <div>
                <h2 className="text-3xl font-semibold">{t.quizTitle}</h2>
                <p className="mt-2 text-stone-400 text-sm max-w-lg">{t.quizDesc}</p>
              </div>

              {/* Quiz difficulty & mode config */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex p-1 bg-stone-800 rounded-xl border border-stone-700">
                  <button
                    onClick={() => setQuizMode("spelling")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      quizMode === "spelling" ? "bg-teal-600 text-white shadow-sm" : "text-stone-400"
                    }`}
                  >
                    {t.quizModeSpelling}
                  </button>
                  <button
                    onClick={() => setQuizMode("listening")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      quizMode === "listening" ? "bg-teal-600 text-white shadow-sm" : "text-stone-400"
                    }`}
                  >
                    {t.quizModeListening}
                  </button>
                </div>

                <div className="inline-flex p-1 bg-stone-800 rounded-xl border border-stone-700">
                  {(["facile", "moyen", "difficile"] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setQuizLevel(lvl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        quizLevel === lvl ? "bg-stone-700 text-teal-400 shadow-sm" : "text-stone-400"
                      }`}
                    >
                      {lvl === "facile" ? t.levelFacile : lvl === "moyen" ? t.levelMoyen : t.levelDifficile}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
              {/* Question display area */}
              <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center min-h-[160px]">
                {quizMode === "spelling" ? (
                  <>
                    <p className="text-sm text-stone-400 mb-2 font-medium">{t.quizSpellingInstruction}</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={practiceNumber}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-5xl md:text-6xl font-extrabold text-teal-400 tracking-tight"
                      >
                        {practiceNumber}
                      </motion.div>
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-stone-400 mb-2 font-medium">{t.quizListeningInstruction}</p>
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-stone-800 border border-stone-700 animate-pulse">
                      <Volume1 className="w-10 h-10 text-teal-400" />
                    </div>
                  </>
                )}
                
                <button 
                  onClick={handlePlayNumber}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors text-sm font-semibold cursor-pointer border border-stone-700"
                >
                  <PlayCircle className="w-4 h-4 text-teal-400" />
                  {t.listen}
                </button>
              </div>

              {/* Answer input & feedback */}
              <div className="flex-1 w-full max-w-sm">
                <input
                  type="text"
                  value={numberInput}
                  onChange={(e) => setNumberInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && checkNumber()}
                  placeholder={quizMode === "spelling" ? t.converterPlaceholder : t.quizPlaceholder}
                  className={`w-full rounded-2xl border p-4 text-center text-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                    numberIsCorrect === true ? "border-teal-500 bg-teal-950/40 text-teal-200" :
                    numberIsCorrect === false ? "border-red-500 bg-red-950/40 text-red-200" :
                    "border-stone-700 bg-stone-800 text-white placeholder-stone-500"
                  }`}
                />
                
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={checkNumber}
                    className="flex-1 rounded-2xl bg-teal-600 hover:bg-teal-500 px-6 py-3.5 text-sm font-bold text-white transition-colors cursor-pointer"
                  >
                    {t.check}
                  </button>
                  <button
                    onClick={() => generateNewNumber()}
                    className="rounded-2xl border border-stone-700 bg-stone-850 hover:bg-stone-800 px-6 py-3.5 text-sm font-bold text-stone-300 transition-colors cursor-pointer"
                  >
                    {t.next}
                  </button>
                </div>
                
                <div className="mt-6 text-center h-8 flex items-center justify-center">
                  {numberIsCorrect === true && (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-teal-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5" /> {numberFeedback}
                    </motion.div>
                  )}
                  {numberIsCorrect === false && (
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-red-400 font-semibold flex items-center gap-1.5">
                      <AlertCircle className="w-5 h-5 animate-bounce" /> {numberFeedback}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
