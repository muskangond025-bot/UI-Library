import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderRecommendedProducts11() {
  const [activeTab, setActiveTab] = useState<'Accessories' | 'Workspace'>('Accessories');

  const categories = {
    Accessories: [
      { name: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
      { name: 'Merino Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    ],
    Workspace: [
      { name: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
      { name: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
    ],
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Category Journey</span>
            <h2 className="text-2xl font-bold text-white">Explore By Category</h2>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                  activeTab === cat ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories[activeTab].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex gap-4 items-center shadow-lg"
              >
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-base text-white">{item.name}</h4>
                  <p className="text-xs text-cyan-400 font-mono mt-1">{item.price}</p>
                  <button className="mt-3 text-xs font-semibold text-slate-300 hover:text-white underline">View Details</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts11;
