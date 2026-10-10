"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowUpRight } from 'lucide-react';

export function GlobalCategoryGrid20() {
  const items = [
    { title: 'Omnichannel Apparel', count: '2.4K Products', rating: '4.9 ★', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', badge: 'FLAGSHIP' },
    { title: 'Next-Gen Cyber Tech', count: '1.8K Products', rating: '5.0 ★', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', badge: 'TOP RATED' },
    { title: 'Luxury Living Suite', count: '950 Products', rating: '4.8 ★', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', badge: 'BEST SELLER' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono uppercase border border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Master Catalog
            </div>
            <h2 className="text-4xl font-black text-white">Omnichannel Master Grid</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl hover:border-cyan-500 transition-all cursor-pointer h-[420px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded-full border border-cyan-800">{item.badge}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {item.rating}</span>
              </div>
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-700 my-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 font-mono">{item.count}</span>
                  <h3 className="text-2xl font-black text-white mt-0.5">{item.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}