"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  CloudRain, 
  Cloud, 
  CloudSun,
  Snowflake, 
  Wind, 
  CloudLightning,
  Volume2,
  Thermometer,
  ThermometerSun,
  ThermometerSnowflake,
  PlayCircle,
  CloudFog,
  CloudHail,
  Rainbow,
  Sprout,
  Leaf,
  Waves
} from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

// -- Content Data --
const WEATHER_CATEGORIES = [
  { id: "soleil", fr: "Il fait beau", fr_sub: "Le soleil", icon: Sun, color: "text-amber-500", bg: "bg-amber-50" },
  { id: "nuage", fr: "Il y a des nuages", fr_sub: "Nuageux", icon: Cloud, color: "text-slate-500", bg: "bg-slate-50" },
  { id: "pluie", fr: "Il pleut", fr_sub: "La pluie", icon: CloudRain, color: "text-sky-500", bg: "bg-sky-50" },
  { id: "neige", fr: "Il neige", fr_sub: "La neige", icon: Snowflake, color: "text-indigo-400", bg: "bg-indigo-50" },
  { id: "vent", fr: "Il y a du vent", fr_sub: "Le vent", icon: Wind, color: "text-teal-500", bg: "bg-teal-50" },
  { id: "orage", fr: "Il y a de l'orage", fr_sub: "Orageux", icon: CloudLightning, color: "text-purple-500", bg: "bg-purple-50" },
  { id: "brouillard", fr: "Il y a du brouillard", fr_sub: "Le brouillard", icon: CloudFog, color: "text-zinc-500", bg: "bg-zinc-100" },
  { id: "grele", fr: "Il grêle", fr_sub: "La grêle", icon: CloudHail, color: "text-cyan-500", bg: "bg-cyan-50" },
  { id: "arcenciel", fr: "Il y a un arc-en-ciel", fr_sub: "L'arc-en-ciel", icon: Rainbow, color: "text-pink-500", bg: "bg-rose-50" },
];

const TEMP_DATA = [
  { id: "chaud", fr: "Il fait chaud", icon: ThermometerSun, color: "text-red-500", bg: "bg-red-50" },
  { id: "froid", fr: "Il fait froid", icon: ThermometerSnowflake, color: "text-blue-500", bg: "bg-blue-50" },
  { id: "doux", fr: "Il fait doux", icon: Thermometer, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "gele", fr: "Il gèle", icon: Snowflake, color: "text-cyan-600", bg: "bg-cyan-50" },
  { id: "frais", fr: "Il fait frais", icon: Thermometer, color: "text-sky-400", bg: "bg-sky-50" },
];

const SEASONS_DATA = [
  { id: "printemps", fr: "Le printemps", fr_sub: "Au printemps", icon: Sprout, color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "ete", fr: "L'été", fr_sub: "En été", icon: Waves, color: "text-amber-500", bg: "bg-amber-50" },
  { id: "automne", fr: "L'automne", fr_sub: "En automne", icon: Leaf, color: "text-orange-500", bg: "bg-orange-50" },
  { id: "hiver", fr: "L'hiver", fr_sub: "En hiver", icon: Snowflake, color: "text-blue-500", bg: "bg-blue-50" },
];

const EXTRAS = [
  { fr: "Quel temps fait-il ?", id: "q_weather" },
  { fr: "Il fait un froid de canard.", id: "q_duck" },
  { fr: "Il pleut des cordes.", id: "q_ropes" },
  { fr: "Il fait un temps de chien.", id: "q_dog" },
  { fr: "Après la pluie, le beau temps.", id: "q_silver" },
  { fr: "Parler de la pluie et du beau temps.", id: "q_talk" },
  { fr: "Avoir la tête dans les nuages.", id: "q_clouds" },
];

