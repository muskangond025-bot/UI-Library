import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCare16({ data }) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const content = {
    1: { title: "Preparation", desc: "Empty all pockets and remove any detachable accessories before cleaning." },
    2: { title: "Pre-treat", desc: "Apply stain remover directly to soiled areas and let sit for 10 minutes." },
    3: { title: "Wash", desc: "Machine wash cold on a delicate cycle with like colors." },
    4: { title: "Dry", desc: "Lay flat on a clean towel away from direct sunlight." }
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-cyan-950 flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-lg bg-cyan-900/30 p-8 rounded-3xl border border-cyan-800/50 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-cyan-900 -z-10 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-cyan-400 -z-10 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          
          {[1, 2, 3, 4].map(num => (
            <div 
              key={num} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${step >= num ? 'bg-cyan-400 text-cyan-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-cyan-900 text-cyan-700'}`}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="min-h-[120px]">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-cyan-50 mb-3">{content[step].title}</h3>
            <p className="text-cyan-200/80 leading-relaxed">{content[step].desc}</p>
          </motion.div>
        </div>

        <div className="flex justify-between mt-8">
          <button 
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${step === 1 ? 'opacity-50 cursor-not-allowed text-cyan-700' : 'text-cyan-400 hover:bg-cyan-900/50'}`}
          >
            Previous
          </button>
          <button 
            onClick={() => setStep(Math.min(totalSteps, step + 1))}
            disabled={step === totalSteps}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${step === totalSteps ? 'opacity-50 cursor-not-allowed bg-cyan-900 text-cyan-700' : 'bg-cyan-400 text-cyan-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20'}`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
