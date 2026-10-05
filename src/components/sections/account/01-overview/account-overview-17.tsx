import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, ShoppingBag, Heart, MapPin, Award, Settings } from 'lucide-react';

const pathAnimation = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.5, ease: 'easeInOut' } }
};

export function AccountOverview17() {
  const nodes = [
    { id: 'profile', label: 'Profile', stat: 'Alex Morgan', icon: User, x: 50, y: 20 },
    { id: 'orders', label: 'Orders', stat: '12 Orders', icon: ShoppingBag, x: 20, y: 60 },
    { id: 'wishlist', label: 'Wishlist', stat: '8 Items', icon: Heart, x: 80, y: 60 },
    { id: 'rewards', label: 'Rewards', stat: '1,250 Pts', icon: Award, x: 50, y: 90 },
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[720px] flex items-center">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
            VISUAL RELATIONSHIP MAP
          </span>
          <h1 className="text-3xl font-bold text-white">Visual Account Connector Map</h1>
        </div>

        <div className="relative bg-slate-900/60 rounded-3xl p-12 border border-slate-800 min-h-[450px] flex items-center justify-center">
          {/* SVG Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-500/30" strokeWidth="2" fill="none">
            <motion.path
              d="M 50% 25% L 25% 65%"
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M 50% 25% L 75% 65%"
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M 25% 65% L 50% 85%"
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M 75% 65% L 50% 85%"
              variants={pathAnimation}
              initial="hidden"
              animate="visible"
            />
          </svg>

          {/* Node Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">
            <div className="md:col-span-3 flex justify-center">
              <div className="bg-slate-950 p-6 rounded-3xl border border-indigo-500/40 text-center space-y-2 shadow-2xl">
                <User className="w-8 h-8 text-indigo-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Alex Morgan</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-indigo-500/20 text-indigo-300 font-mono">
                  CENTRAL ACCOUNT HUB
                </span>
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
              <ShoppingBag className="w-6 h-6 text-blue-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">12 Orders</h4>
              <p className="text-xs text-slate-400">Order History</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
              <Award className="w-6 h-6 text-amber-400 mx-auto" />
              <h4 className="text-sm font-bold text-amber-400">1,250 Points</h4>
              <p className="text-xs text-slate-400">Gold Rewards</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-1">
              <Heart className="w-6 h-6 text-pink-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">8 Saved Items</h4>
              <p className="text-xs text-slate-400">Wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview17;
