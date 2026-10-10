"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

export function GlobalTestimonials1() {
  const reviews = [
    { name: 'Sophia Chen', role: 'Design Director', text: 'The glassmorphic aesthetics and fluid motion completely elevated our brand presentation.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop', bg: 'col-span-1 md:col-span-2 row-span-2' },
    { name: 'Marcus Vance', role: 'Lead Architect', text: 'Unmatched component quality and seamless responsive behavior.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', bg: 'col-span-1 row-span-1' },
    { name: 'Elena Rostova', role: 'Product Strategist', text: 'Clean code architecture and striking visual impact.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop', bg: 'col-span-1 row-span-1' },
    { name: 'David Kim', role: 'Creative Lead', text: 'Our conversion increased significantly after integrating these master sections.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', bg: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> GLASSMORPHIC TESTIMONIALS
            </div>
            <h2 className="text-4xl font-extrabold text-white">Loved by Industry Leaders</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between cursor-pointer group hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 ${r.bg}`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
                <Quote className="w-6 h-6 text-cyan-400 opacity-60" />
              </div>
              <p className="text-slate-200 text-base leading-relaxed font-medium my-2">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-cyan-400/40 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{r.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}