import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet, Bitcoin } from 'lucide-react';

export default function PaymentInformation2({ data }: { data: any }) {
  const methods = [
    { icon: CreditCard, name: "Visa / Mastercard" },
    { icon: Smartphone, name: "Apple Pay" },
    { icon: Wallet, name: "Google Pay" },
    { icon: Bitcoin, name: "Crypto" },
    { icon: CreditCard, name: "Amex" },
    { icon: Wallet, name: "PayPal" },
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      
      <div className="text-center z-10 mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Pay Your Way</h2>
        <p className="text-neutral-400">We accept all major payment methods.</p>
      </div>

      <div className="w-full relative overflow-hidden flex scale-110 -rotate-3 z-10 py-8 border-y border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...methods, ...methods].map((method, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all shadow-[0_0_30px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <method.icon size={32} />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-500 uppercase tracking-widest group-hover:from-white group-hover:to-neutral-300 transition-all">
                {method.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
