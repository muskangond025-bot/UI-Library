"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

export function GlobalPromotionalCards10() {
  const cards = [
    { title: 'Denim Vintage Ticket', off: '25% OFF', code: 'DENIM25', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-2' },
    { title: 'Retro Audio Ticket', off: '30% OFF', code: 'AUDIO30', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-3' },
    { title: 'Classic Kicks Ticket', off: '20% OFF', code: 'KICKS20', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop', rotate: '-rotate-3' },
    { title: 'Analog Home Ticket', off: '35% OFF', code: 'HOME35', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', rotate: 'rotate-2' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-stone-200 text-stone-900 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Tag className="w-5 h-5 text-amber-800" />
          <h2 className="text-3xl font-extrabold">Retro Polaroid Coupon Tickets</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className={`bg-white p-4 pb-6 shadow-xl border border-stone-300 rounded-sm cursor-pointer transition-all duration-300 ${c.rotate}`}
            >
              <div className="w-full h-48 bg-stone-100 overflow-hidden mb-3 border border-stone-200">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="font-sans flex justify-between items-center text-xs font-bold">
                <span className="text-amber-800">{c.off}</span>
                <span className="font-mono text-stone-500">{c.code}</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-sans mt-1">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}