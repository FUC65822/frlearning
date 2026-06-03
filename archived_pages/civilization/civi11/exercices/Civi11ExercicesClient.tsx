"use client";

import { useState } from "react";
import SubpageHeader from "@/components/SubpageHeader";
import type { Dictionary } from "@/dictionaries";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Civi11ExercicesClient({ dict, lang }: { dict: Dictionary, lang: string }) {
  const eDict = dict.subPages.civi11_exercices;
  const quizData = eDict.quiz;

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (qId: string, val: any) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleTextChange = (qId: string, val: string) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const isCorrect = (qId: string, q: any) => {
    const userAnswer = answers[qId];
    if (userAnswer === undefined) return false;

    const type = q.type || 'mcq';
    if (type === 'mcq') {
      return parseInt(userAnswer) === q.a;
    } else if (type === 'tf') {
      return (userAnswer === 'true') === q.a;
    } else if (type === 'match' || type === 'fill') {
      if (type === 'fill') return parseInt(userAnswer) === q.a;
      
      const userText = userAnswer.replace(/[\s.]/g, '').toUpperCase();
      const correctAnswerText = q.a.map((val: number, index: number) => `${String.fromCharCode(65 + index)}-${val + 1}`).join(',');
      return userText === correctAnswerText.replace(/[\s.]/g, '').toUpperCase();
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950 selection:bg-neutral-200 selection:text-neutral-950">
      <SubpageHeader dict={dict} lang={lang} colorTheme="sky" />

      <main className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-20">
        
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold md:text-5xl text-slate-800">{eDict.title}</h1>
        </header>

        <div className="space-y-12">
          {quizData.map((region: any, rIndex: number) => (
            <section key={rIndex} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-10">
              <h2 className="mb-8 border-b-2 border-sky-200 pb-3 text-2xl font-bold text-slate-800">
                {lang === 'fr' ? region.title : region.title_zh || region.title}
              </h2>
              
              <div className="space-y-10">
                {region.sections.map((section: any, sIndex: number) => (
                  <div key={sIndex}>
                    <h3 className="mb-6 text-xl font-semibold text-slate-700">
                      {lang === 'fr' ? section.title : section.title_zh || section.title}
                    </h3>
                    <div className="space-y-8 pl-4 border-l-4 border-slate-100">
                      {section.questions.map((q: any, qIndex: number) => {
                        const qId = `q-${rIndex}-${sIndex}-${qIndex}`;
                        const type = q.type || 'mcq';
                        const qText = lang === 'fr' ? q.q : q.q_zh || q.q;

                        return (
                          <div key={qId} className="space-y-3">
                            <p className="font-medium text-slate-800">{qText}</p>
                            
                            {/* MCQ / TF / Fill options rendered as radio if array is provided */}
                            {(type === 'mcq' || type === 'fill') && (
                              <div className="space-y-2">
                                {(lang === 'fr' ? q.o : q.o_zh || q.o)?.map((opt: string, optIndex: number) => (
                                  <label key={optIndex} className="flex items-center gap-3 cursor-pointer">
                                    <input 
                                      type="radio" 
                                      name={qId} 
                                      value={optIndex} 
                                      checked={answers[qId] == optIndex}
                                      onChange={() => handleSelect(qId, optIndex)}
                                      className="h-4 w-4 text-sky-600 focus:ring-sky-500"
                                    />
                                    <span className="text-slate-700">{opt}</span>
                                  </label>
                                ))}
                              </div>
                            )}

                            {type === 'tf' && (
                              <div className="space-x-6 flex">
                                {['true', 'false'].map((optStr) => {
                                  const labelText = lang === 'fr' ? (optStr === 'true' ? 'Vrai' : 'Faux') : (optStr === 'true' ? '正确' : '错误');
                                  return (
                                    <label key={optStr} className="flex items-center gap-3 cursor-pointer">
                                      <input 
                                        type="radio" 
                                        name={qId} 
                                        value={optStr} 
                                        checked={answers[qId] === optStr}
                                        onChange={() => handleSelect(qId, optStr)}
                                        className="h-4 w-4 text-sky-600 focus:ring-sky-500"
                                      />
                                      <span className="text-slate-700">{labelText}</span>
                                    </label>
                                  )
                                })}
                              </div>
                            )}

                            {type === 'match' && (
                              <div className="space-y-4 bg-stone-50 p-4 rounded-lg">
                                <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                                  <div>
                                    {(lang === 'fr' ? q.items : q.items_zh || q.items)?.map((item: string, i: number) => (
                                      <div key={i}>{item}</div>
                                    ))}
                                  </div>
                                  <div>
                                    {(lang === 'fr' ? q.matches : q.matches_zh || q.matches)?.map((match: string, i: number) => (
                                      <div key={i}>{match}</div>
                                    ))}
                                  </div>
                                </div>
                                <input 
                                  type="text" 
                                  placeholder="Ex: A-1, B-2..."
                                  value={answers[qId] || ''}
                                  onChange={(e) => handleTextChange(qId, e.target.value)}
                                  className="w-full rounded-md border border-stone-300 px-3 py-2 text-slate-800 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                              </div>
                            )}

                            {showResults && (
                              <div className="mt-2 text-sm">
                                {isCorrect(qId, q) ? (
                                  <span className="flex items-center gap-2 text-emerald-600 font-semibold"><CheckCircle2 className="w-4 h-4" /> Correct</span>
                                ) : (
                                  <div className="text-red-500">
                                    <span className="flex items-center gap-2 font-semibold mb-1"><XCircle className="w-4 h-4" /> Incorrect</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button 
            onClick={() => setShowResults(true)}
            className="rounded-md bg-sky-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Vérifier / 检查
          </button>
          <button 
            onClick={() => { setAnswers({}); setShowResults(false); }}
            className="rounded-md border border-stone-300 bg-white px-8 py-3 font-semibold text-slate-700 transition-colors hover:bg-stone-50"
          >
            Réinitialiser / 重置
          </button>
        </div>
      </main>
    </div>
  );
}
