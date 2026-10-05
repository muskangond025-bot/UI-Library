import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-neutral-800 pb-6 flex justify-between items-end"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">05 / ASSISTANCE</span>
            <h2 className="text-3xl font-light tracking-tight text-white">CUSTOMER SUPPORT</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">ORDER #849202</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">01 / LIVE CHAT</span>
            <p className="text-lg font-medium text-neutral-200">Instant Messaging</p>
            <p className="text-xs text-neutral-400">Available 24 Hours Daily</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">02 / PHONE</span>
            <p className="text-lg font-mono text-neutral-200">+1 (800) 492-0192</p>
            <p className="text-xs text-neutral-400">Mon-Fri 08:00 - 20:00 EST</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">03 / TICKET</span>
            <p className="text-lg font-medium text-neutral-200">Email Inquiry</p>
            <p className="text-xs text-neutral-400">Response within 2 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport7;
