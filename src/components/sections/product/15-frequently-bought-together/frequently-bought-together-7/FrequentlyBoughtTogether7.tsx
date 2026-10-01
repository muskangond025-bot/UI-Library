import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, ShoppingBag, Sparkles, SlidersHorizontal, Shield, Smartphone, Battery, Briefcase } from 'lucide-react';

export default function FrequentlyBoughtTogether7({ data }: { data?: any }) {
  const [assembled, setAssembled] = useState(false);
  const [selectedLayers, setSelectedLayers] = useState<number[]>([1, 2, 3, 4]);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { 
      id: 1, 
      name: "Ultra Clarity Glass Guard", 
      type: "Protection", 
      price: 29, 
      glow: "shadow-[0_10px_30px_rgba(6,182,212,0.15)]",
      desc: "9H Hardness Shatterproof Screen Shield",
      icon: <Shield className="w-5 h-5 text-cyan-600" />
    },
    { 
      id: 2, 
      name: "Flagship Smartphone Pro", 
      type: "Main Device", 
      price: 999, 
      glow: "shadow-[0_15px_40px_rgba(15,23,42,0.25)]",
      desc: "Titanium Chassis with OLED Super Retina Display",
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />
    },
    { 
      id: 3, 
      name: "MagSafe Magnetic Battery Pack", 
      type: "Power", 
      price: 89, 
      glow: "shadow-[0_10px_30px_rgba(16,185,129,0.15)]",
      desc: "5000mAh Ultra-slim Wireless Power Station",
      icon: <Battery className="w-5 h-5 text-emerald-600" />
    },
    { 
      id: 4, 
      name: "Horween Leather Armor Case", 
      type: "Accessory", 
      price: 59, 
      glow: "shadow-[0_10px_30px_rgba(245,158,11,0.15)]",
      desc: "Full-grain Vintage Leather with Metal Buttons",
      icon: "💼"
    },
  ];

  const toggleLayer = (id: number) => {
    setSelectedLayers(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = layers
    .filter(l => selectedLayers.includes(l.id))
    .reduce((sum, l) => sum + l.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[750px] w-full rounded-[2.5rem] bg-gradient-to-b from-slate-50 via-white to-slate-100 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-slate-200/80 shadow-2xl select-none">
      
      {/* Soft Ambient Light Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-400/10 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Top Header Controls */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-2 shadow-sm">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-xs tracking-wider uppercase">Structural Breakdown</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Exploded Architecture</h2>
          <p className="text-slate-500 text-sm mt-1">Inspect each layer of your complete device bundle.</p>
        </div>

        <button 
          onClick={() => setAssembled(!assembled)}
          className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 shadow-xl transition-all hover:scale-105"
        >
          <SlidersHorizontal size={16} className="text-blue-400" />
          {assembled ? "Explode View" : "Assemble Layers"}
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6 z-10">
        
        {/* Left Side: Clean Visual Layer Stack (NO ROTATED TEXT CUTOFF!) */}
        <div className="lg:col-span-6 flex items-center justify-center min-h-[420px] relative bg-white/70 rounded-3xl border border-slate-200/80 p-6 shadow-inner backdrop-blur-md">
          
          <div className="relative w-full max-w-sm h-[360px] flex items-center justify-center">
            {layers.map((layer, i) => {
              const isSelected = selectedLayers.includes(layer.id);
              const isActive = activeLayer === layer.id;
              
              // Y offset logic for exploded vs assembled
              const offsetY = assembled ? (i - 1.5) * 14 : (i - 1.5) * 78;

              return (
                <motion.div
                  key={layer.id}
                  className={`absolute w-72 h-24 rounded-2xl border-2 backdrop-blur-xl transition-all cursor-pointer p-4 flex items-center justify-between ${
                    layer.id === 2 
                      ? 'bg-slate-900 border-slate-700 text-white shadow-2xl' 
                      : 'bg-white border-slate-200 text-slate-800 shadow-lg'
                  } ${layer.glow} ${
                    isActive ? 'ring-2 ring-blue-500 ring-offset-2 scale-105 z-30' : isSelected ? 'opacity-100' : 'opacity-40 border-slate-300'
                  }`}
                  animate={{
                    y: offsetY,
                    scale: isActive ? 1.05 : isSelected ? 1 : 0.94,
                    zIndex: 20 - i
                  }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  onClick={() => toggleLayer(layer.id)}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                      layer.id === 2 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {typeof layer.icon === 'string' ? layer.icon : layer.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                          Layer 0{layer.id}
                        </span>
                        <span className="text-[10px] font-semibold text-blue-600 truncate">{layer.type}</span>
                      </div>
                      <h4 className="text-xs font-bold truncate mt-1">{layer.name}</h4>
                    </div>
                  </div>

                  <div className="text-right shrink-0 ml-3">
                    <span className="text-sm font-extrabold">${layer.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Component Cards List */}
        <div className="lg:col-span-6 flex flex-col gap-3.5">
          {layers.map((layer) => {
            const isSelected = selectedLayers.includes(layer.id);
            const isActive = activeLayer === layer.id;

            return (
              <motion.div
                key={layer.id}
                onClick={() => toggleLayer(layer.id)}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 backdrop-blur-xl ${
                  isActive
                    ? 'bg-blue-50/90 border-blue-500 shadow-md ring-1 ring-blue-500'
                    : isSelected
                    ? 'bg-white border-slate-200 shadow-sm hover:border-blue-300'
                    : 'bg-slate-50/60 border-slate-200/60 opacity-60'
                }`}
                whileHover={{ x: 4 }}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400 border border-slate-300'
                }`}>
                  <Check size={14} className={isSelected ? 'opacity-100 font-bold' : 'opacity-0'} />
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-800 text-xl shrink-0">
                  {typeof layer.icon === 'string' ? layer.icon : layer.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{layer.name}</h4>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 uppercase shrink-0">
                      {layer.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{layer.desc}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-base font-extrabold text-slate-900">${layer.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-5xl z-10 bg-white border border-slate-200/90 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="text-xs text-slate-500 font-medium">Full Stack Bundle Subtotal ({selectedLayers.length} Layers)</div>
          <div className="text-3xl font-extrabold text-slate-900 flex items-baseline gap-2">
            <span>${total}</span>
            {selectedLayers.length === layers.length && (
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                15% Bundle Discount Applied
              </span>
            )}
          </div>
        </div>

        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Buy Assembled Bundle
        </button>
      </div>

    </div>
  );
}
