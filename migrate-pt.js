const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const ptData = {
  zh: {
    title: "文档访问",
    doc: "访问演讲稿",
    original: "访问原始文档",
    qa: "访问 Q&A 文档",
    desc: "内部参考资料链接"
  },
  en: {
    title: "Document Access",
    doc: "Access Presentation",
    original: "Access Original Document",
    qa: "Access Q&A Document",
    desc: "Internal reference links"
  },
  fr: {
    title: "Accès aux Documents",
    doc: "Accéder à la Présentation",
    original: "Accéder au Document Original",
    qa: "Accéder au Document Q&R",
    desc: "Liens de référence internes"
  },
  es: {
    title: "Acceso a Documentos",
    doc: "Acceder a la Presentación",
    original: "Acceder al Documento Original",
    qa: "Acceder al Documento de Preguntas y Respuestas",
    desc: "Enlaces de referencia internos"
  },
  de: {
    title: "Dokumentenzugriff",
    doc: "Auf Präsentation zugreifen",
    original: "Auf Originaldokument zugreifen",
    qa: "Auf Q&A-Dokument zugreifen",
    desc: "Interne Referenzlinks"
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.pt = ptData[loc];

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('PT dictionaries updated!');
