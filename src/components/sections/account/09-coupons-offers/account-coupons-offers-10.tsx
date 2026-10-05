import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function AccountCouponsOffers10() {
  const items = [
    { discount: '₹400 OFF', code: 'REWARD400', title: 'Storewide Pass' },
    { discount: '20% OFF', code: 'SUMMER20', title: 'Apparel Offer' },
    { discount: 'FREE SHIP', code: 'EXPRESS', title: 'Zero Freight' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Carousel Navigation</span>
          <h2 className="text-3xl font-extrabold">Infinite Offer Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-2">
                <Tag className="w-5 h-5 text-cyan-400" />
                <h3 className="text-3xl font-black text-white">{item.discount}</h3>
                <p className="text-xs text-slate-400">{item.title}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-cyan-400">{item.code}</code>
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors">
                  Claim
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers10;
