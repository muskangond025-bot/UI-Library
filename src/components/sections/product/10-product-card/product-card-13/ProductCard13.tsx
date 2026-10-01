import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductCard13({ data }: { data?: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none perspective-1000">
      
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative cursor-pointer group"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-400 font-extrabold text-xs rounded-full flex items-center gap-1.5">
            <Sparkles size={12} /> 3D Tilt Experience
          </span>
        </div>

        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-950 mb-4 border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80" 
            alt="Gold Studio Headphones" 
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Titanium Gold Studio Pro</h3>
        <p className="text-xs text-slate-400 mb-4">Precision 50mm Beryllium Drivers • Active ANC</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-amber-400">$349</span>
          </div>

          <button className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95">
            <ShoppingBag size={16} /> Buy Headphones
          </button>
        </div>

      </motion.div>

    </div>
  );
}
