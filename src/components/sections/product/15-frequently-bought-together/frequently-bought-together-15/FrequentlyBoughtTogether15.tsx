import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

export default function FrequentlyBoughtTogether15({ data }: { data: any }) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Acoustic Panels", price: 120 },
    { id: 2, name: "Mic Stand", price: 80 },
    { id: 3, name: "XLR Cable 10ft", price: 25 },
  ];

  const total = 499 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-50 flex items-start justify-center relative overflow-hidden font-sans pt-24">
      
      {/* Background Main Product (Blurred when expanded) */}
      <div className={`transition-all duration-500 ${expanded ? 'filter blur-md scale-95 opacity-50' : ''}`}>
        <div className="w-80 h-96 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center border border-neutral-200">
          <h2 className="text-3xl font-black text-neutral-900">Studio Mic Pro</h2>
          <p className="text-neutral-500 font-bold mt-2">$499</p>
        </div>
      </div>

      {/* Dynamic Island */}
      <motion.div 
        layout
        className={`absolute top-8 bg-black text-white rounded-[32px] overflow-hidden shadow-2xl z-50 ${expanded ? 'w-[400px] p-6' : 'w-48 h-16 p-2 cursor-pointer flex items-center justify-center hover:scale-105 transition-transform'}`}
        onClick={() => !expanded && setExpanded(true)}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div 
              key="collapsed"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex items-center gap-3 font-bold text-sm"
            >
              <ShoppingBag size={18} />
              <span>Bundle & Save</span>
            </motion.div>
          ) : (
            <motion.div 
              key="expanded"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="w-full flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Add Accessories</span>
                <button onClick={(e) => { e.stopPropagation(); setExpanded(false); }} className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700">
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                {items.map(item => {
                  const isSel = selected.includes(item.id);
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className={`flex justify-between items-center p-4 rounded-2xl cursor-pointer transition-colors ${isSel ? 'bg-white text-black' : 'bg-neutral-900 text-white hover:bg-neutral-800'}`}
                    >
                      <span className="font-bold">{item.name}</span>
                      <span className={`font-black ${isSel ? 'text-black' : 'text-neutral-400'}`}>+$${item.price}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-neutral-800 flex justify-between items-center">
                <div>
                  <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Total Price</div>
                  <div className="text-3xl font-black">$${total}</div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-500 transition-colors">
                  Add All
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
