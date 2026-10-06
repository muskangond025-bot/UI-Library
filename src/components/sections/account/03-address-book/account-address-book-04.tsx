import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Navigation, Globe } from 'lucide-react';

const mockData = {
  primary: {
    title: 'Primary Penthouse Address',
    recipient: 'Alex Morgan',
    street: '450 Fashion Avenue, Penthouse 14B',
    city: 'New York, NY 10001',
    notes: '24/7 Doorman accepts all parcels. Freight elevator chime #14B.'
  },
  coords: {
    latLong: '40.7128° N, 74.0060° W',
    zone: 'USPS NYC Zone 1',
    courier: 'Express Global Priority',
  },
  studio: {
    title: 'Design Studio HQ',
    street: '88 Wythe Ave #402, Brooklyn, NY 11211',
    keypad: 'Gate Code #4902',
  },
  vacation: {
    title: 'East Hampton Villa',
    street: '142 Ocean Drive, East Hampton, NY 11937',
    keypad: 'Side Porch Drop',
  }
};

export const AccountAddressBook4: React.FC = () => {
  return (
    <div className="w-full bg-[#09090b] text-[#fafafa] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Title Bar */}
      <div className="flex justify-between items-center pb-6 mb-8 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">BENTO LOCATION MATRIX</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Asymmetric Address Matrix</h1>
        </div>
        <div className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> 3 Saved Destinations
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Bento Tile 1: Primary Residence (Span 8) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-8 p-7 bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-950/40 border border-neutral-800 rounded-3xl relative overflow-hidden group shadow-lg flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-mono font-medium rounded-full border border-indigo-500/30 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> {mockData.primary.title}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                DEFAULT ADDRESS
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">{mockData.primary.recipient}</h2>
            <p className="text-sm text-neutral-300 font-mono mt-2">{mockData.primary.street}</p>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">{mockData.primary.city}</p>

            <div className="mt-4 p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 text-xs text-neutral-400 font-mono">
              <span className="text-indigo-300 font-bold block mb-0.5">Doorman Passkey & Instructions:</span>
              {mockData.primary.notes}
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex justify-between items-center text-xs font-mono mt-6">
            <span className="text-neutral-400">Postal Status: 100% Verified</span>
            <button className="text-indigo-400 font-bold hover:underline">Edit Primary Address →</button>
          </div>
        </motion.div>

        {/* Bento Tile 2: GPS Map Coordinates (Span 4) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-4 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-neutral-400 uppercase">GPS Telemetry</span>
            <Globe className="w-4 h-4 text-amber-400" />
          </div>

          <div className="my-4">
            <div className="text-xs font-mono text-amber-300 font-bold">{mockData.coords.latLong}</div>
            <div className="text-xs text-neutral-400 mt-1 font-mono">{mockData.coords.zone}</div>
            <div className="text-[11px] text-emerald-400 mt-2 font-mono">{mockData.coords.courier}</div>
          </div>

          <button className="text-xs font-mono text-amber-300 hover:underline text-left">View Coordinate Map →</button>
        </motion.div>

        {/* Bento Tile 3: Design Studio (Span 6) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-6 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase flex items-center gap-2 mb-2">
              <Navigation className="w-4 h-4 text-emerald-400" /> {mockData.studio.title}
            </span>
            <p className="text-xs text-neutral-200 font-mono mt-1">{mockData.studio.street}</p>
            <span className="text-[11px] text-emerald-400 font-mono mt-2 block">{mockData.studio.keypad}</span>
          </div>
          <button className="text-xs text-emerald-400 font-mono hover:underline text-left mt-4">Manage Location →</button>
        </motion.div>

        {/* Bento Tile 4: Vacation Home (Span 6) */}
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:col-span-6 p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-rose-400" /> {mockData.vacation.title}
            </span>
            <p className="text-xs text-neutral-200 font-mono mt-1">{mockData.vacation.street}</p>
            <span className="text-[11px] text-rose-400 font-mono mt-2 block">{mockData.vacation.keypad}</span>
          </div>
          <button className="text-xs text-rose-400 font-mono hover:underline text-left mt-4">Manage Location →</button>
        </motion.div>
      </div>
    </div>
  );
};
