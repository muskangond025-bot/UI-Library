import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BillingAddress19({ data }: { data?: any }) {
  const [street, setStreet] = useState('101 Minimalist Way');
  const [cityZip, setCityZip] = useState('Seattle, WA 98104');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[TAX_STATEMENT: #INVOICE_019]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">BILLING_IDENTITY</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">DOCUMENT PAPER UI</span>
        </div>

        <div className="relative w-full h-px bg-zinc-900 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full bg-zinc-200"
          />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">01 // BILLING_STREET</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">02 // CITY_STATE_ZIP</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div className="pt-6 border-t border-zinc-800 flex justify-end">
            <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
              <span>PROCEED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress19;