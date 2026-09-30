import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function WarrantyInformation8({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-purple-50 flex items-center justify-center overflow-hidden">
      <motion.div 
        className="relative bg-white w-full max-w-md aspect-[4/3] rounded-3xl shadow-lg border border-purple-100 p-8 flex flex-col items-center justify-center cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 rounded-3xl"
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        
        <div className="relative z-10 text-center">
          <motion.div 
            className="w-20 h-20 mx-auto border-4 border-purple-200 rounded-full flex items-center justify-center mb-6"
            animate={{ 
              borderColor: isHovered ? "#a855f7" : "#e9d5ff",
              rotate: isHovered ? 0 : 180 
            }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <span className="text-3xl font-bold text-purple-900">5</span>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Five Year Warranty</h3>
          
          <motion.div 
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-slate-500 mt-4">
              Premium protection for your investment. We guarantee this product will remain free of defects for five full years.
            </p>
          </motion.div>
          
          <motion.div 
            animate={{ opacity: isHovered ? 0 : 1, height: isHovered ? 0 : "auto" }}
            className="text-purple-600 font-medium mt-4"
          >
            Hover to explore
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
