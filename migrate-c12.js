const fs = require('fs');
const path = require('path');

const dictsPath = path.join(__dirname, 'src/dictionaries');
const locales = ['zh', 'en', 'fr', 'es', 'de'];

const c12Data = {
  zh: {
    title: "课文阅读 S12",
    subtitle: "一个人的自由止于另一个人的自由之始",
    s1Title: "她打电话太大声：警察将她赶下火车",
    s1P1: "上周末，在美国的一列火车上，一名年轻女子在长达15个小时的旅程中一直大声地打电话，在其他乘客投诉后，她被警察“请”下了火车。",
    s1P2: "这名年轻女子在一列从洛杉矶开往西雅图的火车上被拦下。在整个旅途中，尽管已经听得不耐烦的乘客们提出了抗议，她依旧在手机上进行着“热情”的交谈。",
    s1P3: "“她似乎讲电话的声音很大，时间很长，这让其他乘客觉得难以忍受”，一位铁路公司的员工指出。",
    s1P4: "这趟火车于前一天晚上10点从当地出发，在下午时分即将抵达目的地时，司机最终决定报警。于是火车停了下来，这名年轻女子被赶下了火车。",
    s1P5: "这位“不守规矩”的乘客没有被铁路公司起诉。",
    s2Title: "这太可耻了！",
    s2P1: "里尔，2013年5月24日",
    s2P2: "我坐着轮椅，但我非常独立。我做全职工作，经常出门……也经常旅行。我跟您说这些是为了让您明白，我的身体状况并不能阻止我像普通人一样生活，除非当我需要预订火车票的时候！",
    s2P3: "在法国国营铁路公司（SNCF）的网站上，残疾人预订系统从来都用不了。通过电话，则必须拨打一个付费号码……而且我至少要花一个小时才能订到我想要的票！",
    s2P4: "剩下的选择就是去售票窗口了。上周一，我冒着雨去了火车站，想预订去伦敦度假的票。一个小时过去了，我仍然没有拿到我的里尔-伦敦车票。售票员不得不四处求助，并且不停地重复说：“您理解一下，这是我们车站第一次为欧洲之星的残疾旅客办理预订业务！”",
    s2P5: "我投诉你们的预订系统以及你们员工缺乏培训。你们为自己的服务做广告，却不能平等地对待每一个人？你们不感到羞耻吗？",
    s2P6: "我的耐心已经到了极限：我受够了为了一张小小的车票而浪费时间等待。你们强加给我的这些复杂程序是一种侮辱，它提醒我，你们并没有把我当作一个普通的顾客！",
    s2P7: "我打算将这封信传播到所有我能发布的地方，希望你们的服务最终能有所改变。"
  },
  en: {
    title: "Reading Sequence 12",
    subtitle: "One's freedom ends where another's begins",
    s1Title: "She talks too loud on the phone: police expel her from the train",
    s1P1: "A young woman who wouldn't stop talking loudly on her phone during a 15-hour train ride in the US last weekend was 'invited' by the police to get off the train following passenger complaints.",
    s1P2: "The young woman was arrested aboard a train from Los Angeles to Seattle. Throughout the journey, she carried on a 'passionate' conversation on her cell phone despite protests from fed-up travelers.",
    s1P3: "'It seems she was talking loudly for a long time, and it became unbearable for the other passengers,' an employee of the railway company noted.",
    s1P4: "As the train approached its destination, having departed the previous day at 10 PM local time, the driver finally decided to call the police in the early afternoon. The train stopped, and the young woman was expelled.",
    s1P5: "The 'unruly' passenger was not sued by the company.",
    s2Title: "THIS IS SCANDALOUS!",
    s2P1: "Lille, May 24, 2013",
    s2P2: "I am in a wheelchair, but I am very independent. I work full time, I go out a lot... And I travel too. I say all this to make you understand that my situation does not prevent me from living like everyone else, except when I have to book a train ticket!",
    s2P3: "On the SNCF website, reservations for disabled people never work. By phone, you have to call a premium rate number... and I spend at least an hour to get what I want!",
    s2P4: "There remains the ticket counter. Last Monday, I went—in the rain—to the station to book my next holiday to London. After an hour, I still didn't have my Lille-London ticket. The saleswoman had to look everywhere for help and kept repeating: 'You understand, it's the first time we've made reservations for a disabled passenger for Eurostar at our station!'",
    s2P5: "I complain about your reservation system and your employees' lack of training. You advertise your service while you are not able to treat everyone on an equal footing? Aren't you ashamed?",
    s2P6: "I am out of patience: I am tired of wasting time waiting for a simple ticket. These complications you impose on me are an insult and remind me that you do not consider me a normal customer!",
    s2P7: "I intend to broadcast this letter wherever I can, hoping that your service finally changes."
  },
  fr: {
    title: "Séquence 12",
    subtitle: "La liberté des uns s’arrête là où commence celle des autres",
    s1Title: "ELLE PARLE TROP FORT AU TÉLÉPHONE : LA POLICE L’EXPULSE DU TRAIN",
    s1P1: "Une jeune femme qui n’avait pas cessé de parler bruyamment au téléphone pendant un voyage de 15 heures dans un train aux États-Unis le week-end dernier a été « invitée » par la police à descendre du train après des plaintes de voyageurs.",
    s1P2: "La jeune femme a été arrêtée à bord d’un train qui reliait Los Angeles à Seattle. Tout au long du voyage, la jeune femme a tenu une conversation « passionnée » sur son téléphone portable malgré les protestations des voyageurs qui en avaient assez.",
    s1P3: "« Il semble qu’elle parlait fort, longtemps et que cela est devenu insupportable pour les autres voyageurs », a indiqué un employé de la compagnie de chemins de fer.",
    s1P4: "Alors que le train était presque arrivé à destination, après être parti la veille à 22 h 00 locales, le conducteur a finalement décidé en début d’après-midi d’appeler la police. Le train s’est alors arrêté et la jeune femme a été expulsée du train.",
    s1P5: "La passagère « indisciplinée » n’est pas poursuivie en justice par la compagnie.",
    s2Title: "C’EST SCANDALEUX !",
    s2P1: "Lille, le 24 mai 2013",
    s2P2: "Je suis en fauteuil roulant mais je suis très indépendante. Je travaille à plein temps, je sors beaucoup… Et je voyage aussi. Je dis tout cela pour vous faire comprendre que ma situation ne m’empêche pas de vivre comme tout le monde, sauf lorsque je dois réserver un billet de train !",
    s2P3: "Sur le site de la SNCF, les réservations pour handicapés ne fonctionnent jamais. Par téléphone, il faut appeler un numéro payant… et je passe au moins une heure pour obtenir ce que je souhaite !",
    s2P4: "Il reste le guichet. Lundi dernier, je me suis rendue – sous la pluie – à la gare pour réserver mes prochaines vacances pour Londres. Au bout d’une heure, je n’ai toujours pas eu mon billet Lille-Londres. La vendeuse a dû chercher de l’aide partout et elle répétait sans cesse : « Vous comprenez, c’est la première fois qu’on fait des réservations pour voyageur handicapé pour Eurostar à notre gare ! »",
    s2P5: "Je me plains de votre système de réservation et du manque de formation de vos employés. Vous faites des publicités sur votre service alors que vous n’êtes pas capable de traiter tout le monde sur un pied d’égalité ? N’avez-vous pas honte ?",
    s2P6: "Je suis à bout de patience : j’en ai assez de perdre du temps à attendre pour un simple billet. Ces complications que vous m’infligez sont une insulte et me rappellent que vous ne me considérez pas comme une cliente normale !",
    s2P7: "Je compte diffuser cette lettre partout où je peux en espérant que votre service change enfin."
  },
  es: {
    title: "Lectura Secuencia 12",
    subtitle: "La libertad de uno termina donde comienza la del otro",
    s1Title: "Ella habla demasiado alto por teléfono: la policía la expulsa del tren",
    s1P1: "Una joven que no dejaba de hablar ruidosamente por teléfono durante un viaje en tren de 15 horas en los EE. UU. el fin de semana pasado fue 'invitada' por la policía a bajar del tren tras las quejas de los pasajeros.",
    s1P2: "La joven fue detenida a bordo de un tren que iba de Los Ángeles a Seattle. Durante todo el viaje, mantuvo una conversación 'apasionada' en su teléfono celular a pesar de las protestas de los viajeros hartos.",
    s1P3: "'Parece que hablaba muy alto durante mucho tiempo, y se volvió insoportable para los demás pasajeros', indicó un empleado de la compañía de trenes.",
    s1P4: "Cuando el tren casi llegaba a su destino, habiendo partido la noche anterior a las 22:00 hora local, el conductor finalmente decidió llamar a la policía a primera hora de la tarde. El tren se detuvo y la joven fue expulsada.",
    s1P5: "La pasajera 'indisciplinada' no fue demandada por la compañía.",
    s2Title: "¡ES ESCANDALOSO!",
    s2P1: "Lille, 24 de mayo de 2013",
    s2P2: "Estoy en silla de ruedas, pero soy muy independiente. Trabajo a tiempo completo, salgo mucho... y también viajo. Digo todo esto para que entiendan que mi situación no me impide vivir como los demás, ¡excepto cuando tengo que reservar un billete de tren!",
    s2P3: "En el sitio de la SNCF, las reservas para discapacitados nunca funcionan. Por teléfono, hay que llamar a un número de tarifa especial... ¡y paso al menos una hora para conseguir lo que quiero!",
    s2P4: "Queda la taquilla. El lunes pasado, fui —bajo la lluvia— a la estación para reservar mis próximas vacaciones a Londres. Después de una hora, todavía no tenía mi billete Lille-Londres. La vendedora tuvo que pedir ayuda a todas partes y repetía constantemente: '¡Entienda, es la primera vez que hacemos reservas para un viajero discapacitado para el Eurostar en nuestra estación!'",
    s2P5: "Me quejo de su sistema de reservas y de la falta de formación de sus empleados. ¿Hacen publicidad de su servicio cuando no son capaces de tratar a todos en pie de igualdad? ¿No les da vergüenza?",
    s2P6: "Se me acabó la paciencia: estoy cansada de perder tiempo esperando un simple billete. ¡Estas complicaciones que me imponen son un insulto y me recuerdan que no me consideran una cliente normal!",
    s2P7: "Tengo la intención de difundir esta carta en todos lados, esperando que su servicio finalmente cambie."
  },
  de: {
    title: "Lektion 12",
    subtitle: "Die Freiheit des Einzelnen endet dort, wo die des anderen beginnt",
    s1Title: "Sie telefoniert zu laut: Die Polizei verweist sie aus dem Zug",
    s1P1: "Eine junge Frau, die am vergangenen Wochenende während einer 15-stündigen Zugfahrt in den USA unaufhörlich laut telefonierte, wurde nach Beschwerden von Fahrgästen von der Polizei 'gebeten', den Zug zu verlassen.",
    s1P2: "Die junge Frau wurde in einem Zug von Los Angeles nach Seattle angehalten. Während der gesamten Fahrt führte sie trotz Protesten genervter Reisender ein 'leidenschaftliches' Gespräch über ihr Handy.",
    s1P3: "'Es scheint, dass sie sehr lange laut gesprochen hat, und es wurde für die anderen Fahrgäste unerträglich', bemerkte ein Mitarbeiter der Bahngesellschaft.",
    s1P4: "Als der Zug, der am Vorabend um 22:00 Uhr Ortszeit abgefahren war, sein Ziel fast erreicht hatte, beschloss der Fahrer schließlich am frühen Nachmittag, die Polizei zu rufen. Der Zug hielt an und die junge Frau wurde des Zuges verwiesen.",
    s1P5: "Die 'widerspenstige' Passagierin wurde von der Gesellschaft nicht verklagt.",
    s2Title: "DAS IST SKANDALÖS!",
    s2P1: "Lille, 24. Mai 2013",
    s2P2: "Ich sitze im Rollstuhl, bin aber sehr unabhängig. Ich arbeite Vollzeit, gehe oft aus... und reise auch. Ich sage das alles, um Ihnen klarzumachen, dass meine Situation mich nicht daran hindert, wie alle anderen zu leben, außer wenn ich eine Zugfahrkarte buchen muss!",
    s2P3: "Auf der SNCF-Website funktionieren Reservierungen für Behinderte nie. Telefonisch muss man eine kostenpflichtige Nummer anrufen... und ich brauche mindestens eine Stunde, um das zu bekommen, was ich will!",
    s2P4: "Bleibt noch der Schalter. Letzten Montag ging ich - im Regen - zum Bahnhof, um meinen nächsten Urlaub in London zu buchen. Nach einer Stunde hatte ich mein Ticket Lille-London immer noch nicht. Die Verkäuferin musste überall nach Hilfe suchen und wiederholte ständig: 'Verstehen Sie, es ist das erste Mal, dass wir an unserem Bahnhof Reservierungen für behinderte Reisende für den Eurostar vornehmen!'",
    s2P5: "Ich beschwere mich über Ihr Reservierungssystem und die mangelnde Ausbildung Ihrer Mitarbeiter. Sie werben für Ihren Service, sind aber nicht in der Lage, alle gleich zu behandeln? Schämen Sie sich nicht?",
    s2P6: "Ich bin am Ende meiner Geduld: Ich bin es leid, Zeit zu verschwenden, um auf ein einfaches Ticket zu warten. Diese Komplikationen, die Sie mir auferlegen, sind eine Beleidigung und erinnern mich daran, dass Sie mich nicht als normale Kundin betrachten!",
    s2P7: "Ich beabsichtige, diesen Brief überall dort zu verbreiten, wo ich kann, in der Hoffnung, dass sich Ihr Service endlich ändert."
  }
};

for (const loc of locales) {
  const p = path.join(dictsPath, `${loc}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));

  data.subPages.text_c12 = c12Data[loc];

  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

console.log('c12 dictionaries updated!');
