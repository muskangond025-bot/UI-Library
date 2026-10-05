import React from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Shield, Sparkles, MapPin, ShoppingBag, Heart, ArrowUpRight, Crown, CreditCard, ChevronRight } from 'lucide-react';

const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

const layerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeInOut' }
  })
};

export function AccountOverview2() {
  return (
    <div className="w-full bg-stone-950 text-stone-100 p-6 md:p-12 min-h-[700px] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Layer 1: Premium Profile Hero Card */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-3xl bg-stone-900 border border-amber-500/20 shadow-2xl p-8 md:p-12"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#amber-500_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                  alt="Alex Morgan"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-amber-500/30 shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 bg-amber-500 text-stone-950 p-2 rounded-full shadow-lg">
                  <Crown className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> VIP Platinum Member
                  </span>
                  <span className="px-3 py-1 bg-stone-800 text-stone-300 rounded-full text-xs font-medium border border-stone-700">
                    ID: #MK-90241
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-medium text-white tracking-tight">
                  Alex Morgan
                </h1>
                <p className="text-stone-400 text-sm max-w-md">
                  alex.morgan@example.com • Preferred Shipping: Express Air • Tier Active until Dec 2027
                </p>
              </div>
            </div>

            {/* Quick Hero Shortcuts */}
            <div className="flex flex-wrap lg:flex-col gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2">
                <span>Manage VIP Perks</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="flex-1 sm:flex-none px-6 py-3.5 bg-stone-800/80 hover:bg-stone-800 text-stone-200 rounded-2xl text-sm font-medium border border-stone-700 transition-colors flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-stone-400" />
                <span>Security & Login</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Layer 2: Hero Layered Shortcuts & Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Active Orders',
              value: '12 Orders Placed',
              desc: 'Latest: #DH-28491 (In Transit)',
              icon: ShoppingBag,
              highlight: '2 Items Arriving Tomorrow',
              color: 'border-amber-500/20'
            },
            {
              title: 'Wishlist & Collections',
              value: '8 Saved Items',
              desc: '2 price drops detected',
              icon: Heart,
              highlight: 'Designer Collection updated',
              color: 'border-stone-800'
            },
            {
              title: 'Saved Delivery Hubs',
              value: '3 Addresses',
              desc: 'Primary: Home (New York)',
              icon: MapPin,
              highlight: 'Verified Default Address',
              color: 'border-stone-800'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                custom={idx + 1}
                variants={layerVariants}
                initial="hidden"
                animate="visible"
                className={`bg-stone-900/80 rounded-3xl p-6 border ${item.color} hover:border-amber-500/40 transition-all group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-stone-800 text-amber-400 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">{item.title}</h3>
                  <p className="text-xl font-bold text-white mt-1">{item.value}</p>
                  <p className="text-xs text-stone-400 mt-1">{item.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-800/80 text-[11px] font-medium text-amber-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {item.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview2;
