import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const mockData = {
  primary: {
    name: 'Alex Morgan',
    street: '450 Fashion Avenue, Penthouse 14B',
    city: 'New York, NY 10001',
    isDefault: true,
  },
  activeLocations: [
    { label: 'Primary Residence', street: '450 Fashion Ave, PH 14B', city: 'New York, NY 10001', tag: 'Default' },
    { label: 'Design Studio HQ', street: '88 Wythe Ave, Suite 402', city: 'Brooklyn, NY 11211', tag: 'Commercial' },
  ],
  archivedLocations: [
    { label: 'East Hampton Villa', street: '142 Ocean Drive', city: 'East Hampton, NY 11937', tag: 'Seasonal' },
  ]
};

export const AccountAddressBook14: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'archived' | 'security'>('active');

  return (
    <div className="w-full bg-[#0a0a0d] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Fixed Profile Address Sidebar (4 cols) */}
      <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between">
        <div>
          <div className="pb-6 border-b border-neutral-800">
            <span className="text-[10px] font-mono uppercase text-indigo-400">DEFAULT DESTINATION</span>
            <h2 className="text-xl font-bold text-white mt-1">{mockData.primary.name}</h2>
            <p className="text-xs text-neutral-300 font-mono mt-2">{mockData.primary.street}</p>
            <p className="text-xs text-neutral-400 font-mono">{mockData.primary.city}</p>
          </div>

          <div className="py-6 space-y-3 font-mono text-xs">
            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 flex justify-between">
              <span className="text-neutral-400">Postal Match</span>
              <span className="text-emerald-400 font-bold">100% VERIFIED</span>
            </div>
            <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800 flex justify-between">
              <span className="text-neutral-400">Courier Passkey</span>
              <span className="text-indigo-300 font-bold">ACTIVE #14B</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="space-y-2 pt-6 border-t border-neutral-800 font-mono text-xs">
          <button
            onClick={() => setActiveTab('active')}
            className={`w-full p-3 rounded-xl text-left transition-colors ${activeTab === 'active' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            Active Locations (2)
          </button>
          <button
            onClick={() => setActiveTab('archived')}
            className={`w-full p-3 rounded-xl text-left transition-colors ${activeTab === 'archived' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            Archived Locations (1)
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full p-3 rounded-xl text-left transition-colors ${activeTab === 'security' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            Passkey Security
          </button>
        </div>
      </div>

      {/* Right Column: Sliding Active Panel (8 cols) */}
      <div className="lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'active' && (
            <motion.div
              key="active"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Active Destinations</h2>
              <div className="space-y-3">
                {mockData.activeLocations.map((loc, idx) => (
                  <div key={idx} className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="text-indigo-300 font-mono font-bold text-[10px] bg-indigo-500/10 px-2 py-0.5 rounded">{loc.tag}</span>
                      <h4 className="text-base font-bold text-white mt-1">{loc.label}</h4>
                      <p className="text-neutral-400 font-mono">{loc.street} • {loc.city}</p>
                    </div>
                    <button className="text-indigo-400 font-mono font-bold hover:underline">Edit →</button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'archived' && (
            <motion.div
              key="archived"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Archived Locations</h2>
              <div className="space-y-3">
                {mockData.archivedLocations.map((loc, idx) => (
                  <div key={idx} className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="text-base font-bold text-white">{loc.label}</h4>
                      <p className="text-neutral-400 font-mono">{loc.street} • {loc.city}</p>
                    </div>
                    <button className="text-neutral-300 font-mono hover:underline">Reactivate →</button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Courier Passkey Authorization</h2>
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-bold">24/7 Doorman Authorization</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> ACTIVE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-bold">Freight Elevator Passcode</span>
                  <span className="text-emerald-400 font-bold">#4902</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
