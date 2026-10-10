"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function GlobalFaq7() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { num: '01', q: 'What materials are used in artisan garment tailoring?', a: 'We source 100% organic heavy wool, GOTS-certified Egyptian cotton, and recycled raw brass hardware for zero synthetic micro-plastics.' },
    { num: '02', q: 'How are custom bespoke orders measured & crafted?', a: 'Every garment undergo 3D digital body mapping followed by hand-cutting by master tailors in Milan ateliers.' },
    { num: '03', q: 'What is the lifetime repair & garment warranty policy?', a: 'We offer free lifetime seam repair, button replacement, and garment re-waxing to ensure heirloom durability.' },
    { num: '04', q: 'How does carbon-neutral white-glove delivery work?', a: 'Shipments travel in 100% biodegradable fiber cases via electric logistics fleets with 100% verified carbon offset credits.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">EDITORIAL HELP GAZETTE • ISSUE #7</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-950 mt-4">Bespoke Inquiry Guide</h2>
          <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border border-stone-200 shadow-md">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left gap-4 font-serif">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-900">[{f.num}]</span>
                    <h3 className="text-xl text-stone-950 font-normal">{f.q}</h3>
                  </div>
                  {isOpen ? <Minus className="w-5 h-5 text-amber-900 shrink-0" /> : <Plus className="w-5 h-5 text-stone-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="font-sans text-xs text-stone-600 leading-relaxed pt-4 mt-4 border-t border-stone-100 pl-10">
                        {f.a}
                      </p>
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