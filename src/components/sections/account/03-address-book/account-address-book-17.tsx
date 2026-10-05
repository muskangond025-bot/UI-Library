import React from 'react';
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
