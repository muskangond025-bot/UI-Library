import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

export function AccountCouponsOffers19() {
  const [copied, setCopied] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Instant Actions</span>
          <h2 className="text-3xl font-extrabold">Offer + Quick Actions</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-black text-white">₹500 OFF VOUCHER</h3>
              <p className="text-xs text-slate-400 mt-1">Min Order: ₹2,499</p>
            </div>
            <code className="text-xs font-mono font-bold text-indigo-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              SAVE500
            </code>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-900">
            <button
              onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy Code</>}
            </button>

            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5" /> Shop Applicable Items
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers19;
