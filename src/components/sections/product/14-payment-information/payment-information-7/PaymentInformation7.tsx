import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

export default function PaymentInformation7({ data }: { data: any }) {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative cursor-pointer" onClick={() => setIsLocked(!isLocked)}>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-800">Bank-Grade Security</h2>
        <p className="text-neutral-500">Click to {isLocked ? 'unlock' : 'lock'} the vault.</p>
      </div>

      <div className="relative">
        <motion.div 
          className={`w-48 h-48 rounded-full border-8 flex items-center justify-center shadow-2xl transition-colors duration-500 ${isLocked ? 'bg-emerald-50 border-emerald-500' : 'bg-rose-50 border-rose-500'}`}
          animate={{ scale: isLocked ? 1 : 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {isLocked ? (
              <motion.div
                key="locked"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-500 flex flex-col items-center"
              >
                <Lock size={64} />
                <span className="font-bold mt-2 uppercase tracking-widest text-sm">Secured</span>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="text-rose-500 flex flex-col items-center"
              >
                <Unlock size={64} />
                <span className="font-bold mt-2 uppercase tracking-widest text-sm">Vulnerable</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Orbiting particles when locked */}
        <AnimatePresence>
          {isLocked && (
            <motion.div 
              className="absolute inset-[-20px] border-2 border-dashed border-emerald-300 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" } }}
            />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
