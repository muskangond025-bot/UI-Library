import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Package, Heart, MapPin, CreditCard, Settings, Award, Bell, Shield, ArrowUpRight, Cpu } from 'lucide-react';

const tileContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const tileVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
};

const tiles = [
  { id: 'orders', name: 'Order History', stat: '12 Orders', desc: 'Track active & past orders', icon: Package, color: 'from-blue-600/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { id: 'wishlist', name: 'Saved Wishlist', stat: '8 Items', desc: 'Saved products for later', icon: Heart, color: 'from-pink-600/20 to-rose-500/20 text-pink-400 border-pink-500/30' },
  { id: 'addresses', name: 'Saved Addresses', stat: '3 Hubs', desc: 'Home, Office & Vacation', icon: MapPin, color: 'from-emerald-600/20 to-teal-500/20 text-emerald-400 border-emerald-500/30' },
  { id: 'payments', name: 'Payment Cards', stat: '2 Cards', desc: 'Default Visa ending 4242', icon: CreditCard, color: 'from-purple-600/20 to-indigo-500/20 text-purple-400 border-purple-500/30' },
  { id: 'rewards', name: 'Loyalty Rewards', stat: '1,250 Pts', desc: 'Gold status member perks', icon: Award, color: 'from-amber-600/20 to-orange-500/20 text-amber-400 border-amber-500/30' },
  { id: 'notifications', name: 'Alert Center', stat: '3 Unread', desc: 'Delivery updates & promos', icon: Bell, color: 'from-sky-600/20 to-blue-500/20 text-sky-400 border-sky-500/30' },
  { id: 'security', name: 'Security & Auth', stat: '2FA Active', desc: 'Password & login sessions', icon: Shield, color: 'from-emerald-600/20 to-green-500/20 text-green-400 border-green-500/30' },
  { id: 'settings', name: 'Account Settings', stat: '80% Complete', desc: 'Preferences & profile data', icon: Settings, color: 'from-slate-600/20 to-slate-500/20 text-slate-300 border-slate-600/30' },
];

export function AccountOverview3() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-10 min-h-[680px]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Command Center Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold tracking-wider">
                  SYSTEM READY
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: #MK-88102</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white mt-1">
                Account Command Hub
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Alex Morgan"
              className="w-9 h-9 rounded-xl object-cover ring-2 ring-cyan-500/40"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Alex Morgan</p>
              <p className="text-xs text-slate-400">alex.morgan@example.com</p>
            </div>
          </div>
        </div>

        {/* Command Grid Tiles */}
        <motion.div
          variants={tileContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.id}
                variants={tileVariant}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-slate-900/80 rounded-2xl p-5 border ${tile.color} cursor-pointer transition-all shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${tile.color} border`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                    {tile.stat}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5 group-hover:text-cyan-300 transition-colors">
                    {tile.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">{tile.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="group-hover:text-cyan-400 transition-colors font-medium">Quick Access</span>
                  <span className="font-mono text-[10px] text-slate-600">SYS_TILE</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default AccountOverview3;
