"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export function GlobalCategoryGrid13() {
  const nodes = [
    { label: 'Fashion', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop' },
    { label: 'Tech', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop' },
    { label: 'Living', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' },
    { label: 'Jewelry', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { label: 'Sports', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 mb-3">
          <Compass className="w-4 h-4" /> Radial Category Nodes
        </div>
        <h2 className="text-3xl font-extrabold mb-12">Orbital Hub</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500/30 group-hover:border-indigo-400 transition-all p-1 bg-slate-800">
                <img src={node.img} alt={node.label} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-sm font-bold text-slate-200 group-hover:text-indigo-400">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}