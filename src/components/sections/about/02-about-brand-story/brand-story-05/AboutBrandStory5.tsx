import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export function AboutBrandStory5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-indigo-950/40 text-indigo-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-indigo-900/60 rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-indigo-400/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-400/30 shadow-[inset_0_4px_12px_rgba(0,0,0,0.5),0_12px_24px_rgba(0,0,0,0.3)] relative group"
            >
              <img
                src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"}
                alt={settings.title || "Claymorphic Brand Story"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-300/40 text-indigo-200 text-xs font-mono font-extrabold uppercase tracking-widest shadow-md flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-300" /> CLAYMORPHIC #05
                </span>
              </div>
            </motion.div>

            {/* Right Content Box */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight"
              >
                {settings.title || 'ORGANIC VOLUME & PLAYFUL BRAND HERITAGE'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-indigo-200/90 text-base sm:text-lg leading-relaxed"
              >
                {settings.excerpt || 'Embracing organic soft volume, inner shadow illumination, and friendly tactile UI elements that bring warmth to enterprise technology.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 pt-4 border-t border-indigo-500/20 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.3)] transition-all flex items-center gap-2"
                >
                  <span>Explore Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
