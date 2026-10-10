"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalTestimonials15() {
  const reviews = [
    { name: 'Crystal Ray', role: 'Jewelry Designer', text: 'Prismatic light split and diamond facet layout.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Prism Tech', role: 'Refractive Studio', text: 'High-clarity feedback cards with rainbow sheen accents.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Facet Co.', role: 'Gemologist', text: 'Stunning geometric balance and crystal glow.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Diamond UI', role: 'Luxury Agency', text: 'Exclusive facet geometry for premium clients.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12">Diamond Prism Review Facets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 cursor-pointer h-[320px] flex flex-col justify-between"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">5.0 ★ PRISM</span>
              <p className="text-sm text-cyan-100 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                <img src={r.avatar} alt={r.name} className="w-9 h-9 rounded-full object-cover border border-cyan-400" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">{r.name}</h4>
                  <p className="text-[10px] text-slate-400">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}