import React from 'react';
import { Edit3 } from 'lucide-react';

export function AccountReviewsRatings9() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase">
          3 Items Waiting For Your Review
        </span>
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-white text-lg">Studio Wireless Pods</h3>
          <button className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5">
            <Edit3 className="w-4 h-4" /> Write Review
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings9;
