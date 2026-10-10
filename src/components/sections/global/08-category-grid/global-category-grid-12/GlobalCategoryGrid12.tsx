"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalCategoryGrid12() {
  const items = [
    { code: 'SEC_01', title: 'APPAREL ARCHITECTURE', count: '1,420 UNITS', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { code: 'SEC_02', title: 'COMPUTATIONAL TECH', count: '890 UNITS', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { code: 'SEC_03', title: 'INTERIOR SPECIFICATIONS', count: '640 UNITS', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { code: 'SEC_04', title: 'PRECISION TIMEPIECES', count: '310 UNITS', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-10 text-slate-400">
          <Grid className="w-4 h-4" />
          <span className="text-xs uppercase">SYSTEM WIREFRAME INDEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-slate-700 p-5 rounded hover:border-white transition-colors cursor-pointer flex flex-col justify-between h-80"
            >
              <div className="flex justify-between text-xs text-slate-500">
                <span>[{item.code}]</span>
                <span>{item.count}</span>
              </div>
              <div className="w-full h-36 border border-slate-800 rounded overflow-hidden my-3">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-sm font-bold tracking-wider text-white uppercase">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}