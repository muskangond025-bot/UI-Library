"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalNewsletter18() {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
            <Zap className="w-6 h-6 fill-lime-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER MAIL PROTOCOL #18</h2>
        </div>
        <p className="text-xs font-black uppercase text-black/80 mb-8 max-w-md">
          DIRECT NEURAL DISPATCHES: ZERO ALGORITHM SPAM. HARDWARE HACKS & SYNTH SOUND ESSAYS WEEKLY.
        </p>

        {sent ? (
          <div className="bg-lime-400 border-4 border-black p-4 text-xs font-black uppercase text-black">
            [SYS_OK]: NEURAL ADDRESS REGISTERED IN DATABASE.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col sm:flex-row gap-4">
            <input type="email" required placeholder="USER@CYBERMATRIX.NET" className="flex-1 bg-yellow-100 border-4 border-black px-4 py-3.5 text-xs font-black text-black placeholder:text-black/50 focus:outline-none focus:bg-white" />
            <button type="submit" className="bg-black text-lime-400 font-black text-xs px-8 py-3.5 border-4 border-black hover:bg-lime-400 hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2">
              TRANSMIT MAIL <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}