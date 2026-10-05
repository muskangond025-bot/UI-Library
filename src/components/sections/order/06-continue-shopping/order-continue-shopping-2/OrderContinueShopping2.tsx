import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function OrderContinueShopping2() {
  const categories = [
    { title: 'Apparel & Outerwear', items: '120+ Items', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600' },
    { title: 'Footwear & Boots', items: '45+ Items', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600' },
    { title: 'Leather Accessories', items: '80+ Items', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk & Studio Essentials', items: '60+ Items', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Store Navigation</span>
          <h2 className="text-2xl font-bold text-white">Explore By Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.5 }}
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-sm text-white">{c.title}</h3>
                    <p className="text-[11px] text-cyan-400 font-mono mt-0.5">{c.items}</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.1 }} className="p-2 bg-cyan-500 text-slate-950 rounded-lg">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping2;
