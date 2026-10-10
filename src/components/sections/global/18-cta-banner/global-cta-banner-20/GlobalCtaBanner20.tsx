"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function GlobalCtaBanner20() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">CTA BANNER #20</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Start Building Enterprise UI Today</h2>
          <p className="text-slate-600 text-sm mt-2">Get full access to 500+ pre-built React components, Tailwind styles, and Framer Motion presets.</p>
        </div>

        <button className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-3 shrink-0 shadow-lg shadow-indigo-600/20">
          EXPLORE UI LIBRARY <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}