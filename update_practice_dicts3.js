const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const wordWasLocales = {
  zh: "当前例词：",
  en: "Example word:",
  fr: "Mot exemple :",
  es: "Palabra de ejemplo:",
  de: "Beispielwort:"
};

for (const code of Object.keys(wordWasLocales)) {
  const p = path.join(dictDir, `${code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (json.intro?.lesson1?.practice) {
      json.intro.lesson1.practice.wordWas = wordWasLocales[code];
      fs.writeFileSync(p, JSON.stringify(json, null, 2));
    }
  }
}
