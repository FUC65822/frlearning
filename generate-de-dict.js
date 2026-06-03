const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const enData = JSON.parse(fs.readFileSync(path.join(dictsPath, 'en.json'), 'utf8'));

// Deep copy EN to start
const deData = JSON.parse(JSON.stringify(enData));

// Translate top-level sections
deData.common = {
  aiTranslationNotice: "Teilweise von KI übersetzt, kann ungenau sein",
  language: "Sprache",
  close: "Schließen"
};
deData.nav = {
  home: "FrLearning Startseite",
  solutions: "Lösungen",
  resources: "Ressourcen",
  contact: "Kontakt",
  viewEntry: "Eintrag ansehen"
};
deData.hero = {
  tag: "Modernes Französisch-Lernsystem für Einzelpersonen & Teams",
  title1: "Entdecken, Lernen, Meistern:",
  title2: "Ihr exklusiver Leitfaden für Französisch",
  desc: "Wir bündeln hochwertige systematische Kurse, immersive kulturelle Erlebnisse und intelligente digitale Tools, um Einzellernern und Unternehmen eine Komplettlösung von null auf fließend zu bieten.",
  primaryBtn: "Lösungen ansehen",
  secondaryBtn: "Lernressourcen",
  metrics: {
    m1: "Lernmodule",
    m2: "Spracheingänge",
    m3: "Online-Zugriffe"
  },
  featureTitle: "Panoramisches Lern-Ökosystem",
  featureDesc: "Brechen Sie den Engpass des fragmentierten Lernens durch klare logische Verbindungen auf, damit jeder Klick zählt."
};
deData.solutions = {
  tag: "Lösungen",
  title: "Präzises Matching für vielfältige Lernbedürfnisse",
  desc: "Egal, ob aus Interesse, zur beruflichen Weiterentwicklung oder als Vorbereitung für ein Leben im Ausland – unser strukturiertes System hilft Ihnen, Ihre Ziele effizient zu erreichen.",
  items: [
    { title: "Französisch-Training für Unternehmen", desc: "Konzipiert rund um Teamrollen, Kommunikationsszenarien und kulturellen Hintergrund, geeignet für grenzüberschreitendes Geschäft und interne Schulungen." },
    { title: "Systematischer Selbstlernpfad", desc: "Von Zahlen, Wetter und Einkaufsvokabular bis hin zum Lesen von Texten und zivilisatorischen Themen – hilft Lernenden, stetig voranzukommen." },
    { title: "Kulturelles Verständnis", desc: "Verbindet das Sprachenlernen mit der französischen Gesellschaft, Kunst, Geografie und Lebensart für natürlichere Ausdrücke." }
  ]
};
deData.method = {
  tag: "Methode",
  title: "Von den Grundlagen bis zum kulturellen Ausdruck",
  items: [
    "Organisiert nach realen Kommunikationsszenarien",
    "Gleichgewicht zwischen Sprachgrundlagen und Kultur",
    "Geeignet für Selbststudium und Team-Schulungen",
    "Schafft ein nahtloses digitales Lern-Ökosystem"
  ]
};
deData.resources = {
  tag: "Ressourcen",
  title: "Klare Zugänge zu bestehenden Lernmitteln",
  desc: "Plattformen, Apps, Themenkurse und praktische Ausdrücke in einem Ressourcenbereich, um die Suchkosten zu minimieren.",
  btn: "Textthemen",
  civiTitle: "Französische Zivilisation",
  civiDesc: "Inhalte zu Gesellschaft, Kunst und Lebensstil",
  items: [
    { title: "LinguaX Offizielle Plattform", desc: "Professionelles Französisch-Training und Übersetzungsportal" },
    { title: "Français APP", desc: "Vokabeltraining durch aktive Erinnerung" },
    { title: "Wetterausdrücke", desc: "Vokabular für alltägliche Wettergespräche" },
    { title: "Zahlen lernen", desc: "Übung der französischen Zahlen in Wort und Schrift" },
    { title: "Einkaufsvokabular", desc: "Ausdrücke für verschiedene Geschäfte und Einkäufe" }
  ]
};
deData.features = {
  title: "Mehr als nur Kurse – eine Brücke zur frankophonen Welt",
  desc: "Wir glauben, dass Sprachenlernen nicht bei Grammatik und Vokabeln aufhören sollte. Durch die tiefe Integration einer rigorosen Lehrmethode mit reichhaltiger französischer Kultur bieten wir eine wirklich immersive Lernerfahrung.",
  f1Title: "Begleitender Wachstumspfad",
  f1Desc: "Von der anfänglichen Aussprache bis zum fortgeschrittenen Lesen deckt unser strukturiertes Inhaltsdesign alle Ebenen ab.",
  f2Title: "Effizientes Wissensmanagement",
  f2Desc: "Sorgfältig kategorisierte Module und intelligente Wiederholungstools sorgen für ein stärkeres Gedächtnis.",
  f3Title: "Authentische Kontext-Immersion",
  f3Desc: "Alle Übungen sind im realen französischen gesellschaftlichen und kulturellen Hintergrund verwurzelt."
};
deData.footer = {
  desc: "Moderne Französisch-Lernressourcen und Lehrtools für systematisches Lernen, kulturelles Verständnis und praktisches Kommunikationstraining.",
  nav: "Schnellnavigation",
  contact: "Kontakt & Support"
};
deData.modal = {
  civiTitle: "Französische Zivilisation",
  textTitle: "Lektionsthemen",
  civiLink: "Kurs Civi11",
  textLink: "Lektion 11",
  soon: "Weitere Inhalte in Vorbereitung"
};

