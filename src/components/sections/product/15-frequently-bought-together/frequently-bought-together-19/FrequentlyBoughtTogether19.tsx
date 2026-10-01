import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GripHorizontal, Check, Plus, ShoppingBag, Sparkles, ChevronUp, Mic, Sun, Video } from 'lucide-react';

export default function FrequentlyBoughtTogether19({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1, 2]); // Mic & Ring light default selected
  const [isOpen, setIsOpen] = useState(false);

  const mainCamera = {
    name: "4K Vlogging Mirrorless Camera",
    price: 799,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    desc: "4K 60fps Flip Screen Creator Camera"
  };

  const items = [
    { 
      id: 1, 
      name: "Directional Vlog Mic", 
      price: 129, 
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80",
      desc: "Shotgun mic with deadcat windscreen",
      icon: <Mic className="w-4 h-4 text-emerald-400" />
    },
    { 
      id: 2, 
      name: "Bi-Color LED Ring Light", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&auto=format&fit=crop&q=80",
      desc: "Adjustable 3200K-5600K ring light",
      icon: <Sun className="w-4 h-4 text-amber-400" />
    },
    { 
      id: 3, 
      name: "Flexi-Leg Mini Tripod", 
      price: 49, 
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
      desc: "Heavy-duty 360° ballhead tripod",
      icon: <Video className="w-4 h-4 text-cyan-400" />
    },
  ];

  const total = mainCamera.price + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-6 md:p-8 min-h-[740px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center z-10 max-w-xl mt-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-2 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <Sparkles size={14} className="text-blue-400" />
          <span className="text-blue-300 font-semibold text-xs tracking-wider uppercase">Vlogging Master Kit</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Pro Creator Setup</h2>
        <p className="text-slate-400 text-sm mt-1">Tap accessories below to mount them onto your core setup.</p>
      </div>

      {/* Main Product Showcase Node */}
      <div className="relative w-full max-w-lg flex flex-col items-center justify-center my-4 z-10">
        
        {/* Core Camera Circle with Real Image */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-blue-500/40 p-2 shadow-[0_0_50px_rgba(59,130,246,0.25)] bg-slate-900 overflow-hidden flex items-center justify-center group">
          <img 
            src={mainCamera.image} 
            alt={mainCamera.name} 
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Clear Un-Truncated Camera Info Badge Below Image */}
        <div className="mt-4 text-center z-10 bg-slate-900/90 border border-blue-500/30 px-5 py-2.5 rounded-2xl backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-2 py-0.5 rounded-md border border-blue-500/30">
              Core Unit
            </span>
            <span className="text-sm font-extrabold text-emerald-400">${mainCamera.price}</span>
          </div>
          <h3 className="text-sm md:text-base font-extrabold text-white leading-snug">{mainCamera.name}</h3>
        </div>

        {/* Orbiting Mounted Badges for Selected Add-ons (TOP HEMISPHERE: ZERO OVERLAP!) */}
        {items.map((item, i) => {
          const isSel = selected.includes(item.id);
          if (!isSel) return null;

          // Angles: Top-Center (-90°), Top-Right (-25°), Top-Left (-155°)
          const angles = [-90, -25, -155];
          const angle = (angles[i % 3]) * (Math.PI / 180);
          const r = 175;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;

          return (
            <motion.div 
              key={item.id}
              initial={{ scale: 0, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1, x, y }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute w-28 bg-slate-900/95 border border-blue-400/70 rounded-2xl flex flex-col items-center p-2.5 shadow-[0_0_25px_rgba(59,130,246,0.4)] backdrop-blur-2xl z-20"
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-800 border border-white/10 mb-1.5 shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] font-bold text-white text-center leading-snug w-full px-0.5 whitespace-normal">
                {item.name}
              </span>
              <span className="text-[11px] font-extrabold text-emerald-400 mt-1">+${item.price}</span>
            </motion.div>
          );
        })}

      </div>

      {/* Drawer Container (ALWAYS FULLY VISIBLE, ZERO CUTOFF!) */}
      <motion.div 
        className="z-30 w-full max-w-3xl bg-slate-900/95 border border-white/10 rounded-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden mt-2"
        animate={{ height: isOpen ? 'auto' : '88px' }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      >
        {/* Drawer Header Toggle Bar */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[88px] px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.03] transition-colors border-b border-white/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <GripHorizontal size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">Bundle Add-ons ({selected.length})</h4>
                <span className="text-[10px] font-semibold text-blue-400 bg-blue-950 px-2 py-0.5 rounded-full border border-blue-500/30 uppercase">
                  {isOpen ? 'Tap to Close' : 'Tap to Expand'}
                </span>
              </div>
              <p className="text-xs text-slate-400">Customize your production kit</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase font-medium block">Total Price</span>
              <span className="text-xl font-extrabold text-emerald-400">${total}</span>
            </div>
            <div className={`w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronUp size={18} />
            </div>
          </div>
        </div>

        {/* Drawer Inner Content List */}
        <div className="p-6 flex flex-col gap-3">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div 
                key={item.id} 
                onClick={() => toggle(item.id)}
                className={`p-3.5 rounded-2xl cursor-pointer flex justify-between items-center transition-all border ${
                  isSel 
                    ? 'bg-blue-950/40 border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                    isSel ? 'bg-blue-500 text-slate-950' : 'bg-slate-800 text-slate-500 border border-white/10'
                  }`}>
                    <Check size={13} className={isSel ? 'opacity-100 font-extrabold' : 'opacity-0'} />
                  </div>

                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h5 className="font-bold text-white text-xs truncate">{item.name}</h5>
                      {item.icon}
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{item.desc}</p>
                  </div>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span className="font-extrabold text-sm text-emerald-400">+${item.price}</span>
                </div>
              </motion.div>
            );
          })}

          <button className="w-full mt-2 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all transform hover:scale-[1.01]">
            <ShoppingBag size={18} /> Confirm Vlogging Bundle (${total})
          </button>
        </div>

      </motion.div>

    </div>
  );
}
