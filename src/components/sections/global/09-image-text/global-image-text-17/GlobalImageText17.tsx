"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText17() {
  return (
    <section className="w-full py-20 px-6 bg-stone-900 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-orange-300">Organic Sunset Pebble Waves</h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Asymmetric organic pebble curves, warm amber gradient blurs, and soft fluid waves.
          </p>
        </div>
        <div className="rounded-[40px] p-4 bg-gradient-to-br from-orange-500 to-rose-500 shadow-2xl h-[420px]">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Sunset Waves" className="w-full h-full object-cover rounded-[30px]" />
        </div>
      </div>
    </section>
  );
}