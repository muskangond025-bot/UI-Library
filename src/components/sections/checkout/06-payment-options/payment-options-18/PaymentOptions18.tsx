import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Sparkles, ShieldCheck, Lock } from 'lucide-react';

export function PaymentOptions18({ data }: { data?: any }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 12, y: x / 12 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold block mb-1">
            18 — GYROSCOPIC 3D GLASS CARD
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Interactive 3D Card Gateway
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive 3D Holographic Card */}
          <div className="lg:col-span-6 flex justify-center perspective-1000">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX: rotate.x, rotateY: rotate.y }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full max-w-sm h-56 rounded-2xl bg-gradient-to-tr from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-500/40 p-6 shadow-2xl relative flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

              <div className="flex justify-between items-center relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> CYBERCARD
                </span>
                <CreditCard className="w-6 h-6 text-slate-300" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="w-11 h-8 rounded bg-gradient-to-r from-amber-400 to-amber-200 shadow-md" />
                <p className="font-mono text-xl tracking-widest text-white drop-shadow">
                  4532 •••• •••• 9920
                </p>
              </div>

              <div className="flex justify-between items-end text-xs font-mono text-slate-300 relative z-10">
                <div>
                  <span className="text-[9px] text-slate-500 block">CARD HOLDER</span>
                  <span>E. MUSK</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block">EXPIRES</span>
                  <span>12/29</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Checkout Controls */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <label className="text-xs text-slate-400 block font-medium">Full Name on Card</label>
              <input type="text" placeholder="ELON MUSK" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-cyan-500 focus:outline-none" />
              <label className="text-xs text-slate-400 block font-medium">CVV Security Code</label>
              <input type="password" placeholder="•••" className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-cyan-500 focus:outline-none font-mono" />
            </div>
            <button className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-lg shadow-cyan-500/10 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Authorize 3D Secure Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions18;
