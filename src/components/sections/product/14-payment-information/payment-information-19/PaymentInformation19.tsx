import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation19({ data }: { data: any }) {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setScanning(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-mono text-emerald-500">
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent" />

      <div className="relative z-10 w-full max-w-md border border-emerald-900 bg-neutral-900/80 backdrop-blur p-8 rounded-2xl flex flex-col items-center shadow-[0_0_50px_rgba(16,185,129,0.1)] cursor-pointer" onClick={() => setScanning(true)}>
        
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <Scan size={64} className="text-emerald-700 absolute" />
          
          {scanning ? (
            <motion.div 
              className="absolute w-full h-full border-2 border-emerald-400 rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <CheckCircle2 size={80} className="text-emerald-400" />
            </motion.div>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-center">
          {scanning ? "Analyzing Risk Factors" : "Transaction Approved"}
        </h3>

        <div className="w-full space-y-4">
          <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2">
            <span>IP Geolocation</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'MATCH' : 'SCANNING...'}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2">
            <span>CVV Code</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'VERIFIED' : 'SCANNING...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Address AVS</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'PASS' : 'SCANNING...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
