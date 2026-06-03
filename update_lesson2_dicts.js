const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const locales = {
  zh: {
    timeline2: {
      title: "第二课：特殊发音规则",
      desc: "掌握连音、省音、词尾不发音与字母 H 的特殊用法。"
    },
    lesson2: {
      title: "第二课：特殊发音规则",
      desc: "法语之所以听起来像优美的歌曲，离不开这些特殊的语音衔接与发音习惯。",
      back: "返回课程页",
      playTTS: "朗读例句"
    }
  },
  en: {
    timeline2: {
      title: "Lesson 2: Special Pronunciation Rules",
      desc: "Master liaison, elision, silent final consonants, and the letter H."
    },
    lesson2: {
      title: "Lesson 2: Special Pronunciation Rules",
      desc: "French sounds like a beautiful song because of these special pronunciation habits and linking rules.",
      back: "Back to Timeline",
      playTTS: "Play audio"
    }
  },
  fr: {
    timeline2: {
      title: "Leçon 2 : Règles de prononciation",
      desc: "Maîtrisez la liaison, l'élision, les consonnes finales muettes et la lettre H."
    },
    lesson2: {
      title: "Leçon 2 : Règles spéciales de prononciation",
      desc: "Le français ressemble à une belle chanson grâce à ces habitudes de prononciation et règles de liaison.",
      back: "Retour",
      playTTS: "Écouter"
    }
  },
  es: {
    timeline2: {
      title: "Lección 2: Reglas especiales de pronunciación",
      desc: "Domina la liaison, elisión, consonantes finales mudas y la letra H."
    },
    lesson2: {
      title: "Lección 2: Reglas especiales de pronunciación",
      desc: "El francés suena como una hermosa canción gracias a estos hábitos de pronunciación y reglas de enlace.",
      back: "Volver",
      playTTS: "Reproducir audio"
    }
  },
  de: {
    timeline2: {
      title: "Lektion 2: Besondere Ausspracheregeln",
      desc: "Meistern Sie Liaison, Elision, stumme Endkonsonanten und den Buchstaben H."
    },
    lesson2: {
      title: "Lektion 2: Besondere Ausspracheregeln",
      desc: "Französisch klingt wie ein schönes Lied dank dieser besonderen Aussprachegewohnheiten und Bindungsregeln.",
      back: "Zurück",
      playTTS: "Audio abspielen"
    }
  }
};

for (const code of Object.keys(locales)) {
  const p = path.join(dictDir, `${code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!json.intro) json.intro = {};
    
    // insert into timeline
    if (json.intro.timeline && json.intro.timeline.length > 1) {
      // Shift elements after index 0 by 1 to make room at index 1
      const oldTimeline = [...json.intro.timeline];
      // Keep the first one (lesson 1)
      const newTimeline = [oldTimeline[0]];
      // Insert lesson 2
      newTimeline.push(locales[code].timeline2);
      // Append the rest, but we should just replace index 1 if it's already updated
      // Wait, let's just rewrite the whole timeline to be safe
      // Let's check if the second item is already lesson 2
      if (oldTimeline[1].title && oldTimeline[1].title.includes('2')) {
         oldTimeline[1] = locales[code].timeline2;
         json.intro.timeline = oldTimeline;
      } else {
         // It's the old 'Greetings', so splice it in
         oldTimeline.splice(1, 0, locales[code].timeline2);
         // Update numbering for subsequent lessons
         for (let i = 2; i < oldTimeline.length; i++) {
           // just simple replacement for numbers if they exist
           if(code==='zh') oldTimeline[i].title = oldTimeline[i].title.replace(/二|三|四/, m => m==='二'?'三':m==='三'?'四':'五');
         }
         json.intro.timeline = oldTimeline;
      }
    }
    
    // add lesson2 object
    json.intro.lesson2 = locales[code].lesson2;
    
    fs.writeFileSync(p, JSON.stringify(json, null, 2));
  }
}
