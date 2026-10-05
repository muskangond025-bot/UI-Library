import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping14() {
  const items = [
    { title: 'Leather Cardholder', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase">Recommended Reel</span>
          <h2 className="text-2xl font-bold text-white">Continue Shopping</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2 cursor-pointer">
              <img src={item.image} alt="R" className="w-full aspect-square object-cover rounded-xl" />
              <h4 className="font-semibold text-sm text-white">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping14;
