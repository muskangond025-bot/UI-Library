import React, { useState } from 'react';
import { RefreshCw, ShoppingBag } from 'lucide-react';

export default function ProductBundles18({ data }: { data?: any }) {
  const [loading, setLoading] = useState(false);

  const reload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          18. SKELETON SHIMMER DATA LOADER BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Live Data Fetch Demo</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-slate-400 font-bold">Ring Light Bundle</span>
          <button onClick={reload} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="w-full h-48 bg-slate-800 rounded-2xl" />
            <div className="h-6 bg-slate-800 rounded-lg w-3/4" />
            <div className="h-10 bg-slate-800 rounded-xl w-full" />
          </div>
        ) : (
          <div>
            <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80" alt="Ring" className="w-full h-48 object-cover rounded-2xl mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-white">$138</span>
              <button className="px-5 py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
                <ShoppingBag size={16} /> Buy Bundle
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
