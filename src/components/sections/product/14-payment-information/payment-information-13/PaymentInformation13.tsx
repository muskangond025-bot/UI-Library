import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export default function PaymentInformation13({ data }: { data: any }) {
  const [currency, setCurrency] = useState(0);
  const currencies = [
    { code: "USD", symbol: "$", rate: 1, flag: "🇺🇸" },
    { code: "EUR", symbol: "€", rate: 0.92, flag: "🇪🇺" },
    { code: "GBP", symbol: "£", rate: 0.79, flag: "🇬🇧" },
    { code: "JPY", symbol: "¥", rate: 150.2, flag: "🇯🇵" },
  ];

  const price = 299.99;

  // Auto-cycle currencies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrency(c => (c + 1) % currencies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Global Pricing</h2>
        <p className="text-indigo-300 font-bold text-sm tracking-widest mt-2">AUTO-CONVERT TO LOCAL CURRENCY</p>
      </div>

      <div className="flex gap-2 mb-8 z-10">
        {currencies.map((c, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-xl font-bold transition-all duration-500 ${currency === i ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-110' : 'bg-white/5 text-white/50 border border-white/10'}`}
          >
            <span className="mr-2">{c.flag}</span>{c.code}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/20 text-center relative overflow-hidden z-10">
        
        {/* Spinning Globe */}
        <motion.div 
          className="absolute -bottom-16 -right-16 text-indigo-500/20 z-0"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <Globe2 size={200} strokeWidth={1} />
        </motion.div>

        <div className="relative z-10">
          <p className="text-xs font-bold text-indigo-200 uppercase tracking-[0.3em] mb-4">Total Amount Due</p>
          <div className="h-24 overflow-hidden flex items-center justify-center bg-black/20 rounded-2xl border border-white/10 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currency}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -50, opacity: 0, rotateX: 90 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-6xl font-black text-white tracking-tighter drop-shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {currencies[currency].symbol}{(price * currencies[currency].rate).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
