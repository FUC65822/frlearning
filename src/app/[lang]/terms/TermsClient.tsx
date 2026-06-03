"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Info, 
  Scale, 
  BookOpen, 
  Globe, 
  RefreshCw, 
  AlertTriangle, 
  Printer, 
  Clock, 
  Search,
  Check,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
  Lock,
  Smile,
  Mail
} from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

const GeminiIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 296 298" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
      <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"/>
    </mask>
    <g mask="url(#a)">
      <g filter="url(#b)"><ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"/></g>
      <g filter="url(#c)"><ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"/></g>
      <g filter="url(#d)"><ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"/></g>
      <g filter="url(#e)"><path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"/></g>
      <g filter="url(#f)"><path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"/></g>
      <g filter="url(#g)"><path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"/></g>
      <g filter="url(#h)"><path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"/></g>
    </g>
    <defs>
      <filter id="b" width="464" height="390" x="-69" y="-46" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="18"/>
      </filter>
      <filter id="c" width="265" height="273" x="-99" y="6" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="d" width="265" height="273" x="-113" y="12" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="e" width="299.5" height="329" x="-41.5" y="-130" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="f" width="299.5" height="329" x="-45" y="-153" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="g" width="299.5" height="329" x="-41" y="91" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
      <filter id="h" width="299.5" height="329" x="-39" y="132" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_69_17998" stdDeviation="32"/>
      </filter>
    </defs>
  </svg>
);

// -- 1. Detailed Multi-language Terms Chapters Dataset --
interface TermsSection {
  id: string;
  icon: any;
  title: Record<string, string>;
  summary: Record<string, string>;
  paragraphs: Record<string, string[]>;
}

