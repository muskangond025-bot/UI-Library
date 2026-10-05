import React, { useState } from 'react';
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