// Translate subpages
deData.subPages.common = {
  backHome: "Zurück zur Startseite",
  submit: "Antworten senden",
  tryAgain: "Nochmal versuchen",
  check: "Prüfen",
  next: "Nächste",
  showAnswers: "Antworten anzeigen",
  hideAnswers: "Antworten verbergen",
  perfect: "🎉 Perfekt! Alles richtig!",
  score: "Punkte",
  correct: "Richtig",
  wrong: "Falsch",
  listen: "Anhören"
};

deData.subPages.temps.title = "Wetterausdrücke (Le temps)";
deData.subPages.temps.desc = "Lernen Sie das französische Wettervokabular, um Ihre tägliche Kommunikation zu verbessern.";
deData.subPages.temps.categories.title = "Wetterkategorien";
deData.subPages.temps.categories.sunny = "Sonnig";
deData.subPages.temps.categories.cloudy = "Bewölkt";
deData.subPages.temps.categories.rainy = "Regnerisch";
deData.subPages.temps.categories.items = {
  sun: "Sonne", sunny: "Sonnig", fine: "Schönes Wetter",
  cloud: "Wolke", cloudy: "Bewölkt", hasClouds: "Es gibt Wolken",
  rain: "Regen", raining: "Es regnet", shower: "Schauer"
};
deData.subPages.temps.expressions.title = "Spezifische Ausdrücke";
deData.subPages.temps.expressions.q1 = "Wie ist das Wetter heute?";
deData.subPages.temps.expressions.q2 = "Es ist eiskalt.";
deData.subPages.temps.quiz.title = "Vokabel-Herausforderung";
deData.subPages.temps.quiz.q1 = "Quiz 1: Grundlagen";
deData.subPages.temps.quiz.q2 = "Quiz 2: Fortgeschritten";
deData.subPages.temps.quiz.q3 = "Quiz 3: Redewendungen";
// We can leave the actual quiz answers in English or auto-translate them. We'll translate the questions:
deData.subPages.temps.quiz.questions[0][0].q = '1. Welches Wetter beschreibt "Le ciel est couvert"?';
deData.subPages.temps.quiz.questions[0][0].ops = ['Klarer Himmel', 'Bedeckter, wolkiger Himmel', 'Gewitter', 'Neblig'];
deData.subPages.temps.quiz.questions[0][0].a = 'Bedeckter, wolkiger Himmel';
deData.subPages.temps.quiz.questions[0][1].q = '2. Was bedeutet "La bruine"?';
deData.subPages.temps.quiz.questions[0][1].ops = ['Starker Regen', 'Schauer', 'Nieselregen', 'Gewitter'];
deData.subPages.temps.quiz.questions[0][1].a = 'Nieselregen';
deData.subPages.temps.quiz.questions[0][2].q = '3. Übersetzen Sie "Die Sonne kommt heraus" ins Französische.';
deData.subPages.temps.quiz.questions[0][3].q = '4. Übersetzen Sie "Il fait chaud" ins Deutsche.';
deData.subPages.temps.quiz.questions[0][3].a = ['Es ist heiß', 'heiß'];

