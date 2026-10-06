import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Building, Home } from 'lucide-react';

const mockNodes = [
  { id: 'residence', title: 'Residence', icon: Home, label: 'Primary Penthouse', detail: '450 Fashion Ave, PH 14B • New York, NY 10001', color: 'border-blue-500 text-blue-400 bg-blue-500/10' },
  { id: 'studio', title: 'Studio HQ', icon: Building, label: 'Design Studio', detail: '88 Wythe Ave, Suite 402 • Brooklyn, NY 11211', color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10' },
  { id: 'vacation', title: 'Retreat', icon: MapPin, label: 'East Hampton Villa', detail: '142 Ocean Drive • East Hampton, NY 11937', color: 'border-rose-500 text-rose-400 bg-rose-500/10' },
  { id: 'add', title: 'Add New', icon: Plus, label: 'Register New Destination', detail: 'Add new shipping or billing address location', color: 'border-amber-500 text-amber-400 bg-amber-500/10' },
];

export const AccountAddressBook13: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('residence');

  const selectedNode = mockNodes.find(n => n.id === activeNode)!;

  return (
    <div className="w-full bg-[#0b0c10] text-[#c5c6c7] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between">
      {/* Title */}
      <div className="pb-6 border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">RADIAL ORBIT NAVIGATION</span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Circular Address Hub</h1>
      </div>

      {/* Main Orbital Avatar Centerpiece */}
      <div className="my-10 flex flex-col items-center justify-center relative">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
          {/* SVG Orbit Ring */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#1f2833" strokeWidth="2" strokeDasharray="6 6" />
            <motion.circle 
              cx="50%" 
              cy="50%" 
              r="42%" 
              fill="none" 
              stroke="#66fcf1" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </svg>

          {/* Central Avatar */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#66fcf1] shadow-2xl relative z-10 flex flex-col items-center justify-center bg-neutral-900 text-center p-2">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="Alex Morgan" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* 4 Orbit Buttons */}
          {mockNodes.map((node, index) => {
            const angle = (index / mockNodes.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 135;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeNode === node.id;
            const Icon = node.icon;

            return (
              <motion.button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                whileHover={{ scale: 1.2 }}
                className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-xl ${isActive ? `${node.color} scale-110 ring-4 ring-[#66fcf1]/30` : 'border-neutral-700 bg-neutral-900 text-neutral-400 hover:border-neutral-500'}`}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <span className="text-xs font-mono uppercase text-[#66fcf1]">{selectedNode.title} Destination</span>
              <h3 className="text-xl font-bold text-white mt-0.5">{selectedNode.label}</h3>
              <p className="text-xs text-neutral-300 mt-1 font-mono">{selectedNode.detail}</p>
            </div>
            <button className="px-5 py-2 bg-[#66fcf1] text-black font-bold font-mono text-xs rounded-full hover:bg-white transition-colors">
              Manage Location →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
