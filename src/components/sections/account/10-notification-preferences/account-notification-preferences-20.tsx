import React from 'react';
import { Sparkles, Bell, Shield } from 'lucide-react';

export function AccountNotificationPreferences20() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> ULTIMATE NOTIFICATION SUITE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white">Award-Style Preferences</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-slate-950 rounded-3xl border border-amber-500/40 space-y-4">
            <Bell className="w-8 h-8 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Master Dispatch Control</h3>
          </div>
          <div className="p-8 bg-slate-950 rounded-3xl border border-amber-500/40 space-y-4">
            <Shield className="w-8 h-8 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Security & Account Suite</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences20;
