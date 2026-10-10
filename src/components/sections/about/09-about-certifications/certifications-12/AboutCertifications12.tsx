import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, ExternalLink } from 'lucide-react';

export function AboutCertifications12() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" /> PARALLAX STACKED GLASS #12 • ANIMATION: MULTI-PLANE SCROLL ELEVATION
        </span>
        <h2 className="text-3xl font-black">Floating Parallax Stacked Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1, 2, 3].map((n) => (
            <motion.div key={n} whileHover={{ y: -10 }} className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl space-y-4">
              <Layers className="w-8 h-8 text-indigo-400" />
              <h3 className="text-lg font-bold">Stacked Credential Layer 0{n}</h3>
              <p className="text-xs text-slate-400">Multi-plane stacked glass elevation effect.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
