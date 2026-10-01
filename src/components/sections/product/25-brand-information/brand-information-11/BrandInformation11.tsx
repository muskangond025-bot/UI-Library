import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BrandInformation11({ data }: { data: any }) {
  const milestones = data?.milestones || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const current = milestones[selectedIdx] || {};

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">{data?.eyebrow || 'KEY MILESTONES'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Interactive History Showcase'}</h2>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {milestones.map((m: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                idx === selectedIdx ? 'bg-yellow-400 text-neutral-950 shadow-lg scale-105' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
              }`}
            >
              {m.year}
            </button>
          ))}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-3xl font-black text-yellow-400 font-mono">{current.year}</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">{current.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">{current.description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yellow-950 text-yellow-300 border border-yellow-800">
              Impact: {current.impactMetric}
            </span>
          </div>
          <img src={current.heroImage} alt={current.title} className="w-full h-72 object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
