import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [activeTab, setActiveTab] = useState(0);

  const images = [
    settings.featuredImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-slate-950">
        <div className="lg:col-span-7 p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="px-3.5 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase rounded">SPLIT SWITCHER #09</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">INTERACTIVE MEDIA SWITCHER</h2>
            <p className="text-slate-400 text-base leading-relaxed">{settings.excerpt || 'Dual-pane image tab view offering seamless visual switching between workspace perspectives.'}</p>
          </div>
          <div className="flex gap-3 pt-4 border-t border-slate-800">
            <button onClick={() => setActiveTab(0)} className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase ${activeTab === 0 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}>STUDIO VIEW</button>
            <button onClick={() => setActiveTab(1)} className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase ${activeTab === 1 ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}>LABORATORY VIEW</button>
          </div>
        </div>
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto">
          <img src={images[activeTab]} alt="Split Media" className="w-full h-full object-cover transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
