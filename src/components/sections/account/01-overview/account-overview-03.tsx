import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Award, Heart, Shield } from 'lucide-react';

const mockTimeline = [
  {
    id: 'evt-1',
    time: 'TODAY • 2:45 PM',
    title: 'Order Placed (#DH-9921)',
    description: '3 items: Japanese Denim Jacket, Linen Shirt, Silk Scarf ($340.00)',
    type: 'order',
    icon: ShoppingBag,
    color: 'bg-emerald-500',
    tag: 'Confirmed'
  },
  {
    id: 'evt-2',
    time: 'YESTERDAY • 6:12 PM',
    title: '5-Star Review Published',
    description: 'Reviewed "Italian Leather Tote Bag" — "Exceptional craftsmanship and leather texture."',
    type: 'review',
    icon: Star,
    color: 'bg-amber-500',
    tag: '+100 Pts Earned'
  },
  {
    id: 'evt-3',
    time: 'OCT 2, 2026 • 11:30 AM',
    title: 'Reward Tier Upgrade',
    description: 'Unlocked Platinum VIP status with complimentary express shipping on all orders.',
    type: 'reward',
    icon: Award,
    color: 'bg-purple-500',
    tag: 'VIP Status'
  },
  {
    id: 'evt-4',
    time: 'SEP 29, 2026 • 4:05 PM',
    title: 'Wishlist Item Price Drop',
    description: 'Minimalist Wool Blazer dropped from $220 to $180 (18% discount active).',
    type: 'wishlist',
    icon: Heart,
    color: 'bg-rose-500',
    tag: 'Sale Active'
  },
  {
    id: 'evt-5',
    time: 'SEP 25, 2026 • 9:00 AM',
    title: 'Two-Factor Security Enabled',
    description: 'Account security score increased to 100% with passkey authorization.',
    type: 'security',
    icon: Shield,
    color: 'bg-blue-500',
    tag: 'Secured'
  }
];

export const AccountOverview3: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all' 
    ? mockTimeline 
    : mockTimeline.filter(item => item.type === activeFilter);

  return (
    <div className="w-full bg-[#0a0c10] text-[#e6edf3] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Header section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-neutral-800 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">CHRONOLOGICAL HISTORY</span>
          <h1 className="text-3xl font-bold tracking-tight text-white mt-1">Account Activity Timeline</h1>
          <p className="text-xs text-neutral-400 mt-1">Alex Morgan • Live timeline stream of orders, rewards & updates</p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {['all', 'order', 'review', 'reward', 'wishlist'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors border ${activeFilter === cat ? 'bg-white text-black border-white font-semibold' : 'bg-neutral-900 border-neutral-700 text-neutral-400 hover:border-neutral-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Stream with Progressive SVG Path */}
      <div className="mt-10 max-w-4xl mx-auto relative">
        {/* Animated SVG Connecting Path */}
        <div className="absolute left-6 top-6 bottom-6 w-1 pointer-events-none">
          <svg className="h-full w-full overflow-visible">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#30363d"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#6e7681"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Timeline Event Items */}
        <div className="space-y-8 relative z-10">
          {filteredItems.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.12, duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                {/* Timeline Circle Node */}
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.25 }}
                    className={`w-12 h-12 rounded-full ${evt.color} p-0.5 shadow-lg flex items-center justify-center text-black font-bold border-4 border-[#0a0c10]`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Event Card */}
                <div className="flex-1 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-neutral-400 font-medium">{evt.time}</span>
                    <span className="px-2.5 py-0.5 bg-neutral-800 text-neutral-300 text-[11px] font-mono rounded-full border border-neutral-700 w-max">
                      {evt.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 font-sans leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
