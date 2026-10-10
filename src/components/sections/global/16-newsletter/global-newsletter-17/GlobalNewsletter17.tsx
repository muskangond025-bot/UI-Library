"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function GlobalNewsletter17() {
  const [done, setDone] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">
          THE CHRONICLE DISPATCH • ISSUE #17
        </span>
        <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-6 tracking-tight">Cultural Intelligence & Essays</h2>
        <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4 mb-6"></div>
        <p className="font-sans text-stone-600 text-sm max-w-lg mx-auto leading-relaxed mb-8">
          Weekly long-form essays on haute couture tailoring, Swiss horology, brutalist architecture, and sustainable luxury.
        </p>

        {done ? (
          <div className="font-sans text-xs text-amber-900 font-bold bg-amber-200/40 p-4 rounded-xl max-w-md mx-auto border border-amber-300">
            ✓ Welcome to The Chronicle Reader Circle.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="max-w-md mx-auto flex gap-2 font-sans">
            <input type="email" required placeholder="reader@domain.com" className="flex-1 bg-white border border-stone-300 rounded-lg px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-amber-900" />
            <button type="submit" className="px-6 py-3 rounded-lg bg-stone-950 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2">
              JOIN <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}