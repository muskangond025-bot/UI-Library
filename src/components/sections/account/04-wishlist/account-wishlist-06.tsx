import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

export function AccountWishlist6() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Glassmorphic Wishlist</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="aspect-video bg-black/40 rounded-2xl overflow-hidden mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <p className="text-rose-400 font-bold mt-1">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist6;
