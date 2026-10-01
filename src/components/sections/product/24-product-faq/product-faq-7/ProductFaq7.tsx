import React from 'react';

export default function ProductFaq7({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'INDEXED GUIDANCE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product FAQ Directory'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl">
              <span className="text-[10px] font-bold text-purple-400 uppercase">{item.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
