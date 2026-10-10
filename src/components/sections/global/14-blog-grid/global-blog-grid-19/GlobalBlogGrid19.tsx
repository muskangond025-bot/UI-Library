"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid19() {
  const posts = [
    { title: 'Designing High-Density Minimalist Workspaces', tag: 'SPACES', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Generative Shader Art & Neural Canvas Rendering', tag: 'DIGITAL ART', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Organic Minimalist Apparel & Zero-Waste Weaving', tag: 'SUSTAINABILITY', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 border-b border-white/20 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">OVERLAY FEED #19</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">High-Contrast Overlay Cards</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="h-[460px] rounded-3xl overflow-hidden relative cursor-pointer group border border-white/10">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-between">
                <span className="self-start text-xs font-mono font-bold text-rose-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-rose-500/30">
                  {p.tag}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-rose-400 transition-colors mb-4">{p.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}