import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Heart, Award, Star, ArrowUpRight } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    tier: 'Platinum VIP Member',
    email: 'alex.morgan@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  stats: [
    { label: 'Total Orders', val: '18 Orders', desc: '1 arriving today (#DH-9941)', icon: ShoppingBag },
    { label: 'Saved Wishlist', val: '14 Items', desc: '4 items on price drop', icon: Heart },
    { label: 'Reward Points', val: '3,450 Pts', desc: '$35 credit balance', icon: Award },
    { label: 'Customer Rating', val: '4.9 Stars', desc: '9 verified reviews', icon: Star },
  ]
};

export const AccountOverview18: React.FC = () => {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="w-full bg-[#0c0a14] text-white min-h-[750px] p-6 sm:p-10 font-sans border border-purple-900/40 rounded-3xl relative overflow-hidden flex flex-col justify-between"
    >
      {/* Ambient Gradient Background Glow Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Dynamic Cursor Spotlight Beam */}
      <div 
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-75"
        style={{ transform: `translate(${spotlight.x - 192}px, ${spotlight.y - 192}px)` }}
      ></div>

      {/* Glass Header */}
      <div className="pb-6 border-b border-white/10 relative z-10 flex justify-between items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-300">LIMITED GLASSMORPHISM VARIANT</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Frosted Glass Spotlight</h1>
        </div>
        <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-purple-200 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Frosted Glass Active
        </span>
      </div>

      {/* Glass Hero Card */}
      <div className="my-8 p-8 bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img 
            src={mockData.user.avatar} 
            alt={mockData.user.name} 
            className="w-20 h-20 rounded-2xl object-cover border-2 border-purple-400/50 shadow-xl"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{mockData.user.name}</h2>
            <p className="text-xs font-mono text-neutral-300 mt-0.5">{mockData.user.email}</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-500/30 text-purple-200 text-xs font-mono rounded-full border border-purple-400/30">
                {mockData.user.tier}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl text-right min-w-[180px]">
          <span className="text-[10px] font-mono text-neutral-400 uppercase">REWARD BALANCE</span>
          <div className="text-2xl font-bold text-amber-300 font-mono mt-1">3,450 PTS</div>
          <span className="text-xs text-emerald-400 font-mono">+$35.00 Voucher</span>
        </div>
      </div>

      {/* 4 Frosted Glass Stat Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {mockData.stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-purple-400/50 transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="p-2.5 bg-purple-500/20 rounded-xl text-purple-300">
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs text-neutral-300 font-mono uppercase">{s.label}</div>
              <div className="text-xl font-bold text-white mt-1 font-mono">{s.val}</div>
              <div className="text-[11px] text-purple-300 mt-1 font-mono">{s.desc}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
