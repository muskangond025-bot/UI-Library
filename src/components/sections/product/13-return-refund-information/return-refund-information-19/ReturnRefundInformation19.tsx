import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation19({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white tracking-widest uppercase">Cyber Policy</h2>
      </div>

      <div className="relative p-1 rounded-2xl overflow-hidden group">
        
        {/* Animated Neon Border */}
        <motion.div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
        
        {/* Glow Layer */}
        <motion.div 
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#06b6d4_360deg)] blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        {/* Content Card */}
        <div className="relative bg-neutral-900 rounded-xl p-10 w-full max-w-lg z-10 shadow-2xl">
          <ul className="space-y-6 text-cyan-50 font-mono">
            <li className="flex items-center gap-4">
              <span className="text-cyan-400">01_</span>
              FREE GROUND SHIPPING
            </li>
            <li className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <span className="text-cyan-400">02_</span>
              NO RESTOCKING FEES
            </li>
            <li className="flex items-center gap-4 border-t border-neutral-800 pt-6">
              <span className="text-cyan-400">03_</span>
              INSTANT CREDIT VERIFICATION
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
