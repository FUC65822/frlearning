"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Info, 
  Lock, 
  Server, 
  EyeOff, 
  UserCheck, 
  RefreshCw, 
  Mail, 
  Globe, 
  Database, 
  Search,
  Trash2,
  Download,
  Sliders,
  Settings,
  Check,
  Printer,
  Clock,
  Sparkles,
  Smile,
  AlertTriangle
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

// -- 1. Detailed Multi-language Legal Chapters Dataset --
interface LegalSection {
  id: string;
  icon: any;
  title: Record<string, string>;
  summary: Record<string, string>;
  paragraphs: Record<string, string[]>;
}

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "overview",
    icon: Info,
    title: {
      zh: "第一章：导言、适用范围与数据控制器",
      en: "Chapter 1: Introduction, Scope & Data Controller",
      fr: "Chapitre 1: Introduction, champ d'application et responsable du traitement",
      es: "Capítulo 1: Introducción, ámbito de aplicación y responsable del tratamiento",
      de: "Kapitel 1: Einleitung, Geltungsbereich und Verantwortlicher"
    },
    summary: {
      zh: "本隐私政策适用于我们提供的法语学习平台。我们作为数据控制器，在此声明我们将以“本地优先存储”为原则，最大限度保护您的隐私。",
      en: "This policy applies to our French learning platform. As the Data Controller, we declare a 'local-first storage' principle to ensure maximum user privacy.",
      fr: "Cette politique s'applique à notre plateforme. En tant que responsable du traitement, nous posons le principe du stockage local prioritaire pour votre vie privée.",
      es: "Esta política se aplica a nuestra plataforma. Como responsable del tratamiento, declaramos el principio de almacenamiento local primero para su privacidad.",
      de: "Diese Erklärung gilt für unsere Plattform. Als Verantwortlicher legen wir den Grundsatz der lokalen Speicherung fest, um Ihre Privatsphäre zu schützen."
    },
    paragraphs: {
      zh: [
        "欢迎访问我们的数字化学习服务平台。我们高度重视用户的隐私权。本隐私政策旨在向您说明，当您访问我们的网站、使用在线学习工具和答题套件（合称“本服务”）时，我们如何处理您的个人数据。",
        "本政策的责任主体（数据控制器）为“FRlearning Education Project Group”（以下简称为“我们”）。本政策适用于通过各种浏览器、移动端和桌面终端访问本服务的全球学习者（“您”）。",
        "使用我们的服务，即表示您理解并确认本政策的所有条款。如果您不同意本政策，请立即停止使用并清除设备上的本地缓存数据。"
      ],
      en: [
        "Welcome to our digital learning service platform. We hold user privacy in the highest regard. This Privacy Policy clarifies how we process your personal data when you visit our website and use our learning tools (collectively, the 'Services').",
        "The Data Controller responsible for processing under this Policy is 'FRlearning Education Project Group' ('we', 'us'). This Policy applies to all learners ('you') globally accessing our services through web browsers, mobile viewports, or desktop installations.",
        "By continuing to interact with the Services, you acknowledge and agree to the terms in this Policy. If you do not agree, please cease using our Services and clear your browser cache."
      ],
      fr: [
        "Bienvenue sur notre plateforme de services d'apprentissage numérique. Nous accordons une importance primordiale à votre vie privée. Cette Politique explique comment nous traitons vos données personnelles lorsque vous utilisez nos services.",
        "Le responsable du traitement des données au sens du RGPD est 'FRlearning Education Project Group' ('nous'). Cette politique s'applique à tout apprenant ('vous') accédant à la plateforme via navigateur ou application.",
        "En utilisant nos services, vous acceptez l'intégralité de ces conditions. Si vous n'êtes pas d'accord, veuillez cesser toute utilisation et effacer votre cache local."
      ],
      es: [
        "Bienvenido a nuestra plataforma de aprendizaje digital. Damos la máxima importancia a la privacidad. Esta Política explica cómo tratamos sus datos personales al usar nuestros servicios.",
        "El responsable del tratamiento de datos según el RGPD es 'FRlearning Education Project Group' ('nosotros'). Esta política se aplica a todo estudiante ('usted') que acceda a través del navegador o dispositivo móvil.",
        "Al utilizar nuestros servicios, acepta los términos de esta Política. Si no está de acuerdo, interrumpa el uso y borre la memoria caché local de su dispositivo."
      ],
      de: [
        "Willkommen auf unserer digitalen Lernplattform. Wir legen größten Wert auf den Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten bei der Nutzung unserer Dienste verarbeiten.",
        "Der datenschutzrechtliche Verantwortliche ist die 'FRlearning Education Project Group' ('wir'). Diese Erklärung gilt für alle Lernenden ('Sie'), die weltweit über Browser oder mobile Endgeräte auf unsere Dienste zugreifen.",
        "Durch die Nutzung der Dienste stimmen Sie dieser Erklärung zu. Wenn Sie nicht einverstanden sind, stellen Sie die Nutzung ein und löschen Sie Ihren lokalen Browser-Cache."
      ]
    }
  },
  {
    id: "collection",
    icon: Database,
    title: {
      zh: "第二章：信息收集之类别与数据来源",
      en: "Chapter 2: Categories & Sources of Personal Data",
      fr: "Chapitre 2: Catégories de données et sources de collecte",
      es: "Capítulo 2: Categorías de datos y fuentes de recopilación",
      de: "Kapitel 2: Kategorien von Daten und Erhebungsquellen"
    },
    summary: {
      zh: "我们坚持“数据最小化”原则。我们不收集您的个人真实姓名或电话；我们主要利用设备本地存储（LocalStorage）记录进度，服务器仅记录标准网络日志以维护基本安全。",
      en: "We stick to data minimization. We do not collect names or phone numbers. Progress is saved locally via LocalStorage, and server logs are only kept for security.",
      fr: "Nous adhérons à la minimisation des données. Aucun nom ou numéro de téléphone n'est collecté. Les progrès sont locaux, et les journaux serveur sont limités à la sécurité.",
      es: "Adherimos a la minimización de datos. No se recopilan nombres ni teléfonos. El progreso es local y los registros de red se limitan a la seguridad.",
      de: "Wir halten uns an die Datenminimierung. Keine Klarnamen oder Telefonnummern werden erhoben. Der Fortschritt ist lokal, Serverprotokolle dienen nur der Sicherheit."
    },
    paragraphs: {
      zh: [
        "我们不会要求您进行注册或强制登录。因此，我们绝不会收集您的姓名、电话号码、邮寄地址、身份证件或支付敏感信息。我们收集的数据仅分为以下两类：",
        "（1）由您的浏览器自动发送的服务器日志数据：出于系统网络安全的防灾目的，当您发起请求时，我们的网络托管边缘节点会自动记录您的 IP 地址、浏览器类型、系统操作系统类型、Referrer 来源页面以及访问日期时间戳。",
        "（2）存储于您设备本地的数据：包括您对界面语言的偏好选择（`frlearning_lang`）、已完成的课文和测验分数、以及静音状态等。此类数据均存储在您的本地浏览器中，绝不会自动传输回我们的云端服务器。"
      ],
      en: [
        "We do not require account registration or mandatory login. Consequently, we never collect names, phone numbers, postal addresses, government IDs, or payment details. Data collected falls strictly into two categories:",
        "(1) Server Log Data sent automatically: For network security and threat mitigation, our hosting infrastructure records request meta-data including IP addresses, browser types, operating systems, referrer URLs, and request timestamps.",
        "(2) Local Storage Data stored on your device: This includes your preferred UI language ('frlearning_lang'), completed lesson records, and quiz scores. This data is housed strictly within your browser and is never uploaded to our servers."
      ],
      fr: [
        "Nous ne demandons pas de création de compte. Par conséquent, nous ne collectons jamais vos noms, téléphones ou coordonnées de paiement. Les données recueillies se limitent à :",
        "(1) Données techniques automatiques (journaux serveurs) : Pour des raisons de sécurité réseau, nos serveurs enregistrent votre adresse IP, type de navigateur, système d'exploitation, URL de provenance et horodatage.",
        "(2) Données de stockage local : Choix de langue, scores de quiz et préférences d'interface. Ces données restent sur votre machine et ne nous sont jamais transmises."
      ],
      es: [
        "No requerimos la creación de una cuenta. Por lo tanto, nunca recopilamos nombres, teléfonos o datos de pago. Los datos recopilados se limitan a :",
        "(1) Datos técnicos automáticos (registros del servidor): Para seguridad de la red, los servidores registran su dirección IP, tipo de navegador, sistema operativo, URL de origen y marca de tiempo.",
        "(2) Datos de almacenamiento local: Configuración de idioma, puntajes de cuestionarios y preferencias de interfaz. Permanecen en su navegador y nunca se transmiten."
      ],
      de: [
        "Wir verlangen keine Registrierung. Dementsprechend erfassen wir niemals Namen, Telefonnummern oder Zahlungsdaten. Die erhobenen Daten beschränken sich auf:",
        "(1) Automatisch übermittelte Server-Protokolle: Zur Sicherung der Systeme protokollieren unsere Edge-Server IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL und Zeitstempel.",
        "(2) Lokale Speicherdaten auf Ihrem Gerät: Ihre bevorzugte Sprache ('frlearning_lang'), Testergebnisse und Benutzeroberflächen-Optionen werden im lokalen Speicher Ihres Browsers abgelegt und niemals an uns gesendet."
      ]
    }
  },
  {
    id: "legal-bases",
    icon: UserCheck,
    title: {
      zh: "第三章：数据处理之目的与法律依据",
      en: "Chapter 3: Purposes and Legal Bases for Data Processing",
      fr: "Chapitre 3: Finalités et bases juridiques du traitement",
      es: "Capítulo 3: Fines y bases legales del procesamiento",
      de: "Kapitel 3: Zwecke und Rechtsgrundlagen der Verarbeitung"
    },
    summary: {
      zh: "根据欧盟 GDPR 第 6 条，我们处理技术日志基于“合法利益”（维护网络稳定与防范黑客攻击），而保存本地设置是履行与您的服务约定所必需的。",
      en: "Under GDPR Article 6, technical logs are processed based on 'Legitimate Interest' (network safety), while local settings are processed to deliver the service.",
      fr: "Selon l'article 6 du RGPD, le traitement des journaux repose sur l'intérêt légitime (sécurité), et le stockage des préférences est nécessaire à la fourniture du service.",
      es: "Según el Artículo 6 del RGPD, el procesamiento de registros se basa en el interés legítimo (seguridad) y el almacenamiento local es necesario para el servicio.",
      de: "Gemäß Art. 6 DSGVO erfolgt die Verarbeitung von Protokollen auf Grundlage unseres 'berechtigten Interesses' (IT-Sicherheit), lokale Speicherungen dienen der Vertragserfüllung."
    },
    paragraphs: {
      zh: [
        "依据欧盟通用数据保护条例（GDPR）第六条第一款，我们对极少量个人数据（主要是 IP 日志）的处理具有合法的法律依据：",
        "（1）履行合同服务之必需（GDPR Art. 6(1)(b)）：提供并呈现适合您设备尺寸的布局、播放语音发音以及在您的浏览器中留存答题进度。没有这些必要配置，服务将无法正常运行。",
        "（2）合法利益（GDPR Art. 6(1)(f)）：我们记录和留存短期网络访问日志是出于保障本服务的物理与逻辑网络安全，防止诸如 DDoS 攻击、爬虫恶意扫描以及接口滥用等不法活动。"
      ],
      en: [
        "Pursuant to Article 6(1) of the GDPR, our processing of the minimal data (chiefly IP-based server logs) is legally justified under:",
        "(1) Contractual Necessity (Art. 6(1)(b)): Necessary to render multi-language interfaces, stream speech pronunciations, and record study sessions as expected by you.",
        "(2) Legitimate Interests (Art. 6(1)(f)): Maintaining standard IT security, investigating suspicious requests, and protecting our platform infrastructure against Distributed Denial of Service (DDoS) and automated scrapers."
      ],
      fr: [
        "Conformément à l'article 6(1) du RGPD, notre traitement s'appuie sur les bases juridiques suivantes :",
        "(1) Exécution du contrat (Art. 6(1)(b)) : Indispensable pour restituer les interfaces, lire la prononciation audio et sauvegarder la progression d'apprentissage demandée.",
        "(2) Intérêt légitime (Art. 6(1)(f)) : Sécurisation de l'infrastructure informatique, diagnostic des pannes et prévention des attaques par déni de service (DDoS)."
      ],
      es: [
        "De conformidad con el Artículo 6(1) del RGPD, el procesamiento de los datos se basa en:",
        "(1) Ejecución del contrato (Art. 6(1)(b)): Necesario para mostrar interfaces en múltiples idiomas, reproducir audio y guardar su progreso de aprendizaje.",
        "(2) Interés legítimo (Art. 6(1)(f)): Garantizar la seguridad informática de la plataforma, mitigar ataques de red (DDoS) y bloquear accesos maliciosos."
      ],
      de: [
        "Gemäß Artikel 6 Absatz 1 DSGVO erfolgt die Verarbeitung Ihrer Daten auf folgenden Rechtsgrundlagen:",
        "(1) Vertragserfüllung (Art. 6 Abs. 1 lit. b): Erforderlich, um die mehrsprachige Benutzeroberfläche bereitzustellen, Audio-Sprachausgaben abzuspielen und Ihren Lernfortschritt anzuzeigen.",
        "(2) Berechtigtes Interesse (Art. 6 Abs. 1 lit. f): Sicherstellung der IT-Sicherheit der Plattform, Abwehr von DDoS-Angriffen und Schutz vor unbefugtem Scraping."
      ]
    }
  },
  {
    id: "storage",
    icon: EyeOff,
    title: {
      zh: "第四章：本地存储与 Cookie 详细清单",
      en: "Chapter 4: Local Storage and Cookies Inventory",
      fr: "Chapitre 4: Inventaire des cookies et du stockage local",
      es: "Capítulo 4: Inventario de cookies y almacenamiento local",
      de: "Kapitel 4: Verzeichnis von Cookies und lokalem Speicher"
    },
    summary: {
      zh: "我们不使用第三方追踪 Cookie。我们在您设备上创建的所有 LocalStorage 键都列在下方，您可以随时通过本页的控制台或浏览器设置进行彻底清理。",
      en: "We do not use third-party tracking cookies. All local database keys are listed below. You can delete them at any time via browser settings or our console.",
      fr: "Aucun cookie de suivi tiers n'est utilisé. Retrouvez ci-dessous la liste de nos clés LocalStorage. Vous pouvez les effacer via la console ou votre navigateur.",
      es: "No se utilizan cookies de seguimiento de terceros. Vea la lista de claves de LocalStorage abajo. Puede borrarlas usando la consola o su navegador.",
      de: "Wir verwenden keine Tracking-Cookies von Drittanbietern. Alle lokalen Speicherschlüssel sind unten aufgelistet. Sie können diese jederzeit löschen."
    },
    paragraphs: {
      zh: [
        "作为本地优先的数据架构，我们不需要依靠 Cookie 来追踪您的身份。我们使用 HTML5 本地存储（LocalStorage）记录您的首选项。以下是我们在您的浏览器中可能建立的本地数据项列表：",
        "（提示：您可以查看下方的“数据隐私控制台”，那里能直接帮您读取这些键的实时字节大小以及所存储的具体值）"
      ],
      en: [
        "In a local-first architecture, we do not require cookies to track your identity across other apps. We utilize HTML5 LocalStorage to preserve your settings. Below is the inventory of keys saved locally:",
        "(Tip: You can use the 'Privacy Console' below to view the exact byte size and value of these keys in real-time.)"
      ],
      fr: [
        "Notre architecture locale évite l'usage de cookies pour suivre votre identité sur le web. Nous utilisons le stockage local HTML5 (LocalStorage) pour mémoriser vos préférences :",
        "(Conseil : Utilisez la console interactive ci-dessous pour voir la taille en octets et la valeur réelle de ces clés en temps réel.)"
      ],
      es: [
        "Nuestra arquitectura local evita el uso de cookies para rastrear su identidad en la web. Utilizamos LocalStorage de HTML5 para recordar sus preferencias:",
        "(Consejo: Utilice la consola interactiva a continuación para ver el tamaño exacto en bytes y el valor de estas claves en tiempo real.)"
      ],
      de: [
        "Durch die lokale Speicherung benötigen wir keine Cookies, um Sie über das Web hinweg zu verfolgen. Wir nutzen HTML5-LocalStorage zur Ablage von Einstellungen:",
        "(Tipp: Nutzen Sie die untenstehende Konsole, um die exakte Byte-Größe und die Werte dieser Schlüssel in Echtzeit einzusehen.)"
      ]
    }
  },
  {
    id: "sharing",
    icon: Globe,
    title: {
      zh: "第五章：数据共享、披露与跨境传输",
      en: "Chapter 5: Data Sharing, Disclosures & International Transfers",
      fr: "Chapitre 5: Partage, divulgation et transferts internationaux",
      es: "Capítulo 5: Intercambio, divulgación y transferencias de datos",
      de: "Kapitel 5: Weitergabe, Offenlegung und internationale Übertragung"
    },
    summary: {
      zh: "我们不会向任何商业机构出售或共享您的学习兴趣和日志。我们的服务部署在 Vercel 与 Cloudflare 等云托管平台上，数据在符合国际合规标准的服务器中分发。",
      en: "We never sell your learning data. Our services are deployed on secure cloud platforms like Vercel and Cloudflare, which adhere to strict compliance policies.",
      fr: "Nous ne vendons pas vos données. Nos services sont hébergés sur des infrastructures cloud sécurisées (Vercel, Cloudflare) conformes aux standards internationaux.",
      es: "No vendemos sus datos. Los servicios están alojados en infraestructuras de nube seguras (Vercel, Cloudflare) que cumplen con estándares internacionales.",
      de: "Wir verkaufen Ihre Daten nicht. Unsere Dienste werden auf sicheren Cloud-Plattformen wie Vercel und Cloudflare gehostet, die strenge Compliance-Standards einhalten."
    },
    paragraphs: {
      zh: [
        "（1）禁止出售与共享：我们不会向广告代理商、数据分析公司或任何第三方中介出售、出租或共享您的学习偏好和网络日志。",
        "（2）技术基础设施：我们的静态网站托管在 Vercel Inc.，且通过 Cloudflare Inc. 进行 CDN 边缘流量防护与加速。他们作为我们的数据处理协作方，仅在我们的授权下提供基本的资源请求分发，且完全遵循 GDPR、CCPA 的合规协议标准。",
        "（3）司法调取：如果出于履行法定职责或法庭传票等司法程序要求，我们可能在收到合法命令并予以审核后，向执法机构披露最有限的服务器日志信息。"
      ],
      en: [
        "(1) No Selling/Commercial Sharing: We never sell, lease, or commercially distribute your study habits or request logs to ad brokers or analytics corporations.",
        "(2) Cloud Subprocessors: Our website is built and hosted via Vercel Inc. and shielded from malicious requests via Cloudflare Inc. These infrastructural entities act as subprocessors, handling HTTP requests on our behalf in strict compliance with GDPR and CCPA standards.",
        "(3) Legal Mandates: If forced by judicial orders, subpoenas, or statutory authorities under applicable international laws, we may disclose minimal technical logs after verifying the legitimacy of the request."
      ],
      fr: [
        "(1) Pas de vente commerciale : Nous ne vendrons ni ne louerons jamais vos données d'apprentissage ou journaux de trafic à des courtiers en publicité.",
        "(2) Sous-traitants techniques : Notre plateforme est hébergée par Vercel Inc. et sécurisée par Cloudflare Inc. Ces entités agissent en sous-traitance et gèrent les requêtes HTTP dans le respect des exigences du RGPD.",
        "(3) Réquisitions légales : Si la loi l'exige suite à une procédure judiciaire légitime, nous pourrions être contraints de communiquer des extraits limités de journaux serveurs."
      ],
      es: [
        "(1) Sin venta comercial: Nunca venderemos ni alquilaremos sus datos o registros a anunciantes o empresas de análisis de datos.",
        "(2) Subprocesadores técnicos: Nuestro sitio está alojado en Vercel Inc. y protegido por Cloudflare Inc. Estas entidades actúan bajo nuestro mandato para procesar solicitudes HTTP de acuerdo con el RGPD y la CCPA.",
        "(3) Requisitos legales: Si una autoridad judicial emite una orden legítima, podríamos revelar registros limitados de red del servidor según la ley."
      ],
      de: [
        "(1) Kein Verkauf: Wir verkaufen oder vermieten Ihre Nutzungsdaten niemals an Werbetreibende oder Datenhändler.",
        "(2) Cloud-Subunternehmer: Unsere Website wird über Vercel Inc. bereitgestellt und mittels Cloudflare Inc. abgesichert. Diese Anbieter verarbeiten HTTP-Anfragen in unserem Auftrag gemäß strengen DSGVO- und CCPA-Richtlinien.",
        "(3) Behördliche Auskunftsersuchen: Bei Vorliegen rechtskräftiger richterlicher Anordnungen können wir in minimalem Umfang technische Protokolle an Ermittlungsbehörden übermitteln."
      ]
    }
  },
  {
    id: "security",
    icon: Lock,
    title: {
      zh: "第六章：安全防范与数据保留期限",
      en: "Chapter 6: Technical Security & Retention Periods",
      fr: "Chapitre 6: Sécurité des données et durée de conservation",
      es: "Capítulo 6: Seguridad técnica y retención de datos",
      de: "Kapitel 6: Datensicherheit und Aufbewahrungsfrist"
    },
    summary: {
      zh: "所有交互全程采用 HTTPS 高度加密。服务器技术日志保留不超过 90 天，而本地浏览器中的学习数据保存期限完全由您自己控制，可一键随时清除。",
      en: "All traffic is secured via HTTPS. Server technical logs are purged within 90 days, while local storage stays under your control and can be erased instantly.",
      fr: "Tout le trafic est sécurisé en HTTPS. Les journaux serveur expirent sous 90 jours. La durée du stockage local dépend uniquement de votre appareil.",
      es: "Todo el tráfico es HTTPS seguro. Los registros del servidor caducan en 90 días. La duración del almacenamiento local depende de su dispositivo.",
      de: "Der gesamte Datenverkehr ist durch HTTPS geschützt. Serverprotokolle werden nach maximal 90 Tagen gelöscht. Lokale Daten verbleiben unter Ihrer Kontrolle."
    },
    paragraphs: {
      zh: [
        "（1）网络加密：本服务强制启用强加密传输协议 HTTPS (SSL/TLS)。数据在您的终端和托管边缘节点之间传输时会经过端到端加密，避免在公共网络环境中被非法监听或篡改。",
        "（2）服务器日志保留期：用于安全监控和防灾的服务器技术访问日志将在 90 天内进行自动覆盖清理。除非由于涉及特定安全调查或欺诈案件需要配合司法处理，才会进行封存。",
        "（3）本地学习进度保留期：由于数据保存在您的本地浏览器中，其保留期限完全由您自己控制。您可以使用下方的“擦除”工具随时一键抹除所有数据，或通过浏览器自身的缓存清理机制彻底删除。"
      ],
      en: [
        "(1) Encryption in Transit: We mandate strict Transport Layer Security via HTTPS (SSL/TLS). This encrypts all connection channels between your browser and our edge servers, protecting against sniffing and interception.",
        "(2) Log Retention: Standard server technical logs are retained for no longer than 90 days. They are automatically recycled and overwritten unless an ongoing investigation into a security breach requires specific isolation.",
        "(3) Local Storage Retention: Because your progress is stored entirely on your device, the retention is controlled by you. It remains until you manually clear browser cache or click the erasure button in our privacy console."
      ],
      fr: [
        "(1) Chiffrement des liaisons : Nous imposons le protocole HTTPS. Toutes les requêtes sont chiffrées de bout en bout pour empêcher l'interception de vos données sur un réseau public.",
        "(2) Conservation des journaux : Les fichiers de connexion technique des serveurs sont écrasés automatiquement sous 90 jours maximum, sauf enquête de sécurité en cours.",
        "(3) Conservation locale : Vos progrès résidant dans LocalStorage, leur durée dépend de vous. Vous pouvez les détruire à tout moment depuis notre console de contrôle ou via votre navigateur."
      ],
      es: [
        "(1) Cifrado en tránsito: Imponemos el uso obligatorio de HTTPS. Todas las solicitudes se cifran para evitar la interceptación en redes públicas o intermedias.",
        "(2) Retención de registros: Los archivos de registro técnico del servidor se sobrescriben en un máximo de 90 días, salvo investigaciones de seguridad en curso.",
        "(3) Retención local: Como su progreso reside en LocalStorage, la duración depende de usted. Puede borrarlos usando nuestra consola o mediante el navegador."
      ],
      de: [
        "(1) Verschlüsselung der Verbindung: Wir erzwingen eine Transportverschlüsselung mittels HTTPS (SSL/TLS). Jeglicher Datenverkehr zwischen Ihrem Browser und unseren Edge-Servern ist vor Lauschangriffen geschützt.",
        "(2) Speicherfrist für Protokolle: Technische Server-Logs zur Missbrauchserkennung werden nach maximal 90 Tagen automatisch überschrieben und gelöscht.",
        "(3) Speicherfrist lokaler Daten: Da der Fortschritt lokal im Browser liegt, entscheiden Sie selbst. Die Daten bleiben gespeichert, bis Sie den Cache löschen oder den Löschen-Knopf nutzen."
      ]
    }
  },
  {
    id: "rights",
    icon: UserCheck,
    title: {
      zh: "第七章：您的法定隐私权利（GDPR与CCPA）",
      en: "Chapter 7: Your Statutory Rights (GDPR & CCPA)",
      fr: "Chapitre 7: Vos droits légaux (RGPD et CCPA)",
      es: "Capítulo 7: Sus derechos legales de privacidad (RGPD y CCPA)",
      de: "Kapitel 7: Ihre gesetzlichen Datenschutzrechte (DSGVO & CCPA)"
    },
    summary: {
      zh: "您拥有知情权、更正权、数据导出（数据可携权）以及删除（被遗忘权）。本页面特意开发了交互式控制台，您可以一键完成导出与删除。",
      en: "You have rights to access, rectify, export (portability), and delete (erasure) data. Our interactive console lets you exercise these rights with one click.",
      fr: "Vous disposez de droits d'accès, d'exportation (portabilité) et d'effacement (oubli). Notre console vous permet de les exercer en un clic.",
      es: "Tiene derecho de acceso, exportación (portabilidad) y supresión (olvido). Nuestra consola interactiva le permite ejercerlos en un clic.",
      de: "Sie haben das Recht auf Auskunft, Berichtigung, Datenübertragbarkeit und Löschung. In unserer Konsole können Sie diese Rechte mit einem Klick ausüben."
    },
    paragraphs: {
      zh: [
        "作为欧盟（GDPR）及加州（CCPA）居民，您对您的数据拥有以下广泛的法定权利，且无需承担歧视：",
        "（1）知情与访问权（Right of Access）：您有权知晓我们处理了哪些数据。您可以通过本页下方的控制台直接以可视化列表查看。",
        "（2）数据可携权（Right to Portability）：您有权将您的数据导出并带走。控制台的“导出 JSON”键提供了这一机制。",
        "（3）擦除权（“被遗忘权” - Right to Erasure）：您有权撤回同意并删除所有存储的信息。点击控制台中的“彻底抹除”会立即执行此操作。",
        "（4）反对与申诉权：您有权反对出于合法利益的处理，并有权向您所在国家的数据保护机构（DPA）提起申诉。"
      ],
      en: [
        "As a resident of the European Economic Area (GDPR) or California (CCPA), you possess several statutory rights, which we respect without discrimination:",
        "(1) Right to Know & Access: You have the right to view what data we hold. The dashboard below visualizes all active LocalStorage keys directly.",
        "(2) Right to Portability: You have the right to export your study statistics. Click our 'Export JSON' button to download your backup.",
        "(3) Right to Erasure (Right to be Forgotten): You have the right to wipe your digital footprint. Clicking 'Erase All' instantly wipes the browser storage.",
        "(4) Right to Object or Restrict: You have the right to object to processing based on legitimate interests and file complaints with a competent Data Protection Authority (DPA)."
      ],
      fr: [
        "En tant que résident européen (RGPD) ou californien (CCPA), vous disposez de droits étendus concernant vos informations :",
        "(1) Droit d'accès et d'information : Vous pouvez inspecter les données via l'écran ci-dessous.",
        "(2) Droit à la portabilité : Exportez vos performances sous forme de fichier JSON via notre bouton de téléchargement.",
        "(3) Droit à l'effacement (Droit à l'oubli) : Supprimez vos traces instantanément en cliquant sur le bouton de réinitialisation complète.",
        "(4) Droit de réclamation : Vous pouvez vous opposer aux traitements légitimes et introduire une réclamation auprès de la CNIL ou de votre autorité locale."
      ],
      es: [
        "Como residente europeo (RGPD) o californiano (CCPA), tiene amplios derechos sobre sus datos personales:",
        "(1) Derecho de acceso e información: Puede ver todos los datos almacenados a través de la consola visual abajo.",
        "(2) Derecho a la portabilidad: Exporte sus datos a un archivo JSON utilizando nuestro botón de descarga.",
        "(3) Derecho de supresión (Derecho al olvido): Elimine sus datos de forma permanente haciendo clic en el botón de borrado completo.",
        "(4) Derecho de reclamación: Puede oponerse al procesamiento legítimo y presentar una queja ante una autoridad de control de protección de datos."
      ],
      de: [
        "Als betroffene Person im Europäischen Wirtschaftsraum (DSGVO) oder Kalifornien (CCPA) haben Sie umfassende Rechte bezüglich Ihrer Daten:",
        "(1) Recht auf Auskunft (Art. 15 DSGVO): Sie können jederzeit einsehen, welche Daten abgelegt sind. Das untenstehende Dashboard zeigt alle Schlüssel live an.",
        "(2) Recht auf Datenübertragbarkeit (Art. 20 DSGVO): Sie können Ihre Daten exportieren. Klicken Sie auf 'JSON-Backup exportieren' für den Download.",
        "(3) Recht auf Löschung (Art. 17 DSGVO - 'Recht auf Vergessenwerden'): Sie können Ihre Spuren verwischen. Klicken Sie auf 'Alle Daten löschen', um die Werte zu entfernen.",
        "(4) Widerspruchs- und Beschwerderecht: Sie können der Verarbeitung widersprechen und eine Beschwerde bei einer zuständigen Datenschutzbehörde einreichen."
      ]
    }
  },
  {
    id: "minors",
    icon: Smile,
    title: {
      zh: "第八章：儿童与未成年人隐私保障（COPPA）",
      en: "Chapter 8: Minors & Children's Privacy (COPPA)",
      fr: "Chapitre 8: Protection des mineurs et enfants (COPPA)",
      es: "Capítulo 8: Protección de la privacidad infantil (COPPA)",
      de: "Kapitel 8: Schutz von Kindern und Minderjährigen (COPPA)"
    },
    summary: {
      zh: "我们的服务不针对 13 周岁以下（美国 COPPA）或 16 周岁以下（欧盟）的儿童。我们不会主动收集此类未成年人的任何个人数据。",
      en: "Our services are not intended for children under 13 (US COPPA) or 16 (EU). We do not knowingly collect personal data from minors.",
      fr: "Nos services ne ciblent pas les enfants de moins de 13 ans (COPPA US) ou 16 ans (UE). Nous ne collectons pas sciemment de données de mineurs.",
      es: "Nuestros servicios no están dirigidos a niños menores de 13 años (COPPA EE. UU.) o 16 años (UE). No recopilamos datos de menores a sabiendas.",
      de: "Unsere Dienste richten sich nicht an Kinder unter 13 Jahren (US COPPA) oder 16 Jahren (EU). Wir erfassen wissentlich keine Daten von Minderjährigen."
    },
    paragraphs: {
      zh: [
        "我们极为重视保护使用本服务的小学龄儿童的安全与隐私。本服务并不打算吸引、也不主动以 13 周岁以下（美国《儿童在线隐私保护法》COPPA标准）或 16 周岁以下（欧盟成员国限制）的儿童为目标受众。",
        "我们不会在知情的前提下，诱导或收集此类年龄段未成年人的网络识别日志。如果您是父母或监护人，并且认为您的孩子在未经您许可的情况下与我们进行了电子邮件往来，请通过下方渠道联系我们，我们将在核实后立即安排删除相应的联络记录。"
      ],
      en: [
        "We are dedicated to safeguarding the safety and privacy of young learners. The Services are not targeted at, nor knowingly designed to attract, children under the age of 13 (per US Children's Online Privacy Protection Act, COPPA) or under 16 (per EEA standards).",
        "We do not knowingly prompt or store server data for minors in this cohort. If you are a parent or guardian and suspect your child has communicated with us via email without your oversight, please notify us immediately so we can expunge any records."
      ],
      fr: [
        "Nous tenons à protéger la vie privée des jeunes apprenants. La plateforme ne s'adresse pas aux enfants de moins de 13 ans (normes COPPA américaines) ou de moins de 16 ans (normes européennes).",
        "Nous ne sollicitons ni ne conservons sciemment de données les concernant. Si vous êtes parent ou tuteur et constatez que votre enfant a communiqué avec nous par e-mail, contactez-nous pour que nous effacions immédiatement ces correspondances."
      ],
      es: [
        "Nos dedicamos a salvaguardar la privacidad de los estudiantes más jóvenes. La plataforma no está dirigida a niños menores de 13 años (COPPA de EE. UU.) o menores de 16 años (normas europeas).",
        "No recopilamos datos sobre ellos. Si usted es padre o tutor y sospecha que su hijo se ha comunicado con nosotros por correo electrónico, comuníquese con nosotros para que eliminemos de inmediato esas correspondencias."
      ],
      de: [
        "Der Schutz von Kindern liegt uns besonders am Herzen. Unsere Dienste richten sich nicht an Kinder unter 13 Jahren (gemäß US-COPPA) oder unter 16 Jahren (gemäß europäischen Regelungen).",
        "Wir erheben wissentlich keine Serverdaten von Minderjährigen in dieser Altersklasse. Wenn Sie als Elternteil oder Vormund vermuten, dass Ihr Kind ohne Zustimmung per E-Mail Kontakt mit uns aufgenommen hat, informieren Sie uns bitte, damit wir die E-Mails umgehend löschen können."
      ]
    }
  },
  {
    id: "contact-history",
    icon: Mail,
    title: {
      zh: "第九章：合规联系方式与政策版本变更历史",
      en: "Chapter 9: Contact Details & Version History Log",
      fr: "Chapitre 9: Contact et historique des versions de la politique",
      es: "Capítulo 9: Contacto e historial de versiones",
      de: "Kapitel 9: Kontakt und Versionierungshistorie"
    },
    summary: {
      zh: "若有任何隐私合规问题或请求，请发送邮件至 privacy@learnfr.de。本隐私政策的每次迭代记录均在下方详细公示。",
      en: "For compliance requests, reach out via privacy@learnfr.de. Every update iteration is documented in the version log below.",
      fr: "Pour toute demande de conformité, contactez-nous via privacy@learnfr.de. Les révisions successives sont répertoriées ci-dessous.",
      es: "Para solicitudes de privacidad, contáctenos en privacy@learnfr.de. Cada revisión se detalla en el historial a continuación.",
      de: "Für Datenschutzanfragen erreichen Sie uns unter privacy@learnfr.de. Jede Aktualisierung ist im Versionsprotokoll unten aufgeführt."
    },
    paragraphs: {
      zh: [
        "我们设置了专门的数据合规答复团队。如果您在行使权利、解读条款、或清理数据时遇到任何困难，可以通过发送电子邮件与我们取得正式沟通：",
        "电子邮箱：privacy@learnfr.de • 我们保证在核实身份后的 15 个工作日内给您书面答复（在面临极为复杂的案件时，最长响应时间不超过 30 个工作日）。"
      ],
      en: [
        "We maintain a dedicated data protection team. If you encounter any technical difficulty in exporting, erasing, or clarifying details, feel free to establish formal communication with us:",
        "Contact Email: privacy@learnfr.de • We guarantee a response to verified requests within 15 business days (extendable up to 30 business days for exceptionally complex compliance tickets)."
      ],
      fr: [
        "Nous disposons d'une équipe dédiée à la protection des données. En cas de difficulté pour exporter, effacer ou comprendre vos données, vous pouvez nous écrire :",
        "E-mail de contact : privacy@learnfr.de • Nous nous engageons à répondre sous 15 jours ouvrés (jusqu'à 30 jours pour les demandes complexes nécessitant une analyse approfondie)."
      ],
      es: [
        "Contamos con un equipo de protección de datos. Si tiene dificultades para exportar, borrar o comprender sus datos, escríbanos:",
        "Correo electrónico de contacto: privacy@learnfr.de • Nos comprometemos a responder en un plazo de 15 días hábiles (hasta 30 días para consultas de cumplimiento complejas)."
      ],
      de: [
        "Wir haben ein engagiertes Datenschutz-Team eingerichtet. Wenn Sie Unterstützung beim Export, der Löschung oder dem Verständnis Ihrer Rechte benötigen, schreiben Sie uns:",
        "E-Mail: privacy@learnfr.de • Wir garantieren eine Antwort innerhalb von 15 Werktagen (in besonders komplexen Fällen verlängert auf maximal 30 Werktage)."
      ]
    }
  }
];

