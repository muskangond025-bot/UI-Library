"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCategoryGrid2() {
  const items = [
    { id: '01', title: 'Haute Couture', sub: 'Autumn / Winter Edition', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', tag: '01 / ESSENTIALS' },
    { id: '02', title: 'Timepiece Masterworks', sub: 'Swiss Precision Craft', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop', tag: '02 / LUXURY' },
    { id: '03', title: 'Urban Footwear', sub: 'Street Culture Icon', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', tag: '03 / TRENDING' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-amber-50/50 text-slate-900 font-sans border-y border-amber-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">Editorial Deck</span>
          <h2 className="text-4xl sm:text-6xl font-serif mt-4 text-slate-900 font-normal">
            Selected Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group cursor-pointer bg-white rounded-2xl p-6 shadow-xl shadow-amber-950/5 border border-amber-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden rounded-xl h-72 mb-6 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 text-slate-900 text-xs font-mono px-3 py-1 rounded-full font-bold">
                  {item.tag}
                </div>
              </div>
              <div>
                <span className="text-amber-800 text-xs font-mono font-semibold uppercase">{item.sub}</span>
                <h3 className="text-2xl font-serif text-slate-950 mt-1 mb-4 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-950">
                  Explore Catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}