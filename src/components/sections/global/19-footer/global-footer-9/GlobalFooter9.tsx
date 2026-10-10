"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalFooter9() {
  return (
    <footer className="w-full py-24 px-6 bg-neutral-950 text-white font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -6 }} className="md:col-span-2 bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between min-h-[260px] cursor-pointer group hover:border-rose-500/50 transition-all">
            <div>
              <div className="w-3 h-8 bg-rose-500 rounded-full mb-4 group-hover:scale-y-125 transition-transform"></div>
              <h3 className="text-2xl font-black text-white group-hover:text-rose-400 transition-colors">High-Tech Bento Footer #9</h3>
              <p className="text-neutral-400 text-sm mt-2 max-w-md">Building open-source WebGL component libraries for modern frontend developers.</p>
            </div>
            <span className="text-xs font-mono text-rose-400 font-bold">STATUS: ALL SYSTEMS OPERATIONAL</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ y: -6 }} className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-rose-500/50 transition-all">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">NAVIGATION</h4>
            <div className="space-y-2 text-sm font-bold">
              {['Documentation', 'Component Catalog', 'Benchmarks'].map((item, idx) => (
                <motion.p key={idx} whileHover={{ x: 4, color: '#f43f5e' }} className="transition-all">{item}</motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ y: -6 }} className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-rose-500/50 transition-all">
            <h4 className="text-xs font-mono text-neutral-400 font-bold">COMMUNITY</h4>
            <div className="space-y-2 text-sm font-bold">
              {['GitHub Organization', 'Discord Channel', 'Twitter / X'].map((item, idx) => (
                <motion.p key={idx} whileHover={{ x: 4, color: '#f43f5e' }} className="transition-all">{item}</motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono">
          <p>© 2026 Bento Systems Inc.</p>
          <p>BUILT WITH REACT & TAILWIND</p>
        </div>
      </div>
    </footer>
  );
}