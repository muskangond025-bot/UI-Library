import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, ShoppingBag } from 'lucide-react';

export default function FrequentlyBoughtTogether1({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([0]); // Main product selected by default

  const products = [
    { id: 0, name: "Pro Camera Body", price: 1299, type: "main" },
    { id: 1, name: "50mm Prime Lens", price: 349, type: "accessory" },
    { id: 2, name: "Pro Tripod", price: 129, type: "accessory" },
    { id: 3, name: "64GB SD Card", price: 49, type: "accessory" }
  ];

  const toggle = (id: number) => {
    if (id === 0) return; // Main product always selected
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = products.filter(p => selected.includes(p.id)).reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950 pointer-events-none" />
      
      <div className="text-center mb-16 z-10">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest drop-shadow-lg">Build Your Kit</h2>
        <p className="text-blue-400 font-bold mt-2 text-xs tracking-[0.2em] uppercase">Interactive Node Graph</p>
      </div>

      <div className="relative w-full max-w-2xl h-80 flex items-center justify-center z-10">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[1, 2, 3].map(id => {
            const isSel = selected.includes(id);
            const angle = (id - 1) * (180 / 2) * (Math.PI / 180);
            const r = 120;
            const x2 = 336 + Math.cos(Math.PI - angle) * r;
            const y2 = 160 - Math.sin(Math.PI - angle) * r;
            
            return (
              <motion.line 
                key={id}
                x1="336" y1="160" x2={x2} y2={y2}
                stroke={isSel ? "#3b82f6" : "#333"}
                strokeWidth={isSel ? 3 : 1}
                strokeDasharray={isSel ? "0" : "5,5"}
                animate={{ stroke: isSel ? "#3b82f6" : "#333" }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {products.map((p, i) => {
          const isMain = i === 0;
          const isSel = selected.includes(p.id);
          const angle = (i - 1) * (180 / 2) * (Math.PI / 180);
          const r = isMain ? 0 : 120;
          const x = Math.cos(Math.PI - angle) * r;
          const y = -Math.sin(Math.PI - angle) * r;

          return (
            <motion.div
              key={p.id}
              className={`absolute w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer border-2 transition-all ${isMain ? 'bg-blue-600 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-20' : isSel ? 'bg-neutral-800 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10' : 'bg-neutral-900 border-neutral-700 hover:border-neutral-500 z-10'}`}
              animate={{ x, y }}
              onClick={() => toggle(p.id)}
              whileHover={{ scale: isMain ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`text-[10px] font-bold text-center px-2 ${isSel || isMain ? 'text-white' : 'text-neutral-400'}`}>{p.name}</span>
              <span className={`text-xs font-black mt-1 ${isSel || isMain ? 'text-blue-200' : 'text-neutral-500'}`}>+${p.price}</span>
              {!isMain && (
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white ${isSel ? 'bg-blue-500' : 'bg-neutral-700'}`}>
                  {isSel ? <Check size={12} /> : <Plus size={12} />}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="mt-8 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex items-center justify-between w-full max-w-md z-10"
        layout
      >
        <div>
          <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Bundle Total</div>
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={total}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-black text-white"
            >
              ${total}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors">
          <ShoppingBag size={16} /> Add {selected.length} Items
        </button>
      </motion.div>
    </div>
  );
}
