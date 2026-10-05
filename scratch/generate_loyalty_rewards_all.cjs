const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../src/components/sections/account/08-loyalty-rewards');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 01 — REWARD DASHBOARD
const code01 = `import React from 'react';
import { motion } from 'framer-motion';
import { Award, Gift, Sparkles, ChevronRight, Zap } from 'lucide-react';

export function AccountLoyaltyRewards1() {
  const availableRewards = [
    { title: '$10 Off Storewide', pts: '1,000 Pts', code: 'REWARD10', desc: 'Valid on orders over $50' },
    { title: 'Free Express Delivery', pts: '1,500 Pts', code: 'EXPRESSVIP', desc: 'No minimum order required' },
    { title: 'Exclusive VIP Tote Bag', pts: '2,500 Pts', code: 'VIPIOTE', desc: 'Limited edition canvas bag' },
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" /> VIP Loyalty Club
            </div>
            <h2 className="text-3xl font-black text-white">Rewards Dashboard</h2>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
            <Award className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-xs text-slate-400">Current Tier</p>
              <p className="text-sm font-bold text-amber-400">Silver Member</p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Points Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Balance</span>
                <Zap className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
              <div>
                <p className="text-5xl font-black text-white tracking-tight">2,450</p>
                <p className="text-sm text-amber-200/80 font-medium mt-1">Available Points</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-amber-500/20 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Next Goal: Gold</span>
                <span className="text-amber-400">550 pts needed</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '81%' }} />
              </div>
            </div>
          </motion.div>

          {/* Available Rewards list */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4"
          >
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Gift className="w-5 h-5 text-indigo-400" /> Ready to Redeem
              </h3>
              <span className="text-xs text-slate-400 font-medium">3 Rewards Unlocked</span>
            </div>

            <div className="space-y-3">
              {availableRewards.map((reward, i) => (
                <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-950 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">{reward.title}</h4>
                      <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold rounded-md">{reward.pts}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{reward.desc}</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1">
                    Redeem <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards1;
`;

