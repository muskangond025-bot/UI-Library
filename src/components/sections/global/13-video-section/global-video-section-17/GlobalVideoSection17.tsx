"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function GlobalVideoSection17() {
  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-extrabold text-orange-200">Organic Sunset Fluid Video Player</h2>

        <div className="rounded-[40px] p-6 bg-gradient-to-br from-orange-500 to-rose-500 cursor-pointer shadow-xl h-[440px] relative">
          <div className="w-full h-full rounded-[30px] overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Sunset Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-stone-950 flex items-center justify-center shadow-2xl">
                <Play className="w-6 h-6 fill-stone-950 ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}