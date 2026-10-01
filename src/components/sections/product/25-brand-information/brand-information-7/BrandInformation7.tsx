import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation7({ data }: { data: any }) {
  const steps = data?.processSteps || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-rose-400 tracking-widest uppercase">{data?.eyebrow || 'ATELIER CRAFT'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'The Art of Master Tailoring'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-rose-400 font-mono block mb-2">{st.stepNumber}</span>
                <h3 className="text-sm font-bold text-white mb-2">{st.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{st.description}</p>
              </div>
              <span className="text-[10px] font-mono text-rose-300 bg-rose-950/60 p-2 rounded-xl text-center border border-rose-800">
                Timeline: {st.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
