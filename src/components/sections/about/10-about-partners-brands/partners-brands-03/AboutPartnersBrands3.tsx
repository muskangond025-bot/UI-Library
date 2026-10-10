import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, CheckCircle2, Award } from 'lucide-react';

export function AboutPartnersBrands3() {
  const items = [
    { title: 'Alpha Tech Ventures', cat: 'Venture Capital', score: '99.8%' },
    { title: 'Starlight Design Labs', cat: 'UX Research', score: '98.5%' },
    { title: 'HyperScale Cloud', cat: 'DevOps & Infra', score: '99.9%' },
    { title: 'Nexus Robotics Alliance', cat: 'Hardware Partner', score: '97.9%' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-600" /> SOFT NEUMORPHISM #03 • ANIMATION: DUAL-SHADOW DEPTH & TACTILE PRESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Soft Neumorphic Strategic Partners
          </h2>
          <p className="opacity-70 text-base sm:text-lg text-slate-600">
            Extruded dual-shadow inset/outset depth effects with tactile click feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-7 rounded-3xl bg-slate-100 transition-all duration-300 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff] flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff] w-fit text-slate-700">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">{item.cat}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                <span>Match Score</span>
                <span className="text-emerald-600">{item.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
