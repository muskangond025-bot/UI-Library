import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ShoppingBag, Heart, Award, MapPin } from 'lucide-react';

const welcomeTransition: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' }
  }
};

const dashboardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' }
  }
};

export function AccountOverview19() {
  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        {/* Main Personalized Welcome Greeting */}
        <motion.div
          variants={welcomeTransition}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4"
        >
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
            PERSONALIZED GREETING
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            WELCOME BACK, ALEX
          </h1>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Your personalized customer portal is ready with 12 active orders, 8 wishlist items, and 1,250 reward points.
          </p>
        </motion.div>

        {/* Transitioned Account Modules */}
        <motion.div
          variants={dashboardReveal}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Your Orders', val: '12 Orders', icon: ShoppingBag, color: 'text-blue-400' },
            { label: 'Your Wishlist', val: '8 Items', icon: Heart, color: 'text-pink-400' },
            { label: 'Your Rewards', val: '1,250 Pts', icon: Award, color: 'text-amber-400' },
            { label: 'Your Addresses', val: '3 Saved', icon: MapPin, color: 'text-emerald-400' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 text-center space-y-3 hover:border-indigo-500/40 transition-colors"
              >
                <div className={`p-3 rounded-2xl bg-slate-950 ${item.color} w-fit mx-auto`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase">{item.label}</h3>
                <p className="text-xl font-bold text-white">{item.val}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default AccountOverview19;
