import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export function AccountReviewsRatings20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Master Rating Hub
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Your Reviews Master</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 font-bold text-xs uppercase text-slate-950 shadow-xl">
            Write New Review
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/80 border border-amber-500/40 backdrop-blur-xl">
          <div className="flex text-amber-400 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h3 className="text-3xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-slate-300 text-base mt-2">"Highest quality materials and supreme cushioning."</p>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings20;
