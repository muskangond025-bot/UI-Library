import React from 'react';
import { motion } from 'framer-motion';

export function AccountSavedProducts14() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Saved Item Activity Timeline</h2>
        <div className="pl-6 border-l-2 border-indigo-500/30 space-y-6">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <span className="text-xs uppercase font-bold text-indigo-400">Activity Log</span>
            <p className="text-lg font-bold text-white mt-1">Item Saved to Account</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSavedProducts14;
