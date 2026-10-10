"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function GlobalNewsletter9() {
  const [active, setActive] = useState(false);

  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="w-3 h-8 bg-rose-500 rounded-full mb-6"></div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Newsletter Matrix #9</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-4">Get early access to open-source UI benchmarks, component design systems, and real-time graphics case studies.</p>
          </div>
          <span className="text-xs font-mono text-rose-400 font-bold">FREQUENCY: EVERY TUESDAY 09:00 EST</span>
        </div>

        <div className="lg:col-span-6 bg-neutral-900 rounded-3xl p-8 border border-white/10 min-h-[340px] flex flex-col justify-center">
          {active ? (
            <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm font-bold bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <span>Subscription confirmed. Welcome to the Bento Tech Network!</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setActive(true); }} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-2">WORK EMAIL</label>
                <input type="email" required placeholder="developer@company.com" className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors" />
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20">
                JOIN DISPATCH MATRIX <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}