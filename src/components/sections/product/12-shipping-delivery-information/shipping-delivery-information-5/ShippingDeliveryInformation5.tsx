import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation5({ data }: { data: any }) {

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4">Route Tracking</h2>
        <p className="text-indigo-200">Watch your package travel the globe.</p>
      </div>

      <div className="relative w-full max-w-2xl h-64 border-b border-indigo-500/30">
        {/* Animated Arc */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M 10 250 Q 300 0 600 250"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Package */}
        <motion.div 
          className="absolute w-8 h-8 bg-white rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          initial={{ offsetDistance: "0%" } as any}
          whileInView={{ offsetDistance: "100%" } as any}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ 
            offsetPath: "path('M 10 250 Q 300 0 600 250')",
          } as any}
        >
          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
        </motion.div>
      </div>
      
      <div className="w-full max-w-2xl flex justify-between text-indigo-300 font-medium mt-4 px-4">
        <span>Warehouse</span>
        <span>Your Door</span>
      </div>
    </div>
  );
}
