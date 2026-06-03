const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'legacy_backup/linguax/index.html');
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

// For DE, since it's not present, we will just copy EN and prefix it with [DE] for now,
// or we can translate it if it's short. Let's just use EN for DE.
if (!translations.de) {
  translations.de = { ...translations.en };
  for (let key in translations.de) {
    translations.de[key] = translations.de[key] + " (DE)";
  }
}

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.linguax = translations[loc] || translations.en;

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('linguax dictionaries updated!');
