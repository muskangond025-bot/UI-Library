import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Building } from 'lucide-react';

export function BillingAddress17({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Main Street');
  const [cityZip, setCityZip] = useState('Atlanta, GA 30301');
  const [taxId, setTaxId] = useState('US-TAX-8942');
  const [showTaxDetails, setShowTaxDetails] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Corporate Tax Billing Form
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Billing Street Address (Required)</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City & ZIP Code (Required)</label>
            <input
              type="text"
              value={cityZip}
              onChange={(e) => setCityZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowTaxDetails(!showTaxDetails)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showTaxDetails ? 'Hide Corporate VAT Details' : '+ Add corporate tax ID & business invoicing'}</span>
            <motion.div animate={{ rotate: showTaxDetails ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showTaxDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-purple-400" /> Corporate VAT / Tax Number
                  </label>
                  <input
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress17;