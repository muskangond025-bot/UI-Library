import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function ProductBundles13({ data }: { data?: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none perspective-1000">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          13. 3D PARALLAX TILT WORKSTATION BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Ergonomic Setup Suite</h2>
      </div>

      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-6 z-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer"
      >
        <img src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80" alt="Desk" className="w-full h-52 object-cover rounded-2xl mb-4" />

        <h3 className="font-extrabold text-xl text-white">Walnut Desk + Dual Arm + Leather Mat</h3>
        <p className="text-xs text-slate-400 mt-1 mb-4">Complete 3-piece ergonomic setup with free express shipping.</p>

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-amber-400">$837</span>
            <span className="text-xs text-slate-500 line-through block">$1,037</span>
          </div>
          <button className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Buy Suite
          </button>
        </div>
      </motion.div>

    </div>
  );
}
