const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const frPath = path.join(dictsPath, 'fr.json');
const frData = JSON.parse(fs.readFileSync(frPath, 'utf8'));
const civi11_cours = frData.subPages.civi11_cours;

for (const loc of locales) {
  if (loc === 'fr') continue;
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.civi11_cours = civi11_cours; // fallback to fr

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('civi11_cours dictionaries patched!');
