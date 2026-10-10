import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden min-h-[500px] flex items-center">
      {/* Background Poster Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={settings.featuredImage || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80"} 
          alt="Full Cinema Poster" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            🎬 Cinematic Feature Overlay
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
            {settings.title || 'Immersive Full-Poster Digital Storytelling'}
          </h2>
          <p className="text-slate-200 text-base sm:text-xl max-w-2xl leading-relaxed drop-shadow">
            {settings.excerpt || 'Engage audiences with rich full-bleed imagery and high-contrast glass panels designed to evoke emotion and deliver clarity.'}
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition-all shadow-lg shadow-rose-600/40">
              Watch Film Trailer
            </button>
            <button className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all">
              Read Story Manifest
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
