import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export function BillingAddress3({ data }: { data?: any }) {
  const [street, setStreet] = useState('555 Mission Street, Apt 12B');
  const [cityZip, setCityZip] = useState('San Francisco, CA 94105');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Billing & Tax Invoice</h2>
          </div>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Tax Compliant
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Billing Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> Invoice address saved
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress3;