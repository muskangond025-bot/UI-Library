import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, Eye, Check } from 'lucide-react';

export default function ProductBundles3({ data }: { data?: any }) {
  const [uncovered, setUncovered] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl mb-4">
        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          3D Uncover Reveal
        </span>
        <h2 className="text-3xl font-extrabold">Studio Monitor Ecosystem</h2>
      </div>

      <div className="relative w-full max-w-lg h-[360px] flex items-center justify-center z-10">
        
        <AnimatePresence mode="wait">
          {!uncovered ? (
            <motion.div 
              key="cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -40 }}
              className="w-full max-w-md bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 text-center shadow-2xl relative"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4">
                <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Speakers" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-extrabold text-white">Pro Audio Studio Kit</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Tap to uncover full 4-piece studio setup & discount.</p>
              <button 
                onClick={() => setUncovered(true)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 mx-auto shadow-lg"
              >
                <Eye size={16} /> Uncover Full Bundle
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="uncovered"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-md bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(16,185,129,0.2)] relative"
            >
              <span className="px-3 py-1 bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase rounded-full inline-block mb-3">
                Full Kit Uncovered • Save $180
              </span>
              <h3 className="text-2xl font-black text-white">Complete Studio Bundle</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Includes Monitors + Audio Interface + XLR Cable + Isolation Pads</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-emerald-400">$649</span>
                <button 
                  onClick={() => setUncovered(false)}
                  className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg"
                >
                  <ShoppingBag size={16} /> Buy Complete Bundle
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
