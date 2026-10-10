import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <motion.div animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 bg-slate-900/40 border border-white/15 backdrop-blur-3xl rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold uppercase">AURORA MEDIA #08</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">AURORA FLUID MESH MEDIA</h2>
          <p className="text-purple-100/90 text-base leading-relaxed">{settings.excerpt || 'Vivid liquid gradient mesh backdrop drifting behind frosted visual content.'}</p>
        </div>
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} alt="Aurora Media" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
