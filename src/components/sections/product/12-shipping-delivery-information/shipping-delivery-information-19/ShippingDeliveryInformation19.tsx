import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Zap, Plane } from 'lucide-react';

export default function ShippingDeliveryInformation19({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  const tiers = [
    { icon: Leaf, name: "Eco Standard", time: "5-7 Days", desc: "Carbon neutral ground shipping.", color: "bg-emerald-500" },
    { icon: Zap, name: "Express", time: "2-3 Days", desc: "Fast priority air transit.", color: "bg-blue-500" },
    { icon: Plane, name: "Overnight", time: "Next Day", desc: "Direct to door delivery by 10 AM.", color: "bg-purple-500" }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-100 flex items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col md:flex-row h-96 gap-4">
        {tiers.map((tier, i) => {
          const isActive = activeTab === i;
          return (
            <motion.div
              key={i}
              className={`relative rounded-3xl cursor-pointer overflow-hidden flex flex-col justify-end p-8 ${tier.color} text-white`}
              animate={{ flex: isActive ? 3 : 1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              onClick={() => setActiveTab(i)}
            >
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
              
              <motion.div 
                className="absolute top-8 left-8 p-3 bg-white/20 backdrop-blur-md rounded-2xl"
                layout
              >
                <tier.icon size={24} />
              </motion.div>

              <div className="relative z-10 mt-auto">
                <motion.h3 layout className="font-bold text-xl mb-1 whitespace-nowrap">{tier.name}</motion.h3>
                <motion.div layout className="font-mono text-sm opacity-80 whitespace-nowrap">{tier.time}</motion.div>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="text-sm font-medium leading-relaxed"
                    >
                      {tier.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
