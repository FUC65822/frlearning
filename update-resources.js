const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const updates = {
  zh: {
    desc: "探索我们丰富的学习资源库，包含专业平台、移动应用、主题课程以及实用法语表达，全方位助力您的法语学习之旅。",
    newItem: { title: "认识法国", desc: "了解法国的历史、地理、景点与趣闻。" }
  },
  en: {
    desc: "Explore our rich library of learning resources, including professional platforms, mobile apps, thematic courses, and practical French expressions, to support your French learning journey in every way.",
    newItem: { title: "Discover France", desc: "Learn about the history, geography, landmarks, and fun facts of France." }
  },
  fr: {
    desc: "Explorez notre riche bibliothèque de ressources d'apprentissage, comprenant des plateformes professionnelles, des applications mobiles, des cours thématiques et des expressions françaises pratiques, pour vous accompagner tout au long de votre apprentissage du français.",
    newItem: { title: "Connaître la France", desc: "Découvrez l'histoire, la géographie, les monuments et des faits amusants sur la France." }
  },
  es: {
    desc: "Explore nuestra rica biblioteca de recursos de aprendizaje, que incluye plataformas profesionales, aplicaciones móviles, cursos temáticos y expresiones prácticas en francés, para apoyar su viaje de aprendizaje del francés de todas las formas posibles.",
    newItem: { title: "Conocer Francia", desc: "Aprende sobre la historia, geografía, monumentos y datos curiosos de Francia." }
  },
  de: {
    desc: "Entdecken Sie unsere umfangreiche Bibliothek an Lernressourcen, einschließlich professioneller Plattformen, mobiler Apps, thematischer Kurse und praktischer französischer Ausdrücke, um Ihre Französisch-Lernreise auf jede Weise zu unterstützen.",
    newItem: { title: "Frankreich kennenlernen", desc: "Erfahren Sie mehr über die Geschichte, Geografie, Sehenswürdigkeiten und lustige Fakten von Frankreich." }
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  // Update desc
  data.resources.desc = updates[loc].desc;

  // Ensure there's a 6th item
  if (data.resources.items.length < 6) {
    data.resources.items.push(updates[loc].newItem);
  } else {
    data.resources.items[5] = updates[loc].newItem;
  }

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('Dictionaries updated for resources text and France module!');
