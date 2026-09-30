import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FrequentlyBoughtTogether11({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Premium Leather Case", price: 89, desc: "Hand-crafted Italian leather" },
    { id: 2, name: "Magnetic Charger", price: 49, desc: "Fast wireless charging" },
    { id: 3, name: "Sapphire Screen", price: 39, desc: "Edge-to-edge protection" },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center">
        
        {/* Main Product */}
        <div className="flex-shrink-0 w-80 h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div>
            <h3 className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-2">Main Product</h3>
            <h2 className="text-3xl font-black text-white leading-tight">Pro Device<br/>Ultra</h2>
          </div>
          <div>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">$999</div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-neutral-200 transition-colors">
              Add Bundle to Cart
            </button>
          </div>
        </div>

        {/* Glassmorphic Accessories */}
        <div className="flex-grow flex flex-col gap-4 w-full">
          {items.map((item, i) => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`w-full p-6 rounded-2xl cursor-pointer backdrop-blur-md border transition-all duration-500 flex items-center justify-between group ${isSel ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', damping: 20 }}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isSel ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
                    <motion.div animate={{ rotate: isSel ? 45 : 0 }} transition={{ type: 'spring' }}>
                      <Plus size={20} />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{item.name}</div>
                    <div className="text-white/50 text-sm mt-1">{item.desc}</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-white/90">
                  +$${item.price}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