const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "agreement",
    icon: Scale,
    title: {
      zh: "第一章：服务条款之接受与约束力",
      en: "Chapter 1: Agreement to Terms & Binding Effect",
      fr: "Chapitre 1: Acceptation des conditions et effet obligatoire",
      es: "Capítulo 1: Aceptación de las condiciones y efecto vinculante",
      de: "Kapitel 1: Zustimmung zu den Bedingungen und Bindungswirkung"
    },
    summary: {
      zh: "访问或使用我们的学习平台，即代表您同意并接受本协议的所有约束条款。如果您不同意，请停止使用本服务。",
      en: "By accessing or using our platform, you agree to be bound by these terms. If you do not agree, please discontinue using the Services.",
      fr: "En accédant à notre plateforme, vous acceptez d'être lié par ces conditions. Si vous n'êtes pas d'accord, veuillez cesser l'utilisation.",
      es: "Al acceder o utilizar nuestra plataforma, usted acepta cumplir con estas condiciones. Si no está de acuerdo, interrumpa el uso.",
      de: "Durch den Zugriff auf unsere Plattform stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, stellen Sie die Nutzung ein."
    },
    paragraphs: {
      zh: [
        "欢迎访问我们的在线法语学习服务。本用户服务协议（“本协议”、“服务条款”）由您与本服务运营实体（“我们”、“我们的”）共同缔结，具有法律约束力。",
        "使用或通过各种设备（包括但不限于电脑、手机和平板等）访问我们的网站、网页组件及小测试（合称“本服务”），即表示您已确认已满法定民事行为能力年龄，并已仔细阅读、理解并完全接受本协议的所有条款。",
        "我们保留随时单方面修改或更新本条款的权利，修改后的条款一旦公布即行生效。我们建议您定期查看本页面以掌握最新条款。"
      ],
      en: [
        "Welcome to our online French learning services. This User Agreement ('Agreement', 'Terms of Service') is a legally binding contract established between you ('User', 'you') and the platform operating entity ('we', 'us', 'our').",
        "By accessing or using our website, quiz applications, and study widgets (collectively, the 'Services') on any device, you confirm that you meet the legal age of capacity, have read, understood, and consented to these Terms in full.",
        "We reserve the right to modify or update these Terms at any time without prior individual notice. Any amendments become effective immediately upon being published on this page. We encourage you to review these terms periodically."
      ],
      fr: [
        "Bienvenue sur nos services d'apprentissage du français en ligne. Ces Conditions d'Utilisation ('CGU', 'Contrat') forment un accord contraignant entre vous ('Utilisateur') et l'entité éditrice ('nous').",
        "En accédant à notre site web, applications de quiz et modules d'apprentissage (les 'Services'), vous déclarez avoir la capacité juridique, avoir lu et accepté sans réserve l'intégralité de ces conditions.",
        "Nous nous réservons le droit de modifier ces CGU à tout moment. Les révisions prennent effet dès leur publication. Nous vous invitons à consulter cette page régulièrement."
      ],
      es: [
        "Bienvenido a nuestros servicios de aprendizaje de francés en línea. Estas Condiciones de Servicio ('CGU', 'Acuerdo') constituyen un acuerdo legal vinculante entre usted ('Usuario') y la entidad operadora ('nosotros').",
        "Al acceder a nuestro sitio web, cuestionarios y módulos de estudio (los 'Servicios'), usted confirma que tiene capacidad legal, y que acepta todos los términos sin reservas.",
        "Nos reservamos el derecho de modificar estas condiciones en cualquier momento. Las modificaciones entran en vigor tras su publicación. Le sugerimos revisar esta página periódicamente."
      ],
      de: [
        "Willkommen bei unseren Online-Französisch-Lerndiensten. Diese Nutzungsbedingungen stellen einen rechtsverbindlichen Vertrag zwischen Ihnen ('Nutzer') und der Betreibergesellschaft ('wir') dar.",
        "Durch den Zugriff auf unsere Website, Quizzes und Lernmodule (zusammen die 'Dienste') auf jeglichen Endgeräten bestätigen Sie Ihre Geschäftsfähigkeit und stimmen diesen Bedingungen vollumfänglich zu.",
        "Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen werden sofort mit ihrer Veröffentlichung auf dieser Seite wirksam. Bitte überprüfen Sie diese Seite regelmäßig."
      ]
    }
  },
  {
    id: "license",
    icon: BookOpen,
    title: {
      zh: "第二章：平台授权、使用规范与用户行为",
      en: "Chapter 2: User License & Code of Conduct",
      fr: "Chapitre 2: Licence d'utilisation et règles de conduite",
      es: "Capítulo 2: Licencia de usuario y código de conducta",
      de: "Kapitel 2: Nutzungslizenz und Verhaltensregeln"
    },
    summary: {
      zh: "我们仅授予您个人的、非商业的、有限的使用授权。您不得利用任何爬虫或自动化脚本抓取平台词汇与音频资源。",
      en: "We grant you a personal, non-commercial, limited license. You must not scrape, extract, or copy platform dictionaries and audio files using automated scripts.",
      fr: "Nous concédons une licence personnelle, non commerciale et limitée. Le raclage automatique (scraping) des dictionnaires et audios est strictement interdit.",
      es: "Otorgamos una licencia personal, no comercial y limitada. Queda prohibida la extracción automática (scraping) de diccionarios y audios.",
      de: "Wir gewähren Ihnen eine persönliche, nicht-kommerzielle Lizenz. Automatisches Auslesen (Scraping) von Wörterbüchern und Audios ist untersagt."
    },
    paragraphs: {
      zh: [
        "（1）有限许可授权：在您遵守本协议的前提下，我们授予您一项个人的、不可转让的、非排他的、可撤销的、仅供学习目的的非商业许可，允许您浏览学习内容、播放语音、完成数字与天气小测验。",
        "（2）使用限制：您不得通过任何自动化技术手段（包括但不限于网络爬虫、抓取工具、自动化脚本或注入命令）提取、镜像或复制本平台的课文翻译、发音音频、词表字典以及前端逻辑代码。",
        "（3）行为规范：您不得利用本服务实施任何损害网络安全、传播垃圾信息、滥用网络请求、或干扰其他用户正常学习体验的行为。"
      ],
      en: [
        "(1) Limited License: Subject to your compliance with these Terms, we grant you a personal, non-transferable, non-exclusive, revocable, and non-commercial license to access the learning materials, play audio streams, and complete quiz modules for personal education.",
        "(2) Prohibited Actions: You shall not employ any automated mechanisms (such as web scrapers, crawler bots, automated testing tools, or script injections) to extract, mirror, harvest, or duplicate platform text definitions, audio pronouncers, dictionary tables, or structural code.",
        "(3) Code of Conduct: You agree not to abuse network requests, compromise server cybersecurity, distribute unsolicited communications, or interfere with the normal operations and learning environment of other users."
      ],
      fr: [
        "(1) Licence limitée : Sous réserve du respect de ces CGU, nous vous accordons une licence personnelle, non transférable, révocable et non commerciale pour consulter nos cours, écouter les audios et faire les exercices.",
        "(2) Activités interdites : Il est interdit d'utiliser des robots de survol, scripts d'extraction (scraping) ou outils d'automatisation pour collecter les traductions, fichiers de prononciation audio, bases de données ou codes du site.",
        "(3) Bon comportement : Vous vous engagez à ne pas saturer les requêtes réseau, compromettre la sécurité des serveurs ou altérer le bon fonctionnement de la plateforme."
      ],
      es: [
        "(1) Licencia limitada: Bajo el cumplimiento de estas condiciones, le otorgamos una licencia personal, no transferible, revocable y no comercial para estudiar con el contenido, escuchar audios y realizar cuestionarios.",
        "(2) Restricciones de uso: No debe emplear rastreadores (crawlers), extractores (scrapers) o scripts automáticos para copiar las traducciones, audios de pronunciación, tablas de diccionario o el código fuente.",
        "(3) Normas de uso: Usted se compromete a no abusar de las solicitudes de red, interferir con la seguridad de los servidores o perturbar el acceso de otros usuarios."
      ],
      de: [
        "(1) Eingeschränkte Lizenz: Unter der Bedingung der Einhaltung dieser Bedingungen gewähren wir Ihnen eine persönliche, nicht-übertragbare, widerrufliche Lizenz zur Nutzung der Lerninhalte, Audio-Wiedergaben und Quizzes zu rein privaten Bildungszwecken.",
        "(2) Nutzungsverbote: Die Verwendung von Crawlern, Scrapern oder anderen automatisierten Skripten zur systematischen Extraktion von Übersetzungen, Audio-Aussprachen, Wörterbuch-Datenbanken oder Quellcode ist streng untersagt.",
        "(3) Verhaltensregeln: Sie verpflichten sich, keine Denial-of-Service-Angriffe durchzuführen, die Serverstabilität zu gefährden oder die Nutzungserfahrung anderer Lernender zu beeinträchtigen."
      ]
    }
  },
  {
    id: "intellectual-property",
    icon: BookOpen,
    title: {
      zh: "第三章：版权与知识产权归属条例",
      en: "Chapter 3: Copyright & Intellectual Property",
      fr: "Chapitre 3: Droits d'auteur et propriété intellectuelle",
      es: "Capítulo 3: Derechos de autor y propiedad intelectual",
      de: "Kapitel 3: Urheberrecht und geistiges Eigentum"
    },
    summary: {
      zh: "本平台所有课程素材、设计、音频、字典和核心代码均属于本平台或其授权方的知识产权，受国际版权法保护。",
      en: "All course contents, layouts, designs, audio recordings, dictionaries, and code are protected by international copyright laws and belong to us or our licensors.",
      fr: "L'ensemble des cours, conceptions, audios, dictionnaires et codes sont protégés par le droit d'auteur et appartiennent à la plateforme.",
      es: "Todo el contenido, diseño, audios, diccionarios y código fuente están protegidos por derechos de autor y pertenecen a la plataforma.",
      de: "Alle Lernmaterialien, Layouts, Audioaufnahmen, Wörterbücher und Codes sind urheberrechtlich geschützt und gehören uns oder unseren Lizenzgebern."
    },
    paragraphs: {
      zh: [
        "本服务中的所有课程页面排版、交互UI设计、多语言字典包、录制音频、图形标识以及底层前端 React 代码，均属于我们或我们的合作授权方的知识产权，并受到中国、欧盟及其他司法管辖区版权法与商标法的全面保护。",
        "未经我们明确的书面授权许可，您不得以任何营利目的对上述任何资源进行复制、再授权、分发、出版、编译或将其用于训练商业性质的AI大模型。",
        "任何针对本平台版权内容的越权抄袭、二次打包发布或商业性分发，均将被视为侵权，我们保留追究民事与刑事法律责任的完整权利。"
      ],
      en: [
        "All course structures, interactive UI designs, multilingual dictionary packages, streamed audio files, logos, and underlying React codebase are the exclusive intellectual property of us or our cooperating licensors, protected by copyright, trademark, and patents globally.",
        "Without our explicit prior written authorization, you are strictly prohibited from copying, licensing, distributing, publishing, compiling, or leveraging these resources to train commercial artificial intelligence models.",
        "Any unauthorized plagiarism, bundling, re-distribution, or commercial exploitation of our platform assets will be deemed an infringement, and we reserve all rights to pursue appropriate civil and criminal litigation."
      ],
      fr: [
        "Les structures de cours, conceptions d'interface, packs de dictionnaires multilingues, fichiers audio, logos et codes sources React sont la propriété exclusive de notre plateforme ou de ses concédants de licence.",
        "Sauf autorisation écrite préalable de notre part, il est strictement interdit de copier, sous-licencier, diffuser, publier ou utiliser ces actifs pour entraîner des modèles d'intelligence artificielle commerciaux.",
        "Tout plagiat ou distribution non autorisée de nos ressources fera l'objet de poursuites judiciaires conformément aux lois nationales et internationales."
      ],
      es: [
        "La estructura del curso, el diseño de la interfaz, los paquetes de diccionarios, los audios, los logotipos y el código fuente React son propiedad exclusiva de la plataforma o de sus licenciantes.",
        "Queda estrictamente prohibido copiar, sublicenciar, distribuir, publicar o utilizar estos recursos para el entrenamiento de modelos de inteligencia artificial comercial sin autorización escrita.",
        "Cualquier plagio o distribución no autorizada se considerará una infracción y nos reservamos el derecho de iniciar las acciones legales correspondientes."
      ],
      de: [
        "Alle Lektionsstrukturen, Interaktionsdesigns, mehrsprachigen Wörterbücher, Audio-Dateien, Logos und React-Codes sind das geistige Eigentum von uns oder unseren Partnern und durch Urheberrechts- und Markenrechte geschützt.",
        "Ohne ausdrückliche schriftliche Genehmigung ist es untersagt, diese Materialien zu vervielfältigen, zu lizensieren, zu veröffentlichen oder für das Training kommerzieller KI-Modelle zu nutzen.",
        "Jede unbefugte Vervielfältigung oder kommerzielle Verwertung wird als Urheberrechtsverletzung verfolgt."
      ]
    }
  },
  {
    id: "third-party",
    icon: Globe,
    title: {
      zh: "第四章：第三方依赖、链接与外部服务声明",
      en: "Chapter 4: Third-Party Dependencies, Links & Speech Engines",
      fr: "Chapitre 4: Dépendances tierces, liens et services externes",
      es: "Capítulo 4: Dependencias de terceros, enlaces y servicios externos",
      de: "Kapitel 4: Drittanbieter-Dienste, Links und externe Services"
    },
    summary: {
      zh: "我们的音频朗读调用了浏览器内置的语音引擎（TTS）。我们对第三方链接及语音合成结果的绝对准确性不承担担保责任。",
      en: "Our audio readings invoke the browser native Speech Synthesis (TTS). We disclaim responsibility for third-party links and the absolute accuracy of voice synthesizers.",
      fr: "Nos lectures audio appellent la synthèse vocale native du navigateur (TTS). Nous ne garantissons pas la précision absolue de ces outils externes.",
      es: "La reproducción de audio utiliza la síntesis de voz nativa del navegador (TTS). No garantizamos la precisión de estas herramientas externas.",
      de: "Unsere Audioausgaben nutzen die native Sprachausgabe (TTS) Ihres Browsers. Wir übernehmen keine Haftung für die Richtigkeit dieser externen Synthesen."
    },
    paragraphs: {
      zh: [
        "（1）文字转语音（TTS）依赖：本服务所调用的发音功能主要依赖您设备浏览器内置的微软/谷歌/苹果 Web Speech API。该合成结果受限于您的浏览器操作系统版本和网络连通状态。其合成出的口音与标准法语发音可能有细微偏差，不属于平台服务缺陷。",
        "（2）第三方链接：为了丰富您的法语学习背景，页面中包含指向外部资源（如维基百科、官方博物馆或文博机构）的链接。该类链接仅供查阅，我们不对第三方网站内容的真实性、合法性或隐私保护负任何法律责任。"
      ],
      en: [
        "(1) Speech Synthesis (TTS): The pronunciation functionalities in our Services leverage your browser native Web Speech API (Google, Microsoft, or Apple synthesizers). The quality and speed depend on your device OS configurations and system updates. Minor accents or discrepancies are not platform defects.",
        "(2) Outbound Hyperlinks: For cultural context enrichment, we include links to third-party institutions (such as Wikipedia, official cultural heritage sites). These are for reference only. We hold no liability or control over their accessibility, safety, or contents."
      ],
      fr: [
        "(1) Synthèse vocale (TTS) : La lecture audio utilise l'API Web Speech de votre navigateur. Le rendu sonore dépend de votre matériel et système d'exploitation. De légers écarts d'accent ne constituent pas des dysfonctionnements du site.",
        "(2) Liens externes : Pour votre culture, nous intégrons des liens vers des sites tiers (Wikipédia, musées). Nous ne sommes pas responsables de leur contenu ou de leur politique de confidentialité."
      ],
      es: [
        "(1) Síntesis de voz (TTS): La reproducción de audio utiliza la API Web Speech nativa del navegador. La calidad depende de su dispositivo y sistema. Pequeñas desviaciones en la pronunciación no representan un fallo del servicio.",
        "(2) Enlaces a terceros: Incluimos enlaces a sitios externos (Wikipedia, museos). No asumimos responsabilidad por su contenido o políticas de privacidad."
      ],
      de: [
        "(1) Sprachausgabe (TTS): Die Audiofunktionen nutzen die integrierte Web-Speech-API Ihres Browsers. Die Qualität hängt von Ihrem Betriebssystem ab. Kleinere Abweichungen in der Aussprache stellen keinen Mangel dar.",
        "(2) Externe Links: Wir verlinken auf externe Portale (z.B. Wikipedia, Museen). Wir haben keinen Einfluss auf deren Inhalte und übernehmen keine Verantwortung für deren Richtigkeit oder Datenschutz."
      ]
    }
  },
  {
    id: "maintenance",
    icon: RefreshCw,
    title: {
      zh: "第五章：服务可用性、更新维护与终止条款",
      en: "Chapter 5: Service Availability, Updates & Termination",
      fr: "Chapitre 5: Disponibilité du service, mises à jour et résiliation",
      es: "Capítulo 5: Disponibilidad del servicio, actualizaciones y terminación",
      de: "Kapitel 5: Verfügbarkeit, Aktualisierungen und Beendigung des Dienstes"
    },
    summary: {
      zh: "我们有权在无需提前通知的前提下，随时对页面功能进行升级或部分下线维护。",
      en: "We reserve the right to upgrade, modify, or temporarily suspend platform features for maintenance at any time without prior notice.",
      fr: "Nous nous réservons le droit de modifier, d'interrompre ou de suspendre l'accès aux leçons pour maintenance sans préavis.",
      es: "Nos reservamos el derecho de modificar o suspender temporalmente las lecciones para mantenimiento sin previo aviso.",
      de: "Wir behalten uns das Recht vor, Funktionen der Plattform jederzeit zu Wartungszwecken ohne vorherige Ankündigung zu ändern oder vorübergehend einzustellen."
    },
    paragraphs: {
      zh: [
        "为了保持学习内容的优良品质，我们保留随时在无需向您提前通知的状况下，添加、修改、重置或永久关闭任何学习板块（如天气、数字、商店词汇等）的权利。",
        "我们可能因服务器常规维护、代码迭代、电力故障或不可抗力等事由，临时中断服务。我们对由此产生的数据刷新、LocalStorage重置或暂停访问，不承担任何赔偿及金钱责任。"
      ],
      en: [
        "To ensure continuous improvement, we reserve the right to add, modify, reset, or permanently retire any portion of the Services (e.g., weather modules, shopping simulators, or numbers quizzes) at our sole discretion without prior notice.",
        "Service interruptions may occur due to standard server maintenance, codebase redeployment, power outages, or other force majeure events. We are not responsible for any local data resetting or temporary service suspension."
      ],
      fr: [
        "Afin d'améliorer la qualité, nous pouvons modifier, réinitialiser ou retirer des modules (météo, nombres, magasin) à tout moment et sans avertissement préalable.",
        "Des interruptions peuvent survenir pour maintenance, pannes ou force majeure. Nous ne sommes pas tenus responsables de la perte de vos données locales suite à ces opérations."
      ],
      es: [
        "Para mejorar el servicio, podemos modificar, restablecer o retirar lecciones a nuestra discreción sin previo aviso.",
        "Pueden ocurrir interrupciones por mantenimiento, actualizaciones o causas de fuerza mayor. No nos hacemos responsables de la pérdida de progresos locales debido a esto."
      ],
      de: [
        "Zur Sicherung der Qualität behalten wir uns das Recht vor, Lernmodule jederzeit ohne Ankündigung zu verändern, zurückzusetzen oder dauerhaft zu entfernen.",
        "Wartungsarbeiten oder Systemausfälle können zu vorübergehenden Sperren führen. Wir haften nicht für dadurch zurückgesetzte LocalStorage-Daten."
      ]
    }
  },
  {
    id: "disclaimer",
    icon: ShieldAlert,
    title: {
      zh: "第六章：免责与非学术性担保声明",
      en: "Chapter 6: Disclaimer of Warranties",
      fr: "Chapitre 6: Exclusion de garanties",
      es: "Capítulo 6: Exclusión de garantías",
      de: "Kapitel 6: Gewährleistungsausschluss"
    },
    summary: {
      zh: "本服务完全以“现状”提供。我们不对您的法语学习效率、考试通过率或口语水平做出任何学术明示或暗示担保。",
      en: "Services are provided on an 'as-is' and 'as-available' basis. We disclaim all academic warranties, express or implied, regarding fluency or examination outcomes.",
      fr: "Les services sont fournis 'en l'état'. Nous ne garantissons aucun niveau de compétence final ni réussite à vos examens.",
      es: "Los servicios se proporcionan 'tal cual'. No garantizamos ningún nivel de fluidez final ni éxito en sus exámenes.",
      de: "Die Dienste werden in der vorliegenden Form ('as-is') bereitgestellt. Wir übernehmen keine Garantie für Lernfortschritte oder Prüfungsergebnisse."
    },
    paragraphs: {
      zh: [
        "本服务中的所有单词、短语、拼写转换算法及背景知识，均本着“现状（As Is）”及“现有（As Available）”基础提供。尽管我们极力查证和校对，但我们不对本网站内容的无瑕疵性、实时准确性、以及实用完整性做出任何明示或暗示的法律担保。",
        "使用本服务所产生的学习效果（如口语流利度提升、正规法语等级考试成绩等）完全取决于您个人。我们不对任何具体的学术成就或专业水平提供任何明示的期望性担保。"
      ],
      en: [
        "All vocabularies, grammatical converters, and cultural information are provided on an 'as-is' and 'as-available' basis. While we check the materials, we provide no warranties, express or implied, regarding their completeness, reliability, or correctness.",
        "Any learning outcomes resulting from utilizing the platform (such as oral proficiency gains or performance in standardized language examinations like DELF/DALF) are solely dependent on you. We assume no academic liability."
      ],
      fr: [
        "Les vocabulaires, traducteurs de nombres et textes de civilisation sont fournis 'tels quels'. Malgré nos vérifications, nous n'offrons aucune garantie quant à l'exactitude absolue des contenus.",
        "Les résultats d'apprentissage (réussite aux tests officiels type DELF/DALF, fluidité à l'oral) dépendent uniquement de votre implication personnelle. Nous déclinons toute responsabilité académique."
      ],
      es: [
        "Los vocabularios, convertidores y datos culturales se proporcionan 'tal cual'. A pesar de nuestras revisiones, no ofrecemos garantías sobre la exactitude de los contenidos.",
        "Los resultados del aprendizaje (éxito en exámenes oficiales tipo DELF/DALF, fluidez) dependen únicamente de su esfuerzo personal. Declinamos cualquier responsabilidad académica."
      ],
      de: [
        "Alle Vokabeln, Übersetzungen und Kulturtexte werden ohne Gewähr bereitgestellt. Wir garantieren nicht die Fehlerfreiheit oder Vollständigkeit der angebotenen Lerninhalte.",
        "Lernfortschritte (wie das Bestehen von DELF/DALF-Sprachprüfungen oder Sprechfertigkeiten) hängen von Ihrem Fleiß ab. Wir übernehmen keine Erfolgsgarantien."
      ]
    }
  },
  {
    id: "liability",
    icon: Lock,
    title: {
      zh: "第七章：法律责任限制范围",
      en: "Chapter 7: Limitation of Liability",
      fr: "Chapitre 7: Limitation de responsabilité",
      es: "Capítulo 7: Limitación de responsabilidad",
      de: "Kapitel 7: Haftungsbeschränkung"
    },
    summary: {
      zh: "在法律允许的最大限度内，我们对由于使用本服务而引起的任何间接、偶然的损失不承担赔偿责任。",
      en: "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the Services.",
      fr: "Dans la mesure permise par la loi, nous déclinons toute responsabilité pour les dommages indirects ou pertes de données locales.",
      es: "En la medida permitida por la ley, declinamos toda responsabilidad por daños indirectos o pérdidas de datos locales.",
      de: "Soweit gesetzlich zulässig, haften wir nicht für indirekte Schäden, Begleitschäden oder Datenverluste."
    },
    paragraphs: {
      zh: [
        "在适用法律允许的最大范畴内，我们对因您访问或无法访问本网站，或由于您信任本服务所包含的字典、例句及拼写计算结果所引发的任何直接、间接、伴随性、惩罚性或附带性损失（包括但不限于设备数据损坏、学习记录丢失或业务中断等），概不承担赔偿责任。",
        "如果您设备的浏览器本地存储发生硬件损毁、清空行为、或安全外泄，我们对存储于您本地的 Progress 数据损毁不负法律保管责任责任。"
      ],
      en: [
        "To the maximum extent permitted by applicable laws, we shall not be held liable for any direct, indirect, incidental, punitive, or consequential damages (including, but not limited to, data erasure, browser storage failure, device corruption, or study disruptions) arising out of your access or inability to access the platform.",
        "We bear no responsibility for the loss of your study progress stored in browser LocalStorage due to hardware failure, manual cache clearing, browser updates, or security violations on your terminal device."
      ],
      fr: [
        "Dans la limite des lois en vigueur, nous ne serons en aucun cas responsables des dommages directs ou indirects (incluant les pannes de disque dur, l'effacement du cache ou les dysfonctionnements système) liés à l'accès au site.",
        "La sauvegarde de votre progression étant locale (LocalStorage), nous n'assumons aucune responsabilité quant à sa perte accidentelle ou sa corruption sur votre matériel."
      ],
      es: [
        "En la medida permitida por la ley, no seremos responsables de daños directos o indirectos (como fallos de almacenamiento o borrado de caché) derivados del uso de la plataforma.",
        "Como el progreso es local (LocalStorage), usted asume la total responsabilidad sobre su persistencia y la prevención de pérdidas de datos en su dispositivo."
      ],
      de: [
        "Wir haften nicht für direkte oder indirekte Schäden (einschließlich Datenverlust oder Systemstörungen), die durch die Nutzung unserer Website entstehen.",
        "Da die Lernfortschritte lokal in Ihrem Browser (LocalStorage) gespeichert werden, sind Sie selbst für deren Erhalt und die Vermeidung von Datenverlusten verantwortlich."
      ]
    }
  },
  {
    id: "governing-law",
    icon: Info,
    title: {
      zh: "第八章：管辖法律与争议纠纷解决",
      en: "Chapter 8: Governing Law & Dispute Resolution",
      fr: "Chapitre 8: Droit applicable et résolution des litiges",
      es: "Capítulo 8: Ley aplicable y resolución de disputas",
      de: "Kapitel 8: Anwendbares Recht und Streitbeilegung"
    },
    summary: {
      zh: "本服务条款受标准国际法和属地管辖权管辖。任何因本服务引发的纠纷应首先通过友好协商解决。",
      en: "These Terms are governed by international legal frameworks. Any disputes arising from the Services shall first be resolved through friendly negotiation.",
      fr: "Les présentes conditions sont régies par le droit en vigueur. Tout litige relatif à ces conditions fera l'objet d'une tentative de résolution amiable.",
      es: "Estas condiciones se rigen por la ley vigente. Cualquier disputa relacionada con las mismas se intentará resolver de mutuo acuerdo.",
      de: "Diese Bedingungen unterliegen dem geltenden Recht. Streitigkeiten sollten zunächst im Wege einer gütlichen Einigung beigelegt werden."
    },
    paragraphs: {
      zh: [
        "本协议的订立、生效、履行、解释及争议纠纷的解决，均受中华人民共和国相关法律管辖（不包括冲突法原则）。",
        "因本协议引起的或与本服务相关的任何争议，双方应本着友好互信的原则首先发起非正式商务谈判沟通。若协商不成，任何一方均有权将争议提交给本服务控制器所在地（“FRlearning Project Group总部属地”）有管辖权的民事法院通过诉讼程序裁决。"
      ],
      en: [
        "The establishment, interpretation, performance, and dispute resolution of this Agreement shall be governed by and construed in accordance with applicable governing laws (without giving effect to conflict of laws rules).",
        "Any dispute or claim arising out of these Terms shall first be addressed through friendly and informal negotiations. If mutually acceptable settlement cannot be reached, either party may submit the claim to the competent civil court where our corporate controller resides."
      ],
      fr: [
        "Ces conditions d'utilisation sont régies et interprétées conformément aux lois applicables du siège de l'éditeur.",
        "Tout différend découlant de ce contrat sera d'abord traité par négociation à l'amiable. À défaut d'accord, le litige sera soumis à la juridiction du tribunal civil compétent du siège social du responsable du traitement."
      ],
      es: [
        "Estas condiciones se rigen e interpretan de acuerdo con las leyes aplicables de la sede del operador.",
        "Cualquier disputa se tratará de resolver mediante negociación amistosa. De no lograrse un acuerdo, se someterá a la jurisdicción de los tribunales civiles competentes de la sede social de la entidad operadora."
      ],
      de: [
        "Diese Nutzungsbedingungen unterliegen dem geltenden Recht am Sitz des Betreibers.",
        "Bei Streitigkeiten wird zunächst eine einvernehmliche Lösung angestrebt. Kommt diese nicht zustande, wird das Verfahren vor den zuständigen Gerichten des Betreibers geführt."
      ]
    }
  },
  {
    id: "contact-history",
    icon: Mail,
    title: {
      zh: "第九章：联络渠道与条款版本变更历史",
      en: "Chapter 9: Contact Channels & Change Log",
      fr: "Chapitre 9: Contact et historique de révision des conditions",
      es: "Capítulo 9: Contacto e historial de revisiones",
      de: "Kapitel 9: Kontakt und Versionshistorie"
    },
    summary: {
      zh: "如有任何服务条款或授权方面的法律质询，请致信 support@learnfr.de。本协议的版本修订日志已在下方详列。",
      en: "For legal inquiries or licensing questions, contact support@learnfr.de. The version history log is detailed in the table below.",
      fr: "Pour toute question juridique ou licence, écrivez à support@learnfr.de. L'historique des révisions est détaillé ci-dessous.",
      es: "Para consultas legales o licencias, escriba a support@learnfr.de. El historial de revisiones se detalla a continuación.",
      de: "Bei rechtlichen Fragen schreiben Sie an support@learnfr.de. Die Historie der Änderungen finden Sie in der Tabelle unten."
    },
    paragraphs: {
      zh: [
        "若您对本用户服务协议的条款内容有任何疑问，或需要取得超出个人非商业性授权范围的额外授权或许可，请通过以下方式与我们的法务小组取得联系：",
        "电子邮箱：support@learnfr.de • 我们通常会在收到邮件后的 15 个工作日内向您提供答复意见。"
      ],
      en: [
        "If you have any questions concerning this Agreement, or wish to acquire licenses exceeding the scope of personal non-commercial study, please get in touch with our legal affairs desk:",
        "Contact Email: support@learnfr.de • We typically review and respond to inquiries within 15 business days."
      ],
      fr: [
        "Pour toute question relative à ces conditions, ou pour obtenir une licence dépassant le cadre de l'usage personnel, contactez notre équipe juridique :",
        "E-mail de contact : support@learnfr.de • Nous nous efforçons de vous répondre sous 15 jours ouvrables."
      ],
      es: [
        "Para consultas legales o de licencias comerciales, contáctese con nuestra oficina jurídica:",
        "Correo electrónico de contacto: support@learnfr.de • Por lo general, respondemos en un plazo de 15 días hábiles."
      ],
      de: [
        "Wenn Sie Fragen zu diesen Bedingungen haben oder Lizenzen für eine kommerzielle Nutzung erwerben möchten, wenden Sie sich bitte an unsere Rechtsabteilung:",
        "E-Mail: support@learnfr.de • Wir antworten Ihnen in der Regel innerhalb von 15 Werktagen."
      ]
    }
  }
];

