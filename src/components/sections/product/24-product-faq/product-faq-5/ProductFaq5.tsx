import React, { useState } from 'react';

export default function ProductFaq5({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const current = questions[activeIdx] || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img src={current.productImage || "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"} alt="Product detail" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-xs font-semibold text-white">
              {current.category} Inspection
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'IMAGE & GUIDANCE'}</span>
              <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product FAQ & Details'}</h2>
            </div>

            {questions.map((item: any, idx: number) => (
              <div
                key={item.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  idx === activeIdx ? 'bg-neutral-900 border-cyan-500 shadow-lg' : 'bg-neutral-950/60 border-neutral-800 opacity-60'
                }`}
              >
                <h3 className="text-sm font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
