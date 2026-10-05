import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShoppingBag, Heart, MapPin, Award, User, Sparkles } from 'lucide-react';

export function AccountOverview15() {
  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center relative overflow-hidden">
      {/* Background glow float elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto w-full space-y-10 relative z-10">
        {/* Floating Header Card */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Alex Morgan"
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/40"
            />
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                FLOATING MODULE DASHBOARD
              </span>
              <h1 className="text-2xl font-bold text-white mt-1">Welcome back, Alex</h1>
              <p className="text-xs text-slate-400">alex.morgan@example.com • Gold Member</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Orders', val: '12', desc: 'Total placed', icon: ShoppingBag, floatDelay: 0 },
            { label: 'Wishlist', val: '8', desc: 'Saved products', icon: Heart, floatDelay: 1 },
            { label: 'Addresses', val: '3', desc: 'Saved locations', icon: MapPin, floatDelay: 2 },
            { label: 'Rewards', val: '1,250', desc: 'Points ready', icon: Award, floatDelay: 1.5 },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: 'easeInOut', delay: card.floatDelay }}
                className="bg-slate-900/70 backdrop-blur-md p-6 rounded-3xl border border-slate-800 shadow-xl hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-400 font-semibold">{card.label}</span>
                  <div className="p-2.5 bg-slate-800 text-indigo-400 rounded-xl">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white">{card.val}</div>
                <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview15;
