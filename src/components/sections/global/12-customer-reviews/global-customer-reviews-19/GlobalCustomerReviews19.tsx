"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalCustomerReviews19() {
  const reviews = [
    { name: 'Neumorphic Buyer 1', text: 'Tactile dual-shadow extruded review cards.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Neumorphic Buyer 2', text: 'Soft glow ring activation and inset rating depth.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Neumorphic Buyer 3', text: 'Smooth tactile button press feedback.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' },
    { name: 'Neumorphic Buyer 4', text: 'Ultra-clean light grey extruded finish.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-10">Neumorphic Soft Inset Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-200 p-6 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] cursor-pointer flex flex-col justify-between h-[300px]"
            >
              <p className="text-sm font-medium text-slate-700 my-2">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-300">
                <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded-full object-cover shadow-inner" />
                <h4 className="text-xs font-bold text-slate-900">{r.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}