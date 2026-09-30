import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation16({ data }: { data: any }) {
  const [amount, setAmount] = useState('299.00');

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-center justify-center relative overflow-hidden gap-12">
      
      <div className="w-full max-w-xs space-y-6">
        <div>
          <label className="block text-neutral-400 text-sm font-bold mb-2 uppercase tracking-widest">Enter Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold">$</span>
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-neutral-800 border-2 border-neutral-700 text-white p-4 pl-8 rounded-xl font-mono text-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
        <p className="text-neutral-500 text-sm">The invoice will automatically update on the right.</p>
      </div>

      <div className="w-full max-w-sm aspect-[3/4] bg-white rounded-xl shadow-2xl p-8 flex flex-col relative overflow-hidden font-mono">
        {/* Glow effect from screen */}
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />
        
        <div className="flex justify-between items-center border-b-2 border-neutral-900 pb-4 mb-6">
          <div className="font-black text-2xl">INVOICE</div>
          <div className="text-neutral-400 text-sm">#INV-2024</div>
        </div>
        
        <div className="space-y-4 flex-grow text-sm">
          <div className="flex justify-between"><span className="text-neutral-500">Service</span><span>Web Design</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Due Date</span><span>Oct 15, 2026</span></div>
        </div>

        <div className="border-t-2 border-neutral-900 pt-4 mt-auto">
          <div className="flex justify-between items-end">
            <span className="text-neutral-500 text-sm">Total Due</span>
            <motion.span 
              key={amount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-neutral-900"
            >
              ${amount || '0.00'}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
