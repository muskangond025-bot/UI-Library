import React from 'react';
import { motion } from 'framer-motion';

export function AboutCompanyStatistics17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden min-h-[380px] flex items-end p-8 border border-slate-800 shadow-2xl group">
        <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Cinema Stats" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[
            { num: '4K', label: 'CINEMATIC RESOLUTION' },
            { num: '60 FPS', label: 'FRAME RATE' },
            { num: '100M+', label: 'GLOBAL VIEWS' },
            { num: '150+', label: 'FILM FESTIVAL AWARDS' },
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <h3 className="text-3xl font-black text-amber-400 font-mono">{item.num}</h3>
              <p className="text-xs text-slate-200 font-bold uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
