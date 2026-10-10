import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Moon } from 'lucide-react';

export function AboutBrandStory10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-10 lg:p-14 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden"
        >
          <div className="space-y-6 relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> DARK VELVET GLASS #10
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.15]">
              {settings.title || 'DARK VELVET LUXURY BRAND MANIFESTO'}
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {settings.excerpt || 'Deep dark mode aesthetics enhanced with subtle violet glow aura badges and rich high-contrast typography.'}
            </p>
            <div className="pt-4 border-t border-zinc-800">
              <motion.button whileHover={{ scale: 1.04 }} className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center gap-2">
                <span>Read Full Manifesto</span> <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
