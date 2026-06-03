"use client";

import { FileText, MonitorPlay, MessageCircleQuestion } from "lucide-react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";

export default function PtClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const ptDict = dict.subPages.pt;

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="neutral" />

      <main className="mx-auto max-w-lg px-5 py-24 md:px-8">
        <div className="rounded-xl border border-stone-200 bg-white p-10 shadow-sm text-center">
          <h1 className="mb-2 text-3xl font-semibold tracking-normal text-neutral-900">
            {ptDict.title}
          </h1>
          <p className="mb-8 text-neutral-500">{ptDict.desc}</p>
          
          <div className="space-y-4">
            <a
               href="https://learnfr.de/PT/doc"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex w-full items-center justify-between rounded-lg bg-emerald-50 px-6 py-4 font-semibold text-emerald-900 transition-colors hover:bg-emerald-100"
            >
               <span className="flex items-center gap-3">
                 <MonitorPlay className="h-5 w-5" />
                 {ptDict.doc}
               </span>
            </a>
            
            <a
               href="https://learnfr.de/PT/orignaldoc"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex w-full items-center justify-between rounded-lg bg-blue-50 px-6 py-4 font-semibold text-blue-900 transition-colors hover:bg-blue-100"
            >
               <span className="flex items-center gap-3">
                 <FileText className="h-5 w-5" />
                 {ptDict.original}
               </span>
            </a>
            
            <a
               href="https://learnfr.de/PT/Q&A"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex w-full items-center justify-between rounded-lg bg-indigo-50 px-6 py-4 font-semibold text-indigo-900 transition-colors hover:bg-indigo-100"
            >
               <span className="flex items-center gap-3">
                 <MessageCircleQuestion className="h-5 w-5" />
                 {ptDict.qa}
               </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
