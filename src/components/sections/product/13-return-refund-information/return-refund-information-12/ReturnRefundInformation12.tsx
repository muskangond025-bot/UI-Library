import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation12({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Organic Blob */}
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-50 blur-3xl mix-blend-screen"
        animate={{
          borderRadius: ["40% 60% 70% 30%", "30% 50% 40% 60%", "60% 30% 50% 70%", "40% 60% 70% 30%"],
          rotate: [0, 90, 180, 360],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-gradient-to-bl from-pink-500 to-orange-500 opacity-40 blur-3xl mix-blend-screen"
        animate={{
          borderRadius: ["60% 40% 30% 70%", "40% 60% 50% 50%", "50% 50% 70% 30%", "60% 40% 30% 70%"],
          rotate: [360, 180, 90, 0],
          scale: [0.9, 1.2, 1, 0.9]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6">Organic Refunds</h2>
        <div className="space-y-6">
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-white/60">Condition</span>
            <span className="text-white font-medium">Unworn & Unwashed</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-4">
            <span className="text-white/60">Timeframe</span>
            <span className="text-white font-medium">90 Days</span>
          </div>
          <div className="flex justify-between pb-4">
            <span className="text-white/60">Refund Method</span>
            <span className="text-white font-medium">Original Payment</span>
          </div>
        </div>
        <button className="w-full mt-8 py-4 bg-white/20 hover:bg-white/30 transition text-white font-bold rounded-xl backdrop-blur-md border border-white/30">
          View Full Policy
        </button>
      </div>

    </div>
  );
}
