import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, XCircle, FileText } from 'lucide-react';

export function OrderCustomerSupport9() {
  const actions = [
    { title: 'Change Delivery Address', icon: MapPin, desc: 'Update destination prior to dispatch' },
    { title: 'Upgrade Shipping Speed', icon: Truck, desc: 'Switch to Overnight Air' },
    { title: 'Request Tax Invoice', icon: FileText, desc: 'Download official receipt PDF' },
    { title: 'Cancel Order Item', icon: XCircle, desc: 'Cancel eligible line item' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Self-Service Menu</span>
          <h2 className="text-2xl font-bold text-white">Manage Order #849202</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer hover:border-indigo-500/50 shadow-lg"
              >
                <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{act.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{act.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport9;
