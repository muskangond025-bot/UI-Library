import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductBundles16({ data }: { data?: any }) {
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          16. MULTI-STEP CUSTOM BUNDLE WIZARD
        </span>
        <h2 className="text-3xl font-black text-white">Custom Device Builder</h2>
      </div>

      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10 text-xs font-bold text-slate-400">
          <span>Step {step} of 3</span>
          <div className="flex gap-1.5">
            <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-blue-500' : 'bg-slate-800'}`} />
            <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-blue-500' : 'bg-slate-800'}`} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Select Core Unit</h3>
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80" alt="Watch" className="w-full h-44 object-cover rounded-2xl mb-4" />
              <button onClick={() => setStep(2)} className="w-full py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2">
                Next: Add Accessories <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Choose Strap & Stand</h3>
              <p className="text-xs text-slate-400 mb-4">Includes Leather Strap + Wireless Charging Dock.</p>
              <button onClick={() => setStep(3)} className="w-full py-3 bg-blue-600 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2">
                Next: Confirm Bundle <ArrowRight size={14} />
              </button>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="font-extrabold text-lg text-white mb-2">Bundle Confirmed</h3>
              <span className="text-2xl font-black text-blue-400 block mb-4">$338 Total</span>
              <button onClick={() => setStep(1)} className="w-full py-3 bg-emerald-500 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-2">
                <Check size={16} /> Complete Order
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
