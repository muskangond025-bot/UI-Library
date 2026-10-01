import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ShoppingBag, Star, Check } from 'lucide-react';

export default function ProductCard14({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" 
            alt="Designer Jacket" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button 
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 m-auto w-32 h-10 bg-slate-900/90 text-white font-extrabold text-xs rounded-xl border border-white/20 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md shadow-2xl"
          >
            <Eye size={16} /> Quick View
          </button>
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Tailored Wool Trench Coat</h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-1">100% Organic Italian Merino Wool • Slim Fit</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-2xl font-black text-white">$420</span>
          <button 
            onClick={() => setIsOpen(true)}
            className="px-5 py-3 bg-white text-slate-950 hover:bg-slate-200 font-extrabold text-xs rounded-xl flex items-center gap-2 transition-all"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Quick View Shared-Element Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl z-50 p-6 flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-slate-900 border border-white/15 rounded-3xl p-6 relative shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="w-full h-52 rounded-2xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80" alt="Jacket" className="w-full h-full object-cover" />
              </div>

              <span className="text-[10px] uppercase font-bold text-amber-500">In Stock • Express Shipping</span>
              <h3 className="text-2xl font-black text-white mt-1">Tailored Wool Trench Coat</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Hand-stitched by master artisans using premium sustainable merino wool. Designed for wind resistance and luxury warmth.
              </p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="text-3xl font-black text-white">$420</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-xl"
                >
                  <ShoppingBag size={18} /> Add to Cart Now
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
