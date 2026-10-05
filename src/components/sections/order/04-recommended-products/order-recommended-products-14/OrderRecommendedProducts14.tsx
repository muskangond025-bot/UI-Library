import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderRecommendedProducts14() {
  const items = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800' },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Interactive Focus</span>
          <h2 className="text-2xl font-bold text-white">Featured Additions</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div className="w-full sm:w-1/2 aspect-square rounded-xl overflow-hidden bg-slate-800 relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={items[active].image} 
                alt="Active" 
                className="w-full h-full object-cover absolute inset-0" 
              />
            </AnimatePresence>
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-white">{items[active].title}</h3>
            <p className="text-xl font-bold text-indigo-400">{items[active].price}</p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg"
            >
              Add to Next Order
            </motion.button>
            <div className="flex gap-2 pt-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${active === idx ? 'bg-indigo-400 scale-125' : 'bg-slate-700'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts14;
