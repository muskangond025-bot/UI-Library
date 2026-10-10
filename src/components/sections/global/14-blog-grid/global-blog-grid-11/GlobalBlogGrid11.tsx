"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function GlobalBlogGrid11() {
  return (
    <section className="w-full py-24 px-6 bg-violet-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-violet-300 bg-violet-900/60 px-4 py-1.5 rounded-full border border-violet-500/30">ASYMMETRIC STORIES #11</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Floating Story Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/40 rounded-3xl p-6 border border-violet-500/30 backdrop-blur-xl flex flex-col justify-between h-[420px] cursor-pointer group">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Story 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">Volumetric Audio Acoustics</h3>
            <span className="text-xs text-violet-300 font-mono">5 MIN READ</span>
          </motion.div>

          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/60 rounded-3xl p-8 border border-violet-400/50 backdrop-blur-xl flex flex-col justify-between h-[500px] cursor-pointer group shadow-2xl shadow-violet-900/50">
            <div>
              <span className="text-xs font-mono font-bold text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full">FEATURED STORY</span>
              <div className="w-full h-60 rounded-2xl overflow-hidden my-6">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Story 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors">Neural Canvas Systems</h3>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-violet-300">
              <span>EXPLORE DISPATCH</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -12 }} className="bg-violet-900/40 rounded-3xl p-6 border border-violet-500/30 backdrop-blur-xl flex flex-col justify-between h-[420px] cursor-pointer group">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" alt="Story 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">Tactile Fabric Weaving</h3>
            <span className="text-xs text-violet-300 font-mono">4 MIN READ</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}