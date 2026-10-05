import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers17() {
  const [filter, setFilter] = useState('All');

  const offers = [
    { title: '₹500 OFF Storewide', category: 'Fashion', code: 'SAVE500' },
    { title: '20% OFF Footwear', category: 'Shoes', code: 'SHOES20' },
    { title: '15% OFF Watch Strap', category: 'Accessories', code: 'ACC15' }
  ];

  const filtered = filter === 'All' ? offers : offers.filter(o => o.category === filter);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Filter</span>
            <h2 className="text-3xl font-extrabold text-white">Offer Filter Experience</h2>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {['All', 'Fashion', 'Shoes', 'Accessories'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={'px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ' + (filter === f ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <h4 className="font-bold text-white text-lg">{item.title}</h4>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers17;
