import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function OrderRecommendedProducts8() {
  const items = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      {/* Ambient Pulsing Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center gap-3 border-b border-amber-900/30 pb-4"
        >
          <Crown className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">PRIVATE COLLECTION</span>
            <h2 className="text-2xl font-serif text-white">Exclusive Post-Purchase Additions</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-stone-900/50 p-5 rounded-2xl border border-amber-500/20 space-y-4 group hover:border-amber-500/50 transition-all shadow-xl"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-stone-900">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-base text-stone-100">{item.title}</h3>
                  <span className="font-mono text-xs text-amber-400">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-stone-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Add
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts8;
