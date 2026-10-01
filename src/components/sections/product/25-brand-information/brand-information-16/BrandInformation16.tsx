import React from 'react';
import { motion } from 'framer-motion';

export default function BrandInformation16({ data }: { data: any }) {
  const elements = data?.identityElements || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'BRAND SYSTEM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'The Visual & Tactile Identity'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {elements.map((el: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase">{el.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{el.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{el.description}</p>
              </div>
              <span className="text-xs font-mono text-neutral-400 bg-neutral-950 p-2.5 rounded-xl border border-neutral-800">
                {el.specDetail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
