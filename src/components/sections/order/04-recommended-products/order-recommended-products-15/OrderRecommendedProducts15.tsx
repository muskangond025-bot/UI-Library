import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts15() {
  const collection = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-slate-800 pb-4"
        >
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">COMPLEMENTARY CATALOG</span>
          <h2 className="text-2xl font-bold text-white">More From This Collection</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {collection.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-purple-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                <span className="text-xs font-mono text-purple-400">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts15;
