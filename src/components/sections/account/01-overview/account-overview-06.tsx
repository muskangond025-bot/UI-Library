import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Activity, Clock, ShoppingBag, MapPin, Heart, ShieldCheck, ChevronRight, User } from 'lucide-react';

const timelineEvents = [
  { id: 1, title: 'Order Shipped #DH-28491', desc: 'Package in transit via Express Shipping', time: '2 hours ago', icon: ShoppingBag, color: 'bg-emerald-500' },
  { id: 2, title: 'Wishlist Item Added', desc: 'Saved Wireless Headphones to Wishlist', time: 'Yesterday, 4:15 PM', icon: Heart, color: 'bg-pink-500' },
  { id: 3, title: 'Primary Address Updated', desc: 'Set Office Address as default delivery hub', time: 'Oct 01, 2026', icon: MapPin, color: 'bg-blue-500' },
  { id: 4, title: 'Password Security Verified', desc: 'Two-Factor Authentication audit passed', time: 'Sep 28, 2026', icon: ShieldCheck, color: 'bg-amber-500' },
];

export function AccountOverview6() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[700px]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/30">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">LIVE FEED</span>
              <h1 className="text-2xl font-bold text-white mt-0.5">Recent Activity Focused Account</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-2xl border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Alex Morgan"
              className="w-9 h-9 rounded-xl object-cover ring-2 ring-indigo-500/40"
            />
            <div>
              <p className="text-sm font-bold text-white">Alex Morgan</p>
              <p className="text-xs text-slate-400">12 Orders • Gold Tier</p>
            </div>
          </div>
        </div>

        {/* Activity Timeline as Primary Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" />
                Account Activity Stream
              </h2>
              <span className="text-xs font-medium text-slate-400">Showing last 7 days</span>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
              {timelineEvents.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.4 }}
                    className="relative group"
                  >
                    {/* Timeline node */}
                    <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full ${event.color} ring-4 ring-slate-950`} />

                    <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 group-hover:border-indigo-500/40 transition-all flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">{event.desc}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 whitespace-nowrap">{event.time}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Side Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Account Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">Total Purchases</span>
                  <span className="font-bold text-white">12 Orders</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">Wishlist Saved</span>
                  <span className="font-bold text-white">8 Products</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400">Loyalty Points</span>
                  <span className="font-bold text-amber-400">1,250 Pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview6;
