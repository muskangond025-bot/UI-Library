import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Compass } from 'lucide-react';

const mockPins = [
  { id: 'pin-1', name: 'Manhattan Penthouse', coords: '40.7128° N, 74.0060° W', street: '450 Fashion Ave, PH 14B', city: 'New York, NY 10001', isDefault: true, color: 'bg-indigo-500 text-indigo-300' },
  { id: 'pin-2', name: 'Brooklyn Studio', coords: '40.7178° N, 73.9575° W', street: '88 Wythe Ave, Suite 402', city: 'Brooklyn, NY 11211', isDefault: false, color: 'bg-emerald-500 text-emerald-300' },
  { id: 'pin-3', name: 'East Hampton Villa', coords: '40.9634° N, 72.1848° W', street: '142 Ocean Drive', city: 'East Hampton, NY 11937', isDefault: false, color: 'bg-rose-500 text-rose-300' },
];

export const AccountAddressBook5: React.FC = () => {
  const [activePinId, setActivePinId] = useState<string>('pin-1');

  return (
    <div className="w-full bg-[#fcfbf9] text-[#1a1a1a] min-h-[750px] p-6 sm:p-12 font-sans border border-neutral-300 rounded-3xl relative">
      {/* Dynamic Perimeter SVG Line Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl">
        <motion.rect
          x="1"
          y="1"
          width="99.8%"
          height="99.8%"
          rx="24"
          fill="none"
          stroke="#d4d0c7"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {/* Top Header */}
      <div className="flex justify-between items-center pb-8 border-b border-neutral-200">
        <div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">GEOGRAPHIC MAP VIEWPORT</span>
          <h1 className="text-3xl font-serif font-normal text-neutral-900 mt-1">Satellite Destination Map</h1>
        </div>
        <button className="px-4 py-2 bg-neutral-900 text-white font-mono text-xs rounded-full uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-1.5">
          <Plus className="w-3.5 h-3.5" /> Add Coordinate Pin
        </button>
      </div>

      {/* Map Pin Selector Grid */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockPins.map((pin) => {
          const isActive = activePinId === pin.id;
          return (
            <motion.div
              key={pin.id}
              whileHover={{ y: -4 }}
              onClick={() => setActivePinId(pin.id)}
              className={`p-6 bg-white border rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[260px] ${isActive ? 'border-neutral-900 shadow-xl ring-2 ring-neutral-900' : 'border-neutral-200 hover:border-neutral-400'}`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-neutral-800" /> {pin.name}
                  </span>
                  {pin.isDefault && (
                    <span className="text-[10px] font-mono bg-neutral-900 text-white px-2 py-0.5 rounded-full">
                      PRIMARY
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md w-max mb-3 font-bold">
                  GPS: {pin.coords}
                </div>

                <p className="text-xs font-mono text-neutral-800 font-bold">{pin.street}</p>
                <p className="text-xs font-mono text-neutral-500">{pin.city}</p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-xs font-mono mt-4">
                <span className="text-neutral-400">{isActive ? 'MAP PIN ACTIVE' : 'CLICK PIN'}</span>
                <span className="text-neutral-900 font-bold">Select Pin →</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
