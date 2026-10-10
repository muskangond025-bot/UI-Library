import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Terminal } from 'lucide-react';

export function AboutPartnersBrands6() {
  const partners = [
    { title: 'RAW CYBER FORCE', category: 'DEVOPS / KUBERNETES', code: 'BRUTAL-01' },
    { title: 'STARK VECTOR AI', category: 'NEURAL MODELS', code: 'BRUTAL-02' },
    { title: 'HARDWARE ZERO', category: 'FIPS 140-3 SECURITY', code: 'BRUTAL-03' },
    { title: 'BLOCK CHAIN CORE', category: 'LEDGER AUDIT', code: 'BRUTAL-04' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black border-y-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-yellow-400 text-xs font-mono font-black tracking-widest uppercase border-2 border-black">
            <Sparkles className="w-3.5 h-3.5" /> NEO-BRUTALISM #06 • ANIMATION: HARD STARK OFFSET SHADOW POP
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            STARK NEO-BRUTALIST ALLIANCE
          </h2>
          <p className="font-mono font-bold text-base sm:text-lg">
            High-contrast hard shadows, heavy black borders, and raw industrial typography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_#000000] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-yellow-400 border-2 border-black font-black text-xs font-mono">
                    #{idx + 1}
                  </div>
                  <span className="font-mono font-bold text-xs bg-black text-white px-2 py-1">{p.code}</span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-none">{p.title}</h3>
                <p className="font-mono text-xs font-bold text-zinc-600">{p.category}</p>
              </div>

              <div className="pt-4 border-t-4 border-black flex items-center justify-between font-mono font-black text-xs">
                <span>STATUS: VERIFIED</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
