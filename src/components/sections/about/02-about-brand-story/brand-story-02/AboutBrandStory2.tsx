import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Award, Clock } from 'lucide-react';

export function AboutBrandStory2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-slate-900 shadow-[20px_20px_40px_#0b0f19,-20px_-20px_40px_#1b253b] border border-slate-800/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-[inset_6px_6px_12px_rgba(0,0,0,0.7)] border border-slate-800 group"
            >
              <img
                src={settings.featuredImage || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"}
                alt={settings.title || "Neumorphic Brand Story"}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md shadow-[4px_4px_8px_#0b0f19,-4px_-4px_8px_#1b253b] text-sky-400 text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-sky-400" /> NEUMORPHIC #02
                </span>
              </div>
            </motion.div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 text-xs font-mono text-slate-400"
              >
                <span className="flex items-center gap-1 text-sky-400 font-bold">
                  <Award className="w-3.5 h-3.5 shrink-0" /> TACTILE CRAFTSMANSHIP
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 shrink-0" /> ESTABLISHED 2019
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
              >
                {settings.title || 'THE ART OF SOFT TACTILE PRODUCT ENGINEERING'}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-400 text-base sm:text-lg leading-relaxed"
              >
                {settings.excerpt || 'We combine physical product feel with soft digital interfaces. By exploring dual shadow depth dynamics and tactile feedback, we create interfaces that users can almost feel.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 pt-4 border-t border-slate-800/80 flex-wrap"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 rounded-xl bg-slate-900 shadow-[6px_6px_12px_#0b0f19,-6px_-6px_12px_#1b253b] active:shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Discover Our Legacy</span>
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
