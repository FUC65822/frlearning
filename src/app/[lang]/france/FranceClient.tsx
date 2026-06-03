"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Flag, 
  Map, 
  Landmark, 
  ChevronDown, 
  Volume2, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  HelpCircle,
  AlertCircle,
  Waves,
  Utensils
} from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

// -- Gastronomy Dataset --
const GASTRONOMY_DATA = [
  { id: "baguette", fr: "La baguette", sentence: "Le pain traditionnel français, inscrit au patrimoine de l'UNESCO.", color: "text-amber-600", bg: "bg-amber-50" },
  { id: "croissant", fr: "Le croissant", sentence: "La fameuse viennoiserie feuilletée au beurre, croustillante et dorée.", color: "text-orange-500", bg: "bg-orange-50" },
  { id: "camembert", fr: "Le camembert", sentence: "Le fromage normand le plus célèbre, fait de lait de vache crémeux.", color: "text-yellow-600", bg: "bg-yellow-50" },
  { id: "macaron", fr: "Le macaron", sentence: "Le petit gâteau coloré, croquant à l'extérieur et moelleux à l'intérieur.", color: "text-rose-500", bg: "bg-rose-50" },
  { id: "vinrouge", fr: "Le vin rouge", sentence: "Le symbole de la gastronomie et de l'art de vivre français dans le monde.", color: "text-red-650", bg: "bg-red-50" },
  { id: "crepe", fr: "La crêpe", sentence: "Une fine pâte d'origine bretonne, dégustée sucrée ou salée.", color: "text-amber-500", bg: "bg-amber-50" }
];

// -- Cultural Quiz Questions --
const QUIZ_QUESTIONS = [
  {
    q_zh: "法国因其国土形状形似什么，常常被昵称为什么？",
    q_en: "Due to its geographic shape, France is often nicknamed what?",
    a: "L'Hexagone (六边形)",
    ops: ["Le Pentagone", "L'Hexagone (六边形)", "Le Triangle", "L'Octogone"]
  },
  {
    q_zh: "哪个法国地标是为1889年世界博览会而建造的？",
    q_en: "Which French landmark was built for the 1889 World's Fair?",
    a: "La Tour Eiffel (埃菲尔铁塔)",
    ops: ["L'Arc de Triomphe", "Le Louvre", "La Tour Eiffel (埃菲尔铁塔)", "Le Panthéon"]
  },
  {
    q_zh: "哪个法国大区以无边无际的紫色薰衣草田闻名于世？",
    q_en: "Which French region is globally famous for its lavender fields?",
    a: "La Provence (普罗旺斯)",
    ops: ["La Bretagne", "La Provence (普罗旺斯)", "La Normandie", "L'Alsace"]
  },
  {
    q_zh: "法兰西共和国的国家格言是什么？",
    q_en: "What is the official motto of the French Republic?",
    a: "Liberté, Égalité, Fraternité",
    ops: ["Liberté, Égalité, Fraternité", "Justice, Paix, Travail", "Union, Force, Courage", "Honneur, Patrie, Devoir"]
  },
  {
    q_zh: "巴黎最古老的昵称是什么？",
    q_en: "What is the famous nickname of Paris?",
    a: "La Ville Lumière (光之城)",
    ops: ["La Ville Verte", "La Ville d'Art", "La Ville Lumière (光之城)", "La Ville Bleue"]
  },
  {
    q_zh: "法国国王路易十四（太阳王）建造了哪座奢华的宫殿？",
    q_en: "Which opulent palace was built by King Louis XIV (The Sun King)?",
    a: "Le Château de Versailles (凡尔赛宫)",
    ops: ["Le Palais du Louvre", "Le Château de Versailles (凡尔赛宫)", "Le Château de Chambord", "Le Palais de l'Élysée"]
  }
];

