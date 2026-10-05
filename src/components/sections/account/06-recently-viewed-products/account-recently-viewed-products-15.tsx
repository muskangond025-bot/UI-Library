import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts15() {
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150.00 USD', time: '15 MINS AGO' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120.00 USD', time: '45 MINS AGO' },
    { id: '3', name: 'Leather Chronograph', price: '$210.00 USD', time: '2 HOURS AGO' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900 mb-8">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">EXPLORED HISTORY</h2>
          <span className="text-xs font-mono uppercase text-gray-400">03 ITEMS</span>
        </div>

        <div className="divide-y divide-gray-100">
          {items.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.1 }} className="py-6 flex justify-between items-center group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gray-400 block mb-1">0{idx + 1} // {item.time}</span>
                <h3 className="text-xl font-medium text-gray-900 group-hover:underline">{item.name}</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-mono text-gray-900">{item.price}</span>
                <button className="px-4 py-2 border border-gray-900 text-xs font-bold uppercase hover:bg-gray-900 hover:text-white transition-all">
                  Revisit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts15;
