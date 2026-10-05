import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function AccountAddressBook20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Master Portal</span>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Saved Locations</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            + Add New Location
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/40 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                Primary Residence
              </span>
              <Check className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-base text-slate-300 mt-2">742 Evergreen Terrace</p>
            <p className="text-sm text-slate-400">Springfield, IL 62704</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-800 text-slate-400">
                Corporate HQ
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-base text-slate-300 mt-2">100 Innovation Way, Ste 400</p>
            <p className="text-sm text-slate-400">San Francisco, CA 94105</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook20;
