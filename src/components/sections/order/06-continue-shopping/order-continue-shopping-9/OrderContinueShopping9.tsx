import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping9() {
  const teasers = [
    { title: 'Leather Cardholder', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Catalog Teaser</span>
          <h2 className="text-2xl font-bold text-white">Continue Shopping</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teasers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -8 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3 cursor-pointer shadow-xl hover:border-indigo-500/50"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-semibold text-sm text-white">{t.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping9;
