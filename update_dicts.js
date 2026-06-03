const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es'];

let enText = {};
let enFrance = {};

// First pass: extract EN
const enPath = path.join(dictsPath, 'en.json');
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// We inject EN data
enText = {
  title: "French Lesson: Lesson 11",
  subtitle: "French & English Texts",
  p1: "01 SYMBOLES DE LA FRANCE",
  p1s1_fr: "1. C'est un des plus beaux musées du monde où se trouvent la Joconde, la Vénus de Milo et la Victoire de Samothrace.",
  p1s1_trans: "It is one of the most beautiful museums in the world where the Mona Lisa, the Venus de Milo, and the Winged Victory of Samothrace are located.",
  p1s2_fr: "2. C'est une femme créatrice qui a émancipé les femmes dans leur style vestimentaire et dont la marque est connue dans le monde entier.",
  p1s2_trans: "She is a creative woman who emancipated women in their clothing style and whose brand is known worldwide.",
  p1s3_fr: "3. C'est un écrivain qui a obtenu le prix Nobel de littérature de 2008. Il est passionné de l'Afrique, de l'Asie et de l'Amérique latine.",
  p1s3_trans: "He is a writer who won the 2008 Nobel Prize in Literature. He is passionate about Africa, Asia, and Latin America.",
  p2: "02 T'ES PAS COMME NOUS !",
  p2_bgTitle: "Background:",
  p2_bg: "The story takes place in the 1960s. Omar was born in France to Algerian immigrant parents. Like many such families, they live in a shantytown near Lyon called \"Shaba\". Unlike others, Omar is passionate about French culture and studies hard. But his intelligence and diligence attract the jealousy of his classmates...",
  frTitle: "Français",
  transTitle: "English Translation",
  p2s1_fr: "Dès que nous avons pénétré dans la salle, je me suis installé au premier rang, juste sous le nez du maître. Celui qui était là avant n'a pas demandé son reste. Il est allé droit au fond occuper ma place désormais vacante.",
  p2s1_trans: "As soon as we entered the room, I settled in the front row, right under the teacher's nose. The one who was there before didn't wait to be asked. He went straight to the back to occupy my now vacant seat.",
  p2s2_fr: "Le maître m'a jeté un regard surpris. Je le comprends. Je vais lui montrer que je peux être parmi les plus obéissants, parmi ceux qui tiennent leur carnet du jour proprement, parmi ceux dont les mains et les ongles ne laissent pas filtrer la moindre trace de crasse, parmi les plus actifs en cours.",
  p2s2_trans: "The teacher gave me a surprised look. I understand him. I'm going to show him that I can be among the most obedient, among those who keep their daily notebook neatly, among those whose hands and nails do not show the slightest trace of dirt, among the most active in class.",
  p2s3_fr: "« Nous sommes tous descendants de Vercingétorix !\n– Oui, maître !\n– Notre pays, la France, a une superficie de...\n– Oui, maître ! »",
  p2s3_trans: "« We are all descendants of Vercingetorix! \n- Yes, sir! \n- Our country, France, has an area of... \n- Yes, sir! »",
  authorTitle: "About the Author",
  authorDesc: "Azouz Begag, born February 5, 1957, in Lyon, is a French politician, writer, and researcher in economics and sociology. He is a CNRS researcher at Paris IV University."
};

