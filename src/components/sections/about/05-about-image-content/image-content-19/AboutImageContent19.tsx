import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-amber-950/20 text-amber-950 dark:text-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-block px-3.5 py-1 rounded-lg bg-amber-800/10 border border-amber-800/30 text-amber-800 dark:text-amber-300 text-xs font-serif italic">
            Classic Tactile Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-950 dark:text-amber-100 leading-tight">
            {settings.title || 'Warm Embossed Vintage & Editorial Photography Frame'}
          </h2>
          <p className="text-amber-900/80 dark:text-amber-200/80 text-base sm:text-lg leading-relaxed font-sans">
            {settings.excerpt || 'Tactile depth and warm editorial typography present timeless brand stories with refined elegance.'}
          </p>
          <div className="pt-2 flex items-center gap-6 font-serif">
            <div>
              <div className="text-2xl font-bold text-amber-900 dark:text-amber-300">EST. 2018</div>
              <div className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest mt-0.5">Heritage</div>
            </div>
            <div className="h-8 w-px bg-amber-800/30" />
            <div>
              <div className="text-2xl font-bold text-amber-900 dark:text-amber-300">HANDCRAFTED</div>
              <div className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest mt-0.5">Quality</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="p-4 rounded-3xl bg-amber-900/10 dark:bg-amber-950/60 border-2 border-amber-700/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),0_10px_30px_rgba(0,0,0,0.2)]">
            <img 
              src={settings.featuredImage || "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80"} 
              alt="Vintage Retro Media" 
              className="w-full h-[380px] object-cover rounded-2xl border border-amber-700/20 sepia-[0.25]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
