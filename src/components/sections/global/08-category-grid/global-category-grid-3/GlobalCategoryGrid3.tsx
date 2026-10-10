"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export function GlobalCategoryGrid3() {
  const cards = [
    { title: 'GAMING GEAR', count: '450+ ITEMS', bg: 'bg-lime-400', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', tag: 'HOT' },
    { title: 'AUDIO TECH', count: '280+ ITEMS', bg: 'bg-cyan-400', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', tag: 'NEW' },
    { title: 'SNEAKER DROP', count: '610+ ITEMS', bg: 'bg-fuchsia-400', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', tag: 'LIMITED' },
    { title: 'STREETWEAR', count: '890+ ITEMS', bg: 'bg-yellow-400', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', tag: 'SALE' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-50 text-slate-950 font-sans border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-b-4 border-black pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-lime-400 flex items-center justify-center font-black rounded">
              <Zap className="w-5 h-5 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              POPULAR CATEGORIES
            </h2>
          </div>
          <span className="hidden sm:inline-block bg-black text-white px-4 py-2 text-sm font-extrabold uppercase rounded border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            SPRING 2026 DROP
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className={`border-4 border-black ${card.bg} p-5 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer flex flex-col justify-between h-[340px]`}
            >
              <div className="flex justify-between items-center">
                <span className="bg-black text-white text-xs font-black px-2.5 py-1 uppercase rounded">
                  {card.tag}
                </span>
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="w-full h-36 border-2 border-black rounded-lg overflow-hidden my-4 bg-white">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs font-black tracking-wider text-black/70">{card.count}</span>
                <h3 className="text-xl font-black uppercase tracking-tight text-black mt-0.5">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}