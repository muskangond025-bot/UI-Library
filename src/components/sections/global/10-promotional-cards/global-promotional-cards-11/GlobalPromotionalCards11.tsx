"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalPromotionalCards11() {
  const cards = [
    { title: 'Spatial Gear Voucher', off: '30% OFF', code: 'SPATIAL30', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { title: 'Spatial Apparel Pass', off: '25% OFF', code: 'SPATIAL25', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { title: 'Spatial Living Pass', off: '40% OFF', code: 'SPATIAL40', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Promo Cards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer h-[380px] flex flex-col justify-between"
            >
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-indigo-500/30">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-indigo-400">
                  <span>{c.off}</span>
                  <span>{c.code}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-1">{c.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}