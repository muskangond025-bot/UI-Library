import React from 'react';

export function AccountNotificationPreferences11() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Full Control</span>
          <h2 className="text-3xl font-extrabold">Channel + Category Matrix</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-slate-900 text-sm font-bold text-white">
            <span>Order Updates</span>
            <span className="text-indigo-400 text-xs">Push ✓ | Email ✓ | SMS ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences11;
