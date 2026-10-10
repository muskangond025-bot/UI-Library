"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Terminal, ShieldAlert } from 'lucide-react';

export function GlobalBlogGrid10() {
  const posts = [
    { title: 'ZERO-DAY PROTOCOL: QUANTUM ENCRYPTION SHIELDS', tag: 'SECURITY', id: 'LOG_01', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEURAL SUB-NETWORKS IN AUTONOMOUS DRONE SWARMS', tag: 'AI CORE', id: 'LOG_02', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
    { title: 'OPTICAL FIBER VOLUMETRIC DATA TRANSMISSION', tag: 'NETWORKS', id: 'LOG_03', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black text-cyan-400 font-mono border-y border-cyan-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-b border-cyan-500/30 pb-6">
          <div className="flex items-center gap-3">
            <Terminal className="w-7 h-7 text-cyan-400" />
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-widest uppercase">CYBER MATRIX #10</h2>
          </div>
          <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded">STATUS: RUNNING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-slate-950 border border-cyan-500/40 rounded-xl p-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-between cursor-pointer group hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <div>
                <div className="flex justify-between items-center text-xs text-cyan-400 mb-4">
                  <span className="font-bold">{p.id}</span>
                  <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">{p.tag}</span>
                </div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-cyan-500/20 mb-4 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-cyan-500/20 text-xs font-bold text-cyan-400 flex justify-between items-center">
                <span>DECRYPT LOG</span>
                <span>[→]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}