deData.subPages.temps.quiz.questions[1][0].q = '1. Wenn der Wetterbericht "Attention au verglas" sagt, achten Sie auf:';
deData.subPages.temps.quiz.questions[1][0].ops = ['Starker Wind', 'Glatteis', 'Dichter Nebel', 'Hitzewelle'];
deData.subPages.temps.quiz.questions[1][0].a = 'Glatteis';
deData.subPages.temps.quiz.questions[1][1].q = '2. Was bedeutet "Une rafale de vent"?';
deData.subPages.temps.quiz.questions[1][1].ops = ['Brise', 'Ein Windstoß', 'Tornado', 'Warmer Wind'];
deData.subPages.temps.quiz.questions[1][1].a = 'Ein Windstoß';
deData.subPages.temps.quiz.questions[1][2].q = '3. Übersetzen Sie "Blitz" ins Französische.';
deData.subPages.temps.quiz.questions[1][3].q = '4. Übersetzen Sie "Le temps est orageux" ins Deutsche.';
deData.subPages.temps.quiz.questions[1][3].a = ['Stürmisches Wetter', 'Gewitter', 'Stürmisch'];

deData.subPages.temps.quiz.questions[2][0].q = '1. Was bedeutet "Il fait un soleil de plomb"?';
deData.subPages.temps.quiz.questions[2][0].ops = ['Düster', 'Brennende Sonne', 'Nieselnd', 'Windig'];
deData.subPages.temps.quiz.questions[2][0].a = 'Brennende Sonne';
deData.subPages.temps.quiz.questions[2][1].q = '2. Was bedeutet "Il pleut des cordes"?';
deData.subPages.temps.quiz.questions[2][1].ops = ['Leichter Regen', 'Sonnig', 'Hagel', 'Strömender Regen'];
deData.subPages.temps.quiz.questions[2][1].a = 'Strömender Regen';
deData.subPages.temps.quiz.questions[2][2].q = '3. "Il fait un froid de canard" beschreibt das Wetter als:';
deData.subPages.temps.quiz.questions[2][2].ops = ['Kühl', 'Warm', 'Extrem kalt', 'Schwül'];
deData.subPages.temps.quiz.questions[2][2].a = 'Extrem kalt';
deData.subPages.temps.quiz.questions[2][3].q = '4. Übersetzen Sie "Es wird morgen schneien" ins Französische.';


deData.subPages.number.title = "Alles über Zahlen (Les Nombres)";
deData.subPages.number.desc = "Meistern Sie französische Zahlen für Einkäufe, Uhrzeiten und Jahreszahlen.";
deData.subPages.number.structTitle = "Struktur der französischen Zahlen";
deData.subPages.number.basic = "Grundzahlen (0-20)";
deData.subPages.number.special = "Sonderregeln: 70, 80, 90";
deData.subPages.number.s70 = { t: "70-79 (Basis 60)", d: "60 + (10-19). Bsp. 70 ist soixante-dix." };
deData.subPages.number.s80 = { t: "80-89 (Basis 20)", d: "Vier mal 20. Bsp. 80 ist quatre-vingts." };
deData.subPages.number.s90 = { t: "90-99 (Ergänzung zu 80)", d: "80 + (10-19). Bsp. 90 ist quatre-vingt-dix." };
deData.subPages.number.quizTitle = "Zahlen-Herausforderung";
deData.subPages.number.placeholder = "Französische Schreibweise...";
deData.subPages.number.timeDate = "Zeit und Datum";
deData.subPages.number.days = "Tage (Les Jours)";
deData.subPages.number.months = "Monate (Les Mois)";
deData.subPages.number.seasons = "Jahreszeiten (Les Saisons)";
deData.subPages.number.daysList = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
deData.subPages.number.monthsList = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
deData.subPages.number.seasonsList = [{fr: "le printemps", zh: "Frühling", p: "au printemps"}, {fr: "l'été", zh: "Sommer", p: "en été"}, {fr: "l'automne", zh: "Herbst", p: "en automne"}, {fr: "l'hiver", zh: "Winter", p: "en hiver"}];

