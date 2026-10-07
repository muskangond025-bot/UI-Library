import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

export function BlogHero7({ data, section }: { data?: any; section?: any }) {
  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 bg-slate-900/80 border border-slate-800 p-8 sm:p-12 rounded-2xl flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>BENTO HERO ARTICLE</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              SPATIAL COMPUTING & THE FUTURE OF WORK UI
            </h1>
            <p className="text-slate-400 text-sm sm:text-base">
              Why 2D flat screens are giving way to contextual 3D spatial canvases in enterprise software.
            </p>
          </div>
          <button className="self-start px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all">
            <span>READ BENTO STORY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4"
        >
          <img
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
            alt="Spatial tech"
            className="w-full h-44 object-cover rounded-xl"
          />
          <div>
            <div className="text-xs font-mono text-blue-400 uppercase">TREND ANALYSIS</div>
            <h3 className="text-lg font-bold text-white mt-1">Vision Pro OS 3.0 Deep Dive</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogHero7;
