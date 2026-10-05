import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts9() {
  const cards = [
    { title: 'Minimalist Cardholder', price: '$45', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Matte Tumbler', price: '$38', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Lamp', price: '$120', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Layered Deck</span>
          <h2 className="text-2xl font-bold text-white">Recommended Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-2xl cursor-pointer hover:border-indigo-500/50"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm text-slate-100">{c.title}</h4>
                <span className="font-mono text-xs text-indigo-400 font-bold">{c.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts9;
