import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function OrderContinueShopping3() {
  const slides = [
    { title: 'The Autumn Wool Outerwear Drop', desc: 'Hand-tailored merino wool outerwear designed for seasonal warmth.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Studio Deskware', desc: 'Precision machined aluminum accessories for modern creators.', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800' },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Fresh Releases</span>
            <h2 className="text-2xl font-bold text-white">New Arrivals Showcase</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => setCurrent(current === slides.length - 1 ? 0 : current + 1)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 items-center"
            >
              <div className="p-8 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase">NEW THIS WEEK</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{slides[current].title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{slides[current].desc}</p>
                <motion.button whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2">
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              <div className="aspect-[4/3] bg-slate-800 overflow-hidden">
                <img src={slides[current].image} alt="Slide" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping3;
