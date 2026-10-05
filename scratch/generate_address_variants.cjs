const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/03-address-book');

const variants = {
  '04': {
    heading: "Address List + Detail — Split View Management",
    description: "Dual-pane saved location interface with instant detail panel expansion and smooth selection animations.",
    funcName: "AccountAddressBook4",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, MapPin, Check, Plus, Edit2, Trash2, Phone, User, Compass } from 'lucide-react';

export function AccountAddressBook4() {
  const [addresses, setAddresses] = useState([
    { id: '1', label: 'Primary Residence', type: 'Home', recipient: 'Alex Morgan', phone: '+1 (555) 234-5678', street: '124 Conch Street', city: 'Bikini Bottom', state: 'CA', zip: '90210', country: 'United States', isDefault: true },
    { id: '2', label: 'Design Studio', type: 'Work', recipient: 'Alex Morgan', phone: '+1 (555) 987-6543', street: '456 Creative Boulevard, Ste 300', city: 'Austin', state: 'TX', zip: '78701', country: 'United States', isDefault: false },
    { id: '3', label: 'Beach Haven', type: 'Other', recipient: 'Alex Morgan', phone: '+1 (555) 456-7890', street: '78 Shoreline Highway', city: 'Malibu', state: 'CA', zip: '90265', country: 'United States', isDefault: false }
  ]);
  const [selectedId, setSelectedId] = useState('1');

  const selectedAddress = addresses.find(a => a.id === selectedId) || addresses[0];

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Account &rarr; Addresses</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Saved Locations</h2>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
            <Plus className="w-4 h-4" /> Add Address
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {addresses.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ x: 4 }}
                  className={\`p-4 rounded-2xl cursor-pointer border transition-all \${
                    isSelected 
                      ? 'bg-slate-800/90 border-indigo-500 shadow-xl shadow-indigo-500/10' 
                      : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }\`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={\`p-2.5 rounded-xl \${
                        item.type === 'Home' ? 'bg-emerald-500/10 text-emerald-400' :
                        item.type === 'Work' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'
                      }\`}>
                        {item.type === 'Home' ? <Home className="w-4 h-4" /> : item.type === 'Work' ? <Briefcase className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{item.city}, {item.state}</p>
                      </div>
                    </div>
                    {item.isDefault && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Default
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAddress.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {selectedAddress.type}
                      </span>
                      {selectedAddress.isDefault && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                          <Check className="w-3.5 h-3.5" /> Primary Address
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-3">{selectedAddress.label}</h3>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-700/50 text-sm">
                  <div className="flex items-center gap-3 text-slate-300">
                    <User className="w-4 h-4 text-indigo-400" />
                    <span className="font-medium">{selectedAddress.recipient}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span>{selectedAddress.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Compass className="w-4 h-4 text-indigo-400 mt-0.5" />
                    <div>
                      <p>{selectedAddress.street}</p>
                      <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</p>
                      <p className="text-slate-400 text-xs mt-1">{selectedAddress.country}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                  {!selectedAddress.isDefault && (
                    <button
                      onClick={() => handleSetDefault(selectedAddress.id)}
                      className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                    >
                      Set as Default Address
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook4;
`
  },
  '05': {
    heading: "Editorial Address — Large Typographic Layout",
    description: "High-fashion magazine editorial layout featuring oversized section headers and clip-path text reveals.",
    funcName: "AccountAddressBook5",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function AccountAddressBook5() {
  const [addresses, setAddresses] = useState([
    { id: '1', name: 'HOME SANCTUARY', recipient: 'Alex Morgan', address: '742 Evergreen Terrace', location: 'Springfield, IL 62704', default: true },
    { id: '2', name: 'METROPOLIS LOFT', recipient: 'Alex Morgan', address: '456 Creative Blvd, Suite 400', location: 'Austin, TX 78701', default: false },
    { id: '3', name: 'COASTAL RETREAT', recipient: 'Alex Morgan', address: '88 Ocean Drive', location: 'Miami, FL 33139', default: false }
  ]);

  return (
    <section className="w-full min-h-[600px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-neutral-800 pb-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-400 font-semibold block mb-2">DIRECTORY</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white uppercase leading-none">
              YOUR <span className="italic font-serif text-neutral-400">PLACES</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addresses.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group border-t border-neutral-800 pt-6 flex flex-col justify-between h-full min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-sans">
                  <span className="text-xs tracking-widest text-neutral-500 font-mono">0{idx + 1}</span>
                  {item.default && (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-neutral-700 text-neutral-300">
                      PRIMARY
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-serif text-white tracking-wide group-hover:text-neutral-300 transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-neutral-400 mt-4 leading-relaxed">
                  {item.recipient}<br />
                  {item.address}<br />
                  {item.location}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 font-sans flex items-center justify-between text-xs tracking-wider">
                <button className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors">
                  EDIT <ArrowUpRight className="w-3 h-3" />
                </button>
                {!item.default && (
                  <button 
                    onClick={() => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === item.id })))}
                    className="text-neutral-500 hover:text-neutral-200 transition-colors"
                  >
                    SET PRIMARY
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center font-sans">
          <button className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-2xl">
            + ADD NEW ADDRESS
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook5;
`
  },
  '06': {
    heading: "Address Stack — Layered Location Cards",
    description: "Interactive stacked card presentation with perspective offset and dynamic depth ordering upon selection.",
    funcName: "AccountAddressBook6",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, Layers, ArrowRight } from 'lucide-react';

export function AccountAddressBook6() {
  const [addresses] = useState([
    { id: '1', title: 'Main Residency', name: 'Alex Morgan', address: '742 Evergreen Terrace, Springfield, IL 62704', phone: '+1 (555) 019-2834', color: 'from-violet-600 to-indigo-700' },
    { id: '2', title: 'Urban Headquarters', name: 'Alex Morgan', address: '100 Innovation Way, Suite 400, San Francisco, CA 94105', phone: '+1 (555) 482-9102', color: 'from-cyan-600 to-blue-700' },
    { id: '3', title: 'Coastal Bungalow', name: 'Alex Morgan', address: '88 Ocean Drive, Miami, FL 33139', phone: '+1 (555) 739-1144', color: 'from-emerald-600 to-teal-700' }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-[600px] bg-zinc-950 text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-400" /> Layered Address Deck
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Saved Locations Stack</h2>
          <p className="text-sm text-zinc-400 mt-1">Tap cards to cycle through saved delivery addresses</p>
        </div>

        <div className="relative h-[320px] max-w-xl mx-auto flex items-center justify-center">
          {addresses.map((item, idx) => {
            const offset = (idx - activeIndex + addresses.length) % addresses.length;
            const zIndex = addresses.length - offset;
            const translateY = offset * 22;
            const scale = 1 - offset * 0.05;
            const opacity = 1 - offset * 0.2;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  y: translateY,
                  scale: scale,
                  opacity: opacity,
                  zIndex: zIndex
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={\`absolute w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br \${item.color} shadow-2xl border border-white/10 cursor-pointer transform origin-top select-none\`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold tracking-widest bg-black/30 px-3 py-1 rounded-full text-white/80 backdrop-blur-md">
                    {item.title}
                  </span>
                  {offset === 0 && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-white bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-md">
                      <Check className="w-3.5 h-3.5" /> Active Card
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-white/90 mt-2 font-medium leading-relaxed">{item.address}</p>
                  <p className="text-xs text-white/70 mt-3">{item.phone}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 flex justify-between items-center text-xs">
                  <span className="text-white/60">Card #{idx + 1}</span>
                  <span className="flex items-center gap-1 font-semibold text-white group">
                    Select Address <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-16">
          <button className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-xl shadow-indigo-600/30 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Address Card
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook6;
`
  },
  '07': {
    heading: "Minimal Address List — Precision Typography",
    description: "Clean monochrome saved-address list featuring animated SVG rule dividers and subtle hover indicator slides.",
    funcName: "AccountAddressBook7",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountAddressBook7() {
  const [addresses, setAddresses] = useState([
    { id: '1', title: 'PRIMARY HOME', recipient: 'Alex Morgan', details: '742 Evergreen Terrace, Springfield, IL 62704', default: true },
    { id: '2', title: 'WORK OFFICE', recipient: 'Alex Morgan', details: '100 Innovation Way, Ste 400, San Francisco, CA 94105', default: false },
    { id: '3', title: 'WAREHOUSE DROP', recipient: 'Alex Morgan', details: '88 Ocean Drive, Miami, FL 33139', default: false }
  ]);

  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-8 mb-4 border-b border-gray-100">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Account Address Directory</span>
            <h2 className="text-2xl font-light text-gray-900 mt-1 tracking-tight">Saved Addresses</h2>
          </div>
          <button className="px-4 py-2 border border-gray-900 text-xs uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-white transition-all">
            + New Address
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {addresses.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 group flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{item.title}</span>
                  {item.default && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gray-100 text-gray-700">
                      DEFAULT
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.recipient}</h3>
                <p className="text-sm text-gray-500 font-light">{item.details}</p>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider">
                <button className="text-gray-400 hover:text-gray-900 transition-colors uppercase">Edit</button>
                {!item.default && (
                  <button
                    onClick={() => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === item.id })))}
                    className="text-gray-400 hover:text-gray-900 transition-colors uppercase"
                  >
                    Set Default
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook7;
`
  },
  '08': {
    heading: "Dark Luxury Address — Obsidian & Gold Interface",
    description: "Exclusive dark-themed address hub crafted with rich obsidian surfaces, metallic gold badges, and subtle ambient glows.",
    funcName: "AccountAddressBook8",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Edit3 } from 'lucide-react';

export function AccountAddressBook8() {
  const [addresses, setAddresses] = useState([
    { id: '1', name: 'Private Residence', recipient: 'Alex Morgan', address: '742 Evergreen Terrace', city: 'Springfield, IL 62704', default: true },
    { id: '2', name: 'Executive Suite', recipient: 'Alex Morgan', address: '100 Innovation Way, Suite 400', city: 'San Francisco, CA 94105', default: false }
  ]);

  return (
    <section className="w-full min-h-[600px] bg-neutral-950 text-amber-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-10 border-b border-amber-500/20 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs tracking-widest uppercase font-semibold">
              <Shield className="w-3.5 h-3.5" /> VIP Saved Destinations
            </div>
            <h2 className="text-3xl font-serif text-white tracking-wide mt-1">Saved Addresses</h2>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/10 transition-all">
            + New Location
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-neutral-900/80 border border-amber-500/20 backdrop-blur-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest font-mono text-amber-400/80">{item.name}</span>
                {item.default && (
                  <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    Primary
                  </span>
                )}
              </div>

              <h3 className="text-xl font-serif text-white">{item.recipient}</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">{item.address}</p>
              <p className="text-xs text-amber-400/60 mt-1 font-mono">{item.city}</p>

              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold">
                <button className="text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" /> Edit
                </button>
                {!item.default && (
                  <button
                    onClick={() => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === item.id })))}
                    className="text-amber-400/80 hover:text-amber-300 transition-colors uppercase tracking-wider"
                  >
                    Set Primary
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook8;
`
  },
  '09': {
    heading: "Location Switcher — Segmented Selector Hub",
    description: "Interactive segmented location control with a sliding background pill and responsive location detail card transition.",
    funcName: "AccountAddressBook9",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, MapPin, Check, Edit } from 'lucide-react';

export function AccountAddressBook9() {
  const [activeTab, setActiveTab] = useState('Home');

  const addresses: Record<string, any> = {
    Home: { title: 'Home Residence', recipient: 'Alex Morgan', address: '742 Evergreen Terrace', city: 'Springfield, IL 62704', phone: '+1 (555) 019-2834', icon: Home },
    Work: { title: 'Corporate HQ', recipient: 'Alex Morgan', address: '100 Innovation Way, Suite 400', city: 'San Francisco, CA 94105', phone: '+1 (555) 482-9102', icon: Briefcase },
    Other: { title: 'Vacation Retreat', recipient: 'Alex Morgan', address: '88 Ocean Drive', city: 'Miami, FL 33139', phone: '+1 (555) 739-1144', icon: MapPin }
  };

  const current = addresses[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Location Switcher</h2>
        <p className="text-sm text-slate-400 mb-8">Select category to inspect or modify location info</p>

        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mb-10 relative">
          {Object.keys(addresses).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={\`relative px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors z-10 \${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }\`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 text-left shadow-2xl relative overflow-hidden max-w-xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">Saved Location</span>
                <h3 className="text-2xl font-bold text-white">{current.title}</h3>
              </div>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-semibold text-white">{current.recipient}</p>
              <p>{current.address}</p>
              <p>{current.city}</p>
              <p className="text-xs text-slate-400 pt-2">{current.phone}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center text-xs">
              <button className="flex items-center gap-2 font-semibold text-slate-300 hover:text-white transition-colors">
                <Edit className="w-4 h-4" /> Modify Details
              </button>
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Verified Location
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AccountAddressBook9;
`
  },
  '10': {
    heading: "Infinite Address Menu — Interactive Location Carousel",
    description: "Horizontal scrolling address carousel with smooth drag gestures, card scaling, and active location pagination.",
    funcName: "AccountAddressBook10",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export function AccountAddressBook10() {
  const [activeIndex, setActiveIndex] = useState(0);

  const addresses = [
    { id: '1', title: 'Main Villa', recipient: 'Alex Morgan', street: '742 Evergreen Terrace', city: 'Springfield, IL', tag: 'Primary' },
    { id: '2', title: 'Tech Hub', recipient: 'Alex Morgan', street: '100 Innovation Way', city: 'San Francisco, CA', tag: 'Work' },
    { id: '3', title: 'Seaside Suite', recipient: 'Alex Morgan', street: '88 Ocean Drive', city: 'Miami, FL', tag: 'Vacation' },
    { id: '4', title: 'Design Office', recipient: 'Alex Morgan', street: '456 Creative Blvd', city: 'Austin, TX', tag: 'Studio' }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % addresses.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + addresses.length) % addresses.length);

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-between mb-10 px-4">
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Interactive Menu</span>
            <h2 className="text-3xl font-bold text-white mt-1">Address Carousel</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrev} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 py-6">
          {addresses.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  scale: isSelected ? 1 : 0.88,
                  opacity: isSelected ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={\`w-[300px] shrink-0 p-6 rounded-3xl cursor-pointer text-left border transition-all shadow-xl \${
                  isSelected ? 'bg-indigo-600/20 border-indigo-500 backdrop-blur-xl' : 'bg-slate-800/50 border-slate-800 hover:bg-slate-800'
                }\`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold text-indigo-400">{item.tag}</span>
                  {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-2 font-medium">{item.recipient}</p>
                <p className="text-xs text-slate-400 mt-1">{item.street}</p>
                <p className="text-xs text-slate-400">{item.city}</p>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-end">
                  <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                    Select Location &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook10;
`
  },
  '11': {
    heading: "Address + Default State — Primary Location Spotlight",
    description: "Address management interface prioritizing the primary default shipping location with smooth checkmark badge transitions.",
    funcName: "AccountAddressBook11",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

export function AccountAddressBook11() {
  const [addresses, setAddresses] = useState([
    { id: '1', title: 'Main Home Address', recipient: 'Alex Morgan', details: '742 Evergreen Terrace, Springfield, IL 62704', isDefault: true },
    { id: '2', title: 'Work Office Address', recipient: 'Alex Morgan', details: '100 Innovation Way, Suite 400, San Francisco, CA 94105', isDefault: false }
  ]);

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  };

  const defaultAddress = addresses.find(a => a.isDefault);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">Primary Location</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Default Shipping Address</h2>
        </div>

        {defaultAddress && (
          <motion.div
            layout
            className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border-2 border-emerald-500/50 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase font-bold tracking-widest mb-4">
              <Star className="w-4 h-4 fill-emerald-400" /> Default Shipping Destination
            </div>

            <h3 className="text-2xl font-bold text-white">{defaultAddress.title}</h3>
            <p className="text-base text-slate-200 mt-2 font-medium">{defaultAddress.recipient}</p>
            <p className="text-sm text-slate-400 mt-1">{defaultAddress.details}</p>

            <div className="mt-6 pt-6 border-t border-emerald-500/20 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Active for One-Click Delivery
              </span>
              <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold">
                Edit Default Address
              </button>
            </div>
          </motion.div>
        )}

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Other Saved Locations</h4>
          {addresses.filter(a => !a.isDefault).map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-white text-base">{item.title}</h5>
                <p className="text-xs text-slate-400 mt-0.5">{item.details}</p>
              </div>
              <button
                onClick={() => handleSetDefault(item.id)}
                className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition-all border border-emerald-500/30"
              >
                Set as Default
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook11;
`
  },
  '12': {
    heading: "Address Timeline — Vertical Structural Flow",
    description: "Sequential timeline visualization of saved address components linked with an animated SVG vertical connector line.",
    funcName: "AccountAddressBook12",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, Building, Flag } from 'lucide-react';

export function AccountAddressBook12() {
  const steps = [
    { label: 'Recipient Name', value: 'Alex Morgan', icon: User },
    { label: 'Contact Phone', value: '+1 (555) 019-2834', icon: Phone },
    { label: 'Street Address', value: '742 Evergreen Terrace', icon: Building },
    { label: 'City & State', value: 'Springfield, IL 62704', icon: MapPin },
    { label: 'Country', value: 'United States', icon: Flag }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Structured Data</span>
          <h2 className="text-3xl font-bold text-white mt-1">Address Timeline</h2>
        </div>

        <div className="relative pl-8 space-y-8 border-l-2 border-indigo-500/30 ml-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[41px] top-1 p-2 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/40">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="bg-slate-800/60 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/50 transition-all">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{step.label}</span>
                  <p className="text-lg font-bold text-white mt-1">{step.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook12;
`
  },
  '13': {
    heading: "Add Address Experience — Expandable Location Creator",
    description: "Expandable inline address creation wizard featuring smooth layout height animation and field focus highlights.",
    funcName: "AccountAddressBook13",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

export function AccountAddressBook13() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Address Book</h2>
            <p className="text-sm text-slate-400 mt-1">Manage saved addresses or create new locations</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isOpen ? 'Cancel' : 'Add New Address'}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-8"
            >
              <form className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 space-y-4 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-4">New Location Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Recipient Name" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <input type="text" placeholder="Street Address" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                <div className="grid grid-cols-3 gap-4">
                  <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="State" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                  <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <button type="button" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl bg-indigo-600 font-bold text-white text-sm mt-4 hover:bg-indigo-500">
                  Save Address
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h4 className="font-bold text-white">Default Address</h4>
          <p className="text-sm text-slate-400 mt-1">Alex Morgan — 742 Evergreen Terrace, Springfield, IL 62704</p>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook13;
`
  },
  '14': {
    heading: "Interactive Address Card — Revealable Action Tray",
    description: "Compact address grid that smoothly expands interactive action trays on hover or tap.",
    funcName: "AccountAddressBook14",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2, CheckCircle2, Home } from 'lucide-react';

export function AccountAddressBook14() {
  const [hovered, setHovered] = useState<string | null>(null);

  const card = { id: '1', title: 'Home Residence', recipient: 'Alex Morgan', street: '742 Evergreen Terrace', city: 'Springfield, IL 62704' };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Action Tray Card</h2>

        <motion.div
          onMouseEnter={() => setHovered('1')}
          onMouseLeave={() => setHovered(null)}
          className="p-8 rounded-3xl bg-slate-800 border border-slate-700 relative overflow-hidden shadow-2xl text-left"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold">
              <Home className="w-4 h-4" /> {card.title}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white">{card.recipient}</h3>
          <p className="text-sm text-slate-300 mt-1">{card.street}</p>
          <p className="text-xs text-slate-400">{card.city}</p>

          <motion.div
            animate={{ y: hovered === '1' ? 0 : '100%' }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-indigo-600/90 backdrop-blur-md flex justify-around items-center text-white"
          >
            <button className="flex items-center gap-1 text-xs font-bold hover:underline">
              <Edit2 className="w-3.5 h-3.5" /> Edit
            </button>
            <button className="flex items-center gap-1 text-xs font-bold hover:underline">
              <CheckCircle2 className="w-3.5 h-3.5" /> Make Default
            </button>
            <button className="flex items-center gap-1 text-xs font-bold text-red-200 hover:underline">
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountAddressBook14;
`
  },
  '15': {
    heading: "3D Address Cards — Dynamic Perspective Tilt",
    description: "Interactive saved-address grid utilizing real-time cursor tracking for subtle 3D perspective tilt and light reflections.",
    funcName: "AccountAddressBook15",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function AccountAddressBook15() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">3D Perspective Card</h2>
        <p className="text-sm text-slate-400 mb-8">Hover over card to experience interactive 3D perspective depth</p>

        <div className="perspective-1000">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 shadow-2xl text-left cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">
                Primary Residence
              </span>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-sm text-slate-300 mt-2">742 Evergreen Terrace</p>
            <p className="text-xs text-slate-400">Springfield, IL 62704</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook15;
`
  },
  '16': {
    heading: "Address Categories — Tabbed Location Hub",
    description: "Filterable location system organizing saved addresses into categorized tabs with smooth grid filtering transitions.",
    funcName: "AccountAddressBook16",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountAddressBook16() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Home', 'Work', 'Other'];

  const addresses = [
    { id: '1', name: 'Primary Home', type: 'Home', details: '742 Evergreen Terrace, Springfield, IL' },
    { id: '2', name: 'Corporate HQ', type: 'Work', details: '100 Innovation Way, San Francisco, CA' },
    { id: '3', name: 'Beach Villa', type: 'Other', details: '88 Ocean Drive, Miami, FL' }
  ];

  const filtered = activeCategory === 'All' ? addresses : addresses.filter(a => a.type === activeCategory);

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Categorized Address Hub</h2>

        <div className="flex gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${
                activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }\`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <motion.div key={item.id} layout className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700">
              <span className="text-xs uppercase font-bold text-indigo-400">{item.type}</span>
              <h3 className="text-lg font-bold text-white mt-1">{item.name}</h3>
              <p className="text-sm text-slate-300 mt-2">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook16;
`
  },
  '17': {
    heading: "Address + Location Iconography — Animated Micro-Icons",
    description: "Saved-address interface enriched with custom animated SVG icons that react to hover gestures and selection states.",
    funcName: "AccountAddressBook17",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, MapPin, User } from 'lucide-react';

export function AccountAddressBook17() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Iconic Address Card</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
              <Home className="w-5 h-5" />
            </motion.div>
            <h3 className="text-xl font-bold text-white">Home Address</h3>
          </div>

          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <User className="w-4 h-4 text-indigo-400" />
            <span>Alex Morgan</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <Phone className="w-4 h-4 text-indigo-400" />
            <span>+1 (555) 019-2834</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>742 Evergreen Terrace, Springfield, IL 62704</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook17;
`
  },
  '18': {
    heading: "Magazine Address — Asymmetric Editorial Grid",
    description: "Asymmetric editorial showcase pairing high-contrast serif typography with staggered address block reveals.",
    funcName: "AccountAddressBook18",
    code: `import React from 'react';

export function AccountAddressBook18() {
  return (
    <section className="w-full min-h-[600px] bg-stone-900 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-stone-800 pb-8 mb-12">
          <h1 className="text-5xl font-light tracking-tight text-white uppercase">LOCATIONS // N°01</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-stone-800/40 p-8 border border-stone-700/50 rounded-2xl">
            <span className="text-xs uppercase font-sans tracking-widest text-stone-400">PRIMARY</span>
            <h2 className="text-3xl font-serif text-white mt-2">742 EVERGREEN TERRACE</h2>
            <p className="font-sans text-sm text-stone-300 mt-4 leading-relaxed">
              SPRINGFIELD, ILLINOIS 62704<br />
              RECIPIENT: ALEX MORGAN
            </p>
          </div>

          <div className="md:col-span-5 bg-stone-800/20 p-8 border border-stone-800 rounded-2xl">
            <span className="text-xs uppercase font-sans tracking-widest text-stone-400">SECONDARY</span>
            <h2 className="text-xl font-serif text-white mt-2">100 INNOVATION WAY</h2>
            <p className="font-sans text-xs text-stone-400 mt-2">
              SAN FRANCISCO, CA 94105
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook18;
`
  },
  '19': {
    heading: "Floating Location Modules — Ambient Orbit Hub",
    description: "Dynamic floating card ecosystem with continuous ambient bobbing motion and interactive hover stabilization.",
    funcName: "AccountAddressBook19",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function AccountAddressBook19() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Floating Address Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl"
          >
            <MapPin className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="text-xl font-bold text-white">Home Base</h3>
            <p className="text-sm text-slate-300 mt-2">742 Evergreen Terrace, Springfield, IL</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="p-6 rounded-3xl bg-slate-900 border border-purple-500/30 text-left shadow-2xl"
          >
            <MapPin className="w-6 h-6 text-purple-400 mb-3" />
            <h3 className="text-xl font-bold text-white">Work Hub</h3>
            <p className="text-sm text-slate-300 mt-2">100 Innovation Way, San Francisco, CA</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook19;
`
  },
  '20': {
    heading: "Award-Style Address Experience — Master Location Portal",
    description: "Flagship address management experience blending glassmorphism, interactive SVG path connections, and micro-interactions.",
    funcName: "AccountAddressBook20",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function AccountAddressBook20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-indigo-400">Master Portal</span>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Saved Locations</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            + Add New Location
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/40 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                Primary Residence
              </span>
              <Check className="w-5 h-5 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-base text-slate-300 mt-2">742 Evergreen Terrace</p>
            <p className="text-sm text-slate-400">Springfield, IL 62704</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-800 text-slate-400">
                Corporate HQ
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-base text-slate-300 mt-2">100 Innovation Way, Ste 400</p>
            <p className="text-sm text-slate-400">San Francisco, CA 94105</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook20;
`
  }
};

Object.entries(variants).forEach(([num, data]) => {
  const tsxPath = path.join(dir, `account-address-book-${num}.tsx`);
  const jsonPath = path.join(dir, `account-address-book-${num}.json`);

  fs.writeFileSync(tsxPath, data.code);
  fs.writeFileSync(jsonPath, JSON.stringify({
    heading: data.heading,
    description: data.description
  }, null, 2));

  console.log(`Updated account-address-book-${num} with export ${data.funcName}`);
});
