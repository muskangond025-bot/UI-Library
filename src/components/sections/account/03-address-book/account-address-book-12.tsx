import React from 'react';
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
