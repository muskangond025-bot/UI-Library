import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Flagship Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            Flagship Showcase 020
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
            {settings.title || 'Ultra Flagship Media Engine for Global Digital Brands'}
          </h2>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal">
            {settings.excerpt || 'The ultimate fusion of full-bleed imagery, reactive dynamic lighting, and flawless typography. Tailored for enterprise product launches and visionary storytelling.'}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
              <div className="text-2xl font-black text-blue-400">100%</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Vector Clarity</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800">
              <div className="text-2xl font-black text-violet-400">60 FPS</div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Fluid Motion</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105">
              Launch Showcase
            </button>
            <button className="px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-slate-200 font-bold text-sm backdrop-blur-xl transition-all">
              Documentation
            </button>
          </div>
        </motion.div>

        {/* Flagship Media Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-800/80 to-slate-950/90 border border-slate-700/50 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <div className="relative rounded-2xl overflow-hidden h-[450px]">
              <img 
                src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"} 
                alt="Flagship Showcase Media" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Ready</div>
                  <div className="text-xs text-slate-400 mt-0.5">Fully interactive responsive layout</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-bold">
                  v2.0 ACTIVE
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
