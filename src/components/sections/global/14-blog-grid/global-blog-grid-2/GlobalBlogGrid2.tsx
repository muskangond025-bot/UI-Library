"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid2() {
  const essays = [
    { num: '01', title: 'Sculptural Tailoring & Heavy Wool Drapes', tag: 'HAUTE COUTURE', author: 'Antoine Laurent', read: '6 MIN', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { num: '02', title: 'Swiss Horology & Mechanical Precision', tag: 'CRAFTSMANSHIP', author: 'Victoria Sterling', read: '8 MIN', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { num: '03', title: 'Monochrome Brutalism in Modern Sneakers', tag: 'INDUSTRIAL', author: 'Camilla Rossi', read: '5 MIN', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE GAZETTE • ISSUE #2</span>
          <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-4 tracking-tight">Cultural Essays & Field Notes</h2>
          <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {essays.map((e, idx) => (
            <motion.article key={idx} whileHover={{ y: -8 }} className="bg-white rounded-xl p-6 border border-stone-200 shadow-xl flex flex-col justify-between cursor-pointer group">
              <div>
                <div className="flex justify-between items-center mb-4 font-mono text-xs text-stone-500 border-b border-stone-200 pb-2">
                  <span>ESSAY {e.num}</span>
                  <span className="text-amber-900 font-bold">{e.tag}</span>
                </div>
                <div className="w-full h-60 rounded-lg overflow-hidden mb-5">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-2xl text-stone-950 group-hover:text-amber-900 transition-colors leading-snug mb-3">{e.title}</h3>
              </div>
              <div className="pt-4 border-t border-stone-100 flex justify-between items-center font-sans text-xs text-stone-600">
                <span className="font-medium text-stone-900">By {e.author}</span>
                <span className="font-mono text-stone-500">{e.read} READ</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}