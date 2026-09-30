import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

export default function ShippingDeliveryInformation9({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-8 min-h-[400px] rounded-3xl bg-sky-100 flex items-center justify-center relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* City Skyline Background */}
      <div className="absolute bottom-0 w-full flex justify-center space-x-1 opacity-20 pointer-events-none">
        <div className="w-8 h-20 bg-sky-900 rounded-t-sm" />
        <div className="w-12 h-32 bg-sky-900 rounded-t-sm" />
        <div className="w-10 h-24 bg-sky-900 rounded-t-sm" />
        <div className="w-16 h-40 bg-sky-900 rounded-t-sm" />
        <div className="w-8 h-16 bg-sky-900 rounded-t-sm" />
      </div>

      {/* Road */}
      <div className="absolute bottom-10 w-full h-1 bg-sky-900/30">
        <motion.div 
          className="w-full h-full border-t-2 border-dashed border-sky-100"
          animate={{ x: isHovered ? -20 : 0 }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div 
          className="mb-8 text-sky-600"
          animate={{ 
            x: isHovered ? [0, 50, -50, 0] : 0,
            y: isHovered ? [0, -5, 0, -5, 0] : 0
          }}
          transition={{ 
            x: { duration: 3, ease: "easeInOut", repeat: Infinity },
            y: { duration: 0.5, repeat: Infinity }
          }}
        >
          <Truck size={80} strokeWidth={1.5} />
        </motion.div>
        
        <h2 className="text-4xl font-bold text-sky-950 mb-2">Always on the move</h2>
        <p className="text-sky-800/60 font-medium">Hover to hit the gas. We dispatch orders 7 days a week.</p>
      </div>
    </div>
  );
}
