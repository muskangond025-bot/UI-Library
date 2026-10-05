import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport19() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">24/7 DEDICATED CARE</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">NEED HELP WITH<br/>ORDER #849202?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Live Chat</h4>
            <p className="text-xs text-slate-400">Connect instantly with an online agent.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1 }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Phone Line</h4>
            <p className="text-xs text-slate-400">Speak directly with priority team.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.2 }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Submit Ticket</h4>
            <p className="text-xs text-slate-400">Email request with 2h SLA.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport19;
