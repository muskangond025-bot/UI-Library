import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-6">
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase">WE ARE HERE TO HELP.</h1>
          <p className="text-xs font-mono text-stone-400 font-sans mt-2">DEDICATED POST-PURCHASE CARE / ORDER #849202</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">01 / CHAT</span>
            <p className="font-bold text-white">Live Messaging</p>
            <p className="text-xs text-stone-400">Available 24/7</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">02 / PHONE</span>
            <p className="font-mono font-bold text-white">+1 (800) 492-0192</p>
            <p className="text-xs text-stone-400">Toll Free Hotline</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">03 / INQUIRY</span>
            <p className="font-bold text-white">Email Ticket</p>
            <p className="text-xs text-stone-400">Priority Response</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport13;
