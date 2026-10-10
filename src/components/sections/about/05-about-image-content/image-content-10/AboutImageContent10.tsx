import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto p-8 sm:p-14 bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-mono font-bold uppercase">DARK VELVET MEDIA #10</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">DARK VELVET LUXURY POSTER</h2>
          <p className="text-zinc-300 text-base leading-relaxed">{settings.excerpt || 'Deep dark mode aesthetics enhanced with subtle violet glow aura badges and rich high-contrast poster framing.'}</p>
        </div>
        <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-violet-500/30">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"} alt="Velvet Media" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
