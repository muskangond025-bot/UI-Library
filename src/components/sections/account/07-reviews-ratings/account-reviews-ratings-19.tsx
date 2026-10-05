import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

export function AccountReviewsRatings19() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Contextual Action Cards</h2>
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <div className="flex gap-2 pt-2">
            <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white flex items-center gap-1">
              <Edit2 className="w-3.5 h-3.5" /> Edit
            </button>
            <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-xs font-bold text-red-400 flex items-center gap-1">
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings19;