// -- 2. Cookie Inventory Dataset for Chapter 4 Table --
interface StorageInventoryItem {
  key: string;
  desc: Record<string, string>;
  type: Record<string, string>;
  duration: Record<string, string>;
}

const STORAGE_INVENTORY: StorageInventoryItem[] = [
  {
    key: "frlearning_lang",
    desc: {
      zh: "保存选定的多语言显示偏好，避免每次访问重新设置。",
      en: "Preserves user preferred language across route changes and reloads.",
      fr: "Enregistre la langue d'interface pour éviter la sélection répétitive.",
      es: "Guarda la preferencia de idioma de la interfaz del usuario.",
      de: "Speichert die Sprachwahl der Oberfläche für zukünftige Besuche."
    },
    type: {
      zh: "核心必要",
      en: "Strictly Necessary",
      fr: "Strictement Nécessaire",
      es: "Estrictamente Necesario",
      de: "Zwingend Erforderlich"
    },
    duration: {
      zh: "永久（直至手动清空）",
      en: "Persistent (until cleared)",
      fr: "Persistant (jusqu'au nettoyage)",
      es: "Persistente (hasta limpieza)",
      de: "Dauerhaft (bis zur Löschung)"
    }
  },
  {
    key: "frlearning_progress_*",
    desc: {
      zh: "保存各个专题模块（天气、数字、商店、文化）小测验的高分与已学标记。",
      en: "Stores high scores and completion status for weather, numbers, shop, and culture tasks.",
      fr: "Sauvegarde les scores élevés et l'état de complétion de chaque module.",
      es: "Guarda puntajes máximos y estado de lecciones completadas.",
      de: "Speichert Höchstpunktzahlen und Bearbeitungsstatus der Lektionen."
    },
    type: {
      zh: "核心必要",
      en: "Strictly Necessary",
      fr: "Strictement Nécessaire",
      es: "Estrictamente Necesario",
      de: "Zwingend Erforderlich"
    },
    duration: {
      zh: "永久（控制台可一键抹除）",
      en: "Persistent (wipeable in console)",
      fr: "Persistant (effaçable dans la console)",
      es: "Persistente (eliminable en consola)",
      de: "Dauerhaft (in Konsole löschbar)"
    }
  },
  {
    key: "frlearning_consent_analytics",
    desc: {
      zh: "保存用户对于参与匿名网站性能日志分析的授权许可选择（对/错）。",
      en: "Saves user choice (opt-in/opt-out) for anonymous site traffic analytics.",
      fr: "Enregistre le consentement de l'utilisateur à l'analyse de trafic anonyme.",
      es: "Registra el consentimiento del usuario para análisis de tráfico anónimo.",
      de: "Speichert Ihre Zustimmung oder Ablehnung zu anonymen Nutzungsanalysen."
    },
    type: {
      zh: "隐私首选项",
      en: "Privacy Settings",
      fr: "Choix de confidentialité",
      es: "Configuración de privacidad",
      de: "Einwilligungs-Status"
    },
    duration: {
      zh: "永久（可随时修改）",
      en: "Persistent (adjustable anytime)",
      fr: "Persistant (ajustable à tout moment)",
      es: "Persistente (ajustable en cualquier momento)",
      de: "Dauerhaft (jederzeit änderbar)"
    }
  },
  {
    key: "frlearning_consent_personalization",
    desc: {
      zh: "保存用户对错题记录与自适应题目推荐功能的授权许可状态。",
      en: "Saves consent for local adaptive quiz balancing based on mistake history.",
      fr: "Enregistre le choix d'activation des exercices et recommandations personnalisés.",
      es: "Guarda el consentimiento para cuestionarios adaptativos según fallos.",
      de: "Speichert die Erlaubnis zur adaptiven Quizanpassung anhand lokaler Fehler."
    },
    type: {
      zh: "功能首选项",
      en: "Feature Preference",
      fr: "Préférence fonctionnelle",
      es: "Preferencia funcional",
      de: "Funktionelle Einstellung"
    },
    duration: {
      zh: "永久（可随时修改）",
      en: "Persistent (adjustable anytime)",
      fr: "Persistant (ajustable à tout moment)",
      es: "Persistente (ajustable en cualquier momento)",
      de: "Dauerhaft (jederzeit änderbar)"
    }
  }
];