// -- Translations (Encapsulated for the reset) --
const getTrans = (lang: string) => {
  const t: Record<string, any> = {
    zh: {
      title: "天气与四季探索",
      subtitle: "点击卡片探索天气，聆听发音并感受场景特效",
      basic: "基础与中级天气",
      temperature: "温度表达",
      seasons: "四季表达 (Les Saisons)",
      seasons_subtitle: "在法语中，说在某个季节要使用介词 au (春) 或 en (夏、秋、冬)",
      idioms: "常用法语地道天气表达",
      soleil: "天气很好 / 太阳",
      nuage: "多云 / 阴天",
      pluie: "下雨 / 雨",
      neige: "下雪 / 雪",
      vent: "刮风 / 风",
      orage: "打雷 / 雷暴",
      brouillard: "有雾 / 雾天",
      grele: "下冰雹 / 冰雹",
      arcenciel: "有彩虹 / 彩虹",
      chaud: "天气很热",
      froid: "天气很冷",
      doux: "天气温和",
      gele: "结冰 / 冰冻",
      frais: "天气凉爽",
      printemps: "春天 (阳性名词)",
      ete: "夏天 (阳性名词)",
      automne: "秋天 (阳性名词)",
      hiver: "冬天 (阳性名词)",
      q_weather: "今天天气怎么样？",
      q_duck: "冷得要命 (冷得像鸭子)",
      q_ropes: "倾盆大雨 (下绳子)",
      q_dog: "天气极其恶劣 (狗天气)",
      q_silver: "雨过天晴 (否极泰来)",
      q_talk: "闲聊 / 扯家常 (谈论雨和晴天)",
      q_clouds: "心不在焉 / 幻想 (头在云里)",
      quiz_title: "场景测验",
      quiz_desc: "选择与法语匹配的正确图标",
      correct: "回答正确！",
      wrong: "再试一次",
    },
    en: {
      title: "Weather & Seasons Explorer",
      subtitle: "Click cards to explore the weather, hear the pronunciation, and feel the visual effects.",
      basic: "Basic & Intermediate Weather",
      temperature: "Temperature",
      seasons: "The Seasons (Les Saisons)",
      seasons_subtitle: "In French, use 'au' for spring, and 'en' for summer, autumn, and winter.",
      idioms: "Idioms & Expressions",
      soleil: "It is nice / The sun",
      nuage: "It is cloudy / Cloud",
      pluie: "It is raining / Rain",
      neige: "It is snowing / Snow",
      vent: "It is windy / Wind",
      orage: "There is a storm / Stormy",
      brouillard: "It is foggy / Fog",
      grele: "It is hailing / Hail",
      arcenciel: "There is a rainbow / Rainbow",
      chaud: "It is hot",
      froid: "It is cold",
      doux: "It is mild",
      gele: "It is freezing",
      frais: "It is cool / chilly",
      printemps: "Spring (masculine)",
      ete: "Summer (masculine)",
      automne: "Autumn (masculine)",
      hiver: "Winter (masculine)",
      q_weather: "What is the weather like?",
      q_duck: "It is freezing cold (duck cold)",
      q_ropes: "It is raining cats and dogs (ropes)",
      q_dog: "The weather is terrible (dog weather)",
      q_silver: "After the rain, good weather (Every cloud has a silver lining)",
      q_talk: "To make small talk (talk about rain and good weather)",
      q_clouds: "To have one's head in the clouds / daydream",
      quiz_title: "Scenario Quiz",
      quiz_desc: "Select the correct icon that matches the French phrase",
      correct: "Correct!",
      wrong: "Try again",
    },
    fr: {
      title: "Météo et Saisons",
      subtitle: "Cliquez sur les cartes pour explorer la météo, écouter la prononciation et ressentir l'ambiance.",
      basic: "Météo de base et intermédiaire",
      temperature: "Température",
      seasons: "Les Saisons",
      seasons_subtitle: "En français, on utilise 'au' pour le printemps, et 'en' pour l'été, l'automne et l'hiver.",
      idioms: "Expressions idiomatiques",
      soleil: "Il fait beau / Le soleil",
      nuage: "Nuageux / Le nuage",
      pluie: "Il pleut / La pluie",
      neige: "Il neige / La neige",
      vent: "Il y a du vent / Le vent",
      orage: "Il y a de l'orage / Orageux",
      brouillard: "Il y a du brouillard / Le brouillard",
      grele: "Il grêle / La grêle",
      arcenciel: "Il y a un arc-en-ciel / L'arc-en-ciel",
      chaud: "Il fait chaud",
      froid: "Il fait froid",
      doux: "Il fait doux",
      gele: "Il gèle",
      frais: "Il fait frais",
      printemps: "Printemps (masculin)",
      ete: "Été (masculin)",
      automne: "Automne (masculin)",
      hiver: "Hiver (masculin)",
      q_weather: "Quel temps fait-il ?",
      q_duck: "Il fait un froid de canard.",
      q_ropes: "Il pleut des cordes.",
      q_dog: "Il fait un temps de chien.",
      q_silver: "Après la pluie, le beau temps.",
      q_talk: "Parler de la pluie et du beau temps.",
      q_clouds: "Avoir la tête dans les nuages.",
      quiz_title: "Quiz de scénario",
      quiz_desc: "Sélectionnez l'icône correcte qui correspond à la phrase",
      correct: "Correct !",
      wrong: "Réessayez",
    },
    es: {
      title: "El Clima y las Estaciones",
      subtitle: "Haz clic en las tarjetas para explorar el clima, escuchar la pronunciación y sentir el ambiente.",
      basic: "Clima Básico e Intermedio",
      temperature: "Temperatura",
      seasons: "Las Estaciones",
      seasons_subtitle: "En francés, se usa 'au' para la primavera y 'en' para el verano, el otoño y el invierno.",
      idioms: "Expresiones Idiomáticas",
      soleil: "Hace buen tiempo / El sol",
      nuage: "Está nublado / La nube",
      pluie: "Está lloviendo / La lluvia",
      neige: "Está nevando / La nieve",
      vent: "Hace viento / El viento",
      orage: "Hay tormenta / Tormentoso",
      brouillard: "Hay niebla / La niebla",
      grele: "Graniza / El granizo",
      arcenciel: "Hay un arcoíris / El arcoíris",
      chaud: "Hace calor",
      froid: "Hace frío",
      doux: "El clima es suave",
      gele: "Está helando",
      frais: "Hace fresco",
      printemps: "Primavera (masculino)",
      ete: "Verano (masculino)",
      automne: "Otoño (masculino)",
      hiver: "Invierno (masculino)",
      q_weather: "¿Qué tiempo hace?",
      q_duck: "Hace un frío que pela",
      q_ropes: "Llueve a cántaros",
      q_dog: "Hace un tiempo de perros",
      q_silver: "Después de la lluvia sale el sol",
      q_talk: "Hablar del tiempo / charlar",
      q_clouds: "Tener la cabeza en las nubes",
      quiz_title: "Cuestionario",
      quiz_desc: "Selecciona el icono correcto que coincida con la frase en francés",
      correct: "¡Correcto!",
      wrong: "Inténtalo de nuevo",
    },
    de: {
      title: "Wetter & Jahreszeiten",
      subtitle: "Klicken Sie auf die Karten, um das Wetter zu erkunden, die Aussprache zu hören und die Stimmung zu fühlen.",
      basic: "Grundlegendes & Mittleres Wetter",
      temperature: "Temperatur",
      seasons: "Die Jahreszeiten (Les Saisons)",
      seasons_subtitle: "Im Französischen verwendet man 'au' für den Frühling und 'en' für Sommer, Herbst und Winter.",
      idioms: "Redewendungen",
      soleil: "Das Wetter ist schön / Die Sonne",
      nuage: "Es ist bewölkt / Die Wolke",
      pluie: "Es regnet / Der Regen",
      neige: "Es schneit / Der Schnee",
      vent: "Es ist windig / Der Wind",
      orage: "Es gibt ein Gewitter / Stürmisch",
      brouillard: "Es ist neblig / Der Nebel",
      grele: "Es hagelt / Der Hagel",
      arcenciel: "Es gibt einen Regenbogen / Der Regenbogen",
      chaud: "Es ist heiß",
      froid: "Es ist kalt",
      doux: "Es ist mild",
      gele: "Es friert",
      frais: "Es ist frisch",
      printemps: "Frühling (maskulin)",
      ete: "Sommer (maskulin)",
      automne: "Herbst (maskulin)",
      hiver: "Winter (maskulin)",
      q_weather: "Wie ist das Wetter?",
      q_duck: "Es ist saukalt",
      q_ropes: "Es regnet in Strömen",
      q_dog: "Es ist ein Hundewetter",
      q_silver: "Auf Regen folgt Sonnenschein",
      q_talk: "Über das Wetter plaudern / Smalltalk machen",
      q_clouds: "Mit dem Kopf in den Wolken stecken",
      quiz_title: "Szenario-Quiz",
      quiz_desc: "Wählen Sie das richtige Symbol passend zur französischen Phrase",
      correct: "Richtig!",
      wrong: "Versuchen Sie es noch einmal",
    }
  };
  return t[lang] || t.en;
};

