import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Rocket, Trophy, Globe } from 'lucide-react';

export function AboutCompanyTimeline13({ data }: { data?: any }) {
  const milestones = [
    { year: '2020', title: 'Company Foundation', desc: 'Started with a visionary team of 3 engineers aiming to redefine modern web component architecture.', icon: Rocket },
    { year: '2022', title: 'Global Series A & Expansion', desc: 'Scaled operations across 12 countries and crossed 100,000 active developer deployments.', icon: Globe },
    { year: '2024', title: 'Flagship UI Design System', desc: 'Launched enterprise component libraries featuring native micro-interactions and multi-morphism themes.', icon: Trophy },
    { year: '2026', title: 'AI-Native Automation', desc: 'Integrated autonomous design engines and real-time design tokens for global enterprise teams.', icon: Flag }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> BENTO STACKED GLASS VERTICAL #13
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Company Journey & Key Milestones</h2>
          <p className="opacity-80 text-base sm:text-lg">Tracing our history from founding vision to global industry leadership.</p>
        </div>

        {/* VERTICAL: Best for High Data Volume (Top to Bottom) */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-500/20 -translate-x-1/2 rounded-full" />
          <div className="space-y-8 lg:space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:col-span-5 ${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}`}>
                    <div className={`p-8 rounded-3xl space-y-4 bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-xl`}>
                      <span className="inline-block px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs">YEAR {m.year}</span>
                      <h3 className="text-2xl font-bold">{m.title}</h3>
                      <p className="opacity-80 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex justify-center items-center z-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 border-4 border-slate-900">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 hidden lg:block ${isEven ? 'lg:order-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
