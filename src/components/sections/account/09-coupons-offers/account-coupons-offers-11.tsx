import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

export function AccountCouponsOffers11() {
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Eligibility Breakdown</span>
          <h2 className="text-3xl font-extrabold">Coupon Eligibility Matrix</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-black text-white">₹500 OFF</h3>
              <p className="text-xs text-slate-400 mt-1">CODE: SAVE500</p>
            </div>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full">
              ELIGIBLE
            </span>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-900 text-xs text-slate-400">
            <p className="flex justify-between"><span>Minimum Order:</span> <strong className="text-white">₹2,999</strong></p>
            <p className="flex justify-between"><span>Applicable Category:</span> <strong className="text-white">Streetwear</strong></p>
          </div>

          <button
            onClick={() => setOpenTerms(!openTerms)}
            className="w-full pt-2 flex items-center justify-between text-xs font-bold text-indigo-400"
          >
            <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5" /> View Terms & Conditions</span>
            <ChevronDown className={'w-4 h-4 transition-transform ' + (openTerms ? 'rotate-180' : '')} />
          </button>

          <AnimatePresence>
            {openTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-slate-400 bg-slate-900 p-4 rounded-xl space-y-1"
              >
                <p>• Cannot be combined with other promotional vouchers.</p>
                <p>• Valid only on non-sale items.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers11;
