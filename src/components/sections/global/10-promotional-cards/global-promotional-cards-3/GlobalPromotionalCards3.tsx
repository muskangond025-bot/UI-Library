"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalPromotionalCards3() {
  const cards = [
    { title: 'HARDWARE DROP', off: '50% OFF', code: 'DROP50', bg: 'bg-lime-400', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop' },
    { title: 'AUDIO MATRIX', off: '35% OFF', code: 'AUDIO35', bg: 'bg-cyan-400', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'CYBER STREET', off: '40% OFF', code: 'CYBER40', bg: 'bg-fuchsia-400', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'SNEAKER CODE', off: '25% OFF', code: 'KICKS25', bg: 'bg-yellow-400', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 border-b-4 border-black pb-6">
          <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
            <Zap className="w-5 h-5 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">FLASH PROMO CARDS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={`border-4 border-black ${c.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between h-[360px]`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-3 py-1 rounded">{c.off}</span>
                <div className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full h-36 border-2 border-black rounded-lg overflow-hidden bg-white my-3">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-black/70">USE: {c.code}</span>
                <h3 className="text-xl font-black uppercase text-black">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}