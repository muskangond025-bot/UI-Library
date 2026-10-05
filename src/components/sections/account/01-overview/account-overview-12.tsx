import React from 'react';
import { motion, Variants } from 'framer-motion';
import { UserCheck, ShoppingBag, Heart, MapPin, Award, CheckCircle } from 'lucide-react';

const timelineSteps = [
  { title: 'Profile Updated', desc: 'Added contact preferences', date: 'Today', icon: UserCheck, color: 'text-indigo-400' },
  { title: 'Order Placed #DH-28491', desc: '$249.50 • 3 Items', date: 'Oct 02', icon: ShoppingBag, color: 'text-blue-400' },
  { title: 'Wishlist Item Added', desc: 'Saved 2 new items', date: 'Sep 29', icon: Heart, color: 'text-pink-400' },
  { title: 'Address Hub Saved', desc: 'Added Office location', date: 'Sep 25', icon: MapPin, color: 'text-emerald-400' },
];

export function AccountOverview12() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Header */}
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">TIMELINE JOURNEY</span>
          <h1 className="text-3xl font-bold text-white mt-1">Customer Account Timeline</h1>
          <p className="text-xs text-slate-400 mt-1">Alex Morgan • Lifetime Activity Record</p>
        </div>

        {/* Visual Animated SVG Path Timeline */}
        <div className="relative bg-slate-900/60 rounded-3xl p-8 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {timelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-slate-950 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl bg-slate-900 ${step.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">{step.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">{step.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Action</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview12;
