import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Copy, Stamp } from 'lucide-react';

const mockAddresses = [
  {
    id: 'env-1',
    label: 'AIRMAIL PARCEL DISPATCH #01',
    name: 'ALEX MORGAN',
    street: '450 Fashion Avenue, Penthouse 14B',
    city: 'New York, NY 10001',
    country: 'United States of America',
    tracking: 'US-NYC-99401-AIR',
    isDefault: true,
    doorman: '24/7 Doorman authorized to accept signed courier parcels.',
    stampColor: 'border-red-500/80 text-red-400 bg-red-950/40'
  },
  {
    id: 'env-2',
    label: 'COMMERCIAL DISPATCH #02',
    name: 'ALEX MORGAN // STUDIO HQ',
    street: '88 Wythe Avenue, Suite 402',
    city: 'Brooklyn, NY 11211',
    country: 'United States of America',
    tracking: 'US-BKN-49020-STUDIO',
    isDefault: false,
    doorman: 'Freight elevator gate passcode #4902 active during business hours.',
    stampColor: 'border-blue-500/80 text-blue-400 bg-blue-950/40'
  },
  {
    id: 'env-3',
    label: 'SEASONAL COURIER DESTINATION',
    name: 'ALEX MORGAN',
    street: '142 Ocean Drive',
    city: 'East Hampton, NY 11937',
    country: 'United States of America',
    tracking: 'US-HTN-88120-VILLA',
    isDefault: false,
    doorman: 'Leave at side porch entrance if perimeter gate unlocked.',
    stampColor: 'border-emerald-500/80 text-emerald-400 bg-emerald-950/40'
  }
];

export const AccountAddressBook1: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full bg-[#141210] text-[#f4efe6] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl relative overflow-hidden">
      {/* Airmail Stripe Accent Bar along the top */}
      <div className="h-3 w-full rounded-t-2xl bg-[repeating-linear-gradient(45deg,#dc2626,#dc2626_12px,#f4efe6_12px,#f4efe6_24px,#2563eb_24px,#2563eb_36px,#f4efe6_36px,#f4efe6_48px)] mb-8 opacity-80"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-neutral-800 mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-amber-300/80 font-mono">POSTAL REGISTRY // AIRMAIL EDITION</span>
          <h1 className="text-3xl font-serif text-[#f4efe6] mt-1">Airmail Envelope Destinations</h1>
        </div>
        <button className="px-5 py-2.5 bg-[#f4efe6] text-[#141210] font-mono text-xs font-bold uppercase rounded-full hover:bg-amber-200 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Airmail Address
        </button>
      </div>

      {/* Main Masked Title */}
      <div className="mb-10 overflow-hidden">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight font-normal uppercase text-[#f4efe6]">
            COURIER PARCEL <span className="italic font-light text-amber-200/90">& ENVELOPE STAMPS</span>
          </h2>
        </motion.div>
        <p className="text-neutral-400 text-sm mt-2 font-mono">
          Official postal registry for Alex Morgan. Priority parcel stamps & delivery passkeys.
        </p>
      </div>

      {/* Asymmetric Postal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {mockAddresses.map((addr, idx) => (
          <motion.div
            key={addr.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.7 }}
            className={`lg:col-span-${idx === 0 ? '6' : '3'} p-7 bg-[#1c1a17] border rounded-3xl relative overflow-hidden flex flex-col justify-between transition-all ${addr.isDefault ? 'border-amber-400/80 shadow-2xl shadow-amber-500/5' : 'border-neutral-800 hover:border-neutral-700'}`}
          >
            {/* Postal Stamp Replica */}
            <div className={`absolute top-6 right-6 p-2.5 rounded-lg border-2 border-dashed ${addr.stampColor} flex flex-col items-center justify-center text-center shadow-md`}>
              <Stamp className="w-5 h-5 mb-0.5" />
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider">AIRMAIL</span>
              <span className="text-[8px] font-mono opacity-80">PARCEL</span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 block mb-3">
                {addr.label}
              </span>

              <h3 className="text-xl font-serif font-bold text-white mb-2">{addr.name}</h3>
              <p className="text-xs text-neutral-300 font-mono leading-relaxed">{addr.street}</p>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">{addr.city}</p>
              <p className="text-xs text-neutral-400 font-mono">{addr.country}</p>

              <div className="mt-4 p-3 bg-[#12100e] rounded-xl border border-neutral-800 text-[11px] text-neutral-400 font-mono">
                <span className="text-amber-300 text-[10px] uppercase font-bold block mb-0.5">Courier Passkey & Instructions:</span>
                {addr.doorman}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex justify-between items-center text-xs font-mono">
              <span className="text-neutral-400 text-[10px]">{addr.tracking}</span>
              <button 
                onClick={() => handleCopy(addr.id, `${addr.street}, ${addr.city}`)}
                className="text-amber-300 hover:underline flex items-center gap-1 font-bold"
              >
                <Copy className="w-3.5 h-3.5" /> {copiedId === addr.id ? 'COPIED!' : 'COPY ADDRESS'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
