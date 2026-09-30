import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether18({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('scroll-container-18');
      if (el) {
        setScrolled(el.scrollTop > 50);
      }
    };
    const el = document.getElementById('scroll-container-18');
    el?.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { id: 1, name: "Smart Folio Case", price: 79 },
    { id: 2, name: "Pro Stylus Pencil", price: 129 },
    { id: 3, name: "Screen Protector", price: 39 },
    { id: 4, name: "USB-C adapter", price: 19 },
    { id: 5, name: "Care Plan 2Y", price: 149 },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="h-[600px] rounded-3xl bg-neutral-50 flex overflow-hidden font-sans border border-neutral-200">
      
      {/* Left: Scrollable Main Content */}
      <div id="scroll-container-18" className="w-2/3 h-full overflow-y-auto p-12 hide-scrollbar">
        <h2 className="text-4xl font-black text-neutral-900 mb-8">Build your bundle.</h2>
        
        <div className="w-full h-80 bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 flex flex-col justify-end mb-12">
          <h3 className="font-bold text-2xl mb-2">Tablet Pro 11"</h3>
          <p className="text-neutral-500 font-medium">$999</p>
        </div>

        <h3 className="text-2xl font-bold text-neutral-900 mb-6">Recommended for you</h3>
        
        <div className="grid grid-cols-2 gap-4 pb-24">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div 
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300 flex flex-col h-40 justify-between ${isSel ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl' : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="font-bold text-lg leading-tight w-2/3">{item.name}</div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSel ? 'border-white bg-white text-black' : 'border-neutral-300'}`}>
                    {isSel && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </div>
                <div className={`font-bold ${isSel ? 'text-white' : 'text-neutral-500'}`}>
                  +$${item.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Sticky Sidebar */}
      <div className="w-1/3 h-full bg-white border-l border-neutral-200 relative">
        <div className="absolute inset-0 p-8 flex flex-col">
          <h3 className="font-bold text-lg mb-6">Order Summary</h3>
          
          <div className="flex-grow flex flex-col gap-4 overflow-y-auto pr-2 hide-scrollbar">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-neutral-900">Tablet Pro 11"</span>
              <span className="text-neutral-500">$999</span>
            </div>
            
            <motion.div layout className="flex flex-col gap-4">
              {items.filter(i => selected.includes(i.id)).map(item => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  className="flex justify-between text-sm font-medium text-blue-600"
                >
                  <span>{item.name}</span>
                  <span>+$${item.price}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="pt-6 border-t border-neutral-200 mt-4">
            <div className="flex justify-between items-end mb-6">
              <span className="font-bold">Total</span>
              <motion.span key={total} className="text-2xl font-black">$${total}</motion.span>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
