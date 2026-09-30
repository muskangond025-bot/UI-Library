import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation13({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-rose-50 flex items-center justify-center overflow-hidden">
      <div 
        className="relative w-full max-w-sm mt-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-white rounded-3xl border border-rose-100 shadow-xl flex flex-col items-center justify-center p-8 origin-bottom cursor-pointer"
            animate={{ 
              y: isHovered ? -120 + (i * 60) : i * 20, 
              scale: isHovered ? 1 : 1 - i * 0.05, 
              opacity: 1,
              rotate: isHovered ? (i === 0 ? -8 : i === 2 ? 8 : 0) : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ zIndex: 3 - i }}
          >
            <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center font-bold text-2xl mb-4">
              {3 - i}
            </div>
            <h3 className="font-bold text-slate-800 text-xl text-center">Year {3 - i} Coverage</h3>
            <p className="text-slate-500 text-center text-sm mt-2">
              {i === 0 ? "Full device replacement" : i === 1 ? "Parts and labor included" : "Hardware defect protection"}
            </p>
          </motion.div>
        ))}
        {/* Placeholder to reserve space since children are absolute */}
        <div className="h-[250px]" />
      </div>
    </div>
  );
}
