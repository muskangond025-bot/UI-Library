import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';

export function OrderCustomerSupport16() {
  const channels = [
    { name: 'Live Chat', time: '< 2 Mins', icon: MessageSquare, color: 'text-emerald-400' },
    { name: 'WhatsApp', time: '< 5 Mins', icon: MessageCircle, color: 'text-green-400' },
    { name: 'Phone', time: 'Instant', icon: Phone, color: 'text-cyan-400' },
    { name: 'Email', time: '< 2 Hours', icon: Mail, color: 'text-purple-400' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase block mb-1">Channel Matrix</span>
          <h2 className="text-2xl font-bold text-white">Contact Response Matrix</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3"
              >
                <Icon className={`w-6 h-6 ${c.color}`} />
                <h4 className="font-bold text-sm text-white">{c.name}</h4>
                <span className="text-xs font-mono text-slate-400 block">SLA: {c.time}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport16;
