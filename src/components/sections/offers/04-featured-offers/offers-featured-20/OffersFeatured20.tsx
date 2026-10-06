import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function OffersFeatured20() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const accordionItems = [
    { title: 'Spatial VR Prism Pro Headset', price: '$499', orig: '$999', details: 'Dual micro-OLED 5K displays with hand tracking gesture engine & liquid cooling.' },
    { title: 'Titanium Smart Watch Ultra', price: '$229', orig: '$459', details: 'Titanium aerospace grade housing with dual frequency GPS telemetry & sapphire glass.' },
    { title: 'Bespoke Aluminum Sound Dock', price: '$119', orig: '$239', details: 'CNC machined acoustic aluminum housing with 15W MagSafe wireless fast charging.' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            EXPANDABLE ACCORDION DECK
          </span>
          <h2 className="text-3xl font-extrabold text-white">Interactive Accordion Featured Showcase</h2>
        </div>

        <div className="space-y-4">
          {accordionItems.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-indigo-400 font-bold">#0{idx + 1}</span>
                    <h3 className="font-bold text-xl text-white">{item.title}</h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xl font-black text-indigo-400">{item.price}</span>
                      <span className="text-xs text-slate-500 line-through ml-2">{item.orig}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 border-t border-slate-800/80 pt-4"
                    >
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.details}</p>
                      <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase rounded-xl transition-colors inline-flex items-center gap-1">
                        Claim Featured Item <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured20;
