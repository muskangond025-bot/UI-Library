"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function GlobalImageText11() {
  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
            <Layers className="w-4 h-4" /> Spatial 3D Deck
          </div>
          <h2 className="text-4xl font-extrabold text-white">Depth of Field Spatial Layout</h2>
          <p className="text-indigo-200/80 text-base leading-relaxed">
            Designed with isometric card elevation, depth perspectives, and responsive tilt.
          </p>
        </div>
        <motion.div whileHover={{ y: -12, rotateX: 6 }} className="bg-indigo-900/50 border border-indigo-700/50 p-4 rounded-3xl shadow-2xl h-[420px]">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Spatial 3D" className="w-full h-full object-cover rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}