import React from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation14({ data }: { data: any }) {
  const text = "initiate_refund --policy=strict\n> Verifying order status...\n> OK.\n> Processing refund to original payment method...\n> Status: COMPLETED in 0.4s.\n\nRefunds are processed automatically and instantly when scanned by the carrier. No manual reviews. No delays.";
  
  const chars = text.split("");

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-black flex items-center justify-center font-mono">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-xl p-6 shadow-[0_0_50px_rgba(34,197,94,0.1)] border border-neutral-800">
        
        <div className="flex gap-2 mb-6 border-b border-neutral-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="text-green-500 text-lg leading-relaxed whitespace-pre-wrap flex flex-wrap">
          {chars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span 
            className="inline-block w-3 h-6 bg-green-500 ml-1 translate-y-1"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
