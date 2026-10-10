"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText19() {
  return (
    <section className="w-full py-20 px-6 bg-slate-200 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-slate-900">Neumorphic Soft Inset Feature</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Tactile dual-shadow extruded surfaces with soft inset depth effects.
          </p>
        </div>
        <div className="bg-slate-200 p-6 rounded-3xl shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] h-[400px]">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" alt="Neumorphic" className="w-full h-full object-cover rounded-2xl shadow-inner" />
        </div>
      </div>
    </section>
  );
}