import React, { useState } from 'react';
import { Sun, Moon, ShoppingBag } from 'lucide-react';

export default function ProductBundles17({ data }: { data?: any }) {
  const [dark, setDark] = useState(true);

  return (
    <div className={`p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] flex flex-col items-center justify-between relative overflow-hidden font-sans border transition-colors duration-500 select-none ${
      dark ? 'bg-slate-950 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
    }`}>
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          17. DYNAMIC LIGHT & DARK MODE BUNDLE
        </span>
        <h2 className="text-3xl font-black">Ecosystem Mode Switcher</h2>
      </div>

      <div className={`w-full max-w-md rounded-3xl p-6 z-10 border transition-colors duration-500 shadow-2xl ${
        dark ? 'bg-slate-900 border-white/10' : 'bg-white border-slate-200'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold">Tablet & Stylus Bundle</span>
          <button onClick={() => setDark(!dark)} className="p-2 rounded-full bg-slate-800 text-amber-400">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80" alt="Tablet" className="w-full h-48 object-cover rounded-2xl mb-4" />

        <div className="flex justify-between items-center">
          <span className="text-2xl font-black">$749</span>
          <button className={`px-5 py-3 font-extrabold text-xs rounded-xl flex items-center gap-2 ${
            dark ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'
          }`}>
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}
