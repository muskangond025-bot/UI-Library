"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

export function GlobalBlogGrid8() {
  return (
    <section className="w-full py-20 px-6 bg-emerald-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-emerald-900/40 rounded-3xl p-8 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">SPOTLIGHT HUB #8</span>
              <h2 className="text-3xl font-black text-white mt-4 mb-4">Green Energy & Bio-Tech Innovations</h2>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6">Investigating synthetic biology, vertical urban farming, and carbon-negative building materials.</p>
            </div>
            <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm transition-all flex items-center justify-center gap-2">
              SUBSCRIBE TO DISPATCH <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Algae Bio-Reactors for Urban Air Purification', tag: 'BIO-TECH', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
              { title: 'Solar Thermal Storage in Solid Salt Battery Banks', tag: 'ENERGY', img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop' },
              { title: 'Mycelium Composites Replacing Expanded Polystyrene', tag: 'MATERIALS', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
              { title: 'Recycled Ocean Polymer Structural Mesh Systems', tag: 'RECYCLING', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-emerald-900/20 rounded-2xl border border-emerald-500/20 p-5 flex flex-col justify-between cursor-pointer group hover:border-emerald-400/50">
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">{p.tag}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mt-2">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}