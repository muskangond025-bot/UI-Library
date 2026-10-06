import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Activity, Plus } from 'lucide-react';

const mockData = {
  user: 'ALEX MORGAN',
  title: 'SAVED LOCATION REGISTRY',
  locations: [
    { label: 'PRIMARY RESIDENCE', address: '450 Fashion Ave, PH 14B', city: 'New York, NY 10001', tag: 'Default Destination', trend: 'USPS Verified 100%' },
    { label: 'DESIGN STUDIO HQ', address: '88 Wythe Ave, Suite 402', city: 'Brooklyn, NY 11211', tag: 'Commercial Passkey', trend: 'Gate #4902 Active' },
    { label: 'EAST HAMPTON RETREAT', address: '142 Ocean Drive', city: 'East Hampton, NY 11937', tag: 'Seasonal Villa', trend: 'Courier Authorized' },
  ],
};

export const AccountAddressBook20: React.FC = () => {

  return (
    <div className="w-full bg-[#08080a] text-[#f5f5f7] min-h-[750px] p-6 sm:p-12 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between relative overflow-hidden">
      {/* Luxury Gold Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-neutral-800 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-amber-300">
            <Sparkles className="w-3.5 h-3.5" /> AWARD-LEVEL LOCATION SHOWCASE
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-white uppercase tracking-tight mt-1">{mockData.user}</h1>
        </div>

        <button className="px-5 py-2.5 bg-amber-300 text-black font-bold font-mono text-xs rounded-full hover:bg-white transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column: 3 Luxury Solid Location Cards */}
        <div className="lg:col-span-8 space-y-4">
          {mockData.locations.map((loc, idx) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              whileHover={{ x: 6 }}
              className="p-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl hover:border-amber-400/50 transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase">
                  <span className="text-amber-300 font-bold">{loc.label}</span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">{loc.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
                  {loc.address}
                </h3>
                <p className="text-xs text-neutral-400 font-mono">{loc.city}</p>
              </div>

              <div className="text-right flex items-center gap-4">
                <span className="text-xs font-mono text-neutral-400">{loc.trend}</span>
                <button className="p-2.5 bg-neutral-800 rounded-full text-white group-hover:bg-amber-300 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Telemetry & Security Card */}
        <div className="lg:col-span-4 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-4">
              <span>DISTANCE TELEMETRY</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>

            {/* SVG Path Curve */}
            <div className="h-28 w-full my-4 relative">
              <svg className="w-full h-full overflow-visible">
                <motion.path
                  d="M 0 70 Q 40 20, 80 50 T 160 20 T 240 60 T 320 10"
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
                <span>USPS Match</span>
                <span className="text-emerald-400 font-bold">100% CONFIRMED</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Doorman Chime</span>
                <span className="text-white font-bold">PASSKEY #14B</span>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-amber-300 text-black font-bold font-mono text-xs rounded-2xl hover:bg-white transition-colors mt-6 flex justify-center items-center gap-2">
            Manage Courier Passkeys <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
