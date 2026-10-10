import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export function AboutPartnersBrands5() {
  const brands = [
    { title: 'Clay Cloud Enterprise', category: '3D Infrastructure', code: 'CLAY-001', tag: 'Premier Tier' },
    { title: 'Mint Green ESG Alliance', category: 'Sustainability', code: 'CLAY-002', tag: 'Eco Standard' },
    { title: 'Soft Surface Design Lab', category: 'Spatial UI', code: 'CLAY-003', tag: 'Verified' },
    { title: 'Pastel Cyber Tech', category: 'Data Protection', code: 'CLAY-004', tag: 'Audited' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> 3D CLAYMORPHISM #05 • ANIMATION: SOFT 3D SQUISHY REACTION & MOUSE TILT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            3D Claymorphic Strategic Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg text-slate-700">
            Fluffy 3D rounded clay logo cards with inner top-light shadow & squishy button feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-300 text-slate-950 font-bold shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                    {b.tag}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider block">{b.category}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {b.code}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
