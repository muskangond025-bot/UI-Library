import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ShoppingBag } from 'lucide-react';

export default function ProductBundles14({ data }: { data?: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          14. SHARED-ELEMENT QUICK VIEW BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Designer Wool Apparel Kit</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 text-center shadow-2xl">
        <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" alt="Jacket" className="w-full h-52 object-cover rounded-2xl mb-4" />
        <h3 className="font-extrabold text-xl text-white">Trench Coat & Leather Boots Set</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Italian Merino Wool + Handcrafted Calfskin Leather.</p>
        <button onClick={() => setOpen(true)} className="px-6 py-3 bg-white text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2 mx-auto">
          <Eye size={16} /> Quick View Full Bundle
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl z-50 p-6 flex items-center justify-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="w-full max-w-md bg-slate-900 border border-white/15 rounded-3xl p-6 relative">
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={18} /></button>
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" alt="Jacket" className="w-full h-48 object-cover rounded-2xl mb-4" />
              <h3 className="text-2xl font-black text-white">Full Designer Bundle Set</h3>
              <p className="text-xs text-slate-300 mt-2">Includes Trench Coat + Leather Boots + Silk Scarf (Save $120).</p>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-white">$670</span>
                <button onClick={() => setOpen(false)} className="px-6 py-3.5 bg-amber-500 text-slate-950 font-black text-xs rounded-xl">
                  <ShoppingBag size={18} /> Buy Full Set
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
