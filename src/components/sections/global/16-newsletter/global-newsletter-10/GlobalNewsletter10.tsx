"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

export function GlobalNewsletter10() {
  const [sub, setSub] = useState(false);

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">FIELD NOTES DISPATCH #10</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Subscribe to Product Design Insights</h2>
          <p className="text-slate-600 text-sm mt-2">Curated UI/UX benchmarks, conversion research, and frontend architecture notes.</p>
        </div>

        {sub ? (
          <div className="flex items-center gap-2 text-indigo-600 font-bold font-mono text-sm bg-indigo-50 px-6 py-4 rounded-2xl border border-indigo-200">
            <Check className="w-5 h-5 text-indigo-600" /> Subscribed successfully!
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSub(true); }} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Enter email..." className="w-full sm:w-72 bg-slate-50 border border-slate-300 rounded-2xl px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-indigo-600" />
            <button type="submit" className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shrink-0">
              JOIN <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}