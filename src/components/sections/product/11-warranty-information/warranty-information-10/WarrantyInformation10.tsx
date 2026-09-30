import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WarrantyInformation10({ data }: { data: any }) {
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCertificate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-teal-950 flex flex-col items-center justify-center relative">
      {!showCertificate && (
        <motion.div 
          className="text-teal-400 flex flex-col items-center"
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <motion.div 
            className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="font-mono text-sm tracking-widest">GENERATING CERTIFICATE...</p>
        </motion.div>
      )}

      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full max-w-xl bg-gradient-to-br from-teal-50 to-white p-1 rounded-2xl shadow-2xl relative"
          >
            <div className="bg-white rounded-xl p-8 border-4 border-double border-teal-100 relative overflow-hidden">
              {/* Seal */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest opacity-20 rotate-12">
                Valid
              </div>
              
              <h2 className="text-3xl font-serif text-teal-900 mb-2 border-b-2 border-teal-100 pb-4">Certificate of Warranty</h2>
              
              <div className="mt-8 space-y-4 font-mono text-sm text-teal-800/70">
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>REGISTRATION NO:</span>
                  <span className="font-bold text-teal-900">#WR-2948-AX</span>
                </div>
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>COVERAGE:</span>
                  <span className="font-bold text-teal-900">PREMIUM CARE (2 YRS)</span>
                </div>
                <div className="flex justify-between border-b border-teal-50 border-dashed pb-2">
                  <span>STATUS:</span>
                  <span className="font-bold text-green-600">ACTIVE</span>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-teal-100 flex justify-between items-end">
                <div>
                  <div className="text-xs text-teal-500 mb-1">AUTHORIZED SIGNATURE</div>
                  <div className="font-serif italic text-2xl text-teal-900 opacity-60">John Doe</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {showCertificate && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-teal-300 hover:text-white transition-colors underline underline-offset-4 text-sm"
          onClick={() => {
            setShowCertificate(false);
            setTimeout(() => setShowCertificate(true), 1500);
          }}
        >
          Regenerate Certificate
        </motion.button>
      )}
    </div>
  );
}
