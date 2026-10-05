import React, { useState } from 'react';
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
                className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors z-10 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
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
