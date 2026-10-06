import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ChevronRight } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    callsign: 'OPERATOR_ALEX',
    securityClearance: 'LEVEL 5 — PLATINUM',
    sessionIP: '192.168.1.104 (Encrypted)',
    uptime: '99.98%',
  },
  modules: [
    { id: 'profile', name: 'Identity & Access', status: 'SYNCHRONIZED', count: '100% SECURE', desc: 'Passkey Auth • 2FA Active' },
    { id: 'orders', name: 'Order Telemetry', status: '3 ACTIVE SHIPMENTS', count: '18 TOTAL', desc: 'Package #DH-9941 In Transit' },
    { id: 'saved', name: 'Vault & Saved Items', status: '14 ITEMS STORED', count: '$2,450 VALUATION', desc: '4 Items On Price Radar' },
    { id: 'rewards', name: 'Points Ledger', status: '3,450 CREDITS', count: '$35 BALANCE', desc: 'VIP Level 4 Unlocked' },
    { id: 'preferences', name: 'System Parameters', status: 'GLOBAL DISPATCH', count: 'EUR / USD', desc: 'Express Shipping Preferred' },
  ]
};

export const AccountOverview6: React.FC = () => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#05070a] text-[#00ff9d] min-h-[750px] p-6 sm:p-10 font-mono border border-emerald-900/60 rounded-3xl relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9d08_1px,transparent_1px),linear-gradient(to_bottom,#00ff9d08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-emerald-900/60 mb-8 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <span className="text-[11px] text-emerald-600 uppercase tracking-widest">COMMAND CENTER // TERMINAL v4.2</span>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">{mockData.user.callsign}</h1>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-md">
            CLEARANCE: {mockData.user.securityClearance}
          </span>
          <span className="text-emerald-500/80">UPTIME: {mockData.user.uptime}</span>
        </div>
      </div>

      {/* Main Grid with Surrounding Highlight Trigger */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left Column: Telemetry Specs */}
        <div className="lg:col-span-4 p-6 bg-neutral-950/90 border border-emerald-900/40 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-900/40 pb-3">
            <span className="text-xs text-neutral-400 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" /> SYSTEM METRICS
            </span>
            <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded">ONLINE</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-neutral-900/80 rounded border border-neutral-800 flex justify-between">
              <span className="text-neutral-400">User Identity</span>
              <span className="text-white font-bold">{mockData.user.name}</span>
            </div>
            <div className="p-3 bg-neutral-900/80 rounded border border-neutral-800 flex justify-between">
              <span className="text-neutral-400">Session Node</span>
              <span className="text-emerald-400">{mockData.user.sessionIP}</span>
            </div>
            <div className="p-3 bg-neutral-900/80 rounded border border-neutral-800 flex justify-between">
              <span className="text-neutral-400">2FA Encryption</span>
              <span className="text-emerald-400 font-bold">ACTIVE (RSA-4096)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Modules */}
        <div className="lg:col-span-8 space-y-4">
          {mockData.modules.map((mod) => {
            const isHovered = hoveredModule === mod.id;
            return (
              <motion.div
                key={mod.id}
                onMouseEnter={() => setHoveredModule(mod.id)}
                onMouseLeave={() => setHoveredModule(null)}
                className={`p-5 rounded-2xl border transition-all duration-300 relative ${isHovered ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_20px_rgba(0,255,157,0.15)]' : 'bg-neutral-950/80 border-emerald-900/30'}`}
              >
                {/* Surrounding Navigation Crosshair Indicator on Hover */}
                {isHovered && (
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                )}
                {isHovered && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-emerald-500 uppercase tracking-widest">{mod.status}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">{mod.name}</h3>
                    <p className="text-xs text-neutral-400 mt-1">{mod.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-300">{mod.count}</span>
                    <ChevronRight className={`w-5 h-5 ml-auto mt-1 transition-transform ${isHovered ? 'translate-x-1 text-emerald-400' : 'text-neutral-600'}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
