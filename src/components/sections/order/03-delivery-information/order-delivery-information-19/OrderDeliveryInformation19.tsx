import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation19() {
  return (
    <section className="w-full bg-zinc-950 text-zinc-100 py-12 px-4 sm:px-6 rounded-2xl border border-zinc-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="border-b border-zinc-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2 font-sans">Vol. 2026 Logistics Issue</span>
            <h2 className="text-4xl sm:text-6xl font-normal text-white">ARRIVING OCT 12–15</h2>
          </div>
          <div className="font-mono text-xs text-amber-400 font-sans">
            REF // DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">01 / Carrier</span>
            <p className="font-bold text-white">DripExpress Ground</p>
            <p className="text-xs text-zinc-400">Standard 3–5 Business Days</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">02 / Status</span>
            <p className="font-bold text-emerald-400">In Transit</p>
            <p className="text-xs text-zinc-400">Chicago Hub Departure</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-zinc-500 uppercase">03 / Destination</span>
            <p className="font-bold text-white">San Francisco, CA</p>
            <p className="text-xs text-zinc-400">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation19;
