import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts7() {
  const items = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-neutral-800 pb-6 flex justify-between items-end"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">04 / DISCOVERY</span>
            <h2 className="text-3xl font-light tracking-tight text-white">COMPLEMENTARY PIECES</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">RECOMMENDED</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="space-y-4 group"
            >
              <div className="aspect-[4/5] bg-neutral-900 rounded border border-neutral-800 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.06 }} 
                  transition={{ duration: 0.5 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-neutral-900">
                <h3 className="text-sm font-medium text-neutral-200">{item.title}</h3>
                <span className="text-xs font-mono text-neutral-400">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts7;
