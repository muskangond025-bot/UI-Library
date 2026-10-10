"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function GlobalCtaBanner17() {
  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE INVITATION • ISSUE #17</span>
        <h2 className="text-4xl sm:text-6xl font-normal text-stone-950 mt-6 tracking-tight">Become a Patron of Cultural Excellence</h2>
        <div className="w-16 h-0.5 bg-amber-900 mx-auto mt-6 mb-6"></div>
        <p className="font-sans text-stone-600 text-base max-w-xl mx-auto leading-relaxed mb-10">
          Subscribe to our bespoke print gazette & receive private invitations to exclusive European ateliers and horology showcases.
        </p>
        <button className="px-10 py-4 rounded-xl bg-stone-950 hover:bg-amber-900 text-white font-sans text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-3">
          BECOME A MEMBER <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}