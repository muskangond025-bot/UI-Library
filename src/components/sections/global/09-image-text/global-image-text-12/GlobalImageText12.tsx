"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Grid } from 'lucide-react';

export function GlobalImageText12() {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-slate-100 font-mono border-y border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Grid className="w-4 h-4" /> [SYS_SPEC_09]
          </div>
          <h2 className="text-3xl font-bold uppercase text-white tracking-wider">ARCHITECTURAL SPECIFICATION</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Hairline vector outlines, precision coordinate telemetry, and technical spec labels.
          </p>
        </div>
        <div className="border border-slate-700 p-4 rounded bg-slate-900 h-[400px]">
          <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="Blueprint Line Art" className="w-full h-full object-cover rounded opacity-80" />
        </div>
      </div>
    </section>
  );
}