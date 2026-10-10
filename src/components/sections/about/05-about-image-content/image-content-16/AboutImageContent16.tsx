import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto border border-stone-700/60 rounded-3xl p-6 sm:p-10 bg-stone-950/40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="text-xs font-mono text-stone-400 uppercase tracking-widest border-b border-stone-800 pb-2">
              016 // ARCHITECTURAL HAIRLINE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-amber-100 leading-tight">
              {settings.title || 'Structured Hairline Grid for Minimalist Visual Harmony'}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans">
              {settings.excerpt || 'Calculated geometric grids paired with subtle warm neutrals. Designed for luxury brands requiring understated elegance and architectural clarity.'}
            </p>
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>SCALE: 1:1.618</span>
              <span>GRID: 12-COL FINE</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="p-2 border border-stone-700/80 bg-stone-900 rounded-2xl shadow-xl">
              <img 
                src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"} 
                alt="Architectural Media" 
                className="w-full h-[360px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
