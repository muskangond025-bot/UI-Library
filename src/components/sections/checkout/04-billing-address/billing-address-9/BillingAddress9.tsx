import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export function BillingAddress9({ data }: { data?: any }) {
  const [street, setStreet] = useState('200 Ocean Drive');
  const [cityZip, setCityZip] = useState('Miami, FL 33139');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-between text-xs text-purple-300">
          <div className="flex items-center gap-2 font-semibold">
            <FileText className="w-4 h-4" /> Verified Tax Account ID: #VAT-99481
          </div>
          <span>Corporate Invoice Ready</span>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Billing Account Address</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City & Postal ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress9;