// -- 3. Version History Changelog Dataset for Chapter 9 Table --
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
      zh: "初始版本：确立基础的本地优先存储隐私框架，发布最初的安全标准声明。",
      en: "Initial draft: Established basic local-first architecture and baseline security terms.",
      fr: "Version initiale: Fondation du modèle local prioritaire et règles de base.",
      es: "Versión inicial: Establecimiento del modelo local primero y reglas de base.",
      de: "Erstfassung: Einführung des datenschutzfreundlichen Modells lokaler Speicherung."
    }
  },
  {
    version: "v2.0",
    date: "2026-06-03",
    changes: {
      zh: "合规重大升级：新增可携权与擦除权控制台、全文多语检索与高亮过滤、以及专属打印样式优化。",
      en: "Compliance Upgrade: Added data console (export/erase), multilingual search highlighters, and print optimizations.",
      fr: "Mise à niveau majeure: Console interactive, recherche multilingue et feuille d'impression dédiée.",
      es: "Actualización mayor: Consola interactiva, buscador destacado y optimización de hoja de impresión.",
      de: "Umfassendes Update: Einführung der Datenschutz-Konsole, Suchhervorhebung und Druckblatt-Optimierung."
    }
  }
];

// -- 4. Localized UI Text Translations --
const UI_TRANS: Record<string, Record<string, string>> = {
  zh: {
    title: "数据隐私与网络合规中心",
    subtitle: "我们致力于提供完全透明的数据处理方式。本页面为您提供有关我们在服务中如何收集、存储、以及保护您的个人信息的详尽法律说明。您可以直接在下方控制面板中行使您的数据法定权利。",
    lastUpdated: "最后更新时间：2026年6月3日 • 2.0 版本",
    statusBadgeGdpr: "GDPR 欧盟合规",
    statusBadgeCcpa: "CCPA 加州合规",
    statusBadgeLocal: "本地数据优先",
    
    searchPlaceholder: "输入关键字搜索条款（例如：LocalStorage, 擦除...）",
    noResults: "未找到匹配的隐私政策条款",
    
    toc: "法律条款目录",
    controlCenterTitle: "隐私与个人数据控制台",
    controlCenterSubtitle: "根据 GDPR 与 CCPA 规定，您可以直接在此处查询、导出或完全抹除由本应用在您浏览器中存储的所有数据。",
    
    tabMyData: "我的本地数据",
    tabExportErase: "数据可携与擦除",
    tabPreferences: "Cookie/存储首选项",
    
    dataKey: "键名",
    dataValue: "数值内容",
    dataSize: "大小",
    emptyStorage: "当前浏览器中暂无本应用的学习记录数据。一旦您在天气、数字、商店或文化板块完成任意测验，您的得分与进度将自动记录并在此显示。",
    
    exportTitle: "数据可携权 (Data Portability)",
    exportDesc: "您可以将您在本网站积累的所有学习记录、答题历史和系统配置一键打包为标准的 JSON 格式文件下载。您可以将其导入其他设备，或用于归档。",
    exportBtn: "打包并导出 JSON 备份",
    
    eraseTitle: "数据擦除权 / 被遗忘权 (Right to Erasure)",
    eraseDesc: "当您点击抹除后，本应用在您浏览器中保存的全部测验分数、探索历史、语言配置以及偏好设置都将被彻底删除且不可恢复。服务器日志等极其有限的系统运行信息将在合规期限（90天内）自动覆盖清空。",
    eraseBtn: "彻底抹除所有本地数据",
    
    confirmEraseTitle: "确认彻底抹除您的学习数据？",
    confirmEraseDesc: "此操作不可逆。您的测验记录、高分历史、主题配置以及已保存的进度将立即在本地浏览器中被永久抹去。",
    confirmBtn: "确认抹除",
    cancelBtn: "取消",
    
    prefTitle: "Cookie 与本地存储首选项管理",
    prefDesc: "我们不使用任何第三方广告追踪 Cookie。为了增强您的学习体验，我们在您本地设备保存必要的设置，并允许您自主决定是否开启其他非核心功能支持：",
    prefEssential: "必要系统配置（语言偏好、系统核心状态）",
    prefEssentialDesc: "此项属于核心功能所必需，无法关闭。其负责保留您的界面语言和会话一致性。",
    prefAnalytics: "匿名访问统计与网络性能分析",
    prefAnalyticsDesc: "开启后，我们会以匿名形式收集最基础的性能指标和访问页面日志，用于优化网站交互流畅度，绝不涉及任何个人身份识别信息。",
    prefPersonalization: "个性化学习提示与推荐引擎",
    prefPersonalizationDesc: "允许我们在您本地缓存中记录您的错题概率，以动态为您调整测验题目的难度分布，实现个性化自适应学习。",
    prefSaveBtn: "保存首选项设置",
    
    toastSaved: "首选项已成功更新并保存！",
    toastExported: "数据成功打包并导出！",
    toastErased: "所有本地学习数据已成功从浏览器中清除！",
    
    keySummary: "本章要点速览 (TL;DR)",
    downloadPdf: "打印 / 保存 PDF",
    backHome: "返回首页"
  },
  en: {
    title: "Privacy & Data Compliance Center",
    subtitle: "We are committed to absolute transparency. This page provides a comprehensive breakdown of how we collect, store, and protect your personal data in accordance with international standards. You can manage and exercise your legal data rights directly in the console below.",
    lastUpdated: "Last Updated: June 3, 2026 • Version 2.0",
    statusBadgeGdpr: "GDPR Compliant",
    statusBadgeCcpa: "CCPA Compliant",
    statusBadgeLocal: "Local-First Storage",
    
    searchPlaceholder: "Search privacy terms (e.g., LocalStorage, erasure, DPO...)",
    noResults: "No matching privacy policy terms found",
    
    toc: "Privacy Sections",
    controlCenterTitle: "Privacy & Personal Data Console",
    controlCenterSubtitle: "In compliance with GDPR and CCPA, you can directly query, export, or completely delete all data stored by this application in your browser.",
    
    tabMyData: "My Local Data",
    tabExportErase: "Data Portability & Erasure",
    tabPreferences: "Cookie/Storage Preferences",
    
    dataKey: "Key",
    dataValue: "Value",
    dataSize: "Size",
    emptyStorage: "No learning progress data found in your browser. Click the button below to generate mock data to preview these tools.",
    generateMockBtn: "Generate Mock Learning Progress",
    
    exportTitle: "Right to Data Portability",
    exportDesc: "You can download all your accumulated learning logs, quiz scores, and settings packaged into a single JSON file. You may back this up or use it to restore your progress on another browser.",
    exportBtn: "Package & Export JSON Backup",
    
    eraseTitle: "Right to Erasure (Right to be Forgotten)",
    eraseDesc: "Clicking delete will permanently and irrecoverably erase all stored quiz scores, exploration records, and settings from this browser. Minimal technical logs on our hosting servers will naturally expire and overwrite within 90 days.",
    eraseBtn: "Erase All Local Data permanently",
    
    confirmEraseTitle: "Are you absolutely sure?",
    confirmEraseDesc: "This action cannot be undone. All your quiz scores, high records, and personalized configurations will be immediately deleted from your browser storage.",
    confirmBtn: "Yes, Erase My Data",
    cancelBtn: "Cancel",
    
    prefTitle: "Manage Cookie & Local Storage Settings",
    prefDesc: "We do not use any third-party ad tracking cookies. To enhance your learning experience, we save essential configurations locally and let you decide which auxiliary features you want to enable:",
    prefEssential: "Strictly Necessary Configuration (Language & Core UI)",
    prefEssentialDesc: "Necessary for the core website functionality. Keeps your language setting and session consistent. Cannot be disabled.",
    prefAnalytics: "Anonymous Usage Statistics & Diagnostics",
    prefAnalyticsDesc: "Helps us log basic page load times and errors anonymously to maintain service reliability. Never linked to your identity.",
    prefPersonalization: "Personalized Study Reminders & Adaptive Quizzes",
    prefPersonalizationDesc: "Allows us to track mistake frequencies locally to dynamically balance quiz difficulty and provide customized tips.",
    prefSaveBtn: "Save Preferences",
    
    toastSaved: "Preferences updated and saved successfully!",
    toastExported: "Data packed and exported successfully!",
    toastErased: "All local learning progress erased from browser storage!",
    toastSeeded: "Mock learning records generated successfully!",
    
    keySummary: "Summary at a Glance (TL;DR)",
    downloadPdf: "Print / Save PDF",
    backHome: "Back to Home"
  },
  fr: {
    title: "Centre de Confidentialité et de Conformité",
    subtitle: "Nous nous engageons à une transparence totale. Cette page fournit une explication complète de la manière dont nous collectons, stockons et protégeons vos données. Vous pouvez exercer vos droits légaux directement via la console ci-dessous.",
    lastUpdated: "Dernière mise à jour : 3 juin 2026 • Version 2.0",
    statusBadgeGdpr: "Conforme RGPD",
    statusBadgeCcpa: "Conforme CCPA",
    statusBadgeLocal: "Stockage local prioritaire",
    
    searchPlaceholder: "Rechercher dans la politique (ex: LocalStorage, effacement...)",
    noResults: "Aucun paragraphe ne correspond à votre recherche",
    
    toc: "Table des matières",
    controlCenterTitle: "Console de données personnelles",
    controlCenterSubtitle: "Conformément au RGPD et au CCPA, vous pouvez directement consulter, exporter ou supprimer l'intégralité des données stockées dans votre navigateur.",
    
    tabMyData: "Mes données locales",
    tabExportErase: "Portabilité & Effacement",
    tabPreferences: "Préférences Cookie/Stockage",
    
    dataKey: "Clé",
    dataValue: "Valeur",
    dataSize: "Taille",
    emptyStorage: "Aucune donnée de progression trouvée dans votre navigateur. Une fois que vous aurez répondu aux quiz (météo, nombres, magasin, culture), vos résultats s'afficheront ici automatiquement.",
    
    exportTitle: "Droit à la portabilité des données",
    exportDesc: "Téléchargez l'intégralité de vos scores, historiques de quiz et configurations sous forme de fichier JSON standard. Utile pour archiver ou migrer vos progrès.",
    exportBtn: "Exporter la sauvegarde JSON",
    
    eraseTitle: "Droit à l'effacement (Droit à l'oubli)",
    eraseDesc: "Cette action effacera définitivement tous vos scores et réglages de ce navigateur. Les journaux techniques de serveur expireront automatiquement sous 90 jours.",
    eraseBtn: "Supprimer définitivement mes données",
    
    confirmEraseTitle: "Confirmer la suppression ?",
    confirmEraseDesc: "Cette action est irréversible. Toutes vos progressions et scores élevés seront effacés de votre appareil.",
    confirmBtn: "Oui, supprimer",
    cancelBtn: "Annuler",
    
    prefTitle: "Gérer vos préférences de cookies et stockage",
    prefDesc: "Nous n'utilisons aucun cookie publicitaire tiers. Nous enregistrons uniquement vos paramètres indispensables en local et vous laissons le choix pour le reste :",
    prefEssential: "Paramètres strictement nécessaires (Langue & UI)",
    prefEssentialDesc: "Requis pour le bon fonctionnement de la plateforme. Ne peut pas être désactivé.",
    prefAnalytics: "Statistiques et diagnostics de performance anonymes",
    prefAnalyticsDesc: "Nous permet de mesurer les temps de chargement et erreurs de manière anonyme pour optimiser la plateforme.",
    prefPersonalization: "Recommandations d'études et quiz adaptatifs",
    prefPersonalizationDesc: "Permet de mémoriser les types d'erreurs en local afin de proposer des exercices de niveau adapté.",
    prefSaveBtn: "Enregistrer mes choix",
    
    toastSaved: "Vos préférences ont été mises à jour !",
    toastExported: "Données empaquetées et exportées avec succès !",
    toastErased: "Données de progression locales supprimées avec succès !",
    
    keySummary: "Synthèse en un coup d'œil (TL;DR)",
    downloadPdf: "Imprimer / PDF",
    backHome: "Retour"
  },
  es: {
    title: "Centro de Privacidad y Cumplimiento de Datos",
    subtitle: "Nos comprometemos con la transparencia total. Esta página detalla cómo recopilamos, almacenamos y protegemos sus datos. Puede gestionar y ejercer sus derechos legales directamente a través de la siguiente consola.",
    lastUpdated: "Última actualización: 3 de junio de 2026 • Versión 2.0",
    statusBadgeGdpr: "Conforme a RGPD",
    statusBadgeCcpa: "Conforme a CCPA",
    statusBadgeLocal: "Almacenamiento Local Primero",
    
    searchPlaceholder: "Buscar en la política de privacidad (ej: LocalStorage, eliminar...)",
    noResults: "No se encontraron términos que coincidan con la búsqueda",
    
    toc: "Secciones de Privacidad",
    controlCenterTitle: "Consola de Datos Personales",
    controlCenterSubtitle: "De acuerdo con el RGPD y la CCPA, puede consultar, exportar o eliminar de forma permanente todos los datos guardados en este navegador.",
    
    tabMyData: "Mis Datos Locales",
    tabExportErase: "Portabilidad y Eliminación",
    tabPreferences: "Preferencias de Cookies/Almacenamiento",
    
    dataKey: "Clve",
    dataValue: "Valor",
    dataSize: "Tamaño",
    emptyStorage: "No se encontraron datos de progreso en su navegador. Una vez que complete los cuestionarios (clima, números, tienda, cultura), sus resultados aparecerán aquí automáticamente.",
    
    exportTitle: "Derecho a la Portabilidad de Datos",
    exportDesc: "Descargue todos sus puntajes, configuraciones y registros de aprendizaje en un solo archivo JSON para guardarlo o transferirlo a otro dispositivo.",
    exportBtn: "Exportar copia de seguridad en JSON",
    
    eraseTitle: "Derecho de Supresión (Derecho al Olvido)",
    eraseDesc: "Al hacer clic en eliminar, se borrarán permanentemente sus configuraciones y puntajes de este navegador. Los registros de red del servidor se sobrescribirán en 90 días.",
    eraseBtn: "Eliminar todos los datos locales",
    
    confirmEraseTitle: "¿Está completamente seguro?",
    confirmEraseDesc: "Esta acción no se puede deshacer. Se borrarán permanentemente todas sus configuraciones y progresos guardados en este navegador.",
    confirmBtn: "Sí, eliminar mis datos",
    cancelBtn: "Cancelar",
    
    prefTitle: "Gestionar Preferencias de Cookies y Almacenamiento",
    prefDesc: "No utilizamos cookies publicitarias de terceros. Solo almacenamos configuraciones esenciales y le permitimos decidir sobre las siguientes funciones opcionales:",
    prefEssential: "Configuraciones estrictamente necesarias (Idioma y UI)",
    prefEssentialDesc: "Requerido para el funcionamiento principal. Mantiene su idioma preferido. No se puede desactivar.",
    prefAnalytics: "Estadísticas de uso y rendimiento anónimas",
    prefAnalyticsDesc: "Nos ayuda a rastrear tiempos de carga y errores del servidor para optimizar el servicio. Nunca revela su identidad.",
    prefPersonalization: "Recomendaciones de estudio y cuestionarios adaptativos",
    prefPersonalizationDesc: "Permite registrar la tasa de fallos de preguntas localmente para ajustar el nivel de dificultad automáticamente.",
    prefSaveBtn: "Guardar preferencias",
    
    toastSaved: "¡Preferencias actualizadas y guardadas con éxito!",
    toastExported: "¡Datos empaquetados y exportados correctamente!",
    toastErased: "¡Datos de progreso local eliminados del navegador!",
    
    keySummary: "Resumen en un vistazo (TL;DR)",
    downloadPdf: "Imprimir / PDF",
    backHome: "Volver"
  },
  de: {
    title: "Datenschutz- und Compliance-Center",
    subtitle: "Wir stehen für absolute Transparenz. Diese Seite erläutert ausführlich, wie wir Daten erheben, speichern und schützen. In der untenstehenden Konsole können Sie Ihre gesetzlichen Rechte direkt einsehen und ausüben.",
    lastUpdated: "Letzte Aktualisierung: 3. Juni 2026 • Version 2.0",
    statusBadgeGdpr: "DSGVO-konform",
    statusBadgeCcpa: "CCPA-konform",
    statusBadgeLocal: "Lokale Speicherung bevorzugt",
    
    searchPlaceholder: "Datenschutzerklärung durchsuchen (z.B. LocalStorage, Löschung...)",
    noResults: "Keine übereinstimmenden Bestimmungen gefunden",
    
    toc: "Inhaltsverzeichnis",
    controlCenterTitle: "Datenschutz- & Speicher-Konsole",
    controlCenterSubtitle: "In Übereinstimmung mit der DSGVO und dem CCPA können Sie die in Ihrem Browser gespeicherten Daten direkt abfragen, exportieren oder löschen.",
    
    tabMyData: "Meine lokalen Daten",
    tabExportErase: "Datenübertragbarkeit & Löschung",
    tabPreferences: "Cookie-/Speichereinstellungen",
    
    dataKey: "Schlüssel",
    dataValue: "Wert",
    dataSize: "Größe",
    emptyStorage: "Es wurden keine lokalen Lernfortschrittsdaten in Ihrem Browser gefunden. Sobald Sie Quizze (Wetter, Zahlen, Geschäft, Kultur) ausfüllen, werden Ihre Ergebnisse hier automatisch angezeigt.",
    
    exportTitle: "Recht auf Datenübertragbarkeit",
    exportDesc: "Laden Sie Ihre Testergebnisse und Einstellungen als wahrscheinlich verschlüsselte JSON-Datei herunter. Nützlich für Backups oder zur Mitnahme auf andere Geräte.",
    exportBtn: "JSON-Backup exportieren",
    
    eraseTitle: "Recht auf Löschung (Recht auf Vergessenwerden)",
    eraseDesc: "Mit dem Klick werden alle Testergebnisse und Einstellungen aus diesem Browser unwiderruflich gelöscht. Server-Protokolle werden nach 90 Tagen automatisch überschrieben.",
    eraseBtn: "Alle lokalen Daten dauerhaft löschen",
    
    confirmEraseTitle: "Sind Sie absolut sicher?",
    confirmEraseDesc: "Dieser Vorgang kann nicht rückgängig gemacht werden. Alle Testergebnisse und Einstellungen in Ihrem Browser werden dauerhaft gelöscht.",
    confirmBtn: "Ja, Daten löschen",
    cancelBtn: "Abbrechen",
    
    prefTitle: "Cookie- und Speichereinstellungen verwalten",
    prefDesc: "Wir verwenden keine Werbe-Cookies von Drittanbietern. Wir speichern nur notwendige Einstellungen lokal und lassen Sie über folgende optionale Funktionen entscheiden:",
    prefEssential: "Zwingend erforderliche Einstellungen (Sprache & Core-UI)",
    prefEssentialDesc: "Erforderlich für den grundlegenden Betrieb der Website. Speichert Ihre Spracheinstellung. Kann nicht deaktiviert werden.",
    prefAnalytics: "Anonyme Nutzungsstatistiken und Performance-Analysen",
    prefAnalyticsDesc: "Ermöglicht uns die Messung von Ladezeiten und Systemfehlern zur Optimierung der Plattform. Keine Verknüpfung mit Ihrer Identität.",
    prefPersonalization: "Individuelle Lernhilfen und adaptiver Schwierigkeitsgrad",
    prefPersonalizationDesc: "Ermöglicht die Speicherung von Fehlerhäufigkeiten vor Ort, um die Schwierigkeit der Tests dynamisch anzupassen.",
    prefSaveBtn: "Einstellungen speichern",
    
    toastSaved: "Einstellungen erfolgreich aktualisiert und gespeichert!",
    toastExported: "Daten erfolgreich gepackt und exportiert!",
    toastErased: "Lokale Fortschrittsdaten erfolgreich aus dem Browser gelöscht!",
    
    keySummary: "Zusammenfassung auf einen Blick (TL;DR)",
    downloadPdf: "Drucken / PDF",
    backHome: "Zurück"
  }
};