deData.subPages.magasin.title = "Einkaufsführer (Faire les Courses)";
deData.subPages.magasin.desc = "Einkaufen wie ein Einheimischer mit wichtigem Vokabular und Dialogen.";
deData.subPages.magasin.shopType = "Arten von Geschäften";
deData.subPages.magasin.shops[0].cat = "Essen & Trinken";
deData.subPages.magasin.shops[0].items = [{fr: "Boulangerie", zh: "Bäckerei"}, {fr: "Pâtisserie", zh: "Konditorei"}, {fr: "Boucherie", zh: "Metzgerei"}, {fr: "Poissonnerie", zh: "Fischgeschäft"}, {fr: "Épicerie", zh: "Lebensmittelladen"}, {fr: "Marché", zh: "Offener Markt"}];
deData.subPages.magasin.shops[1].cat = "Kleidung & Mode";
deData.subPages.magasin.shops[1].items = [{fr: "Magasin de vêtements", zh: "Bekleidungsgeschäft"}, {fr: "Boutique", zh: "Boutique"}, {fr: "Magasin de chaussures", zh: "Schuhgeschäft"}, {fr: "Bijouterie", zh: "Juwelier"}, {fr: "Friperie", zh: "Second-Hand-Laden", note: "Gut für Vintage"}];
deData.subPages.magasin.shops[2].cat = "Gesundheit & Schönheit";
deData.subPages.magasin.shops[2].items = [{fr: "Pharmacie", zh: "Apotheke"}, {fr: "Parapharmacie", zh: "Drogerie"}, {fr: "Parfumerie", zh: "Parfümerie"}, {fr: "Salon de coiffure", zh: "Friseursalon"}];
deData.subPages.magasin.shops[3].cat = "Professionelle Dienstleistungen";
deData.subPages.magasin.shops[3].items = [{fr: "Tabac", zh: "Tabakladen", note: "Briefmarken, Lotto kaufen"}, {fr: "Librairie", zh: "Buchhandlung"}, {fr: "Fleuriste", zh: "Florist"}, {fr: "Poste", zh: "Postamt"}];
deData.subPages.magasin.dialogue = "Praktische Dialoge";
deData.subPages.magasin.templates[0].t = "Begrüßungen & Bedürfnisse";
deData.subPages.magasin.templates[0].lines = [{fr: "Bonjour, Monsieur / Madame.", zh: "Guten Tag, Herr / Frau."}, {fr: "Je cherche...", zh: "Ich suche..."}, {fr: "Je voudrais...", zh: "Ich möchte..."}];
deData.subPages.magasin.templates[1].t = "Nach Informationen fragen";
deData.subPages.magasin.templates[1].lines = [{fr: "C'est combien ?", zh: "Wie viel kostet das?"}, {fr: "Est-ce que je peux essayer ?", zh: "Kann ich das anprobieren?"}, {fr: "Vous avez d'autres couleurs ?", zh: "Haben Sie andere Farben?"}];
deData.subPages.magasin.templates[2].t = "Kasse & Verabschiedung";
deData.subPages.magasin.templates[2].lines = [{fr: "Je peux payer par carte ?", zh: "Kann ich mit Karte zahlen?"}, {fr: "Merci, bonne journée !", zh: "Danke, einen schönen Tag!"}];
deData.subPages.magasin.quizTitle = "Vokabel-Herausforderung";
deData.subPages.magasin.refresh = "Quiz ändern";
deData.subPages.magasin.quizzes[0][0].q = "Wo kauft man Medikamente?";
deData.subPages.magasin.quizzes[0][1].q = "Wo kauft man Brot?";
deData.subPages.magasin.quizzes[0][2].q = "Was bedeutet 'Librairie'?";
deData.subPages.magasin.quizzes[0][2].a = "Buchhandlung";
deData.subPages.magasin.quizzes[0][2].ops = ["Bibliothek", "Buchhandlung", "Schreibwaren", "Lebensmittel"];
deData.subPages.magasin.quizzes[0][3].q = "Wo kauft man Fleisch?";

