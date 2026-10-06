import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, Award, ArrowUpRight, PackageCheck } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    handle: '@alexmorgan',
    email: 'alex.morgan@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    tier: 'Platinum Elite Member',
    points: 4850,
    progressToNext: 85,
  },
  modules: [
    {
      id: 'orders',
      title: 'Recent Orders',
      subtitle: '3 Active Shipments',
      count: '18 Total',
      icon: ShoppingBag,
      color: 'bg-indigo-950/40 border-indigo-800/60',
      badge: '1 In Transit',
      direction: { x: -30, y: 0 },
      details: [
        { name: 'Leather Crossbody Bag', status: 'Delivered', date: 'Yesterday', price: '$180.00' },
        { name: 'Silk Knit Cardigan', status: 'In Transit', date: 'Oct 3', price: '$120.00' },
      ]
    },
    {
      id: 'wishlist',
      title: 'Saved Wishlist',
      subtitle: '12 Items Saved',
      count: '4 On Sale',
      icon: Heart,
      color: 'bg-rose-950/40 border-rose-800/60',
      badge: '2 Back in Stock',
      direction: { x: 30, y: 0 },
      details: [
        { name: 'Tailored Wool Trousers', status: 'In Stock', date: '-15% Off', price: '$140.00' },
        { name: 'Cashmere Beanie', status: 'Low Stock', date: 'New Color', price: '$65.00' },
      ]
    },
    {
      id: 'reviews',
      title: 'Reviews & Ratings',
      subtitle: '9 Reviews Written',
      count: '4.9 ★ Average',
      icon: Star,
      color: 'bg-amber-950/40 border-amber-800/60',
      badge: 'Top Reviewer',
      direction: { x: 0, y: 30 },
      details: [
        { name: 'Minimalist Chelsea Boots', status: '5 Stars', date: 'Sep 28', price: 'Verified Purchase' },
        { name: 'Structured Oversized Blazer', status: '5 Stars', date: 'Sep 15', price: 'Verified Purchase' },
      ]
    },
    {
      id: 'rewards',
      title: 'Loyalty & Rewards',
      subtitle: '$45 Reward Balance',
      count: '4,850 Pts',
      icon: Award,
      color: 'bg-emerald-950/40 border-emerald-800/60',
      badge: 'VIP Tier 3',
      direction: { x: 0, y: -30 },
      details: [
        { name: 'Redeem $25 Voucher', status: 'Available', date: '2,500 Pts', price: 'Claim Now' },
        { name: 'Free Express Shipping Pass', status: 'Unlocked', date: 'Perk Active', price: 'Active' },
      ]
    }
  ]
};

export const AccountOverview2: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <div className="w-full bg-neutral-950 text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl space-y-8">
      {/* Hero Header Area - Enters from top */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="p-8 bg-gradient-to-r from-neutral-900 via-neutral-900 to-indigo-950/70 border border-neutral-800 rounded-2xl relative overflow-hidden"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img 
                src={mockData.user.avatar} 
                alt={mockData.user.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500/50 shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 p-1.5 bg-indigo-500 text-white rounded-lg">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{mockData.user.name}</h1>
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
                  {mockData.user.tier}
                </span>
              </div>
              <p className="text-sm text-neutral-400 mt-1">{mockData.user.email} • {mockData.user.handle}</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-neutral-300 font-mono">
                <span className="flex items-center gap-1.5">
                  <PackageCheck className="w-4 h-4 text-indigo-400" /> Member since 2024
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" /> {mockData.user.points} Reward Points
                </span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950/70 p-5 rounded-xl border border-neutral-800 min-w-[240px]">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-neutral-400">Progress to Diamond Tier</span>
              <span className="text-indigo-400">{mockData.user.progressToNext}%</span>
            </div>
            <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full" style={{ width: `${mockData.user.progressToNext}%` }}></div>
            </div>
            <p className="text-[11px] text-neutral-400">Earn 150 more points by Nov 30</p>
          </div>
        </div>
      </motion.div>

      {/* 4 Directionally Entrance Account Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockData.modules.map((mod, index) => {
          const IconComponent = mod.icon;
          const isSelected = selectedModule === mod.id;

          return (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, x: mod.direction.x, y: mod.direction.y }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedModule(isSelected ? null : mod.id)}
              className={`p-6 border rounded-2xl cursor-pointer transition-all duration-300 ${mod.color} hover:border-neutral-500 ${isSelected ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-100">{mod.title}</h3>
                    <p className="text-xs text-neutral-400">{mod.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs px-2.5 py-1 bg-neutral-900 border border-neutral-700 rounded-full font-mono font-medium text-neutral-200">
                    {mod.badge}
                  </span>
                </div>
              </div>

              {/* Detail list reveal */}
              <div className="space-y-2 mt-4 pt-4 border-t border-neutral-800/80">
                {mod.details.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs p-2.5 bg-neutral-900/60 rounded-lg hover:bg-neutral-900 transition-colors">
                    <span className="font-medium text-neutral-200">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-400 font-mono">{item.date}</span>
                      <span className="font-semibold text-indigo-300 font-mono">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end items-center gap-1 text-xs text-neutral-400 font-medium mt-4 group">
                <span>Explore {mod.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