// 02 — POINTS PROGRESS
const code02 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards2() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-3">
          <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
            Loyalty Tracker
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight">Points Milestone Centerpiece</h2>
        </div>

        {/* Hero Visual Points Display */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Your Balance</p>
              <h1 className="text-6xl sm:text-7xl font-black text-emerald-400 tracking-tight">2,450</h1>
              <p className="text-sm text-slate-400 font-medium">TOTAL EARNED POINTS</p>
            </div>

            {/* SVG Curvilinear Progress Path */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="relative h-6 bg-slate-900 rounded-full p-1 border border-slate-800">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '81.6%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full relative"
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-emerald-500/50" />
                </motion.div>
              </div>

              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>0 PTS</span>
                <span className="text-emerald-400">2,450 CURRENT</span>
                <span>3,000 NEXT REWARD</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">$25 Gift Voucher Unlock</h4>
                  <p className="text-xs text-slate-400">Only 550 points away from next reward</p>
                </div>
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2">
                Earn More Points <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards2;
`;

// 03 — TIER JOURNEY
const code03 = `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Crown, Star, Sparkles } from 'lucide-react';

export function AccountLoyaltyRewards3() {
  const tiers = [
    { name: 'Bronze', pts: '0 - 999 Pts', icon: Shield, current: false, status: 'Completed' },
    { name: 'Silver', pts: '1,000 - 2,999 Pts', icon: Star, current: true, status: 'Current Tier' },
    { name: 'Gold', pts: '3,000 - 5,999 Pts', icon: Crown, current: false, status: 'Locked' },
    { name: 'Platinum', pts: '6,000+ Pts', icon: Sparkles, current: false, status: 'Locked' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Membership Progression</span>
          <h2 className="text-3xl font-extrabold">Your VIP Tier Journey</h2>
        </div>

        {/* Tier Roadmap Progress */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={'p-6 rounded-2xl border flex flex-col justify-between space-y-6 relative transition-all ' + (tier.current ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10' : 'bg-slate-900/40 border-slate-800 opacity-80')}
              >
                {tier.current && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-full">
                    ACTIVE TIER
                  </span>
                )}

                <div className="space-y-4">
                  <div className={'w-12 h-12 rounded-xl flex items-center justify-center ' + (tier.current ? 'bg-amber-400/20 text-amber-400' : 'bg-slate-800 text-slate-400')}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{tier.pts}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className={'w-4 h-4 ' + (tier.current || tier.status === 'Completed' ? 'text-amber-400' : 'text-slate-600')} />
                  <span className="text-xs font-bold text-slate-300">{tier.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards3;
`;

// 04 — REWARD CARD COLLECTION
const code04 = `import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy } from 'lucide-react';

export function AccountLoyaltyRewards4() {
  const cards = [
    { title: '$15 Off Next Order', cost: '1,500 PTS', valid: 'Expires in 30 days', code: 'PERK15OFF' },
    { title: 'Free International Express Shipping', cost: '2,000 PTS', valid: 'Single use voucher', code: 'SHIPFREEVIP' },
    { title: '25% Off Apparel Collection', cost: '2,500 PTS', valid: 'Exclusive Silver perk', code: 'APPAREL25' },
    { title: 'Complimentary Gift Card ($50)', cost: '4,000 PTS', valid: 'Requires Gold Tier', code: 'GIFTCARD50' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 block mb-1">Voucher Catalog</span>
            <h2 className="text-3xl font-extrabold text-white">Reward Card Collection</h2>
          </div>
          <span className="text-xs text-slate-400 font-semibold bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
            2,450 Points Available
          </span>
        </div>

        {/* Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Ticket className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 bg-indigo-600 text-white font-black text-xs rounded-full">
                  {card.cost}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{card.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{card.valid}</p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex justify-between items-center">
                <code className="text-xs font-mono font-bold text-slate-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  {card.code}
                </code>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5" /> Claim Reward
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards4;
`;

// 05 — EDITORIAL LOYALTY
const code05 = `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountLoyaltyRewards5() {
  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Large Typography Clip Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-10 space-y-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">
            EST. 2026 PRIVILEGE CLUB
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight uppercase leading-none">
            YOUR <br /><span className="italic font-normal text-amber-400">REWARDS & PRIVILEGES</span>
          </h1>
        </motion.div>

        {/* Editorial Split Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">CURRENT BALANCE</span>
            <p className="text-6xl font-light text-white font-serif">2,450 <span className="text-lg font-sans text-stone-400 uppercase tracking-widest">PTS</span></p>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              As a Silver Tier patron, enjoy complimentary global shipping, priority customer concierge, and curated invitations to seasonal sample sales.
            </p>
          </div>

          <div className="space-y-6 divide-y divide-stone-800">
            <div className="pb-4 space-y-2">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">SILVER ADVANTAGE</span>
              <h4 className="text-lg font-serif font-normal text-stone-200">1.5x Points Multiplier on New Arrivals</h4>
            </div>
            <div className="pt-4 space-y-2">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">NEXT HORIZON</span>
              <h4 className="text-lg font-serif font-normal text-stone-200">Gold Tier Access at 3,000 PTS</h4>
            </div>
            <button className="pt-4 text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 hover:gap-3 transition-all">
              DISCOVER ALL TIER PRIVILEGES <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards5;
`;

// 06 — GLASS REWARDS
const code06 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Gift, ChevronRight } from 'lucide-react';

export function AccountLoyaltyRewards6() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4 sm:px-6 font-sans relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-indigo-300 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest inline-block">
            Glass Pass
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frosted Glass Rewards</h2>
        </div>

        {/* Frosted Glass Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Points</p>
              <h3 className="text-4xl font-black text-white mt-1">2,450</h3>
              <p className="text-xs text-indigo-300 mt-2 font-medium">Silver Membership Status</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Next Perk</p>
              <h3 className="text-2xl font-bold text-white mt-1">Free Shipping</h3>
              <p className="text-xs text-slate-400 mt-2">Unlock at 3,000 Points</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Claimable</p>
              <h3 className="text-2xl font-bold text-white mt-1">2 Rewards</h3>
              <button className="mt-4 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1">
                View Catalog <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards6;
`;

// 07 — REWARD PROGRESS RING
const code07 = `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountLoyaltyRewards7() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900/60 p-8 sm:p-12 rounded-3xl border border-slate-800">
        {/* Radial SVG Ring */}
        <div className="relative w-56 h-56 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
            <motion.circle 
              cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" className="text-amber-400" fill="transparent"
              strokeDasharray="263.89"
              initial={{ strokeDashoffset: 263.89 }}
              animate={{ strokeDashoffset: 47.5 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center space-y-1">
            <span className="text-3xl font-black text-white">82%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">TO GOLD TIER</span>
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-400/20">
              Tier Progress Ring
            </span>
            <h2 className="text-3xl font-extrabold text-white">2,450 / 3,000 Points</h2>
            <p className="text-slate-400 text-sm max-w-md">
              You are just 550 points away from unlocking Gold Status with exclusive benefits and early drop access.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
              Claim Available Rewards
            </button>
            <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5">
              How To Earn <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards7;
`;

// 08 — BENEFITS SHOWCASE
const code08 = `import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Gift, Headphones, ShieldCheck, Heart } from 'lucide-react';

export function AccountLoyaltyRewards8() {
  const benefits = [
    { title: 'Free Express Shipping', desc: 'Complimentary shipping on all orders over $50', icon: Truck, active: true },
    { title: 'Early Sale Access', desc: 'Shop VIP private sales 24 hours before launch', icon: Zap, active: true },
    { title: '$50 Birthday Reward', desc: 'Exclusive gift code credited on your birthday', icon: Gift, active: true },
    { title: 'Dedicated Concierge', desc: '24/7 priority customer support channel', icon: Headphones, active: false },
    { title: 'Extended 60-Day Returns', desc: 'Hassle-free return policy extension', icon: ShieldCheck, active: false },
    { title: 'Anniversary Gift', desc: 'Special loyalty gift every membership year', icon: Heart, active: false },
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Membership Privileges</span>
          <h2 className="text-3xl font-extrabold text-white">Silver Tier Benefits Showcase</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={'p-6 rounded-2xl border space-y-4 flex flex-col justify-between ' + (b.active ? 'bg-slate-950 border-slate-800' : 'bg-slate-950/40 border-slate-900 opacity-50')}
              >
                <div className="space-y-3">
                  <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + (b.active ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-600')}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base">{b.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>

                <span className={'text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md w-max ' + (b.active ? 'bg-indigo-500/20 text-indigo-300' : 'bg-slate-800 text-slate-500')}>
                  {b.active ? 'UNLOCKED' : 'GOLD REQUIRED'}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards8;
`;

// 09 — POINTS HISTORY
const code09 = `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export function AccountLoyaltyRewards9() {
  const history = [
    { type: 'Purchase #4920', pts: '+180 PTS', date: 'Sept 20, 2026', positive: true },
    { type: 'Product Review Bonus', pts: '+50 PTS', date: 'Sept 14, 2026', positive: true },
    { type: 'Redeemed $10 Voucher', pts: '-500 PTS', date: 'Sept 02, 2026', positive: false },
    { type: 'Birthday Bonus', pts: '+200 PTS', date: 'Aug 25, 2026', positive: true }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">Activity Log</span>
            <h2 className="text-3xl font-extrabold">Points Earning History</h2>
          </div>
          <Clock className="w-6 h-6 text-slate-500" />
        </div>

        <div className="space-y-4">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex justify-between items-center p-5 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={'w-10 h-10 rounded-xl flex items-center justify-center ' + (item.positive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400')}>
                  {item.positive ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.type}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.date}</p>
                </div>
              </div>

              <span className={'font-mono font-bold text-sm ' + (item.positive ? 'text-emerald-400' : 'text-rose-400')}>
                {item.pts}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards9;
`;

// 10 — INFINITE REWARD MENU
const code10 = `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards10() {
  const menuItems = [
    { title: '$10 Off Storewide', pts: '1,000 PTS', bg: 'from-purple-900/40 to-slate-900' },
    { title: 'Free Express Shipping', pts: '1,500 PTS', bg: 'from-blue-900/40 to-slate-900' },
    { title: 'VIP Exclusive Tote Bag', pts: '2,500 PTS', bg: 'from-amber-900/40 to-slate-900' },
    { title: '25% Off Footwear', pts: '3,000 PTS', bg: 'from-emerald-900/40 to-slate-900' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Interactive Navigation</span>
          <h2 className="text-3xl font-extrabold text-white">Infinite Reward Menu</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={'p-6 rounded-2xl bg-gradient-to-b ' + item.bg + ' border border-slate-800 space-y-6 flex flex-col justify-between cursor-pointer'}
            >
              <div className="flex justify-between items-center">
                <Tag className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-bold text-white bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  {item.pts}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-2">Instant digital redemption</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-400">
                <span>REDEEM PERK</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards10;
`;

// 11 — 3D REWARD CARD
const code11 = `import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function AccountLoyaltyRewards11() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Digital Pass</span>
          <h2 className="text-3xl font-extrabold">3D VIP Membership Pass</h2>
        </div>

        {/* 3D Perspective Card */}
        <motion.div 
          whileHover={{ rotateY: 12, rotateX: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full max-w-md mx-auto aspect-[1.58/1] bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 shadow-2xl text-slate-950 flex flex-col justify-between text-left relative overflow-hidden transform-gpu"
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-30 pointer-events-none" />

          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-900/70">SILVER TIER</p>
              <h3 className="text-2xl font-black tracking-tight text-slate-950 mt-0.5">VIP LOYALTY</h3>
            </div>
            <Crown className="w-8 h-8 text-slate-950" />
          </div>

          <div className="relative z-10 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900/80">Available Balance</p>
            <p className="text-4xl font-black text-slate-950">2,450 PTS</p>
          </div>

          <div className="flex justify-between items-end relative z-10 text-xs font-mono font-bold text-slate-900">
            <span>ID: #8920-VIP</span>
            <span>EXP: 12/28</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards11;
`;

// 12 — REWARD UNLOCK EXPERIENCE
const code12 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, CheckCircle2 } from 'lucide-react';

export function AccountLoyaltyRewards12() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-md mx-auto text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Interactive Unlock</span>
          <h2 className="text-3xl font-extrabold">Reward Unlock Experience</h2>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            {unlocked ? <Unlock className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">$20 Off Store Voucher</h3>
            <p className="text-xs text-slate-400">Cost: 2,000 Points (You have 2,450 PTS)</p>
          </div>

          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.button 
                key="unlockBtn"
                onClick={() => setUnlocked(true)}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Click To Unlock Reward
              </motion.button>
            ) : (
              <motion.div 
                key="claimed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> VOUCHER UNLOCKED: #UNLOCK20
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards12;
`;

// 13 — NEXT TIER EXPERIENCE
const code13 = `import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles } from 'lucide-react';

export function AccountLoyaltyRewards13() {
  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 p-8 sm:p-12 rounded-3xl border border-amber-500/30 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Target Horizon</span>
              <h2 className="text-3xl font-extrabold text-white">350 Points to Gold Status</h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Crown className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold text-slate-300">
              <span>Silver (2,450 PTS)</span>
              <span className="text-amber-400">Gold Target (2,800 PTS)</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '87.5%' }}
                transition={{ duration: 1 }}
                className="h-full bg-amber-400 rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400 mb-2" />
              <h4 className="font-bold text-white text-sm">2x Points Multiplier</h4>
              <p className="text-xs text-slate-400 mt-1">Earn double points on all future purchases.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <Sparkles className="w-4 h-4 text-amber-400 mb-2" />
              <h4 className="font-bold text-white text-sm">Priority Concierge</h4>
              <p className="text-xs text-slate-400 mt-1">Instant priority customer support access.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards13;
`;

// 14 — REWARD TIMELINE
const code14 = `import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

export function AccountLoyaltyRewards14() {
  const steps = [
    { title: 'Earned 2,000 Points', desc: 'Completed online shopping milestones', status: 'Completed' },
    { title: 'Unlocked Silver Tier', desc: 'Achieved tier status privileges', status: 'Completed' },
    { title: 'Redeem $25 Voucher', desc: 'Ready to use on next order', status: 'Active' },
    { title: 'Gold Status Unlock', desc: 'Target at 3,000 Points', status: 'Upcoming' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Progression Path</span>
          <h2 className="text-3xl font-extrabold text-white">Reward Lifecycle Timeline</h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative space-y-1"
            >
              <div className={'absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full flex items-center justify-center ' + (step.status === 'Completed' ? 'bg-indigo-500 text-white' : step.status === 'Active' ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-600')}>
                {step.status === 'Completed' ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
              </div>

              <h4 className="font-bold text-white text-lg">{step.title}</h4>
              <p className="text-xs text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards14;
`;

// 15 — MINIMAL MONOCHROME REWARDS
const code15 = `import React from 'react';

export function AccountLoyaltyRewards15() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">MEMBERSHIP RECORD</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">LOYALTY PRIVILEGES</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">2,450 PTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400">ACTIVE STATUS</h3>
            <p className="text-5xl font-light text-gray-900">SILVER TIER</p>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              Minimalist loyalty tracking centered around pure typography, restrained layout metrics, and subtle progress rules.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-gray-100">
            <div className="pb-4 flex justify-between items-center font-mono text-xs">
              <span>01 // FREE EXPRESS DELIVERY</span>
              <span className="font-bold">UNLOCKED</span>
            </div>
            <div className="pt-4 flex justify-between items-center font-mono text-xs text-gray-400">
              <span>02 // GOLD CONCIERGE ACCESS</span>
              <span>3,000 PTS NEEDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards15;
`;

// 16 — FLOATING REWARD MODULES
const code16 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift } from 'lucide-react';

export function AccountLoyaltyRewards16() {
  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Spatial Depth</span>
          <h2 className="text-3xl font-extrabold">Floating Reward Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 space-y-4"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h3 className="text-4xl font-black text-white">2,450</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Total Points Floating</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 space-y-4"
          >
            <Gift className="w-8 h-8 text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">3 Available</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Unclaimed Vouchers</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 shadow-xl shadow-purple-500/10 space-y-4"
          >
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">SILVER STATUS</span>
            <h3 className="text-2xl font-bold text-white">Tier Perks</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Active Benefits</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards16;
`;

// 17 — REWARD WALLET-STYLE
const code17 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';

export function AccountLoyaltyRewards17() {
  const [tab, setTab] = useState('Available');

  const rewards = [
    { title: '$10 Off Storewide', code: 'WALLET10', status: 'Available', exp: 'Valid thru Oct 2026' },
    { title: 'Free Express Shipping', code: 'FREESHIP', status: 'Available', exp: 'Valid thru Nov 2026' },
    { title: '$5 Birthday Voucher', code: 'BDAY5', status: 'Used', exp: 'Redeemed Aug 2026' },
  ];

  const filtered = rewards.filter(r => r.status === tab);

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Pass Manager</span>
            <h2 className="text-3xl font-extrabold text-white">Reward Wallet Passes</h2>
          </div>

          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            {['Available', 'Used'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={'px-4 py-2 rounded-lg text-xs font-bold transition-all ' + (tab === t ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white')}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <Ticket className="w-8 h-8 text-emerald-400" />
                <div>
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.exp}</p>
                </div>
              </div>
              <code className="text-xs font-mono font-bold text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                {item.code}
              </code>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards17;
`;

// 18 — MAGAZINE LOYALTY
const code18 = `import React from 'react';

export function AccountLoyaltyRewards18() {
  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-amber-400 font-bold">L'ÉLITE MEMBERSHIP</span>
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">THE PRIVILEGE JOURNAL</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">BALANCE</span>
            <p className="text-5xl font-serif font-light text-white">2,450 <span className="text-xs font-sans text-neutral-400">PTS</span></p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Accumulated through curated acquisitions and editorial engagement.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">CURRENT TIER</span>
            <p className="text-3xl font-serif font-light text-white">SILVER PATRON</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Enjoy complimentary worldwide express delivery & seasonal preview access.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">NEXT REWARD</span>
            <p className="text-2xl font-serif font-light text-white">$100 VIP GIFT</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Unlocks automatically upon reaching Gold status milestone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards18;
`;

// 19 — REWARD + EARNING GUIDE
const code19 = `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Share2 } from 'lucide-react';

export function AccountLoyaltyRewards19() {
  const steps = [
    { title: 'Shop & Earn', desc: '1 Point for every $1 spent online', icon: ShoppingBag },
    { title: 'Write Reviews', desc: '50 Points for verified product reviews', icon: Star },
    { title: 'Refer Friends', desc: '200 Points when a friend makes their first order', icon: Share2 }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Earning Matrix</span>
          <h2 className="text-3xl font-extrabold">How To Earn & Redeem Points</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-center space-y-4"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">{s.title}</h4>
                <p className="text-xs text-slate-400">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards19;
`;

// 20 — AWARD-STYLE LOYALTY EXPERIENCE
const code20 = `import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Award, ArrowRight } from 'lucide-react';

export function AccountLoyaltyRewards20() {
  return (
    <section className="w-full min-h-[650px] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Award Hero Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Crown className="w-4 h-4" /> ULTIMATE VIP MASTER DASHBOARD
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">Award-Style Loyalty</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Experience luxury membership privileges with real-time points tracking, exclusive reward tiers, and instant claim vouchers.
          </p>
        </div>

        {/* Master Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">STATUS</span>
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Current Level</p>
              <h3 className="text-3xl font-black text-white mt-1">Silver VIP</h3>
            </div>
            <div className="pt-4 border-t border-slate-900 text-xs text-slate-400">
              Top 15% Member Rank
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">BALANCE</span>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Active Points</p>
              <h3 className="text-5xl font-black text-amber-400 mt-1">2,450</h3>
            </div>
            <div className="pt-4 border-t border-slate-900 text-xs text-slate-400">
              550 PTS to Gold Tier
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-950 border border-amber-500/40 shadow-2xl shadow-amber-500/10 space-y-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">PERKS</span>
              <Crown className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-semibold">Unlocked Rewards</p>
              <h3 className="text-3xl font-black text-white mt-1">3 Unclaimed</h3>
            </div>
            <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5">
              Claim Now <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards20;
`;

const codes = [
  code01, code02, code03, code04, code05,
  code06, code07, code08, code09, code10,
  code11, code12, code13, code14, code15,
  code16, code17, code18, code19, code20
];

const jsons = [
  { heading: "Reward Dashboard — Sequential Points & Tier Overview", description: "Multi-card loyalty dashboard layout presenting active points, current tier status, and unlocked rewards with sequential motion reveal." },
  { heading: "Points Progress — Visual Centerpiece Path", description: "Hero points tracker with an animated curvilinear progress bar path, milestone markers, and next tier goal callout." },
  { heading: "Tier Journey — Interactive Loyalty Level Roadmap", description: "Interactive membership tier progression roadmap highlighting completed, active, and upcoming VIP tiers." },
  { heading: "Reward Card Collection — Staggered Premium Rewards", description: "Grid of voucher cards displaying points prices, coupon codes, and staggered motion entrance." },
  { heading: "Editorial Loyalty — High-Fashion Typography & Perks", description: "Editorial magazine style loyalty interface featuring large typography clip reveals, serif fonts, and split column balance display." },
  { heading: "Glass Rewards — Frosted Prism Cards", description: "Multi-layered frosted glassmorphism loyalty cards with subtle glass depth and glowing status badges." },
  { heading: "Reward Progress Ring — Radial Tier Goal Visualizer", description: "Hero circular SVG progress ring drawing progress toward Gold status with animated percentage readout." },
  { heading: "Benefits Showcase — Interactive Tier Perks Grid", description: "Interactive grid of unlocked and locked membership perks including express shipping, birthday rewards, and sale access." },
  { heading: "Points History — Activity & Earning Timeline", description: "Timeline activity log detailing points earned from purchases, reviews, and bonuses with status icons." },
  { heading: "Infinite Reward Menu — Interactive Carousel Navigation", description: "Interactive reward card ribbon adapted from infinite menu concepts for quick reward catalog browsing." },
  { heading: "3D Reward Card — Interactive Tilt Membership Pass", description: "Interactive 3D VIP membership card with real-time tilt perspective, holographic gradient, and points balance." },
  { heading: "Reward Unlock Experience — Interactive State Transition", description: "Interactive card component demonstrating real-time transition from locked reward state to unlocked voucher state." },
  { heading: "Next Tier Experience — Goal-Oriented Progression", description: "Goal-focused progress banner detailing remaining points needed to unlock Gold status perks." },
  { heading: "Reward Timeline — Earned, Unlocked & Redeemed Path", description: "Visual 3-stage timeline path mapping points acquisition, tier unlocking, and reward redemption." },
  { heading: "Minimal Monochrome Rewards — Precision Editorial Layout", description: "Typography-first minimalist loyalty interface featuring high-contrast layout, whitespace, and clean rule dividers." },
  { heading: "Floating Reward Modules — Depth & Spatial Cards", description: "Asymmetric spatial modules floating with smooth Y-axis motion keyframes displaying points, tier, and perks." },
  { heading: "Reward Wallet-Style — Redeemable Pass Manager", description: "Digital voucher wallet with tab filtering for available, used, and expired reward passes." },
  { heading: "Magazine Loyalty — High-Fashion Grid Editorial", description: "Multi-column magazine spread layout displaying tier privileges, points metrics, and patron rewards." },
  { heading: "Reward & Earning Guide — Interactive Step-by-Step Matrix", description: "Educational matrix guiding users on how to earn points through purchases, reviews, and referrals." },
  { heading: "Award-Style Loyalty Experience — Ultra VIP Master Dashboard", description: "Luxurious master VIP dashboard combining gold crest styling, active balance display, and instant reward claim buttons." }
];

for (let i = 0; i < 20; i++) {
  const numStr = String(i + 1).padStart(2, '0');
  const tsxPath = path.join(targetDir, `account-loyalty-rewards-${numStr}.tsx`);
  const jsonPath = path.join(targetDir, `account-loyalty-rewards-${numStr}.json`);

  fs.writeFileSync(tsxPath, codes[i].trim() + '\n', 'utf-8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsons[i], null, 2) + '\n', 'utf-8');
  console.log(`Generated account-loyalty-rewards-${numStr}`);
}

console.log('All 20 Loyalty & Rewards variants generated successfully!');