// -- Effects Components --
const RainEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-6 bg-sky-400 rounded-full"
        initial={{ y: -20, x: 20 + i * 15, opacity: 0 }}
        animate={{ y: 150, opacity: [0, 1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "linear" }}
      />
    ))}
  </div>
);

const SnowEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-indigo-200 rounded-full"
        initial={{ y: -10, x: 10 + i * 15, opacity: 0 }}
        animate={{ y: 120, x: (10 + i * 15) + (i % 2 === 0 ? 15 : -15), opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const SunEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 flex items-center justify-center">
    <motion.div
      className="w-32 h-32 bg-amber-300 rounded-full blur-2xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const WindEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-0.5 bg-teal-400 rounded-full"
        initial={{ x: -50, y: 30 + i * 15, width: 20, opacity: 0 }}
        animate={{ x: 200, width: 60, opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
      />
    ))}
  </div>
);

const FogEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <motion.div
      className="absolute top-1/4 left-0 w-32 h-10 bg-zinc-300 rounded-full blur-md"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 280, opacity: [0, 0.6, 0.6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute top-2/3 left-0 w-40 h-12 bg-zinc-300 rounded-full blur-lg"
      initial={{ x: -150, opacity: 0 }}
      animate={{ x: 280, opacity: [0, 0.7, 0.7, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay: 2, ease: "linear" }}
    />
  </div>
);

const HailEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-stone-100 rounded-full"
        initial={{ y: -10, x: 20 + i * 20, opacity: 0 }}
        animate={{ 
          y: [0, 120, 105, 125], 
          x: [20 + i * 20, 20 + i * 20 + (i % 2 === 0 ? 5 : -5), 20 + i * 20 + (i % 2 === 0 ? 8 : -8), 20 + i * 20 + (i % 2 === 0 ? 10 : -10)],
          opacity: [0, 1, 1, 0] 
        }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.09, ease: "linear" }}
      />
    ))}
  </div>
);

const RainbowEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 flex items-center justify-center">
    <motion.div
      className="w-36 h-36 rounded-full border-8 border-transparent"
      style={{
        background: "radial-gradient(circle, transparent 40%, rgba(244,63,94,0.2) 50%, rgba(245,158,11,0.2) 60%, rgba(16,185,129,0.2) 70%, rgba(59,130,246,0.2) 80%, rgba(139,92,246,0.2) 90%)"
      }}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1.05, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  </div>
);

const SpringEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-emerald-400"
        initial={{ y: 120, x: 20 + i * 30, scale: 0.5, opacity: 0 }}
        animate={{ 
          y: -20, 
          x: 20 + i * 30 + Math.sin(i) * 20, 
          scale: [0.5, 1.2, 0.8], 
          opacity: [0, 1, 0] 
        }}
        transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
      />
    ))}
  </div>
);

const AutumnEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    {[...Array(8)].map((_, i) => {
      const colors = ["bg-amber-600", "bg-orange-500", "bg-yellow-600", "bg-red-500"];
      const leafColor = colors[i % colors.length];
      return (
        <motion.div
          key={i}
          className={`absolute w-3 h-2 rounded-tl-full rounded-br-full ${leafColor}`}
          initial={{ y: -10, x: 10 + i * 25, rotate: 0, opacity: 0 }}
          animate={{ 
            y: 130, 
            x: 10 + i * 25 + Math.sin(i) * 20, 
            rotate: 360, 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25, ease: "linear" }}
        />
      );
    })}
  </div>
);

