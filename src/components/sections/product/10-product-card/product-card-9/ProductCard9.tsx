import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';

export default function ProductCard9({ data }: { data?: any }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" 
            alt="Smart Watch" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Minimalist Leather Timepiece</h3>
        <p className="text-xs text-slate-400 mb-3">Sapphire crystal glass • Swiss Quartz Movement</p>

        {/* Expandable Drawer Toggle */}
        <div className="mb-4 bg-slate-950 rounded-xl overflow-hidden border border-white/5">
          <button 
            onClick={() => setOpenDrawer(!openDrawer)}
            className="w-full px-3 py-2 text-xs font-bold text-slate-300 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span>View Technical Specifications</span>
            <ChevronDown size={14} className={`transition-transform ${openDrawer ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {openDrawer && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-3 pb-3 pt-1 text-[11px] text-slate-400 space-y-1 border-t border-white/5"
              >
                <div className="flex justify-between"><span>Case Diameter:</span> <strong className="text-white">40mm</strong></div>
                <div className="flex justify-between"><span>Water Resistance:</span> <strong className="text-white">5 ATM (50m)</strong></div>
                <div className="flex justify-between"><span>Strap Material:</span> <strong className="text-white">Italian Calfskin</strong></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-black text-white">$275</span>
          <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
