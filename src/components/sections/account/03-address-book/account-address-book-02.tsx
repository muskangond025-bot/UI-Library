import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Briefcase, MapPin, Sparkles, Check, Plus, Edit2, Trash2 } from 'lucide-react';

const mockAddresses = [
  {
    id: '1',
    label: 'Home Destination',
    isDefault: true,
    recipient: 'Alex Morgan',
    phone: '+1 (555) 234-5678',
    street: '742 Evergreen Terrace',
    city: 'Springfield, OR 97477',
    icon: Home,
  },
  {
    id: '2',
    label: 'Corporate Office',
    isDefault: false,
    recipient: 'Alex Morgan (Studio)',
    phone: '+1 (555) 987-6543',
    street: '100 Cybernetic Way, Suite 400',
    city: 'San Francisco, CA 94107',
    icon: Briefcase,
  },
  {
    id: '3',
    label: 'Vacation Villa',
    isDefault: false,
    recipient: 'Alex Morgan',
    phone: '+1 (555) 456-7890',
    street: '12 Ocean Drive',
    city: 'Miami, FL 33139',
    icon: MapPin,
  },
];

const glassVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

export function AccountAddressBook2() {
  const [addresses, setAddresses] = useState(mockAddresses);

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[700px] flex items-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-8 relative z-10">
        {/* Glass Header */}
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-cyan-500/20 text-cyan-300 rounded-2xl border border-cyan-500/30">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">REACT BITS GLASS CONCEPT</span>
              <h1 className="text-2xl font-bold text-white">Glassmorphism Saved Address Hub</h1>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/40 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Glass Location
          </motion.button>
        </div>

        {/* Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addresses.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={glassVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/10 text-cyan-300 rounded-2xl border border-white/10">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.isDefault && (
                      <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" /> Default Hub
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{item.label}</h3>
                    <p className="text-xs text-slate-300 mt-0.5">{item.recipient}</p>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1 font-sans">
                    <p>{item.street}</p>
                    <p>{item.city}</p>
                    <p className="text-slate-400 pt-1 font-mono">{item.phone}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-cyan-400 font-mono">Verified Hub</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-white/10 hover:bg-white/20 text-slate-200 rounded-lg">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 text-rose-300 rounded-lg">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountAddressBook2;
