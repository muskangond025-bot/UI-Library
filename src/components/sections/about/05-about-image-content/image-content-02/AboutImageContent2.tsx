import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto p-8 rounded-3xl bg-slate-900 shadow-[18px_18px_36px_#0b0f19,-18px_-18px_36px_#1b253b] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-[inset_6px_6px_12px_rgba(0,0,0,0.7)] border border-slate-800">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"} alt="Neumorphic Media" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7 space-y-4">
          <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-mono font-bold uppercase">NEUMORPHIC MEDIA #02</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">TACTILE VISUAL DEPTH</h2>
          <p className="text-slate-400 text-base leading-relaxed">{settings.excerpt || 'Restoring physical dimension to digital interface components through tactile shadow depth.'}</p>
        </div>
      </div>
    </section>
  );
}
