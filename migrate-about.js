const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const aboutData = {
  zh: {
    title: "关于我们",
    hero_title: "重塑法语学习的艺术",
    hero_subtitle: "我们探索语言的深度，构筑连接文化与思想的桥梁。",
    mission_tag: "我们的使命",
    mission_title: "回归语言的本质",
    mission_text: "在 LearnFR.de，我们致力于打破传统语言学习的桎梏。我们创造的是一个充满美学、智慧与乐趣的沉浸式环境，让每一位学习者不仅能自信地运用法语，更能深刻领悟其背后的文化精髓。",
    philosophy_tag: "我们的理念",
    philosophy_title: "智慧、沉浸、卓越",
    philosophy_text: "我们坚信，最高效的学习源于最深刻的理解与共鸣。课程设计围绕“实用”与“启发”的核心，融合前沿的认知科学与AI技术，为您雕琢专属的学习路径，点燃您内在的求知火焰。",
    story_tag: "我们的故事",
    story_title: "一位创造者的初心",
    story_text: "LearnFR.de 源自一个纯粹的愿景：法语学习能否成为一场优雅而高效的探索之旅？创始人 Hugo，一位对法语充满热忱的开发者，决心将这份热爱与精湛的技术相结合，从零开始，精心打造一个为极致学习体验而生的平台。这趟旅程始于热爱，也将因坚持而绽放光芒。",
    cta_title: "开启您的法语探索之旅",
    cta_subtitle: "即刻启程，体验一场前所未有的语言盛宴。",
    cta_button: "即刻开始"
  },
  en: {
    title: "About Us",
    hero_title: "Redefining the Art of Learning French",
    hero_subtitle: "We explore the depth of language, building bridges between cultures and ideas.",
    mission_tag: "Our Mission",
    mission_title: "Returning to Essence",
    mission_text: "At LearnFR.de, we are dedicated to breaking the barriers of traditional language learning. We create an immersive environment filled with aesthetics, wisdom, and joy, enabling every learner to not only use French confidently but also to deeply appreciate the cultural essence behind it.",
    philosophy_tag: "Our Philosophy",
    philosophy_title: "Wisdom, Immersion, Excellence",
    philosophy_text: "We firmly believe that the most effective learning stems from the deepest understanding and resonance. Our curriculum is designed around the core of 'practicality' and 'inspiration', integrating cutting-edge cognitive science and AI to craft a personalized learning path for you.",
    story_tag: "Our Story",
    story_title: "A Creator's Vision",
    story_text: "LearnFR.de was born from a pure vision: can learning French be an elegant and efficient journey of exploration? Founder Hugo, a developer with a passion for French, decided to combine this love with exquisite technology to build a platform dedicated to the ultimate learning experience from scratch.",
    cta_title: "Begin Your Exploration",
    cta_subtitle: "Embark now and experience an unprecedented feast of language.",
    cta_button: "Start Now"
  },
  fr: {
    title: "À Propos",
    hero_title: "Réinventer l'Art d'Apprendre le Français",
    hero_subtitle: "Nous explorons la profondeur de la langue, construisant des ponts entre les cultures.",
    mission_tag: "Notre Mission",
    mission_title: "Retour à l'Essence",
    mission_text: "Chez LearnFR.de, nous nous engageons à briser les barrières de l'apprentissage traditionnel. Nous créons un environnement immersif rempli d'esthétique et de joie, permettant à chaque apprenant d'utiliser le français avec confiance et d'apprécier son essence culturelle.",
    philosophy_tag: "Notre Philosophie",
    philosophy_title: "Sagesse, Immersion, Excellence",
    philosophy_text: "Nous croyons fermement que l'apprentissage efficace découle de la compréhension profonde. Notre programme intègre la science cognitive et l'IA pour façonner un parcours personnalisé, allumant votre curiosité.",
    story_tag: "Notre Histoire",
    story_title: "La Vision d'un Créateur",
    story_text: "LearnFR.de est né d'une vision pure : l'apprentissage du français peut-il être élégant ? Le fondateur, Hugo, a combiné son amour pour la langue avec une technologie exquise pour construire cette plateforme dédiée à l'expérience ultime.",
    cta_title: "Commencez l'Aventure",
    cta_subtitle: "Embarquez maintenant pour un festin linguistique sans précédent.",
    cta_button: "Commencer"
  },
  es: {
    title: "Sobre Nosotros",
    hero_title: "Redefiniendo el Arte de Aprender Francés",
    hero_subtitle: "Exploramos la profundidad del lenguaje, construyendo puentes entre culturas.",
    mission_tag: "Nuestra Misión",
    mission_title: "Volver a la Esencia",
    mission_text: "En LearnFR.de, rompemos las barreras del aprendizaje tradicional. Creamos un entorno inmersivo donde cada estudiante puede usar el francés con confianza y apreciar profundamente su esencia cultural.",
    philosophy_tag: "Nuestra Filosofía",
    philosophy_title: "Sabiduría, Inmersión, Excelencia",
    philosophy_text: "Creemos que el aprendizaje efectivo proviene de la comprensión profunda. Integramos ciencia cognitiva e IA para crear una ruta personalizada para usted.",
    story_tag: "Nuestra Historia",
    story_title: "La Visión de un Creador",
    story_text: "LearnFR.de nació de una visión: ¿puede el aprendizaje ser elegante? El fundador Hugo combinó su pasión por el francés con tecnología para construir esta plataforma desde cero para la mejor experiencia.",
    cta_title: "Comience Su Exploración",
    cta_subtitle: "Embárquese ahora en un festín lingüístico.",
    cta_button: "Empezar Ahora"
  },
  de: {
    title: "Über uns",
    hero_title: "Die Kunst des Französischlernens neu definieren",
    hero_subtitle: "Wir erkunden die Tiefe der Sprache und bauen Brücken zwischen Kulturen und Ideen.",
    mission_tag: "Unsere Mission",
    mission_title: "Zurück zum Wesentlichen",
    mission_text: "Bei LearnFR.de haben wir uns zum Ziel gesetzt, die Barrieren des traditionellen Sprachenlernens zu durchbrechen. Wir schaffen eine immersive Umgebung voller Ästhetik, Weisheit und Freude, die es jedem Lernenden ermöglicht, Französisch nicht nur sicher anzuwenden, sondern auch die kulturelle Essenz dahinter zutiefst zu schätzen.",
    philosophy_tag: "Unsere Philosophie",
    philosophy_title: "Weisheit, Immersion, Exzellenz",
    philosophy_text: "Wir sind fest davon überzeugt, dass das effektivste Lernen aus tiefstem Verständnis und Resonanz resultiert. Unser Lehrplan ist um den Kern von 'Praktikabilität' und 'Inspiration' herum konzipiert und integriert modernste Kognitionswissenschaft und KI, um einen personalisierten Lernpfad für Sie zu gestalten.",
    story_tag: "Unsere Geschichte",
    story_title: "Die Vision eines Schöpfers",
    story_text: "LearnFR.de wurde aus einer reinen Vision geboren: Kann das Erlernen von Französisch eine elegante und effiziente Entdeckungsreise sein? Der Gründer Hugo, ein Entwickler mit einer Leidenschaft für Französisch, beschloss, diese Liebe mit exquisiter Technologie zu verbinden, um von Grund auf eine Plattform für das ultimative Lernerlebnis aufzubauen.",
    cta_title: "Beginnen Sie Ihre Entdeckung",
    cta_subtitle: "Begeben Sie sich jetzt auf ein beispielloses Fest der Sprache.",
    cta_button: "Jetzt Starten"
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.about = aboutData[loc];

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('About dictionaries updated!');
