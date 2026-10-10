"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

export function GlobalFooter16() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="w-full py-20 px-6 bg-slate-950 text-white font-sans border-t border-slate-800 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <motion.div variants={itemVariants} className="md:col-span-4">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4 cursor-pointer">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> AWWWARDS FOOTER SYSTEM #16
            </motion.div>
            <h3 className="text-3xl font-black text-white tracking-tight">Spatial Interface Studio</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">Pioneering volumetric UI components, WebGL shaders, and high-performance frontend designs for forward-thinking brands.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">PRODUCT</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {['Components', 'Design Systems', 'WebGL Shaders', 'Framer Presets'].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, color: '#22d3ee' }} className="transition-colors cursor-pointer flex items-center gap-1">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">RESOURCES</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {['Documentation', 'UI Benchmarks', 'Case Studies', 'Github Repo'].map((item, idx) => (
                <motion.li key={idx} whileHover={{ x: 6, color: '#22d3ee' }} className="transition-colors cursor-pointer">
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 bg-slate-900/60 rounded-3xl p-6 border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2"><Send className="w-4 h-4 text-cyan-400" /> Subscribe to Weekly Benchmarks</h4>
            <p className="text-xs text-slate-400 mb-4">Zero spam. Curated UI insights every Tuesday.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="dev@company.com" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white flex-1 focus:outline-none focus:border-cyan-500" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20">JOIN</motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Spatial Interface Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security SLA'].map((link, idx) => (
              <motion.span key={idx} whileHover={{ color: '#22d3ee', y: -2 }} className="cursor-pointer transition-all">
                {link}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}