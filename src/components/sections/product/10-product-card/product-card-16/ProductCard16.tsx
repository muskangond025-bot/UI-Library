import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductCard16({ data }: { data?: any }) {
  const [step, setStep] = useState(1);
  const [engraving, setEngraving] = useState("ALEX-2026");

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative">
        
        {/* Step Progress Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>1</span>
            <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>2</span>
            <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>3</span>
          </div>
          <span className="text-[11px] font-bold text-slate-400">Step {step} of 3</span>
        </div>

        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80" 
            alt="Custom Watch" 
            className="w-full h-full object-cover"
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-extrabold text-lg text-white">Select Watch Variant</h3>
              <p className="text-xs text-slate-400 mt-0.5">Classic Silver Case with Stainless Steel Band.</p>
              <button onClick={() => setStep(2)} className="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2">
                Next: Customize Engraving <ArrowRight size={14} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-extrabold text-lg text-white">Laser Engraving</h3>
              <input 
                type="text" 
                value={engraving} 
                onChange={(e) => setEngraving(e.target.value)}
                className="w-full mt-2 px-3 py-2 bg-slate-950 border border-white/10 rounded-xl text-xs text-white"
                placeholder="Enter text..."
              />
              <button onClick={() => setStep(3)} className="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2">
                Next: Confirm Order <ArrowRight size={14} />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h3 className="font-extrabold text-lg text-white">Order Summary</h3>
              <p className="text-xs text-slate-400 mt-0.5">Engraved: <strong className="text-white">{engraving}</strong></p>
              <button onClick={() => setStep(1)} className="w-full mt-4 py-3 bg-emerald-500 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-2">
                <Check size={16} /> Complete Purchase ($275)
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
