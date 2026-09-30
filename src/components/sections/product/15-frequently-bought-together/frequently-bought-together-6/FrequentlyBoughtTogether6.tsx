import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function FrequentlyBoughtTogether6({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Base Coffee Maker", price: 199, type: "MAIN", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800", text: "text-white", btn: "bg-white text-black" },
    { id: 2, name: "Premium Beans", price: 24, type: "ADD-ON", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800", text: "text-white", btn: "bg-amber-500 text-black" },
    { id: 3, name: "Ceramic Mug Set", price: 35, type: "ADD-ON", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", text: "text-white", btn: "bg-stone-300 text-black" },
    { id: 4, name: "Milk Frother", price: 45, type: "ADD-ON", image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?auto=format&fit=crop&q=80&w=800", text: "text-white", btn: "bg-neutral-900 text-white" },
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#e5e5e5] flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-widest">Accordion Shelf</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">Hover to expand accessories</p>
      </div>

      <div className="flex w-full max-w-4xl h-80 gap-2 p-2 bg-white rounded-3xl shadow-xl">
        {items.map((item, i) => {
          const isHovered = hoveredIndex === i;
          
          return (
            <motion.div
              key={item.id}
              className={`bg-cover bg-center ${item.text} rounded-2xl flex flex-col justify-end p-6 cursor-pointer overflow-hidden relative`}
              style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%), url(${item.image})` }}
              animate={{ flex: isHovered ? 3 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Vertical Title (Always visible) */}
              <div className="absolute inset-y-0 left-4 py-8 flex items-end">
                <span 
                  className="font-black text-2xl uppercase tracking-widest whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {item.name}
                </span>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="ml-12 flex flex-col h-full justify-between"
                  >
                    <div className="self-end bg-black/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.type}
                    </div>
                    
                    <div>
                      <div className="text-4xl font-black mb-4">${item.price}</div>
                      <button className={`w-full py-3 ${item.btn} font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-80 transition-opacity`}>
                        <ShoppingCart size={16} /> Add to Cart
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
