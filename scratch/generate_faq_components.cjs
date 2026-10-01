const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/24-product-faq');

const generateTSX = (id) => {
  switch (id) {
    case 1:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function ProductFaq1({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [openId, setOpenId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">{data?.eyebrow || 'SPECIFICATIONS & GUIDANCE'}</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-100 mt-2">{data?.heading || 'Essential Product FAQ'}</h2>
          <p className="text-neutral-400 mt-2 text-sm sm:text-base">{data?.subtitle || 'Clear, standardized guidance on materials, sizing, and garment care.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all hover:border-neutral-700">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-base sm:text-lg font-medium text-white mt-1">{item.question}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-neutral-800 text-neutral-400 flex-none"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-neutral-800/80 bg-neutral-950/40 p-6 pt-4"
                    >
                      <p className="text-sm text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                        <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Official Factory Specification
                        </span>
                        <a href="#" className="hover:text-white flex items-center gap-1">
                          View Care Guide <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 2:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq2({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-24 px-4 bg-[#fbf9f5] text-stone-900 border-y border-stone-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center border-b border-stone-300 pb-8 mb-16">
          <span className="text-xs font-serif tracking-widest text-stone-500 uppercase">VOLUME IV • FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mt-2">{data?.heading || 'Garment FAQ & Care Guide'}</h2>
          <p className="text-stone-600 font-serif italic text-sm mt-2">{data?.subtitle || 'Comprehensive answers on tailored fit, textile origin, and seasonal storage.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-stone-300 pb-6"
            >
              <span className="font-serif text-[10px] text-amber-800 font-bold uppercase tracking-wider block mb-2">{item.category}</span>
              <h3 className="font-serif text-base font-bold text-stone-900 mb-3">{item.question}</h3>
              <p className="font-serif text-xs text-stone-700 leading-relaxed italic">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 3:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq3({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-6">
          <span className="text-xs font-mono text-amber-400 uppercase">{data?.eyebrow || 'SPECIFICATION DIRECTORY'}</span>
          <h2 className="text-4xl font-extrabold mt-1">{data?.heading || 'Numbered Product FAQ'}</h2>
        </div>

        <div className="space-y-10">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 border-b border-neutral-900 pb-8"
            >
              <span className="text-3xl font-black text-amber-400 font-mono">0{idx + 1}</span>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">{item.category}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 4:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq4({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'TWO-COLUMN MATRIX'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Product Information Matrix'}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 5:
      return `import React, { useState } from 'react';

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
                className={\`p-5 rounded-2xl border cursor-pointer transition-all \${
                  idx === activeIdx ? 'bg-neutral-900 border-cyan-500 shadow-lg' : 'bg-neutral-950/60 border-neutral-800 opacity-60'
                }\`}
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
`;
    case 6:
      return `import React from 'react';

export default function ProductFaq6({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase">{data?.eyebrow || 'TOPIC NAVIGATION'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Category-Filtered FAQ'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-lg">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{item.category}</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 7:
      return `import React from 'react';

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
`;
    case 8:
      return `import React from 'react';

export default function ProductFaq8({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-neutral-800 pb-6">
          <span className="text-xs font-mono text-rose-400 uppercase">{data?.eyebrow || 'BOLD SPECIFICATIONS'}</span>
          <h2 className="text-4xl font-black mt-1">{data?.heading || 'High-Impact Product FAQ'}</h2>
        </div>

        <div className="space-y-8">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="border-b border-neutral-900 pb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{item.question}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 9:
      return `import React from 'react';

export default function ProductFaq9({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'CARD STRUCTURE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product FAQ Cards'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 10:
      return `import React from 'react';

export default function ProductFaq10({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{data?.eyebrow || 'GRID MATRIX'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Product Care & Spec Grid'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-lg">
              <span className="text-[10px] font-bold text-teal-400 uppercase">{item.category}</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 11:
      return `import React from 'react';

export default function ProductFaq11({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">{data?.eyebrow || 'FEATURED SPOTLIGHT'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Spotlight Product FAQ'}</h2>
        </div>

        <div className="space-y-6">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl shadow-xl">
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 12:
      return `import React from 'react';

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
`;
    case 13:
      return `import React from 'react';

export default function ProductFaq13({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 bg-gradient-to-tr from-neutral-950 via-slate-950 to-indigo-950 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'FLOATING GLASSMORPHISM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Visual Product Guidance'}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => (
            <div key={item.id || idx} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
              <p className="text-xs text-neutral-200 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 14:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';

export default function ProductFaq14({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{data?.eyebrow || 'SWIPE TRACK'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Horizontal Product Rail'}</h2>
        </div>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md">{data?.subtitle || 'Swipe through key product parameters horizontally.'}</p>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory">
        {questions.map((item: any, idx: number) => (
          <motion.div
            key={item.id || idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex-none w-80 sm:w-96 snap-start bg-neutral-950 border border-neutral-800 p-7 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold text-pink-400 bg-pink-950/60 border border-pink-800 uppercase">
                  {item.category}
                </span>
                <Package className="w-4 h-4 text-neutral-500" />
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.question}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-pink-400 font-semibold">
              <span>View Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;
    case 15:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq15({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">{data?.eyebrow || 'COMPACT DENSITY'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Quick Specification Rail'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Fast reference for weights, origins, and certifications.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ x: 4 }}
              className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-sm font-bold text-white mt-1 mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 16:
      return `import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function ProductFaq16({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'MACRO DETAILS'}</span>
          <h2 className="text-3xl font-bold mt-1 text-white">{data?.heading || 'Visual Hardware & Care FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Inspect physical garment details alongside technical specifications.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-amber-300 bg-amber-950 border border-amber-800 uppercase">
                    {item.category}
                  </span>
                  <Eye className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 17:
      return `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFaq17({ data }: { data: any }) {
  const questions = data?.questions || [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{data?.eyebrow || 'SUSTAINABILITY MATRIX'}</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Traceability & Eco FAQ'}</h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md">{data?.subtitle || 'Transparent supply chain information and carbon footprint specs.'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -4 }}
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
    case 18:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ProductFaq18({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [openId, setOpenId] = useState<string | null>(questions[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{data?.eyebrow || 'REPAIR & RECYCLE'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Circular Guarantee FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Free repairs and end-of-life garment recycling programs.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id || idx} className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-base font-bold text-white mt-1">{item.question}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-neutral-900 text-neutral-400 flex-none"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-neutral-800 p-6 pt-4 bg-neutral-900/40"
                    >
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 19:
      return `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function ProductFaq19({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">{data?.eyebrow || 'EXPLORER SPOTLIGHT'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Durability Testing FAQ'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Laboratory abrasion tests, tensile strength, and color fastness ratings.'}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item: any, idx: number) => {
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
            return (
              <motion.div
                key={item.id || idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                animate={{ opacity: isDimmed ? 0.35 : 1, scale: hoveredIdx === idx ? 1.02 : 1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.question}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.answer}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
    case 20:
      return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, CheckCircle2, Download } from 'lucide-react';

export default function ProductFaq20({ data }: { data: any }) {
  const questions = data?.questions || [];
  const [query, setQuery] = useState('');

  const filtered = questions.filter((q: any) =>
    q.question.toLowerCase().includes(query.toLowerCase()) ||
    q.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'KNOWLEDGE HUB'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">{data?.heading || 'Master Product Knowledge Base'}</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">{data?.subtitle || 'Search and inspect technical parameters, sizing guides, and care sheets.'}</p>

          <div className="relative mt-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search technical specs, washing temp, UPF ratings..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((item: any, idx: number) => (
              <motion.div
                key={item.id || idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">{item.category}</span>
                    <FileText className="w-4 h-4 text-neutral-500" />
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 mb-3">{item.question}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">{item.answer}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                  <span className="flex items-center gap-1 text-amber-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Lab Tested Spec
                  </span>
                  <button className="flex items-center gap-1 hover:text-white text-xs">
                    <Download className="w-3.5 h-3.5" /> Spec Sheet
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
`;
    default:
      return '';
  }
};

console.log("Writing Product FAQ TSX files for all 20 variants...");
for (let i = 1; i <= 20; i++) {
  const folderPath = path.join(baseDir, `product-faq-${i}`);
  const tsxContent = generateTSX(i);
  fs.writeFileSync(path.join(folderPath, `ProductFaq${i}.tsx`), tsxContent, 'utf8');
}
console.log("All 20 Product FAQ TSX files generated successfully.");
