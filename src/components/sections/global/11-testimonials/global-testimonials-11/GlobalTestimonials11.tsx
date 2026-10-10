"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalTestimonials11() {
  const reviews = [
    { name: 'Orion Vance', role: 'Spatial Engineer', text: 'Angled depth perspective and spatial floating cards.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
    { name: 'Lyra Mercer', role: '3D Artist', text: 'Immersive spatial layout with dynamic lighting elevation.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop' },
    { name: 'Caelum Reed', role: 'VR Architect', text: 'Stunning 3D cards that make feedback pop off the screen.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Review Deck</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -12, rotateX: 5 }}
              className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-8 shadow-2xl cursor-pointer h-[340px] flex flex-col justify-between"
            >
              <p className="text-lg text-indigo-100 leading-relaxed font-medium">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-indigo-700/50">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full border border-indigo-400 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{r.name}</h4>
                  <p className="text-xs font-mono text-indigo-400">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}