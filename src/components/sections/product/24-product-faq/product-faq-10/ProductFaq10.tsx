import React from 'react';

export default function ProductFaq10({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{data?.eyebrow || 'GRID MATRIX'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product Care & Spec Grid'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg">
              <span className="text-[10px] font-bold text-teal-400 uppercase">{item.category}</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
