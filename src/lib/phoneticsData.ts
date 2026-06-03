export type MultilingualString = {
  zh: string;
  en: string;
  fr: string;
  es: string;
  de: string;
};

export type PhoneticRule = {
  spell: string;
  cond: MultilingualString | string;
  examples: string;
};

export type PhoneticItem = {
  symbol: string;
  desc: MultilingualString;
  rules: PhoneticRule[];
  category: "vowel" | "semi-vowel" | "consonant" | "nasal";
};

export const phoneticsData: PhoneticItem[] = [
  {
    "symbol": "i",
    "desc": {
      "zh": "口腔开口度极小，舌尖紧抵下齿，唇形扁平，嘴角用力向两边拉，与汉语拼音中的 i 相似，但口腔开口部位的肌肉更加紧张。",
      "en": "Mouth opening is minimal, tongue tip pressed against lower teeth, lips flat and stretched sideways. Similar to English 'ee' in 'see', but more tense.",
      "fr": "Ouverture minimale, pointe de la langue contre les dents inférieures, lèvres étirées. Très tendu.",
      "es": "Apertura mínima, punta de la lengua contra los dientes inferiores, labios estirados. Similar a la 'i' en 'sí', pero más tensa.",
      "de": "Minimale Mundöffnung, Zungenspitze gegen die unteren Zähne, Lippen gespreizt. Ähnlich dem 'ie' in 'sie', aber angespannter."
    },
    "rules": [
      {
        "spell": "i",
        "cond": "",
        "examples": "il, si, lire, riz"
      },
      {
        "spell": "î",
        "cond": "",
        "examples": "île, dîner"
      },
      {
        "spell": "ï",
        "cond": "",
        "examples": "naïf, mais, égoïste"
      },
      {
        "spell": "y",
        "cond": "",
        "examples": "type, style, cycle"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "e",
    "desc": {
      "zh": "舌尖紧抵下齿，唇形扁平，开口度略大于 [i]，嘴角向两边拉。发音与汉语拼音中的 ei 相似，但开口度更小，并且口型保持不变。",
      "en": "Tongue tip pressed against lower teeth, lips flat, mouth slightly more open than [i]. Similar to English 'a' in 'gate', but mouth shape remains fixed.",
      "fr": "Pointe de la langue contre les dents inférieures, lèvres plates, ouverture un peu plus grande que [i]. Comme le 'é' dans 'été'.",
      "es": "Punta de la lengua contra los dientes inferiores, labios planos. Similar a la 'e' en 'elefante'.",
      "de": "Zungenspitze gegen die unteren Zähne, Lippen flach. Ähnlich dem 'ee' in 'See', aber ohne Diphthongierung."
    },
    "rules": [
      {
        "spell": "é",
        "cond": "",
        "examples": "été, désolé, bébé"
      },
      {
        "spell": "er",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "aller, répéter, préférer"
      },
      {
        "spell": "ez",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "téléphonez, lisez, nez"
      },
      {
        "spell": "es",
        "cond": {
          "zh": "在少数单音节词中",
          "en": "in some single-syllable words",
          "fr": "dans certains mots monosyllabiques",
          "es": "en algunas palabras monosílabas",
          "de": "in einigen einsilbigen Wörtern"
        },
        "examples": "les, des, mes"
      },
      {
        "spell": "ed 或 eds",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "pied, assieds"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "ε",
    "desc": {
      "zh": "开口度大于 [e]，舌尖平抵下齿，舌前部略微隆起。注意保持口型稳定，尤其不要与汉语拼音的 ai 混淆。",
      "en": "Mouth more open than [e], tongue tip flat against lower teeth. Do not confuse with English 'ay' diphthong. Similar to 'e' in 'bed'.",
      "fr": "Ouverture plus grande que [e], pointe de la langue contre les dents inférieures. Comme le 'è' dans 'mère'.",
      "es": "Boca más abierta que [e]. Similar a una 'e' abierta en español.",
      "de": "Mund offener als bei [e]. Ähnlich dem 'ä' in 'März'."
    },
    "rules": [
      {
        "spell": "è",
        "cond": "",
        "examples": "mère, père, frère"
      },
      {
        "spell": "ê",
        "cond": "",
        "examples": "être, tête, bête"
      },
      {
        "spell": "ë",
        "cond": "",
        "examples": "Noël"
      },
      {
        "spell": "e",
        "cond": {
          "zh": "在闭音节中",
          "en": "in closed syllables",
          "fr": "en syllabe fermée",
          "es": "en sílabas cerradas",
          "de": "in geschlossenen Silben"
        },
        "examples": "merci, sel, veste, belle"
      },
      {
        "spell": "ai, aî",
        "cond": "",
        "examples": "aimer, faire, mais"
      },
      {
        "spell": "ei",
        "cond": "",
        "examples": "Seine, seize"
      },
      {
        "spell": "et, êt, ect",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "paquet, ticket, forêt, respect"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "a",
    "desc": {
      "zh": "舌头放平，嘴自然张开，口型略微紧张。",
      "en": "Tongue flat, mouth naturally open, lips slightly tense. Similar to 'a' in 'father'.",
      "fr": "Langue plate, bouche naturellement ouverte, lèvres légèrement tendues. Comme le 'a' dans 'papa'.",
      "es": "Lengua plana, boca abierta naturalmente. Similar a la 'a' en 'padre'.",
      "de": "Zunge flach, Mund natürlich geöffnet. Ähnlich dem 'a' in 'Vater'."
    },
    "rules": [
      {
        "spell": "a",
        "cond": "",
        "examples": "papa, date, ma, ami"
      },
      {
        "spell": "à",
        "cond": "",
        "examples": "à, là"
      },
      {
        "spell": "â",
        "cond": "",
        "examples": "Pâques, pâte, gâteau"
      },
      {
        "spell": "e + mm 或 nn",
        "cond": {
          "zh": "在词中",
          "en": "in the middle of a word",
          "fr": "au milieu d'un mot",
          "es": "en medio de una palabra",
          "de": "in der Mitte eines Wortes"
        },
        "examples": "femme, évidemment"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "u",
    "desc": {
      "zh": "舌尽量后缩，双唇突出呈圆形，口型紧闭。与汉语拼音中的 u 相似，但唇部肌肉更加紧张。",
      "en": "Tongue retracted, lips protruded and rounded, mouth nearly closed. Similar to 'oo' in 'boot', but lips are much tenser.",
      "fr": "Langue en arrière, lèvres projetées et arrondies, bouche presque fermée. Comme le 'ou' dans 'vous'.",
      "es": "Lengua retraída, labios protruidos y redondeados. Similar a la 'u' en 'tú', pero más tensa.",
      "de": "Zunge zurückgezogen, Lippen vorgestülpt und gerundet. Ähnlich dem 'u' in 'Mut', aber angespannter."
    },
    "rules": [
      {
        "spell": "ou, où, oû",
        "cond": "",
        "examples": "vous, où, goût"
      },
      {
        "spell": "aou, aoû",
        "cond": "",
        "examples": "août"
      },
      {
        "spell": "ou",
        "cond": {
          "zh": "个别外来语中",
          "en": "in a few loanwords",
          "fr": "dans quelques mots d'emprunt",
          "es": "en algunos préstamos",
          "de": "in einigen Lehnwörtern"
        },
        "examples": "foot, clown"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "o",
    "desc": {
      "zh": "舌略向后缩，双唇突出，口型很圆，开口度非常小。",
      "en": "Tongue slightly retracted, lips protruded, mouth very round, very small opening. Similar to 'o' in 'boat' but purely monophthongal.",
      "fr": "Langue légèrement en arrière, lèvres projetées, bouche très ronde, ouverture très petite. Comme le 'o' dans 'mot'.",
      "es": "Lengua ligeramente retraída, labios protruidos, boca muy redonda. Similar a la 'o' cerrada.",
      "de": "Zunge leicht zurückgezogen, Lippen vorgestülpt, Mund sehr rund. Ähnlich dem 'o' in 'Boot'."
    },
    "rules": [
      {
        "spell": "o",
        "cond": {
          "zh": "在词末开音节中",
          "en": "at the end of open syllables",
          "fr": "à la fin des syllabes ouvertes",
          "es": "al final de sílabas abiertas",
          "de": "am Ende offener Silben"
        },
        "examples": "métro, vélo, mot"
      },
      {
        "spell": "o",
        "cond": {
          "zh": "在 [z] 前",
          "en": "before [z]",
          "fr": "devant [z]",
          "es": "antes de [z]",
          "de": "vor [z]"
        },
        "examples": "rose, chose, oser"
      },
      {
        "spell": "ô",
        "cond": "",
        "examples": "allô, drôle, côté"
      },
      {
        "spell": "eau",
        "cond": "",
        "examples": "beau, cadeau, bureau"
      },
      {
        "spell": "au",
        "cond": "",
        "examples": "aussi, autre, chaud"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "ɔ",
    "desc": {
      "zh": "舌略向后缩，双唇突出基本呈圆形，开口度较大。",
      "en": "Tongue slightly retracted, lips protruded forming a circle, mouth wider open than [o]. Similar to 'o' in 'bore'.",
      "fr": "Langue légèrement en arrière, lèvres projetées, ouverture plus grande que [o]. Comme le 'o' dans 'porte'.",
      "es": "Lengua ligeramente retraída, labios redondeados, boca más abierta que [o]. Similar a la 'o' abierta.",
      "de": "Zunge leicht zurückgezogen, Lippen gerundet, Mund weiter offen. Ähnlich dem 'o' in 'Sonne'."
    },
    "rules": [
      {
        "spell": "o",
        "cond": {
          "zh": "在大多数词中",
          "en": "in most words",
          "fr": "dans la plupart des mots",
          "es": "en la mayoría de las palabras",
          "de": "in den meisten Wörtern"
        },
        "examples": "robe, porte, comme"
      },
      {
        "spell": "um",
        "cond": {
          "zh": "在词末读 [ɔm]",
          "en": "pronounced [ɔm] at the end of a word",
          "fr": "prononcé [ɔm] à la fin d'un mot",
          "es": "pronunciado [ɔm] al final de una palabra",
          "de": "am Wortende als [ɔm] ausgesprochen"
        },
        "examples": "forum, album"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "y",
    "desc": {
      "zh": "舌位、开口度和肌肉紧张度与元音 [i] 相接近，但双唇突出，绷紧成圆形。发音与汉语拼音 ü 相似，但唇部肌肉更紧张。",
      "en": "Tongue position and opening similar to [i], but lips protruded and rounded tightly. Similar to French 'u' or German 'ü'.",
      "fr": "Position de la langue et ouverture proches de [i], mais les lèvres sont arrondies et tendues. Comme dans 'tu'.",
      "es": "Posición de la lengua como la [i], pero con labios redondeados y protruidos. Como la 'ü' alemana o 'u' francesa.",
      "de": "Zungenposition und Öffnung wie bei [i], aber Lippen vorgestülpt und eng gerundet. Ähnlich dem 'ü' in 'über'."
    },
    "rules": [
      {
        "spell": "u, û",
        "cond": "",
        "examples": "Lucie, tu, but, flûte"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "ø",
    "desc": {
      "zh": "舌尖和开口度与元音 e 相同，双唇突出呈圆形，肌肉较紧张。",
      "en": "Tongue position and opening like [e], but lips protruded and rounded, moderately tense. Similar to German 'ö'.",
      "fr": "Pointe de la langue et ouverture identiques à [e], lèvres arrondies et projetées, assez tendu. Comme dans 'jeu'.",
      "es": "Posición de la lengua como la [e], pero labios redondeados. Similar a la 'ö' alemana.",
      "de": "Zungenposition und Öffnung wie bei [e], aber Lippen vorgestülpt und gerundet. Ähnlich dem 'ö' in 'schön'."
    },
    "rules": [
      {
        "spell": "eu, oeu",
        "cond": {
          "zh": "在词末开音节中",
          "en": "at the end of open syllables",
          "fr": "à la fin des syllabes ouvertes",
          "es": "al final de sílabas abiertas",
          "de": "am Ende offener Silben"
        },
        "examples": "jeu, feu, deux, vœu"
      },
      {
        "spell": "eu",
        "cond": {
          "zh": "在 [z][t][d] 音前",
          "en": "before [z], [t], [d]",
          "fr": "devant les sons [z], [t], [d]",
          "es": "antes de los sonidos [z], [t], [d]",
          "de": "vor den Lauten [z], [t], [d]"
        },
        "examples": "serveuse, neutre, jeudi"
      },
      {
        "spell": "eû",
        "cond": "",
        "examples": "jeûne"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "œ",
    "desc": {
      "zh": "舌位和开口度与元音 [ε] 相同，只是双唇突出呈圆形，肌肉较轻松。",
      "en": "Tongue position and opening like [ε], but lips protruded and rounded, muscles relaxed. Similar to German short 'ö'.",
      "fr": "Position de la langue et ouverture identiques à [ε], lèvres arrondies et projetées, muscles relâchés. Comme dans 'fleur'.",
      "es": "Posición de la lengua como la [ε], pero labios redondeados, músculos relajados.",
      "de": "Zungenposition und Öffnung wie bei [ε], Lippen gerundet. Ähnlich dem kurzen 'ö' in 'können'."
    },
    "rules": [
      {
        "spell": "eu, oeu",
        "cond": {
          "zh": "在多数情况下",
          "en": "in most cases",
          "fr": "dans la plupart des cas",
          "es": "en la mayoría de los casos",
          "de": "in den meisten Fällen"
        },
        "examples": "leur, fleur, sœur, cœur"
      },
      {
        "spell": "oe",
        "cond": {
          "zh": "在个别词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "oeil"
      },
      {
        "spell": "ueil",
        "cond": {
          "zh": "在 c 或 g 后读 [œj]",
          "en": "pronounced [œj] after c or g",
          "fr": "prononcé [œj] après c ou g",
          "es": "pronunciado [œj] después de c o g",
          "de": "nach c oder g als [œj] ausgesprochen"
        },
        "examples": "accueil, orgueil"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "ə",
    "desc": {
      "zh": "舌位和开口度与元音 [ε] 相近，肌肉较放松，双唇突出呈圆形。发音时无需用力。",
      "en": "Tongue position and opening close to [ε], muscles relaxed, lips rounded. Pronounced without effort. Similar to 'a' in 'about'.",
      "fr": "Position de la langue et ouverture proches de [ε], muscles relâchés, lèvres arrondies. Prononcé sans effort. Comme le 'e' muet.",
      "es": "Posición de la lengua y apertura cercanas a [ε], músculos relajados, labios redondeados. Pronunciado sin esfuerzo.",
      "de": "Zungenposition und Öffnung ähnlich wie [ε], Muskeln entspannt, Lippen gerundet. Ähnlich dem 'e' in 'bitte'."
    },
    "rules": [
      {
        "spell": "e",
        "cond": {
          "zh": "在少数单音节词词末",
          "en": "at the end of a few single-syllable words",
          "fr": "à la fin de quelques mots monosyllabiques",
          "es": "al final de algunas palabras monosílabas",
          "de": "am Ende einiger einsilbiger Wörter"
        },
        "examples": "le, te, de"
      },
      {
        "spell": "e",
        "cond": {
          "zh": "两个辅音 + e + 辅音",
          "en": "between two consonants",
          "fr": "entre deux consonnes",
          "es": "entre dos consonantes",
          "de": "zwischen zwei Konsonanten"
        },
        "examples": "mercredi, gouvernement, entreprise"
      },
      {
        "spell": "e",
        "cond": {
          "zh": "在词首开音节中",
          "en": "at the beginning of open syllables",
          "fr": "au début des syllabes ouvertes",
          "es": "al principio de sílabas abiertas",
          "de": "am Anfang offener Silben"
        },
        "examples": "Benoît, demi, menu"
      },
      {
        "spell": "ai",
        "cond": {
          "zh": "在 faire 的某些变位中",
          "en": "in some conjugations of 'faire'",
          "fr": "dans certaines conjugaisons de 'faire'",
          "es": "en algunas conjugaciones de 'faire'",
          "de": "in einigen Konjugationen von 'faire'"
        },
        "examples": "faisons, satisfaisant"
      },
      {
        "spell": "on",
        "cond": {
          "zh": "在个别词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "monsieur"
      }
    ],
    "category": "vowel"
  },
  {
    "symbol": "ɥ",
    "desc": {
      "zh": "发音部位和开口度与 [y] 基本相同，但发音短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      "en": "Articulation and opening basically the same as [y], but very short, muscles tenser, narrow airflow with slight friction.",
      "fr": "Lieu d'articulation et ouverture comme [y], mais prononcé très brièvement, muscles tendus, léger frottement.",
      "es": "Articulación y apertura como [y], pero muy breve, músculos tensos, fricción leve.",
      "de": "Artikulation und Öffnung wie bei [y], aber sehr kurz, angespannter, leichter Reibelaut."
    },
    "rules": [
      {
        "spell": "u + 元音",
        "cond": "",
        "examples": "huit, suave, juin"
      }
    ],
    "category": "semi-vowel"
  },
  {
    "symbol": "w",
    "desc": {
      "zh": "发音部位和开口度与 [u] 基本相同，但发音短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      "en": "Articulation and opening basically the same as [u], but very short, muscles tenser, narrow airflow with slight friction. Like English 'w'.",
      "fr": "Lieu d'articulation et ouverture comme [u], mais prononcé très brièvement, muscles tendus, léger frottement. Comme le 'w' anglais.",
      "es": "Articulación y apertura como [u], pero muy breve, músculos tensos. Similar a la 'w' en inglés.",
      "de": "Artikulation und Öffnung wie bei [u], aber sehr kurz und angespannt. Ähnlich dem englischen 'w'."
    },
    "rules": [
      {
        "spell": "ou + 元音",
        "cond": "",
        "examples": "louer, oui, douane"
      },
      {
        "spell": "w",
        "cond": {
          "zh": "在外来语中",
          "en": "in loanwords",
          "fr": "dans les mots d'emprunt",
          "es": "en los préstamos",
          "de": "in Lehnwörtern"
        },
        "examples": "week-end"
      },
      {
        "spell": "oi, oî, oy",
        "cond": {
          "zh": "读 [wa]",
          "en": "pronounced [wa]",
          "fr": "prononcé [wa]",
          "es": "pronunciado [wa]",
          "de": "als [wa] ausgesprochen"
        },
        "examples": "moi, toi, boîte"
      },
      {
        "spell": "oe, oê",
        "cond": {
          "zh": "读 [wa]",
          "en": "pronounced [wa]",
          "fr": "prononcé [wa]",
          "es": "pronunciado [wa]",
          "de": "als [wa] ausgesprochen"
        },
        "examples": "moelle, poêle"
      },
      {
        "spell": "oin",
        "cond": {
          "zh": "读 [wɛ̃]",
          "en": "pronounced [wɛ̃]",
          "fr": "prononcé [wɛ̃]",
          "es": "pronunciado [wɛ̃]",
          "de": "als [wɛ̃] ausgesprochen"
        },
        "examples": "point, moins, soin"
      }
    ],
    "category": "semi-vowel"
  },
  {
    "symbol": "j",
    "desc": {
      "zh": "发音部位和开口度与 [i] 相同，但发音更短促，肌肉更紧张，气流通道狭窄，气流通过时产生摩擦。",
      "en": "Articulation and opening same as [i], but very short, muscles tenser, narrow airflow with slight friction. Like English 'y' in 'yes'.",
      "fr": "Lieu d'articulation et ouverture comme [i], mais très bref, muscles tendus, frottement. Comme le 'y' dans 'yeux'.",
      "es": "Articulación y apertura como [i], pero muy breve, músculos tensos. Similar a la 'y' en 'yes'.",
      "de": "Artikulation und Öffnung wie bei [i], aber sehr kurz und angespannt. Ähnlich dem deutschen 'j' in 'ja'."
    },
    "rules": [
      {
        "spell": "i 或 y",
        "cond": {
          "zh": "在元音前",
          "en": "before a vowel",
          "fr": "devant une voyelle",
          "es": "antes de una vocal",
          "de": "vor einem Vokal"
        },
        "examples": "hier, vieil, faïence"
      },
      {
        "spell": "元音 + il",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "travail, conseil, fauteuil, oeil"
      },
      {
        "spell": "元音 + ill + 元音字母",
        "cond": "",
        "examples": "travailler, bouteille, feuille"
      },
      {
        "spell": "辅音 + ill + 元音",
        "cond": {
          "zh": "读 [ij]",
          "en": "pronounced [ij]",
          "fr": "prononcé [ij]",
          "es": "pronunciado [ij]",
          "de": "als [ij] ausgesprochen"
        },
        "examples": "gentille, famille, fille"
      },
      {
        "spell": "oy + 元音",
        "cond": {
          "zh": "读 [waj]",
          "en": "pronounced [waj]",
          "fr": "prononcé [waj]",
          "es": "pronunciado [waj]",
          "de": "als [waj] ausgesprochen"
        },
        "examples": "voyelle, moyen"
      },
      {
        "spell": "ay, ey + 元音字母",
        "cond": {
          "zh": "读 [εj]",
          "en": "pronounced [εj]",
          "fr": "prononcé [εj]",
          "es": "pronunciado [εj]",
          "de": "als [εj] ausgesprochen"
        },
        "examples": "crayon, asseyez-vous"
      }
    ],
    "category": "semi-vowel"
  },
  {
    "symbol": "p",
    "desc": {
      "zh": "双唇紧闭形成阻碍，气流突然从口腔冲出，形成爆破音。声带不振动。在元音前部送气，在音节末送气。",
      "en": "Lips closed forming an obstruction, airflow bursts out. Vocal cords do not vibrate. Unaspirated before vowels (unlike English 'p' in 'pot'), aspirated at word ends.",
      "fr": "Lèvres fermées, l'air s'échappe soudainement. Les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
      "es": "Labios cerrados, el aire sale de golpe. Las cuerdas vocales no vibran. No aspirada ante vocales.",
      "de": "Lippen geschlossen, Luft strömt plötzlich aus. Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
    },
    "rules": [
      {
        "spell": "p",
        "cond": "",
        "examples": "pas, paix, étape, place"
      },
      {
        "spell": "pp",
        "cond": "",
        "examples": "appel, nappe, grippe"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "b",
    "desc": {
      "zh": "发音方式基本同 [p]，但发音时声带振动，并只有极少量的气流冲出口腔。",
      "en": "Articulation similar to [p], but vocal cords vibrate and very little air is expelled. Like English 'b'.",
      "fr": "Même articulation que [p], mais les cordes vocales vibrent et peu d'air s'échappe.",
      "es": "Articulación similar a [p], pero las cuerdas vocales vibran. Como la 'b' en español.",
      "de": "Ähnliche Artikulation wie [p], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'b'."
    },
    "rules": [
      {
        "spell": "b",
        "cond": "",
        "examples": "belle, bas, bébé"
      },
      {
        "spell": "bb",
        "cond": "",
        "examples": "abbé"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "t",
    "desc": {
      "zh": "舌尖抵上齿形成阻塞，气流突然从口腔冲出，声带不振动。在元音前不送气。",
      "en": "Tongue tip against upper teeth, vocal cords do not vibrate. Unaspirated before vowels (unlike English 't' in 'top').",
      "fr": "Pointe de la langue contre les dents supérieures, les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
      "es": "Punta de la lengua contra los dientes superiores. Las cuerdas vocales no vibran. No aspirada.",
      "de": "Zungenspitze gegen obere Zähne, Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
    },
    "rules": [
      {
        "spell": "t",
        "cond": "",
        "examples": "tête, table, type, maître"
      },
      {
        "spell": "tt",
        "cond": "",
        "examples": "atterrir, dette, patte"
      },
      {
        "spell": "th",
        "cond": "",
        "examples": "thé"
      },
      {
        "spell": "t",
        "cond": {
          "zh": "在少数词词末",
          "en": "at the end of a few words",
          "fr": "à la fin de quelques mots",
          "es": "al final de algunas palabras",
          "de": "am Ende einiger Wörter"
        },
        "examples": "net"
      },
      {
        "spell": "d",
        "cond": {
          "zh": "在联诵时",
          "en": "in liaison",
          "fr": "en liaison",
          "es": "en liaison",
          "de": "in Liaison"
        },
        "examples": "quand il"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "d",
    "desc": {
      "zh": "发音方式基本同 [t]，但发音时声带振动，并只有极少量的气流冲出口腔。",
      "en": "Articulation similar to [t], but vocal cords vibrate and very little air is expelled. Like English 'd'.",
      "fr": "Même articulation que [t], mais les cordes vocales vibrent et peu d'air s'échappe.",
      "es": "Articulación similar a [t], pero las cuerdas vocales vibran. Como la 'd' en español.",
      "de": "Ähnliche Artikulation wie [t], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'd'."
    },
    "rules": [
      {
        "spell": "d",
        "cond": "",
        "examples": "date, madame, drame"
      },
      {
        "spell": "dd",
        "cond": "",
        "examples": "addition"
      },
      {
        "spell": "dh",
        "cond": "",
        "examples": "adhérer"
      },
      {
        "spell": "d",
        "cond": {
          "zh": "在少数词词末",
          "en": "at the end of a few words",
          "fr": "à la fin de quelques mots",
          "es": "al final de algunas palabras",
          "de": "am Ende einiger Wörter"
        },
        "examples": "Madrid, David"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "k",
    "desc": {
      "zh": "舌面抬起抵住硬腭后部形成阻塞，气流突然从口腔冲出，形成爆破音。声带不振动，在元音前不送气。",
      "en": "Back of tongue against hard palate, vocal cords do not vibrate. Unaspirated before vowels (unlike English 'k').",
      "fr": "Dos de la langue contre le palais dur, les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
      "es": "Dorso de la lengua contra el paladar duro. Las cuerdas vocales no vibran. No aspirada.",
      "de": "Zungenrücken gegen harten Gaumen, Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
    },
    "rules": [
      {
        "spell": "c 或 cc",
        "cond": {
          "zh": "在 a, o, u 之前",
          "en": "before a, o, u",
          "fr": "devant a, o, u",
          "es": "antes de a, o, u",
          "de": "vor a, o, u"
        },
        "examples": "café, caisse, Cuba"
      },
      {
        "spell": "c",
        "cond": {
          "zh": "在辅音字母之前",
          "en": "before a consonant",
          "fr": "devant une consonne",
          "es": "antes de una consonante",
          "de": "vor einem Konsonanten"
        },
        "examples": "clé, cravate"
      },
      {
        "spell": "k, ck",
        "cond": "",
        "examples": "kilo, ticket"
      },
      {
        "spell": "qu",
        "cond": "",
        "examples": "qui, quel, disque"
      },
      {
        "spell": "c 或 q",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "sac, lac, parc, coq, cinq"
      },
      {
        "spell": "cc",
        "cond": {
          "zh": "在 e, i 前读 [ks]",
          "en": "pronounced [ks] before e, i",
          "fr": "prononcé [ks] devant e, i",
          "es": "pronunciado [ks] antes de e, i",
          "de": "als [ks] ausgesprochen vor e, i"
        },
        "examples": "succès, accent, accident"
      },
      {
        "spell": "x",
        "cond": {
          "zh": "读 [ks]",
          "en": "pronounced [ks]",
          "fr": "prononcé [ks]",
          "es": "pronunciado [ks]",
          "de": "als [ks] ausgesprochen"
        },
        "examples": "taxi, texte, excuser"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "g",
    "desc": {
      "zh": "发音方式同 [k]，但声带必须振动，并只有极少量的气流冲出口腔。",
      "en": "Articulation same as [k], but vocal cords must vibrate. Like English 'g' in 'go'.",
      "fr": "Même articulation que [k], mais les cordes vocales vibrent.",
      "es": "Articulación igual a [k], pero las cuerdas vocales vibran. Como la 'g' en español 'gato'.",
      "de": "Artikulation wie bei [k], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'g' in 'gut'."
    },
    "rules": [
      {
        "spell": "g",
        "cond": {
          "zh": "在 a, o, u 或辅音字母前",
          "en": "before a, o, u or consonant",
          "fr": "devant a, o, u ou consonne",
          "es": "antes de a, o, u o consonante",
          "de": "vor a, o, u oder Konsonant"
        },
        "examples": "gare, goutte, figure"
      },
      {
        "spell": "g",
        "cond": {
          "zh": "在少数词的词末",
          "en": "at the end of a few words",
          "fr": "à la fin de quelques mots",
          "es": "al final de algunas palabras",
          "de": "am Ende einiger Wörter"
        },
        "examples": "zigzag"
      },
      {
        "spell": "gu",
        "cond": {
          "zh": "在 e, i, y 之前",
          "en": "before e, i, y",
          "fr": "devant e, i, y",
          "es": "antes de e, i, y",
          "de": "vor e, i, y"
        },
        "examples": "guerre, guide, Guy"
      },
      {
        "spell": "c",
        "cond": {
          "zh": "在少数词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "second"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "f",
    "desc": {
      "zh": "上门齿顶住下唇内侧，气流通过唇齿之间的缝隙摩擦而出，形成摩擦音。",
      "en": "Upper teeth against lower lip, airflow creates friction. Like English 'f'.",
      "fr": "Dents supérieures contre la lèvre inférieure, l'air crée une friction. Comme le 'f' français.",
      "es": "Dientes superiores contra el labio inferior, el flujo de aire crea fricción. Como la 'f' en español.",
      "de": "Obere Zähne gegen Unterlippe, Luftstrom erzeugt Reibung. Wie das deutsche 'f'."
    },
    "rules": [
      {
        "spell": "f",
        "cond": "",
        "examples": "fille, faire, frère, flamme"
      },
      {
        "spell": "ff",
        "cond": "",
        "examples": "effet, difficile, offre"
      },
      {
        "spell": "f",
        "cond": {
          "zh": "在多数词词末",
          "en": "在多数词词末",
          "fr": "在多数词词末",
          "es": "在多数词词末",
          "de": "在多数词词末"
        },
        "examples": "vif, chef, sauf"
      },
      {
        "spell": "ph",
        "cond": "",
        "examples": "physique, photo"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "v",
    "desc": {
      "zh": "发音方式基本相同 [f] ，但声带振动，并且气流在唇齿之间稍需停留后再擦出。注意找到唇齿之间的发音点，并且发音要有气流冲出。",
      "en": "Articulation same as [f], but vocal cords vibrate. Do not confuse with 'w' or 'u'. Like English 'v'.",
      "fr": "Même articulation que [f], mais les cordes vocales vibrent. Ne pas confondre avec 'w'.",
      "es": "Articulación igual a [f], pero las cuerdas vocales vibran. Como la 'v' fricativa.",
      "de": "Artikulation wie bei [f], aber Stimmbänder vibrieren. Wie das deutsche 'w' in 'Wasser'."
    },
    "rules": [
      {
        "spell": "v",
        "cond": "",
        "examples": "voir, veste, vivre"
      },
      {
        "spell": "w",
        "cond": {
          "zh": "在少数词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "wagon"
      },
      {
        "spell": "f",
        "cond": {
          "zh": "在联诵时",
          "en": "in liaison",
          "fr": "en liaison",
          "es": "en liaison",
          "de": "in Liaison"
        },
        "examples": "neuf heures"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "s",
    "desc": {
      "zh": "舌尖抵下齿，上下齿靠近，舌面前部与上颚形成缝隙，气流通过缝隙时发生摩擦。",
      "en": "Tongue tip against lower teeth, front of tongue forms a gap with palate, airflow creates friction. Like English 's'.",
      "fr": "Pointe de la langue contre les dents inférieures, l'air crée une friction. Comme le 's' français dans 'si'.",
      "es": "Punta de la lengua contra los dientes inferiores, el flujo de aire crea fricción. Como la 's' en español.",
      "de": "Zungenspitze gegen untere Zähne, Luftstrom erzeugt Reibung. Wie das deutsche stimmlose 's' in 'Fass'."
    },
    "rules": [
      {
        "spell": "s",
        "cond": {
          "zh": "不在两个元音字母之间",
          "en": "not between two vowels",
          "fr": "pas entre deux voyelles",
          "es": "no entre dos vocales",
          "de": "nicht zwischen zwei Vokalen"
        },
        "examples": "si, penser, veste, Seine"
      },
      {
        "spell": "ss",
        "cond": "",
        "examples": "poisson, classe"
      },
      {
        "spell": "c 或者 sc",
        "cond": {
          "zh": "在 i, e, y 前",
          "en": "before i, e, y",
          "fr": "devant i, e, y",
          "es": "antes de i, e, y",
          "de": "vor i, e, y"
        },
        "examples": "cinéma, cycle"
      },
      {
        "spell": "ç",
        "cond": "",
        "examples": "français, leçon"
      },
      {
        "spell": "x",
        "cond": {
          "zh": "在少数词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "dix, six"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "z",
    "desc": {
      "zh": "发音方式基本相同 [s] ，但声带振动。",
      "en": "Articulation same as [s], but vocal cords vibrate. Like English 'z'.",
      "fr": "Même articulation que [s], mais les cordes vocales vibrent. Comme le 'z' français.",
      "es": "Articulación igual a [s], pero las cuerdas vocales vibran. Como la 'z' en inglés.",
      "de": "Artikulation wie bei [s], aber Stimmbänder vibrieren. Wie das deutsche stimmhafte 's' in 'Sonne'."
    },
    "rules": [
      {
        "spell": "z",
        "cond": "",
        "examples": "gaz, douze, zéro"
      },
      {
        "spell": "s",
        "cond": {
          "zh": "在两个元音字母之间",
          "en": "between two vowels",
          "fr": "entre deux voyelles",
          "es": "entre dos vocales",
          "de": "zwischen zwei Vokalen"
        },
        "examples": "bise, visage"
      },
      {
        "spell": "s",
        "cond": {
          "zh": "在联诵时",
          "en": "in liaison",
          "fr": "en liaison",
          "es": "en liaison",
          "de": "in Liaison"
        },
        "examples": "les amies"
      },
      {
        "spell": "x",
        "cond": {
          "zh": "在联诵时",
          "en": "in liaison",
          "fr": "en liaison",
          "es": "en liaison",
          "de": "in Liaison"
        },
        "examples": "dix ans"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "ʃ",
    "desc": {
      "zh": "舌尖抬向上齿龈稍后部分，与上颚之间形成缝隙，双唇略向前突出呈圆形，气流通过牙齿时形成摩擦。",
      "en": "Tongue tip raised to upper alveolar ridge forming a gap, lips slightly protruded and rounded. Like English 'sh'.",
      "fr": "Pointe de la langue soulevée vers les alvéoles supérieures, lèvres légèrement projetées. Comme le 'ch' français.",
      "es": "Punta de la lengua elevada hacia los alvéolos, labios ligeramente protruidos. Como la 'sh' en inglés.",
      "de": "Zungenspitze zum oberen Zahndamm gehoben, Lippen leicht vorgestülpt. Wie das deutsche 'sch'."
    },
    "rules": [
      {
        "spell": "ch",
        "cond": "",
        "examples": "Chine, chaise"
      },
      {
        "spell": "sh",
        "cond": "",
        "examples": "shampoing"
      },
      {
        "spell": "sch",
        "cond": "",
        "examples": "schéma"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "ʒ",
    "desc": {
      "zh": "发音方式基本同 [ʃ] ，但声带振动。注意在振动声带的同时发好摩擦音。",
      "en": "Articulation same as [ʃ], but vocal cords vibrate. Like 's' in English 'measure'.",
      "fr": "Même articulation que [ʃ], mais les cordes vocales vibrent. Comme le 'j' dans 'jour'.",
      "es": "Articulación igual a [ʃ], pero las cuerdas vocales vibran. Como la 's' en 'measure' (inglés) o 'll' en Argentina.",
      "de": "Artikulation wie bei [ʃ], aber Stimmbänder vibrieren. Wie das 'G' in 'Genie'."
    },
    "rules": [
      {
        "spell": "j",
        "cond": "",
        "examples": "je, joli, jour"
      },
      {
        "spell": "g",
        "cond": {
          "zh": "在 i, e, y 前",
          "en": "before i, e, y",
          "fr": "devant i, e, y",
          "es": "antes de i, e, y",
          "de": "vor i, e, y"
        },
        "examples": "gilet, geste, gymnase"
      },
      {
        "spell": "ge",
        "cond": {
          "zh": "在 a, o 前",
          "en": "before a, o",
          "fr": "devant a, o",
          "es": "antes de a, o",
          "de": "vor a, o"
        },
        "examples": "mangeais, mangeons"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "l",
    "desc": {
      "zh": "舌尖抵上齿龈形成阻塞。发音时声带振动，气流从抬起的舌尖两侧出来，同时放下舌尖。",
      "en": "Tongue tip against upper alveolar ridge, vocal cords vibrate, air flows around the sides of the tongue. Like English 'l'.",
      "fr": "Pointe de la langue contre les alvéoles supérieures, les cordes vocales vibrent, l'air s'écoule par les côtés.",
      "es": "Punta de la lengua contra los alvéolos superiores, las cuerdas vocales vibran. Como la 'l' en español.",
      "de": "Zungenspitze gegen den oberen Zahndamm, Stimmbänder vibrieren. Wie das deutsche 'l'."
    },
    "rules": [
      {
        "spell": "l, ll",
        "cond": "",
        "examples": "lire, ville, mille"
      },
      {
        "spell": "l",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "il, fil"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "m",
    "desc": {
      "zh": "双唇紧闭，软腭下降形成阻塞，气流从紧闭的双唇中冲出。",
      "en": "Lips tightly closed, soft palate lowered, air flows through the nose. Like English 'm'.",
      "fr": "Lèvres fermées, voile du palais abaissé, l'air s'écoule par le nez. Comme le 'm' français.",
      "es": "Labios cerrados, velo del paladar bajado, el aire sale por la nariz. Como la 'm' en español.",
      "de": "Lippen geschlossen, Gaumensegel gesenkt, Luft strömt durch die Nase. Wie das deutsche 'm'."
    },
    "rules": [
      {
        "spell": "m, mm",
        "cond": "",
        "examples": "madame, mère, pomme"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "n",
    "desc": {
      "zh": "舌尖抵上齿龈，软腭下降形成阻塞，气流同时从鼻腔和口腔冲出，同时放下舌尖。",
      "en": "Tongue tip against upper alveolar ridge, soft palate lowered, air flows through the nose. Like English 'n'.",
      "fr": "Pointe de la langue contre les alvéoles supérieures, l'air s'écoule par le nez. Comme le 'n' français.",
      "es": "Punta de la lengua contra los alvéolos superiores, el aire sale por la nariz. Como la 'n' en español.",
      "de": "Zungenspitze gegen den oberen Zahndamm, Gaumensegel gesenkt. Wie das deutsche 'n'."
    },
    "rules": [
      {
        "spell": "n, nn",
        "cond": "",
        "examples": "nous, niveau"
      },
      {
        "spell": "mn",
        "cond": "",
        "examples": "automne, condamner"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "ɲ",
    "desc": {
      "zh": "舌尖抵上齿龈，软腭下降，舌面抬起，紧贴硬腭形成阻塞。",
      "en": "Tongue tip against lower teeth, middle of tongue raised against hard palate, air flows through the nose. Like Spanish 'ñ'.",
      "fr": "Milieu de la langue soulevé contre le palais dur, l'air s'écoule par le nez. Comme le 'gn' dans 'montagne'.",
      "es": "Centro de la lengua elevado contra el paladar duro, el aire sale por la nariz. Igual a la 'ñ' en español.",
      "de": "Zungenmitte gegen den harten Gaumen gehoben, Luft strömt durch die Nase. Ähnlich dem 'gn' in 'Cognac'."
    },
    "rules": [
      {
        "spell": "gn",
        "cond": "",
        "examples": "montagne, campagne"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "ʁ",
    "desc": {
      "zh": "舌尖抵下齿，舌后部略微抬起，气流通过时小舌震动，声带也振动。发音时关键要放松喉咙，让气流通过时产生小舌振动。",
      "en": "Tongue tip against lower teeth, back of tongue raised, airflow makes the uvula vibrate. Relax the throat to produce the French 'r'.",
      "fr": "Pointe de la langue contre les dents inférieures, dos de la langue soulevé, l'air fait vibrer la luette. R français.",
      "es": "Punta de la lengua contra los dientes inferiores, la úvula vibra con el flujo de aire. Típica 'r' francesa.",
      "de": "Zungenspitze gegen untere Zähne, Zungenrücken gehoben, Luftstrom lässt das Zäpfchen vibrieren. Französisches 'r'."
    },
    "rules": [
      {
        "spell": "r, rr, rh",
        "cond": "",
        "examples": "rue, verre"
      },
      {
        "spell": "r",
        "cond": {
          "zh": "在词末",
          "en": "at the end of a word",
          "fr": "à la fin d'un mot",
          "es": "al final de la palabra",
          "de": "am Wortende"
        },
        "examples": "voir, finir"
      }
    ],
    "category": "consonant"
  },
  {
    "symbol": "ɛ̃",
    "desc": {
      "zh": "发音部位与 [ε] 相同，但气流从口腔和鼻腔冲出，构成鼻音。",
      "en": "Articulation same as [ε], but airflow goes through both mouth and nose forming a nasal sound.",
      "fr": "Même lieu d'articulation que [ε], mais l'air sort par la bouche et le nez (voyelle nasale).",
      "es": "Lugar de articulación igual a [ε], pero el aire sale por la boca y la nariz (vocal nasal).",
      "de": "Artikulationsort wie bei [ε], aber Luftstrom geht durch Mund und Nase (Nasalvokal)."
    },
    "rules": [
      {
        "spell": "in, im",
        "cond": "",
        "examples": "vin, impossible"
      },
      {
        "spell": "yn, ym",
        "cond": "",
        "examples": "syndicat, sympathique"
      },
      {
        "spell": "ain, aim",
        "cond": "",
        "examples": "pain, faim"
      },
      {
        "spell": "ein, eim",
        "cond": "",
        "examples": "plein, Reims"
      }
    ],
    "category": "nasal"
  },
  {
    "symbol": "œ̃",
    "desc": {
      "zh": "发音部位与 [oe] 相同，但气流从口腔或鼻腔冲出，构成鼻音。在现代法语中有逐步被 [ɛ̃] 替代的趋势。",
      "en": "Articulation same as [œ], but airflow goes through both mouth and nose. Increasingly replaced by [ɛ̃] in modern French.",
      "fr": "Même lieu d'articulation que [œ], mais nasal. Souvent remplacé par [ɛ̃] en français moderne.",
      "es": "Lugar de articulación igual a [œ], pero nasal. A menudo reemplazado por [ɛ̃] en francés moderno.",
      "de": "Artikulationsort wie bei [œ], aber nasal. Wird im modernen Französisch oft durch [ɛ̃] ersetzt."
    },
    "rules": [
      {
        "spell": "un",
        "cond": "",
        "examples": "aucun, brun, lundi"
      },
      {
        "spell": "um",
        "cond": "",
        "examples": "humble"
      },
      {
        "spell": "um",
        "cond": {
          "zh": "在少数词词末",
          "en": "at the end of a few words",
          "fr": "à la fin de quelques mots",
          "es": "al final de algunas palabras",
          "de": "am Ende einiger Wörter"
        },
        "examples": "parfum"
      },
      {
        "spell": "eun",
        "cond": {
          "zh": "在个别词中",
          "en": "in a few words",
          "fr": "dans quelques mots",
          "es": "en algunas palabras",
          "de": "in einigen Wörtern"
        },
        "examples": "à jeun"
      }
    ],
    "category": "nasal"
  },
  {
    "symbol": "ã",
    "desc": {
      "zh": "发音部位与 [a] 相近，但舌尖略向后缩，开口度稍大，气流从口腔或鼻腔冲出，构成鼻音。",
      "en": "Articulation close to [a], but tongue slightly retracted, mouth wider, airflow through mouth and nose.",
      "fr": "Lieu d'articulation proche de [a], mais langue légèrement reculée, nasal.",
      "es": "Lugar de articulación cercano a [a], pero nasal.",
      "de": "Artikulationsort nahe bei [a], aber Zunge leicht zurückgezogen, Nasalvokal."
    },
    "rules": [
      {
        "spell": "an, am",
        "cond": "",
        "examples": "dans, chanter, lampe, chambre"
      },
      {
        "spell": "en, em",
        "cond": "",
        "examples": "enfant, lent, temps, ensemble"
      },
      {
        "spell": "en + n",
        "cond": {
          "zh": "在词首",
          "en": "at the beginning of a word",
          "fr": "au début d'un mot",
          "es": "al principio de una palabra",
          "de": "am Wortanfang"
        },
        "examples": "enneiger"
      },
      {
        "spell": "em + m",
        "cond": {
          "zh": "在词首",
          "en": "at the beginning of a word",
          "fr": "au début d'un mot",
          "es": "al principio de una palabra",
          "de": "am Wortanfang"
        },
        "examples": "emménager, emmener"
      }
    ],
    "category": "nasal"
  },
  {
    "symbol": "ɔ̃",
    "desc": {
      "zh": "舌尖离开下齿，舌略向后缩，口型与 [o] 相同，气流从口腔和鼻腔冲出，构成鼻音。",
      "en": "Tongue slightly retracted, mouth shape same as [o], airflow through mouth and nose.",
      "fr": "Langue légèrement reculée, même ouverture que [o], nasal.",
      "es": "Lengua ligeramente retraída, misma apertura que [o], nasal.",
      "de": "Zunge leicht zurückgezogen, gleiche Mundöffnung wie [o], Nasalvokal."
    },
    "rules": [
      {
        "spell": "on",
        "cond": "",
        "examples": "mon, ton, bonjour"
      },
      {
        "spell": "om",
        "cond": "",
        "examples": "tomber, pompe, nom"
      }
    ],
    "category": "nasal"
  }
];
