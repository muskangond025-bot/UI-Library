import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts19() {
  const items = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">ORDER CONFIRMED</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">YOUR ORDER IS COMPLETE.<br/>WHAT'S NEXT?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-emerald-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-white">{item.title}</h4>
                <span className="text-xs font-mono text-emerald-400 font-bold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts19;
