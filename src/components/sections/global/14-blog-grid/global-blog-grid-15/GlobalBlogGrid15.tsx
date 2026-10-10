"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalBlogGrid15() {
  const posts = [
    { title: 'Generative Shader Art in WebGL & Three.js', tag: 'CREATIVE CODE', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
    { title: 'Monochrome Footwear & Brutalist Kicks Design', tag: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
    { title: 'Precision Mechanical Swiss Watch Movements', tag: 'HOROLOGY', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-teal-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-xs font-mono text-teal-400 font-bold bg-teal-900/60 px-3 py-1 rounded-full border border-teal-500/30">SLIDE-OVER FEED #15</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">Creative Engineering Stream</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, idx) => (
            <motion.div key={idx} whileHover={{ x: 6 }} className="bg-teal-900/30 rounded-2xl p-6 border border-teal-500/30 flex flex-col justify-between min-h-[420px] cursor-pointer group hover:border-teal-400 transition-all">
              <div>
                <div className="w-full h-52 rounded-xl overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-xs font-mono text-teal-400 font-bold">{p.tag}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mt-2">{p.title}</h3>
              </div>
              <div className="pt-4 border-t border-teal-800 flex justify-between items-center text-xs font-bold text-teal-300">
                <span>VIEW POST</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}