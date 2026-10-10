import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function AboutBrandStory15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl shadow-[0_0_35px_rgba(236,72,153,0.35)]"
        >
          <div className="bg-slate-950 rounded-[22px] p-6 sm:p-10 lg:p-12 space-y-6 relative overflow-hidden">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 shrink-0" /> NEON EDGE GLOW #15
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight">
              {settings.title || '360° NEON RAINBOW EDGE GLOW SPOTLIGHT'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {settings.excerpt || 'Vibrant multi-tinted neon border gradient framing dark glass brand containers with high energetic visibility.'}
            </p>
            <div className="pt-4 border-t border-slate-800">
              <motion.button whileHover={{ scale: 1.04 }} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
                <span>Discover Neon Story</span> <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