export default function TempsClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = getTrans(lang);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizStatus, setQuizStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [shuffledOptions, setShuffledOptions] = useState<any[]>([]);

  // Expanded Quiz Pool with both basic and intermediate entries
  const quizPool = [
    WEATHER_CATEGORIES[0], // soleil (Il fait beau)
    WEATHER_CATEGORIES[1], // nuage (Il y a des nuages)
    WEATHER_CATEGORIES[2], // pluie (Il pleut)
    WEATHER_CATEGORIES[3], // neige (Il neige)
    WEATHER_CATEGORIES[4], // vent (Il y a du vent)
    WEATHER_CATEGORIES[5], // orage (Il y a de l'orage)
    WEATHER_CATEGORIES[6], // brouillard (Il y a du brouillard)
    WEATHER_CATEGORIES[7], // grele (Il grêle)
    WEATHER_CATEGORIES[8], // arcenciel (Il y a un arc-en-ciel)
    TEMP_DATA[0],          // chaud (Il fait chaud)
    TEMP_DATA[1],          // froid (Il fait froid)
    TEMP_DATA[3],          // gele (Il gèle)
  ];
  const currentQuiz = quizPool[quizIndex];

  useEffect(() => {
    let options = [currentQuiz];
    const others = quizPool.filter(q => q.id !== currentQuiz.id).sort(() => Math.random() - 0.5).slice(0, 3);
    setShuffledOptions([...options, ...others].sort(() => Math.random() - 0.5));
  }, [quizIndex]);

  const handleCardClick = (id: string, textToPlay: string) => {
    setActiveCard(id);
    playTTS(textToPlay);
    // Reset effect after 3 seconds
    setTimeout(() => {
      setActiveCard((prev) => (prev === id ? null : prev));
    }, 3000);
  };

  const saveTempsProgress = (correct: boolean) => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("frlearning_progress_temps");
        let progress = { completed: true, correctCount: 0, totalCount: 0, lastPlayed: new Date().toISOString().slice(0, 10) };
        if (stored) {
          progress = JSON.parse(stored);
        }
        progress.totalCount += 1;
        if (correct) {
          progress.correctCount += 1;
        }
        progress.lastPlayed = new Date().toISOString().slice(0, 10);
        const score = Math.round((progress.correctCount / progress.totalCount) * 100);
        localStorage.setItem("frlearning_progress_temps", JSON.stringify({
          completed: true,
          score,
          correctCount: progress.correctCount,
          totalCount: progress.totalCount,
          lastPlayed: progress.lastPlayed
        }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleQuizAnswer = (id: string) => {
    if (id === currentQuiz.id) {
      setQuizStatus("correct");
      playTTS("Très bien !");
      saveTempsProgress(true);
      setTimeout(() => {
        setQuizStatus("idle");
        setQuizIndex((prev) => (prev + 1) % quizPool.length);
      }, 1500);
    } else {
      setQuizStatus("wrong");
      saveTempsProgress(false);
      setTimeout(() => setQuizStatus("idle"), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 font-sans selection:bg-stone-200">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-stone-100 mb-6"
          >
            <CloudSun className="h-8 w-8 text-stone-700" strokeWidth={1.5} />
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
            {t.subtitle}
          </motion.p>
        </header>

        {/* Basic & Intermediate Weather Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.basic}</h2>
            <div className="h-[1px] flex-grow bg-stone-200"></div>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WEATHER_CATEGORIES.map((item, idx) => {
              const isActive = activeCard === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleCardClick(item.id, item.fr)}
                  className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-300 ${
                    isActive 
                      ? "border-stone-300 shadow-md bg-white scale-[1.02]" 
                      : "border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-stone-300"
                  } p-6 flex flex-col items-start min-h-[160px]`}
                >
                  <div className={`mb-4 inline-flex p-3 rounded-2xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900">{item.fr}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{t[item.id]}</p>
                  
                  {/* Dynamic Effects Overlay */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none rounded-3xl"
                      >
                        {item.id === "pluie" && <RainEffect />}
                        {item.id === "neige" && <SnowEffect />}
                        {item.id === "soleil" && <SunEffect />}
                        {item.id === "vent" && <WindEffect />}
                        {item.id === "orage" && <RainEffect />}
                        {item.id === "brouillard" && <FogEffect />}
                        {item.id === "grele" && <HailEffect />}
                        {item.id === "arcenciel" && <RainbowEffect />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Temperature Section */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.temperature}</h2>
            <div className="h-[1px] flex-grow bg-stone-200"></div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {TEMP_DATA.map((item, idx) => {
              const isActive = activeCard === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => handleCardClick(item.id, item.fr)}
                  className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-300 ${
                    isActive 
                      ? "border-stone-300 shadow-md bg-white scale-[1.02]" 
                      : "border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-stone-300"
                  } p-6 flex flex-col justify-between min-h-[140px]`}
                >
                  <div className={`p-4 rounded-2xl self-start ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-neutral-900">{item.fr}</h3>
                    <p className="text-sm text-neutral-500">{t[item.id]}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Seasons Section */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.seasons}</h2>
            <p className="text-sm text-neutral-500">{t.seasons_subtitle}</p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEASONS_DATA.map((item, idx) => {
              const isActive = activeCard === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  onClick={() => handleCardClick(item.id, `${item.fr}, ${item.fr_sub}`)}
                  className={`group relative overflow-hidden text-left rounded-3xl border transition-all duration-300 ${
                    isActive 
                      ? "border-stone-300 shadow-md bg-white scale-[1.02]" 
                      : "border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-stone-300"
                  } p-6 flex flex-col items-start min-h-[150px]`}
                >
                  <div className={`mb-4 inline-flex p-3 rounded-2xl ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                    <item.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900">{item.fr}</h3>
                  <p className="mt-1 text-sm text-stone-500 font-medium">{item.fr_sub}</p>
                  <p className="mt-1 text-xs text-neutral-400">{t[item.id]}</p>
                  
                  {/* Dynamic Effects Overlay */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 pointer-events-none rounded-3xl"
                      >
                        {item.id === "printemps" && <SpringEffect />}
                        {item.id === "ete" && <SunEffect />}
                        {item.id === "automne" && <AutumnEffect />}
                        {item.id === "hiver" && <SnowEffect />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Idioms Section */}
        <section className="mb-24">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.idioms}</h2>
            <div className="h-[1px] flex-grow bg-stone-200"></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXTRAS.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => playTTS(ex.fr)}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:border-stone-300 hover:shadow-md text-left min-h-[120px]"
              >
                <div className="w-full">
                  <p className="font-medium text-neutral-900 mb-1 leading-snug">{ex.fr}</p>
                  <p className="text-sm text-neutral-500 leading-normal">
                    {t[ex.id]}
                  </p>
                </div>
                <div className="w-full flex justify-end mt-4">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:bg-stone-100 group-hover:text-stone-700 transition-colors">
                    <Volume2 className="h-4 w-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Interactive Quiz */}
        <section className="rounded-[2.5rem] bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <CloudLightning className="w-64 h-64" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold">{t.quiz_title}</h2>
            <p className="mt-2 text-stone-400">{t.quiz_desc}</p>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuiz.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="text-4xl md:text-5xl font-medium tracking-tight min-h-[120px] flex items-center justify-center md:justify-start"
                  >
                    {currentQuiz.fr}
                  </motion.div>
                </AnimatePresence>
                <button 
                  onClick={() => playTTS(currentQuiz.fr)}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors text-sm font-medium"
                >
                  <PlayCircle className="w-4 h-4" />
                  Listen
                </button>
              </div>

              <div className="flex-1 w-full max-w-sm">
                <div className="grid grid-cols-2 gap-4">
                  {shuffledOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleQuizAnswer(opt.id)}
                      className="flex flex-col items-center justify-center p-6 rounded-3xl bg-stone-800 border border-stone-700 hover:bg-stone-700 transition-all hover:scale-[1.05]"
                    >
                      <opt.icon className="w-8 h-8 mb-3" strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 text-center h-6">
                  {quizStatus === "correct" && <span className="text-emerald-400 font-medium">{t.correct}</span>}
                  {quizStatus === "wrong" && <span className="text-red-400 font-medium">{t.wrong}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
