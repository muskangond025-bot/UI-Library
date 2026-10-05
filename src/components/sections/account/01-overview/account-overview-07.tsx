import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Shield, Award, ShoppingBag, Heart, MapPin, Settings, ChevronRight, LogOut } from 'lucide-react';

const leftPanelVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

const rightPanelVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

export function AccountOverview7() {
  return (
    <div className="w-full bg-neutral-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Profile Card */}
        <motion.div
          variants={leftPanelVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
                PROFILE CARD
              </span>
              <span className="text-xs text-neutral-500">ID: #MK-9021</span>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                alt="Alex Morgan"
                className="w-24 h-24 rounded-2xl object-cover ring-2 ring-indigo-500/40 shadow-2xl"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">Alex Morgan</h2>
                <p className="text-xs text-neutral-400 mt-1">alex.morgan@example.com</p>
              </div>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-semibold">
                Gold Tier Customer
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-neutral-800">
            <div className="flex justify-between text-xs text-neutral-400">
              <span>Account Completion</span>
              <span className="text-white font-bold">80%</span>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="w-[80%] h-full bg-indigo-500 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Quick Account Actions */}
        <motion.div
          variants={rightPanelVariant}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between space-y-6"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Quick Account Actions</h3>
              <span className="text-xs text-neutral-400">Shortcuts & Settings</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'My Orders', stat: '12 Orders', desc: 'View order history', icon: ShoppingBag },
                { title: 'Wishlist', stat: '8 Items', desc: 'Saved items list', icon: Heart },
                { title: 'Saved Hubs', stat: '3 Addresses', desc: 'Delivery locations', icon: MapPin },
                { title: 'Loyalty Perks', stat: '1,250 Pts', desc: 'Redeem rewards', icon: Award },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-neutral-950/80 rounded-2xl border border-neutral-800 hover:border-indigo-500/40 transition-all cursor-pointer group flex items-start justify-between"
                  >
                    <div>
                      <div className="p-2.5 rounded-xl bg-neutral-800 text-indigo-400 group-hover:scale-110 transition-transform mb-3 w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400 mt-0.5">{item.stat}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-indigo-400 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountOverview7;
