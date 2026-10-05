import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AccountWishlist11() {
  const [index, setIndex] = useState(0);

  const items = [
    { id: '1', name: 'Nike Air Max', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Infinite Carousel</h2>

        <div className="flex justify-center items-center gap-6">
          <button onClick={() => setIndex((index - 1 + items.length) % items.length)} className="p-3 bg-slate-800 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="w-[300px] p-6 rounded-3xl bg-slate-800 border border-slate-700 text-left">
            <img src={items[index].image} alt={items[index].name} className="aspect-square rounded-2xl object-cover mb-4" />
            <h3 className="font-bold text-white">{items[index].name}</h3>
            <p className="text-indigo-400 font-bold">{items[index].price}</p>
          </div>
          <button onClick={() => setIndex((index + 1) % items.length)} className="p-3 bg-slate-800 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist11;
