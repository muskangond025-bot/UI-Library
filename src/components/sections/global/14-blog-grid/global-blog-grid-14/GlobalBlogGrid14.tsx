"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalBlogGrid14() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">BENTO GRID #14</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-3">Modern Bento Article Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 bg-zinc-800/80 rounded-3xl p-8 border border-zinc-700 flex flex-col justify-between min-h-[360px] cursor-pointer group">
            <div>
              <span className="text-xs font-mono text-orange-400 font-bold">FEATURED ESSAY</span>
              <h3 className="text-3xl font-extrabold text-white group-hover:text-orange-400 transition-colors mt-4 mb-3">Designing Frictionless Commerce Experiences</h3>
              <p className="text-zinc-400 text-sm line-clamp-2">How checkout optimization, instant address auto-fill, and biometric authentication drive conversion rates.</p>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400 pt-6 border-t border-zinc-700">
              <span>BY SARAH JENKINS • 6 MIN</span>
              <ArrowUpRight className="w-5 h-5 text-orange-400" />
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="bg-zinc-800/80 rounded-3xl p-6 border border-zinc-700 flex flex-col justify-between min-h-[360px] cursor-pointer group">
            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">Micro-Animations in Dashboards</h4>
            <span className="text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-700">READ NOW →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}