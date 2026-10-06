import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Award, Star, MapPin } from 'lucide-react';

const mockRadialNodes = [
  { id: 'orders', title: 'Orders', icon: ShoppingBag, count: '18 Total', detail: '3 active shipments • 1 arriving today (#DH-9941)', color: 'border-blue-500 text-blue-400 bg-blue-500/10' },
  { id: 'wishlist', title: 'Wishlist', icon: Heart, count: '14 Saved', detail: '4 items on price drop radar ($180 Wool Blazer)', color: 'border-rose-500 text-rose-400 bg-rose-500/10' },
  { id: 'rewards', title: 'Rewards', icon: Award, count: '3,450 Pts', detail: 'Platinum VIP status • $35 credit voucher ready', color: 'border-amber-500 text-amber-400 bg-amber-500/10' },
  { id: 'reviews', title: 'Reviews', icon: Star, count: '4.9 ★ Avg', detail: '9 published reviews • Top helpful contributor', color: 'border-purple-500 text-purple-400 bg-purple-500/10' },
  { id: 'addresses', title: 'Addresses', icon: MapPin, count: '2 Saved', detail: 'Default: Primary Residence (New York, NY)', color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10' },
];

export const AccountOverview13: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('orders');

  const selectedNode = mockRadialNodes.find(n => n.id === activeNode)!;

  return (
    <div className="w-full bg-[#0b0c10] text-[#c5c6c7] min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between">
      {/* Title */}
      <div className="pb-6 border-b border-neutral-800">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">RADIAL ORBIT NAVIGATION</span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Circular Account Hub</h1>
      </div>

      {/* Main Orbital Avatar Centerpiece */}
      <div className="my-10 flex flex-col items-center justify-center relative">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
          {/* Orbit Line Ring SVG */}
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

          {/* Central Profile Avatar */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#66fcf1] shadow-2xl relative z-10 flex flex-col items-center justify-center bg-neutral-900 text-center p-2">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="Alex Morgan" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* 5 Orbit Buttons around the ring */}
          {mockRadialNodes.map((node, index) => {
            const angle = (index / mockRadialNodes.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 135; // pixel distance from center
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

      {/* Selected Radial Detail Panel */}
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
              <span className="text-xs font-mono uppercase text-[#66fcf1]">{selectedNode.title} Hub</span>
              <h3 className="text-xl font-bold text-white mt-0.5">{selectedNode.count}</h3>
              <p className="text-xs text-neutral-300 mt-1 font-mono">{selectedNode.detail}</p>
            </div>
            <button className="px-5 py-2 bg-[#66fcf1] text-black font-bold font-mono text-xs rounded-full hover:bg-white transition-colors">
              Manage {selectedNode.title} →
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
