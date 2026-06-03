const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'legacy_backup/civilization/civi11/cours/index.html');
const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const match = htmlContent.match(/const translations = (\{[\s\S]*?\});/);

if (!match) {
  console.error("Translations not found");
  process.exit(1);
}

// Evaluate the translations object
let translations;
eval(`translations = ${match[1]}`);

// Handle missing DE or ES if any (we know it's a 5 language JSON)
if (!translations.de) {
  translations.de = { ...translations.en };
  for (let key in translations.de) {
    if (typeof translations.de[key] === 'string') {
      translations.de[key] = translations.de[key] + " (DE)";
    }
  }
}

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.civi11_cours = translations[loc] || translations.en;

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('civi11_cours dictionaries updated!');