deData.subPages.magasin.quizzes[1][0].q = "Wo kauft man Blumen?";
deData.subPages.magasin.quizzes[1][1].q = "Wo kauft man Briefmarken?";
deData.subPages.magasin.quizzes[1][2].q = "Was bedeutet 'Je voudrais...'?";
deData.subPages.magasin.quizzes[1][2].a = "Ich möchte...";
deData.subPages.magasin.quizzes[1][2].ops = ["Ich sehe...", "Ich möchte...", "Ich habe...", "Entschuldigung..."];

deData.subPages.civilization.title = "Französische Kultur: Lektion 11";
deData.subPages.civilization.subtitle = "La Civilisation Française";
deData.subPages.civilization.translationTag = "Deutsche Übersetzung:";
deData.subPages.civilization.translation = "Das gastronomische Mahl der Franzosen ist eine übliche soziale Praxis, um die wichtigsten Momente im Leben von Individuen und Gruppen zu feiern.";

deData.subPages.text.title = "Französischlektion: Lektion 11";
deData.subPages.text.subtitle = "Französische & Deutsche Texte";
deData.subPages.text.p1s1_trans = "Es ist eines der schönsten Museen der Welt, in dem sich die Mona Lisa, die Venus von Milo und die Nike von Samothrake befinden.";
deData.subPages.text.p1s2_trans = "Sie ist eine kreative Frau, die Frauen in ihrem Kleidungsstil emanzipierte und deren Marke weltweit bekannt ist.";
deData.subPages.text.p1s3_trans = "Er ist ein Schriftsteller, der 2008 den Nobelpreis für Literatur erhielt. Er begeistert sich für Afrika, Asien und Lateinamerika.";
deData.subPages.text.p2_bgTitle = "Hintergrund:";
deData.subPages.text.p2_bg = "Die Geschichte spielt in den 1960er Jahren. Omar wurde in Frankreich als Kind algerischer Einwanderer geboren. Wie viele solcher Familien leben sie in einem Elendsviertel bei Lyon namens \"Shaba\". Im Gegensatz zu anderen interessiert sich Omar leidenschaftlich für die französische Kultur und lernt fleißig. Doch seine Intelligenz und sein Fleiß wecken den Neid seiner Mitschüler...";
deData.subPages.text.transTitle = "Deutsche Übersetzung";
deData.subPages.text.p2s1_trans = "Sobald wir den Raum betraten, setzte ich mich in die erste Reihe, direkt vor die Nase des Lehrers. Der, der vorher dort saß, wartete nicht lange. Er ging direkt nach hinten, um meinen nun leeren Platz einzunehmen.";
deData.subPages.text.p2s2_trans = "Der Lehrer warf mir einen überraschten Blick zu. Ich verstehe ihn. Ich werde ihm zeigen, dass ich zu den gehorsamsten gehören kann, zu denen, die ihr Heft ordentlich führen, zu denen, deren Hände und Nägel nicht die geringste Spur von Schmutz aufweisen, zu den aktivsten im Unterricht.";
deData.subPages.text.p2s3_trans = "« Wir sind alle Nachkommen von Vercingetorix! \n- Ja, Lehrer! \n- Unser Land, Frankreich, hat eine Fläche von... \n- Ja, Lehrer! »";
deData.subPages.text.authorTitle = "Über den Autor";
deData.subPages.text.authorDesc = "Azouz Begag, geboren am 5. Februar 1957 in Lyon, ist ein französischer Politiker, Schriftsteller und Forscher in Wirtschaft und Soziologie. Er ist CNRS-Forscher an der Universität Paris IV.";

