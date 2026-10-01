import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, AlertCircle } from 'lucide-react';

export default function ProductCard12({ data }: { data?: any }) {
  const [selectedAddons, setSelectedAddons] = useState<number[]>([1]);
  const [errorShake, setErrorShake] = useState(false);

  const addons = [
    { id: 1, name: "Dual Extended Battery Pack", price: 39 },
    { id: 2, name: "Floating Water Mount", price: 25 },
    { id: 3, name: "64GB Extreme SD Card", price: 19 }
  ];

  const toggleAddon = (id: number) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleCheckout = () => {
    if (selectedAddons.length === 0) {
      setErrorShake(true);
      setTimeout(() => setErrorShake(false), 600);
    }
  };

  const addonTotal = addons.filter(a => selectedAddons.includes(a.id)).reduce((acc, curr) => acc + curr.price, 0);
  const total = 299 + addonTotal;

  return (
    <div className="p-6 md:p-10 min-h-[600px] w-full rounded-[2.5rem] bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden font-sans border border-white/10 select-none">
      
      <motion.div 
        animate={errorShake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl relative"
      >
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-slate-950 mb-4 group">
          <img 
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" 
            alt="Action Camera" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h3 className="font-extrabold text-xl text-white mb-1">Action Cam 4K Waterproof</h3>
        <p className="text-xs text-slate-400 mb-3">Check kit addons before checkout:</p>

        {/* Checkbox List */}
        <div className="space-y-2 mb-4 bg-slate-950 p-3 rounded-2xl border border-white/5">
          {addons.map((addon) => {
            const isSel = selectedAddons.includes(addon.id);
            return (
              <div 
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`p-2 rounded-xl cursor-pointer flex items-center justify-between text-xs transition-colors border ${
                  isSel ? 'bg-blue-950/60 border-blue-500/50 text-white' : 'bg-slate-900 border-white/5 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${isSel ? 'bg-blue-500 text-slate-950' : 'bg-slate-800'}`}>
                    {isSel && <Check size={12} className="stroke-[3]" />}
                  </div>
                  <span>{addon.name}</span>
                </div>
                <span className="font-bold text-emerald-400">+${addon.price}</span>
              </div>
            );
          })}
        </div>

        {errorShake && (
          <div className="mb-3 text-[11px] text-rose-400 flex items-center gap-1 font-bold">
            <AlertCircle size={14} /> Select at least 1 accessory to proceed!
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div>
            <span className="text-2xl font-black text-white">${total}</span>
          </div>

          <button 
            onClick={handleCheckout}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag size={16} /> Checkout Kit
          </button>
        </div>

      </motion.div>

    </div>
  );
}