// -- 2. Version History Changelog Dataset for Chapter 9 Table --
interface ChangelogItem {
  version: string;
  date: string;
  changes: Record<string, string>;
}

const CHANGELOG_DATA: ChangelogItem[] = [
  {
    version: "v1.0",
    date: "2025-01-10",
    changes: {
      zh: "初始版本：发布最早版本的用户使用规范及基本免责政策声明。",
      en: "Initial draft: Published baseline user code of conduct and general disclaimer statements.",
      fr: "Version initiale: Publication du premier code de conduite et des clauses de base.",
      es: "Versión inicial: Publicación del primer código de conducta y declaraciones de base.",
      de: "Erstfassung: Veröffentlichung der ersten grundlegenden Nutzungsregeln und Haftungsausschlüsse."
    }
  },
  {
    version: "v2.0",
    date: "2026-06-03",
    changes: {
      zh: "服务合规重大升级：重构为 9 大核心法务章节，新增多语言全文高亮检索过滤与打印优化支持。",
      en: "Compliance Upgrade: Rebuilt into 9 comprehensive legal chapters, added multilingual live search highlighting, and custom print formatting.",
      fr: "Mise à niveau majeure: Restructuration en 9 chapitres, ajout de la recherche en surbrillance et mise en page d'impression.",
      es: "Actualización mayor: Reestructuración en 9 capítulos, buscador con texto destacado y formato de página de impresión.",
      de: "Umfassendes Update: Neustrukturierung in 9 Kapitel, Integration der Suchhervorhebung und optimiertes Drucklayout."
    }
  }
];

