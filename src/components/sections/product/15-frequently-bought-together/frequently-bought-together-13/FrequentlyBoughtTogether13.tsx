import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function FrequentlyBoughtTogether13({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Elite Controller", price: 150 },
    { id: 2, name: "Wireless Headset", price: 100 },
    { id: 3, name: "Charging Dock", price: 50 },
  ];

  const total = 499 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background layer (Accessories) */}
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 p-8">
        <div className="w-full max-w-2xl grid grid-cols-3 gap-6 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div 
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`h-64 rounded-2xl p-6 cursor-pointer border-2 transition-all flex flex-col justify-end ${isSel ? 'bg-emerald-500/20 border-emerald-500' : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'}`}
              >
                <div className="text-white font-bold text-lg leading-tight mb-2">{item.name}</div>
                <div className={`font-black text-2xl ${isSel ? 'text-emerald-400' : 'text-neutral-400'}`}>+$${item.price}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Portal Doors (Main Product) */}
      <motion.div 
        className="absolute inset-y-0 left-0 w-1/2 bg-white flex items-center justify-end pr-8 z-10 shadow-[20px_0_50px_rgba(0,0,0,0.1)] border-r border-neutral-200"
        animate={{ x: isOpen ? '-100%' : '0%' }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="text-right">
          <h2 className="text-6xl font-black text-neutral-900 tracking-tighter">GAMING</h2>
          <div className="text-xl font-bold text-neutral-400 uppercase tracking-widest mt-2">Console</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute inset-y-0 right-0 w-1/2 bg-white flex items-center justify-start pl-8 z-10 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] border-l border-neutral-200"
        animate={{ x: isOpen ? '100%' : '0%' }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div>
          <h2 className="text-6xl font-black text-neutral-900 tracking-tighter">SYSTEM</h2>
          <div className="text-2xl font-black text-neutral-900 mt-2">$499</div>
        </div>
      </motion.div>

      {/* Center Action Button (Only visible when closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            className="absolute z-20 w-32 h-32 bg-black text-white rounded-full flex flex-col items-center justify-center font-bold uppercase tracking-widest text-[10px] hover:scale-110 transition-transform shadow-2xl"
            onClick={() => setIsOpen(true)}
            exit={{ scale: 0, opacity: 0 }}
          >
            <ChevronRight size={32} className="mb-2" />
            Add-ons
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Total (Only visible when open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
          >
            <span className="font-bold text-neutral-500 uppercase tracking-widest text-xs">Total Bundle</span>
            <span className="text-2xl font-black">$${total}</span>
            <button 
              className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}
