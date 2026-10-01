import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

export default function RelatedProducts4({ data }: { data?: any }) {
  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          Bento Recommendation Grid
        </span>
        <h2 className="text-3xl font-black text-white">Related Smart Security Items</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl z-10 my-4">
        <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80" alt="Hub" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Security Hub 4K</h3>
          <span className="text-sm font-black text-emerald-400">$299</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80" alt="Cam" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Wireless Doorbell Cam</h3>
          <span className="text-sm font-black text-emerald-400">$119</span>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-4 text-center">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80" alt="Light" className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">Outdoor Floodlight Cam</h3>
          <span className="text-sm font-black text-emerald-400">$159</span>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Complete Related System</span>
          <span className="text-2xl font-black text-emerald-400">$577</span>
        </div>
        <button className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add All Related Items
        </button>
      </div>
    </div>
  );
}
