import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRightLeft, CreditCard } from 'lucide-react';

export default function ReturnRefundInformation18({ data }: { data: any }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState(0);
  const targetAmount = 129.99;

  const handleRefund = () => {
    if (isProcessing || amount === targetAmount) return;
    setIsProcessing(true);
    setAmount(0);
    
    // Simulate digital counting
    let current = 0;
    const interval = setInterval(() => {
      current += 3.45; // Arbitrary step
      if (current >= targetAmount) {
        current = targetAmount;
        clearInterval(interval);
        setTimeout(() => setIsProcessing(false), 500);
      }
      setAmount(current);
    }, 20);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#0a0a0a] border border-neutral-800 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-md bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3 text-neutral-400">
            <CreditCard size={24} />
            <span className="font-mono">•••• 4242</span>
          </div>
          <ArrowRightLeft className="text-emerald-500 animate-pulse" />
          <div className="flex items-center gap-2 text-white font-bold">
            Store Balance
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-widest mb-4">Refund Amount</p>
          <div className="text-6xl font-black text-emerald-400 tracking-tighter flex items-center justify-center gap-1 font-mono">
            <span>$</span>
            <span>{amount.toFixed(2)}</span>
          </div>
        </div>

        <div className="relative h-2 bg-neutral-800 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-emerald-500"
            animate={{ width: `${(amount / targetAmount) * 100}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <button 
          onClick={handleRefund}
          disabled={isProcessing || amount === targetAmount}
          className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
          style={{ 
            backgroundColor: amount === targetAmount ? '#059669' : '#171717',
            color: amount === targetAmount ? '#ffffff' : '#10b981',
            border: '1px solid',
            borderColor: amount === targetAmount ? '#059669' : '#047857'
          }}
        >
          <AnimatePresence mode="wait">
            {amount === targetAmount && !isProcessing ? (
              <motion.div 
                key="success"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={20} />
                REFUND COMPLETED
              </motion.div>
            ) : isProcessing ? (
              <motion.div 
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 font-mono"
              >
                PROCESSING...
              </motion.div>
            ) : (
              <motion.div 
                key="initiate"
                className="flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                INITIATE INSTANT REFUND
                <ArrowRightLeft size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {amount === targetAmount && (
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full mt-4 text-neutral-500 hover:text-neutral-300 text-sm font-medium underline underline-offset-4"
            onClick={() => setAmount(0)}
          >
            Reset Demo
          </motion.button>
        )}
      </div>

    </div>
  );
}
