import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, MapPin, Shield, FileText, ArrowRight } from 'lucide-react';

export function OrderCustomerSupport3() {
  const cards = [
    { title: 'Track Order Live', desc: 'Real-time GPS carrier updates', icon: MapPin, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { title: 'Returns & Exchanges', desc: 'Initiate 30-day hassle free return', icon: RefreshCw, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { title: 'Buyer Protection', desc: 'Full coverage & money back guarantee', icon: Shield, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { title: 'Request Invoice', desc: 'Download official tax receipt PDF', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Instant Actions</span>
          <h2 className="text-2xl font-bold text-white">Order Self-Service Portal</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-all shadow-xl group cursor-pointer flex flex-col justify-between"
              >
                <div className={`p-3 rounded-xl w-fit ${c.bg} ${c.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{c.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{c.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-white pt-2 border-t border-slate-900">
                  Select <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport3;
