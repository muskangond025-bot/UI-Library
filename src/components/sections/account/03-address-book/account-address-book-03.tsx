import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit3 } from 'lucide-react';

const mockAddresses = [
  {
    id: 'brut-1',
    label: 'LABEL #01 // PRIMARY DISPATCH',
    color: 'bg-yellow-300',
    recipient: 'ALEX MORGAN',
    street: '450 FASHION AVE, PH 14B',
    city: 'NEW YORK, NY 10001',
    barcode: '*NY-10001-PH14B*',
    isDefault: true,
  },
  {
    id: 'brut-2',
    label: 'LABEL #02 // STUDIO HQ',
    color: 'bg-cyan-300',
    recipient: 'ALEX MORGAN // STUDIO',
    street: '88 WYTHE AVE, SUITE 402',
    city: 'BROOKLYN, NY 11211',
    barcode: '*BKN-11211-S402*',
    isDefault: false,
  },
  {
    id: 'brut-3',
    label: 'LABEL #03 // COASTAL SITE',
    color: 'bg-pink-300',
    recipient: 'ALEX MORGAN',
    street: '142 OCEAN DRIVE',
    city: 'EAST HAMPTON, NY 11937',
    barcode: '*HTN-11937-VILLA*',
    isDefault: false,
  }
];

export const AccountAddressBook3: React.FC = () => {
  return (
    <div className="w-full bg-[#fefce8] text-black min-h-[750px] p-6 sm:p-12 font-mono border-4 border-black rounded-3xl space-y-8">
      {/* Industrial Caution Strip Top Accent */}
      <div className="h-4 w-full bg-[repeating-linear-gradient(-45deg,#000,#000_15px,#eab308_15px,#eab308_30px)] border-b-4 border-black"></div>

      {/* Brutalist Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b-4 border-black gap-4">
        <div>
          <span className="text-xs uppercase font-black tracking-widest bg-black text-white px-2 py-0.5">INDUSTRIAL SHIPPING LABELS</span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2">SAVED DESTINATIONS</h1>
        </div>

        <button className="px-6 py-3 bg-yellow-400 font-black text-xs uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
          <Plus className="w-4 h-4 stroke-[3]" /> NEW SHIPPING LABEL
        </button>
      </div>

      {/* 3 Brutalist Address Label Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mockAddresses.map((addr) => (
          <motion.div
            key={addr.id}
            whileHover={{ x: -4, y: -4 }}
            className={`p-6 border-4 border-black ${addr.color} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between min-h-[320px] relative`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black uppercase bg-black text-white px-2.5 py-1">
                  {addr.label}
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] font-black uppercase bg-white border-2 border-black px-2 py-0.5">
                    DEFAULT
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black uppercase mt-2">{addr.recipient}</h3>
              <p className="text-xs font-bold mt-2">{addr.street}</p>
              <p className="text-xs font-bold">{addr.city}</p>

              <div className="mt-4 p-3 bg-white border-2 border-black text-center font-mono">
                <div className="text-[10px] font-black text-neutral-500 uppercase">USPS BARCODE ID</div>
                <div className="text-xs font-black tracking-[0.2em] mt-1">{addr.barcode}</div>
              </div>
            </div>

            <div className="pt-6 border-t-4 border-black flex justify-between items-center gap-2 mt-6">
              <button className="px-4 py-2 bg-white font-black text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors flex items-center gap-1">
                <Edit3 className="w-3.5 h-3.5" /> EDIT
              </button>
              <button className="p-2 bg-rose-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-500 transition-colors">
                <Trash2 className="w-4 h-4 text-black" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
