import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Receipt, ArrowRight } from 'lucide-react';

export function BillingAddress5({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Cyber Way');
  const [cityZip, setCityZip] = useState('Austin, TX 78701');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl text-slate-100 space-y-6"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl font-bold text-white">Digital Receipt Statement</h2>
          </div>
          <span className="text-xs font-mono text-sky-400">#REC-90812</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Receipt Billing Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">City, State & ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Confirm Receipt <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress5;