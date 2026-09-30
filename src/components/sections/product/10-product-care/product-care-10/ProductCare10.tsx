import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare10({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-rose-50 flex items-center justify-center">
      <motion.div 
        className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-md"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div 
          className="p-8 cursor-pointer flex justify-between items-center bg-rose-100/50 hover:bg-rose-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          layout
        >
          <h3 className="text-xl font-bold text-rose-900">Care Instructions</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-rose-500"
          >
            ▼
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="px-8 overflow-hidden"
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            paddingTop: isOpen ? 32 : 0,
            paddingBottom: isOpen ? 32 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4 text-rose-950/70 text-sm leading-relaxed">
            <p><strong>Step 1:</strong> Prepare the surface by removing any loose debris.</p>
            <p><strong>Step 2:</strong> Apply the cleaning solution evenly across the affected area.</p>
            <p><strong>Step 3:</strong> Let it sit for 5 minutes to break down stains.</p>
            <p><strong>Step 4:</strong> Wipe gently with a circular motion until clean.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
