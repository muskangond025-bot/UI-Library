import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function OrderRecommendedProducts5() {
  const collection = [
    { name: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { name: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { name: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="p-2.5 bg-violet-500/20 text-violet-400 rounded-xl"
            >
              <Layers className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase">COLLECTION LINE</span>
              <h2 className="text-2xl font-bold text-white">More From The Studio Line</h2>
            </div>
          </div>
          <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">Full Collection →</button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {collection.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-violet-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm text-white">{item.name}</p>
                  <p className="text-xs text-violet-400 font-mono">{item.price}</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="text-xs text-slate-400 hover:text-white border border-slate-800 px-2.5 py-1 rounded-lg"
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts5;
