import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Crown, Sparkles, Shield, ShoppingBag, Heart, MapPin, Award, ArrowUpRight } from 'lucide-react';

const cardDepth = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeInOut' }
  })
};

export function AccountOverview8() {
  return (
    <div className="w-full bg-[#0a0a0c] text-slate-100 p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Luxury Gold/Dark Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-amber-500/20 pb-8">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Alex Morgan"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-500/50 shadow-2xl"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-black p-1 rounded-full">
                <Crown className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                LUXURY CONCIERGE ACCOUNT
              </span>
              <h1 className="text-3xl font-serif text-white tracking-tight">Alex Morgan</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
              GOLD MEMBER • 1,250 PTS
            </span>
          </div>
        </div>

        {/* Layered Depth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'PURCHASE ARCHIVE', val: '12 ORDERS', desc: 'Active dispatch: #DH-28491', icon: ShoppingBag },
            { title: 'CURATED WISHLIST', val: '8 ITEMS', desc: '2 items low in boutique stock', icon: Heart },
            { title: 'SAVED RESIDENCES', val: '3 LOCATIONS', desc: 'Primary: New York Residence', icon: MapPin },
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardDepth}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-b from-[#141418] to-[#0d0d10] p-6 rounded-3xl border border-amber-500/15 shadow-2xl hover:border-amber-500/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono tracking-wider text-amber-400/80">{card.title}</span>
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-white tracking-wide">{card.val}</h3>
                <p className="text-xs text-slate-400 mt-1">{card.desc}</p>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400">
                  <span>Access Suite</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOverview8;
