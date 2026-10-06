import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

export function OffersFeatured17() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 sm:p-10 font-sans rounded-3xl border border-slate-800">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-indigo-400" />
            <h2 className="font-bold text-xl text-white">MASONRY FEATURED TILE MOSAIC</h2>
          </div>
          <span className="text-xs font-mono text-slate-500">DYNAMIC TILE RATIOS</span>
        </div>

        {/* Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div whileHover={{ y: -4 }} className="md:col-span-2 bg-slate-900 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between h-72">
            <div>
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase">MOSAIC LARGE TILE</span>
              <h3 className="font-extrabold text-3xl text-white mt-1">Spatial Audio Headphones Pro</h3>
            </div>
            <div className="flex justify-between items-end border-t border-slate-800 pt-4">
              <div>
                <span className="text-3xl font-black text-indigo-400">$199</span>
                <span className="text-xs text-slate-500 line-through ml-2">$399</span>
              </div>
              <button className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between h-72">
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold uppercase">MOSAIC TALL</span>
              <h3 className="font-extrabold text-xl text-white mt-1">Smart Ring V2</h3>
            </div>
            <div className="flex justify-between items-end border-t border-slate-800 pt-4">
              <div>
                <span className="text-2xl font-black text-purple-400">$149</span>
                <span className="text-xs text-slate-500 line-through ml-2">$299</span>
              </div>
              <button className="p-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured17;
