import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers8() {
  const [activeCategory, setActiveCategory] = useState('Fashion');

  const offers = [
    { cat: 'Fashion', title: '25% OFF APPAREL', code: 'FASHION25', exp: 'Exp. 30 Oct' },
    { cat: 'Shoes', title: '₹800 OFF FOOTWEAR', code: 'SHOES800', exp: 'Exp. 15 Nov' },
    { cat: 'Accessories', title: '15% OFF WATCHES', code: 'ACC15', exp: 'Exp. 20 Oct' }
  ];

  const filtered = offers.filter(o => o.cat === activeCategory);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Segmented Catalog</span>
          <h2 className="text-3xl font-extrabold">Category-Specific Offers</h2>
        </div>

        <div className="flex justify-center gap-2 border-b border-slate-800 pb-4">
          {['Fashion', 'Shoes', 'Accessories'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={'px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ' + (activeCategory === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white')}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((o, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <div>
                <h4 className="font-bold text-white text-lg">{o.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{o.exp}</p>
              </div>
              <code className="text-sm font-mono font-bold text-indigo-400 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                {o.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers8;
