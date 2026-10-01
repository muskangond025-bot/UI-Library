import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, Check } from 'lucide-react';

export default function RelatedProducts3({ data }: { data?: any }) {
  const [uncovered, setUncovered] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          3D Curtain Reveal
        </span>
        <h2 className="text-3xl font-black text-white">Companion Audio Equipment</h2>
      </div>

      <div className="w-full max-w-md z-10 my-4">
        {!uncovered ? (
          <div className="bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 text-center shadow-2xl">
            <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80" alt="Speakers" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <h3 className="text-xl font-extrabold text-white">Pro Audio Studio Monitors</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Click below to reveal related companion equipment.</p>
            <button onClick={() => setUncovered(true)} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 mx-auto">
              <Eye size={16} /> Uncover Companion Items
            </button>
          </div>
        ) : (
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 text-[10px] font-extrabold uppercase rounded-full inline-block mb-3">
              Uncovered Companion Accessories
            </span>
            <h3 className="text-2xl font-black text-white">Studio Isolation Pads + XLR Cable</h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">Recommended addition to your active studio monitor order.</p>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-3xl font-black text-emerald-400">$89</span>
              <button onClick={() => setUncovered(false)} className="px-5 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
                <ShoppingBag size={16} /> Add Companion Items
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-slate-500 z-10">Interactive reveal curtain transition.</div>
    </div>
  );
}
