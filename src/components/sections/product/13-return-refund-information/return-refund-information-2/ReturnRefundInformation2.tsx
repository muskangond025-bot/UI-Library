import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCcw, ShieldCheck, Clock } from 'lucide-react';

export default function ReturnRefundInformation2({ data }: { data: any }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    { icon: RefreshCcw, title: "Free Exchanges", desc: "Swap for a different size or color at zero cost." },
    { icon: ShieldCheck, title: "Full Refund", desc: "Get 100% of your money back to original payment." },
    { icon: Clock, title: "30 Days Limit", desc: "Take your time to decide within a full month." }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => {
          const isHovered = hovered === i;
          return (
            <motion.div
              key={i}
              className="relative h-64 rounded-3xl cursor-pointer perspective-[1000px]"
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
            >
              <motion.div 
                className="w-full h-full absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex flex-col items-center justify-center text-white p-6 shadow-2xl"
                animate={{
                  rotateX: isHovered ? 10 : 0,
                  rotateY: isHovered ? -10 : 0,
                  z: isHovered ? 50 : 0,
                  boxShadow: isHovered ? "0 25px 50px -12px rgba(255,255,255,0.25)" : "0 4px 6px -1px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4" style={{ transform: "translateZ(30px)" }}>
                  <card.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ transform: "translateZ(40px)" }}>{card.title}</h3>
                
                <AnimatePresence>
                  {isHovered && (
                    <motion.p 
                      className="text-sm text-center text-white/80"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {card.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
