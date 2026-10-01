import React from 'react';

export default function ProductFaq12({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'LIFECYCLE GUIDANCE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product Ownership Timeline'}</h2>
        </div>

        <div className="space-y-8">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl">
              <span className="text-xs font-bold text-rose-400 uppercase">{item.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
