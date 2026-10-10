"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

export function GlobalCtaBanner3() {
  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto border-4 border-black bg-white p-8 sm:p-14 rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">DEPLOY CYBER RIG #3</h2>
          </div>
          <p className="text-xs font-black uppercase text-black/80 max-w-xl">
            INSTANT OPTICAL TELEMETRY ROUTING. ZERO SYSTEM LATENCY GUARANTEED WITH 99.999% SLA.
          </p>
        </div>

        <button className="w-full lg:w-auto px-10 py-5 bg-black text-lime-400 font-black text-sm uppercase border-4 border-black hover:bg-lime-400 hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 shrink-0">
          EXECUTE DEPLOYMENT <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}