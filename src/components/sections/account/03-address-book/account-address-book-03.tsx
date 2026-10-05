import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, Navigation, Compass, Home, Briefcase, Plus, Check } from 'lucide-react';

const pathAnimation: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.5, ease: 'easeInOut' } }
};

export function AccountAddressBook3() {
  const [selected, setSelected] = useState('1');

  const locations = [
    { id: '1', name: 'Home Residence', type: 'Primary Destination', address: '742 Evergreen Terrace, Springfield, OR', icon: Home, x: 25, y: 35 },
    { id: '2', name: 'Design Studio Hub', type: 'Work Destination', address: '100 Cybernetic Way, San Francisco, CA', icon: Briefcase, x: 75, y: 35 },
    { id: '3', name: 'Coastal Retreat', type: 'Vacation Spot', address: '12 Ocean Drive, Miami, FL', icon: Compass, x: 50, y: 75 },
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[720px] flex items-center">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              ABSTRACT GEOMETRIC MAP
            </span>
            <h1 className="text-3xl font-bold text-white mt-1">Map-Inspired Saved Locations</h1>
          </div>
          <button className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Coordinates
          </button>
        </div>

        {/* Abstract SVG Map Connector Area */}
        <div className="relative bg-slate-900/80 rounded-3xl p-10 border border-slate-800 min-h-[480px] flex items-center justify-center overflow-hidden">
          {/* Decorative SVG Roads */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-500/20" strokeWidth="2" fill="none">
            <motion.path d="M 25% 40% L 75% 40%" variants={pathAnimation} initial="hidden" animate="visible" />
            <motion.path d="M 25% 40% L 50% 75%" variants={pathAnimation} initial="hidden" animate="visible" />
            <motion.path d="M 75% 40% L 50% 75%" variants={pathAnimation} initial="hidden" animate="visible" />
          </svg>

          {/* Interactive Map Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
            {locations.map((loc) => {
              const Icon = loc.icon;
              const isSel = selected === loc.id;
              return (
                <motion.div
                  key={loc.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelected(loc.id)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all ${
                    isSel
                      ? 'bg-slate-950 border-emerald-400 shadow-2xl shadow-emerald-500/10'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${isSel ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-emerald-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSel && (
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
                        <Check className="w-3 h-3" /> Selected Hub
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white">{loc.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{loc.address}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountAddressBook3;
