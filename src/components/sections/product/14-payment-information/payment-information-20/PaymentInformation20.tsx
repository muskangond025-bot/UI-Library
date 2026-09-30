import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check, ShieldAlert } from 'lucide-react';

export default function PaymentInformation20({ data }: { data: any }) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Auto loop the morph animation to show it off
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setState('idle');
        await new Promise(r => setTimeout(r, 2000));
        setState('loading');
        await new Promise(r => setTimeout(r, 2000));
        setState('success');
        await new Promise(r => setTimeout(r, 2000));
      }
    };
    sequence();
  }, []);

  const bgColors = {
    idle: '#171717',
    loading: '#3b82f6',
    success: '#10b981'
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Dynamic Background Glow based on state */}
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ backgroundColor: bgColors[state] }}
        transition={{ duration: 0.5 }}
      />

      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-lg">State Morphs</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm tracking-widest uppercase">DYNAMIC UI TRANSITIONS</p>
      </div>

      <motion.div
        className="flex items-center justify-center font-bold text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden relative z-10 border border-white/10"
        animate={{ 
          width: state === 'idle' ? 300 : 80,
          height: state === 'idle' ? 80 : 80,
          borderRadius: 40,
          backgroundColor: bgColors[state]
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.span 
              key="idle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="whitespace-nowrap uppercase tracking-[0.2em] text-lg flex items-center gap-3"
            >
              <ShieldAlert size={20} /> Authorize Payment
            </motion.span>
          )}
          
          {state === 'loading' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2 size={32} className="animate-spin drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div 
              key="success"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
            >
              <Check size={40} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
