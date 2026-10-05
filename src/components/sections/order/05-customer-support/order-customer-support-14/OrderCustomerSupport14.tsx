import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function OrderCustomerSupport14() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-indigo-400 uppercase">Step Wizard</span>
          <h2 className="text-2xl font-bold text-white">Issue Resolution Assistant</h2>
        </motion.div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
            <span>STEP {step} OF 3</span>
            <span>ORDER #849202</span>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">What do you need help with?</h4>
              <button onClick={() => setStep(2)} className="w-full p-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-xs text-left text-white border border-slate-800">
                Wrong Shipping Address
              </button>
              <button onClick={() => setStep(2)} className="w-full p-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-xs text-left text-white border border-slate-800">
                Cancel an Item
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Select Preferred Resolution</h4>
              <button onClick={() => setStep(3)} className="w-full p-3 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs">
                Submit Auto-Resolution Request
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-base text-white">Request Dispatched!</h4>
              <p className="text-xs text-slate-400">An agent has been notified and will update your order shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport14;
