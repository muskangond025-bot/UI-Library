import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, CheckCircle2, ChevronRight, Shield } from 'lucide-react';

const mockData = {
  user: {
    name: 'ALEX MORGAN',
    subtitle: 'VIP PLATINUM MEMBER',
    email: 'alex.morgan@example.com',
    joined: 'MARCH 2024',
    accountNumber: 'ACC-884029',
  },
  stats: [
    { num: '14', label: 'TOTAL ORDERS', detail: '3 shipped this week' },
    { num: '28', label: 'WISHLIST ITEMS', detail: '4 price drops' },
    { num: '3,450', label: 'REWARD POINTS', detail: '$35 redeemable credit' },
    { num: '12', label: 'REVIEWS WRITTEN', detail: '98% helpful rating' },
  ],
  recentOrder: {
    id: 'ORD-2026-9941',
    date: 'OCTOBER 4, 2026',
    status: 'IN TRANSIT',
    itemCount: 3,
    total: '$420.00',
    title: 'Architectural Silk Trench & Leather Tote',
  },
  savedAddresses: [
    { title: 'Primary Residence', city: 'New York, NY 10001', default: true },
    { title: 'Design Studio', city: 'Brooklyn, NY 11211', default: false },
  ]
};

export const AccountOverview1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity'>('overview');

  return (
    <div className="w-full bg-[#0d0d0f] text-[#f2f0ea] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl overflow-hidden relative">
      {/* Editorial Watermark Background */}
      <div className="absolute top-4 right-8 opacity-5 text-8xl font-serif font-black select-none pointer-events-none tracking-tighter">
        ALEX
      </div>

      {/* Top Bar Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono">CLIENT PORTAL // EDITORIAL EDITION</span>
          <p className="text-xs text-neutral-400 mt-1">ACCOUNT ID: {mockData.user.accountNumber}</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${activeTab === 'overview' ? 'bg-[#f2f0ea] text-[#0d0d0f] border-[#f2f0ea]' : 'border-neutral-700 text-neutral-300 hover:border-neutral-500'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('activity')}
            className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${activeTab === 'activity' ? 'bg-[#f2f0ea] text-[#0d0d0f] border-[#f2f0ea]' : 'border-neutral-700 text-neutral-300 hover:border-neutral-500'}`}
          >
            Activity Stream
          </button>
        </div>
      </div>

      {/* Main Masked Headline Reveal */}
      <div className="mb-10 overflow-hidden">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-normal uppercase text-[#f2f0ea]">
            WELCOME BACK, <span className="italic font-light text-amber-200/90">{mockData.user.name}</span>
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl font-light"
        >
          Your personal client overview. Tier <span className="text-amber-300 font-mono font-medium">{mockData.user.subtitle}</span> since {mockData.user.joined}.
        </motion.p>
      </div>

      {/* Editorial Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Asymmetric Stats & Profile info */}
        <div className="lg:col-span-7 space-y-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {mockData.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                className="p-6 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl hover:border-amber-400/40 transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-serif font-light text-amber-100 group-hover:translate-x-1 transition-transform">
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono mt-2">{stat.label}</div>
                <div className="text-xs text-neutral-400 mt-1 font-sans">{stat.detail}</div>
              </motion.div>
            ))}
          </div>

          {/* Saved Addresses Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-neutral-400 tracking-widest flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-300" /> Saved Locations
              </span>
              <button className="text-xs text-neutral-300 hover:text-amber-200 underline font-mono">Manage All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockData.savedAddresses.map((addr) => (
                <div key={addr.title} className="p-4 bg-neutral-950/80 border border-neutral-800/60 rounded-xl">
                  <div className="flex justify-between items-center text-xs font-semibold text-neutral-200">
                    <span>{addr.title}</span>
                    {addr.default && <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">DEFAULT</span>}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-mono">{addr.city}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Order Showcase Card */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="p-6 sm:p-8 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-700/80 rounded-3xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-wider rounded-full">
                ACTIVE ORDER
              </span>
              <span className="text-xs text-neutral-400 font-mono">{mockData.recentOrder.id}</span>
            </div>

            <h3 className="text-xl font-serif font-light text-neutral-100 mb-2">
              {mockData.recentOrder.title}
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-mono">
              Ordered on {mockData.recentOrder.date} • {mockData.recentOrder.itemCount} items
            </p>

            <div className="p-4 bg-neutral-950/60 border border-neutral-800 rounded-xl mb-6">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-neutral-400">Shipment Status</span>
                <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {mockData.recentOrder.status}
                </span>
              </div>
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-3/4 rounded-full"></div>
              </div>
              <div className="text-[11px] text-neutral-400 mt-2 font-mono flex justify-between">
                <span>Estimated arrival: Tomorrow</span>
                <span>Track #49102</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-mono">Total Paid</span>
                <span className="text-2xl font-serif text-amber-200">{mockData.recentOrder.total}</span>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-900 rounded-full font-mono text-xs font-medium hover:bg-amber-200 transition-colors">
                View Tracking <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Quick Support Badge */}
          <div className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-400/10 rounded-xl text-amber-300">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-neutral-200">Concierge Support Active</h4>
                <p className="text-xs text-neutral-400">Direct line to your personal stylist</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
