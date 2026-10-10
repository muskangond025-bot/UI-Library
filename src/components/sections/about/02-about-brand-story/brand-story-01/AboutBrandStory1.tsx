import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Target, Award, Users } from 'lucide-react';

export function AboutBrandStory1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Background Light Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 rounded-3xl p-6 sm:p-10 lg:p-14 bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 flex-wrap"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" /> BRAND STORY #01
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0" /> FOUNDED IN 2018
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200"
              >
                {settings.title || 'CRAFTING DIGITAL ELEGANCE WITH UNCOMPROMISING PURPOSE'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
              >
                {settings.excerpt || 'From a small collective of visionary engineers and designers, we grew into a global design movement pushing the boundaries of web craftsmanship, modern aesthetics, and human-centric products.'}
              </motion.p>

              {/* Stats Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
              >
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">150+</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">GLOBAL AWARDS</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">2.4M</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">ACTIVE USERS</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">99.9%</h4>
                  <p className="text-xs text-slate-400 font-mono mt-1">CLIENT SATISFACTION</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2"
                >
                  <span>Read Full Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Media Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group">
                <img
                  src={settings.featuredImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"}
                  alt={settings.title || "Brand Story"}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/15 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
                    <Target className="w-4 h-4" /> OUR CORE MISSION
                  </div>
                  <p className="text-slate-300 leading-snug">To empower creators worldwide through timeless design architecture.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
