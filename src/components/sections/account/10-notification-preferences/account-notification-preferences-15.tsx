import React, { useState } from 'react';
import { Bell, Shield, Tag, ChevronRight } from 'lucide-react';

export function AccountNotificationPreferences15() {
  const [toggles, setToggles] = useState({ orders: true, promos: false, security: true });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Mobile Interface</span>
          <h2 className="text-2xl font-bold text-white">Mobile-First Settings</h2>
        </div>

        <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl divide-y divide-slate-900">
          <div className="p-4 bg-slate-900/60 text-xs font-bold uppercase tracking-widest text-slate-400">
            TRANSACTIONAL ALERTS
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Order Push Notifications</h4>
                <p className="text-[11px] text-slate-400">Status & dispatch updates</p>
              </div>
            </div>
            <button onClick={() => toggle('orders')} className={'w-11 h-6 rounded-full p-1 transition-colors ' + (toggles.orders ? 'bg-emerald-500' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-slate-950 rounded-full transition-transform ' + (toggles.orders ? 'translate-x-5' : 'translate-x-0')} />
            </button>
          </div>

          <div className="p-4 bg-slate-900/60 text-xs font-bold uppercase tracking-widest text-slate-400">
            MARKETING PREFERENCES
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Tag className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Promotional Emails</h4>
                <p className="text-[11px] text-slate-400">Exclusive sales & discounts</p>
              </div>
            </div>
            <button onClick={() => toggle('promos')} className={'w-11 h-6 rounded-full p-1 transition-colors ' + (toggles.promos ? 'bg-emerald-500' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-slate-950 rounded-full transition-transform ' + (toggles.promos ? 'translate-x-5' : 'translate-x-0')} />
            </button>
          </div>

          <div className="p-4 flex items-center justify-between hover:bg-slate-900/40 transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <div>
                <h4 className="font-bold text-white text-sm">Security Notifications</h4>
                <p className="text-[11px] text-slate-400">Login & password alerts</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences15;
