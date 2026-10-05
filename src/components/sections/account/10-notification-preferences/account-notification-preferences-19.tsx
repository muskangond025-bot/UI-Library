import React, { useState } from 'react';
import { Check, Bell, Tag } from 'lucide-react';

export function AccountNotificationPreferences19() {
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [settings, setSettings] = useState({ orders: true, promos: false, security: true });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    setDirty(true);
  };

  const handleSave = () => {
    setSaved(true);
    setDirty(false);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Workflow</span>
          <h2 className="text-3xl font-extrabold text-white">Save Changes Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-white text-sm">Order Alerts</span>
              </div>
              <button onClick={() => toggle('orders')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.orders ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.orders ? 'translate-x-6' : 'translate-x-0')} />
              </button>
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-white text-sm">Promotions & Deals</span>
              </div>
              <button onClick={() => toggle('promos')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.promos ? 'bg-indigo-600' : 'bg-slate-800')}>
                <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.promos ? 'translate-x-6' : 'translate-x-0')} />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-400">
              {dirty ? '• You have unsaved changes' : 'All preferences up to date'}
            </span>

            <button 
              onClick={handleSave} 
              className={'px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 ' + (saved ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-600 hover:bg-indigo-500 text-white')}
            >
              {saved ? <><Check className="w-4 h-4" /> PREFERENCES SAVED</> : 'SAVE CHANGES'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences19;
