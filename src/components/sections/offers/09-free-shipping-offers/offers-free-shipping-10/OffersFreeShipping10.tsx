import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping10({ section }: SectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 font-sans text-white border-y border-indigo-900/50">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        
        <div className="space-y-3 max-w-lg mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-mono font-bold uppercase tracking-widest">
            CLAYMORPHIC VIP PASS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Unlimited Free Delivery VIP Pass
          </h2>
          <p className="text-slate-300 text-sm">
            Unlock guaranteed zero shipping fees on every single order forever with our exclusive digital pass.
          </p>
        </div>

        {/* Soft 3D / Claymorphic Digital Pass */}
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{ rotateX: isHovered ? 5 : 0, rotateY: isHovered ? -5 : 0, scale: isHovered ? 1.02 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="max-w-md mx-auto bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(99,102,241,0.4)] text-left relative overflow-hidden border-4 border-white/20 cursor-pointer"
        >
          {/* Holographic Shimmer Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none -mr-20 -mt-20" />

          <div className="space-y-8 relative z-10">
            {/* Top Pass Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Crown className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 block">MEMBERSHIP PERK</span>
                  <span className="text-sm font-black text-white block">VIP FREIGHT PASS</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-white text-slate-950 font-black text-xs font-mono uppercase shadow-md">
                $0 FREIGHT
              </span>
            </div>

            {/* Main Pass Title */}
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight block drop-shadow-md">
                ZERO SHIPPING FOREVER
              </span>
              <p className="text-xs text-white/90 font-medium">
                No minimum order threshold • Express 2-Day Air included automatically.
              </p>
            </div>

            {/* Pass Footer Info */}
            <div className="pt-4 border-t border-white/20 flex items-center justify-between font-mono text-xs text-white/90">
              <div>
                <span className="text-[9px] uppercase tracking-wider block opacity-70">PASS HOLDER STATUS</span>
                <span className="font-bold">ACTIVE MEMBER</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] uppercase tracking-wider block opacity-70">SERIAL ID</span>
                <span className="font-bold">#VIP-99402</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="pt-4 flex justify-center">
          <button className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl active:scale-95 transition-all">
            <span>CLAIM YOUR VIP SHIPPING PASS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping10;
