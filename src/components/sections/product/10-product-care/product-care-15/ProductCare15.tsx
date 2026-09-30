import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCare15({ data }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  const frames = [
    { text: "DO NOT", color: "text-red-500", bg: "bg-red-50" },
    { text: "BLEACH", color: "text-red-600", bg: "bg-red-100" },
    { text: "USE", color: "text-blue-500", bg: "bg-blue-50" },
    { text: "MILD SOAP", color: "text-blue-600", bg: "bg-blue-100" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % frames.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [frames.length]);

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-900 flex items-center justify-center relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
      
      <div className="relative z-10 text-center">
        <h3 className="text-neutral-500 text-sm font-mono tracking-widest mb-12">CARE INSTRUCTION SEQUENCE</h3>
        
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`text-6xl md:text-8xl font-black ${frames[currentStep].color}`}
            >
              {frames[currentStep].text}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {frames.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentStep ? 'w-8 bg-white' : 'w-2 bg-neutral-700'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
