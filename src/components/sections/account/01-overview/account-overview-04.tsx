import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    tier: 'Platinum VIP',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    email: 'alex.morgan@example.com',
  },
  order: {
    id: '#DH-8849',
    title: 'Minimalist Cashmere Sweater',
    status: 'Out for Delivery',
    eta: 'Today by 5:00 PM',
    price: '$210.00',
  },
  points: 3450,
  wishlistCount: 14,
  reviewsCount: 8,
};

export const AccountOverview4: React.FC = () => {
  return (
    <div className="w-full bg-[#09090b] text-[#fafafa] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Title Bar */}
      <div className="flex justify-between items-center pb-6 mb-8 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">BENTO COMPOSITION</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Asymmetric Account Bento</h1>
        </div>
        <div className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> VIP Status Active
        </div>
      </div>

      {/* Bento Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Bento Tile 1: Profile Hero (Span 8) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-8 p-7 bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/40 border border-neutral-800 rounded-3xl relative overflow-hidden group shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <img 
                src={mockData.user.avatar} 
                alt={mockData.user.name} 
                className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400/50 shadow-md"
              />
              <div>
                <h2 className="text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">{mockData.user.name}</h2>
                <p className="text-xs text-neutral-400 mt-1 font-mono">{mockData.user.email}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-amber-400/20 text-amber-300 text-xs font-mono font-medium rounded-lg border border-amber-400/30">
                    {mockData.user.tier}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">Member ID: #99401</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950/80 p-4 rounded-2xl border border-neutral-800 text-right min-w-[160px]">
              <div className="text-xs text-neutral-400 font-mono uppercase">Reward Balance</div>
              <div className="text-3xl font-serif text-amber-300 font-bold mt-1">{mockData.points}</div>
              <div className="text-[11px] text-emerald-400 mt-1 font-mono">+$35.00 Credit</div>
            </div>
          </div>
        </motion.div>

        {/* Bento Tile 2: Quick Action Dial (Span 4) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-4 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-neutral-400 uppercase">Express Actions</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="space-y-2.5 my-4">
            <button className="w-full text-left p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-semibold text-neutral-200 hover:border-amber-400/50 flex justify-between items-center group">
              <span>Track Active Shipment</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="w-full text-left p-3 bg-neutral-950 border border-neutral-800 rounded-xl text-xs font-semibold text-neutral-200 hover:border-amber-400/50 flex justify-between items-center group">
              <span>Manage Saved Cards</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          <div className="text-[11px] text-neutral-400 font-mono">2FA Security Status: Active</div>
        </motion.div>

        {/* Bento Tile 3: Recent Order Card (Span 6) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-6 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono text-neutral-400 uppercase flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-400" /> Recent Order
            </span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {mockData.order.status}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white">{mockData.order.title}</h3>
          <p className="text-xs text-neutral-400 mt-1 font-mono">{mockData.order.id} • {mockData.order.price}</p>
          
          <div className="mt-4 p-3 bg-neutral-950 rounded-xl border border-neutral-800 flex justify-between items-center text-xs">
            <span className="text-neutral-400">ETA:</span>
            <span className="text-neutral-200 font-mono font-medium">{mockData.order.eta}</span>
          </div>
        </motion.div>

        {/* Bento Tile 4: Saved Wishlist Tile (Span 3) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-3 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <Heart className="w-5 h-5 text-rose-400" />
            <span className="text-xs font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">14 Saved</span>
          </div>
          <div className="my-4">
            <div className="text-3xl font-bold text-white">{mockData.wishlistCount}</div>
            <div className="text-xs text-neutral-400 mt-1">Saved items on radar</div>
          </div>
          <button className="text-xs text-rose-300 hover:underline font-mono text-left">View Wishlist →</button>
        </motion.div>

        {/* Bento Tile 5: Customer Reviews (Span 3) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-3 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-mono text-amber-400">4.9 ★ Avg</span>
          </div>
          <div className="my-4">
            <div className="text-3xl font-bold text-white">{mockData.reviewsCount}</div>
            <div className="text-xs text-neutral-400 mt-1">Published reviews</div>
          </div>
          <button className="text-xs text-amber-300 hover:underline font-mono text-left">My Reviews →</button>
        </motion.div>
      </div>
    </div>
  );
};
