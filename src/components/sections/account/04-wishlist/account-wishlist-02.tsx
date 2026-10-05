import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';

export function AccountWishlist2() {
  const items = [
    { id: '1', name: 'NIKE AIR MAX PULSE', price: '$150', category: 'FOOTWEAR', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'OVERSIZED DENIM VEST', price: '$120', category: 'APPAREL', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'MINIMAL CHRONOGRAPH', price: '$210', category: 'ACCENT', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-neutral-800 pb-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-400 font-semibold block mb-2">CURATED ARCHIVE</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white uppercase leading-none">
              MY <span className="italic font-serif text-neutral-500">WISHLIST</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group border-t border-neutral-800 pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-6 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest text-white bg-black/60 px-3 py-1 backdrop-blur-md">
                    0{idx + 1} // {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white group-hover:text-neutral-300 transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-neutral-400 mt-2">{item.price}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 font-sans flex items-center justify-between text-xs tracking-wider">
                <button className="flex items-center gap-1 text-white hover:text-rose-400 transition-colors font-bold">
                  MOVE TO CART <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button className="text-neutral-500 hover:text-neutral-300 transition-colors">REMOVE</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist2;
