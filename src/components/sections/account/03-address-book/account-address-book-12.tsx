import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const mockData = {
  card: {
    recipient: 'ALEX MORGAN',
    code: 'NY-10001-PH14B',
    type: 'PRIMARY DISPATCH PASS',
    street: '450 FASHION AVE, PH 14B',
    city: 'NEW YORK, NY 10001',
    doorman: '24/7 DOORMAN AUTHORIZED',
  },
  stats: [
    { label: 'Total Saved Destinations', val: '03', detail: '1 Primary, 2 Secondary' },
    { label: 'Gate Access Passkeys', val: '02', detail: '2FA Passcode active' },
    { label: 'USPS Verification', val: '100%', detail: 'Match confirmed' },
    { label: 'Default Express Courier', val: 'ACTIVE', detail: 'Global Priority Courier' },
  ]
};

export const AccountAddressBook12: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotate({ x: -y / 10, y: x / 10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="w-full bg-[#0a0a0c] text-white min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl">
      {/* Title */}
      <div className="flex justify-between items-center pb-6 border-b border-neutral-800 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">CONTROLLED 3D CENTERPIECE</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">3D Gyrocard Address Pass</h1>
        </div>
        <div className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-mono rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> 3D Perspective Enabled
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive 3D Card */}
        <div className="lg:col-span-6 flex justify-center perspective-[1000px]">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-full max-w-md h-[260px] bg-gradient-to-br from-neutral-900 via-amber-950/60 to-neutral-950 p-8 rounded-3xl border-2 border-amber-500/50 shadow-2xl relative flex flex-col justify-between overflow-hidden cursor-pointer group"
          >
            {/* Metallic Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity"></div>

            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300">{mockData.card.type}</span>
                <h3 className="text-lg font-bold text-white tracking-wider mt-1">{mockData.card.recipient}</h3>
              </div>
              <MapPin className="w-8 h-8 text-amber-400" />
            </div>

            <div className="relative z-10 my-2">
              <div className="text-sm font-mono tracking-widest text-white font-bold">{mockData.card.street}</div>
              <div className="text-xs font-mono text-neutral-400">{mockData.card.city}</div>
            </div>

            <div className="flex justify-between items-end relative z-10 pt-4 border-t border-amber-500/30">
              <div>
                <div className="text-[9px] font-mono text-neutral-400 uppercase">Routing ID</div>
                <div className="text-xs font-bold text-amber-200 font-mono">{mockData.card.code}</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-mono text-neutral-400 uppercase">Security</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">{mockData.card.doorman}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Solid Surrounding Stat Panels */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {mockData.stats.map((s, idx) => (
            <div key={idx} className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors">
              <div className="text-xs text-neutral-400 font-mono uppercase">{s.label}</div>
              <div className="text-2xl font-bold text-white mt-2 font-mono">{s.val}</div>
              <div className="text-xs text-neutral-400 mt-1">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
