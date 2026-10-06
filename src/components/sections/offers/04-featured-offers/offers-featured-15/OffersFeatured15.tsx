import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export function OffersFeatured15() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { title: 'CINEMATIC AUDIO PRO X', subtitle: 'Studio Spatial Soundstage', price: '$299', orig: '$599', bg: 'from-blue-900 via-slate-900 to-indigo-950' },
    { title: 'MECHA MONOCHROME KEYBOARD', subtitle: 'Hot-Swappable Custom Switches', price: '$149', orig: '$299', bg: 'from-purple-900 via-slate-900 to-slate-950' },
    { title: 'TITANIUM SMART WATCH ULTRA', subtitle: 'Dual GPS Telemetry & ECG', price: '$199', orig: '$399', bg: 'from-cyan-900 via-slate-900 to-slate-950' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden font-sans relative">
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`p-10 sm:p-16 bg-gradient-to-br ${slides[activeSlide].bg} min-h-[420px] flex flex-col justify-between`}
      >
        <div className="space-y-4 max-w-xl">
          <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            HERO SLIDER SPOTLIGHT #0{activeSlide + 1}
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {slides[activeSlide].title}
          </h2>
          <p className="text-slate-300 text-base">{slides[activeSlide].subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-white/10 gap-6">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-white">{slides[activeSlide].price}</span>
            <span className="text-slate-400 line-through text-sm">{slides[activeSlide].orig}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveSlide(prev => (prev > 0 ? prev - 1 : slides.length - 1))}
                className="p-3 bg-slate-900/80 hover:bg-white hover:text-black text-white rounded-full border border-slate-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0))}
                className="p-3 bg-slate-900/80 hover:bg-white hover:text-black text-white rounded-full border border-slate-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <button className="px-8 py-3.5 bg-white text-slate-950 font-extrabold text-xs uppercase rounded-full hover:bg-cyan-300 transition-colors flex items-center gap-1">
              Explore Drop <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default OffersFeatured15;
