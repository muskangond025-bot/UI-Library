import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShoppingBag, ArrowRight } from 'lucide-react';

export function AccountWishlist5() {
  const [items] = useState([
    { id: '1', title: 'Nike Air Max 270', price: '$150', color: 'from-rose-600 to-indigo-700', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Oversized Denim Jacket', price: '$120', color: 'from-purple-600 to-blue-700', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Leather Chronograph', price: '$210', color: 'from-emerald-600 to-teal-700', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs text-rose-400 mb-3 border border-slate-700">
          <Layers className="w-3.5 h-3.5" /> Layered Product Deck
        </div>
        <h2 className="text-3xl font-bold text-white mb-8">Product Stack</h2>

        <div className="relative h-[360px] max-w-sm mx-auto flex items-center justify-center">
          {items.map((item, idx) => {
            const offset = (idx - activeIndex + items.length) % items.length;
            const zIndex = items.length - offset;
            const translateY = offset * 24;
            const scale = 1 - offset * 0.06;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                animate={{ y: translateY, scale, zIndex }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={`absolute w-full p-6 rounded-3xl bg-gradient-to-br ${item.color} shadow-2xl border border-white/10 cursor-pointer text-left select-none`}
              >
                <div className="aspect-video bg-black/30 rounded-2xl overflow-hidden mb-4 backdrop-blur-md">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-lg font-bold text-white/90 mt-1">{item.price}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist5;
