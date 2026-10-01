import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function BrandInformation5({ data }: { data: any }) {
  const values = data?.values || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">{data?.eyebrow || 'CORE VALUES'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">{data?.heading || 'The Pillars of Our Maison'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Uncompromising standards that guide every fabric choice.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-black text-cyan-400 font-mono">{v.number}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {v.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
