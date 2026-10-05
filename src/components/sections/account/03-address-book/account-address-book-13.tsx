import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

export function AccountAddressBook13() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Address Book</h2>
            <p className="text-sm text-slate-400 mt-1">Manage saved addresses or create new locations</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isOpen ? 'Cancel' : 'Add New Address'}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-8"
            >
              <form className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 space-y-4 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-4">New Location Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Recipient Name" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <input type="text" placeholder="Street Address" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="State" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <button type="button" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl bg-indigo-600 font-bold text-white text-sm mt-4 hover:bg-indigo-500">
                  Save Address
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h4 className="font-bold text-white">Default Address</h4>
          <p className="text-sm text-slate-400 mt-1">Alex Morgan — 742 Evergreen Terrace, Springfield, IL 62704</p>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook13;
