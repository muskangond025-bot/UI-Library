import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plus, Copy, Edit2 } from 'lucide-react';

const mockAddresses = [
  {
    id: 'neu-1',
    title: 'PRIMARY DISPATCH',
    recipient: 'Alex Morgan',
    street: '450 Fashion Ave, Penthouse 14B',
    city: 'New York, NY 10001',
    isDefault: true,
    passkey: 'Doorman Chime #14B Active',
  },
  {
    id: 'neu-2',
    title: 'STUDIO HQ WORKSPACE',
    recipient: 'Alex Morgan // Studio',
    street: '88 Wythe Ave, Suite 402',
    city: 'Brooklyn, NY 11211',
    isDefault: false,
    passkey: 'Elevator Code #4902 Active',
  },
  {
    id: 'neu-3',
    title: 'HAMPTONS VILLAS',
    recipient: 'Alex Morgan',
    street: '142 Ocean Drive',
    city: 'East Hampton, NY 11937',
    isDefault: false,
    passkey: 'Perimeter Gate Porch Drop',
  }
];

export const AccountAddressBook2: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('neu-1');

  return (
    <div className="w-full bg-[#e0e5ec] text-[#2d3748] min-h-[750px] p-6 sm:p-12 font-sans rounded-3xl space-y-8">
      {/* Neumorphic Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-300">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">NEUMORPHIC SOFT TACTILE UI</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight mt-1">Tactile Address Directory</h1>
        </div>

        <button 
          className="px-5 py-3 rounded-2xl font-mono text-xs font-bold text-gray-700 bg-[#e0e5ec] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-indigo-600" /> Add Destination
        </button>
      </div>

      {/* 3 Neumorphic Soft Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockAddresses.map((addr) => {
          const isSelected = activeId === addr.id;
          return (
            <motion.div
              key={addr.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveId(addr.id)}
              className={`p-7 rounded-3xl bg-[#e0e5ec] cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[320px] ${isSelected ? 'shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] border-2 border-indigo-500/50' : 'shadow-[9px_9px_18px_#b8b9be,-9px_-9px_18px_#ffffff]'}`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {addr.title}
                  </span>
                  {addr.isDefault && (
                    <span className="px-3 py-1 text-[10px] font-mono font-bold text-indigo-700 bg-[#e0e5ec] rounded-full shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff]">
                      DEFAULT
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-800">{addr.recipient}</h3>
                <p className="text-xs text-gray-600 mt-2 font-mono">{addr.street}</p>
                <p className="text-xs text-gray-500 font-mono mt-0.5">{addr.city}</p>

                <div className="mt-4 p-3 rounded-xl bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] text-[11px] font-mono text-gray-600">
                  <span className="text-indigo-600 font-bold block mb-0.5">Gate Access Passkey:</span>
                  {addr.passkey}
                </div>
              </div>

              {/* Neumorphic Tactile Buttons */}
              <div className="pt-6 border-t border-gray-300/80 flex justify-between items-center gap-3">
                <button className="flex-1 py-2.5 rounded-xl font-mono text-[11px] font-bold text-gray-700 bg-[#e0e5ec] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#b8b9be,inset_-2px_-2px_5px_#ffffff] transition-all flex justify-center items-center gap-1.5">
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <button className="flex-1 py-2.5 rounded-xl font-mono text-[11px] font-bold text-indigo-600 bg-[#e0e5ec] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#b8b9be,inset_-2px_-2px_5px_#ffffff] transition-all flex justify-center items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5" /> Copy Zip
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
