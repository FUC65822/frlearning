import { Columns } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import { getDictionary, Locale } from "@/dictionaries";

export default async function CivilizationCivi11({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const tDict = dict.subPages.civilization;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-rose-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="rose" />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <div className="mb-4 inline-flex items-center justify-center rounded-md bg-rose-100 p-2 text-rose-800">
            <Columns className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 md:text-5xl">
            {tDict.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {tDict.subtitle}
          </p>
        </header>

        <section className="rounded-md border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-950">{tDict.topic}</h2>
          <p className="mb-6 leading-8 text-neutral-700">
            {tDict.content}
          </p>
          <div className="rounded-md border border-rose-900/20 bg-rose-50 p-5">
            <p className="leading-7 text-rose-900">
              <span className="font-semibold block mb-2">{tDict.translationTag}</span>
              {tDict.translation}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
