import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Truck, Plane } from 'lucide-react';

export default function ShippingDeliveryInformation11({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />

      <div className="text-center z-20 mb-12">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter uppercase mb-4">
          Global Logistics Routing
        </h2>
        <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase">Live Tracking Network</p>
      </div>
      
      <div className="relative w-full max-w-4xl h-80 rounded-3xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl shadow-2xl overflow-hidden flex items-center justify-center p-8 z-10">
        
        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" preserveAspectRatio="none" viewBox="0 0 1000 300">
          {/* Faint Background Track */}
          <path 
            d="M 100 200 C 300 200, 400 50, 600 150 S 800 100, 900 100" 
            fill="none" 
            stroke="#172554" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeDasharray="10 10"
          />
          
          {/* Animated Glow Route */}
          <motion.path
            d="M 100 200 C 300 200, 400 50, 600 150 S 800 100, 900 100"
            fill="none"
            stroke="url(#cyan-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          <defs>
            <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Start Node */}
        <motion.div 
          className="absolute left-[10%] bottom-[33%] w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
          <div className="w-2 h-2 bg-white rounded-full z-10" />
        </motion.div>

        {/* Mid Node */}
        <motion.div 
          className="absolute left-[60%] top-[50%] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
          <div className="w-2 h-2 bg-white rounded-full z-10" />
        </motion.div>

        {/* End Node */}
        <motion.div 
          className="absolute right-[10%] top-[33%] w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4, type: "spring" }}
        >
          <MapPin size={20} className="text-white" fill="currentColor" />
        </motion.div>

        {/* Floating Cargo Icon moving across the path conceptually */}
        <motion.div
          className="absolute bg-neutral-800 border border-cyan-500/50 p-2 rounded-xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          initial={{ left: "10%", bottom: "33%", opacity: 0 }}
          whileInView={{ 
            left: ["10%", "30%", "60%", "90%"],
            bottom: ["33%", "66%", "50%", "66%"],
            opacity: [0, 1, 1, 0]
          }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 2.5, ease: "easeInOut", times: [0, 0.4, 0.7, 1] }}
        >
          <Plane size={24} className="rotate-45" />
        </motion.div>
      </div>

    </div>
  );
}
