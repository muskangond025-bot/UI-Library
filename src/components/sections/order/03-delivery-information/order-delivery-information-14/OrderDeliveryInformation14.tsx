import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation14() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-b border-stone-800 pb-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-light tracking-tighter uppercase text-stone-100"
          >
            ON ITS WAY.
          </motion.h1>
          <p className="text-xs font-sans font-mono tracking-widest text-stone-400 uppercase mt-2">
            EXPECTED ARRIVAL / OCTOBER 12–15
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">01 / CARRIER</span>
            <p className="text-lg font-medium text-stone-200">DripExpress Ground</p>
            <p className="text-xs text-stone-400">Standard 3–5 Business Days</p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">02 / REFERENCE</span>
            <p className="text-lg font-mono text-amber-400">DH-TRK-28491</p>
            <p className="text-xs text-stone-400">Verified Shipment ID</p>
          </div>
          <div>
            <span className="text-xs font-mono text-stone-500 uppercase block mb-1">03 / DESTINATION</span>
            <p className="text-lg font-medium text-stone-200">San Francisco, CA</p>
            <p className="text-xs text-stone-400">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation14;
