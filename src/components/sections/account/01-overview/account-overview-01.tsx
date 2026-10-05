import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, ShoppingBag, Heart, MapPin, Award, ArrowRight, ShieldCheck, Clock, ChevronRight, Bell, CreditCard, Settings, Sparkles } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    tier: 'Gold Member',
    memberSince: 'March 2023',
  },
  stats: [
    { label: 'Total Orders', value: '12', icon: ShoppingBag, color: 'from-blue-500 to-indigo-600', text: 'text-blue-400' },
    { label: 'Wishlist Items', value: '8', icon: Heart, color: 'from-rose-500 to-pink-600', text: 'text-pink-400' },
    { label: 'Saved Addresses', value: '3', icon: MapPin, color: 'from-emerald-500 to-teal-600', text: 'text-emerald-400' },
    { label: 'Reward Points', value: '1,250', icon: Award, color: 'from-amber-500 to-orange-600', text: 'text-amber-400' },
  ],
  recentOrder: {
    id: '#DH-28491',
    date: 'Oct 02, 2026',
    status: 'In Transit',
    items: 3,
    total: '$249.50',
  },
  quickActions: [
    { name: 'View Order History', desc: 'Track, return, or buy again', icon: ShoppingBag, href: '#' },
    { name: 'Saved Addresses', desc: '3 active delivery locations', icon: MapPin, href: '#' },
    { name: 'Wishlist & Favorites', desc: '8 items saved for later', icon: Heart, href: '#' },
    { name: 'Payment Methods', desc: 'Visa ending in 4242', icon: CreditCard, href: '#' },
  ]
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const titleRevealVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const pulseGlowVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

export function AccountOverview1() {
  return (
    <div className="w-full bg-slate-950 text-slate-100 p-6 md:p-10 min-h-[680px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-8"
      >
        {/* Welcome Banner */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <motion.div
            variants={pulseGlowVariants}
            animate="animate"
            className="absolute -right-12 -top-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="flex items-center gap-5 z-10">
            <div className="relative">
              <img
                src={mockData.user.avatar}
                alt={mockData.user.name}
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-indigo-500/40 shadow-xl"
              />
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 p-1.5 rounded-lg text-slate-950 font-black shadow-md inline-block"
              >
                <Award className="w-3.5 h-3.5" />
              </motion.span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  {mockData.user.tier}
                </span>
                <span className="text-xs text-slate-400">Member since {mockData.user.memberSince}</span>
              </div>
              <motion.h1
                variants={titleRevealVariants}
                className="text-2xl md:text-3xl font-bold text-white mt-1"
              >
                Welcome back, {mockData.user.name} 👋
              </motion.h1>
              <p className="text-sm text-slate-400 mt-0.5">
                Here is a quick snapshot of your account home today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-4 py-2.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 rounded-xl text-sm font-medium border border-slate-700 transition-colors flex items-center justify-center gap-2 group"
            >
              <Bell className="w-4 h-4 text-slate-400 group-hover:rotate-12 transition-transform" />
              <span>Notifications</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 md:flex-none px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group"
            >
              <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>Settings</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Account Statistics Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mockData.stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 relative group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 rounded-bl-full group-hover:opacity-15 transition-opacity`} />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-400">{stat.label}</span>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-2 rounded-xl bg-slate-800/80 ${stat.text}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                </div>
                <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dashboard Grid: Recent Order & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Order Preview Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 bg-slate-900/60 rounded-3xl p-6 border border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400 animate-spin-slow" />
                  Recent Order Snapshot
                </h2>
                <span className="text-xs font-semibold text-indigo-400 hover:underline cursor-pointer flex items-center gap-1 group">
                  View All <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/60 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-slate-300 font-semibold">{mockData.recentOrder.id}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {mockData.recentOrder.status}
                  </span>
                </div>
                <div className="flex justify-between items-end pt-2 border-t border-slate-800/60">
                  <div>
                    <p className="text-xs text-slate-400">Placed on {mockData.recentOrder.date}</p>
                    <p className="text-xs text-slate-300 mt-0.5">{mockData.recentOrder.items} Items</p>
                  </div>
                  <span className="text-base font-bold text-white">{mockData.recentOrder.total}</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-slate-700/80 flex items-center justify-center gap-1.5 group"
            >
              <span>Track Delivery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Quick Actions Modules */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-slate-900/60 rounded-3xl p-6 border border-slate-800/80"
          >
            <h2 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              Quick Account Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockData.quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <motion.a
                    key={idx}
                    href={action.href}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-slate-950/50 hover:bg-slate-950 p-4 rounded-2xl border border-slate-800/60 hover:border-indigo-500/40 transition-all duration-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {action.name}
                        </h3>
                        <p className="text-xs text-slate-400">{action.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AccountOverview1;
