import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation16({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-center relative overflow-hidden perspective-[1000px]">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-2">By The Numbers</h2>
        <p className="text-indigo-300">Data visualization of our transparent policies.</p>
      </div>

      <div className="flex gap-24 items-end h-64 relative z-10 w-full max-w-xl justify-center border-b-2 border-indigo-900 pb-8" style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg)" }}>
        
        {/* 3D Bar 1 - 100% Refunds */}
        <div className="flex flex-col items-center gap-6 relative">
          <motion.div 
            className="w-24 relative origin-bottom flex items-end justify-center"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
            style={{ height: 200, transformStyle: "preserve-3d" }}
          >
            {/* Front Face */}
            <div className="absolute inset-0 bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-end justify-center pb-4">
              <span className="text-emerald-950 font-black text-2xl">100%</span>
            </div>
            {/* Right Face */}
            <div className="absolute top-0 right-0 w-8 h-full bg-emerald-700 origin-right" style={{ transform: "rotateY(90deg) translateX(50%)" }} />
            {/* Top Face */}
            <div className="absolute top-0 left-0 w-full h-8 bg-emerald-400 origin-top" style={{ transform: "rotateX(90deg) translateY(-50%)" }} />
          </motion.div>
          <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm translate-y-4">Refund</span>
        </div>

        {/* 3D Bar 2 - 0% Fees */}
        <div className="flex flex-col items-center gap-6 relative">
          <motion.div 
            className="w-24 relative origin-bottom flex items-end justify-center"
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.2, times: [0, 0.2, 0.8, 1] }}
            style={{ height: 20, transformStyle: "preserve-3d" }}
          >
            {/* Front Face */}
            <div className="absolute inset-0 bg-rose-500">
               <span className="text-white font-black text-xl absolute -top-10 left-1/2 -translate-x-1/2">0%</span>
            </div>
            {/* Right Face */}
            <div className="absolute top-0 right-0 w-8 h-full bg-rose-700 origin-right" style={{ transform: "rotateY(90deg) translateX(50%)" }} />
            {/* Top Face */}
            <div className="absolute top-0 left-0 w-full h-8 bg-rose-400 origin-top" style={{ transform: "rotateX(90deg) translateY(-50%)" }} />
          </motion.div>
          <span className="text-indigo-200 font-bold uppercase tracking-widest text-sm translate-y-4">Fees</span>
        </div>

      </div>
    </div>
  );
}
