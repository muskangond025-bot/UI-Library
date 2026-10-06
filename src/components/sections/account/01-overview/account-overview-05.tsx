import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    location: 'Stockholm, Sweden',
    memberId: 'SE-89104',
    tier: 'Platinum Member',
  },
  stats: [
    { label: 'Active Orders', value: '03', detail: '1 in transit' },
    { label: 'Saved Wishlist', value: '18', detail: '2 price alerts' },
    { label: 'Reward Points', value: '3,200', detail: '$30 credit' },
    { label: 'Verified Reviews', value: '07', detail: '5.0 average' },
  ],
  recentActivity: [
    { title: 'Delivered: Wool Trench Coat', date: 'Yesterday • 14:20' },
    { title: 'Added: Minimalist Ceramic Lamp to Wishlist', date: 'Oct 3 • 18:45' },
    { title: 'Earned: 500 Loyalty Bonus Points', date: 'Oct 1 • 09:15' },
  ]
};

export const AccountOverview5: React.FC = () => {
  return (
    <div className="w-full bg-[#fcfbf9] text-[#1a1a1a] min-h-[750px] p-6 sm:p-12 font-sans border border-neutral-300 rounded-3xl relative">
      {/* Dynamic Animated Line Border Surround */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl">
        <motion.rect
          x="1"
          y="1"
          width="99.8%"
          height="99.8%"
          rx="24"
          fill="none"
          stroke="#d4d0c7"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {/* Top Header */}
      <div className="flex justify-between items-center pb-8 border-b border-neutral-200">
        <div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">MINIMALIST PROFILE</span>
          <h1 className="text-3xl font-serif font-normal text-neutral-900 mt-1">{mockData.user.name}</h1>
        </div>
        <span className="px-3.5 py-1 bg-neutral-900 text-white text-xs font-mono rounded-full uppercase tracking-wider">
          {mockData.user.tier}
        </span>
      </div>

      {/* Main Profile Info Section */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-neutral-200">
        <div className="md:col-span-6 space-y-3">
          <div className="text-xs text-neutral-500 font-mono uppercase tracking-widest">Account Identification</div>
          <div className="text-2xl font-serif font-light">{mockData.user.email}</div>
          <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-neutral-700" /> {mockData.user.location}</span>
            <span>ID: {mockData.user.memberId}</span>
          </div>
        </div>

        <div className="md:col-span-6 grid grid-cols-2 gap-4">
          {mockData.stats.map((s, idx) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              className="p-4 bg-white border border-neutral-200 rounded-xl relative overflow-hidden group hover:border-neutral-900 transition-colors"
            >
              <div className="text-2xl font-serif text-neutral-900 group-hover:translate-x-1 transition-transform">{s.value}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1">{s.label}</div>
              <div className="text-[10px] text-neutral-500 mt-0.5">{s.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Minimal Activity Rows */}
      <div className="pt-8">
        <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">Recent Activity Records</h3>
        <div className="space-y-3">
          {mockData.recentActivity.map((act, idx) => (
            <div key={idx} className="p-4 bg-white border border-neutral-200 rounded-xl flex justify-between items-center text-xs">
              <span className="font-mono text-neutral-800">{act.title}</span>
              <span className="text-neutral-400 font-mono">{act.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
