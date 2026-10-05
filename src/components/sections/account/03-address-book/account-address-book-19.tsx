import React from 'react';
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
