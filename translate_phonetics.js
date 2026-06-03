const fs = require('fs');

const tsFilePath = './src/lib/phoneticsData.ts';
let code = fs.readFileSync(tsFilePath, 'utf8');

// We will extract the phoneticsData array
const match = code.match(/export const phoneticsData: PhoneticItem\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find phoneticsData array in TS file');
  process.exit(1);
}

let data;
try {
  // Use a hack to evaluate the TS array literal
  // we need to remove type assertions if any, but it's just plain JS objects mostly.
  const arrayStr = match[1];
  data = eval('(' + arrayStr + ')');
} catch (e) {
  console.error('Eval failed', e);
  process.exit(1);
}

const i18nDesc = {
  "i": {
    en: "Mouth opening is minimal, tongue tip pressed against lower teeth, lips flat and stretched sideways. Similar to English 'ee' in 'see', but more tense.",
    fr: "Ouverture minimale, pointe de la langue contre les dents inférieures, lèvres étirées. Très tendu.",
    es: "Apertura mínima, punta de la lengua contra los dientes inferiores, labios estirados. Similar a la 'i' en 'sí', pero más tensa.",
    de: "Minimale Mundöffnung, Zungenspitze gegen die unteren Zähne, Lippen gespreizt. Ähnlich dem 'ie' in 'sie', aber angespannter."
  },
  "e": {
    en: "Tongue tip pressed against lower teeth, lips flat, mouth slightly more open than [i]. Similar to English 'a' in 'gate', but mouth shape remains fixed.",
    fr: "Pointe de la langue contre les dents inférieures, lèvres plates, ouverture un peu plus grande que [i]. Comme le 'é' dans 'été'.",
    es: "Punta de la lengua contra los dientes inferiores, labios planos. Similar a la 'e' en 'elefante'.",
    de: "Zungenspitze gegen die unteren Zähne, Lippen flach. Ähnlich dem 'ee' in 'See', aber ohne Diphthongierung."
  },
  "ε": {
    en: "Mouth more open than [e], tongue tip flat against lower teeth. Do not confuse with English 'ay' diphthong. Similar to 'e' in 'bed'.",
    fr: "Ouverture plus grande que [e], pointe de la langue contre les dents inférieures. Comme le 'è' dans 'mère'.",
    es: "Boca más abierta que [e]. Similar a una 'e' abierta en español.",
    de: "Mund offener als bei [e]. Ähnlich dem 'ä' in 'März'."
  },
  "a": {
    en: "Tongue flat, mouth naturally open, lips slightly tense. Similar to 'a' in 'father'.",
    fr: "Langue plate, bouche naturellement ouverte, lèvres légèrement tendues. Comme le 'a' dans 'papa'.",
    es: "Lengua plana, boca abierta naturalmente. Similar a la 'a' en 'padre'.",
    de: "Zunge flach, Mund natürlich geöffnet. Ähnlich dem 'a' in 'Vater'."
  },
  "u": {
    en: "Tongue retracted, lips protruded and rounded, mouth nearly closed. Similar to 'oo' in 'boot', but lips are much tenser.",
    fr: "Langue en arrière, lèvres projetées et arrondies, bouche presque fermée. Comme le 'ou' dans 'vous'.",
    es: "Lengua retraída, labios protruidos y redondeados. Similar a la 'u' en 'tú', pero más tensa.",
    de: "Zunge zurückgezogen, Lippen vorgestülpt und gerundet. Ähnlich dem 'u' in 'Mut', aber angespannter."
  },
  "o": {
    en: "Tongue slightly retracted, lips protruded, mouth very round, very small opening. Similar to 'o' in 'boat' but purely monophthongal.",
    fr: "Langue légèrement en arrière, lèvres projetées, bouche très ronde, ouverture très petite. Comme le 'o' dans 'mot'.",
    es: "Lengua ligeramente retraída, labios protruidos, boca muy redonda. Similar a la 'o' cerrada.",
    de: "Zunge leicht zurückgezogen, Lippen vorgestülpt, Mund sehr rund. Ähnlich dem 'o' in 'Boot'."
  },
  "ɔ": {
    en: "Tongue slightly retracted, lips protruded forming a circle, mouth wider open than [o]. Similar to 'o' in 'bore'.",
    fr: "Langue légèrement en arrière, lèvres projetées, ouverture plus grande que [o]. Comme le 'o' dans 'porte'.",
    es: "Lengua ligeramente retraída, labios redondeados, boca más abierta que [o]. Similar a la 'o' abierta.",
    de: "Zunge leicht zurückgezogen, Lippen gerundet, Mund weiter offen. Ähnlich dem 'o' in 'Sonne'."
  },
  "y": {
    en: "Tongue position and opening similar to [i], but lips protruded and rounded tightly. Similar to French 'u' or German 'ü'.",
    fr: "Position de la langue et ouverture proches de [i], mais les lèvres sont arrondies et tendues. Comme dans 'tu'.",
    es: "Posición de la lengua como la [i], pero con labios redondeados y protruidos. Como la 'ü' alemana o 'u' francesa.",
    de: "Zungenposition und Öffnung wie bei [i], aber Lippen vorgestülpt und eng gerundet. Ähnlich dem 'ü' in 'über'."
  },
  "ø": {
    en: "Tongue position and opening like [e], but lips protruded and rounded, moderately tense. Similar to German 'ö'.",
    fr: "Pointe de la langue et ouverture identiques à [e], lèvres arrondies et projetées, assez tendu. Comme dans 'jeu'.",
    es: "Posición de la lengua como la [e], pero labios redondeados. Similar a la 'ö' alemana.",
    de: "Zungenposition und Öffnung wie bei [e], aber Lippen vorgestülpt und gerundet. Ähnlich dem 'ö' in 'schön'."
  },
  "œ": {
    en: "Tongue position and opening like [ε], but lips protruded and rounded, muscles relaxed. Similar to German short 'ö'.",
    fr: "Position de la langue et ouverture identiques à [ε], lèvres arrondies et projetées, muscles relâchés. Comme dans 'fleur'.",
    es: "Posición de la lengua como la [ε], pero labios redondeados, músculos relajados.",
    de: "Zungenposition und Öffnung wie bei [ε], Lippen gerundet. Ähnlich dem kurzen 'ö' in 'können'."
  },
  "ə": {
    en: "Tongue position and opening close to [ε], muscles relaxed, lips rounded. Pronounced without effort. Similar to 'a' in 'about'.",
    fr: "Position de la langue et ouverture proches de [ε], muscles relâchés, lèvres arrondies. Prononcé sans effort. Comme le 'e' muet.",
    es: "Posición de la lengua y apertura cercanas a [ε], músculos relajados, labios redondeados. Pronunciado sin esfuerzo.",
    de: "Zungenposition und Öffnung ähnlich wie [ε], Muskeln entspannt, Lippen gerundet. Ähnlich dem 'e' in 'bitte'."
  },
  "ɥ": {
    en: "Articulation and opening basically the same as [y], but very short, muscles tenser, narrow airflow with slight friction.",
    fr: "Lieu d'articulation et ouverture comme [y], mais prononcé très brièvement, muscles tendus, léger frottement.",
    es: "Articulación y apertura como [y], pero muy breve, músculos tensos, fricción leve.",
    de: "Artikulation und Öffnung wie bei [y], aber sehr kurz, angespannter, leichter Reibelaut."
  },
  "w": {
    en: "Articulation and opening basically the same as [u], but very short, muscles tenser, narrow airflow with slight friction. Like English 'w'.",
    fr: "Lieu d'articulation et ouverture comme [u], mais prononcé très brièvement, muscles tendus, léger frottement. Comme le 'w' anglais.",
    es: "Articulación y apertura como [u], pero muy breve, músculos tensos. Similar a la 'w' en inglés.",
    de: "Artikulation und Öffnung wie bei [u], aber sehr kurz und angespannt. Ähnlich dem englischen 'w'."
  },
  "j": {
    en: "Articulation and opening same as [i], but very short, muscles tenser, narrow airflow with slight friction. Like English 'y' in 'yes'.",
    fr: "Lieu d'articulation et ouverture comme [i], mais très bref, muscles tendus, frottement. Comme le 'y' dans 'yeux'.",
    es: "Articulación y apertura como [i], pero muy breve, músculos tensos. Similar a la 'y' en 'yes'.",
    de: "Artikulation und Öffnung wie bei [i], aber sehr kurz und angespannt. Ähnlich dem deutschen 'j' in 'ja'."
  },
  "p": {
    en: "Lips closed forming an obstruction, airflow bursts out. Vocal cords do not vibrate. Unaspirated before vowels (unlike English 'p' in 'pot'), aspirated at word ends.",
    fr: "Lèvres fermées, l'air s'échappe soudainement. Les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
    es: "Labios cerrados, el aire sale de golpe. Las cuerdas vocales no vibran. No aspirada ante vocales.",
    de: "Lippen geschlossen, Luft strömt plötzlich aus. Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
  },
  "b": {
    en: "Articulation similar to [p], but vocal cords vibrate and very little air is expelled. Like English 'b'.",
    fr: "Même articulation que [p], mais les cordes vocales vibrent et peu d'air s'échappe.",
    es: "Articulación similar a [p], pero las cuerdas vocales vibran. Como la 'b' en español.",
    de: "Ähnliche Artikulation wie [p], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'b'."
  },
  "t": {
    en: "Tongue tip against upper teeth, vocal cords do not vibrate. Unaspirated before vowels (unlike English 't' in 'top').",
    fr: "Pointe de la langue contre les dents supérieures, les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
    es: "Punta de la lengua contra los dientes superiores. Las cuerdas vocales no vibran. No aspirada.",
    de: "Zungenspitze gegen obere Zähne, Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
  },
  "d": {
    en: "Articulation similar to [t], but vocal cords vibrate and very little air is expelled. Like English 'd'.",
    fr: "Même articulation que [t], mais les cordes vocales vibrent et peu d'air s'échappe.",
    es: "Articulación similar a [t], pero las cuerdas vocales vibran. Como la 'd' en español.",
    de: "Ähnliche Artikulation wie [t], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'd'."
  },
  "k": {
    en: "Back of tongue against hard palate, vocal cords do not vibrate. Unaspirated before vowels (unlike English 'k').",
    fr: "Dos de la langue contre le palais dur, les cordes vocales ne vibrent pas. Non aspiré devant les voyelles.",
    es: "Dorso de la lengua contra el paladar duro. Las cuerdas vocales no vibran. No aspirada.",
    de: "Zungenrücken gegen harten Gaumen, Stimmbänder vibrieren nicht. Unbehaucht vor Vokalen."
  },
  "g": {
    en: "Articulation same as [k], but vocal cords must vibrate. Like English 'g' in 'go'.",
    fr: "Même articulation que [k], mais les cordes vocales vibrent.",
    es: "Articulación igual a [k], pero las cuerdas vocales vibran. Como la 'g' en español 'gato'.",
    de: "Artikulation wie bei [k], aber Stimmbänder vibrieren. Ähnlich dem deutschen 'g' in 'gut'."
  },
  "f": {
    en: "Upper teeth against lower lip, airflow creates friction. Like English 'f'.",
    fr: "Dents supérieures contre la lèvre inférieure, l'air crée une friction. Comme le 'f' français.",
    es: "Dientes superiores contra el labio inferior, el flujo de aire crea fricción. Como la 'f' en español.",
    de: "Obere Zähne gegen Unterlippe, Luftstrom erzeugt Reibung. Wie das deutsche 'f'."
  },
  "v": {
    en: "Articulation same as [f], but vocal cords vibrate. Do not confuse with 'w' or 'u'. Like English 'v'.",
    fr: "Même articulation que [f], mais les cordes vocales vibrent. Ne pas confondre avec 'w'.",
    es: "Articulación igual a [f], pero las cuerdas vocales vibran. Como la 'v' fricativa.",
    de: "Artikulation wie bei [f], aber Stimmbänder vibrieren. Wie das deutsche 'w' in 'Wasser'."
  },
  "s": {
    en: "Tongue tip against lower teeth, front of tongue forms a gap with palate, airflow creates friction. Like English 's'.",
    fr: "Pointe de la langue contre les dents inférieures, l'air crée une friction. Comme le 's' français dans 'si'.",
    es: "Punta de la lengua contra los dientes inferiores, el flujo de aire crea fricción. Como la 's' en español.",
    de: "Zungenspitze gegen untere Zähne, Luftstrom erzeugt Reibung. Wie das deutsche stimmlose 's' in 'Fass'."
  },
  "z": {
    en: "Articulation same as [s], but vocal cords vibrate. Like English 'z'.",
    fr: "Même articulation que [s], mais les cordes vocales vibrent. Comme le 'z' français.",
    es: "Articulación igual a [s], pero las cuerdas vocales vibran. Como la 'z' en inglés.",
    de: "Artikulation wie bei [s], aber Stimmbänder vibrieren. Wie das deutsche stimmhafte 's' in 'Sonne'."
  },
  "ʃ": {
    en: "Tongue tip raised to upper alveolar ridge forming a gap, lips slightly protruded and rounded. Like English 'sh'.",
    fr: "Pointe de la langue soulevée vers les alvéoles supérieures, lèvres légèrement projetées. Comme le 'ch' français.",
    es: "Punta de la lengua elevada hacia los alvéolos, labios ligeramente protruidos. Como la 'sh' en inglés.",
    de: "Zungenspitze zum oberen Zahndamm gehoben, Lippen leicht vorgestülpt. Wie das deutsche 'sch'."
  },
  "ʒ": {
    en: "Articulation same as [ʃ], but vocal cords vibrate. Like 's' in English 'measure'.",
    fr: "Même articulation que [ʃ], mais les cordes vocales vibrent. Comme le 'j' dans 'jour'.",
    es: "Articulación igual a [ʃ], pero las cuerdas vocales vibran. Como la 's' en 'measure' (inglés) o 'll' en Argentina.",
    de: "Artikulation wie bei [ʃ], aber Stimmbänder vibrieren. Wie das 'G' in 'Genie'."
  },
  "l": {
    en: "Tongue tip against upper alveolar ridge, vocal cords vibrate, air flows around the sides of the tongue. Like English 'l'.",
    fr: "Pointe de la langue contre les alvéoles supérieures, les cordes vocales vibrent, l'air s'écoule par les côtés.",
    es: "Punta de la lengua contra los alvéolos superiores, las cuerdas vocales vibran. Como la 'l' en español.",
    de: "Zungenspitze gegen den oberen Zahndamm, Stimmbänder vibrieren. Wie das deutsche 'l'."
  },
  "m": {
    en: "Lips tightly closed, soft palate lowered, air flows through the nose. Like English 'm'.",
    fr: "Lèvres fermées, voile du palais abaissé, l'air s'écoule par le nez. Comme le 'm' français.",
    es: "Labios cerrados, velo del paladar bajado, el aire sale por la nariz. Como la 'm' en español.",
    de: "Lippen geschlossen, Gaumensegel gesenkt, Luft strömt durch die Nase. Wie das deutsche 'm'."
  },
  "n": {
    en: "Tongue tip against upper alveolar ridge, soft palate lowered, air flows through the nose. Like English 'n'.",
    fr: "Pointe de la langue contre les alvéoles supérieures, l'air s'écoule par le nez. Comme le 'n' français.",
    es: "Punta de la lengua contra los alvéolos superiores, el aire sale por la nariz. Como la 'n' en español.",
    de: "Zungenspitze gegen den oberen Zahndamm, Gaumensegel gesenkt. Wie das deutsche 'n'."
  },
  "ɲ": {
    en: "Tongue tip against lower teeth, middle of tongue raised against hard palate, air flows through the nose. Like Spanish 'ñ'.",
    fr: "Milieu de la langue soulevé contre le palais dur, l'air s'écoule par le nez. Comme le 'gn' dans 'montagne'.",
    es: "Centro de la lengua elevado contra el paladar duro, el aire sale por la nariz. Igual a la 'ñ' en español.",
    de: "Zungenmitte gegen den harten Gaumen gehoben, Luft strömt durch die Nase. Ähnlich dem 'gn' in 'Cognac'."
  },
  "ʁ": {
    en: "Tongue tip against lower teeth, back of tongue raised, airflow makes the uvula vibrate. Relax the throat to produce the French 'r'.",
    fr: "Pointe de la langue contre les dents inférieures, dos de la langue soulevé, l'air fait vibrer la luette. R français.",
    es: "Punta de la lengua contra los dientes inferiores, la úvula vibra con el flujo de aire. Típica 'r' francesa.",
    de: "Zungenspitze gegen untere Zähne, Zungenrücken gehoben, Luftstrom lässt das Zäpfchen vibrieren. Französisches 'r'."
  },
  "ɛ̃": {
    en: "Articulation same as [ε], but airflow goes through both mouth and nose forming a nasal sound.",
    fr: "Même lieu d'articulation que [ε], mais l'air sort par la bouche et le nez (voyelle nasale).",
    es: "Lugar de articulación igual a [ε], pero el aire sale por la boca y la nariz (vocal nasal).",
    de: "Artikulationsort wie bei [ε], aber Luftstrom geht durch Mund und Nase (Nasalvokal)."
  },
  "œ̃": {
    en: "Articulation same as [œ], but airflow goes through both mouth and nose. Increasingly replaced by [ɛ̃] in modern French.",
    fr: "Même lieu d'articulation que [œ], mais nasal. Souvent remplacé par [ɛ̃] en français moderne.",
    es: "Lugar de articulación igual a [œ], pero nasal. A menudo reemplazado por [ɛ̃] en francés moderno.",
    de: "Artikulationsort wie bei [œ], aber nasal. Wird im modernen Französisch oft durch [ɛ̃] ersetzt."
  },
  "ã": {
    en: "Articulation close to [a], but tongue slightly retracted, mouth wider, airflow through mouth and nose.",
    fr: "Lieu d'articulation proche de [a], mais langue légèrement reculée, nasal.",
    es: "Lugar de articulación cercano a [a], pero nasal.",
    de: "Artikulationsort nahe bei [a], aber Zunge leicht zurückgezogen, Nasalvokal."
  },
  "ɔ̃": {
    en: "Tongue slightly retracted, mouth shape same as [o], airflow through mouth and nose.",
    fr: "Langue légèrement reculée, même ouverture que [o], nasal.",
    es: "Lengua ligeramente retraída, misma apertura que [o], nasal.",
    de: "Zunge leicht zurückgezogen, gleiche Mundöffnung wie [o], Nasalvokal."
  }
};

