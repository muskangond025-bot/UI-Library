import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Activity } from 'lucide-react';

const mockData = {
  user: {
    name: 'ALEX MORGAN',
    subtitle: 'PRIVATE PORTFOLIO & PLATINUM VIP',
    email: 'alex.morgan@example.com',
    memberId: 'VIP-99401-NY',
    joined: '2024',
    tier: 'Platinum Elite Tier',
  },
  stats: [
    { label: 'Active Shipments', val: '03', desc: '1 arriving today (#DH-9941)', trend: '+2 this week' },
    { label: 'Saved Wishlist', val: '14', desc: '4 price drops active', trend: 'Value $2,840' },
    { label: 'Reward Points', val: '3,450', desc: '$35 credit balance', trend: 'Platinum Level' },
    { label: 'Customer Rating', val: '4.9 ★', desc: '9 verified reviews', trend: 'Top Reviewer' },
  ],
  telemetry: [20, 35, 45, 30, 60, 75, 90, 85, 95, 110]
};

export const AccountOverview20: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'actions'>('overview');

  return (
    <div className="w-full bg-[#08080a] text-[#f5f5f7] min-h-[750px] p-6 sm:p-12 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between relative overflow-hidden">
      {/* Luxury Gold Ambient Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-neutral-800 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-amber-300">
            <Sparkles className="w-3.5 h-3.5" /> AWARD-LEVEL CLIENT DASHBOARD
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-white uppercase tracking-tight mt-1">{mockData.user.name}</h1>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full border transition-all ${activeTab === 'overview' ? 'bg-amber-300 text-black border-amber-300 font-bold' : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('telemetry')}
            className={`px-4 py-2 rounded-full border transition-all ${activeTab === 'telemetry' ? 'bg-amber-300 text-black border-amber-300 font-bold' : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:border-neutral-500'}`}
          >
            Telemetry Chart
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: 4 Luxury Solid Stat Modules */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mockData.stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl hover:border-amber-400/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400 uppercase">
                  <span>{s.label}</span>
                  <span className="text-amber-300 font-bold">{s.trend}</span>
                </div>
                <div className="text-4xl font-serif font-light text-white mt-3 group-hover:text-amber-200 transition-colors">
                  {s.val}
                </div>
              </div>
              <div className="text-xs text-neutral-400 mt-4 font-mono pt-3 border-t border-neutral-800/80 flex justify-between items-center">
                <span>{s.desc}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Telemetry Curve / Account Summary */}
        <div className="lg:col-span-4 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-4">
              <span>ENGAGEMENT GRAPH</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>

            {/* SVG Path Curve */}
            <div className="h-28 w-full my-4 relative">
              <svg className="w-full h-full overflow-visible">
                <motion.path
                  d="M 0 80 Q 40 40, 80 60 T 160 30 T 240 10 T 320 20"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 mt-4 text-xs font-mono">
              <div className="flex justify-between text-neutral-400 mb-1">
                <span>Status</span>
                <span className="text-emerald-400 font-bold">100% SECURED</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Passkey</span>
                <span className="text-white font-bold">RSA-4096</span>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-amber-300 text-black font-bold font-mono text-xs rounded-2xl hover:bg-white transition-colors mt-6 flex justify-center items-center gap-2">
            Explore Full Client Portfolio <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
