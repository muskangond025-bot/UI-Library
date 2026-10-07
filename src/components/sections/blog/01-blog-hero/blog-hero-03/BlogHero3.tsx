import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';

export function BlogHero3({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-zinc-950 text-white rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="p-8 sm:p-14 flex flex-col justify-center space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/50 text-cyan-400 text-xs font-mono"
          >
            <Tag className="w-3.5 h-3.5" />
            <span>SPLIT COVER STORY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-100 leading-tight"
          >
            ARTIFICIAL INTELLIGENCE & CREATIVE FREEDOM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            How generative models are empowering non-designers to prototype complex 3D worlds and spatial user interfaces in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4"
          >
            <button className="group px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all">
              <span>EXPLORE EDITION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
            alt="Abstract AI concept"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 lg:bg-gradient-to-r lg:from-zinc-950 lg:to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default BlogHero3;
