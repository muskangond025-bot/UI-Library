"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid13() {
  const posts = [
    { title: 'The Architectural Principles of Clean Component Isolation', tag: 'ENGINEERING', read: '6 min', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop' },
    { title: 'Optimizing Micro-Frontend Hydration for Enterprise Web Apps', tag: 'PERFORMANCE', read: '9 min', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Designing Accessible High-Contrast Data Visualization Widgets', tag: 'ACCESSIBILITY', read: '4 min', img: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-sky-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-sky-800 pb-6">
          <div>
            <span className="text-xs font-mono text-sky-400 font-bold bg-sky-900/60 px-3 py-1 rounded-full">DUAL-TONE HUB #13</span>
            <h2 className="text-4xl font-extrabold text-white mt-3">Engineering & Web Systems</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-sky-900/40 rounded-2xl p-6 border border-sky-700/40 flex flex-col justify-between min-h-[440px] cursor-pointer group hover:border-sky-400 transition-all">
              <div>
                <div className="w-full h-52 rounded-xl overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-xs font-mono text-sky-400 font-bold">{p.tag} • {p.read}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors mt-2">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-sky-800 flex justify-between items-center text-xs font-bold text-sky-300">
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}