import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Key } from 'lucide-react';

const mockLocations = [
  { id: 'loc-1', node: 'NODE_01 // PRIMARY MANHATTAN', recipient: 'Alex Morgan', address: '450 Fashion Ave, PH 14B', city: 'New York, NY 10001', passkey: 'PASSKEY #14B-ACTIVE', status: 'DEFAULT DESTINATION' },
  { id: 'loc-2', node: 'NODE_02 // BROOKLYN STUDIO', recipient: 'Alex Morgan // Studio', address: '88 Wythe Ave, Suite 402', city: 'Brooklyn, NY 11211', passkey: 'KEYPAD CODE #4902', status: 'COMMERCIAL DISPATCH' },
  { id: 'loc-3', node: 'NODE_03 // COASTAL RETREAT', recipient: 'Alex Morgan', address: '142 Ocean Drive', city: 'East Hampton, NY 11937', passkey: 'SIDE GATE UNLOCKED', status: 'SEASONAL SITE' },
];

export const AccountAddressBook6: React.FC = () => {
  const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#05070a] text-[#00ff9d] min-h-[750px] p-6 sm:p-10 font-mono border border-emerald-900/60 rounded-3xl relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff9d08_1px,transparent_1px),linear-gradient(to_bottom,#00ff9d08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-emerald-900/60 mb-8 gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <div>
            <span className="text-[11px] text-emerald-600 uppercase tracking-widest">TACTICAL LOGISTICS // GATE PASSKEYS</span>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">COURIER ROUTING CONTROL</h1>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="px-3 py-1 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-md flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> RSA-4096 PASSKEYS
          </span>
        </div>
      </div>

      {/* Main Grid with Surrounding Highlight Trigger */}
      <div className="grid grid-cols-1 gap-6 relative z-10">
        {mockLocations.map((loc) => {
          const isHovered = hoveredLoc === loc.id;
          return (
            <motion.div
              key={loc.id}
              onMouseEnter={() => setHoveredLoc(loc.id)}
              onMouseLeave={() => setHoveredLoc(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 relative ${isHovered ? 'bg-emerald-950/40 border-emerald-400 shadow-[0_0_25px_rgba(0,255,157,0.15)]' : 'bg-neutral-950/80 border-emerald-900/30'}`}
            >
              {/* Surrounding Crosshair Indicators on Hover */}
              {isHovered && (
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
              )}
              {isHovered && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
              )}

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-emerald-500 font-bold uppercase tracking-widest">{loc.node}</span>
                    <span className="px-2 py-0.5 bg-emerald-950 border border-emerald-800 text-[10px] text-emerald-300 rounded font-mono">
                      {loc.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{loc.recipient}</h3>
                  <p className="text-xs text-neutral-300 mt-1">{loc.address} • {loc.city}</p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-300 flex items-center gap-2">
                    <Key className="w-3.5 h-3.5 text-emerald-400" /> {loc.passkey}
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1 text-emerald-400' : 'text-neutral-600'}`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
