"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

export function GlobalFooter3() {
  return (
    <footer className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex flex-col lg:flex-row justify-between items-start border-4 border-black bg-white p-8 sm:p-12 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
                <Zap className="w-6 h-6 fill-lime-400" />
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-black">CYBER TERMINAL FOOTER #3</h2>
            </div>
            <p className="text-xs font-black uppercase text-black/80 max-w-lg">
              SYSTEM STATUS: ONLINE • OPTICAL PACKET ROUTING RUNNING AT SUB-MILLISECOND LATENCY.
            </p>
          </div>

          <motion.button whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }} whileTap={{ x: 0, y: 0 }} className="mt-6 lg:mt-0 px-8 py-4 bg-black text-lime-400 font-black text-xs uppercase border-4 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            TERMINAL DISPATCH <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-black text-black pt-4 border-t-2 border-black">
          <p>CYBERPUNK MATRIX SYSTEMS © 2026</p>
          <div className="flex gap-6 underline">
            {['DISCORD', 'GITHUB', 'TELEMETRY'].map((item, idx) => (
              <motion.span key={idx} whileHover={{ scale: 1.1, color: '#ffffff' }} className="cursor-pointer">
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}