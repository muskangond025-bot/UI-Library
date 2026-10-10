"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid3() {
  const posts = [
    { title: 'HARDWARE RIGS: BUILDING LIQUID COOLED CYBER COMPUTERS', tag: 'HARDWARE', bg: 'bg-lime-400', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEURAL AUDIO SYNTHESIS & REALTIME SYNTH RACKS', tag: 'AUDIO', bg: 'bg-cyan-400', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'STREET WEAR MATRIX: MONOCHROME TECHWEAR DRIP', tag: 'STYLE', bg: 'bg-fuchsia-400', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'NEON RUNNER KINETIC FOOTWEAR ARCHITECTURE', tag: 'KICKS', bg: 'bg-yellow-400', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER BLOG STREAM #3</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded">SYSTEM: ONLINE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: -6, y: -6 }} className={"border-4 border-black " + p.bg + " p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between min-h-[420px]"}>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{p.tag}</span>
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-full h-40 border-3 border-black rounded-xl overflow-hidden bg-white mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-black uppercase text-black leading-tight">{p.title}</h3>
              </div>
              <div className="pt-4 border-t-2 border-black/30 mt-4 text-[11px] font-black underline">DISPATCH POST →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}