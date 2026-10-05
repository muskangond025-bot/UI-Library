import React, { useState } from 'react';
import { Moon } from 'lucide-react';

export function AccountNotificationPreferences9() {
  const [enabled, setEnabled] = useState(true);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Do Not Disturb</span>
          <h2 className="text-3xl font-extrabold">Quiet Hours Visualizer</h2>
        </div>

        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Moon className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Quiet Hours Schedule</h3>
            <p className="text-xs text-slate-400 mt-1">Mute all non-critical notifications during sleep</p>
          </div>

          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center font-mono font-bold text-indigo-300 text-lg">
            10:00 PM — 07:00 AM
          </div>

          <button onClick={() => setEnabled(!enabled)} className={'w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ' + (enabled ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400')}>
            {enabled ? 'Quiet Hours Active' : 'Enable Quiet Hours'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences9;
