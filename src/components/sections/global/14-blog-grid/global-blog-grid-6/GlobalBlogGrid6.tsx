"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid6() {
  const posts = [
    { title: 'Generative AI Workflows for Modern Brand Identity Systems', category: 'ARTIFICIAL INTELLIGENCE', date: 'OCT 10', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Spatial Audio Engineering & Atmospheric Binaural Sound', category: 'SOUND DESIGN', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Architectural Parametric Facades in Desert Environments', category: 'ARCHITECTURE', date: 'OCT 06', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono border border-indigo-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> GLASSMORPHIC PORTAL #6
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Floating Ambient Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -10, rotate: 0.5 }} className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col justify-between min-h-[460px] cursor-pointer group hover:border-indigo-400/50">
              <div>
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-indigo-300 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-indigo-400/30">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-3">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-300">
                <span>{p.date}, 2026</span>
                <span className="text-indigo-400 font-bold flex items-center gap-1">READ <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}