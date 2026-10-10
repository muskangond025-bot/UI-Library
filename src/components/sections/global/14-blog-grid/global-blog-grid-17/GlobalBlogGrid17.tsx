"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid17() {
  const [activeTab, setActiveTab] = useState('DESIGN');
  const items = {
    DESIGN: [
      { title: 'Spatial UI Physics in WebGL', date: 'OCT 10', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
      { title: 'Generative Typography Paradigms', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    ],
    TECH: [
      { title: 'Quantum Neural Rendering VFX', date: 'OCT 09', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
      { title: 'Zero-Day Security Shields', date: 'OCT 07', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop' },
    ]
  };

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">TABBED GRID #17</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Industry Insights Hub</h2>
          </div>
          <div className="flex gap-2 bg-slate-900 p-1.5 rounded-full border border-slate-800">
            {['DESIGN', 'TECH'].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={"px-5 py-2 rounded-full text-xs font-mono font-bold transition-all " + (activeTab === tab ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white')}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(items[activeTab] || items.DESIGN).map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between min-h-[400px] cursor-pointer group hover:border-purple-500">
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">{p.title}</h3>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
                <span>{p.date}, 2026</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}