// -- Translations (Encapsulated for the reset) --
const getTrans = (lang: string) => {
  const t: Record<string, any> = {
    zh: {
      title: "探索法兰西 (Tour de France)",
      desc: "欢迎来到法兰西，一片承载着千年历史、孕育了无数思想与艺术，并将精致生活 (art de vivre) 融入日常的土地。",
      historyTitle: "法国历史沿革 (Histoire)",
      geoTitle: "风光与地理 (Géographie)",
      geoDesc: "法国因其国土形似六边形而被称为“L'Hexagone”。从阿尔卑斯山峰到地中海蔚蓝海岸，其自然景观是画家调色板上最丰富的色彩。",
      landmarksTitle: "不朽的地标 (Monuments)",
      gastronomyTitle: "法国美食大典 (Gastronomie)",
      gastronomySubtitle: "法国美食被列入联合国教科文组织非物质文化遗产。探索这些最具法式风情的代表性美食，点击卡片听发音！",
      quizTitle: "法国文化趣味小测验",
      quizSubtitle: "测试您的法国文化、历史与地理常识，选出正确的选项！",
      scoreLabel: "您的得分",
      funFactsTitle: "趣味文化冷知识 (Le Saviez-vous ?)",
      baguette: "法棍面包",
      croissant: "牛角面包",
      camembert: "卡芒贝尔奶酪",
      macaron: "马卡龙",
      vinrouge: "红葡萄酒",
      crepe: "可丽饼",
      correct: "回答正确！🎉",
      wrong: "再试一次",
      backHome: "返回首页",
      submit: "提交答案",
      tryAgain: "重新测验",
      check: "检查",
      next: "下一题",
      perfect: "🎉 完美！全部正确！",
      listen: "点击发音",
      alpes: "阿尔卑斯山 (Les Alpes)",
      provence: "普罗旺斯 (La Provence)",
      cote_d_azur: "蔚蓝海岸 (La Côte d'Azur)",
      val_de_loire: "卢瓦尔河谷 (Le Val de Loire)"
    },
    en: {
      title: "Explore France (Tour de France)",
      desc: "Welcome to France, a land of history, art, and the art of living (art de vivre).",
      historyTitle: "French History Timeline (Histoire)",
      geoTitle: "Landscape & Geography (Géographie)",
      geoDesc: "France is often called 'L'Hexagone' due to its six-sided shape. From the Alps to the Mediterranean Riviera, its diverse landscapes have inspired artists for centuries.",
      landmarksTitle: "Immortal Landmarks (Monuments)",
      gastronomyTitle: "French Gastronomy (Gastronomie)",
      gastronomySubtitle: "French gastronomy is registered as a UNESCO intangible cultural heritage. Explore these iconic delicacies!",
      quizTitle: "Cultural Trivia Quiz",
      quizSubtitle: "Test your knowledge of French culture, history, and geography!",
      scoreLabel: "Your Score",
      funFactsTitle: "Cultural Fun Facts (Le Saviez-vous ?)",
      baguette: "Baguette",
      croissant: "Croissant",
      camembert: "Camembert Cheese",
      macaron: "Macaron",
      vinrouge: "Red Wine",
      crepe: "Crêpe",
      correct: "Correct! 🎉",
      wrong: "Try again",
      backHome: "Back to Home",
      submit: "Submit",
      tryAgain: "Try Again",
      check: "Check",
      next: "Next",
      perfect: "🎉 Perfect! All correct!",
      listen: "Listen",
      alpes: "The Alps (Les Alpes)",
      provence: "Provence (La Provence)",
      cote_d_azur: "The French Riviera (La Côte d'Azur)",
      val_de_loire: "The Loire Valley (Le Val de Loire)"
    },
    fr: {
      title: "Découvrir la France",
      desc: "Bienvenue en France, un pays d'histoire, d'art et d'art de vivre.",
      historyTitle: "Chronologie Historique (Histoire)",
      geoTitle: "Paysages et Géographie (Géographie)",
      geoDesc: "La France est souvent surnommée 'L'Hexagone' en raison de sa forme. Des sommets des Alpes à la Côte d'Azur, ses paysages variés ont inspiré les artistes.",
      landmarksTitle: "Monuments Immortels",
      gastronomyTitle: "Gastronomie Française",
      gastronomySubtitle: "La gastronomie française est inscrite au patrimoine culturel immatériel de l'UNESCO. Découvrez ces spécialités !",
      quizTitle: "Quiz de Culture Générale",
      quizSubtitle: "Testez vos connaissances sur la culture, l'histoire et la géographie de la France !",
      scoreLabel: "Votre Score",
      funFactsTitle: "Le Saviez-vous ?",
      baguette: "La baguette",
      croissant: "Le croissant",
      camembert: "Le camembert",
      macaron: "Le macaron",
      vinrouge: "Le vin rouge",
      crepe: "La crêpe",
      correct: "Correct ! 🎉",
      wrong: "Réessayez",
      backHome: "Retour à l'accueil",
      submit: "Valider",
      tryAgain: "Recommencer",
      check: "Vérifier",
      next: "Suivant",
      perfect: "🎉 Parfait ! Tout est correct !",
      listen: "Écouter",
      alpes: "Les Alpes",
      provence: "La Provence",
      cote_d_azur: "La Côte d'Azur",
      val_de_loire: "Le Val de Loire"
    },
    es: {
      title: "Explorar Francia",
      desc: "Bienvenido a Francia, una tierra de historia, arte y el arte de vivir (art de vivre).",
      historyTitle: "Cronología de la Historia",
      geoTitle: "Paisajes y Geografía",
      geoDesc: "Francia es a menudo apodada 'L'Hexagone' por su forma. Desde los Alpes hasta la Costa Azul, sus variados paisajes han inspirado a artistas.",
      landmarksTitle: "Monumentos Inmortales",
      gastronomyTitle: "Gastronomía Francesa",
      gastronomySubtitle: "La gastronomía francesa está inscrita en el patrimonio inmaterial de la UNESCO. ¡Descubre estas delicias!",
      quizTitle: "Cuestionario de Cultura",
      quizSubtitle: "¡Pon a prueba tus conocimientos sobre la cultura, la historia y la geografía de Francia!",
      scoreLabel: "Tu Puntuación",
      funFactsTitle: "¿Lo Sabías?",
      baguette: "La baguette",
      croissant: "El croissant",
      camembert: "El camembert",
      macaron: "El macaron",
      vinrouge: "El vino tinto",
      crepe: "La crêpe",
      correct: "¡Correcto! 🎉",
      wrong: "Inténtalo de nuevo",
      backHome: "Volver",
      submit: "Enviar",
      tryAgain: "Reintentar",
      check: "Comprobar",
      next: "Siguiente",
      perfect: "¡Perfecto! ¡Todo correcto!",
      listen: "Escuchar",
      alpes: "Los Alpes",
      provence: "La Provenza",
      cote_d_azur: "La Costa Azul",
      val_de_loire: "El Valle del Loira"
    },
    de: {
      title: "Frankreich Entdecken",
      desc: "Willkommen in Frankreich, einem Land der Geschichte, Kunst und der Lebenskunst (art de vivre).",
      historyTitle: "Historische Chronologie",
      geoTitle: "Landschaft & Geografie",
      geoDesc: "Frankreich wird aufgrund seiner Form oft als 'L'Hexagone' bezeichnet. Von den Alpen bis zur Côte d'Azur haben die Landschaften Künstler inspiriert.",
      landmarksTitle: "Unsterbliche Wahrzeichen",
      gastronomyTitle: "Französische Gastronomie",
      gastronomySubtitle: "Die französische Gastronomie gehört zum immateriellen UNESCO-Kulturerbe. Entdecken Sie diese Spezialitäten!",
      quizTitle: "Kultur-Quiz",
      quizSubtitle: "Testen Sie Ihr Wissen über die Kultur, Geschichte und Geografie Frankreichs!",
      scoreLabel: "Ihr Punktestand",
      funFactsTitle: "Wussten Sie schon ?",
      baguette: "Das Baguette",
      croissant: "Das Croissant",
      camembert: "Der Camembert",
      macaron: "Das Macaron",
      vinrouge: "Der Rotwein",
      crepe: "Das Crêpe",
      correct: "Richtig! 🎉",
      wrong: "Versuchen Sie es noch einmal",
      backHome: "Zur Startseite",
      submit: "Absenden",
      tryAgain: "Erneut versuchen",
      check: "Prüfen",
      next: "Weiter",
      perfect: "🎉 Perfekt! Alles richtig!",
      listen: "Hören",
      alpes: "Die Alpen",
      provence: "Die Provence",
      cote_d_azur: "Die Côte d'Azur",
      val_de_loire: "Das Loiretal"
    }
  };
  return t[lang] || t.en;
};

