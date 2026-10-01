import React from 'react';

export default function ProductFaq8({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-6">
          <span className="text-xs font-mono text-rose-400 uppercase">{data?.eyebrow || 'BOLD SPECIFICATIONS'}</span>
          <h2 className="text-4xl font-black mt-1">{data?.heading || 'High-Impact Product FAQ'}</h2>
        </div>

        <div className="space-y-8">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="border-b border-neutral-900 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{item.question}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
