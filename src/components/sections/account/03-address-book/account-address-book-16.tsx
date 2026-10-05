import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountAddressBook16() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Home', 'Work', 'Other'];

  const addresses = [
    { id: '1', name: 'Primary Home', type: 'Home', details: '742 Evergreen Terrace, Springfield, IL' },
    { id: '2', name: 'Corporate HQ', type: 'Work', details: '100 Innovation Way, San Francisco, CA' },
    { id: '3', name: 'Beach Villa', type: 'Other', details: '88 Ocean Drive, Miami, FL' }
  ];

  const filtered = activeCategory === 'All' ? addresses : addresses.filter(a => a.type === activeCategory);

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Categorized Address Hub</h2>

        <div className="flex gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <motion.div key={item.id} layout className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700">
              <span className="text-xs uppercase font-bold text-indigo-400">{item.type}</span>
              <h3 className="text-lg font-bold text-white mt-1">{item.name}</h3>
              <p className="text-sm text-slate-300 mt-2">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook16;