export default function FranceClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = getTrans(lang);
  const [openFactIndex, setOpenFactIndex] = useState<number | null>(null);

  // Quiz State
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Shuffle and choose 4 questions
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledQuestions(shuffled);
  }, []);

  const handleOptionSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    shuffledQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.a) score++;
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const finalScore = calculateScore();
    const percent = Math.round((finalScore / shuffledQuestions.length) * 100);
    if (typeof window !== "undefined") {
      try {
        const progressData = {
          completed: true,
          score: percent,
          correctCount: finalScore,
          totalCount: shuffledQuestions.length,
          lastPlayed: new Date().toISOString().slice(0, 10),
          regionsVisited: ["IDF", "PACA", "NOR"]
        };
        localStorage.setItem("frlearning_progress_france", JSON.stringify(progressData));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleRefreshQuiz = () => {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledQuestions(shuffled);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const score = isSubmitted ? calculateScore() : 0;
  const totalQ = shuffledQuestions.length;
  const percentage = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 font-sans selection:bg-blue-200">
      <SubpageHeader dict={dict} lang={lang} colorTheme="blue" />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-stone-100 mb-6 text-blue-600"
          >
            <Flag className="h-8 w-8 animate-pulse" strokeWidth={1.5} />
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

        {/* Section 1: History Timeline */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4 border-b border-stone-200 pb-4">
            <Clock className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-900">{t.historyTitle}</h2>
          </div>

          <div className="relative border-l border-stone-200 ml-3 md:ml-4 space-y-8 mt-8">
            {dict.subPages.france.history.map((item: any, idx: number) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="relative pl-8 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 ring-4 ring-white group-hover:scale-125 transition-transform"></div>
                
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-neutral-900 group-hover:text-blue-700 transition-colors leading-tight">{item.period}</h3>
                  <button 
                    onClick={() => playTTS(item.period)} 
                    className="opacity-0 group-hover:opacity-100 p-1 text-stone-400 hover:text-blue-600 hover:bg-stone-100 rounded-full transition-all cursor-pointer"
                  >
                    <Volume2 className="h-3 w-3" />
                  </button>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Scenery & Regions */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4 border-b border-stone-200 pb-4">
            <Map className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-900">{t.geoTitle}</h2>
          </div>
          <p className="mb-6 text-sm text-neutral-500 max-w-xl">{t.geoDesc}</p>
          
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {dict.subPages.france.scenery.map((item: any, idx: number) => {
              const langIds = ["alpes", "provence", "cote_d_azur", "val_de_loire"];
              const key = langIds[idx] || "alpes";
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group min-h-[160px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-blue-900 text-lg group-hover:text-blue-700 transition-colors">{t[key] || item.title}</h3>
                      <button 
                        onClick={() => playTTS(t[key] || item.title)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 text-stone-400 hover:text-blue-600 hover:bg-stone-50 rounded-full transition-all cursor-pointer"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Landmarks */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4 border-b border-stone-200 pb-4">
            <Landmark className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-900">{t.landmarksTitle}</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {dict.subPages.france.landmarks.map((item: any, idx: number) => {
              const speakName = idx === 0 ? "La Tour Eiffel" : idx === 1 ? "Le Musée du Louvre" : idx === 2 ? "L'Arc de Triomphe" : "La Cathédrale Notre-Dame de Paris";
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group min-h-[160px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-neutral-950 text-lg group-hover:text-blue-700 transition-colors">{item.title}</h3>
                      <button 
                        onClick={() => playTTS(speakName)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 text-stone-400 hover:text-blue-600 hover:bg-stone-50 rounded-full transition-all cursor-pointer"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section 4: French Gastronomy Showcase (New!) */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4 border-b border-stone-200 pb-4">
            <Utensils className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-900">{t.gastronomyTitle}</h2>
          </div>
          <p className="mb-6 text-sm text-neutral-500 max-w-xl">{t.gastronomySubtitle}</p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {GASTRONOMY_DATA.map((food) => (
              <button
                key={food.id}
                onClick={() => playTTS(food.fr)}
                className="flex flex-col justify-between items-start p-5 rounded-3xl border border-stone-200 bg-white hover:border-blue-300 hover:shadow-md hover:scale-[1.02] transition-all text-left group cursor-pointer min-h-[140px]"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100/50">
                    {t[food.id]}
                  </span>
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors flex-shrink-0">
                    <Volume2 className="h-4 w-4 animate-pulse" />
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <p className="font-bold text-neutral-950 group-hover:text-blue-700 transition-colors text-base leading-tight">{food.fr}</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-normal font-medium">{food.sentence}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Section 5: Fun Facts Accordion */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4 border-b border-stone-200 pb-4">
            <Sparkles className="h-6 w-6 text-blue-700" />
            <h2 className="text-2xl font-semibold text-neutral-900">{t.funFactsTitle}</h2>
          </div>

          <div className="space-y-3 mt-6">
            {dict.subPages.france.funFacts.map((fact: any, idx: number) => {
              const isOpen = openFactIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "border-blue-300 bg-white shadow-md" : "border-stone-200 bg-white hover:border-stone-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenFactIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-neutral-850 hover:bg-stone-50 transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base leading-snug">{fact.q}</span>
                    <ChevronDown className={`h-5 w-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-stone-100 bg-blue-50/20"
                      >
                        <div className="p-5 text-sm text-blue-900 font-medium leading-relaxed bg-blue-50/10">
                          {fact.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: France Cultural Trivia Quiz (Dark Mode) */}
        <section className="rounded-[2.5rem] bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Landmark className="w-64 h-64 text-blue-400" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-stone-850 pb-6 mb-8">
              <div>
                <h2 className="text-3xl font-semibold">{t.quizTitle}</h2>
                <p className="mt-2 text-stone-400 text-sm max-w-lg">{t.quizSubtitle}</p>
              </div>
              <button
                onClick={handleRefreshQuiz}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-sm font-semibold transition-all border border-stone-700 cursor-pointer"
              >
                <RefreshCw className="h-4 w-4 text-blue-400" />
                {dict.subPages.magasin.refresh}
              </button>
            </div>

            {/* MCQ Quiz Layout */}
            <div className="space-y-10">
              {shuffledQuestions.map((q, idx) => {
                const userAnswer = userAnswers[idx] || "";
                let isCorrect = false;
                if (isSubmitted) {
                  isCorrect = userAnswer === q.a;
                }

                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="space-y-4"
                  >
                    <p className="font-bold text-lg text-stone-100">
                      {idx + 1}. {lang === "zh" ? q.q_zh : q.q_en}
                    </p>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      {q.ops.map((option: string) => {
                        const isSelected = userAnswer === option;
                        let btnStyle = "border-stone-800 bg-stone-850 hover:bg-stone-800 hover:border-stone-700 text-stone-300";
                        
                        if (isSubmitted) {
                          if (option === q.a) {
                            btnStyle = "border-emerald-600 bg-emerald-950/40 text-emerald-200";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "border-red-600 bg-red-950/40 text-red-200";
                          } else {
                            btnStyle = "border-stone-850 bg-stone-900 text-stone-600";
                          }
                        } else if (isSelected) {
                          btnStyle = "border-blue-500 bg-blue-950/40 text-blue-200";
                        }

                        return (
                          <button
                            key={option}
                            onClick={() => handleOptionSelect(idx, option)}
                            disabled={isSubmitted}
                            className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left font-medium transition-all ${
                              !isSubmitted && "hover:scale-[1.01]"
                            } ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && option === q.a && <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />}
                            {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Submit & score summary */}
            <div className="mt-12 border-t border-stone-800 pt-8 flex flex-wrap gap-4 items-center">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(userAnswers).length !== totalQ}
                  className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-sm font-bold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {t.submit}
                </button>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                  <div className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold ${
                    percentage === 100 ? "bg-emerald-950/50 text-emerald-300 border border-emerald-800/40" : "bg-amber-950/50 text-amber-300 border border-amber-800/40"
                  }`}>
                    {percentage === 100 ? t.perfect : `${t.scoreLabel}: ${score} / ${totalQ} (${percentage}%)`}
                  </div>
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setIsSubmitted(false);
                    }}
                    className="rounded-2xl border border-stone-800 bg-stone-850 hover:bg-stone-800 text-stone-200 px-6 py-3 text-sm font-bold transition-all cursor-pointer"
                  >
                    {t.tryAgain}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
