import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitcoin, CreditCard, Wallet } from 'lucide-react';

export default function PaymentInformation5({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    { color: "bg-blue-600", icon: CreditCard, title: "Credit Card" },
    { color: "bg-orange-500", icon: Bitcoin, title: "Crypto" },
    { color: "bg-neutral-800", icon: Wallet, title: "Apple Pay" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#f3f4f6] flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-800">Your Wallet</h2>
        <p className="text-neutral-500">Hover the stack to pick a payment method.</p>
      </div>

      <motion.div 
        className="relative w-64 h-40 cursor-pointer"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        {cards.map((card, i) => {
          const offset = isOpen ? (i - 1) * 80 : 0;
          const rotate = isOpen ? (i - 1) * 15 : i * 2;
          const scale = isOpen ? 1 : 1 - (2 - i) * 0.05;
          const y = isOpen ? offset : (2 - i) * -10;

          return (
            <motion.div
              key={i}
              className={`absolute inset-0 ${card.color} rounded-2xl shadow-xl flex flex-col justify-between p-6 border border-white/20 text-white origin-bottom`}
              animate={{ 
                y, 
                rotate,
                scale,
                zIndex: i
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <card.icon size={28} className="opacity-80" />
              <div className="font-bold text-lg tracking-wider">{card.title}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
