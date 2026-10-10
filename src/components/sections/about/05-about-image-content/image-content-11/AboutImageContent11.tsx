import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-200 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-stone-950 border border-stone-800 rounded-2xl p-8 shadow-[12px_12px_0px_#1c1917] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded shadow">PHOTO JOURNAL #11</div>
        <div className="lg:col-span-7 space-y-4 pt-2">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100 leading-tight">FOUNDER PHOTO ARCHIVE</h2>
          <p className="text-stone-400 text-base font-sans leading-relaxed">{settings.excerpt || 'Bringing organic paper fold textures, embossed margins, and classic editorial weight into digital archives.'}</p>
        </div>
        <div className="lg:col-span-5 aspect-square rounded-xl overflow-hidden border border-stone-800">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"} alt="Founder Journal" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
