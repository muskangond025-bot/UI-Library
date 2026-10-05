import React, { useState } from 'react';
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
