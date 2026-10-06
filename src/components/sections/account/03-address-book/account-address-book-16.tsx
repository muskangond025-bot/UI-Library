import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const mockCells = [
  { idx: '01', title: 'PRIMARY RESIDENCE', subtitle: '450 Fashion Ave, PH 14B', detail: 'New York, NY 10001 • Default Location', action: 'Edit Destination' },
  { idx: '02', title: 'DESIGN STUDIO HQ', subtitle: '88 Wythe Ave, Suite 402', detail: 'Brooklyn, NY 11211 • Commercial Passkey', action: 'Manage Studio' },
  { idx: '03', title: 'HAMPTONS RETREAT', subtitle: '142 Ocean Drive', detail: 'East Hampton, NY 11937 • Seasonal Villa', action: 'Manage Retreat' },
  { idx: '04', title: 'NEW LOCATION', subtitle: 'Register New Destination', detail: 'Add new courier delivery location', action: 'Create Location' },
];

export const AccountAddressBook16: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <div className="w-full bg-[#f4f4f0] text-[#111111] min-h-[750px] p-6 sm:p-12 font-mono border border-neutral-400 rounded-3xl">
      {/* Swiss Architectural Grid Header */}
      <div className="flex justify-between items-end pb-8 border-b-2 border-black mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-bold">[ SYSTEM INDEX // 03 ]</span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mt-1 uppercase">SWISS ADDRESS GRID</h1>
        </div>
        <div className="text-xs font-bold text-neutral-600">CLIENT: ALEX MORGAN</div>
      </div>

      {/* 2x2 Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black p-px rounded-2xl overflow-hidden">
        {mockCells.map((cell) => {
          const isHovered = hoveredCell === cell.idx;
          return (
            <motion.div
              key={cell.idx}
              onMouseEnter={() => setHoveredCell(cell.idx)}
              onMouseLeave={() => setHoveredCell(null)}
              className={`p-8 bg-[#f4f4f0] transition-colors duration-300 relative cursor-pointer flex flex-col justify-between min-h-[240px] ${isHovered ? 'bg-black text-[#f4f4f0]' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-sm font-bold ${isHovered ? 'text-amber-400' : 'text-neutral-500'}`}>
                  [ {cell.idx} ]
                </span>
                <span className="text-xs font-bold tracking-wider">{cell.title}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold uppercase mt-4">{cell.subtitle}</h3>
                <p className={`text-xs mt-1 font-sans ${isHovered ? 'text-neutral-400' : 'text-neutral-600'}`}>{cell.detail}</p>
              </div>

              <div className="pt-4 border-t border-current flex justify-between items-center text-xs font-bold mt-6">
                <span>{cell.action}</span>
                <ArrowUpRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-1 -translate-y-1 text-amber-400' : ''}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
