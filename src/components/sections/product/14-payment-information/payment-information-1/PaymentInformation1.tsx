import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation1({ data }: { data: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative perspective-[1000px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900">Secure Payments</h2>
        <p className="text-neutral-500">Hover the card to see security details.</p>
      </div>

      <motion.div 
        className="relative w-96 h-56 cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        animate={{ rotateY: isFlipped ? 180 : 0, rotateX: isFlipped ? 0 : 10, rotateZ: isFlipped ? 0 : -5 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-700"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-center text-white/50">
            <span className="font-mono text-sm tracking-widest">CREDIT CARD</span>
            <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#eb001b" opacity="0.8"/>
              <circle cx="27.5" cy="12.5" r="12.5" fill="#f79e1b" opacity="0.8"/>
            </svg>
          </div>
          <div className="flex gap-2 items-center text-white/80">
            <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-500" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <div className="font-mono text-2xl text-white tracking-widest">
            •••• •••• •••• 4242
          </div>
          <div className="flex justify-between text-white/60 font-mono text-sm uppercase">
            <span>Cardholder Name</span>
            <span>12/28</span>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 bg-neutral-200 rounded-2xl shadow-2xl flex flex-col pt-6 border border-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-12 bg-neutral-900 mb-4" />
          <div className="px-6 flex items-center justify-end gap-2">
            <span className="text-xs font-bold text-neutral-400">CVV</span>
            <div className="w-16 h-8 bg-white flex items-center justify-center font-mono font-bold text-neutral-900 italic rounded">
              ***
            </div>
          </div>
          <div className="px-6 mt-auto pb-6 text-xs text-neutral-500 leading-tight">
            256-bit SSL encryption. We never store your full card details. Compliant with PCI-DSS standards.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
