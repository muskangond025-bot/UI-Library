import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-800 pb-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">Delivery Information</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">Expected Oct 12–15</h2>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            REF / DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-2">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Carrier</span>
            <p className="text-base font-medium text-neutral-200">DripExpress Ground</p>
            <p className="text-xs text-neutral-400">Standard 3–5 Business Days</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Current Status</span>
            <p className="text-base font-medium text-neutral-200">Dispatched & In Transit</p>
            <p className="text-xs text-neutral-400">Chicago Sort Facility</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">Destination</span>
            <p className="text-base font-medium text-neutral-200">San Francisco, CA</p>
            <p className="text-xs text-neutral-400">94107 Address Verified</p>
          </div>
        </div>

        {/* Minimal Timeline */}
        <div className="space-y-4 pt-6 border-t border-neutral-900">
          <span className="text-xs font-mono text-neutral-500 uppercase block">Logistics Milestones</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
              <span className="text-neutral-500 block">01 CONFIRMED</span>
              <span className="text-neutral-300">Oct 12 09:30</span>
            </div>
            <div className="p-3 bg-neutral-900 rounded border border-neutral-800">
              <span className="text-neutral-500 block">02 PROCESSED</span>
              <span className="text-neutral-300">Oct 12 14:20</span>
            </div>
            <div className="p-3 bg-neutral-100 text-neutral-950 font-bold rounded">
              <span className="text-neutral-700 block">03 IN TRANSIT</span>
              <span>Oct 13 08:45</span>
            </div>
            <div className="p-3 bg-neutral-900/40 rounded border border-neutral-900 text-neutral-600">
              <span className="block">04 ARRIVAL</span>
              <span>Oct 14-15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation7;
