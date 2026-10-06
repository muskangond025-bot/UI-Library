import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Shield } from 'lucide-react';

export function OffersFeatured14() {
  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-slate-800 overflow-hidden font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {/* Left Flagship 1 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-8 sm:p-12 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 flex flex-col justify-between h-96 group"
        >
          <div>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-bold uppercase inline-flex items-center gap-1.5 mb-4">
              <Flame className="w-3.5 h-3.5 text-orange-400" /> FLAGSHIP FEATURED A
            </span>
            <h2 className="text-3xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              Quantum Holographic Spatial Pods
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Spatial noise cancellation with beryllium driver architecture.
            </p>
          </div>

          <div className="flex justify-between items-end pt-6 border-t border-slate-800">
            <div>
              <div className="text-3xl font-black text-indigo-400">$179</div>
              <div className="text-xs text-slate-500 line-through">$359</div>
            </div>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs uppercase rounded-2xl transition-colors flex items-center gap-1">
              Explore <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right Flagship 2 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-8 sm:p-12 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 flex flex-col justify-between h-96 group"
        >
          <div>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-bold uppercase inline-flex items-center gap-1.5 mb-4">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> FLAGSHIP FEATURED B
            </span>
            <h2 className="text-3xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
              Titanium Precision Smart Watch
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Dual GPS telemetry with sapphire crystal glass surface.
            </p>
          </div>

          <div className="flex justify-between items-end pt-6 border-t border-slate-800">
            <div>
              <div className="text-3xl font-black text-purple-400">$229</div>
              <div className="text-xs text-slate-500 line-through">$459</div>
            </div>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs uppercase rounded-2xl transition-colors flex items-center gap-1">
              Explore <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default OffersFeatured14;
