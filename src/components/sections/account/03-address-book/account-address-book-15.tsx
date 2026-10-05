import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function AccountAddressBook15() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">3D Perspective Card</h2>
        <p className="text-sm text-slate-400 mb-8">Hover over card to experience interactive 3D perspective depth</p>

        <div className="perspective-1000">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 shadow-2xl text-left cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">
                Primary Residence
              </span>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
            <p className="text-sm text-slate-300 mt-2">742 Evergreen Terrace</p>
            <p className="text-xs text-slate-400">Springfield, IL 62704</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook15;
