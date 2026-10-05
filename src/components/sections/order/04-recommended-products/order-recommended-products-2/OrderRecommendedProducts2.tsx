import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function OrderRecommendedProducts2() {
  const products = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 md:col-span-2' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
  ];

  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 font-sans"
        >
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">Post-Purchase Editorial</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">CURATED ADDITIONS</h2>
          </div>
          <p className="text-xs text-stone-400 max-w-xs font-light">Handpicked designs that pair seamlessly with your recently completed order.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/40 ${p.span}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.7 }}
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-xl text-white">{p.title}</h3>
                    <p className="font-mono text-xs text-amber-400 mt-0.5">{p.price}</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition-colors shadow-lg"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts2;