// -- 3. Localized UI Text Translations --
const UI_TRANS: Record<string, Record<string, string>> = {
  zh: {
    title: "用户服务协议与平台条款",
    subtitle: "欢迎访问我们的法语学习服务。本协议阐明了您在访问我们的网站、利用在线学习工具以及参与测验时，您与平台之间所订立的法律条款。请在继续学习前仔细阅读以下条款。",
    lastUpdated: "最后更新时间：2026年6月3日 • 2.0 版本",
    statusBadgeTerms: "平台使用条款",
    statusBadgeLicense: "限个人非商业授权",
    statusBadgeAgree: "合意生效约束",
    
    searchPlaceholder: "输入关键字搜索条款（例如：知识产权, 免责声明...）",
    noResults: "未找到匹配的服务条款条款",
    
    toc: "服务条款章节目录",
    keySummary: "条款内容要点速览 (TL;DR)",
    downloadPdf: "打印 / 保存 PDF",
    backHome: "返回首页"
  },
  en: {
    title: "Terms of Service & Agreements",
    subtitle: "Welcome to our French learning services. This agreement outlines the legal covenants that govern your access, study sessions, and quiz interactions on our platform. Please review these terms carefully before starting your learning journey.",
    lastUpdated: "Last Updated: June 3, 2026 • Version 2.0",
    statusBadgeTerms: "Terms of Service",
    statusBadgeLicense: "Personal Use Only",
    statusBadgeAgree: "Binding Covenant",
    
    searchPlaceholder: "Search terms of service (e.g., Intellectual Property, liability...)",
    noResults: "No matching terms of service found",
    
    toc: "Terms Sections",
    keySummary: "Summary at a Glance (TL;DR)",
    downloadPdf: "Print / Save PDF",
    backHome: "Back to Home"
  },
  fr: {
    title: "Conditions Générales d'Utilisation",
    subtitle: "Bienvenue sur nos services d'apprentissage. Ce contrat régit votre accès et l'utilisation de nos outils d'étude et quiz. Veuillez lire attentivement ces conditions avant de commencer votre apprentissage.",
    lastUpdated: "Dernière mise à jour : 3 juin 2026 • Version 2.0",
    statusBadgeTerms: "CGU Plateforme",
    statusBadgeLicense: "Usage Personnel Limité",
    statusBadgeAgree: "Contrat Contraignant",
    
    searchPlaceholder: "Rechercher dans les conditions (ex: Propriété, responsabilité...)",
    noResults: "Aucune condition ne correspond à votre recherche",
    
    toc: "Sections des CGU",
    keySummary: "Synthèse en un coup d'œil (TL;DR)",
    downloadPdf: "Imprimer / PDF",
    backHome: "Retour"
  },
  es: {
    title: "Condiciones de Servicio",
    subtitle: "Bienvenido a nuestros servicios de aprendizaje. Este acuerdo rige su acceso y el uso de nuestras herramientas de estudio y cuestionarios. Por favor, lea detenidamente estas condiciones antes de continuar.",
    lastUpdated: "Última actualización: 3 de junio de 2026 • Versión 2.0",
    statusBadgeTerms: "Condiciones de Uso",
    statusBadgeLicense: "Licencia de Uso Personal",
    statusBadgeAgree: "Acuerdo Vinculante",
    
    searchPlaceholder: "Buscar en las condiciones (ej: Propiedad, responsabilidad...)",
    noResults: "No se encontraron condiciones que coincidan con la búsqueda",
    
    toc: "Secciones de Condiciones",
    keySummary: "Resumen en un vistazo (TL;DR)",
    downloadPdf: "Imprimir / PDF",
    backHome: "Volver"
  },
  de: {
    title: "Nutzungsbedingungen & Vereinbarungen",
    subtitle: "Willkommen bei unseren Französisch-Lerndiensten. Diese Vereinbarung regelt Ihren Zugriff und die Nutzung unserer Lernwerkzeuge und Quizzes. Bitte lesen Sie diese Bedingungen vor dem Fortfahren sorgfältig durch.",
    lastUpdated: "Letzte Aktualisierung: 3. Juni 2026 • Version 2.0",
    statusBadgeTerms: "Nutzungsbedingungen",
    statusBadgeLicense: "Nur für den persönlichen Gebrauch",
    statusBadgeAgree: "Bindender Vertrag",
    
    searchPlaceholder: "Nutzungsbedingungen durchsuchen (z. B. Geistiges Eigentum, Haftung...)",
    noResults: "Keine übereinstimmenden Bedingungen gefunden",
    
    toc: "Abschnittsverzeichnis",
    keySummary: "Zusammenfassung auf einen Blick (TL;DR)",
    downloadPdf: "Drucken / PDF",
    backHome: "Zurück"
  }
};

