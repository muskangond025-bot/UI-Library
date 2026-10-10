"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText15() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-cyan-300">Diamond Facet Refraction</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Geometric diamond cut mask with rainbow light reflection highlights.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-2xl h-[400px]">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" alt="Diamond Facet" className="w-full h-full object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}