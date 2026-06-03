"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Store, 
  ShoppingBag, 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Volume2,
  Croissant, 
  Cake, 
  Beef, 
  Fish, 
  Apple, 
  Sparkles, 
  Shirt, 
  Footprints, 
  Gem, 
  RotateCcw, 
  Pill, 
  Heart, 
  Scissors, 
  Flame, 
  BookOpen, 
  Flower2, 
  Mail,
  User,
  Users,
  PlayCircle,
  HelpCircle,
  AlertCircle,
  Info,
  ShoppingCart,
  FileText,
  Tag,
  Coins,
  CreditCard,
  Banknote,
  Calculator,
  ArrowRight
} from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { playTTS } from "@/lib/tts";

// -- Expanded Shops Dataset with Preposition and Sentences --
const SHOPS_DATA = [
  {
    cat: "food_drink",
    items: [
      { id: "boulangerie", fr: "La Boulangerie", prep: "à la boulangerie", sentence: "On y achète du pain, des baguettes et des croissants.", icon: Croissant, color: "text-amber-600", bg: "bg-amber-50" },
      { id: "patisserie", fr: "La Pâtisserie", prep: "à la pâtisserie", sentence: "On y achète des gâteaux, des tartes et des macarons.", icon: Cake, color: "text-rose-500", bg: "bg-rose-50" },
      { id: "boucherie", fr: "La Boucherie", prep: "à la boucherie", sentence: "On y achète de la viande, du poulet et du bœuf.", icon: Beef, color: "text-red-500", bg: "bg-red-50" },
      { id: "charcuterie", fr: "La Charcuterie", prep: "à la charcuterie", sentence: "On y achète du saucisson, du jambon et des pâtés.", icon: Beef, color: "text-orange-650", bg: "bg-orange-50" },
      { id: "poissonnerie", fr: "La Poissonnerie", prep: "à la poissonnerie", sentence: "On y achète du poisson, des crevettes et des fruits de mer.", icon: Fish, color: "text-sky-500", bg: "bg-sky-50" },
      { id: "fromagerie", fr: "La Fromagerie", prep: "à la fromagerie", sentence: "On y achète toutes sortes de fromages français.", icon: Store, color: "text-yellow-600", bg: "bg-yellow-50" },
      { id: "epicerie", fr: "L'Épicerie", prep: "à l'épicerie", sentence: "On y achète du lait, du riz, des fruits et des légumes.", icon: Apple, color: "text-emerald-500", bg: "bg-emerald-50" },
      { id: "marche", fr: "Le Marché", prep: "au marché", sentence: "On y trouve des produits frais et locaux en plein air.", icon: Store, color: "text-orange-500", bg: "bg-orange-50" },
      { id: "supermarche", fr: "Le Supermarché", prep: "au supermarché", sentence: "On y fait de grandes courses avec un chariot.", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-50" },
    ]
  },
  {
    cat: "fashion_style",
    items: [
      { id: "vetements", fr: "Le Magasin de vêtements", prep: "au magasin de vêtements", sentence: "On y achète des vestes, des jupes et des pantalons.", icon: Shirt, color: "text-indigo-500", bg: "bg-indigo-50" },
      { id: "boutique", fr: "La Boutique", prep: "à la boutique", sentence: "Une petite boutique de créateurs ou de luxe.", icon: Sparkles, color: "text-pink-500", bg: "bg-pink-50" },
      { id: "chaussures", fr: "Le Magasin de chaussures", prep: "au magasin de chaussures", sentence: "On y achète des baskets, des bottes et des talons.", icon: Footprints, color: "text-zinc-650", bg: "bg-zinc-100" },
      { id: "bijouterie", fr: "La Bijouterie", prep: "à la bijouterie", sentence: "On y achète des bagues, des colliers et des montres.", icon: Gem, color: "text-yellow-650", bg: "bg-yellow-50" },
      { id: "friperie", fr: "La Friperie", prep: "à la friperie", sentence: "On y achète des vêtements d'occasion et vintage.", icon: RotateCcw, color: "text-teal-600", bg: "bg-teal-50" },
      { id: "centre_commercial", fr: "Le Centre commercial", prep: "au centre commercial", sentence: "Un grand bâtiment regroupant de nombreux magasins.", icon: Store, color: "text-purple-500", bg: "bg-purple-50" },
    ]
  },
  {
    cat: "health_beauty",
    items: [
      { id: "pharmacie", fr: "La Pharmacie", prep: "à la pharmacie", sentence: "On y achète des médicaments et des pansements.", icon: Pill, color: "text-green-600", bg: "bg-green-50" },
      { id: "parapharmacie", fr: "La Parapharmacie", prep: "à la parapharmacie", sentence: "On y achète des produits de beauté et de soins sans ordonnance.", icon: Heart, color: "text-rose-450", bg: "bg-rose-50" },
      { id: "salon_coiffure", fr: "Le Salon de coiffure", prep: "au salon de coiffure / chez le coiffeur", sentence: "On y va pour se faire couper ou coiffer les cheveux.", icon: Scissors, color: "text-slate-650", bg: "bg-slate-50" },
    ]
  },
  {
    cat: "services_specialty",
    items: [
      { id: "tabac", fr: "Le Bureau de tabac", prep: "au bureau de tabac / au tabac", sentence: "On y achète des timbres fiscaux, des journaux ou des tickets.", icon: Flame, color: "text-red-650", bg: "bg-red-50" },
      { id: "librairie", fr: "La Librairie", prep: "à la librairie", sentence: "On y achète des livres, des romans et des dictionnaires.", icon: BookOpen, color: "text-cyan-600", bg: "bg-cyan-50" },
      { id: "fleuriste", fr: "Le Fleuriste", prep: "chez le fleuriste", sentence: "On y achète des bouquets de fleurs et des plantes vertes.", icon: Flower2, color: "text-purple-650", bg: "bg-purple-50" },
      { id: "poste", fr: "La Poste", prep: "à la poste", sentence: "On y envoie des lettres, des colis et achète des timbres.", icon: Mail, color: "text-amber-500", bg: "bg-amber-50" },
    ]
  }
];

// -- Nouns & Tools Dataset --
const TOOLS_DATA = [
  { id: "chariot", fr: "Le chariot / Le caddie", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-50" },
  { id: "panier", fr: "Le panier", icon: ShoppingBag, color: "text-amber-500", bg: "bg-amber-50" },
  { id: "caisse", fr: "La caisse", icon: Calculator, color: "text-slate-600", bg: "bg-slate-50" },
  { id: "ticket", fr: "Le ticket de caisse / Le reçu", icon: FileText, color: "text-zinc-500", bg: "bg-zinc-50" },
  { id: "prix", fr: "Le prix", icon: Tag, color: "text-teal-650", bg: "bg-teal-50" },
  { id: "taille", fr: "La taille / La pointure", icon: Scissors, color: "text-indigo-500", bg: "bg-indigo-50" },
  { id: "monnaie", fr: "La monnaie / Les espèces", icon: Coins, color: "text-yellow-600", bg: "bg-yellow-50" },
];

// -- Verbs Dataset --
const VERBS_DATA = [
  { id: "acheter", fr: "Acheter", note_zh: "购买", note_en: "To buy" },
  { id: "vendre", fr: "Vendre", note_zh: "出售", note_en: "To sell" },
  { id: "payer", fr: "Payer", note_zh: "付款", note_en: "To pay" },
  { id: "chercher", fr: "Chercher", note_zh: "寻找", note_en: "To look for" },
  { id: "essayer", fr: "Essayer", note_zh: "试穿 / 试用", note_en: "To try on / try out" },
  { id: "couter", fr: "Coûter", note_zh: "价值 / 花费", note_en: "To cost" },
  { id: "courses", fr: "Faire les courses", note_zh: "购买食品与日用品", note_en: "To buy groceries/food" },
  { id: "shopping", fr: "Faire du shopping", note_zh: "逛街购物 (衣服、包包等娱乐购物)", note_en: "To go shopping for leisure" },
  { id: "leche_vitrines", fr: "Faire du lèche-vitrines", note_zh: "橱窗购物 (只看不买，字面意为“舔窗”)", note_en: "To window shop (literally: 'to lick windows')" }
];

// -- Payments Dataset --
const PAYMENTS_DATA = [
  { id: "especes", fr: "payer en espèces / en liquide", zh: "用现金支付", en: "pay in cash", icon: Banknote, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "carte", fr: "payer par carte bancaire", zh: "用银行卡支付", en: "pay by card", icon: CreditCard, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "sans_contact", fr: "payer sans contact", zh: "使用免接触闪付", en: "contactless payment", icon: Sparkles, color: "text-teal-500", bg: "bg-teal-50" }
];

// -- Dialogues Dataset --
const DIALOGUES_DATA = [
  {
    sceneId: "boulangerie",
    title_zh: "在面包店 À la boulangerie",
    title_en: "At the Bakery",
    lines: [
      { role: "commercant", fr: "Bonjour, Monsieur. Vous désirez ?", zh: "你好，先生。你想要点什么？", en: "Hello, sir. What would you like?" },
      { role: "client", fr: "Bonjour. Je voudrais une baguette tradition et deux croissants, s'il vous plaît.", zh: "你好。我想要一根传统法棍和两个牛角面包，谢谢。", en: "Hello. I would like a traditional baguette and two croissants, please." },
      { role: "commercant", fr: "Oui, voilà. Et avec ceci ?", zh: "好的，给您。还要别的吗？", en: "Yes, here they are. Anything else with this?" },
      { role: "client", fr: "Ce sera tout, merci. Ça fait combien ?", zh: "就这些，谢谢。一共多少钱？", en: "That will be all, thank you. How much is it?" },
      { role: "commercant", fr: "Ça fait quatre euros cinquante, s'il vous plaît.", zh: "一共是四点五欧元，谢谢。", en: "That is four euros fifty, please." },
      { role: "client", fr: "Je peux payer par carte ?", zh: "我可以刷卡吗？", en: "Can I pay by card?" },
      { role: "commercant", fr: "Bien sûr. Insérez votre carte, s'il vous plaît. Voilà. Merci, bonne journée !", zh: "当然可以。请插卡。好了。谢谢，祝您一天愉快！", en: "Of course. Please insert your card. There. Thank you, have a nice day!" },
      { role: "client", fr: "Merci, au revoir !", zh: "谢谢，再见！", en: "Thank you, goodbye!" }
    ]
  },
  {
    sceneId: "epicerie",
    title_zh: "在杂货店 À l'épicerie",
    title_en: "At the Grocery Store",
    lines: [
      { role: "commercant", fr: "Bonjour, Madame. Je peux vous aider ?", zh: "你好，女士。需要我帮忙吗？", en: "Hello, Madam. Can I help you?" },
      { role: "client", fr: "Bonjour. Je cherche du lait frais et des pommes rouges. Ils sont où ?", zh: "你好。我在找鲜牛奶和红苹果。它们在哪里？", en: "Hello. I am looking for fresh milk and red apples. Where are they?" },
      { role: "commercant", fr: "Le lait est dans le rayon frais, là-bas. Et les pommes sont juste ici.", zh: "牛奶在后面的冷藏区。苹果就在这边。", en: "The milk is in the dairy section over there. And the apples are right here." },
      { role: "client", fr: "Ah parfait. Je vais prendre trois pommes et une bouteille de lait.", zh: "啊，太好了。我要三个苹果和一瓶牛奶。", en: "Ah perfect. I will take three apples and a bottle of milk." },
      { role: "commercant", fr: "Très bien. Avez-vous besoin d'un sac ?", zh: "好的。您需要袋子吗？", en: "Very well. Do you need a bag?" },
      { role: "client", fr: "Non merci, j'ai mon propre sac.", zh: "不用了谢谢，我有自己的包。", en: "No thank you, I have my own bag." }
    ]
  }
];

// -- Quiz Questions --
const QUIZ_QUESTIONS = [
  {
    q_zh: "购买面包 (le pain) 和法棍 (la baguette) 应该去哪里？",
    q_en: "Where should you go to buy bread (le pain) and baguettes?",
    a: "La Boulangerie",
    ops: ["La Boulangerie", "La Boucherie", "La Poissonnerie", "La Librairie"]
  },
  {
    q_zh: "如果你感冒了需要买药 (médicaments)，你应该去哪里？",
    q_en: "If you are sick and need to buy medicine, where should you go?",
    a: "La Pharmacie",
    ops: ["Le Bureau de tabac", "La Parfumerie", "La Pharmacie", "La Poste"]
  },
  {
    q_zh: "法语词汇 'La Librairie' 指的是什么地方？",
    q_en: "What does the French word 'La Librairie' refer to?",
    a: "书店 (Bookstore)",
    ops: ["图书馆 (Library)", "书店 (Bookstore)", "杂货店 (Grocery Store)", "邮局 (Post Office)"]
  },
  {
    q_zh: "购买肉类 (la viande) 应该去哪家商店？",
    q_en: "Which shop should you visit to buy meat (la viande)?",
    a: "La Boucherie",
    ops: ["La Poissonnerie", "La Boucherie", "L'Épicerie", "La Pâtisserie"]
  },
  {
    q_zh: "买邮票 (timbres) 并寄送包裹 (colis) 应该去哪里？",
    q_en: "Where do you buy stamps (timbres) and send parcels (colis)?",
    a: "La Poste",
    ops: ["La Poste", "Le Bureau de tabac", "Le Marché", "La Friperie"]
  },
  {
    q_zh: "如果你想买一束花 (bouquet de fleurs)，应该去拜访谁？",
    q_en: "If you want to buy a bouquet of flowers, who should you visit?",
    a: "Le Fleuriste",
    ops: ["Le Coiffeur", "Le Fleuriste", "La Pâtisserie", "La Boutique"]
  },
  {
    q_zh: "去理发店剪头发，法语介词搭配正确的是哪个？",
    q_en: "Which preposition is correct for going to the hair salon?",
    a: "chez le coiffeur",
    ops: ["à la coiffeur", "chez le coiffeur", "au coiffeur", "en coiffeur"]
  },
  {
    q_zh: "顾客说 'Je voudrais une baguette'，代表什么意思？",
    q_en: "What does a customer mean by 'Je voudrais une baguette'?",
    a: "我想要一根法棍",
    ops: ["我想退款", "我想要一根法棍", "这个多少钱", "我正在看"]
  }
];

// -- Translations (Encapsulated for the reset) --
const getTrans = (lang: string) => {
  const t: Record<string, any> = {
    zh: {
      title: "商店与购物探索",
      desc: "像本地人一样在法国购物。学习商店类别、法语介词规则以及实用购物对话场景。",
      shopTitle: "商店类别与地点介词",
      shopSubtitle: "点击卡片展开详情，收听发音并掌握对应的法语介词搭配（如 à la, au, chez le）。",
      prepositionLabel: "介词搭配",
      sentenceLabel: "常用购买例句",
      toolsTitle: "购物必备工具与名词",
      toolsSubtitle: "点击卡片收听发音，认识超市和商店里的常见工具及相关名词。",
      verbsTitle: "常用购物动词 (Shopping Verbs)",
      verbsSubtitle: "掌握这些法语动作词汇，能让您的购物沟通更流利、更地道。",
      paymentsTitle: "付款方式与支付地道表达",
      paymentsSubtitle: "学习如何用法语表达您的支付偏好及相关的动词短语。",
      dialogueTitle: "情景对话聊天室 (Dialogue Messenger)",
      dialogueSubtitle: "模拟商家与顾客之间的日常购物对话。选择您的角色以高亮台词，点击气泡收听真人发音！",
      roleSelector: "角色扮演模式",
      roleAll: "显示全部 (All)",
      roleMerchant: "我是商家 (Merchant)",
      roleCustomer: "我是顾客 (Customer)",
      quizTitle: "商店与购物场景挑战",
      quizSubtitle: "测试您的法国购物常识，选出最正确的选项！",
      scoreLabel: "您的得分",
      food_drink: "食品与饮品 (Alimentation)",
      fashion_style: "服装与时尚 (Mode & Style)",
      health_beauty: "健康与美容 (Santé & Beauté)",
      services_specialty: "专业与日常服务 (Services)",
      correct: "回答正确！🎉",
      wrong: "再试一次",
      backHome: "返回首页",
      submit: "提交答案",
      tryAgain: "重新测验",
      check: "检查",
      next: "下一题",
      perfect: "🎉 完美！全部正确！",
      listen: "点击发音",
      shopNote: "注",
      commercant: "商家 (Le commerçant)",
      client: "顾客 (Le client)",
      chariot: "购物车",
      panier: "购物篮",
      caisse: "收银台 / 结账处",
      ticket: "收据 / 小票",
      prix: "价格",
      taille: "尺码 / 鞋码",
      monnaie: "零钱 / 现金"
    },
    en: {
      title: "Shops & Shopping Explorer",
      desc: "Shop like a local in France. Master store categories, preposition rules, and practical dialogue scenes.",
      shopTitle: "Store Categories & Prepositions",
      shopSubtitle: "Click a card to expand details, hear pronunciation, and learn the correct French prepositions (e.g. à la, au, chez le).",
      prepositionLabel: "Preposition",
      sentenceLabel: "Common Sentence",
      toolsTitle: "Shopping Nouns & Tools",
      toolsSubtitle: "Click on cards to hear pronunciation and learn common shopping terms and tools.",
      verbsTitle: "Common Shopping Verbs",
      verbsSubtitle: "Master these action verbs to express your shopping actions naturally in French.",
      paymentsTitle: "Payment Methods & Expressions",
      paymentsSubtitle: "Learn how to state your payment preferences in French using correct verbs.",
      dialogueTitle: "Dialogue Messenger",
      dialogueSubtitle: "Simulate daily shopping conversations between a merchant and a customer. Choose your role to highlight lines, and click to listen!",
      roleSelector: "Roleplay Mode",
      roleAll: "Show All",
      roleMerchant: "I am Merchant",
      roleCustomer: "I am Customer",
      quizTitle: "Shopping Scenario Quiz",
      quizSubtitle: "Test your French shopping knowledge and select the correct option!",
      scoreLabel: "Your Score",
      food_drink: "Food & Drinks (Alimentation)",
      fashion_style: "Fashion & Style (Mode & Style)",
      health_beauty: "Health & Beauty (Santé & Beauté)",
      services_specialty: "Professional Services (Services)",
      correct: "Correct! 🎉",
      wrong: "Try again",
      backHome: "Back to Home",
      submit: "Submit",
      tryAgain: "Try Again",
      check: "Check",
      next: "Next",
      perfect: "🎉 Perfect! All correct!",
      listen: "Listen",
      shopNote: "Note",
      commercant: "Merchant (Le commerçant)",
      client: "Customer (Le client)",
      chariot: "Shopping cart / trolley",
      panier: "Shopping basket",
      caisse: "Checkout counter / register",
      ticket: "Receipt / bill小票",
      prix: "Price",
      taille: "Clothing size / Shoe size",
      monnaie: "Change money / coins"
    },
    fr: {
      title: "Boutiques et Achats",
      desc: "Faites vos courses comme un local. Maîtrisez les catégories de magasins, les prépositions et les dialogues pratiques.",
      shopTitle: "Catégories de Magasins et Prépositions",
      shopSubtitle: "Cliquez sur une carte pour voir les détails, écouter la préposition correcte (ex: à la, au, chez le).",
      prepositionLabel: "Préposition",
      sentenceLabel: "Exemple de phrase",
      toolsTitle: "Outils et Noms de Courses",
      toolsSubtitle: "Cliquez sur les cartes pour écouter et apprendre les termes communs de supermarché.",
      verbsTitle: "Verbes de Shopping Communs",
      verbsSubtitle: "Maîtrisez ces verbes pour exprimer vos actions d'achat en français couramment.",
      paymentsTitle: "Moyens de Paiement",
      paymentsSubtitle: "Apprenez à exprimer vos préférences de paiement en français.",
      dialogueTitle: "Messagerie de Dialogue",
      dialogueSubtitle: "Simulez des conversations d'achat quotidiennes entre le commerçant et le client. Choisissez votre rôle et écoutez !",
      roleSelector: "Mode Jeu de Rôle",
      roleAll: "Tout afficher",
      roleMerchant: "Je suis Commerçant",
      roleCustomer: "Je suis Client",
      quizTitle: "Quiz de Scénarios d'Achats",
      quizSubtitle: "Testez vos connaissances en français et sélectionnez la bonne option !",
      scoreLabel: "Votre Score",
      food_drink: "Alimentation",
      fashion_style: "Mode & Style",
      health_beauty: "Santé & Beauté",
      services_specialty: "Services Professionnels",
      correct: "Correct ! 🎉",
      wrong: "Réessayez",
      backHome: "Retour à l'accueil",
      submit: "Valider",
      tryAgain: "Recommencer",
      check: "Vérifier",
      next: "Suivant",
      perfect: "🎉 Parfait ! Tout est correct !",
      listen: "Écouter",
      shopNote: "Note",
      commercant: "Le commerçant",
      client: "Le client",
      chariot: "Le chariot / caddie",
      panier: "Le panier",
      caisse: "La caisse",
      ticket: "Le ticket de caisse",
      prix: "Le prix",
      taille: "La taille / pointure",
      monnaie: "La monnaie"
    },
    es: {
      title: "Tiendas y Compras",
      desc: "Haz la compra como un local. Domina las categorías de tiendas, las preposiciones y los diálogos de compra habituales.",
      shopTitle: "Categorías de Tiendas y Preposiciones",
      shopSubtitle: "Haz clic en una tarjeta para ver detalles, escuchar la pronunciación y aprender las preposiciones (ej. à la, au, chez le).",
      prepositionLabel: "Preposición",
      sentenceLabel: "Frase de ejemplo",
      toolsTitle: "Herramientas y Nombres de Compras",
      toolsSubtitle: "Haz clic en las tarjetas para escuchar y aprender los términos comunes de las tiendas.",
      verbsTitle: "Verbos de Compra Comunes",
      verbsSubtitle: "Domina estos verbos de acción para hablar de compras con fluidez en francés.",
      paymentsTitle: "Métodos de Pago",
      paymentsSubtitle: "Aprende a expresar tus preferencias de pago en francés.",
      dialogueTitle: "Mensajero de Diálogo",
      dialogueSubtitle: "Simula conversaciones de compra diarias entre comerciante y cliente. ¡Elige tu rol y haz clic para escuchar!",
      roleSelector: "Modo de Juego de Rol",
      roleAll: "Mostrar Todo",
      roleMerchant: "Soy Comerciante",
      roleCustomer: "Soy Cliente",
      quizTitle: "Cuestionario de Compras",
      quizSubtitle: "¡Pon a prueba tus conocimientos sobre compras en Francia y selecciona la opción correcta!",
      scoreLabel: "Tu Puntuación",
      food_drink: "Alimentación",
      fashion_style: "Moda y Estilo",
      health_beauty: "Salud y Belleza",
      services_specialty: "Servicios Profesionales",
      correct: "¡Correcto! 🎉",
      wrong: "Inténtalo de nuevo",
      backHome: "Volver",
      submit: "Enviar",
      tryAgain: "Reintentar",
      check: "Comprobar",
      next: "Siguiente",
      perfect: "¡Perfecto! ¡Todo correcto!",
      listen: "Escuchar",
      shopNote: "Nota",
      commercant: "El comerciante",
      client: "El cliente",
      chariot: "El carrito",
      panier: "La cesta",
      caisse: "La caja",
      ticket: "El recibo",
      prix: "El precio",
      taille: "La talla / número",
      monnaie: "Las monedas / cambio"
    },
    de: {
      title: "Geschäfte & Einkaufen",
      desc: "Kaufen Sie wie ein Einheimischer in Frankreich ein. Meistern Sie Ladenkategorien, Präpositionen und Einkaufsdialoge.",
      shopTitle: "Ladenkategorien & Präpositionen",
      shopSubtitle: "Klicken Sie auf eine Karte, um Details anzuzeigen, die Aussprache zu hören und die richtige Präposition zu lernen (z. B. à la, au, chez le).",
      prepositionLabel: "Präposition",
      sentenceLabel: "Beispielsatz",
      toolsTitle: "Einkaufs-Vokabeln & Zubehör",
      toolsSubtitle: "Klicken Sie auf die Karten, um die Aussprache zu hören und wichtige Begriffe aus Geschäften zu lernen.",
      verbsTitle: "Häufige Einkaufsverben",
      verbsSubtitle: "Meistern Sie diese Aktionsverben, um sich beim Einkaufen auf Französisch flüssig auszudrücken.",
      paymentsTitle: "Zahlungsarten in Frankreich",
      paymentsSubtitle: "Lernen Sie, wie Sie Ihre Zahlungspräferenzen auf Französisch ausdrücken.",
      dialogueTitle: "Dialog-Messenger",
      dialogueSubtitle: "Simulieren Sie Einkaufsgespräche zwischen Händler und Kunde. Wählen Sie Ihre Rolle und klicken Sie zum Hören!",
      roleSelector: "Rollenspiel-Modus",
      roleAll: "Alle anzeigen",
      roleMerchant: "Ich bin Händler",
      roleCustomer: "Ich bin Kunde",
      quizTitle: "Einkaufs-Szenario-Quiz",
      quizSubtitle: "Testen Sie Ihr französisches Einkaufswissen und wählen Sie die richtige Option!",
      scoreLabel: "Ihr Punktestand",
      food_drink: "Lebensmittel & Getränke",
      fashion_style: "Mode & Stil",
      health_beauty: "Gesundheit & Schönheit",
      services_specialty: "Dienstleistungen",
      correct: "Richtig! 🎉",
      wrong: "Versuchen Sie es noch einmal",
      backHome: "Zur Startseite",
      submit: "Absenden",
      tryAgain: "Erneut versuchen",
      check: "Prüfen",
      next: "Weiter",
      perfect: "🎉 Perfekt! Alles richtig!",
      listen: "Hören",
      shopNote: "Hinweis",
      commercant: "Der Händler",
      client: "Der Kunde",
      chariot: "Der Einkaufswagen",
      panier: "Der Korb",
      caisse: "Die Kasse",
      ticket: "Der Kassenbon",
      prix: "Der Preis",
      taille: "Die Größe / Schuhgröße",
      monnaie: "Das Kleingeld"
    }
  };
  return t[lang] || t.en;
};

export default function MagasinClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const t = getTrans(lang);
  const [activeShopCard, setActiveShopCard] = useState<string | null>(null);

  // Dialogue Messenger State
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [roleFilter, setRoleFilter] = useState<"all" | "commercant" | "client">("all");

  // Quiz State
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Shuffle and pick 4 questions to make it dynamic
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledQuestions(shuffled);
  }, []);

  const handleOptionSelect = (qIndex: number, option: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qIndex]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    shuffledQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.a) score++;
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const finalScore = calculateScore();
    const percent = Math.round((finalScore / shuffledQuestions.length) * 100);
    if (typeof window !== "undefined") {
      try {
        const progressData = {
          completed: true,
          score: percent,
          correctCount: finalScore,
          totalCount: shuffledQuestions.length,
          lastPlayed: new Date().toISOString().slice(0, 10),
          roleplayCompleted: true
        };
        localStorage.setItem("frlearning_progress_magasin", JSON.stringify(progressData));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleRefreshQuiz = () => {
    const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 4);
    setShuffledQuestions(shuffled);
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const handleCardClick = (id: string, fr: string) => {
    if (activeShopCard === id) {
      setActiveShopCard(null);
    } else {
      setActiveShopCard(id);
      playTTS(fr);
    }
  };

  const score = isSubmitted ? calculateScore() : 0;
  const totalQ = shuffledQuestions.length;
  const percentage = totalQ > 0 ? Math.round((score / totalQ) * 100) : 0;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 font-sans selection:bg-teal-200">
      <SubpageHeader dict={dict} lang={lang} colorTheme="teal" />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-sm border border-stone-100 mb-6 text-teal-600"
          >
            <Store className="h-8 w-8" strokeWidth={1.5} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto"
          >
            {t.desc}
          </motion.p>
        </header>

        {/* Section 1: Store & Prepositions Explorer */}
        <section className="mb-20">
          <div className="mb-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.shopTitle}</h2>
            <p className="text-sm text-neutral-500">{t.shopSubtitle}</p>
          </div>

          <div className="space-y-12 mt-8">
            {SHOPS_DATA.map((cat, catIdx) => (
              <div key={cat.cat} className="space-y-4">
                <h3 className="text-lg font-bold text-teal-700">{t[cat.cat]}</h3>
                
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {cat.items.map((item, itemIdx) => {
                    const isOpen = activeShopCard === item.id;
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={item.id}
                        className={`rounded-3xl border transition-all duration-300 ${
                          isOpen 
                            ? "border-teal-300 shadow-md bg-white scale-[1.01]" 
                            : "border-stone-200 bg-white shadow-sm hover:shadow-md hover:border-stone-300"
                        } overflow-hidden`}
                      >
                        <button
                          onClick={() => handleCardClick(item.id, item.fr)}
                          className="w-full text-left p-5 flex items-center justify-between group cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl ${item.bg} ${item.color} group-hover:scale-105 transition-transform`}>
                              <IconComp className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h4 className="font-bold text-neutral-900 group-hover:text-teal-700 transition-colors leading-tight">{item.fr}</h4>
                              <p className="text-xs text-neutral-500 font-medium mt-0.5">
                                {dict.subPages.magasin.shops[catIdx]?.items[itemIdx]?.zh || t[item.id] || item.fr}
                              </p>
                            </div>
                          </div>
                          <Volume2 className="h-4 w-4 text-stone-300 group-hover:text-teal-600 transition-colors animate-pulse" />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="border-t border-stone-100 bg-stone-50/50"
                            >
                              <div className="p-5 text-sm space-y-3">
                                {/* Preposition Rule */}
                                <div className="flex items-start gap-2">
                                  <Info className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <span className="font-semibold text-neutral-700">{t.prepositionLabel}: </span>
                                    <span className="font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100/50 font-bold">{item.prep}</span>
                                  </div>
                                </div>
                                {/* Example sentence */}
                                <div className="pt-1">
                                  <div className="flex justify-between items-center group/sent">
                                    <p className="font-semibold text-neutral-700">{t.sentenceLabel}:</p>
                                    <button 
                                      onClick={() => playTTS(item.sentence)}
                                      className="text-stone-400 hover:text-teal-600 p-1 rounded-full hover:bg-stone-100 transition-all cursor-pointer"
                                    >
                                      <Volume2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                  <p className="text-neutral-800 font-medium italic mt-1 pr-4">{item.sentence}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Nouns & Tools Grid */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.toolsTitle}</h2>
            <p className="text-sm text-neutral-500">{t.toolsSubtitle}</p>
          </div>

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-6">
            {TOOLS_DATA.map((tool) => {
              const IconComp = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => playTTS(tool.fr)}
                  className="flex flex-col items-start p-5 rounded-3xl border border-stone-200 bg-white hover:border-teal-300 hover:shadow-md hover:scale-[1.03] transition-all text-left group cursor-pointer min-h-[130px] justify-between"
                >
                  <div className={`p-3 rounded-2xl ${tool.bg} ${tool.color} group-hover:scale-105 transition-transform`}>
                    <IconComp className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-neutral-900 group-hover:text-teal-700 transition-colors text-sm leading-tight">{tool.fr}</p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">{t[tool.id]}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 3: Shopping Verbs */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.verbsTitle}</h2>
            <p className="text-sm text-neutral-500">{t.verbsSubtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {VERBS_DATA.map((verb) => (
              <button
                key={verb.id}
                onClick={() => playTTS(verb.fr)}
                className="flex items-center justify-between p-4 rounded-2xl border border-stone-200 bg-white hover:border-teal-300 hover:shadow-sm transition-all text-left group cursor-pointer"
              >
                <div>
                  <p className="font-bold text-teal-700 text-base">{verb.fr}</p>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">
                    {lang === "zh" ? verb.note_zh : verb.note_en}
                  </p>
                </div>
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors flex-shrink-0 ml-4">
                  <Volume2 className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Section 4: Payment Methods */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.paymentsTitle}</h2>
            <p className="text-sm text-neutral-500">{t.paymentsSubtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mt-6">
            {PAYMENTS_DATA.map((pm) => {
              const IconComp = pm.icon;
              return (
                <button
                  key={pm.id}
                  onClick={() => playTTS(pm.fr)}
                  className="flex flex-col justify-between p-5 rounded-3xl border border-stone-200 bg-white hover:border-teal-300 hover:shadow-md transition-all text-left group cursor-pointer min-h-[140px]"
                >
                  <div className={`p-3 rounded-2xl self-start ${pm.bg} ${pm.color} group-hover:scale-105 transition-transform`}>
                    <IconComp className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="mt-4">
                    <p className="font-bold text-neutral-900 group-hover:text-teal-700 transition-colors text-sm leading-snug">{pm.fr}</p>
                    <p className="text-xs text-neutral-500 mt-1 font-medium">
                      {lang === "zh" ? pm.zh : pm.en}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 5: Dialogue Messenger */}
        <section className="mb-20">
          <div className="mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-semibold text-neutral-900">{t.dialogueTitle}</h2>
            <p className="text-sm text-neutral-500">{t.dialogueSubtitle}</p>
          </div>

          {/* Scene selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {DIALOGUES_DATA.map((scene, idx) => (
              <button
                key={scene.sceneId}
                onClick={() => setActiveSceneIndex(idx)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeSceneIndex === idx 
                    ? "bg-teal-600 text-white shadow-sm" 
                    : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300 hover:text-stone-900"
                }`}
              >
                {lang === "zh" ? scene.title_zh : scene.title_en}
              </button>
            ))}
          </div>

          {/* Roleplay configs & Chat Window */}
          <div className="border border-stone-200 rounded-[2rem] bg-white overflow-hidden shadow-sm">
            {/* Header / Config Bar */}
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-600" />
                <span className="font-bold text-neutral-800 text-sm">{t.roleSelector}:</span>
              </div>
              <div className="inline-flex p-1 bg-stone-200/50 rounded-xl border border-stone-200/80">
                {(["all", "commercant", "client"] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => setRoleFilter(role)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      roleFilter === role 
                        ? "bg-white text-teal-700 shadow-sm" 
                        : "text-stone-600"
                    }`}
                  >
                    {role === "all" ? t.roleAll : role === "commercant" ? t.roleMerchant : t.roleCustomer}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="p-6 md:p-8 space-y-6 max-h-[500px] overflow-y-auto bg-stone-50/30">
              {DIALOGUES_DATA[activeSceneIndex].lines.map((line, idx) => {
                const isMerchant = line.role === "commercant";
                const isDimmed = roleFilter !== "all" && roleFilter !== line.role;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isDimmed ? 0.4 : 1, y: 0 }}
                    className={`flex w-full ${isMerchant ? "justify-start" : "justify-end"}`}
                  >
                    <div 
                      onClick={() => playTTS(line.fr)}
                      className={`group relative max-w-[80%] rounded-2xl p-4 shadow-sm border transition-all cursor-pointer ${
                        isMerchant 
                          ? "bg-white border-stone-200 text-neutral-900 rounded-tl-none" 
                          : "bg-teal-600 border-teal-700 text-white rounded-tr-none"
                      } hover:shadow-md`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className={`text-[10px] uppercase font-bold tracking-wider mb-1 block ${
                          isMerchant ? "text-stone-400" : "text-teal-200"
                        }`}>
                          {isMerchant ? t.commercant : t.client}
                        </span>
                        <Volume2 className={`h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ${
                          isMerchant ? "text-teal-600" : "text-teal-200"
                        }`} />
                      </div>
                      <p className="font-bold text-base leading-snug mb-1 pr-2">{line.fr}</p>
                      <p className={`text-xs ${isMerchant ? "text-stone-500" : "text-teal-100"}`}>
                        {lang === "zh" ? line.zh : line.en}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: MCQ Quiz (Dark themed) */}
        <section className="rounded-[2.5rem] bg-stone-900 p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <ShoppingBag className="w-64 h-64 text-teal-400" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-stone-850 pb-6 mb-8">
              <div>
                <h2 className="text-3xl font-semibold">{t.quizTitle}</h2>
                <p className="mt-2 text-stone-400 text-sm max-w-lg">{t.quizSubtitle}</p>
              </div>
              <button
                onClick={handleRefreshQuiz}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 text-sm font-semibold transition-all border border-stone-700 cursor-pointer"
              >
                <RefreshCw className="h-4 w-4 text-teal-400" />
                {dict.subPages.magasin.refresh}
              </button>
            </div>

            {/* MCQ Quiz Layout */}
            <div className="space-y-10">
              {shuffledQuestions.map((q, idx) => {
                const userAnswer = userAnswers[idx] || "";
                let isCorrect = false;
                if (isSubmitted) {
                  isCorrect = userAnswer === q.a;
                }

                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="space-y-4"
                  >
                    <p className="font-bold text-lg text-stone-100">
                      {idx + 1}. {lang === "zh" ? q.q_zh : q.q_en}
                    </p>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      {q.ops.map((option: string) => {
                        const isSelected = userAnswer === option;
                        let btnStyle = "border-stone-800 bg-stone-850 hover:bg-stone-800 hover:border-stone-700 text-stone-300";
                        
                        if (isSubmitted) {
                          if (option === q.a) {
                            btnStyle = "border-emerald-600 bg-emerald-950/40 text-emerald-200";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "border-red-600 bg-red-950/40 text-red-200";
                          } else {
                            btnStyle = "border-stone-850 bg-stone-900 text-stone-600";
                          }
                        } else if (isSelected) {
                          btnStyle = "border-teal-500 bg-teal-950/40 text-teal-200";
                        }

                        return (
                          <button
                            key={option}
                            onClick={() => handleOptionSelect(idx, option)}
                            disabled={isSubmitted}
                            className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left font-medium transition-all ${
                              !isSubmitted && "hover:scale-[1.01]"
                            } ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && option === q.a && <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />}
                            {isSubmitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Submit & score summary */}
            <div className="mt-12 border-t border-stone-800 pt-8 flex flex-wrap gap-4 items-center">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(userAnswers).length !== totalQ}
                  className="rounded-2xl bg-teal-600 hover:bg-teal-500 px-8 py-3.5 text-sm font-bold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {t.submit}
                </button>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
                  <div className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold ${
                    percentage === 100 ? "bg-emerald-950/50 text-emerald-300 border border-emerald-800/40" : "bg-amber-950/50 text-amber-300 border border-amber-800/40"
                  }`}>
                    {percentage === 100 ? t.perfect : `${t.scoreLabel}: ${score} / ${totalQ} (${percentage}%)`}
                  </div>
                  <button
                    onClick={() => {
                      setUserAnswers({});
                      setIsSubmitted(false);
                    }}
                    className="rounded-2xl border border-stone-800 bg-stone-850 hover:bg-stone-800 text-stone-200 px-6 py-3 text-sm font-bold transition-all cursor-pointer"
                  >
                    {t.tryAgain}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
