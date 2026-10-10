"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldAlert, Cpu, Lock } from 'lucide-react';

export function GlobalTrustCertification13() {
  const badges = [
    { code: 'SEC_01', name: 'HARDWARE ROOT OF TRUST', bg: 'bg-lime-400' },
    { code: 'SEC_02', name: 'QUANTUM ENCRYPTION VAULT', bg: 'bg-cyan-400' },
    { code: 'SEC_03', name: 'SUB-ZERO FAILURE SLA 99.999%', bg: 'bg-fuchsia-400' },
    { code: 'SEC_04', name: 'PEN-TEST AUDITED VERIFIED', bg: 'bg-yellow-400' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-black">CYBER TRUST BADGES #13</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded">HARDWARE SECURED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <motion.div key={idx} whileHover={{ x: -4, y: -4 }} className={"border-4 border-black " + b.bg + " p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between min-h-[200px]"}>
              <span className="bg-black text-white text-xs font-black px-3 py-1 rounded self-start">{b.code}</span>
              <h3 className="text-xl font-black uppercase text-black mt-4 leading-tight">{b.name}</h3>
              <span className="text-[10px] font-black underline mt-4">VERIFY CERTIFICATE →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}