import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ShoppingBag } from 'lucide-react';

export default function ProductCard18({ data }: { data?: any }) {
  const [loading, setLoading] = useState(false);

  const reloadData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase font-bold text-slate-400">Skeleton Loader Demo</span>
          <button 
            onClick={reloadData}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="w-full h-56 bg-slate-800 rounded-2xl" />
            <div className="h-6 bg-slate-800 rounded-lg w-3/4" />
            <div className="h-4 bg-slate-800 rounded-lg w-1/2" />
            <div className="h-10 bg-slate-800 rounded-xl w-full mt-4" />
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
              <img 
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80" 
                alt="Ring Light" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h3 className="font-extrabold text-xl text-white mb-1">Bi-Color LED Ring Light</h3>
            <p className="text-xs text-slate-400 mb-4">Adjustable 3200K-5600K Color Temp with Tripod</p>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="text-2xl font-black text-white">$89</span>
              <button className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all">
                <ShoppingBag size={16} /> Buy Light
              </button>
            </div>
          </motion.div>
        )}

      </div>

    </div>
  );
}
