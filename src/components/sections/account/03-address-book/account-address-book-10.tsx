import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export function AccountAddressBook10() {
  const [activeIndex, setActiveIndex] = useState(0);

  const addresses = [
    { id: '1', title: 'Main Villa', recipient: 'Alex Morgan', street: '742 Evergreen Terrace', city: 'Springfield, IL', tag: 'Primary' },
    { id: '2', title: 'Tech Hub', recipient: 'Alex Morgan', street: '100 Innovation Way', city: 'San Francisco, CA', tag: 'Work' },
    { id: '3', title: 'Seaside Suite', recipient: 'Alex Morgan', street: '88 Ocean Drive', city: 'Miami, FL', tag: 'Vacation' },
    { id: '4', title: 'Design Office', recipient: 'Alex Morgan', street: '456 Creative Blvd', city: 'Austin, TX', tag: 'Studio' }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % addresses.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + addresses.length) % addresses.length);

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-between mb-10 px-4">
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Interactive Menu</span>
            <h2 className="text-3xl font-bold text-white mt-1">Address Carousel</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={handlePrev} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 py-6">
          {addresses.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                animate={{
                  scale: isSelected ? 1 : 0.88,
                  opacity: isSelected ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className={`w-[300px] shrink-0 p-6 rounded-3xl cursor-pointer text-left border transition-all shadow-xl ${
                  isSelected ? 'bg-indigo-600/20 border-indigo-500 backdrop-blur-xl' : 'bg-slate-800/50 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase font-bold text-indigo-400">{item.tag}</span>
                  {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-2 font-medium">{item.recipient}</p>
                <p className="text-xs text-slate-400 mt-1">{item.street}</p>
                <p className="text-xs text-slate-400">{item.city}</p>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-end">
                  <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                    Select Location &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook10;
