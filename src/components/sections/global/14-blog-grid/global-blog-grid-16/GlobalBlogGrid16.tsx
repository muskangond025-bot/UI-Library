"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid16() {
  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">SPOTLIGHT FEED #16</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Compact Article Feed</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div whileHover={{ y: -6 }} className="lg:col-span-6 bg-slate-800/80 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between min-h-[440px] cursor-pointer group">
            <div className="w-full h-60 rounded-2xl overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold">SPOTLIGHT</span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mt-2 mb-2">Designing Volumetric Audio Racks</h3>
              <p className="text-slate-400 text-sm line-clamp-2">How binaural spatial DSP algorithms are transforming virtual synthesizer software.</p>
            </div>
          </motion.div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            {[
              { title: 'Parametric Concrete Architectural Micro-Structures', tag: 'ARCHITECTURE' },
              { title: 'Generative Brand Guidelines & Variable Typography', tag: 'BRANDING' },
              { title: 'High-Density Solid State Battery Chemistry', tag: 'CLEANTECH' },
              { title: 'Tactile Fabric Weaving & Sustainable Textiles', tag: 'FASHION' },
            ].map((p, idx) => (
              <motion.div key={idx} whileHover={{ x: 6 }} className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700 flex items-center justify-between cursor-pointer group hover:border-blue-500">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">{p.tag}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mt-1">{p.title}</h4>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}