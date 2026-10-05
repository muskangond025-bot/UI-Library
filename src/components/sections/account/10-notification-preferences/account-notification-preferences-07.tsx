import React, { useState } from 'react';

export function AccountNotificationPreferences7() {
  const [activeChannel, setActiveChannel] = useState('Push');

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Segmented Selector</span>
          <h2 className="text-3xl font-extrabold text-white">Segmented Channel Control</h2>
        </div>

        <div className="flex justify-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800 max-w-md mx-auto">
          {['Push', 'Email', 'SMS', 'WhatsApp'].map((ch) => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={'flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ' + (activeChannel === ch ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
            >
              {ch}
            </button>
          ))}
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-4">
          <h4 className="font-bold text-white text-lg">{activeChannel} Channel Settings</h4>
          <p className="text-xs text-slate-400">Configure which notifications are dispatched via {activeChannel}.</p>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences7;
