import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export function BlogHero4({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="relative w-full bg-black text-white rounded-3xl overflow-hidden border border-purple-900/40 shadow-2xl min-h-[520px] flex items-center justify-center p-8 sm:p-16">
      {/* Background Animated Gradient Video Mock */}
      <div className="absolute inset-0 z-0 opacity-50">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/40 rounded-full blur-[100px]"
        />
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=80"
          alt="Video Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>VIDEO FEATURED DOCUMENTARY</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-100 to-purple-400 uppercase"
        >
          BEHIND THE CODE: BUILDING THE NEXT WEB
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-purple-200/80 text-base sm:text-lg max-w-xl mx-auto"
        >
          An immersive video journey exploring core engineering breakthroughs behind real-time WebGPU rendering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs tracking-wider uppercase rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-105 transition-all">
            <Play className="w-4 h-4 fill-white" />
            <span>WATCH DOCUMENTARY (12 MIN)</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero4;
