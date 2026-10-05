import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Briefcase, MapPin, Plus, Check, Edit2, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';

const mockAddresses = [
  {
    id: '1',
    label: 'Home',
    type: 'home',
    isDefault: true,
    recipient: 'Alex Morgan',
    phone: '+1 (555) 234-5678',
    street: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    country: 'United States',
    icon: Home,
  },
  {
    id: '2',
    label: 'Work',
    type: 'work',
    isDefault: false,
    recipient: 'Alex Morgan (Design Studio)',
    phone: '+1 (555) 987-6543',
    street: '100 Cybernetic Way, Suite 400',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
    country: 'United States',
    icon: Briefcase,
  },
  {
    id: '3',
    label: 'Vacation Residence',
    type: 'other',
    isDefault: false,
    recipient: 'Alex Morgan',
    phone: '+1 (555) 456-7890',
    street: '12 Ocean Drive',
    city: 'Miami',
    state: 'FL',
    zip: '33139',
    country: 'United States',
    icon: MapPin,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  }
};

export function AccountAddressBook1() {
  const [addresses, setAddresses] = useState(mockAddresses);

  const setDefault = (id: string) => {
    setAddresses(addresses.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
              PREMIUM CARDS COLLECTION
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-2">Saved Addresses</h1>
            <p className="text-xs text-slate-400 mt-1">Manage your saved delivery locations and default shipping destinations.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add New Location
          </motion.button>
        </div>

        {/* Premium Address Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {addresses.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`bg-slate-900/90 rounded-3xl p-6 border ${
                  item.isDefault ? 'border-indigo-500/60 shadow-2xl shadow-indigo-500/10' : 'border-slate-800'
                } flex flex-col justify-between relative group overflow-hidden`}
              >
                {item.isDefault && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-mono uppercase px-3 py-1 rounded-bl-2xl font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Default Location
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.label}</h3>
                      <p className="text-xs text-slate-400">{item.recipient}</p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1 font-sans leading-relaxed">
                    <p>{item.street}</p>
                    <p>{item.city}, {item.state} {item.zip}</p>
                    <p className="text-slate-400">{item.country}</p>
                    <p className="text-slate-400 pt-1 font-mono">{item.phone}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  {!item.isDefault ? (
                    <button
                      onClick={() => setDefault(item.id)}
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      Set as Default
                    </button>
                  ) : (
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Primary Destination
                    </span>
                  )}

                  <div className="flex items-center gap-2">
                    <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-2 bg-slate-800 hover:bg-slate-700 text-rose-400 rounded-lg transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default AccountAddressBook1;
