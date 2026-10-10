"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Play } from 'lucide-react';

export function GlobalVideoSection11() {
  return (
    <section className="w-full py-24 px-6 bg-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-6 h-6 text-indigo-400" />
          <h2 className="text-3xl font-extrabold">Spatial 3D Video Player</h2>
        </div>

        <motion.div
          whileHover={{ y: -12, rotateX: 5 }}
          className="bg-indigo-900/50 border border-indigo-700/50 rounded-3xl p-6 shadow-2xl cursor-pointer max-w-4xl mx-auto h-[440px] relative"
        >
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Spatial 3D Video" className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-xl">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}