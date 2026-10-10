"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function GlobalImageText16() {
  return (
    <section className="w-full py-20 px-6 bg-black text-emerald-400 font-mono border-y border-emerald-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs text-emerald-600">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" /> [SYS_ONLINE]
          </div>
          <h2 className="text-3xl font-bold uppercase text-emerald-300">CYBER TELEMETRY TERMINAL</h2>
          <p className="text-emerald-500 text-sm leading-relaxed">
            Matrix green scanlines, real-time code telemetry, and encrypted data display.
          </p>
        </div>
        <div className="border border-emerald-800 p-4 rounded bg-emerald-950/30 h-[400px]">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Cyber Terminal" className="w-full h-full object-cover rounded opacity-70" />
        </div>
      </div>
    </section>
  );
}