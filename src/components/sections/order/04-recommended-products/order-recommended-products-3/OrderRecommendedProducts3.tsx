import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OrderRecommendedProducts3() {
  const items = [
    { title: 'Leather Cardholder', price: '$45', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Organizer', price: '$68', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Post-Order Rail</span>
            <h2 className="text-2xl font-bold text-white">Recommended Additions</h2>
          </div>
          <span className="text-xs text-slate-400">Scroll to explore →</span>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="shrink-0 w-64 bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 group hover:border-cyan-500/40 transition-all shadow-lg"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-sm text-slate-100">{item.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-lg transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts3;
