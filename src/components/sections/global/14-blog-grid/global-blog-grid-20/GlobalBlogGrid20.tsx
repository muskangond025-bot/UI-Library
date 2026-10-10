"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid20() {
  const posts = [
    { title: 'The Next Decadal Shift in Spatial Web Interface Standards', tag: 'FUTURE WEB', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Quantum Neural Rendering Engine Implementations', tag: 'GRAPHICS', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Parametric Footwear Sole Engineering & Biomimicry', tag: 'DESIGN', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/30">3D PERSPECTIVE MATRIX #20</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Staggered Perspective Feed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }} className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-yellow-400 transition-all">
              <div>
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-yellow-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors leading-snug">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs font-bold text-slate-400">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4 text-yellow-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}