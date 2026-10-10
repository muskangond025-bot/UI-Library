"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Check, FileCheck } from 'lucide-react';

export function GlobalTrustCertification12() {
  const items = [
    { num: '01', label: 'GOTS ORGANIC TEXTILE CERTIFIED', detail: 'Guaranteed 100% organic heavy wool & Egyptian cotton fibers.' },
    { num: '02', label: 'MILAN ARTISAN GUILD AUDITED', detail: 'Hand-assembled by master tailors with verified heirloom longevity.' },
    { num: '03', label: 'ZERO WASTE SUPPLY CHAIN', detail: '100% biodegradable fiber packaging & carbon-neutral logistics.' },
    { num: '04', label: 'GENUINE SWISS HOROLOGY SEAL', detail: 'Individually calibrated tourbillon escapement precision.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">THE CHRONICLE TRUST DISPATCH • ISSUE #12</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-950 mt-4">Verified Artisan Guarantees</h2>
          <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white rounded-xl p-6 border border-stone-200 shadow-md flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="font-mono text-xs font-bold text-amber-900">[{item.num}]</span>
                <h3 className="font-serif text-lg font-bold text-stone-950 mt-3 mb-2">{item.label}</h3>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">{item.detail}</p>
              </div>
              <span className="font-mono text-[10px] text-stone-400 pt-4 border-t border-stone-100 uppercase">VERIFIED STATUS: ACTIVE</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}