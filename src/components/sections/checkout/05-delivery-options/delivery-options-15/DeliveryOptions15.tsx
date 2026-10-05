import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Truck, ArrowRight, Box } from 'lucide-react';

export function DeliveryOptions15({ data }: { data?: any }) {
  const [selected, setSelected] = useState('express');

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-4, 4]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-2">
              <Box className="w-3.5 h-3.5" /> 3D Parcel Tier
            </div>
            <h2 className="text-2xl font-bold text-white">Shipping Options Container</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">Tilt interactive</span>
        </div>

        <div className="space-y-4">
          <div
            onClick={() => setSelected('standard')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'standard' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Standard Ground (3-5 Days)</span>
            <span className="text-xs font-bold text-cyan-400">Free</span>
          </div>

          <div
            onClick={() => setSelected('express')}
            className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
              selected === 'express' ? 'bg-slate-950 border-cyan-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <span className="text-xs font-bold">Express Air (1-2 Days)</span>
            <span className="text-xs font-bold text-cyan-400">$14.99</span>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              <span>Confirm Speed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DeliveryOptions15;