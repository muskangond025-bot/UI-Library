"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, Eye, Bookmark } from 'lucide-react';

export function GlobalBlogGrid1() {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">DESIGN DISPATCH #1</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">Editorial Hero & Magazine Split</h2>
          </div>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-bold font-mono flex items-center gap-2">
            VIEW ALL DISPATCHES <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div whileHover={{ y: -6 }} className="lg:col-span-7 bg-slate-900/80 rounded-3xl border border-cyan-500/30 p-8 backdrop-blur-xl group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="w-full h-80 rounded-2xl overflow-hidden relative mb-6">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Hero" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-cyan-500 text-slate-950 text-xs font-bold font-mono px-3 py-1 rounded-full">SPATIAL UI</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-cyan-400 mb-3">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8 MIN READ</span>
                <span>• OCT 10, 2026</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">Designing Volumetric Spatial Interfaces for Next-Gen VR</h3>
              <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6">Deep dive into depth shaders, volumetric glassmorphism, and spatial interaction physics replacing 2D layout constraints.</p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-10 h-10 rounded-full object-cover border border-cyan-400/50" />
                <div>
                  <p className="text-sm font-bold text-slate-200">Dr. Evelyn Reed</p>
                  <p className="text-[11px] font-mono text-slate-400">Principal UX Scientist</p>
                </div>
              </div>
              <span className="text-cyan-400 text-xs font-bold font-mono flex items-center gap-1">READ STORY →</span>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {[
              { title: 'Sustainable Apparel & Zero-Waste Weaving', tag: 'FASHION', date: 'OCT 08', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
              { title: 'Monolithic Concrete Architecture & Interiors', tag: 'INTERIOR', date: 'OCT 05', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
              { title: 'Skeletonized Titanium Horology Craftsmanship', tag: 'LUXURY', date: 'OCT 02', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ x: 6 }} className="bg-slate-900/60 rounded-2xl border border-white/10 p-5 flex gap-4 cursor-pointer group hover:border-cyan-500/50 transition-all">
                <img src={p.img} alt={p.title} className="w-28 h-24 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform" />
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{p.tag}</span>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mt-1 leading-snug">{p.title}</h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{p.date} • 4 MIN READ</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}