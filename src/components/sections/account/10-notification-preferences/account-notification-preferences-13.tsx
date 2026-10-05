import React from 'react';

export function AccountNotificationPreferences13() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Delivery Flow</span>
          <h2 className="text-3xl font-extrabold">Notification Journey</h2>
        </div>

        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl flex justify-between items-center text-xs font-bold text-slate-300">
          <span>Trigger (Purchase)</span>
          <span className="text-cyan-400">➔</span>
          <span>Channel (Push)</span>
          <span className="text-cyan-400">➔</span>
          <span>Delivery (Instant)</span>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences13;
