import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Phone } from 'lucide-react';

export function OrderCustomerSupport10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white">3D Support Center</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Knowledge Base</h3>
            <p className="text-xs text-slate-400">Search 100+ guides for Order #849202 FAQs.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Live Chat Hub</h3>
            <p className="text-xs text-slate-400">Connect in real time with an agent.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Phone className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Hotline Help</h3>
            <p className="text-xs text-slate-400">Direct toll-free customer support.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport10;
