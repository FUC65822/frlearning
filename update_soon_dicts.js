const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const locales = {
  zh: { soon: "敬请期待" },
  en: { soon: "Coming Soon" },
  fr: { soon: "À venir" },
  es: { soon: "Próximamente" },
  de: { soon: "Demnächst" }
};

for (const code of Object.keys(locales)) {
  const p = path.join(dictDir, `${code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!json.intro) json.intro = {};
    json.intro.soon = locales[code].soon;
    fs.writeFileSync(p, JSON.stringify(json, null, 2));
  }
}
