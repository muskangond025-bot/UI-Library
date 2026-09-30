import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

export default function FrequentlyBoughtTogether5({ data }: { data: any }) {
  const [cards, setCards] = useState([
    { id: 1, name: "Wireless Mouse", price: 49, image: "https://images.unsplash.com/photo-1527814050087-379381547969?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Mech Keyboard", price: 129, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Mousepad XXL", price: 29, image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800" }
  ]);
  const [total, setTotal] = useState(999); // Laptop base price

  const handleSwipe = (id: number, direction: 'left' | 'right') => {
    const card = cards.find(c => c.id === id);
    if (direction === 'right' && card) {
      setTotal(t => t + card.price);
    }
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-between relative overflow-hidden">
      
      <div className="w-full bg-neutral-800 rounded-2xl p-6 flex justify-between items-center shadow-xl mb-8 z-20">
        <div>
          <div className="text-neutral-400 font-bold uppercase text-xs tracking-widest">Main Item: Pro Laptop</div>
          <div className="text-white font-black text-2xl">Total: ${total}</div>
        </div>
        <button className="bg-white text-neutral-900 px-6 py-2 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform">
          Checkout
        </button>
      </div>

      <div className="relative w-full max-w-xs h-80 flex-grow flex items-center justify-center">
        <AnimatePresence>
          {cards.map((card, i) => {
            const isTop = i === cards.length - 1;
            return (
              <motion.div
                key={card.id}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) handleSwipe(card.id, 'right');
                  else if (info.offset.x < -100) handleSwipe(card.id, 'left');
                }}
                className={`absolute inset-0 bg-cover bg-center rounded-3xl p-8 flex flex-col justify-end shadow-2xl border border-white/20 origin-bottom`}
                style={{ backgroundImage: `url(${card.image})` }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ 
                  scale: isTop ? 1 : 1 - (cards.length - 1 - i) * 0.05, 
                  y: (cards.length - 1 - i) * 15,
                  opacity: 1,
                  zIndex: i
                }}
                exit={{ x: 300, opacity: 0, rotate: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl text-white">
                  <div className="font-black text-2xl uppercase tracking-widest">{card.name}</div>
                  <div className="font-bold text-lg mt-1">+${card.price}</div>
                </div>

                {isTop && (
                  <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white"><X /></div>
                    <div className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center text-white"><Heart /></div>
                  </div>
                )}
              </motion.div>
            );
          })}
          {cards.length === 0 && (
            <motion.div className="text-neutral-500 font-bold uppercase tracking-widest">
              No more suggestions
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="text-center mt-8 z-20">
        <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Swipe Right to Add • Swipe Left to Pass</p>
      </div>
    </div>
  );
}
