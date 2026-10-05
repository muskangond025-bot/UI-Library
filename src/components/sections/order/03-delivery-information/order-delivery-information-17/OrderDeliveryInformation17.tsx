import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

export function OrderDeliveryInformation17() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-gradient-to-r from-blue-950/60 to-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-500/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl"
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold inline-flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Certified Partner
            </span>
            <h2 className="text-3xl font-extrabold text-white">DripExpress Ground</h2>
            <p className="text-xs text-slate-400">Guaranteed 3–5 Business Day Delivery Window</p>
          </div>
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-right">
            <span className="text-[10px] font-mono text-slate-400 block">TRACKING ID</span>
            <span className="font-mono text-base font-bold text-blue-400">DH-TRK-28491</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Expected Delivery</span>
            <p className="text-base font-bold text-white">Oct 12–15, 2026</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Shipping Speed</span>
            <p className="text-base font-bold text-white">Standard Ground</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Protection</span>
            <p className="text-base font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Insured Shipment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation17;