const i18nCond = {
  "在词末": { en: "at the end of a word", fr: "à la fin d'un mot", es: "al final de la palabra", de: "am Wortende" },
  "在少数单音节词中": { en: "in some single-syllable words", fr: "dans certains mots monosyllabiques", es: "en algunas palabras monosílabas", de: "in einigen einsilbigen Wörtern" },
  "在闭音节中": { en: "in closed syllables", fr: "en syllabe fermée", es: "en sílabas cerradas", de: "in geschlossenen Silben" },
  "在词中": { en: "in the middle of a word", fr: "au milieu d'un mot", es: "en medio de una palabra", de: "in der Mitte eines Wortes" },
  "个别外来语中": { en: "in a few loanwords", fr: "dans quelques mots d'emprunt", es: "en algunos préstamos", de: "in einigen Lehnwörtern" },
  "在词末开音节中": { en: "at the end of open syllables", fr: "à la fin des syllabes ouvertes", es: "al final de sílabas abiertas", de: "am Ende offener Silben" },
  "在 [z] 前": { en: "before [z]", fr: "devant [z]", es: "antes de [z]", de: "vor [z]" },
  "在大多数词中": { en: "in most words", fr: "dans la plupart des mots", es: "en la mayoría de las palabras", de: "in den meisten Wörtern" },
  "在词末读 [ɔm]": { en: "pronounced [ɔm] at the end of a word", fr: "prononcé [ɔm] à la fin d'un mot", es: "pronunciado [ɔm] al final de una palabra", de: "am Wortende als [ɔm] ausgesprochen" },
  "在 [z][t][d] 音前": { en: "before [z], [t], [d]", fr: "devant les sons [z], [t], [d]", es: "antes de los sonidos [z], [t], [d]", de: "vor den Lauten [z], [t], [d]" },
  "在多数情况下": { en: "in most cases", fr: "dans la plupart des cas", es: "en la mayoría de los casos", de: "in den meisten Fällen" },
  "在个别词中": { en: "in a few words", fr: "dans quelques mots", es: "en algunas palabras", de: "in einigen Wörtern" },
  "在 c 或 g 后读 [œj]": { en: "pronounced [œj] after c or g", fr: "prononcé [œj] après c ou g", es: "pronunciado [œj] después de c o g", de: "nach c oder g als [œj] ausgesprochen" },
  "在少数单音节词词末": { en: "at the end of a few single-syllable words", fr: "à la fin de quelques mots monosyllabiques", es: "al final de algunas palabras monosílabas", de: "am Ende einiger einsilbiger Wörter" },
  "两个辅音 + e + 辅音": { en: "between two consonants", fr: "entre deux consonnes", es: "entre dos consonantes", de: "zwischen zwei Konsonanten" },
  "在词首开音节中": { en: "at the beginning of open syllables", fr: "au début des syllabes ouvertes", es: "al principio de sílabas abiertas", de: "am Anfang offener Silben" },
  "在 faire 的某些变位中": { en: "in some conjugations of 'faire'", fr: "dans certaines conjugaisons de 'faire'", es: "en algunas conjugaciones de 'faire'", de: "in einigen Konjugationen von 'faire'" },
  "u + 元音": { en: "u + vowel", fr: "u + voyelle", es: "u + vocal", de: "u + Vokal" },
  "ou + 元音": { en: "ou + vowel", fr: "ou + voyelle", es: "ou + vocal", de: "ou + Vokal" },
  "在外来语中": { en: "in loanwords", fr: "dans les mots d'emprunt", es: "en los préstamos", de: "in Lehnwörtern" },
  "读 [wa]": { en: "pronounced [wa]", fr: "prononcé [wa]", es: "pronunciado [wa]", de: "als [wa] ausgesprochen" },
  "读 [wɛ̃]": { en: "pronounced [wɛ̃]", fr: "prononcé [wɛ̃]", es: "pronunciado [wɛ̃]", de: "als [wɛ̃] ausgesprochen" },
  "在元音前": { en: "before a vowel", fr: "devant une voyelle", es: "antes de una vocal", de: "vor einem Vokal" },
  "元音 + il": { en: "vowel + il", fr: "voyelle + il", es: "vocal + il", de: "Vokal + il" },
  "元音 + ill + 元音字母": { en: "vowel + ill + vowel", fr: "voyelle + ill + voyelle", es: "vocal + ill + vocal", de: "Vokal + ill + Vokal" },
  "辅音 + ill + 元音": { en: "consonant + ill + vowel", fr: "consonne + ill + voyelle", es: "consonante + ill + vocal", de: "Konsonant + ill + Vokal" },
  "读 [ij]": { en: "pronounced [ij]", fr: "prononcé [ij]", es: "pronunciado [ij]", de: "als [ij] ausgesprochen" },
  "oy + 元音": { en: "oy + vowel", fr: "oy + voyelle", es: "oy + vocal", de: "oy + Vokal" },
  "读 [waj]": { en: "pronounced [waj]", fr: "prononcé [waj]", es: "pronunciado [waj]", de: "als [waj] ausgesprochen" },
  "ay, ey + 元音字母": { en: "ay, ey + vowel", fr: "ay, ey + voyelle", es: "ay, ey + vocal", de: "ay, ey + Vokal" },
  "读 [εj]": { en: "pronounced [εj]", fr: "prononcé [εj]", es: "pronunciado [εj]", de: "als [εj] ausgesprochen" },
  "在联诵时": { en: "in liaison", fr: "en liaison", es: "en liaison", de: "in Liaison" },
  "在 a, o, u 之前": { en: "before a, o, u", fr: "devant a, o, u", es: "antes de a, o, u", de: "vor a, o, u" },
  "在辅音字母之前": { en: "before a consonant", fr: "devant une consonne", es: "antes de una consonante", de: "vor einem Konsonanten" },
  "在 e, i 前读 [ks]": { en: "pronounced [ks] before e, i", fr: "prononcé [ks] devant e, i", es: "pronunciado [ks] antes de e, i", de: "als [ks] ausgesprochen vor e, i" },
  "读 [ks]": { en: "pronounced [ks]", fr: "prononcé [ks]", es: "pronunciado [ks]", de: "als [ks] ausgesprochen" },
  "在 a, o, u 或辅音字母前": { en: "before a, o, u or consonant", fr: "devant a, o, u ou consonne", es: "antes de a, o, u o consonante", de: "vor a, o, u oder Konsonant" },
  "在少数词的词末": { en: "at the end of a few words", fr: "à la fin de quelques mots", es: "al final de algunas palabras", de: "am Ende einiger Wörter" },
  "在 e, i, y 之前": { en: "before e, i, y", fr: "devant e, i, y", es: "antes de e, i, y", de: "vor e, i, y" },
  "在少数词中": { en: "in a few words", fr: "dans quelques mots", es: "en algunas palabras", de: "in einigen Wörtern" },
  "不在两个元音字母之间": { en: "not between two vowels", fr: "pas entre deux voyelles", es: "no entre dos vocales", de: "nicht zwischen zwei Vokalen" },
  "在两个元音字母之间": { en: "between two vowels", fr: "entre deux voyelles", es: "entre dos vocales", de: "zwischen zwei Vokalen" },
  "在 i, e, y 前": { en: "before i, e, y", fr: "devant i, e, y", es: "antes de i, e, y", de: "vor i, e, y" },
  "在 a, o 前": { en: "before a, o", fr: "devant a, o", es: "antes de a, o", de: "vor a, o" },
  "在词首": { en: "at the beginning of a word", fr: "au début d'un mot", es: "al principio de una palabra", de: "am Wortanfang" },
  "在少数词词末": { en: "at the end of a few words", fr: "à la fin de quelques mots", es: "al final de algunas palabras", de: "am Ende einiger Wörter" }
};

// Now loop and update data
for (let item of data) {
  let zhDesc = typeof item.desc === 'string' ? item.desc : item.desc.zh;
  let t = i18nDesc[item.symbol];
  if (!t) {
    // fallback
    t = {
      en: zhDesc, fr: zhDesc, es: zhDesc, de: zhDesc
    };
  }
  item.desc = {
    zh: zhDesc,
    en: t.en,
    fr: t.fr,
    es: t.es,
    de: t.de
  };

  if (item.rules) {
    for (let rule of item.rules) {
      if (rule.cond) {
        let condZh = typeof rule.cond === 'string' ? rule.cond : rule.cond.zh;
        let c = i18nCond[condZh];
        if (!c) {
          c = { en: condZh, fr: condZh, es: condZh, de: condZh };
        }
        rule.cond = {
          zh: condZh,
          en: c.en,
          fr: c.fr,
          es: c.es,
          de: c.de
        };
      }
    }
  }
}

let newContent = `export type MultilingualString = {
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

export const phoneticsData: PhoneticItem[] = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync(tsFilePath, newContent, 'utf8');
console.log('Successfully updated phoneticsData.ts');