enFrance = {
  title: "Discovering France (Tour de France)",
  desc: "Welcome to France, a land carrying thousands of years of history, nurturing countless ideas and art.",
  historyTitle: "History",
  history: [
    { period: "Gaul and Rome", desc: "Ancient France was called Gaul. Conquered by Rome in the 1st century BC." },
    { period: "Franks and Middle Ages", desc: "The Germanic Franks established a kingdom. France entered a long feudal era." },
    { period: "Absolute Monarchy and Enlightenment", desc: "Under Louis XIV, the monarchy reached its peak. The 18th century Enlightenment laid the foundation for the revolution." },
    { period: "Revolution and Napoleon", desc: "1789 marked the start of the French Revolution. Napoleon's rise brought French influence across Europe." },
    { period: "Modern Era", desc: "After two World Wars, France became a key driver of European integration." }
  ],
  geoTitle: "Geography & Scenery",
  geoDesc: "France is often called \"L'Hexagone\" due to its shape. Its natural landscape is rich and diverse.",
  scenery: [
    { title: "The Alps", desc: "The roof of Western Europe, home to Mont Blanc." },
    { title: "Provence", desc: "Famous for lavender fields and historic stone towns." },
    { title: "French Riviera", desc: "The Côte d'Azur is known for its blue waters, sunshine, and luxurious cities like Nice and Cannes." },
    { title: "Loire Valley", desc: "The 'Royal Garden' of France with hundreds of magnificent castles." }
  ],
  landmarksTitle: "Immortal Landmarks",
  landmarks: [
    { title: "Eiffel Tower", desc: "Built for the 1889 World's Fair, it's the undisputed symbol of Paris." },
    { title: "Louvre Museum", desc: "Once a royal palace, now an art sanctuary with I.M. Pei's glass pyramid." },
    { title: "Arc de Triomphe", desc: "Built to honor Napoleon's army. Beneath it lies the Tomb of the Unknown Soldier." },
    { title: "Notre-Dame de Paris", desc: "A masterpiece of Gothic architecture." }
  ],
  funFactsTitle: "Fun Facts",
  funFacts: [
    { q: "What is the most visited museum in the world?", a: "The Louvre in Paris!" },
    { q: "How many types of cheese are in France?", a: "Over 1,500! General de Gaulle famously said: 'How can you govern a country which has 246 varieties of cheese?'" },
    { q: "Which famous cycling race originated in France?", a: "The Tour de France." }
  ]
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  if (!data.subPages) data.subPages = {};
  
  if (loc === 'zh') {
    data.subPages.text = {
      title: "法语课文：第 11 课",
      subtitle: "French & Chinese Texts",
      p1: "01 SYMBOLES DE LA FRANCE",
      p1s1_fr: "1. C'est un des plus beaux musées du monde où se trouvent la Joconde, la Vénus de Milo et la Victoire de Samothrace.",
      p1s1_trans: "这是世界上最美的博物馆之一，收藏着《蒙娜丽莎》《米洛的维纳斯》和《萨莫色雷斯的胜利女神》。",
      p1s2_fr: "2. C'est une femme créatrice qui a émancipé les femmes dans leur style vestimentaire et dont la marque est connue dans le monde entier.",
      p1s2_trans: "她是一位女性设计师，通过服装风格解放了女性，其品牌享誉全球。",
      p1s3_fr: "3. C'est un écrivain qui a obtenu le prix Nobel de littérature de 2008. Il est passionné de l'Afrique, de l'Asie et de l'Amérique latine.",
      p1s3_trans: "他是一位获得2008年诺贝尔文学奖的作家，对非洲、亚洲和拉丁美洲充满热情。",
      p2: "02 T'ES PAS COMME NOUS !",
      p2_bgTitle: "背景介绍：",
      p2_bg: "故事发生在20世纪60年代。奥马尔出生在法国，父母是来自阿尔及利亚的移民。和许多像他们一样的家庭一样，他们住在里昂附近的一个贫民窟\"沙巴\"。与其他人不同，奥马尔热衷于法国文化，学习非常努力。但他的聪明才智和勤奋却引起了同学的嫉妒……",
      frTitle: "Français",
      transTitle: "中文翻译",
      p2s1_fr: "Dès que nous avons pénétré dans la salle, je me suis installé au premier rang, juste sous le nez du maître. Celui qui était là avant n'a pas demandé son reste. Il est allé droit au fond occuper ma place désormais vacante.",
      p2s1_trans: "一进教室，我就坐在前排，正对着老师的脸。原本坐在这里的人二话不说就走了，径直去后面占了我现在的空位。",
      p2s2_fr: "Le maître m'a jeté un regard surpris. Je le comprends. Je vais lui montrer que je peux être parmi les plus obéissants, parmi ceux qui tiennent leur carnet du jour proprement, parmi ceux dont les mains et les ongles ne laissent pas filtrer la moindre trace de crasse, parmi les plus actifs en cours.",
      p2s2_trans: "老师惊讶地看着我。我明白他的意思。我要向他证明，我可以是最守纪律的学生之一，可以是笔记写得最整洁的人之一，可以是手和指甲一点污渍都没有、上课最积极的人之一。",
      p2s3_fr: "« Nous sommes tous descendants de Vercingétorix !\n– Oui, maître !\n– Notre pays, la France, a une superficie de...\n– Oui, maître ! »",
      p2s3_trans: "「我们都是韦辛格托利克斯的后代！\n——是的，老师！\n——我们的国家，法国，面积是……\n——是的，老师！」",
      authorTitle: "作者介绍",
      authorDesc: "Azouz Begag, né le 5 février 1957 à Lyon, est un homme politique, écrivain et chercheur français en économie et sociologie. Il est chargé de recherche du CNRS à l’université Paris IV."
    };
    
    data.subPages.france = {
      title: "探索法兰西 (Tour de France)",
      desc: "欢迎来到法兰西，一片承载着千年历史、孕育了无数思想与艺术，并将精致生活融入日常的土地。",
      historyTitle: "历史沿革",
      history: [
        { period: "高卢与罗马", desc: "古代法国被称为高卢，居住着凯尔特人。公元前1世纪被罗马征服，罗马文化深刻影响了该地区的语言（拉丁语演变为法语）和法律。" },
        { period: "法兰克王国与中世纪", desc: "罗马帝国衰落后，日耳曼的法兰克人建立了王国，查理曼大帝时期达到鼎盛。此后，法国进入了漫长的封建时代，王权与教权、贵族斗争不断。" },
        { period: "绝对君主制与启蒙运动", desc: "路易十四时期，法国君主专制达到顶峰，凡尔赛宫成为欧洲的中心。18世纪，伏尔泰、卢梭等思想家引领的启蒙运动，为后来的革命奠定了思想基础。" },
        { period: "法国大革命与拿破仑时代", desc: "1789年，攻占巴士底狱标志着大革命的开始，《人权宣言》宣告了“自由、平等、博爱”的原则。随后，拿破仑的崛起和法兰西第一帝国，将法国的影响力带到了整个欧洲。" },
        { period: "近现代", desc: "经历两次世界大战的洗礼和殖民帝国的解体，法国在战后重建中成为欧洲一体化的重要推动者，并发展为今天的法兰西第五共和国。" }
      ],
      geoTitle: "风光与地理",
      geoDesc: "法国因其国土形似六边形而被称为“L'Hexagone”。每一寸土地都讲述着不同的故事，其自然景观是画家调色板上最丰富的色彩。",
      scenery: [
        { title: "阿尔卑斯山", desc: "西欧的屋脊，拥有欧洲最高峰勃朗峰。冬季，这里是世界顶级的滑雪天堂；夏季，则变身为徒步和登山爱好者的乐园，碧绿的湖泊点缀其间。" },
        { title: "普罗旺斯", desc: "这里不仅有无边的薰衣草花海，还有金色的向日葵田、古老的石头城和充满艺术气息的小镇，是梵高等艺术家寻找灵感的地方。" },
        { title: "蔚蓝海岸", desc: "地中海最璀璨的一段，以其湛蓝的海水、温暖的阳光和奢华的度假城市（如尼斯、戛纳）闻名于世，是电影节和名流的聚集地。" },
        { title: "卢瓦尔河谷", desc: "法国的“皇家花园”，数百座宏伟的城堡和庄园如珍珠般散落在卢瓦尔河两岸，见证了法国王室的辉煌历史。" }
      ],
      landmarksTitle: "不朽的地标",
      landmarks: [
        { title: "埃菲尔铁塔", desc: "为1889年世界博览会而建的铁塔，最初备受争议，如今已成为巴黎乃至整个法国无可争议的象征，代表着工业时代的创新精神。" },
        { title: "卢浮宫", desc: "从昔日的皇家宫殿到今日的艺术圣殿，卢浮宫收藏了跨越千年的艺术杰作。贝聿铭设计的玻璃金字塔入口，更让古老与现代在此完美交融。" },
        { title: "凯旋门", desc: "雄踞于香榭丽舍大街的尽头，为纪念拿破仑军队的赫赫战功而建。其下方的无名烈士墓，燃烧着永不熄灭的火焰，寄托着民族的哀思。" },
        { title: "巴黎圣母院", desc: "哥特式建筑的杰出典范，因维克多·雨果的同名小说而闻名世界。它不仅是宗教中心，更是巴黎历史的见证者。" }
      ],
      funFactsTitle: "趣味知识问答",
      funFacts: [
        { q: "世界上参观人数最多的博物馆是哪个？", a: "是位于巴黎的卢浮宫！" },
        { q: "法国有多少种奶酪？", a: "据说超过1500种！戴高乐将军曾感叹：“你怎么治理一个有246种奶酪的国家？”" },
        { q: "哪项著名的自行车赛起源于法国？", a: "环法自行车赛（Le Tour de France），是世界上最著名的公路自行车赛。" }
      ]
    };
  } else if (loc === 'en') {
     data.subPages.text = JSON.parse(JSON.stringify(enText));
     data.subPages.france = JSON.parse(JSON.stringify(enFrance));
  } else if (loc === 'fr') {
    data.subPages.text = JSON.parse(JSON.stringify(enText));
    data.subPages.text.subtitle = "Textes Français";
    data.subPages.text.transTitle = "Traduction en anglais"; 
    
    data.subPages.france = JSON.parse(JSON.stringify(enFrance));
    data.subPages.france.title = "Découvrir la France";
    data.subPages.france.historyTitle = "Histoire";
  } else if (loc === 'es') {
    data.subPages.text = JSON.parse(JSON.stringify(enText));
    data.subPages.text.subtitle = "Textos en Francés";
    data.subPages.text.transTitle = "Traducción";
    
    data.subPages.france = JSON.parse(JSON.stringify(enFrance));
    data.subPages.france.title = "Descubriendo Francia";
    data.subPages.france.historyTitle = "Historia";
  }

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}
console.log('Dictionaries updated with text and france!');