deData.subPages.france.title = "Frankreich entdecken (Tour de France)";
deData.subPages.france.desc = "Willkommen in Frankreich, einem Land mit jahrtausendealter Geschichte, das unzählige Ideen und Kunst hervorgebracht hat.";
deData.subPages.france.historyTitle = "Geschichte";
deData.subPages.france.history[0].desc = "Das antike Frankreich hieß Gallien. Im 1. Jahrhundert v. Chr. von Rom erobert.";
deData.subPages.france.history[1].period = "Franken und Mittelalter";
deData.subPages.france.history[1].desc = "Die germanischen Franken gründeten ein Königreich. Frankreich trat in ein langes feudales Zeitalter ein.";
deData.subPages.france.history[2].period = "Absolute Monarchie und Aufklärung";
deData.subPages.france.history[2].desc = "Unter Ludwig XIV. erreichte die Monarchie ihren Höhepunkt. Die Aufklärung legte den Grundstein für die Revolution.";
deData.subPages.france.history[3].period = "Revolution und Napoleon";
deData.subPages.france.history[3].desc = "1789 begann die Französische Revolution. Napoleons Aufstieg brachte französischen Einfluss nach Europa.";
deData.subPages.france.history[4].period = "Moderne Ära";
deData.subPages.france.history[4].desc = "Nach zwei Weltkriegen wurde Frankreich zu einem Hauptmotor der europäischen Integration.";

deData.subPages.france.geoTitle = "Geografie & Landschaft";
deData.subPages.france.geoDesc = "Frankreich wird wegen seiner Form oft \"L'Hexagone\" genannt. Seine natürliche Landschaft ist reich und vielfältig.";
deData.subPages.france.scenery[0].title = "Die Alpen";
deData.subPages.france.scenery[0].desc = "Das Dach Westeuropas, Heimat des Mont Blanc.";
deData.subPages.france.scenery[1].title = "Provence";
deData.subPages.france.scenery[1].desc = "Berühmt für Lavendelfelder und historische Steinstädte.";
deData.subPages.france.scenery[2].title = "Côte d'Azur";
deData.subPages.france.scenery[2].desc = "Bekannt für blaues Wasser, Sonnenschein und luxuriöse Städte wie Nizza und Cannes.";
deData.subPages.france.scenery[3].title = "Loiretal";
deData.subPages.france.scenery[3].desc = "Der 'Königliche Garten' Frankreichs mit Hunderten prächtiger Schlösser.";

deData.subPages.france.landmarksTitle = "Unsterbliche Wahrzeichen";
deData.subPages.france.landmarks[0].title = "Eiffelturm";
deData.subPages.france.landmarks[0].desc = "Gebaut für die Weltausstellung 1889, das unbestrittene Symbol von Paris.";
deData.subPages.france.landmarks[1].title = "Louvre";
deData.subPages.france.landmarks[1].desc = "Einst ein königlicher Palast, heute ein Kunstheiligtum.";
deData.subPages.france.landmarks[2].title = "Triumphbogen";
deData.subPages.france.landmarks[2].desc = "Erbaut zu Ehren von Napoleons Armee. Darunter liegt das Grab des unbekannten Soldaten.";
deData.subPages.france.landmarks[3].title = "Notre-Dame de Paris";
deData.subPages.france.landmarks[3].desc = "Ein Meisterwerk der gotischen Architektur.";

deData.subPages.france.funFactsTitle = "Wissenswertes";
deData.subPages.france.funFacts[0].q = "Was ist das meistbesuchte Museum der Welt?";
deData.subPages.france.funFacts[0].a = "Der Louvre in Paris!";
deData.subPages.france.funFacts[1].q = "Wie viele Käsesorten gibt es in Frankreich?";
deData.subPages.france.funFacts[1].a = "Über 1.500! General de Gaulle sagte berühmt: 'Wie kann man ein Land regieren, das 246 verschiedene Käsesorten hat?'";
deData.subPages.france.funFacts[2].q = "Welches berühmte Radrennen stammt aus Frankreich?";
deData.subPages.france.funFacts[2].a = "Die Tour de France.";


// Write de.json
fs.writeFileSync(path.join(dictsPath, 'de.json'), JSON.stringify(deData, null, 2));
console.log('de.json created successfully!');
