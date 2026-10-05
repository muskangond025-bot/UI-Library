import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';

export function OrderDeliveryInformation12() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl"
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-teal-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Shipment Package #1</h3>
                <p className="text-xs text-slate-400">Weight: 2.4 lbs • DripExpress Parcel</p>
              </div>
            </div>
            <span className="font-mono text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
              DH-TRK-28491
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Estimated Arrival</span>
              <p className="text-lg font-bold text-white">Oct 12–15, 2026</p>
              <p className="text-teal-400 mt-0.5">Standard Ground (3-5 Days)</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 block mb-1">Delivery Destination</span>
              <p className="text-sm font-semibold text-white">San Francisco, CA</p>
              <p className="text-slate-400 mt-0.5">742 Evergreen Terrace</p>
            </div>
          </div>

          {/* Barcode Mock */}
          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <div className="font-mono text-xs tracking-widest text-slate-500">
              ||||| |||| |||||| ||| ||||||| ||
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              Official Carrier Data <ArrowRight className="w-3 h-3 text-teal-400" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation12;
