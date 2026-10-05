import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts14() {
  const items = [
    { id: '1', title: 'NIKE AIR MAX PULSE', time: 'EXPLORED 10M AGO', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
    { id: '2', title: 'OVERSIZED DENIM JACKET', time: 'EXPLORED 45M AGO', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border-b border-stone-800 pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 font-semibold block mb-2">PERSONAL ARCHIVE</span>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight uppercase">BROWSING LOOKBOOK</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group aspect-[3/4] bg-stone-900 rounded-3xl overflow-hidden relative border border-stone-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 font-sans">
                <span className="text-[10px] font-mono tracking-widest text-stone-400">{item.time}</span>
                <h3 className="text-2xl font-serif text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts14;
