const fs = require('fs');
const path = require('path');
const dictDir = 'd:/githubde/frlearning/src/dictionaries';

const locales = [
  { code: 'zh', data: {
      cta: "我已经掌握了，开始练习 ➔",
      title: "发音听力测验",
      desc: "聆听单词发音，选出它包含的核心音标",
      questionOf: "第 {x} / {y} 题",
      playAudio: "点击播放发音",
      correct: "太棒了！",
      incorrect: "哎呀，再试一次！",
      next: "下一题 ➔",
      finishTitle: "练习完成！",
      finishDesc: "你的得分：{score} / {total}",
      restart: "重新挑战",
      hide: "收起练习"
  }},
  { code: 'en', data: {
      cta: "I'm ready, start practice ➔",
      title: "Phonetics Listening Quiz",
      desc: "Listen to the word and select the core phonetic symbol it contains",
      questionOf: "Question {x} / {y}",
      playAudio: "Click to play pronunciation",
      correct: "Awesome!",
      incorrect: "Oops, try again!",
      next: "Next ➔",
      finishTitle: "Practice Completed!",
      finishDesc: "Your score: {score} / {total}",
      restart: "Restart Challenge",
      hide: "Hide Practice"
  }},
  { code: 'fr', data: {
      cta: "Je suis prêt(e), commencer l'exercice ➔",
      title: "Quiz d'écoute phonétique",
      desc: "Écoutez le mot et sélectionnez le symbole phonétique principal qu'il contient",
      questionOf: "Question {x} / {y}",
      playAudio: "Cliquez pour écouter la prononciation",
      correct: "Super !",
      incorrect: "Oups, réessayez !",
      next: "Suivant ➔",
      finishTitle: "Exercice terminé !",
      finishDesc: "Votre score : {score} / {total}",
      restart: "Recommencer",
      hide: "Masquer l'exercice"
  }},
  { code: 'es', data: {
      cta: "Estoy listo, empezar práctica ➔",
      title: "Prueba de audición fonética",
      desc: "Escucha la palabra y selecciona el símbolo fonético que contiene",
      questionOf: "Pregunta {x} / {y}",
      playAudio: "Haz clic para reproducir la pronunciación",
      correct: "¡Genial!",
      incorrect: "¡Uy, inténtalo de nuevo!",
      next: "Siguiente ➔",
      finishTitle: "¡Práctica completada!",
      finishDesc: "Tu puntuación: {score} / {total}",
      restart: "Reiniciar desafío",
      hide: "Ocultar práctica"
  }},
  { code: 'de', data: {
      cta: "Ich bin bereit, Übung starten ➔",
      title: "Phonetik-Hörtest",
      desc: "Hören Sie sich das Wort an und wählen Sie das phonetische Symbol aus, das es enthält",
      questionOf: "Frage {x} / {y}",
      playAudio: "Klicken, um die Aussprache abzuspielen",
      correct: "Klasse!",
      incorrect: "Hoppla, versuch es nochmal!",
      next: "Weiter ➔",
      finishTitle: "Übung abgeschlossen!",
      finishDesc: "Dein Ergebnis: {score} / {total}",
      restart: "Neustart",
      hide: "Übung ausblenden"
  }}
];

for (const loc of locales) {
  const p = path.join(dictDir, `${loc.code}.json`);
  if (fs.existsSync(p)) {
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!json.intro) json.intro = {};
    if (!json.intro.lesson1) json.intro.lesson1 = {};
    json.intro.lesson1.practice = loc.data;
    fs.writeFileSync(p, JSON.stringify(json, null, 2));
  }
}
