import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function BrandInformation3({ data }: { data: any }) {
  const points = data?.philosophyPoints || [];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-purple-400 uppercase">{data?.eyebrow || 'OUR PHILOSOPHY'}</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">{data?.heading || 'Form, Function & Integrity'}</h2>
          <p className="text-xl sm:text-2xl font-serif italic text-purple-300 mt-6 leading-relaxed">
            "{data?.manifesto || 'Purity of material. Restraint in design. Permanence in value.'}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-purple-400 font-bold mb-3 block">0{idx + 1}</span>
                <h3 className="text-base font-bold text-white mb-3">{pt.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{pt.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
