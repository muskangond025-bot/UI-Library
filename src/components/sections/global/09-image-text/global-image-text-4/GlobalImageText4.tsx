"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function GlobalImageText4() {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-md text-purple-600 font-bold text-xs uppercase">
            <Sparkles className="w-4 h-4" /> Tactile Clay Aesthetics
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Soft Volume & Playful Tactile Design
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Designed with pill-shaped volume cards, friendly pastel accents, and ultra-smooth tactile depth shadows.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-bold shadow-lg hover:bg-purple-700 transition-all flex items-center gap-2">
              Explore Soft World <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-3xl bg-purple-100 border-2 border-purple-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="h-[400px] rounded-2xl overflow-hidden border-2 border-white shadow-md">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" alt="Claymorphic" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}