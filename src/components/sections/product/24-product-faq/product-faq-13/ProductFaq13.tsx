import React from 'react';

export default function ProductFaq13({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-gradient-to-tr from-neutral-950 via-slate-950 to-indigo-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'FLOATING GLASSMORPHISM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Visual Product Guidance'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-200 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
