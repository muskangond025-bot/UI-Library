import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation9({ data }: { data: any }) {
  const phases = data?.journeyPhases || [];

  return (
    <section className="py-20 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'OUR JOURNEY'}</span>
        <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Evolution of the Maison'}</h2>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 pb-8 snap-x snap-mandatory">
        {phases.map((ph: any, idx: number) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="flex-none w-80 snap-start bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl font-bold text-pink-400 font-mono mb-2 block">{ph.year}</span>
              <h3 className="text-base font-bold text-white mb-2">{ph.phaseTitle}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">{ph.description}</p>
            </div>
            <img src={ph.archivedImage} alt={ph.phaseTitle} className="w-full h-40 object-cover rounded-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
