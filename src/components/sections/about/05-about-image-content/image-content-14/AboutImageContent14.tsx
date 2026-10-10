import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-950 via-slate-900 to-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Capsule Floating Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="relative w-full max-w-md h-[460px] rounded-[100px] border-2 border-indigo-400/30 p-3 bg-indigo-950/40 backdrop-blur-2xl shadow-[0_20px_60px_rgba(99,102,241,0.25)] overflow-hidden">
            <img 
              src={settings.featuredImage || "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"} 
              alt="Liquid Capsule Media" 
              className="w-full h-full object-cover rounded-[90px]"
            />
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-slate-900/90 backdrop-blur-xl border border-indigo-400/40 text-xs font-medium text-indigo-200 shadow-xl whitespace-nowrap"
            >
              💧 Liquid Morphism Capsule
            </motion.div>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
            Fluid Design Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            {settings.title || 'Seamless Design Formed by Organic Digital Flow'}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {settings.excerpt || 'Fluid capsules and glass-curved silhouettes come together to present brand stories with artistic grace and high visual clarity.'}
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30">
              Explore Vision
            </button>
            <button className="px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all">
              Watch Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
