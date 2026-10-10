import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 shadow-2xl">
        <div className="bg-slate-950 rounded-[23px] p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase">CHROME MEDIA #07</span>
            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 leading-tight">LIQUID CHROME MEDIA FRAME</h2>
            <p className="text-slate-400 text-base leading-relaxed">{settings.excerpt || 'Reflective liquid metal borders highlighting crisp studio photography.'}</p>
          </div>
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Chrome Media" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
