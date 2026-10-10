"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid12() {
  const posts = [
    { title: 'Generative AI Tools for Next-Gen 3D Asset Creation', tag: 'AI TECH', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'High-Density Battery Chemistry & Solid State Storage', tag: 'CLEANTECH', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop' },
    { title: 'Parametric Concrete Facades for Urban Micro-Climates', tag: 'ARCHITECTURE', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">GLOW MATRIX #12</span>
          <h2 className="text-4xl font-extrabold text-white mt-3">Gradient Glow Article Hub</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="p-[1px] rounded-3xl bg-gradient-to-b from-amber-500 via-rose-500 to-purple-600 cursor-pointer group">
              <div className="bg-slate-900 rounded-[23px] p-6 h-full flex flex-col justify-between min-h-[440px]">
                <div>
                  <div className="w-full h-52 rounded-2xl overflow-hidden mb-5">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">{p.tag}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-2">{p.title}</h3>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>READ DISPATCH</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}