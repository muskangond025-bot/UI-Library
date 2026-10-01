import React from 'react';

export default function ProductFaq11({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">{data?.eyebrow || 'FEATURED SPOTLIGHT'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Spotlight Product FAQ'}</h2>
        </div>

        <div className="space-y-6">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
