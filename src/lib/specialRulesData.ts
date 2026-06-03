export type MultilingualString = {
  zh: string;
  en: string;
  fr: string;
  es: string;
  de: string;
};

export type RuleExample = {
  text: string;     
  ttsText?: string; 
  note: MultilingualString; 
  highlight?: string; 
};

export type SpecialRule = {
  id: string;
  title: MultilingualString;
  desc: MultilingualString;
  examples: RuleExample[];
};

export const specialRulesData: SpecialRule[] = [
  {
    id: "final-consonants",
    title: {
      zh: "词尾辅音发音规则",
      en: "Final Consonants",
      fr: "Consonnes finales",
      es: "Consonantes finales",
      de: "Endkonsonanten"
    },
    desc: {
      zh: "在法语中，单词末尾的辅音字母通常是不发音的（如 s, t, d, p, x）。但是，字母 **C, R, F, L**（可以记忆为英文单词 **CaReFuL**）以及少数情况下的 **Q**，在词尾通常会发音。",
      en: "In French, final consonants are usually silent (like s, t, d, p, x). However, the letters **C, R, F, L** (remember the word **CaReFuL**) and sometimes **Q** are usually pronounced.",
      fr: "En français, les consonnes finales sont généralement muettes (s, t, d, p, x). Cependant, les lettres **C, R, F, L** et parfois **Q** sont généralement prononcées.",
      es: "En francés, las consonantes finales suelen ser mudas (s, t, d, p, x). Sin embargo, las letras **C, R, F, L** y a veces **Q** suelen pronunciarse.",
      de: "Im Französischen sind Endkonsonanten meist stumm (s, t, d, p, x). Die Buchstaben **C, R, F, L** und manchmal **Q** werden jedoch normalerweise ausgesprochen."
    },
    examples: [
      {
        text: "Paris",
        highlight: "s",
        note: {
          zh: "词尾 s 不发音 [pa.ʁi]",
          en: "Final s is silent [pa.ʁi]",
          fr: "Le s final est muet [pa.ʁi]",
          es: "La s final es muda [pa.ʁi]",
          de: "Das abschließende s ist stumm [pa.ʁi]"
        }
      },
      {
        text: "sac",
        highlight: "c",
        note: {
          zh: "词尾 c 发音 [sak]",
          en: "Final c is pronounced [sak]",
          fr: "Le c final est prononcé [sak]",
          es: "La c final se pronuncia [sak]",
          de: "Das abschließende c wird ausgesprochen [sak]"
        }
      },
      {
        text: "cinq",
        highlight: "q",
        note: {
          zh: "词尾 q 发音 [sɛ̃k]",
          en: "Final q is pronounced [sɛ̃k]",
          fr: "Le q final est prononcé [sɛ̃k]",
          es: "La q final se pronuncia [sɛ̃k]",
          de: "Das abschließende q wird ausgesprochen [sɛ̃k]"
        }
      }
    ]
  },
  {
    id: "liaison",
    title: {
      zh: "连诵 (La Liaison)",
      en: "Liaison (Linking)",
      fr: "La Liaison",
      es: "La Liaison (Enlace)",
      de: "La Liaison (Bindung)"
    },
    desc: {
      zh: "当一个以不发音辅音结尾的单词，紧接一个以元音或哑音 h (h muet) 开头的单词时，前一个单词词尾的辅音会“复活”，并与后一个单词连起来读。注意：s/x 连读为 [z]，d 连读为 [t]。",
      en: "When a word ending in a silent consonant is followed by a word starting with a vowel or mute h, the silent consonant 'wakes up' and links to the next word. Note: s/x links as [z], d links as [t].",
      fr: "Quand un mot terminé par une consonne muette est suivi d'un mot commençant par une voyelle ou un h muet, la consonne finale se lie au mot suivant. Note : s/x devient [z], d devient [t].",
      es: "Cuando una palabra que termina en consonante muda es seguida por otra que empieza por vocal o h muda, la consonante se pronuncia y se enlaza. Nota: s/x suena [z], d suena [t].",
      de: "Wenn auf ein Wort mit stummem Endkonsonant ein Wort mit Vokal oder stummem h folgt, wird der Konsonant mit dem nächsten Wort gebunden. Hinweis: s/x als [z], d als [t]."
    },
    examples: [
      {
        text: "les amis",
        highlight: "s a",
        note: {
          zh: "s 连读发 [z]：[le z‿a.mi]",
          en: "s links as [z]: [le z‿a.mi]",
          fr: "s se prononce [z] : [le z‿a.mi]",
          es: "s suena como [z]: [le z‿a.mi]",
          de: "s wird wie [z] gebunden: [le z‿a.mi]"
        }
      },
      {
        text: "grand homme",
        highlight: "d ho",
        note: {
          zh: "d 连读发 [t]：[gʁɑ̃ t‿ɔm]",
          en: "d links as [t]: [gʁɑ̃ t‿ɔm]",
          fr: "d se prononce [t] : [gʁɑ̃ t‿ɔm]",
          es: "d suena como [t]: [gʁɑ̃ t‿ɔm]",
          de: "d wird wie [t] gebunden: [gʁɑ̃ t‿ɔm]"
        }
      }
    ]
  },
  {
    id: "elision",
    title: {
      zh: "省音 (L'Élision)",
      en: "Elision",
      fr: "L'Élision",
      es: "La Elisión",
      de: "Die Elision"
    },
    desc: {
      zh: "以元音 e 或 a 结尾的单音节词（如 le, la, je, me, te, se, ce, de, ne, que），遇到以元音或哑音 h 开头的单词时，会省去元音并加上撇号 (')。",
      en: "Short words ending in e or a (like le, la, je, me, te, se, ce, de, ne, que) drop their final vowel and use an apostrophe (') when followed by a vowel or mute h.",
      fr: "Les mots courts terminés par e ou a (le, la, je...) perdent leur voyelle finale et prennent une apostrophe (') devant une voyelle ou un h muet.",
      es: "Palabras cortas que terminan en e o a (le, la, je...) pierden su vocal final y usan un apóstrofo (') ante una vocal o h muda.",
      de: "Kurze Wörter auf e oder a (le, la, je...) verlieren ihren Endvokal und erhalten ein Apostroph (') vor einem Vokal oder stummem h."
    },
    examples: [
      {
        text: "l'ami",
        highlight: "l'",
        ttsText: "l'ami",
        note: {
          zh: "le + ami = l'ami",
          en: "le + ami = l'ami",
          fr: "le + ami = l'ami",
          es: "le + ami = l'ami",
          de: "le + ami = l'ami"
        }
      },
      {
        text: "j'aime",
        highlight: "j'",
        ttsText: "j'aime",
        note: {
          zh: "je + aime = j'aime",
          en: "je + aime = j'aime",
          fr: "je + aime = j'aime",
          es: "je + aime = j'aime",
          de: "je + aime = j'aime"
        }
      }
    ]
  },
  {
    id: "h-muet-aspire",
    title: {
      zh: "哑音 H 与 嘘音 H",
      en: "Mute H vs Aspirated H",
      fr: "H muet vs H aspiré",
      es: "H muda vs H aspirada",
      de: "Stummes H vs Aspiriertes H"
    },
    desc: {
      zh: "法语字母 H 本身永远不发音！但它分为两类：\\n1. **哑音 H (H muet)**：视同元音开头，允许省音（l'homme）和连诵（les hommes）。\\n2. **嘘音 H (H aspiré)**：视同辅音开头，像一堵墙，绝对**禁止**省音和连诵（le héros，不是 l'héros）。",
      en: "The letter H is ALWAYS silent in French! But there are two types:\\n1. **Mute H**: Acts like a vowel, allowing elision (l'homme) and liaison (les hommes).\\n2. **Aspirated H**: Acts like a consonant wall, strictly FORBIDDING elision and liaison (le héros, NOT l'héros).",
      fr: "La lettre H est TOUJOURS muette ! Mais il y a deux types :\\n1. **H muet** : Permet l'élision (l'homme) et la liaison (les hommes).\\n2. **H aspiré** : Interdit strictement l'élision et la liaison (le héros).",
      es: "La letra H SIEMPRE es muda. Pero hay dos tipos:\\n1. **H muda**: Permite la elisión (l'homme) y la liaison (les hommes).\\n2. **H aspirada**: Prohíbe estrictamente la elisión y la liaison (le héros).",
      de: "Der Buchstabe H ist IMMER stumm. Aber es gibt zwei Arten:\\n1. **Stummes H**: Erlaubt Elision (l'homme) und Liaison (les hommes).\\n2. **Aspiriertes H**: Verbietet strengstens Elision und Liaison (le héros)."
    },
    examples: [
      {
        text: "les hommes",
        highlight: "s h",
        note: {
          zh: "哑音 h，必须连诵：[le z‿ɔm]",
          en: "Mute h, liaison required: [le z‿ɔm]",
          fr: "H muet, liaison obligatoire : [le z‿ɔm]",
          es: "H muda, liaison obligatoria: [le z‿ɔm]",
          de: "Stummes h, Liaison erforderlich: [le z‿ɔm]"
        }
      },
      {
        text: "les héros",
        highlight: "s h",
        note: {
          zh: "嘘音 h，绝对不能连诵：[le e.ʁo]",
          en: "Aspirated h, NO liaison: [le e.ʁo]",
          fr: "H aspiré, PAS de liaison : [le e.ʁo]",
          es: "H aspirada, SIN liaison: [le e.ʁo]",
          de: "Aspiriertes h, KEINE Liaison: [le e.ʁo]"
        }
      }
    ]
  }
];
