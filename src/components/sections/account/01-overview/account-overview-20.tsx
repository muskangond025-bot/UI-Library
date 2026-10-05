import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Crown, Sparkles, ShoppingBag, Heart, MapPin, Award, ArrowUpRight, Shield, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export function AccountOverview20() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [6, -6]);
  const rotateY = useTransform(x, [-80, 80], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const completionPercent = 80;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercent / 100) * circumference;

  return (
    <div className="w-full bg-[#0a0a0d] text-slate-100 p-8 md:p-14 min-h-[750px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Award-Winning Master Hero Section */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative overflow-hidden bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 rounded-3xl p-8 md:p-12 border border-amber-500/30 shadow-2xl space-y-8"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Hero Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                  alt="Alex Morgan"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover ring-2 ring-amber-500/50 shadow-2xl"
                />
                <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-xl shadow-lg">
                  <Crown className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> VIP GOLD MEMBER
                  </span>
                  <span className="text-xs text-slate-400 font-mono">ID: #MK-90241</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-1">
                  Alex Morgan
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  alex.morgan@example.com • Preferred Concierge: Express Delivery Hub
                </p>
              </div>
            </div>

            {/* SVG Completion Ring inside Hero */}
            <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-2xl border border-amber-500/20">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r={radius} className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="transparent" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="text-amber-400"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-xs font-bold text-amber-400">{completionPercent}%</span>
              </div>
              <div className="text-left">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Profile Status</span>
                <p className="text-sm font-bold text-white">80% Completed</p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid inside Award Card */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 relative z-10">
            {[
              { label: 'Completed Orders', val: '12 Orders', sub: 'Latest #DH-28491', icon: ShoppingBag, color: 'text-blue-400' },
              { label: 'Wishlist Items', val: '8 Saved', sub: '2 price drops', icon: Heart, color: 'text-pink-400' },
              { label: 'Saved Addresses', val: '3 Hubs', sub: 'Default: Home', icon: MapPin, color: 'text-emerald-400' },
              { label: 'Reward Points', val: '1,250 Pts', sub: '$25 Voucher Ready', icon: Award, color: 'text-amber-400' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-400">{stat.label}</span>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <p className="text-lg font-bold text-white">{stat.val}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountOverview20;
