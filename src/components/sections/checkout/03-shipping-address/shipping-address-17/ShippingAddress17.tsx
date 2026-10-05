import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, ArrowRight, Key } from 'lucide-react';

export function ShippingAddress17({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Main Street');
  const [city, setCity] = useState('Atlanta');
  const [gateCode, setGateCode] = useState('#4589');
  const [showAccessNotes, setShowAccessNotes] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Delivery Access Disclosure
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address (Required)</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">City (Required)</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowAccessNotes(!showAccessNotes)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showAccessNotes ? 'Hide Gate Access & Delivery Notes' : '+ Add gate code & courier instructions'}</span>
            <motion.div animate={{ rotate: showAccessNotes ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showAccessNotes && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-purple-400" /> Gate Access Code
                  </label>
                  <input
                    type="text"
                    value={gateCode}
                    onChange={(e) => setGateCode(e.target.value)}
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

export default ShippingAddress17;