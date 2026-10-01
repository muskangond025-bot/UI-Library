import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Plus, ShoppingBag, Sparkles, Headphones, ShieldCheck, Cable, HardDrive, ChevronRight } from 'lucide-react';

export default function FrequentlyBoughtTogether10({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([0, 1]); // Main item + Case
  const [activeTab, setActiveTab] = useState<number>(0);

  const products = [
    { 
      id: 0, 
      name: "Studio Pro Wireless ANC", 
      price: 349, 
      category: "Hero Device",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
      desc: "Lossless Spatial Audio with Active Noise Cancelling & 40h Battery",
      features: ["Custom 40mm Drivers", "Bluetooth 5.3 + ANC", "Ultra Comfort Memory Foam"],
      icon: <Headphones className="w-5 h-5 text-indigo-400" />
    },
    { 
      id: 1, 
      name: "Rigid Hard-Shell EVA Case", 
      price: 49, 
      category: "Protection",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&auto=format&fit=crop&q=80",
      desc: "Shockproof hardshell travel case with velvet interior & cable vault",
      features: ["Water-resistant Shell", "Custom Molded Interior", "Carabiner Clip Included"],
      icon: <HardDrive className="w-5 h-5 text-purple-400" />
    },
    { 
      id: 2, 
      name: "Gold-Plated Braided Audio Cable", 
      price: 29, 
      category: "Connectivity",
      image: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=700&auto=format&fit=crop&q=80",
      desc: "Oxygen-free copper 3.5mm aux cable with inline mic control",
      features: ["Tangle-free Nylon Braiding", "24k Gold Connectors", "Built-in HD Microphone"],
      icon: <Cable className="w-5 h-5 text-cyan-400" />
    },
    { 
      id: 3, 
      name: "Cooling-Gel Replacement Ear Pads", 
      price: 39, 
      category: "Comfort",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80",
      desc: "Breathable velour cushions with cooling gel layer for long sessions",
      features: ["Heat-Dissipating Gel", "Ergonomic Contour", "Snap-lock Mounting"],
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  const toggle = (id: number) => {
    if (id === 0) return; // Main item locked
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = products
    .filter(p => selected.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <div className="p-6 md:p-10 min-h-[750px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-indigo-300 font-semibold text-xs tracking-wider uppercase">Custom Bundle Builder</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Interactive Kit Inspector</h2>
          <p className="text-slate-400 text-sm mt-1">Explore each accessory in detail and add them to your order.</p>
        </div>

        <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          <span className="text-xs font-medium text-slate-400 px-3">Selected:</span>
          <span className="text-xs font-bold text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-xl border border-indigo-500/30">
            {selected.length} / {products.length} Products
          </span>
        </div>
      </div>

      {/* Main Split Section: Left Showcase + Right Accordion Inspector */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 z-10 items-stretch">
        
        {/* Left Side: Dynamic Featured Hero Image Box */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-6 relative overflow-hidden shadow-2xl group">
          <div className="flex items-center justify-between mb-4 z-10">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30 flex items-center gap-1.5">
              {activeProduct.icon} {activeProduct.category}
            </span>
            <span className="text-xl font-extrabold text-white">${activeProduct.price}</span>
          </div>

          {/* Large Hero Image */}
          <div className="relative w-full h-64 rounded-2xl overflow-hidden my-2 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                src={activeProduct.image}
                alt={activeProduct.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>

          {/* Hero Content Footer */}
          <div className="mt-4 z-10">
            <h3 className="text-xl font-extrabold text-white">{activeProduct.name}</h3>
            <p className="text-xs text-slate-400 mt-1">{activeProduct.desc}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {activeProduct.features.map((feat, idx) => (
                <span key={idx} className="text-[10px] font-medium text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Stack List / Inspector Controls */}
        <div className="lg:col-span-6 flex flex-col gap-3.5 justify-center">
          {products.map((item) => {
            const isSel = selected.includes(item.id);
            const isMain = item.id === 0;
            const isActiveTab = activeTab === item.id;

            return (
              <motion.div
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  toggle(item.id);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 backdrop-blur-xl ${
                  isActiveTab
                    ? 'bg-indigo-950/40 border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.2)] ring-1 ring-indigo-500/50'
                    : isSel
                    ? 'bg-white/5 border-white/10 hover:border-white/20'
                    : 'bg-white/[0.02] border-white/5 opacity-50'
                }`}
                whileHover={{ x: 6 }}
              >
                {/* Selection Checkbox */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  isSel ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-500 border border-white/10'
                }`}>
                  <Check size={14} className={isSel ? 'opacity-100 font-bold' : 'opacity-0'} />
                </div>

                {/* Small Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 border border-white/10 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Text Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                    {isMain && (
                      <span className="text-[9px] font-bold text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded-md border border-indigo-500/30 uppercase shrink-0">
                        Base
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{item.desc}</p>
                </div>

                {/* Price & Expand Icon */}
                <div className="text-right shrink-0 flex items-center gap-3">
                  <span className="text-base font-extrabold text-white">${item.price}</span>
                  <ChevronRight size={16} className={`transition-transform text-slate-400 ${isActiveTab ? 'rotate-90 text-indigo-400' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="w-full max-w-5xl z-10 bg-slate-900/90 border border-white/10 p-5 rounded-3xl backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div>
          <div className="text-xs text-slate-400 font-medium">Complete Studio Setup Subtotal ({selected.length} Products)</div>
          <div className="text-3xl font-extrabold text-white flex items-baseline gap-2">
            <span className="text-indigo-400">${total}</span>
            {selected.length > 1 && (
              <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                15% Bundle Savings Applied
              </span>
            )}
          </div>
        </div>

        <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:brightness-110 text-white font-bold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingBag size={18} /> Buy Studio Bundle (${total})
        </button>
      </div>

    </div>
  );
}
