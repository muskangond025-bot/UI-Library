import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-indigo-950/40 text-indigo-100 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-indigo-900/60 rounded-[2.5rem] p-8 border border-indigo-400/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-400/30">
          <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Clay Media" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-indigo-950/80 text-indigo-200 text-xs font-mono font-extrabold uppercase">CLAY POD #05</span>
          <h2 className="text-3xl font-black text-white leading-tight">ORGANIC 3D MEDIA SHOWCASE</h2>
          <p className="text-indigo-200/90 text-base leading-relaxed">{settings.excerpt || 'Soft volume image pods with tactile inner shadow illumination.'}</p>
        </div>
      </div>
    </section>
  );
}
