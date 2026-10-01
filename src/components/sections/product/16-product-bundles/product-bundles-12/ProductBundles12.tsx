import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check, AlertCircle } from 'lucide-react';

export default function ProductBundles12({ data }: { data?: any }) {
  const [selected, setSelected] = useState<number[]>([1]);
  const [shake, setShake] = useState(false);

  const addons = [
    { id: 1, name: "Dual Extended Battery Pack", price: 39 },
    { id: 2, name: "Floating Water Mount", price: 25 },
    { id: 3, name: "64GB Extreme SD Card", price: 19 }
  ];

  const handleCheckout = () => {
    if (selected.length === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const total = 299 + addons.filter(a => selected.includes(a.id)).reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-2 inline-block">
          12. HAPTIC ERROR ACTION CAM BUNDLE
        </span>
        <h2 className="text-3xl font-black text-white">Action Cam Extreme Package</h2>
      </div>

      <motion.div 
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 z-10 shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80" alt="Cam" className="w-full h-48 object-cover rounded-2xl mb-4" />

        <div className="space-y-2 mb-4">
          <span className="text-xs text-slate-400 font-bold block">Select Kit Accessories:</span>
          {addons.map(a => {
            const isSel = selected.includes(a.id);
            return (
              <div 
                key={a.id}
                onClick={() => setSelected(prev => prev.includes(a.id) ? prev.filter(x => x !== a.id) : [...prev, a.id])}
                className={`p-2.5 rounded-xl cursor-pointer border flex justify-between text-xs font-bold transition-all ${
                  isSel ? 'bg-blue-950 border-blue-500 text-white' : 'bg-slate-950 border-white/5 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${isSel ? 'bg-blue-500 text-slate-950' : 'bg-slate-800'}`}>
                    {isSel && <Check size={12} className="stroke-[3]" />}
                  </div>
                  <span>{a.name}</span>
                </div>
                <span className="text-emerald-400">+${a.price}</span>
              </div>
            );
          })}
        </div>

        {shake && (
          <div className="mb-3 text-xs text-rose-400 flex items-center gap-1 font-bold">
            <AlertCircle size={14} /> Select at least 1 accessory to proceed!
          </div>
        )}

        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <span className="text-2xl font-black text-blue-400">${total}</span>
          <button onClick={handleCheckout} className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
            <ShoppingBag size={16} /> Checkout Action Bundle
          </button>
        </div>
      </motion.div>

    </div>
  );
}
