"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid18() {
  const posts = [
    { title: 'The Future of Autonomous Urban Mobility Systems', tag: 'MOBILITY', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Monolithic Interior Space Planning in High-Rise Architecture', tag: 'INTERIORS', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { title: 'Hand-Assembled Mechanical Watch Movements & Escapements', tag: 'CRAFT', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-zinc-950 text-white font-sans border-y border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">PARALLAX FEED #18</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Cover Image Lift Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-emerald-500 transition-all">
              <div>
                <div className="w-full h-60 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-emerald-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs font-bold text-zinc-400">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}