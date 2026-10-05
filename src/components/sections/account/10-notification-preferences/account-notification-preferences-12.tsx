import React from 'react';

export function AccountNotificationPreferences12() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Priority Tiers</span>
          <h2 className="text-3xl font-extrabold">Priority Settings</h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div>
              <span className="px-2.5 py-0.5 bg-rose-500/20 text-rose-300 text-[10px] font-bold rounded uppercase">ESSENTIAL</span>
              <h4 className="font-bold text-white text-base mt-1">Order & Security Alerts</h4>
            </div>
            <span className="text-xs text-slate-400 font-bold">ALWAYS ON</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences12;
