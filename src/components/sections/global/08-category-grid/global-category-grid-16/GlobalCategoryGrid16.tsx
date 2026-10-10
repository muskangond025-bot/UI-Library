"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCategoryGrid16() {
  const items = [
    { code: 'SYS_NET_01', name: 'HARDWARE_TERMINAL', status: 'ONLINE', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { code: 'SYS_NET_02', name: 'WEARABLE_MODS', status: 'READY', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { code: 'SYS_NET_03', name: 'CYBER_FOOTWEAR', status: 'ACTIVE', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl font-bold uppercase tracking-wider">Matrix Terminal Grid</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="border border-emerald-800 bg-emerald-950/20 p-5 rounded hover:border-emerald-400 cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="flex justify-between text-xs text-emerald-600">
                <span>{item.code}</span>
                <span>[{item.status}]</span>
              </div>
              <div className="w-full h-36 border border-emerald-900 rounded overflow-hidden my-3">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold text-emerald-300">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}