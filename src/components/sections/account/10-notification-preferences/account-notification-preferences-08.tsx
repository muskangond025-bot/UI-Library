import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

export function AccountNotificationPreferences8() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">SYSTEM CONTROLS</span>
            <h2 className="text-3xl font-extrabold text-white">Notification Control Center</h2>
          </div>
          <SlidersHorizontal className="w-6 h-6 text-slate-500" />
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <div>
              <h4 className="font-bold text-white text-lg">Global Master Switch</h4>
              <p className="text-xs text-slate-400">Enable or disable all non-essential notifications</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl">ENABLED</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences8;
