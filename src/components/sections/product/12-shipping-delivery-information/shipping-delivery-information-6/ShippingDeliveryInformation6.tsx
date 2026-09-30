import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export default function ShippingDeliveryInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-amber-100 flex flex-col items-center justify-center perspective-1000">
      <motion.div 
        className="w-full max-w-sm bg-white p-12 rounded-3xl shadow-xl flex flex-col items-center text-center cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ rotateX: isHovered ? 10 : 0, scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="w-24 h-24 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0 bg-amber-500 origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <Box 
            size={40} 
            className={`relative z-10 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-amber-500'}`} 
          />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Unboxing Experience</h3>
        <p className="text-slate-500">
          Your order arrives in eco-friendly, premium packaging designed to protect and impress.
        </p>
        
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-1 bg-amber-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
