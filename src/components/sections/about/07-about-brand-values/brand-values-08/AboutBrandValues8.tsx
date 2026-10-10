import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Target, Heart, Award } from 'lucide-react';

export function AboutBrandValues8({ data }: { data?: any }) {
  const values = [
    { title: 'Uncompromising Integrity', desc: 'Ethical execution, radical honesty, and total commitment to open transparency across all teams.', icon: Shield },
    { title: 'Purposeful Innovation', desc: 'Solving real-world challenges through elegant component architecture and forward-thinking design.', icon: Zap },
    { title: 'Customer Empathy', desc: 'Deep respect for user experience drives every button click, pixel offset, and micro-interaction.', icon: Heart },
    { title: 'Excellence Standard', desc: 'Setting industry benchmarks with high speed, zero compromise, and enterprise grade scalability.', icon: Target }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-amber-100/60 via-orange-50 to-yellow-100/40 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 shadow-md text-indigo-600 text-xs font-black tracking-widest uppercase border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5" /> SUNBURST VIBRANT MORPHISM #08
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Pillars of Our Brand Values</h2>
          <p className="text-slate-600 text-base sm:text-lg">Guiding principles shaping our culture, engineering standard, and product vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 bg-white/90 backdrop-blur-md border border-amber-200/60 shadow-lg shadow-amber-200/30`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                  <span>VALUE 0{i+1}</span>
                  <Award className="w-4 h-4 text-indigo-500 opacity-60" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
