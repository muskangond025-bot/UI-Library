import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Clock } from 'lucide-react';

export function DeliveryOptions17({ data }: { data?: any }) {
  const [selectedSpeed, setSelectedSpeed] = useState('express');
  const [showPreferences, setShowPreferences] = useState(false);
  const [timeSlot, setTimeSlot] = useState('morning');

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Delivery Preferences
        </h2>

        <div className="space-y-4">
          <div
            onClick={() => setSelectedSpeed('standard')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selectedSpeed === 'standard' ? 'bg-slate-950 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-purple-400">Free</span>
          </div>

          <div
            onClick={() => setSelectedSpeed('express')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selectedSpeed === 'express' ? 'bg-slate-950 border-purple-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-purple-400">$14.99</span>
          </div>

          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showPreferences ? 'Hide Delivery Preferences' : '+ Specify delivery time window & signature requirements'}</span>
            <motion.div animate={{ rotate: showPreferences ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {showPreferences && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-3 pt-2"
              >
                <label className="block text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" /> Preferred Delivery Window
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
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

export default DeliveryOptions17;