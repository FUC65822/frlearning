const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const appData = {
  zh: {
    page_title: "Français APP - Neo Edition",
    nav_features: "功能介绍",
    nav_get_app: "获取App",
    hero_badge: "AI 驱动 • 主动回忆",
    hero_title: "重塑法语记忆",
    hero_subtitle: "告别枯燥背诵。结合主动回忆与AI技术，为你打造个性化、高效率的词汇学习体验。",
    hero_btn_download: "下载安卓版",
    hero_btn_learn: "了解更多",
    features_title: "核心功能",
    feature1_title: "主动回忆",
    feature1_desc: "告别假装“已记住”。我们采用“先想后看”模式，强制大脑主动提取信息。这比被动浏览有效得多，确保你真正掌握每一个单词。",
    feature2_title: "详尽卡片",
    feature2_desc: "每一个单词都配有清晰的音标、纯正的发音和全面的释义。点击喇叭即可跟读，助你掌握最地道的法语发音。",
    feature3_title: "学习总结",
    feature3_desc: "每次学习结束后，一份清晰的总结报告会呈现在你眼前。无论是新学单词还是复习情况，所有数据一目了然，让进步清晰可见。",
    feature4_title: "由你定义",
    feature4_desc: "强大的自定义功能。轻松导入自己的词书，选择不同的显示设置，打造最适合你个人学习习惯的专属工具。",
    feature5_title: "自定义 AI 引擎",
    feature5_desc: "开放 API 接口。接入你自己的大语言模型服务，获得独一无二、完全由你掌控的智能学习体验。",
    feature5_note: "* 开发中功能",
    download_title: "准备好开始了吗？",
    download_subtitle: "立即下载，体验前所未有的单词学习方式。",
    download_button: "免费获取安卓版"
  },
  en: {
    page_title: "Français APP - Neo Edition",
    nav_features: "Features",
    nav_get_app: "Get App",
    hero_badge: "AI Powered • Active Recall",
    hero_title: "Reshape Memory",
    hero_subtitle: "Stop rote memorization. Combine active recall with AI to create a personalized, high-efficiency vocabulary learning experience.",
    hero_btn_download: "Download APK",
    hero_btn_learn: "Learn More",
    features_title: "Core Features",
    feature1_title: "Active Recall",
    feature1_desc: "No more pretending to 'remember'. We use a 'think first, see later' model to force active brain retrieval. Far more effective than passive browsing.",
    feature2_title: "Detailed Cards",
    feature2_desc: "Clear phonetics, authentic pronunciation, and comprehensive definitions. Click to listen and master authentic French pronunciation.",
    feature3_title: "Session Summary",
    feature3_desc: "A clear summary report after every session. New words, review status, all at a glance. Make your progress visible.",
    feature4_title: "Defined by You",
    feature4_desc: "Powerful customization. Import your own word books, choose display settings, and craft the perfect tool for your habits.",
    feature5_title: "Custom AI Engine",
    feature5_desc: "Open API interface. Connect your own LLM service for a unique, fully controlled intelligent learning experience.",
    feature5_note: "* In Development",
    download_title: "Ready to Start?",
    download_subtitle: "Download now and experience an unprecedented way of learning.",
    download_button: "Get Android App"
  },
  fr: {
    page_title: "Français APP - Édition Neo",
    nav_features: "Fonctionnalités",
    nav_get_app: "Obtenir l'App",
    hero_badge: "Propulsé par l'IA • Rappel Actif",
    hero_title: "Remodeler la Mémoire",
    hero_subtitle: "Fini la mémorisation par cœur. Combinez le rappel actif et l'IA pour créer une expérience d'apprentissage du vocabulaire personnalisée et très efficace.",
    hero_btn_download: "Télécharger l'APK",
    hero_btn_learn: "En Savoir Plus",
    features_title: "Fonctionnalités Principales",
    feature1_title: "Rappel Actif",
    feature1_desc: "Ne faites plus semblant de 'retenir'. Nous utilisons un modèle 'penser d'abord, voir ensuite' pour forcer la récupération cérébrale active.",
    feature2_title: "Cartes Détaillées",
    feature2_desc: "Phonétique claire, prononciation authentique et définitions complètes. Cliquez pour écouter et maîtriser la prononciation.",
    feature3_title: "Résumé de la Session",
    feature3_desc: "Un rapport récapitulatif clair après chaque session. Nouveaux mots, statut de révision, tout en un coup d'œil.",
    feature4_title: "Défini par Vous",
    feature4_desc: "Personnalisation puissante. Importez vos propres listes, choisissez les paramètres d'affichage.",
    feature5_title: "Moteur IA Personnalisé",
    feature5_desc: "Interface API ouverte. Connectez votre propre service LLM pour une expérience unique.",
    feature5_note: "* En Développement",
    download_title: "Prêt à Commencer ?",
    download_subtitle: "Téléchargez maintenant et découvrez une manière inédite d'apprendre.",
    download_button: "Obtenir l'App Android"
  },
  es: {
    page_title: "Français APP - Neo Edition",
    nav_features: "Características",
    nav_get_app: "Obtener App",
    hero_badge: "Impulsado por IA • Recuerdo Activo",
    hero_title: "Remodelar la Memoria",
    hero_subtitle: "Deja de memorizar de memoria. Combina el recuerdo activo con IA para crear una experiencia de aprendizaje personalizada y eficiente.",
    hero_btn_download: "Descargar APK",
    hero_btn_learn: "Aprender Más",
    features_title: "Características Principales",
    feature1_title: "Recuerdo Activo",
    feature1_desc: "No más fingir 'recordar'. Usamos un modelo de 'pensar primero, ver después' para forzar la recuperación cerebral activa.",
    feature2_title: "Tarjetas Detalladas",
    feature2_desc: "Fonética clara, pronunciación auténtica y definiciones completas. Haz clic para escuchar.",
    feature3_title: "Resumen de Sesión",
    feature3_desc: "Un informe resumido claro después de cada sesión. Nuevas palabras, estado de revisión, todo a un vistazo.",
    feature4_title: "Definido por Ti",
    feature4_desc: "Potente personalización. Importa tus propios libros de palabras, elige la configuración de visualización.",
    feature5_title: "Motor de IA Personalizado",
    feature5_desc: "Interfaz de API abierta. Conecta tu propio servicio LLM para una experiencia única.",
    feature5_note: "* En Desarrollo",
    download_title: "¿Listo para Empezar?",
    download_subtitle: "Descarga ahora y experimenta una forma sin precedentes de aprender.",
    download_button: "Obtener App Android"
  },
  de: {
    page_title: "Français APP - Neo Edition",
    nav_features: "Funktionen",
    nav_get_app: "App Holen",
    hero_badge: "KI-gesteuert • Aktiver Rückruf",
    hero_title: "Gedächtnis Neu Formen",
    hero_subtitle: "Schluss mit dem Auswendiglernen. Kombinieren Sie aktiven Rückruf mit KI, um eine personalisierte und effiziente Lernerfahrung zu schaffen.",
    hero_btn_download: "APK Herunterladen",
    hero_btn_learn: "Mehr Erfahren",
    features_title: "Hauptfunktionen",
    feature1_title: "Aktiver Rückruf",
    feature1_desc: "Tun Sie nicht mehr so, als würden Sie sich 'erinnern'. Wir verwenden ein 'Zuerst denken, dann sehen'-Modell.",
    feature2_title: "Detaillierte Karten",
    feature2_desc: "Klare Phonetik, authentische Aussprache und umfassende Definitionen. Klicken Sie zum Anhören.",
    feature3_title: "Sitzungszusammenfassung",
    feature3_desc: "Ein klarer Zusammenfassungsbericht nach jeder Sitzung. Neue Wörter, Überprüfungsstatus, alles auf einen Blick.",
    feature4_title: "Von Ihnen Definiert",
    feature4_desc: "Leistungsstarke Anpassung. Importieren Sie Ihre eigenen Wortbücher, wählen Sie Anzeigeeinstellungen.",
    feature5_title: "Benutzerdefinierte KI-Engine",
    feature5_desc: "Offene API-Schnittstelle. Verbinden Sie Ihren eigenen LLM-Dienst für ein einzigartiges Erlebnis.",
    feature5_note: "* In Entwicklung",
    download_title: "Bereit Anzufangen?",
    download_subtitle: "Laden Sie jetzt herunter und erleben Sie eine beispiellose Art zu lernen.",
    download_button: "Android App Holen"
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.app_mainpage = appData[loc];

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('app_mainpage dictionaries updated!');
