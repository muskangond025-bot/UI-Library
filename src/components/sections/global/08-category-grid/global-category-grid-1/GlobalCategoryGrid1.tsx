"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function GlobalCategoryGrid1() {
  const categories = [
    { id: 1, title: 'Luxury Apparel', items: '1,420 Products', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 md:col-span-2 row-span-2', badge: 'Trending' },
    { id: 2, title: 'Cyber Tech', items: '890 Products', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-1', badge: 'New Tech' },
    { id: 3, title: 'Modern Living', items: '640 Products', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 row-span-1', badge: 'Popular' },
    { id: 4, title: 'Velvet Beauty', items: '310 Products', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop', size: 'col-span-1 md:col-span-2 row-span-1', badge: 'Featured' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" /> Glass Bento Grid
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Explore Collections
            </h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group">
            Browse All Categories <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${cat.size}`}
            >
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white backdrop-blur-md border border-white/10">
                  {cat.badge}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="relative z-10 mt-auto pt-8">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-1">{cat.items}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}