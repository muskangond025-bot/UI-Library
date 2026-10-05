import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ShoppingBag, Heart, Award, MapPin, TrendingUp, ChevronRight, UserCheck } from 'lucide-react';

function Counter({ from = 0, to, duration = 1.5 }: { from?: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: 'easeOut' });
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);

  return <span>{displayValue.toLocaleString()}</span>;
}

export function AccountOverview5() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                METRICS DASHBOARD
              </span>
              <span className="text-xs text-slate-400">Real-time Account Metrics</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white mt-1">Account Statistics Home</h1>
          </div>

          <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-2xl border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Alex Morgan"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div>
              <p className="text-sm font-bold text-white">Alex Morgan</p>
              <p className="text-xs text-indigo-400 font-medium">Gold Member • 80% Complete</p>
            </div>
          </div>
        </div>

        {/* Strong Numerical Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Orders', value: 12, icon: ShoppingBag, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30', sub: '+2 this month' },
            { label: 'Wishlist Items', value: 8, icon: Heart, color: 'text-pink-400 bg-pink-500/10 border-pink-500/30', sub: '3 back in stock' },
            { label: 'Reward Points', value: 1250, icon: Award, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30', sub: '$25 voucher ready' },
            { label: 'Saved Addresses', value: 3, icon: MapPin, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30', sub: 'Default: Office' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <div className={`p-3 rounded-2xl border ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    <Counter to={stat.value} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{stat.sub}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Insights Row */}
        <div className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">High Account Activity Score</h3>
              <p className="text-xs text-slate-400 mt-0.5">Your customer engagement puts you in the top 5% of VIP shoppers.</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2">
            <span>VIEW STATS BREAKDOWN</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview5;
