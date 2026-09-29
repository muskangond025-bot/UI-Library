import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SizeGuide19({ data }: { data: any }) {
  const [step, setStep] = useState(1);
  const [selectedFit, setFit] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        
        <div className="flex gap-4 mb-16">
          <div className={`flex-1 h-2 rounded-full transition-colors duration-500 ${step >= 1 ? 'bg-black' : 'bg-neutral-200'}`} />
          <div className={`flex-1 h-2 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-black' : 'bg-neutral-200'}`} />
        </div>

        <div className="relative h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 className="text-4xl font-black text-black mb-8">Step 1: Choose Your Fit</h2>
                <div className="space-y-4 flex-1">
                  {['Slim Fit', 'Regular Fit', 'Oversized'].map((fit) => (
                    <button
                      key={fit}
                      onClick={() => setFit(fit)}
                      className={`w-full p-6 text-left rounded-2xl border-2 font-bold text-xl transition-all ${selectedFit === fit ? 'border-black bg-neutral-50' : 'border-neutral-200 hover:border-black'}`}
                    >
                      {fit}
                    </button>
                  ))}
                </div>
                <button 
                  disabled={!selectedFit}
                  onClick={() => setStep(2)}
                  className="w-full bg-black text-white p-6 rounded-2xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute inset-0 flex flex-col"
              >
                <h2 className="text-4xl font-black text-black mb-8">Step 2: Recommended Size</h2>
                <div className="flex-1 flex flex-col items-center justify-center bg-neutral-50 rounded-3xl border border-neutral-200 mb-6">
                  <span className="text-neutral-500 font-bold uppercase tracking-widest mb-4">Based on {selectedFit}</span>
                  <span className="text-8xl font-black text-black">Medium</span>
                </div>
                <button 
                  onClick={() => setStep(1)}
                  className="w-full bg-transparent border-2 border-black text-black p-6 rounded-2xl font-bold text-xl hover:bg-neutral-50 transition-colors"
                >
                  Start Over
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
