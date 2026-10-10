import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-emerald-400 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto border-2 border-emerald-500/50 p-8 rounded-xl bg-emerald-950/20 shadow-[0_0_40px_rgba(16,185,129,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        <div className="absolute -top-3.5 left-6 px-3 py-0.5 bg-black border border-emerald-500/60 text-xs text-emerald-400 font-bold uppercase">[HUD_MEDIA_BLUEPRINT // ID: 12]</div>
        <div className="lg:col-span-7 space-y-4 pt-2">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wider uppercase text-white leading-tight">SCI-FI HUD MEDIA BLUEPRINT</h2>
          <p className="text-emerald-300/80 text-sm font-sans leading-relaxed">{settings.excerpt || 'Futuristic technical indicators, telemetry badges, and corner bracket frames engineered for visual assets.'}</p>
        </div>
        <div className="lg:col-span-5 aspect-video border border-emerald-500/40 rounded-lg overflow-hidden p-1 bg-black/60">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="HUD Media" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}
