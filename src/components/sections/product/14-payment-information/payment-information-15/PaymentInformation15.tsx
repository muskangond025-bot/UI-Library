import React from 'react';
import { motion } from 'framer-motion';
import { Shield, LockKeyhole, FileCheck, CheckCircle } from 'lucide-react';

export default function PaymentInformation15({ data }: { data: any }) {
  const badges = [
    { icon: Shield, text: "McAfee Secure", color: "text-rose-500", glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)] border-rose-500/50" },
    { icon: LockKeyhole, text: "256-bit AES", color: "text-emerald-500", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-500/50" },
    { icon: FileCheck, text: "PCI-DSS Compliant", color: "text-blue-500", glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)] border-blue-500/50" },
    { icon: CheckCircle, text: "Norton Verified", color: "text-amber-500", glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)] border-amber-500/50" },
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">Zero Trust Security</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm tracking-widest uppercase">MILITARY-GRADE ENCRYPTION</p>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl z-10">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-2xl bg-neutral-900 border backdrop-blur-xl flex items-center gap-4 cursor-pointer relative overflow-hidden ${badge.glow}`}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ repeat: Infinity, duration: 4, delay: i * 0.5, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Shimmer effect inside badge */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            />
            
            <div className={`w-14 h-14 rounded-full bg-black border border-neutral-800 flex items-center justify-center ${badge.color} drop-shadow-[0_0_10px_currentColor]`}>
              <badge.icon size={28} />
            </div>
            <span className="font-bold text-white tracking-wide">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
