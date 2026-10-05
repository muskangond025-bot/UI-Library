import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Gift, Truck } from 'lucide-react';

export function AccountCouponsOffers3() {
  const gridOffers = [
    { icon: Percent, discount: '25% OFF', title: 'Summer Collection', code: 'SUMMER25', color: 'from-purple-900/40 to-slate-900' },
    { icon: Gift, discount: 'FREE GIFT', title: 'Orders above ₹3,000', code: 'FREEGIFTVIP', color: 'from-pink-900/40 to-slate-900' },
    { icon: Truck, discount: 'FREE SHIP', title: 'Zero Shipping Fee', code: 'SHIPFREE', color: 'from-blue-900/40 to-slate-900' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Promotional Matrix</span>
          <h2 className="text-3xl font-extrabold text-white">Interactive Offer Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridOffers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={'p-6 rounded-2xl bg-gradient-to-b ' + item.color + ' border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl'}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-white block">{item.discount}</span>
                  <h4 className="font-bold text-slate-300 text-sm">{item.title}</h4>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <code className="text-xs font-mono font-bold text-purple-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    {item.code}
                  </code>
                  <button className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-lg transition-colors">
                    Copy
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers3;
