"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HelpCircle, ChevronRight } from 'lucide-react';

export function GlobalFaq18() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE LATENCY OF THE CYBER NEURAL ROUTER?', a: 'Sub-millisecond optical packet routing powered by FPGA neural hardware acceleration engines.' },
    { q: 'CAN I CONNECT HOT-SWAPPABLE EXPANSION MODULES?', a: 'Affirmative. PCIe 5.0 modular bay ports accept liquid-cooled GPU compute cards instantly.' },
    { q: 'HOW IS ENCRYPTION HANDLED AT REST AND IN TRANSIT?', a: 'AES-256 post-quantum lattice encryption keys are updated every 60 seconds autonomously.' },
    { q: 'WHAT IS THE MAXIMUM SUSTAINED VOLT POWER DRAW?', a: 'System accepts dual 1600W Titanium ATX 3.0 power units with intelligent load distribution.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-black">CYBER FAQ PROTOCOL #18</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded">HELPDESK: ONLINE</span>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left font-black text-base uppercase">
                  <span>{f.q}</span>
                  <div className={"w-7 h-7 bg-black text-white rounded flex items-center justify-center transition-transform " + (isOpen ? 'rotate-90 bg-lime-400 text-black' : '')}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="mt-4 pt-4 border-t-2 border-black text-xs font-bold text-black/80">
                        → ANSWER: {f.a}
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