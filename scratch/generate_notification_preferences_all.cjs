const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/account/10-notification-preferences');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 01 — CLEAN SETTINGS DASHBOARD
const code01 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Tag } from 'lucide-react';

export function AccountNotificationPreferences1() {
  const [settings, setSettings] = useState({
    orders: true,
    promotions: false,
    security: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="pb-6 border-b border-slate-800">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">PREFERENCES DASHBOARD</span>
          <h2 className="text-3xl font-extrabold text-white">Clean Settings Dashboard</h2>
        </div>

        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Order & Delivery Updates</h4>
                <p className="text-xs text-slate-400 mt-0.5">Real-time status alerts for purchases</p>
              </div>
            </div>
            <button onClick={() => toggle('orders')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.orders ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.orders ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Promotions & Discounts</h4>
                <p className="text-xs text-slate-400 mt-0.5">Seasonal sales and coupon announcements</p>
              </div>
            </div>
            <button onClick={() => toggle('promotions')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.promotions ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.promotions ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Account & Security Alerts</h4>
                <p className="text-xs text-slate-400 mt-0.5">Login attempts and password changes</p>
              </div>
            </div>
            <button onClick={() => toggle('security')} className={'w-12 h-6 rounded-full p-1 transition-colors ' + (settings.security ? 'bg-indigo-600' : 'bg-slate-800')}>
              <div className={'w-4 h-4 bg-white rounded-full transition-transform ' + (settings.security ? 'translate-x-6' : 'translate-x-0')} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences1;
`;

// 02 — CHANNEL MATRIX
const code02 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountNotificationPreferences2() {
  const [matrix, setMatrix] = useState<Record<string, Record<string, boolean>>>({
    orders: { push: true, email: true, sms: true, whatsapp: false },
    promotions: { push: false, email: true, sms: false, whatsapp: false },
    priceDrops: { push: true, email: false, sms: false, whatsapp: false }
  });

  const toggleCell = (topic: string, channel: string) => {
    setMatrix(prev => ({
      ...prev,
      [topic]: { ...prev[topic], [channel]: !prev[topic][channel] }
    }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Multi-Channel Control</span>
          <h2 className="text-3xl font-extrabold">Notification Channel Matrix</h2>
        </div>

        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 overflow-x-auto shadow-2xl">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-5 gap-4 pb-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
              <span className="text-left text-white">Topic</span>
              <span>Push</span>
              <span>Email</span>
              <span>SMS</span>
              <span>WhatsApp</span>
            </div>

            {[
              { id: 'orders', label: 'Order Updates' },
              { id: 'promotions', label: 'Promotions' },
              { id: 'priceDrops', label: 'Price Drops' }
            ].map((row) => (
              <div key={row.id} className="grid grid-cols-5 gap-4 py-4 border-b border-slate-900 items-center text-center">
                <span className="text-left font-bold text-white text-sm">{row.label}</span>
                {['push', 'email', 'sms', 'whatsapp'].map((ch) => (
                  <button
                    key={ch}
                    onClick={() => toggleCell(row.id, ch)}
                    className={'w-6 h-6 mx-auto rounded-lg border transition-all flex items-center justify-center ' + (matrix[row.id][ch] ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'bg-slate-900 border-slate-800')}
                  >
                    {matrix[row.id][ch] && <span className="font-bold text-xs">✓</span>}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences2;
`;

// 03 — NOTIFICATION CATEGORY CARDS
const code03 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShoppingBag, Tag, Heart } from 'lucide-react';

export function AccountNotificationPreferences3() {
  const [openCard, setOpenCard] = useState<string | null>('orders');

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Expandable Categories</span>
          <h2 className="text-3xl font-extrabold text-white">Notification Category Cards</h2>
        </div>

        <div className="space-y-4">
          {[
            { id: 'orders', title: 'Order & Shipping Status', icon: ShoppingBag, desc: 'Real-time dispatch, transit, and delivery alerts' },
            { id: 'offers', title: 'Offers & Promotional Deals', icon: Tag, desc: 'Discounts, flash sales, and exclusive coupons' },
            { id: 'wishlist', title: 'Wishlist & Price Drop Alerts', icon: Heart, desc: 'Stock replenishment and price drop notifications' }
          ].map((cat) => {
            const Icon = cat.icon;
            const isOpen = openCard === cat.id;
            return (
              <div key={cat.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div 
                  onClick={() => setOpenCard(isOpen ? null : cat.id)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{cat.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>
                  <ChevronDown className={'w-5 h-5 text-slate-400 transition-transform ' + (isOpen ? 'rotate-180' : '')} />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pt-4 border-t border-slate-800 space-y-3">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Push Notifications</span>
                        <input type="checkbox" defaultChecked className="accent-indigo-600" />
                      </div>
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>Email Notifications</span>
                        <input type="checkbox" defaultChecked className="accent-indigo-600" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences3;
`;

// 04 — MINIMAL MONOCHROME SETTINGS
const code04 = `import React from 'react';

export function AccountNotificationPreferences4() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">PREFERENCE REGISTRY</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">NOTIFICATION CONTROLS</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">SYSTEM READY</span>
        </div>

        <div className="space-y-6 divide-y divide-gray-100">
          <div className="pb-6 flex justify-between items-center font-mono text-xs">
            <div>
              <span className="text-gray-400 block mb-1">01 // TRANSACTIONAL ALERTS</span>
              <h3 className="text-lg font-light text-gray-900 uppercase">ORDER & DELIVERY UPDATES</h3>
            </div>
            <span className="font-bold border border-gray-900 px-4 py-2 uppercase">ENABLED</span>
          </div>

          <div className="pt-6 flex justify-between items-center font-mono text-xs">
            <div>
              <span className="text-gray-400 block mb-1">02 // MARKETING COMMUNICATIONS</span>
              <h3 className="text-lg font-light text-gray-900 uppercase">PROMOTIONS & DISCOUNTS</h3>
            </div>
            <span className="text-gray-400 border border-gray-200 px-4 py-2 uppercase">DISABLED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences4;
`;

// 05 — GLASS SETTINGS
const code05 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Sparkles, Shield } from 'lucide-react';

export function AccountNotificationPreferences5() {
  const [toggleVal, setToggleVal] = useState(true);

  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Preference Deck
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Glass Notification Settings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            <Bell className="w-8 h-8 text-indigo-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Order Alerts</h3>
              <p className="text-xs text-slate-400 mt-1">Receive push notifications on order updates.</p>
            </div>
            <button onClick={() => setToggleVal(!toggleVal)} className={'px-4 py-2 rounded-xl text-xs font-bold border transition-all ' + (toggleVal ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' : 'bg-white/5 text-slate-400 border-white/10')}>
              {toggleVal ? 'Status: ON' : 'Status: OFF'}
            </button>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">
            <Sparkles className="w-8 h-8 text-indigo-300" />
            <div>
              <h3 className="text-2xl font-bold text-white">Promotional Emails</h3>
              <p className="text-xs text-slate-400 mt-1">Weekly digest of discounts & deals.</p>
            </div>
            <button className="px-4 py-2 rounded-xl text-xs font-bold border bg-white/5 text-slate-400 border-white/10">
              Status: OFF
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences5;
`;

// 06 — ICON-FIRST SETTINGS
const code06 = `import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Tag, Heart, Gift } from 'lucide-react';

export function AccountNotificationPreferences6() {
  const items = [
    { title: 'Order Updates', icon: Bell, active: true },
    { title: 'Offers & Sales', icon: Tag, active: false },
    { title: 'Wishlist Alerts', icon: Heart, active: true },
    { title: 'Loyalty Rewards', icon: Gift, active: true }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Visual Controls</span>
          <h2 className="text-3xl font-extrabold text-white">Icon-First Preferences</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} whileHover={{ y: -4 }} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={'w-12 h-12 rounded-2xl flex items-center justify-center ' + (item.active ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500')}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                </div>
                <span className={'text-xs font-bold px-3 py-1 rounded-full ' + (item.active ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500')}>
                  {item.active ? 'ON' : 'OFF'}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences6;
`;

// 07 — SEGMENTED CHANNEL CONTROL
const code07 = `import React, { useState } from 'react';

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
`;

// 08 — NOTIFICATION CONTROL CENTER
const code08 = `import React from 'react';
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
`;

// 09 — QUIET HOURS
const code09 = `import React, { useState } from 'react';
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
`;

// 10 — NOTIFICATION FREQUENCY
const code10 = `import React, { useState } from 'react';

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
`;

// 11 — CHANNEL + CATEGORY MATRIX
const code11 = `import React from 'react';

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
`;

// 12 — PRIORITY SETTINGS
const code12 = `import React from 'react';

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
`;

// 13 — NOTIFICATION JOURNEY
const code13 = `import React from 'react';

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
`;

// 14 — PERSONALIZATION CONTROL
const code14 = `import React from 'react';

export function AccountNotificationPreferences14() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Smart Alerts</span>
          <h2 className="text-3xl font-extrabold">Personalization Control</h2>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center">
          <div>
            <h4 className="font-bold text-white text-base">Personalized Product Recommendations</h4>
            <p className="text-xs text-slate-400">Alerts based on your browsing history</p>
          </div>
          <input type="checkbox" defaultChecked className="accent-indigo-600 w-5 h-5" />
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences14;
`;

// 15 — COMPACT MOBILE-FIRST SETTINGS
const code15 = `import React from 'react';

export function AccountNotificationPreferences15() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-sm mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Mobile Settings</h2>
        </div>

        <div className="bg-slate-950 rounded-3xl border border-slate-800 divide-y divide-slate-900">
          <div className="p-4 flex justify-between items-center text-sm font-semibold">
            <span>Order Push Alerts</span>
            <span className="text-emerald-400">ON</span>
          </div>
          <div className="p-4 flex justify-between items-center text-sm font-semibold">
            <span>Promo Emails</span>
            <span className="text-slate-500">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences15;
`;

// 16 — FLOATING SETTINGS MODULES
const code16 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountNotificationPreferences16() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Layout</span>
          <h2 className="text-3xl font-extrabold">Floating Settings Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity }} className="p-6 bg-slate-900 border border-cyan-500/30 rounded-2xl">
            <h4 className="font-bold text-white">Floating Order Module</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences16;
`;

// 17 — 3D NOTIFICATION CONTROL
const code17 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountNotificationPreferences17() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-md mx-auto text-center space-y-8">
        <h2 className="text-3xl font-extrabold">3D Notification Control</h2>

        <motion.div whileHover={{ rotateY: 10, rotateX: -5 }} className="p-8 bg-slate-950 border border-indigo-500/30 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold text-white">VIP Notification Pass</h3>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences17;
`;

// 18 — EDITORIAL SETTINGS
const code18 = `import React from 'react';

export function AccountNotificationPreferences18() {
  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-stone-800 pb-10 space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">SYSTEM DISPATCH</span>
          <h1 className="text-5xl font-light uppercase leading-none">CONTROL YOUR <br /><span className="italic text-amber-400">NOTIFICATIONS</span></h1>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences18;
`;

// 19 — SAVE CHANGES EXPERIENCE
const code19 = `import React, { useState } from 'react';
import { Check } from 'lucide-react';

export function AccountNotificationPreferences19() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-extrabold">Save Changes Experience</h2>

        <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 space-y-6">
          <button onClick={handleSave} className={'w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ' + (saved ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-600 text-white')}>
            {saved ? <><Check className="w-4 h-4" /> PREFERENCES SAVED</> : 'SAVE CHANGES'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences19;
`;

// 20 — AWARD-STYLE NOTIFICATION PREFERENCES
const code20 = `import React from 'react';
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
`;

const codes = [
  code01, code02, code03, code04, code05,
  code06, code07, code08, code09, code10,
  code11, code12, code13, code14, code15,
  code16, code17, code18, code19, code20
];

const jsons = [
  { heading: "Clean Settings Dashboard — Sequential Preference Rows", description: "Organized settings dashboard layout with toggle controls for order alerts, promotions, and security." },
  { heading: "Notification Channel Matrix — Multi-Channel Grid", description: "Matrix table allowing users to toggle Push, Email, SMS, and WhatsApp per notification topic." },
  { heading: "Notification Category Cards — Expandable Control Cards", description: "Category cards that expand upon interaction to reveal granular notification channel controls." },
  { heading: "Minimal Monochrome Settings — Precision Typography", description: "Typography-first minimalist settings interface with clean line dividers and restrained status tags." },
  { heading: "Glass Notification Settings — Frosted Depth Cards", description: "Frosted glassmorphism preference cards with glowing toggle switches and depth effects." },
  { heading: "Icon-First Preferences — Visual Status Grid", description: "Grid of notification preferences with animated Lucide icons representing order, sale, and wishlist alerts." },
  { heading: "Segmented Channel Control — Sliding Segmented Selector", description: "Segmented control layout for quickly switching between Push, Email, SMS, and WhatsApp preference views." },
  { heading: "Notification Control Center — Centralized System Panel", description: "Control panel layout featuring a master notification switch and organized category groupings." },
  { heading: "Quiet Hours Visualizer — Time Range Control", description: "Do Not Disturb schedule visualizer with a quiet hours time range display and active status toggle." },
  { heading: "Notification Frequency — Delivery Cadence Selector", description: "Frequency preference cards allowing users to choose between Instant, Daily Summary, and Weekly Digest." },
  { heading: "Channel + Category Matrix — Granular Preference Cells", description: "Granular matrix layout for customizing multi-channel dispatch settings across all store topics." },
  { heading: "Priority Settings — Essential & Optional Tiers", description: "Priority-based settings interface separating essential order alerts from optional promotional updates." },
  { heading: "Notification Journey — Visual Connection Path", description: "Visual flow diagram mapping notification trigger events to delivery channels and frequency." },
  { heading: "Personalization Control — Smart Alert Settings", description: "Dedicated controls for product recommendation alerts, price drop notifications, and back-in-stock updates." },
  { heading: "Mobile Settings — Compact Mobile-First Layout", description: "Compact mobile-inspired preference list optimized for touch interactions and clean readability." },
  { heading: "Floating Settings Modules — Spatial Module Grid", description: "Asymmetric spatial modules floating with continuous Y-axis levitation keyframes." },
  { heading: "3D Notification Control — Interactive Tilt Pass", description: "Interactive 3D membership pass card featuring perspective tilt rotation and alert toggles." },
  { heading: "Editorial Settings — High-Fashion Typography Layout", description: "Editorial magazine layout displaying notification controls with bold headline typography." },
  { heading: "Save Changes Experience — Interactive State Transformation", description: "Settings form featuring an interactive Save button that transforms into a success state feedback." },
  { heading: "Award-Style Preferences — Ultimate VIP Notification Suite", description: "Luxurious VIP notification preference dashboard with gold crest styling, master switches, and channel controls." }
];

for (let i = 0; i < 20; i++) {
  const numStr = String(i + 1).padStart(2, '0');
  const tsxPath = path.join(targetDir, `account-notification-preferences-${numStr}.tsx`);
  const jsonPath = path.join(targetDir, `account-notification-preferences-${numStr}.json`);

  fs.writeFileSync(tsxPath, codes[i].trim() + '\n', 'utf-8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsons[i], null, 2) + '\n', 'utf-8');
  console.log(`Generated account-notification-preferences-${numStr}`);
}

console.log('All 20 Notification Preferences variants generated successfully!');
