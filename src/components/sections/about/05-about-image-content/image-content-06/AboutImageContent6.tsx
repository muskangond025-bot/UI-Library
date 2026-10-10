import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-4">
          <span className="px-3.5 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 text-xs font-mono font-bold uppercase">BENTO MEDIA #06</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">MULTI-TILE FROSTED MEDIA BENTO</h2>
          <p className="text-slate-300 text-base leading-relaxed">{settings.excerpt || 'Pairing hero photography with modular frosted info tiles for high visual density.'}</p>
        </div>
        <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden min-h-[300px] relative">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"} alt="Bento Media" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
