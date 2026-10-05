import React, { useState } from 'react';
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
                className={`absolute w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${item.color} shadow-2xl border border-white/10 cursor-pointer transform origin-top select-none`}
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
