import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles, Zap, Shield, Battery, Radio } from 'lucide-react';

export default function FrequentlyBoughtTogether4({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // default selected accessories
  const [hovered, setHovered] = useState<number | null>(null);

  const main = { name: "Pro Ultra Watch", price: 799, category: "Titanium Edition", image: "⌚" };

  const accessories = [
    { id: 1, name: "Milanese Loop Strap", price: 99, angle: 0, icon: <Radio size={18} className="text-cyan-400" />, desc: "Magnetic stainless steel mesh" },
    { id: 2, name: "MagSafe Fast Charger", price: 49, angle: 120, icon: <Battery size={18} className="text-emerald-400" />, desc: "15W wireless dock" },
    { id: 3, name: "Sapphire Armor Glass", price: 29, angle: 240, icon: <Shield size={18} className="text-violet-400" />, desc: "9H scratch protection" }
  ];

  const toggleAccessory = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const totalPrice = main.price + accessories.filter(a => selected.includes(a.id)).reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-8 min-h-[720px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Header */}
      <div className="text-center z-10 max-w-lg mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Zap size={14} className="text-cyan-400" />
          <span className="text-cyan-300 font-semibold text-xs tracking-wider uppercase">Magnetic Ecosystem</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Complete Your Setup</h2>
        <p className="text-slate-400 text-sm mt-1">Hover & tap orbiting accessories to connect them into your bundle.</p>
      </div>

      {/* Orbit Cluster Stage */}
      <div className="relative w-full max-w-xl h-[380px] flex items-center justify-center my-4 z-20">
        
        {/* Pulsing Orbit Rings */}
        <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/20 animate-pulse pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-white/10 pointer-events-none" />

        {/* SVG Connecting Magnetic Rays */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {accessories.map((acc) => {
            const isSel = selected.includes(acc.id);
            const rad = acc.angle * (Math.PI / 180);
            const r = 145;
            const cx = 288; // center X (576/2)
            const cy = 190; // center Y (380/2)
            const x2 = cx + Math.cos(rad) * r;
            const y2 = cy + Math.sin(rad) * r;

            return (
              <motion.line
                key={acc.id}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke={isSel ? "url(#cyan-gradient)" : "rgba(255, 255, 255, 0.1)"}
                strokeWidth={isSel ? "2.5" : "1"}
                strokeDasharray={isSel ? "none" : "4 4"}
                animate={{ strokeWidth: isSel ? 2.5 : 1 }}
              />
            );
          })}
          <defs>
            <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Main Product Node */}
        <motion.div 
          className="w-44 h-44 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/40 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] z-20 relative cursor-default"
          whileHover={{ scale: 1.03 }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/5 animate-ping pointer-events-none" style={{ animationDuration: '4s' }} />
          <span className="text-3xl mb-1 filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">{main.image}</span>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{main.name}</span>
          <span className="text-xl font-extrabold text-white mt-0.5">${main.price}</span>
          <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-widest mt-1 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            Core Unit
          </span>
        </motion.div>

        {/* Orbiting Magnetic Nodes */}
        {accessories.map((acc) => {
          const isSel = selected.includes(acc.id);
          const isHovered = hovered === acc.id;
          const rad = acc.angle * (Math.PI / 180);
          const r = 145;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <motion.div
              key={acc.id}
              className={`absolute rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border backdrop-blur-xl ${
                isSel
                  ? 'bg-slate-900/90 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.3)] text-white'
                  : 'bg-slate-900/60 border-white/10 hover:border-white/30 text-slate-400'
              }`}
              style={{ top: 'calc(50% - 40px)', left: 'calc(50% - 40px)' }}
              animate={{ 
                x, y,
                scale: isHovered ? 1.15 : isSel ? 1.05 : 1
              }}
              onClick={() => toggleAccessory(acc.id)}
              onHoverStart={() => setHovered(acc.id)}
              onHoverEnd={() => setHovered(null)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center relative p-2">
                {/* Selection Check Badge */}
                <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-colors shadow-md ${
                  isSel ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-500 border border-white/10'
                }`}>
                  {isSel ? <Check size={13} className="font-extrabold" /> : <Plus size={13} />}
                </div>

                <div className="mb-1">{acc.icon}</div>
                <span className="font-bold text-[10px] text-center leading-tight truncate max-w-[65px]">
                  {acc.name}
                </span>
                <span className={`text-[11px] font-extrabold mt-0.5 ${isSel ? 'text-cyan-400' : 'text-slate-400'}`}>
                  +${acc.price}
                </span>
              </div>

              {/* Hover Floating Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 bg-slate-900/95 border border-cyan-500/40 p-2.5 rounded-xl text-center shadow-2xl z-40 backdrop-blur-2xl pointer-events-none"
                  >
                    <div className="text-xs font-bold text-white">{acc.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{acc.desc}</div>
                    <div className="text-[10px] font-bold text-cyan-400 mt-1 uppercase">
                      {isSel ? 'Click to Remove' : 'Click to Add'}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-xl z-20 bg-slate-900/80 border border-white/10 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Sparkles size={22} />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">
              Ecosystem Total ({1 + selected.length} Items)
            </div>
            <div className="text-2xl font-extrabold text-white flex items-baseline gap-2">
              <span>${totalPrice}</span>
              {selected.length > 0 && (
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Save ${selected.length * 10}
                </span>
              )}
            </div>
          </div>
        </div>

        <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Add Cluster to Cart
        </button>
      </div>

    </div>
  );
}
