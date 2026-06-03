const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const locales = [
  { code: 'zh', data: {
      menuTitle: "选择练习模式",
      set1: "套题 1：基础元音",
      set2: "套题 2：进阶元音与鼻化元音",
      set3: "套题 3：基础辅音",
      set4: "套题 4：辅音与半元音",
      set5: "套题 5：高难度综合挑战",
      randomMode: "🎲 随机挑战模式",
      backToMenu: "返回模式选择"
  }},
  { code: 'en', data: {
      menuTitle: "Select Practice Mode",
      set1: "Set 1: Basic Vowels",
      set2: "Set 2: Advanced & Nasal Vowels",
      set3: "Set 3: Basic Consonants",
      set4: "Set 4: Consonants & Semi-vowels",
      set5: "Set 5: Comprehensive Challenge",
      randomMode: "🎲 Random Challenge",
      backToMenu: "Back to Menu"
  }},
  { code: 'fr', data: {
      menuTitle: "Sélectionner le mode",
      set1: "Série 1 : Voyelles de base",
      set2: "Série 2 : Voyelles avancées et nasales",
      set3: "Série 3 : Consonnes de base",
      set4: "Série 4 : Consonnes et semi-voyelles",
      set5: "Série 5 : Défi complet",
      randomMode: "🎲 Défi Aléatoire",
      backToMenu: "Retour au menu"
  }},
  { code: 'es', data: {
      menuTitle: "Seleccionar modo de práctica",
      set1: "Set 1: Vocales básicas",
      set2: "Set 2: Vocales avanzadas y nasales",
      set3: "Set 3: Consonantes básicas",
      set4: "Set 4: Consonantes y semivocales",
      set5: "Set 5: Desafío completo",
      randomMode: "🎲 Desafío Aleatorio",
      backToMenu: "Volver al menú"
  }},
  { code: 'de', data: {
      menuTitle: "Übungsmodus auswählen",
      set1: "Set 1: Grundvokale",
      set2: "Set 2: Erweiterte & Nasalvokale",
      set3: "Set 3: Grundkonsonanten",
      set4: "Set 4: Konsonanten & Halbvokale",
      set5: "Set 5: Umfassende Herausforderung",
      randomMode: "🎲 Zufällige Herausforderung",
      backToMenu: "Zurück zum Menü"
  }}
];

for (const loc of locales) {
  const p = path.join(dictDir, `${loc.code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!json.intro) json.intro = {};
    if (!json.intro.lesson1) json.intro.lesson1 = {};
    if (!json.intro.lesson1.practice) json.intro.lesson1.practice = {};
    
    // Merge
    json.intro.lesson1.practice = {
      ...json.intro.lesson1.practice,
      ...loc.data
    };
    
    fs.writeFileSync(p, JSON.stringify(json, null, 2));
  }
}
