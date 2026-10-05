import React from 'react';
import { motion } from 'framer-motion';

export function OrderDeliveryInformation15() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">Delivery Progress</span>
            <h2 className="text-2xl font-bold text-white">October 12–15 Arrival</h2>
          </div>
          <span className="font-mono text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            TRK: DH-TRK-28491
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative py-4">
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '65%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 to-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-xs">
            <div className="text-left">
              <span className="font-semibold text-sky-400 block">Dispatched</span>
              <span className="text-slate-400">Oct 12</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-white block">In Transit</span>
              <span className="text-slate-400">Oct 13–14</span>
            </div>
            <div className="text-right">
              <span className="font-semibold text-slate-500 block">Delivered</span>
              <span className="text-slate-400">Oct 15</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <span className="text-slate-400">Carrier Partner</span>
            <p className="text-sm font-bold text-white">DripExpress Standard Ground (3-5 Days)</p>
          </div>
          <button className="px-4 py-2 bg-sky-500 text-slate-950 font-bold rounded-xl hover:bg-sky-400 transition-colors">
            View Live Tracking
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation15;
