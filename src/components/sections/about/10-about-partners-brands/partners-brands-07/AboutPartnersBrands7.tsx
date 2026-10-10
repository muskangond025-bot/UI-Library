import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, ExternalLink } from 'lucide-react';

export function AboutPartnersBrands7() {
  const brands = [
    { title: 'Platinum Chromium Labs', tier: 'Tier 1 Alliance' },
    { title: 'Silver Steel Cyber Shield', tier: 'Premier Auditor' },
    { title: 'Liquid Metal Cloud Tech', tier: 'Global Infrastructure' },
    { title: 'Titanium Hardware Corp', tier: 'Cryptographic Node' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-600 text-slate-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> METALLIC CHROMIUM #07 • ANIMATION: LIQUID METAL SHEEN & PLATINUM REFLECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400">
            Metallic Chromium Brand Partners
          </h2>
          <p className="opacity-70 text-base sm:text-lg">
            Brushed platinum gradient borders with liquid metal sheen reflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border-2 border-slate-400/40 hover:border-slate-200 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-slate-700/40 text-slate-200 border border-slate-500/50 w-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">{b.tier}</span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-slate-100">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-300 font-bold">
                <span>EMBOSSED SEAL</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
