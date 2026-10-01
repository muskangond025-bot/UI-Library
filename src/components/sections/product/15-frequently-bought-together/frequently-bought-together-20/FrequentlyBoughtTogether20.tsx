import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles, Star, ShieldCheck, Truck } from 'lucide-react';

export default function FrequentlyBoughtTogether20({ data }: { data?: any }) {
  const mainProduct = {
    id: 0,
    name: "Ergonomic Walnut Standing Desk",
    price: 649,
    originalPrice: 799,
    rating: 4.9,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop&q=80",
    badge: "Main Item"
  };

  const addOns = [
    {
      id: 1,
      name: "Leather MagSafe Desk Mat",
      price: 69,
      originalPrice: 89,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80",
      desc: "Waterproof Top-Grain Leather"
    },
    {
      id: 2,
      name: "Aluminum Dual Monitor Arm",
      price: 119,
      originalPrice: 149,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
      desc: "360° Gas-Spring Rotation"
    },
    {
      id: 3,
      name: "Under-Desk Cable Tray Kit",
      price: 39,
      originalPrice: 49,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80",
      desc: "Clean Wire Management System"
    }
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([1, 2]);

  const toggleAddOn = (id: number) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedItems = addOns.filter(item => selectedAddOns.includes(item.id));
  const total = mainProduct.price + selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalOriginal = mainProduct.originalPrice + selectedItems.reduce((acc, curr) => acc + curr.originalPrice, 0);
  const savings = totalOriginal - total;

  return (
    <section className="w-full py-10 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden font-sans select-none">
      
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={14} /> Frequently Bought Together
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Complete Your Workstation Setup
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Bundle these essential accessories with your desk and save up to <span className="text-amber-400 font-bold">${savings}</span>.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300 bg-white/5 px-4 py-2.5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>2-Year Warranty</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5">
              <Truck size={16} className="text-cyan-400" />
              <span>Free Express Shipping</span>
            </div>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          
          {/* Main Product Card */}
          <div className="bg-slate-900/90 rounded-3xl p-4 border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col justify-between relative group">
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider rounded-lg shadow-md">
                Core Item
              </span>
            </div>
            
            <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-800 mb-3 relative">
              <img 
                src={mainProduct.image} 
                alt={mainProduct.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-200">{mainProduct.rating}</span>
                  <span className="text-[11px] text-slate-400">({mainProduct.reviews})</span>
                </div>
                <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">{mainProduct.name}</h3>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-extrabold text-white">${mainProduct.price}</span>
                  <span className="text-xs text-slate-500 line-through">${mainProduct.originalPrice}</span>
                </div>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  Included
                </span>
              </div>
            </div>
          </div>

          {/* Add-on Product Cards */}
          {addOns.map((item) => {
            const isSelected = selectedAddOns.includes(item.id);

            return (
              <motion.div
                key={item.id}
                onClick={() => toggleAddOn(item.id)}
                whileHover={{ y: -4 }}
                className={`rounded-3xl p-4 cursor-pointer transition-all border flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-slate-900/90 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.2)]'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Selection Checkbox Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-blue-500 text-slate-950 shadow-md' : 'bg-slate-800 border border-white/20 text-transparent'
                  }`}>
                    <Check size={14} className="stroke-[3]" />
                  </div>
                </div>

                <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-800 mb-3 relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-slate-200">{item.rating}</span>
                    </div>
                    <h3 className="font-bold text-sm text-white leading-snug line-clamp-2">{item.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{item.desc}</p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-white">+${item.price}</span>
                      <span className="text-xs text-slate-500 line-through">${item.originalPrice}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected 
                        ? 'text-blue-400 bg-blue-950 border border-blue-500/30' 
                        : 'text-slate-400 bg-slate-800'
                    }`}>
                      {isSelected ? 'Selected' : 'Add to Kit'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Checkout Action Bar */}
        <div className="mt-8 bg-slate-900/90 border border-white/10 rounded-3xl p-5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShoppingBag size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-white text-base">Bundle Summary</h4>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Save ${savings} Total
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Includes Desk + {selectedAddOns.length} selected accessory ({selectedAddOns.length + 1} items total)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-end">
            <div className="text-right">
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Total Bundle Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-extrabold text-amber-400">${total}</span>
                <span className="text-sm text-slate-500 line-through">${totalOriginal}</span>
              </div>
            </div>

            <button className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-2xl text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105 active:scale-95 shrink-0">
              <ShoppingBag size={18} /> Add All {selectedAddOns.length + 1} Items to Cart
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


