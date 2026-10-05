import React, { useState } from 'react';

export function AccountNotificationPreferences10() {
  const [freq, setFreq] = useState('Instant');

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Delivery Cadence</span>
          <h2 className="text-3xl font-extrabold">Notification Frequency</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['Instant', 'Daily Summary', 'Weekly Digest'].map((opt) => (
            <div
              key={opt}
              onClick={() => setFreq(opt)}
              className={'p-6 rounded-2xl border cursor-pointer transition-all space-y-3 ' + (freq === opt ? 'bg-purple-900/40 border-purple-500 shadow-xl' : 'bg-slate-900 border-slate-800 opacity-70')}
            >
              <h4 className="font-bold text-white text-lg">{opt}</h4>
              <p className="text-xs text-slate-400">Receive notifications as soon as they happen or grouped.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences10;
