import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe2, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export function AboutPartnersBrands1() {
  const partners = [
    { name: 'NVIDIA AI Tech', tier: 'Global Premier', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80', metric: '99.9% Integration' },
    { name: 'AWS Cloud Systems', tier: 'Infrastructure Partner', logo: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&w=200&q=80', metric: 'Multi-Region Scale' },
    { name: 'Google Cloud Platform', tier: 'Enterprise Security', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80', metric: 'Zero-Trust Node' },
    { name: 'Microsoft Azure Alliance', tier: 'Strategic Ecosystem', logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80', metric: 'Global Deployment' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> FROSTED GLASSMORPHISM #01 • ANIMATION: INFINITE MARQUEE TICKER & AMBIENT ORBS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-200">
            Global Enterprise Brand Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Frosted glassmorphism panels with ambient lighting and real-time alliance status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                    {p.tier}
                  </span>
                  <Globe2 className="w-5 h-5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{p.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{p.metric}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Verified Alliance
                </span>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
