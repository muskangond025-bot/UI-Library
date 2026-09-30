import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Fingerprint, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation4({ data }: { data: any }) {
  const [isScanning, setIsScanning] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleScan = () => {
    if (isScanning || isVerified) return;
    setIsScanning(true);
    
    // Simulate scan duration
    setTimeout(() => {
      setIsScanning(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleReset = () => {
    setIsVerified(false);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden group">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Biometric Verification</h2>
        <p className="text-neutral-400">Click the fingerprint scanner to verify.</p>
      </div>

      <div 
        className={`relative w-48 h-48 rounded-full flex items-center justify-center shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] border transition-colors duration-500 overflow-hidden cursor-pointer ${isVerified ? 'bg-emerald-900/20 border-emerald-500' : 'bg-neutral-800 border-neutral-700'}`}
        onClick={isVerified ? handleReset : handleScan}
      >
        <AnimatePresence mode="wait">
          {isVerified ? (
            <motion.div 
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="text-emerald-500 flex flex-col items-center z-10"
            >
              <CheckCircle2 size={64} />
              <span className="font-bold mt-2 uppercase tracking-widest text-xs">Verified</span>
            </motion.div>
          ) : (
            <motion.div 
              key="fingerprint"
              className="z-10"
              animate={{ scale: isScanning ? 1.1 : 1 }}
            >
              <Fingerprint 
                size={80} 
                className={`transition-colors duration-500 ${isScanning ? 'text-emerald-400' : 'text-neutral-600 hover:text-neutral-500'}`}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Scanning Laser Line */}
        {isScanning && (
          <motion.div 
            className="absolute left-0 w-full h-[3px] bg-emerald-400 shadow-[0_0_20px_4px_rgba(52,211,153,0.5)] z-20"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        )}
        
        {/* Ambient Glow */}
        {(isScanning || isVerified) && (
          <motion.div 
            className="absolute inset-0 bg-emerald-500/20 mix-blend-screen z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>

      <div className="flex gap-8 mt-16 text-neutral-400">
        <div className="flex items-center gap-2"><Lock size={18} /> End-to-End Encrypted</div>
        <div className="flex items-center gap-2"><ShieldCheck size={18} /> Zero Fraud Liability</div>
      </div>
    </div>
  );
}
