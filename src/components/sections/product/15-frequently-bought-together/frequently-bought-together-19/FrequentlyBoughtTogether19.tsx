import React, { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { GripHorizontal } from 'lucide-react';

export default function FrequentlyBoughtTogether19({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 1, name: "Vlog Mic", price: 129 },
    { id: 2, name: "LED Ring Light", price: 89 },
    { id: 3, name: "Mini Tripod", price: 49 },
  ];

  const total = 799 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Main Content Area */}
      <div className="w-full h-full flex flex-col items-center justify-center -mt-16">
        <h2 className="text-3xl font-black text-white mb-2">Vlogging Kit Base</h2>
        <p className="text-neutral-400 font-bold mb-8">$799</p>
        
        <div className="w-64 h-64 bg-neutral-800 rounded-full flex items-center justify-center border-8 border-neutral-950 shadow-2xl relative">
          <div className="text-neutral-600 font-black text-4xl">CAMERA</div>
          
          {/* Dynamic badging for selected items */}
          {items.map((item, i) => {
            const isSel = selected.includes(item.id);
            if (!isSel) return null;
            const angle = (i * 120 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 140;
            const y = Math.sin(angle) * 140;
            return (
              <motion.div 
                key={item.id}
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, x, y }}
                className="absolute w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight shadow-lg border-2 border-neutral-900 p-2"
              >
                {item.name}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Elastic Pull-up Drawer */}
      <motion.div 
        className="absolute bottom-0 w-full max-w-2xl bg-white rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col"
        initial={{ y: "85%" }}
        animate={{ y: isOpen ? "0%" : "85%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(e, { offset, velocity }) => {
          if (offset.y < -50 || velocity.y < -500) setIsOpen(true);
          else if (offset.y > 50 || velocity.y > 500) setIsOpen(false);
        }}
      >
        {/* Drawer Handle */}
        <div 
          className="w-full py-4 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border-b border-neutral-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GripHorizontal className="text-neutral-300 mb-2" />
          <div className="flex justify-between w-full px-8 items-center">
            <span className="font-bold text-lg">Bundle Add-ons ({selected.length})</span>
            <span className="font-black text-2xl">$${total}</span>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="p-8 flex flex-col gap-4">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div 
                key={item.id} 
                onClick={() => toggle(item.id)}
                className={`p-4 rounded-xl cursor-pointer flex justify-between items-center transition-colors ${isSel ? 'bg-emerald-50 border border-emerald-200' : 'bg-neutral-50 border border-transparent hover:bg-neutral-100'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSel ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-neutral-300'}`}>
                     {isSel && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="font-bold text-neutral-900">{item.name}</span>
                </div>
                <span className="font-black text-emerald-600">+$${item.price}</span>
              </div>
            );
          })}
          
          <button className="w-full mt-4 py-4 bg-black text-white font-bold rounded-xl text-lg hover:bg-neutral-800 transition-colors">
            Confirm Bundle
          </button>
        </div>
      </motion.div>

    </div>
  );
}