export default function PrivacyClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = UI_TRANS[lang] || UI_TRANS.en;

  // -- States --
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState<"myData" | "exportErase" | "preferences">("myData");
  const [localStorageData, setLocalStorageData] = useState<Record<string, string>>({});
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [showEraseModal, setShowEraseModal] = useState(false);

  // Preference switches
  const [consentAnalytics, setConsentAnalytics] = useState(true);
  const [consentPersonalization, setConsentPersonalization] = useState(false);

  // Calculate size in bytes
  const getByteSize = (str: string) => {
    return new Blob([str]).size;
  };

  // Toast trigger helper
  const triggerToast = (msgKey: string) => {
    setActiveToast(msgKey);
    setTimeout(() => {
      setActiveToast(null);
    }, 3000);
  };

  // Load localStorage data keys belonging to frlearning
  const loadLocalStorageData = () => {
    if (typeof window !== "undefined") {
      const data: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("frlearning_")) {
          data[key] = localStorage.getItem(key) || "";
        }
      }
      setLocalStorageData(data);

      // Synch checkboxes with storage values if present
      const ana = localStorage.getItem("frlearning_consent_analytics");
      setConsentAnalytics(ana === null ? true : ana === "true");

      const pers = localStorage.getItem("frlearning_consent_personalization");
      setConsentPersonalization(pers === "true");
    }
  };

  // Initialize client state
  useEffect(() => {
    setIsClient(true);
    loadLocalStorageData();
  }, []);

  // Monitor scrolling to highlight correct sidebar link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const section of PRIVACY_SECTIONS) {
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

  // -- Interactive Actions --

  // GDPR Data Export (Portability)
  const handleExportData = () => {
    try {
      const exportString = JSON.stringify(localStorageData, null, 2);
      const blob = new Blob([exportString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `frlearning_privacy_export_${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      triggerToast("toastExported");
    } catch (e) {
      console.error(e);
    }
  };

  // GDPR Data Erasure (Right to be Forgotten)
  const handleEraseData = () => {
    if (typeof window !== "undefined") {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("frlearning_")) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      setLocalStorageData({});
      setShowEraseModal(false);
      triggerToast("toastErased");
    }
  };

  // Save Toggled Preferences
  const handleSavePreferences = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("frlearning_consent_analytics", consentAnalytics.toString());
      localStorage.setItem("frlearning_consent_personalization", consentPersonalization.toString());
      loadLocalStorageData();
      triggerToast("toastSaved");
    }
  };

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
    if (!searchQuery.trim()) return PRIVACY_SECTIONS;
    const q = searchQuery.toLowerCase();
    return PRIVACY_SECTIONS.filter(sec => {
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

  // Calculate total size of local data
  const totalLocalSize = useMemo(() => {
    let size = 0;
    Object.entries(localStorageData).forEach(([k, v]) => {
      size += getByteSize(k) + getByteSize(v);
    });
    return size;
  }, [localStorageData]);

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
              {t.statusBadgeGdpr}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
              <Check className="h-3 w-3" />
              {t.statusBadgeCcpa}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold text-stone-700">
              <Database className="h-3 w-3" />
              {t.statusBadgeLocal}
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
            <Shield className="h-8 w-8 text-emerald-600 animate-pulse" strokeWidth={1.5} />
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

        {/* INTERACTIVE PRIVACY CONTROL CENTER - hidden during printing */}
        {isClient && !searchQuery && (
          <section className="mb-16 bg-white border border-stone-200 shadow-sm rounded-[2rem] p-6 md:p-8 print:hidden">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                <Sliders className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900">{t.controlCenterTitle}</h2>
                <p className="text-xs text-stone-500">{t.controlCenterSubtitle}</p>
              </div>
            </div>

            {/* Tab Selectors */}
            <div className="flex border-b border-stone-200 mt-6 overflow-x-auto whitespace-nowrap">
              <button
                onClick={() => setActiveTab("myData")}
                className={`py-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === "myData" 
                    ? "border-emerald-600 text-emerald-700" 
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                {t.tabMyData} ({Object.keys(localStorageData).length})
              </button>
              <button
                onClick={() => setActiveTab("exportErase")}
                className={`py-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === "exportErase" 
                    ? "border-emerald-600 text-emerald-700" 
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                {t.tabExportErase}
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`py-3 px-4 font-bold text-sm border-b-2 transition-all cursor-pointer ${
                  activeTab === "preferences" 
                    ? "border-emerald-600 text-emerald-700" 
                    : "border-transparent text-stone-500 hover:text-stone-800"
                }`}
              >
                {t.tabPreferences}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="py-6">
              
              {/* Tab 1: My Local Storage Viewer */}
              {activeTab === "myData" && (
                <div>
                  {Object.keys(localStorageData).length === 0 ? (
                    <div className="text-center py-10">
                      <EyeOff className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                      <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                        {t.emptyStorage}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-stone-50 border border-stone-200/60 p-3.5 rounded-xl text-xs font-mono">
                        <span className="text-stone-500">Total Keys: <strong className="text-stone-900">{Object.keys(localStorageData).length}</strong></span>
                        <span className="text-stone-500">Cumulative Payload Size: <strong className="text-stone-900">{totalLocalSize} Bytes</strong></span>
                      </div>

                      <div className="overflow-x-auto border border-stone-200 rounded-2xl max-h-72 overflow-y-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200 text-stone-500 sticky top-0">
                              <th className="p-3 font-bold">{t.dataKey}</th>
                              <th className="p-3 font-bold">{t.dataValue}</th>
                              <th className="p-3 font-bold text-right">{t.dataSize}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100 font-mono">
                            {Object.entries(localStorageData).map(([key, val]) => (
                              <tr key={key} className="hover:bg-stone-50/50">
                                <td className="p-3 text-stone-900 font-semibold">{key}</td>
                                <td className="p-3 text-stone-500 max-w-xs truncate" title={val}>{val}</td>
                                <td className="p-3 text-right text-stone-400">{getByteSize(key) + getByteSize(val)} B</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Export and Deletion */}
              {activeTab === "exportErase" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Export Box */}
                  <div className="border border-stone-200 rounded-2xl p-5 bg-stone-50/40">
                    <div className="flex items-center gap-2.5 mb-3 text-stone-800">
                      <Download className="h-5 w-5 text-emerald-600" />
                      <h3 className="font-bold text-sm">{t.exportTitle}</h3>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed mb-6">
                      {t.exportDesc}
                    </p>
                    <button
                      onClick={handleExportData}
                      disabled={Object.keys(localStorageData).length === 0}
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-white border border-stone-200 hover:border-stone-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 px-4 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <Download className="h-4 w-4 text-stone-500" />
                      {t.exportBtn}
                    </button>
                  </div>

                  {/* Erasure Box */}
                  <div className="border border-stone-200 rounded-2xl p-5 bg-stone-50/40">
                    <div className="flex items-center gap-2.5 mb-3 text-stone-800">
                      <Trash2 className="h-5 w-5 text-rose-600" />
                      <h3 className="font-bold text-sm">{t.eraseTitle}</h3>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed mb-6">
                      {t.eraseDesc}
                    </p>
                    <button
                      onClick={() => setShowEraseModal(true)}
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-rose-50 border border-rose-100 hover:bg-rose-100/70 text-rose-700 px-4 py-3 rounded-xl transition-all cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                      {t.eraseBtn}
                    </button>
                  </div>

                </div>
              )}

              {/* Tab 3: Preference Swapper */}
              {activeTab === "preferences" && (
                <div className="space-y-6 max-w-3xl">
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {t.prefDesc}
                  </p>

                  <div className="space-y-4">
                    
                    {/* Key 1: Essential */}
                    <div className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-50/30 rounded-xl">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          disabled
                          checked
                          className="h-4 w-4 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500 opacity-60"
                        />
                      </div>
                      <div className="text-xs">
                        <label className="font-bold text-stone-800">{t.prefEssential}</label>
                        <p className="text-stone-500 mt-1">{t.prefEssentialDesc}</p>
                      </div>
                    </div>

                    {/* Key 2: Analytics */}
                    <div className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-50/30 rounded-xl">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          checked={consentAnalytics}
                          onChange={(e) => setConsentAnalytics(e.target.checked)}
                          className="h-4 w-4 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                      <div className="text-xs">
                        <label className="font-bold text-stone-850 cursor-pointer" onClick={() => setConsentAnalytics(!consentAnalytics)}>
                          {t.prefAnalytics}
                        </label>
                        <p className="text-stone-500 mt-1">{t.prefAnalyticsDesc}</p>
                      </div>
                    </div>

                    {/* Key 3: Adaptive features */}
                    <div className="flex items-start gap-4 p-4 border border-stone-200 bg-stone-50/30 rounded-xl">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          checked={consentPersonalization}
                          onChange={(e) => setConsentPersonalization(e.target.checked)}
                          className="h-4 w-4 text-emerald-600 border-stone-300 rounded focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>
                      <div className="text-xs">
                        <label className="font-bold text-stone-850 cursor-pointer" onClick={() => setConsentPersonalization(!consentPersonalization)}>
                          {t.prefPersonalization}
                        </label>
                        <p className="text-stone-500 mt-1">{t.prefPersonalizationDesc}</p>
                      </div>
                    </div>

                  </div>

                  <button
                    onClick={handleSavePreferences}
                    className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <Settings className="h-4 w-4 text-stone-300" />
                    {t.prefSaveBtn}
                  </button>
                </div>
              )}

            </div>
          </section>
        )}

        {/* LAYOUT: SIDEBAR + LEGAL TEXT */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* STICKY SIDEBAR NAVIGATION - hidden during printing and search filtering */}
          <aside className="w-full md:w-64 sticky md:top-24 bg-white border border-stone-200 p-5 rounded-3xl shadow-sm md:max-h-[75vh] overflow-y-auto hidden md:block print:hidden flex-shrink-0">
            <h3 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-4 px-2">
              {t.toc}
            </h3>
            <nav className="space-y-1">
              {PRIVACY_SECTIONS.map((section) => {
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

                    {/* Chapter Special Custom Renderers */}

                    {/* Section 4: Storage Keys Table */}
                    {section.id === "storage" && (
                      <div className="mt-8 overflow-x-auto border border-stone-200 rounded-2xl print:border-stone-300">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-200 text-stone-600">
                              <th className="p-3 font-bold">{t.dataKey}</th>
                              <th className="p-3 font-bold">{lang === "zh" ? "对应用途" : lang === "fr" ? "Description" : lang === "de" ? "Zweck" : "Description"}</th>
                              <th className="p-3 font-bold">{lang === "zh" ? "存储类型" : "Type"}</th>
                              <th className="p-3 font-bold">{lang === "zh" ? "有效期" : "Retention"}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100 font-sans">
                            {STORAGE_INVENTORY.map((item) => (
                              <tr key={item.key} className="hover:bg-stone-50/30">
                                <td className="p-3 text-stone-900 font-mono font-bold">{item.key}</td>
                                <td className="p-3 text-stone-500 leading-normal max-w-xs">{item.desc[lang] || item.desc.en}</td>
                                <td className="p-3 text-stone-600"><span className="inline-block bg-stone-100 rounded px-2 py-0.5 font-semibold text-[10px]">{item.type[lang] || item.type.en}</span></td>
                                <td className="p-3 text-stone-400">{item.duration[lang] || item.duration.en}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

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

      {/* FLOAT FLOATING SUCCESS/WARNING TOASTS */}
      <AnimatePresence>
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-stone-800"
          >
            <Check className="h-5 w-5 text-emerald-450 flex-shrink-0" />
            <span className="text-sm font-semibold">{t[activeToast]}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONFIRM ERASURE OVERLAY MODAL */}
      <AnimatePresence>
        {showEraseModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-stone-200 rounded-[2rem] max-w-md w-full p-6 shadow-2xl"
            >
              <div className="flex items-center gap-3 text-rose-600 mb-4">
                <AlertTriangle className="h-7 w-7 flex-shrink-0 animate-bounce" />
                <h3 className="text-lg font-extrabold">{t.confirmEraseTitle}</h3>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed mb-6">
                {t.confirmEraseDesc}
              </p>
              <div className="flex justify-end gap-3 font-semibold text-xs">
                <button
                  onClick={() => setShowEraseModal(false)}
                  className="px-4 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-600 transition-all cursor-pointer"
                >
                  {t.cancelBtn}
                </button>
                <button
                  onClick={handleEraseData}
                  className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white transition-all cursor-pointer font-bold"
                >
                  {t.confirmBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
