const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'legacy_backup/civilization/civi11/exercices/index.html');
const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const match = htmlContent.match(/const quizData = (\[[\s\S]*?\]);\s+const /);

if (!match) {
  console.error("quizData not found");
  process.exit(1);
}

// Evaluate the quizData object
let quizData;
eval(`quizData = ${match[1]}`);

// Build dictionary structure
const extractedData = {
  fr: { title: "Exercices sur la Francophonie", quiz: quizData },
  zh: { title: "法语区练习", quiz: quizData },
  en: { title: "Francophonie Exercises", quiz: quizData },
  es: { title: "Ejercicios de la Francofonía", quiz: quizData },
  de: { title: "Übungen zur Frankophonie", quiz: quizData }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.civi11_exercices = extractedData[loc];

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('civi11_exercices dictionaries updated!');
