"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid7() {
  const [hoverIdx, setHoverIdx] = useState(0);
  const posts = [
    { title: 'The Philosophy of High-Density Minimalist Urban Living', cat: 'URBANISM', date: '2026', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { title: 'Designing High-Efficiency Electric Powertrains for Hypercars', cat: 'AUTOMOTIVE', date: '2026', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Generative Typography & Variable Font Physics in Modern Web', cat: 'TYPOGRAPHY', date: '2026', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    { title: 'Tactile Interfaces & Haptic Feedback Mechanics in Hardware', cat: 'HARDWARE', date: '2026', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-zinc-950 text-zinc-100 font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">INDEX #7 • CURATED WRITINGS</span>
          <h2 className="text-4xl font-extrabold text-white mb-6">Typographic Focus Feed</h2>
          
          <div className="flex flex-col border-t border-zinc-800">
            {posts.map((p, idx) => (
              <div key={idx} onMouseEnter={() => setHoverIdx(idx)} className="py-6 border-b border-zinc-800 flex justify-between items-center cursor-pointer group">
                <div>
                  <span className="text-xs font-mono text-zinc-500 mr-4">{p.cat}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors inline-block">{p.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 h-[400px] rounded-3xl overflow-hidden border border-zinc-800 relative hidden lg:block">
          <motion.img key={hoverIdx} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} src={posts[hoverIdx].img} alt="Preview" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}