export default function TermsClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = UI_TRANS[lang] || UI_TRANS.en;

  // -- States --
  const [activeSection, setActiveSection] = useState("agreement");
  const [searchQuery, setSearchQuery] = useState("");

  // Monitor scrolling to highlight correct sidebar link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const section of TERMS_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Handler
  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // -- Search Algorithm --
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return TERMS_SECTIONS;
    const q = searchQuery.toLowerCase();
    return TERMS_SECTIONS.filter(sec => {
      const title = (sec.title as any)[lang]?.toLowerCase() || "";
      const summary = (sec.summary as any)[lang]?.toLowerCase() || "";
      const paragraphs = (sec.paragraphs as any)[lang]?.join(" ")?.toLowerCase() || "";
      return title.includes(q) || summary.includes(q) || paragraphs.includes(q);
    });
  }, [searchQuery, lang]);

  // -- Search Highlight Helper --
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-amber-100 text-neutral-900 rounded px-0.5 font-medium border-b border-amber-300">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 font-sans selection:bg-stone-200">
      
      {/* Header Banner - hidden during printing */}
      <div className="print:hidden">
        <SubpageHeader dict={dict} lang={lang} colorTheme="emerald" />
      </div>

      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        
        {/* TOP STATUS AND UTILITIES BAR */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-6 print:hidden">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              <Check className="h-3 w-3" />
              {t.statusBadgeTerms}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
              <Check className="h-3 w-3" />
              {t.statusBadgeLicense}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold text-stone-700">
              <Scale className="h-3 w-3" />
              {t.statusBadgeAgree}
            </span>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-stone-900 border border-stone-200 rounded-xl px-4 py-2 bg-white shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            {t.downloadPdf}
          </button>
        </div>

        {/* TITLE HEADER */}
        <header className="mb-12 text-center print:text-left print:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-stone-200/60 mb-5 text-stone-700 print:hidden"
          >
            <FileText className="h-8 w-8 text-emerald-600 animate-pulse" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 print:text-3xl"
          >
            {t.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-xs text-neutral-500 font-mono tracking-wider uppercase flex items-center justify-center gap-2 print:justify-start"
          >
            <Clock className="h-3.5 w-3.5" />
            {t.lastUpdated}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-sm md:text-base text-stone-500 max-w-3xl mx-auto leading-relaxed print:text-neutral-700 print:mt-3"
          >
            {t.subtitle}
          </motion.p>
        </header>

        {/* SEARCH BAR - hidden during printing */}
        <div className="mb-12 max-w-2xl mx-auto relative print:hidden">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-stone-200 hover:border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-semibold transition-all shadow-sm outline-none placeholder:text-stone-400"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700 bg-stone-100 rounded-lg px-2 py-1 cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* LAYOUT: SIDEBAR + LEGAL TEXT */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* STICKY SIDEBAR NAVIGATION - hidden during printing and search filtering */}
          <aside className="w-full md:w-64 sticky md:top-24 bg-white border border-stone-200 p-5 rounded-3xl shadow-sm md:max-h-[75vh] overflow-y-auto hidden md:block print:hidden flex-shrink-0">
            <h3 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-4 px-2">
              {t.toc}
            </h3>
            <nav className="space-y-1">
              {TERMS_SECTIONS.map((section) => {
                const isCurrent = activeSection === section.id;
                const SecIcon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleScrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                      isCurrent 
                        ? "bg-stone-100 text-stone-900" 
                        : "text-stone-500 hover:text-stone-800 hover:bg-stone-50/50"
                    }`}
                  >
                    <SecIcon className="h-4 w-4 flex-shrink-0 text-stone-500" />
                    <span className="truncate">
                      {(section.title as any)[lang] || section.title.en}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* MAIN LEGAL LEGAL ARTICLES */}
          <article className="flex-1 w-full bg-white border border-stone-200 rounded-[2.5rem] p-6 md:p-12 shadow-sm space-y-14 print:p-0 print:border-none print:shadow-none">
            
            {filteredSections.length === 0 ? (
              <div className="text-center py-16">
                <AlertTriangle className="h-12 w-12 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-600 font-bold">{t.noResults}</p>
              </div>
            ) : (
              filteredSections.map((section) => {
                const SecIcon = section.icon;
                return (
                  <section 
                    key={section.id} 
                    id={section.id}
                    className="scroll-mt-28 pb-10 border-b border-stone-100 last:border-b-0 last:pb-0 print:pb-8 print:border-stone-200 print:page-break-inside-avoid"
                  >
                    
                    {/* Header of Section */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="p-2.5 rounded-xl bg-stone-100 text-stone-700 print:hidden">
                        <SecIcon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-xl font-extrabold text-neutral-900 print:text-lg">
                        {highlightText((section.title as any)[lang] || section.title.en, searchQuery)}
                      </h2>
                    </div>

                    {/* At A Glance / Summary Callout box */}
                    <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/60 text-stone-700 text-xs md:text-sm leading-relaxed relative print:bg-stone-50 print:border-stone-300">
                      <div className="absolute right-3 top-3 text-[10px] font-bold text-stone-500 tracking-wider uppercase select-none print:hidden flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                        <GeminiIcon className="h-3.5 w-3.5" />
                        <span>
                          {lang === "zh" ? "Gemini AI 自动总结" :
                           lang === "fr" ? "Résumé par Gemini AI" :
                           lang === "es" ? "Resumen de Gemini AI" :
                           lang === "de" ? "Gemini AI Zusammenfassung" :
                           "Gemini AI Summary"}
                        </span>
                      </div>
                      <div className="font-semibold flex items-start gap-3 max-w-[80%] mt-3 sm:mt-0">
                        <div className="p-1 rounded-xl bg-white border border-stone-200 shadow-sm flex-shrink-0 flex items-center justify-center">
                          <GeminiIcon className="h-5 w-5" />
                        </div>
                        <span className="mt-0.5">{(section.summary as any)[lang] || section.summary.en}</span>
                      </div>
                    </div>
                    
                    {/* Section Paragraphs */}
                    <div className="space-y-4 text-neutral-700 text-sm md:text-base pl-1 leading-relaxed">
                      {((section.paragraphs as any)[lang] || section.paragraphs.en).map((para: string, idx: number) => (
                        <p key={idx}>
                          {highlightText(para, searchQuery)}
                        </p>
                      ))}
                    </div>

                    {/* Section 9: History Changelog Table */}
                    {section.id === "contact-history" && (
                      <div className="mt-8 overflow-x-auto border border-stone-200 rounded-2xl print:border-stone-300">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200 text-stone-600">
                              <th className="p-3 font-bold">{lang === "zh" ? "版本" : "Version"}</th>
                              <th className="p-3 font-bold">{lang === "zh" ? "发布日期" : "Date"}</th>
                              <th className="p-3 font-bold">{lang === "zh" ? "主要变更说明" : "Changes Description"}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100 font-sans">
                            {CHANGELOG_DATA.map((item) => (
                              <tr key={item.version} className="hover:bg-stone-50/30">
                                <td className="p-3 text-stone-950 font-bold">{item.version}</td>
                                <td className="p-3 text-stone-500 font-mono">{item.date}</td>
                                <td className="p-3 text-stone-600 leading-normal">{item.changes[lang] || item.changes.en}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  </section>
                );
              })
            )}

          </article>
        </div>

      </main>

    </div>
  );
}
