import React, { useState } from 'react';

export default function QuestionsAnswers15({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'STICKY NAVIGATION'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Jump-Nav Q&A Section'}</h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {questions.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                activeTab === idx ? 'bg-emerald-400 text-neutral-950 font-bold' : 'bg-neutral-900 border border-neutral-800 text-neutral-300'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">{questions[activeTab]?.question}</h3>
          <p className="text-sm text-neutral-300 leading-relaxed">{questions[activeTab]?.answer}</p>
        </div>
      </div>
    </section>
  );
}
