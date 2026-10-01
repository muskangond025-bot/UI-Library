import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, ShoppingBag } from 'lucide-react';

export default function ProductCard17({ data }: { data?: any }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden font-sans border transition-colors duration-500 select-none ${
      darkMode ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
    }`}>
      
      <div className={`w-full max-w-sm rounded-3xl p-5 shadow-2xl relative border transition-colors duration-500 ${
        darkMode ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
      }`}>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-500">Theme Interactive</span>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              darkMode ? 'bg-slate-800 text-amber-400' : 'bg-slate-200 text-slate-700'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80" 
            alt="Sneaker" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl mb-1">Ultra Light Speed Trainer</h3>
        <p className={`text-xs mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          High-performance nitrogen-infused foam sole for explosive energy return.
        </p>

        <div className={`flex items-center justify-between pt-3 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
          <span className="text-2xl font-black">$195</span>
          <button className={`px-5 py-3 font-extrabold text-xs rounded-xl flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 ${
            darkMode ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-950 text-white hover:bg-slate-800'
          }`}>
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
}
