import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Flame } from 'lucide-react';

export function OffersFeatured12() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 sm:p-10 font-sans rounded-3xl border border-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">// BENTO SHOWPIECE HERO</span>
          <span className="text-xs font-mono text-slate-500">FEATURED INDEX V12</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Video / Interactive Media Bento Hero */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-purple-900/60 via-slate-900 to-indigo-950 p-8 rounded-3xl border border-purple-500/30 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-full text-xs font-bold uppercase inline-flex items-center gap-1 mb-4">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> SHOWCASE FEATURED ITEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                Quantum Holographic Spatial Pods
              </h2>
              <p className="text-slate-300 text-sm max-w-sm mb-6">Interactive 3D soundstage with liquid metal acoustic architecture.</p>
            </div>

            <div className="w-full h-36 bg-purple-950/40 rounded-2xl border border-purple-500/30 flex items-center justify-center mb-6 group-hover:border-purple-400 transition-colors">
              <div className="p-4 rounded-full bg-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-purple-500/20">
              <div>
                <span className="text-3xl font-black text-purple-400">$199</span>
                <span className="text-xs text-slate-500 line-through ml-2">$399</span>
              </div>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-colors flex items-center gap-1">
                Explore <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Mini Bento 1 */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <span className="text-xs font-mono text-cyan-400 font-bold">50% DISCOUNT</span>
            <div>
              <h3 className="font-bold text-white text-lg">Titanium Smart Watch</h3>
              <p className="text-xs text-slate-400 mt-1">Dual GPS + Sapphire Glass</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <span className="font-bold text-xl">$139</span>
              <span className="text-xs text-slate-500 line-through">$279</span>
            </div>
          </div>

          {/* Mini Bento 2 */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <span className="text-xs font-mono text-amber-400 font-bold">FEATURED DROP</span>
            <div>
              <h3 className="font-bold text-white text-lg">Ergonomic Mouse Dock</h3>
              <p className="text-xs text-slate-400 mt-1">Wireless Fast Charge</p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <span className="font-bold text-xl">$45</span>
              <span className="text-xs text-slate-500 line-through">$89</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured12;
