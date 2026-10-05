import React, { useState } from 'react';
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
