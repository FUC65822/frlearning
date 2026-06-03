const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const locales = [
  { code: 'zh', data: {
      title: "第一课：字母与核心发音",
      desc: "点击下方音标了解发音规则并聆听纯正法语发音",
      tabs: {
        vowel: "元音 (Voyelles)",
        semiVowel: "半元音 (Semi-voyelles)",
        consonant: "辅音 (Consonnes)",
        nasal: "鼻化元音 (Voyelles nasales)"
      },
      rules: "发音要领与拼写",
      spellAndExamples: "拼写与例词",
      playTTS: "朗读法语例词",
      back: "返回课程页"
  }},
  { code: 'en', data: {
      title: "Lesson 1: Alphabet & Phonics",
      desc: "Click a phonetic symbol below to learn pronunciation rules and listen to authentic French.",
      tabs: {
        vowel: "Vowels (Voyelles)",
        semiVowel: "Semi-vowels (Semi-voyelles)",
        consonant: "Consonants (Consonnes)",
        nasal: "Nasal Vowels (Voyelles nasales)"
      },
      rules: "Pronunciation & Spelling",
      spellAndExamples: "Spelling & Examples",
      playTTS: "Play French pronunciation",
      back: "Back to Course"
  }},
  { code: 'fr', data: {
      title: "Leçon 1 : Alphabet et Phonétique",
      desc: "Cliquez sur un symbole phonétique ci-dessous pour apprendre les règles de prononciation et écouter le français authentique.",
      tabs: {
        vowel: "Voyelles",
        semiVowel: "Semi-voyelles",
        consonant: "Consonnes",
        nasal: "Voyelles nasales"
      },
      rules: "Prononciation et Orthographe",
      spellAndExamples: "Orthographe et Exemples",
      playTTS: "Écouter la prononciation",
      back: "Retour au cours"
  }},
  { code: 'es', data: {
      title: "Lección 1: Alfabeto y Fonética",
      desc: "Haga clic en un símbolo fonético a continuación para aprender las reglas de pronunciación y escuchar francés auténtico.",
      tabs: {
        vowel: "Vocales (Voyelles)",
        semiVowel: "Semivocales (Semi-voyelles)",
        consonant: "Consonantes (Consonnes)",
        nasal: "Vocales Nasales (Voyelles nasales)"
      },
      rules: "Pronunciación y Ortografía",
      spellAndExamples: "Ortografía y Ejemplos",
      playTTS: "Reproducir pronunciación en francés",
      back: "Volver al curso"
  }},
  { code: 'de', data: {
      title: "Lektion 1: Alphabet & Phonetik",
      desc: "Klicken Sie auf ein phonetisches Symbol unten, um die Ausspracheregeln zu lernen und authentisches Französisch zu hören.",
      tabs: {
        vowel: "Vokale (Voyelles)",
        semiVowel: "Halbvokale (Semi-voyelles)",
        consonant: "Konsonanten (Consonnes)",
        nasal: "Nasalvokale (Voyelles nasales)"
      },
      rules: "Aussprache & Rechtschreibung",
      spellAndExamples: "Rechtschreibung & Beispiele",
      playTTS: "Französische Aussprache abspielen",
      back: "Zurück zum Kurs"
  }}
];

for (const loc of locales) {
  const p = path.join(dictDir, `${loc.code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!json.intro) json.intro = {};
    json.intro.lesson1 = loc.data;
    fs.writeFileSync(p, JSON.stringify(json, null, 2));
  }
}
