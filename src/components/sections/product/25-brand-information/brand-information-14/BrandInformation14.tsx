import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation14({ data }: { data: any }) {
  const principles = data?.principles || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'OUR COMMITMENTS'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Bento Principles Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((pr: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-cyan-300 bg-cyan-950 border border-cyan-800 uppercase">
                    {pr.badge}
                  </span>
                  <span className="text-2xl font-black text-cyan-400 font-mono">{pr.statNumber}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pr.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{pr.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
