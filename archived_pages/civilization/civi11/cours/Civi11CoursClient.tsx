"use client";

import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function Civi11CoursClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const cDict = dict.subPages.civi11_cours;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="sky" />

      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
        
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl text-slate-800">{cDict.header_title}</h1>
          <p className="text-lg text-slate-500">{cDict.header_subtitle}</p>
        </header>

        {/* 11.1 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.maghreb_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/alger.jpg" alt="Alger" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.alger_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p1}}></p>
            <h3>{cDict.maghreb_h3_1}</h3>
            <ul>
              <li>{cDict.maghreb_li_1}</li>
              <li>{cDict.maghreb_li_2}</li>
              <li>{cDict.maghreb_li_3}</li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p2}}></p>
            <h3>{cDict.maghreb_h3_2}</h3>
            <ul>
              <li>{cDict.maghreb_li_4}</li>
              <li>{cDict.maghreb_li_5}</li>
              <li>{cDict.maghreb_li_6}</li>
            </ul>
            <h3>{cDict.maghreb_h3_3}</h3>
            <ul>
              <li>{cDict.maghreb_li_7}</li>
              <li>{cDict.maghreb_li_8}</li>
            </ul>
            <h3>{cDict.maghreb_h3_4}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p3}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p4}}></p>
            <h4>{cDict.maghreb_h4_1}</h4>
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.maghreb_p6}}></p>
          </div>
        </section>

        {/* 11.2 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.orient_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/beyrouth.jpg" alt="Beyrouth" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.beyrouth_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.orient_p1}}></p>
            <h3>{cDict.orient_h3_1}</h3>
            <ul>
              <li>{cDict.orient_li_1}</li>
              <li>{cDict.orient_li_2}</li>
              <li>{cDict.orient_li_3}</li>
            </ul>
            <div className="md:flex md:items-start md:space-x-8">
              <div className="md:w-2/3">
                <h3>{cDict.orient_h3_2}</h3>
                <p dangerouslySetInnerHTML={{__html: cDict.orient_p2}}></p>
                <p dangerouslySetInnerHTML={{__html: cDict.orient_p3}}></p>
              </div>
              <figure className="md:w-1/3 mt-6 md:mt-0">
                <img src="/images/suez_canal.jpg" alt="Suez Canal" className="w-full rounded-lg" />
                <figcaption className="mt-2 text-sm text-stone-500">{cDict.suez_caption}</figcaption>
              </figure>
            </div>
            <h3>{cDict.orient_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.orient_p4}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.orient_p5}}></p>
          </div>
        </section>

        {/* 11.3 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.afrique_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/afrique_map.jpg" alt="Afrique Map" className="w-full h-auto object-cover" />
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.afrique_p1}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_1}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_2}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_3}}></li>
            </ul>
            <h3>{cDict.afrique_h3_1}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.afrique_p2}}></p>
            <ul>
              <li>{cDict.afrique_li_4}</li>
              <li>{cDict.afrique_li_5}</li>
              <li>{cDict.afrique_li_6}</li>
              <li>{cDict.afrique_li_7}</li>
              <li>{cDict.afrique_li_8}</li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: cDict.afrique_p3}}></p>
            <h3>{cDict.afrique_h3_2}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.afrique_p4}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_9}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_10}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_10_extra}}></li>
            </ul>
            <h3>{cDict.afrique_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.afrique_p6}}></p>
            <ul>
              <li>{cDict.afrique_li_11}</li>
              <li>{cDict.afrique_li_12}</li>
              <li>{cDict.afrique_li_13}</li>
              <li>{cDict.afrique_li_14}</li>
              <li>{cDict.afrique_li_15}</li>
              <li>{cDict.afrique_li_16}</li>
              <li>{cDict.afrique_li_17}</li>
              <li>{cDict.afrique_li_18}</li>
              <li>{cDict.afrique_li_19}</li>
            </ul>
            <h3>{cDict.afrique_h3_4}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_20}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_21}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.afrique_li_22}}></li>
            </ul>
            <h3>{cDict.afrique_h3_5}</h3>
            <ul>
              <li>{cDict.afrique_li_23}</li>
              <li>{cDict.afrique_li_24}</li>
              <li>{cDict.afrique_li_25}</li>
              <li>{cDict.afrique_li_26}</li>
              <li>{cDict.afrique_li_27}</li>
            </ul>
          </div>
        </section>

        {/* 11.4 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.indien_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/port-louis.jpg" alt="Port Louis" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.indien_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p1}}></p>
            <h3>{cDict.indien_h3_1}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_1}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_2}}></li>
            </ul>
            <h3>{cDict.indien_h3_2}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p2}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_3}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_4}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_5}}></li>
            </ul>
            <h3>{cDict.indien_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p3}}></p>
            <h3>{cDict.indien_h3_4}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p4}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_6}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_7}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_8}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.indien_li_9}}></li>
            </ul>
            <h3>{cDict.indien_h3_5}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.indien_p6}}></p>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_1}</p>
          </div>
        </section>

        {/* 11.5 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.antilles_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/plantation_guadeloupe.jpg" alt="Guadeloupe" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.antilles_caption1}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p1}}></p>
            <h3>{cDict.antilles_h3_1}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p2}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p3}}></p>
            <ul>
              <li>{cDict.antilles_li_1}</li>
              <li>{cDict.antilles_li_2}</li>
              <li>{cDict.antilles_li_3}</li>
            </ul>
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p4}}></p>
            <ul>
              <li>{cDict.antilles_li_4}</li>
              <li>{cDict.antilles_li_5}</li>
              <li>{cDict.antilles_li_6}</li>
              <li>{cDict.antilles_li_7}</li>
            </ul>
            <div className="md:flex md:items-start md:space-x-8">
              <div className="md:w-2/3">
                <h3>{cDict.antilles_h3_2}</h3>
                <p dangerouslySetInnerHTML={{__html: cDict.antilles_p5}}></p>
                <p dangerouslySetInnerHTML={{__html: cDict.antilles_p6}}></p>
              </div>
              <figure className="md:w-1/3 mt-6 md:mt-0">
                <img src="/images/kourou_guyane.jpg" alt="Kourou" className="w-full rounded-lg" />
                <figcaption className="mt-2 text-sm text-stone-500">{cDict.antilles_caption2}</figcaption>
              </figure>
            </div>
            <h3>{cDict.antilles_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p7}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.antilles_p8}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.antilles_li_8}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.antilles_li_9}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.antilles_li_10}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.antilles_li_11}}></li>
            </ul>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_2}</p>
          </div>
        </section>

        {/* 11.6 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.pacifique_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/tjibaou_noumea.jpg" alt="Tjibaou Noumea" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.pacifique_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p1}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p2}}></p>
            <h3>{cDict.pacifique_h3_1}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p3}}></p>
            <h3>{cDict.pacifique_h3_2}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_1}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_2}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_3}}></li>
            </ul>
            <h3>{cDict.pacifique_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p4}}></p>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_4}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_5}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.pacifique_li_6}}></li>
            </ul>
            <h3>{cDict.pacifique_h3_4}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p6}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p7}}></p>
            <h3>{cDict.pacifique_h3_5}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.pacifique_p8}}></p>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_3}</p>
          </div>
        </section>

        {/* 11.7 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.asie_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/hanoi_vietnam.jpg" alt="Hanoi" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.asie_caption1}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.asie_p1}}></p>
            <h3>{cDict.asie_h3_1}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.asie_li_1}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.asie_li_2}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.asie_li_3}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.asie_li_4}}></li>
            </ul>
            <div className="md:flex md:items-start md:space-x-8">
              <div className="md:w-2/3">
                <h3>{cDict.asie_h3_2}</h3>
                <p dangerouslySetInnerHTML={{__html: cDict.asie_p2}}></p>
                <p dangerouslySetInnerHTML={{__html: cDict.asie_p3}}></p>
                <p dangerouslySetInnerHTML={{__html: cDict.asie_p4}}></p>
              </div>
              <figure className="md:w-1/3 mt-6 md:mt-0">
                <img src="/images/indochine_film.jpg" alt="Indochine Film" className="w-full rounded-lg" />
                <figcaption className="mt-2 text-sm text-stone-500">{cDict.asie_caption2}</figcaption>
              </figure>
            </div>
            <h3>{cDict.asie_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.asie_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.asie_p6}}></p>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_4}</p>
          </div>
        </section>

        {/* 11.8 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.nord_amerique_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/montreal_automne.jpg" alt="Montreal" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.nord_amerique_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p1}}></p>
            <h3>{cDict.nord_amerique_h3_1}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p2}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p3}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p4}}></p>
            <h3>{cDict.nord_amerique_h3_2}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p6}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p7}}></p>
            <h3>{cDict.nord_amerique_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p8}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.nord_amerique_p9}}></p>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_5}</p>
          </div>
        </section>

        {/* 11.9 */}
        <section className="mb-16 rounded-2xl bg-white p-8 shadow-sm border border-stone-200">
          <h2 className="mb-6 border-b-2 border-sky-200 pb-3 text-3xl font-bold text-slate-800">{cDict.europe_title}</h2>
          <figure className="mb-6 overflow-hidden rounded-lg">
            <img src="/images/palais_des_nations_geneve.jpg" alt="Geneve" className="w-full h-auto object-cover" />
            <figcaption className="mt-2 text-sm text-stone-500">{cDict.europe_caption}</figcaption>
          </figure>
          <div className="prose prose-stone max-w-none">
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p1}}></p>
            <h3>{cDict.europe_h3_1}</h3>
            <ul>
              <li dangerouslySetInnerHTML={{__html: cDict.europe_li_1}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.europe_li_2}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.europe_li_3}}></li>
              <li dangerouslySetInnerHTML={{__html: cDict.europe_li_4}}></li>
            </ul>
            <h3>{cDict.europe_h3_2}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p2}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p3}}></p>
            <h3>{cDict.europe_h3_3}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p4}}></p>
            <h3>{cDict.europe_h3_4}</h3>
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p5}}></p>
            <p dangerouslySetInnerHTML={{__html: cDict.europe_p6}}></p>
            <p className="text-right font-bold text-slate-500">{cDict.repere_franco_6}</p>
          </div>
        </section>

      </main>
    </div>
  );
}
