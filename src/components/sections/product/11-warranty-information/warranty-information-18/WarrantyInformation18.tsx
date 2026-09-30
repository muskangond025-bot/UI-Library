import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function WarrantyInformation18({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-indigo-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background ripples */}
      <motion.div 
        className="absolute w-96 h-96 border border-indigo-500/20 rounded-full"
        animate={{ scale: [1, 2], opacity: [1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-96 h-96 border border-indigo-400/20 rounded-full"
        animate={{ scale: [1, 2], opacity: [1, 0] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(99,102,241,0.5)] cursor-pointer"
          whileHover={{ scale: 1.1, borderRadius: "50%" }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Download className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
        
        <h2 className="text-3xl font-bold mb-2 text-center">Download PDF</h2>
        <p className="text-indigo-300 text-center max-w-sm">
          Get the complete 24-page warranty guide, including international clauses and legal terms.
        </p>
      </div>
    </div>
  );
}
