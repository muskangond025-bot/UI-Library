import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold rounded uppercase">SPATIAL MEDIA #04</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">SPATIAL Z-INDEX MEDIA</h2>
          <p className="text-zinc-400 text-base leading-relaxed">{settings.excerpt || 'Multi-layered visual depth layering text cards over parallax images.'}</p>
        </div>
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"} alt="Spatial Media" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
