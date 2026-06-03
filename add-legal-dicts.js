const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const legalData = {
  zh: {
    privacy: {
      title: "隐私政策",
      lastUpdated: "最后更新时间：2026年6月",
      p1Title: "1. 信息收集",
      p1Desc: "我们目前不主动收集用户的个人身份信息。作为纯静态前端应用，所有的学习进度（如测验得分）仅存储在您的本地浏览器中。",
      p2Title: "2. Cookie与本地存储",
      p2Desc: "为了保证网站正常运行和记录您的偏好（如语言设置），我们会使用必要的本地存储机制。",
      p3Title: "3. 联系我们",
      p3Desc: "如有任何疑问，请联系我们：support@learnfr.de"
    },
    terms: {
      title: "服务条款",
      lastUpdated: "最后更新时间：2026年6月",
      p1Title: "1. 接受条款",
      p1Desc: "使用本网站即表示您同意本条款。我们保留随时修改条款的权利。",
      p2Title: "2. 知识产权",
      p2Desc: "本网站上的所有课程内容、设计和代码均归我们所有，未经许可不得用于商业目的。",
      p3Title: "3. 免责声明",
      p3Desc: "我们将尽力保证内容的准确性，但对因使用本网站内容而造成的任何损失不承担法律责任。部分内容由AI翻译辅助生成，可能存在不准确之处。"
    }
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: June 2026",
      p1Title: "1. Information Collection",
      p1Desc: "We do not actively collect personally identifiable information. As a static frontend application, your learning progress (like quiz scores) is stored locally in your browser.",
      p2Title: "2. Cookies & Local Storage",
      p2Desc: "We use essential local storage mechanisms to ensure the website functions correctly and to save your preferences (such as language settings).",
      p3Title: "3. Contact Us",
      p3Desc: "If you have any questions, please contact us at: support@learnfr.de"
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: June 2026",
      p1Title: "1. Acceptance of Terms",
      p1Desc: "By using this website, you agree to these terms. We reserve the right to modify these terms at any time.",
      p2Title: "2. Intellectual Property",
      p2Desc: "All course content, design, and code on this website are owned by us and may not be used for commercial purposes without permission.",
      p3Title: "3. Disclaimer",
      p3Desc: "We strive for accuracy but are not legally liable for any damages resulting from the use of our content. Some content is assisted by AI translation and may contain inaccuracies."
    }
  },
  fr: {
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : Juin 2026",
      p1Title: "1. Collecte d'informations",
      p1Desc: "Nous ne collectons pas activement d'informations personnellement identifiables. Votre progression (comme les scores) est stockée localement dans votre navigateur.",
      p2Title: "2. Cookies et stockage local",
      p2Desc: "Nous utilisons des mécanismes de stockage local essentiels pour le bon fonctionnement et vos préférences (comme la langue).",
      p3Title: "3. Nous contacter",
      p3Desc: "Pour toute question, veuillez nous contacter à : support@learnfr.de"
    },
    terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : Juin 2026",
      p1Title: "1. Acceptation des conditions",
      p1Desc: "En utilisant ce site, vous acceptez ces conditions. Nous nous réservons le droit de les modifier.",
      p2Title: "2. Propriété intellectuelle",
      p2Desc: "Tout le contenu, le design et le code nous appartiennent et ne peuvent être utilisés à des fins commerciales sans autorisation.",
      p3Title: "3. Clause de non-responsabilité",
      p3Desc: "Nous visons l'exactitude mais déclinons toute responsabilité juridique. Certains contenus sont traduits par l'IA et peuvent contenir des erreurs."
    }
  },
  es: {
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Junio de 2026",
      p1Title: "1. Recopilación de información",
      p1Desc: "No recopilamos información de identificación personal. Su progreso se almacena localmente en su navegador.",
      p2Title: "2. Cookies y almacenamiento local",
      p2Desc: "Utilizamos almacenamiento local para el funcionamiento del sitio y para guardar sus preferencias.",
      p3Title: "3. Contáctenos",
      p3Desc: "Si tiene preguntas, contáctenos en: support@learnfr.de"
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: Junio de 2026",
      p1Title: "1. Aceptación de los términos",
      p1Desc: "Al usar este sitio, usted acepta estos términos. Nos reservamos el derecho de modificarlos.",
      p2Title: "2. Propiedad intelectual",
      p2Desc: "Todo el contenido, diseño y código son de nuestra propiedad y no pueden usarse con fines comerciales sin permiso.",
      p3Title: "3. Descargo de responsabilidad",
      p3Desc: "Nos esforzamos por la precisión pero no somos legalmente responsables de los daños. Algunos contenidos son traducidos por IA y pueden ser inexactos."
    }
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: Juni 2026",
      p1Title: "1. Informationssammlung",
      p1Desc: "Wir sammeln nicht aktiv personenbezogene Daten. Als statische Frontend-Anwendung wird Ihr Lernfortschritt lokal in Ihrem Browser gespeichert.",
      p2Title: "2. Cookies & lokaler Speicher",
      p2Desc: "Wir verwenden lokale Speichermechanismen, um das reibungslose Funktionieren der Website und die Speicherung Ihrer Präferenzen (wie Spracheinstellungen) zu gewährleisten.",
      p3Title: "3. Kontakt",
      p3Desc: "Bei Fragen kontaktieren Sie uns bitte unter: support@learnfr.de"
    },
    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: Juni 2026",
      p1Title: "1. Annahme der Bedingungen",
      p1Desc: "Durch die Nutzung dieser Website stimmen Sie diesen Bedingungen zu. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern.",
      p2Title: "2. Geistiges Eigentum",
      p2Desc: "Alle Kursinhalte, Designs und Codes auf dieser Website sind unser Eigentum und dürfen ohne Genehmigung nicht für kommerzielle Zwecke verwendet werden.",
      p3Title: "3. Haftungsausschluss",
      p3Desc: "Wir bemühen uns um Genauigkeit, übernehmen jedoch keine rechtliche Haftung für Schäden, die aus der Nutzung unserer Inhalte entstehen. Einige Inhalte werden von KI-Übersetzungen unterstützt und können Ungenauigkeiten enthalten."
    }
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.privacy = legalData[loc].privacy;
  data.subPages.terms = legalData[loc].terms;
  
  // also add footer links translation to common
  if (loc === 'zh') {
    data.subPages.common.privacyLink = "隐私政策";
    data.subPages.common.termsLink = "服务条款";
  } else if (loc === 'en') {
    data.subPages.common.privacyLink = "Privacy Policy";
    data.subPages.common.termsLink = "Terms of Service";
  } else if (loc === 'fr') {
    data.subPages.common.privacyLink = "Confidentialité";
    data.subPages.common.termsLink = "Conditions";
  } else if (loc === 'es') {
    data.subPages.common.privacyLink = "Privacidad";
    data.subPages.common.termsLink = "Términos";
  } else if (loc === 'de') {
    data.subPages.common.privacyLink = "Datenschutz";
    data.subPages.common.termsLink = "Bedingungen";
  }

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('Legal dictionaries updated!');
