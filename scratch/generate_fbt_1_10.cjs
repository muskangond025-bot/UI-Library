const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'FrequentlyBoughtTogether1',
    content: `import React, { useState } from 'react';
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
              className={\`absolute w-24 h-24 rounded-full flex flex-col items-center justify-center cursor-pointer border-2 transition-all \${isMain ? 'bg-blue-600 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.5)] z-20' : isSel ? 'bg-neutral-800 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10' : 'bg-neutral-900 border-neutral-700 hover:border-neutral-500 z-10'}\`}
              animate={{ x, y }}
              onClick={() => toggle(p.id)}
              whileHover={{ scale: isMain ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={\`text-[10px] font-bold text-center px-2 \${isSel || isMain ? 'text-white' : 'text-neutral-400'}\`}>{p.name}</span>
              <span className={\`text-xs font-black mt-1 \${isSel || isMain ? 'text-blue-200' : 'text-neutral-500'}\`}>+\${p.price}</span>
              {!isMain && (
                <div className={\`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white \${isSel ? 'bg-blue-500' : 'bg-neutral-700'}\`}>
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
              \${total}
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
`
  },
  {
    name: 'FrequentlyBoughtTogether2',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether2({ data }: { data: any }) {
  const [spin, setSpin] = useState(0);

  const main = { name: "Gaming Console", price: 499 };
  const accessories = [
    [{ name: "Extra Controller", price: 69 }, { name: "Pro Controller", price: 129 }, { name: "Racing Wheel", price: 199 }],
    [{ name: "1TB Storage", price: 89 }, { name: "2TB Storage", price: 149 }, { name: "Cloud Subs", price: 59 }],
    [{ name: "Headset", price: 99 }, { name: "Pro Headset", price: 199 }, { name: "Earbuds", price: 79 }]
  ];

  const currentAcc = accessories.map(slot => slot[spin % slot.length]);
  const total = main.price + currentAcc.reduce((sum, a) => sum + a.price, 0);

  const handleSpin = () => {
    setSpin(s => s + 1);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Bundle Machine</h2>
        <p className="text-neutral-500 font-bold mt-2 text-sm uppercase">Spin for new combo ideas</p>
      </div>

      <div className="flex gap-4 mb-12 perspective-[1000px]">
        {/* Main Item Fixed Slot */}
        <div className="w-32 h-40 bg-neutral-900 rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-neutral-900">
          <span className="text-xs text-neutral-400 font-bold uppercase mb-2">Main</span>
          <span className="font-black text-white">{main.name}</span>
          <span className="text-emerald-400 font-bold mt-2">\${main.price}</span>
        </div>

        {/* Spinner Slots */}
        {accessories.map((slot, i) => (
          <div key={i} className="w-32 h-40 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={spin}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
              >
                <span className="text-xs text-neutral-400 font-bold uppercase mb-2">Add-on {i+1}</span>
                <span className="font-black text-neutral-900">{slot[spin % slot.length].name}</span>
                <span className="text-emerald-600 font-bold mt-2">+\${slot[spin % slot.length].price}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <div className="text-neutral-400 font-bold uppercase tracking-widest text-xs mb-1">Total Bundle Price</div>
          <div className="text-5xl font-black text-neutral-900">\${total}</div>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={handleSpin}
            className="px-8 py-4 bg-neutral-200 hover:bg-neutral-300 text-neutral-900 rounded-full font-black uppercase tracking-widest text-sm transition-colors"
          >
            Spin Combo
          </button>
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-black uppercase tracking-widest text-sm transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Add Bundle
          </button>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether3',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether3({ data }: { data: any }) {
  const [inCart, setInCart] = useState<number[]>([]);

  const products = [
    { id: 1, name: "Lens Filter", price: 49 },
    { id: 2, name: "Battery Pack", price: 89 },
    { id: 3, name: "Camera Strap", price: 29 }
  ];

  const handleDragEnd = (e: any, info: any, id: number) => {
    if (info.offset.y > 100) {
      if (!inCart.includes(id)) setInCart([...inCart, id]);
    }
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-indigo-950 flex flex-col items-center justify-between relative overflow-hidden">
      
      <div className="text-center mt-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest">Physics Cart</h2>
        <p className="text-indigo-300 font-bold mt-2 text-xs tracking-widest uppercase">Drag items down to the tray</p>
      </div>

      {/* Floating Items */}
      <div className="flex gap-8 z-10 w-full justify-center">
        {products.map((p, i) => {
          const isAdded = inCart.includes(p.id);
          return (
            <motion.div
              key={p.id}
              drag={!isAdded}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, info) => handleDragEnd(e, info, p.id)}
              className={\`w-32 h-32 rounded-2xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border-2 border-indigo-500/50 shadow-2xl \${isAdded ? 'opacity-0 pointer-events-none' : 'bg-indigo-900'}\`}
              animate={{ 
                y: isAdded ? 200 : [0, -10, 0],
                scale: isAdded ? 0.5 : 1
              }}
              transition={!isAdded ? { y: { repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" } } : { type: "spring" }}
            >
              <span className="font-bold text-white text-center text-sm">{p.name}</span>
              <span className="text-indigo-300 font-black mt-2">+\${p.price}</span>
            </motion.div>
          );
        })}
      </div>

      {/* 3D Tray */}
      <div className="w-full max-w-lg h-48 bg-indigo-900/50 rounded-[3rem] border-t border-indigo-400 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)] mt-32 relative flex flex-col items-center justify-center p-8">
        <div className="absolute top-4 text-indigo-300/50 font-black uppercase tracking-[0.3em] text-xl">Bundle Tray</div>
        
        <div className="flex gap-4 mt-8">
          {inCart.length === 0 && <div className="text-indigo-400/50 font-bold text-sm uppercase">Empty</div>}
          {inCart.map(id => {
            const p = products.find(x => x.id === id);
            return (
              <motion.div 
                key={id}
                initial={{ scale: 0, y: -50 }}
                animate={{ scale: 1, y: 0 }}
                className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              >
                <span className="font-bold text-white text-[10px] text-center leading-tight">{p?.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether4',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FrequentlyBoughtTogether4({ data }: { data: any }) {
  const [hovered, setHovered] = useState<number | null>(null);

  const main = { name: "Smart Watch", price: 299 };
  const accessories = [
    { id: 1, name: "Leather Band", price: 49, angle: 0 },
    { id: 2, name: "Screen Guard", price: 15, angle: 120 },
    { id: 3, name: "Charging Dock", price: 35, angle: 240 }
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-white flex flex-col items-center justify-center relative overflow-hidden border border-neutral-200">
      
      <div className="absolute top-12 text-center z-10 w-full">
        <h2 className="text-3xl font-black text-neutral-900 uppercase tracking-widest">Magnetic Cluster</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">Hover bubbles to expand</p>
      </div>

      <div className="relative w-96 h-96 flex items-center justify-center mt-12">
        {/* Main Product */}
        <div className="w-40 h-40 bg-neutral-900 rounded-full flex flex-col items-center justify-center shadow-2xl z-20">
          <span className="font-bold text-white text-sm uppercase">{main.name}</span>
          <span className="font-black text-emerald-400 text-xl">\${main.price}</span>
        </div>

        {/* Orbiting Accessories */}
        {accessories.map((acc) => {
          const isHovered = hovered === acc.id;
          const rad = acc.angle * (Math.PI / 180);
          const r = 120; // radius
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;

          return (
            <motion.div
              key={acc.id}
              className={\`absolute rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors shadow-lg overflow-hidden \${isHovered ? 'bg-emerald-500 z-30' : 'bg-neutral-100 border-2 border-neutral-200 z-10'}\`}
              animate={{ 
                x, y, 
                width: isHovered ? 140 : 64, 
                height: isHovered ? 140 : 64 
              }}
              onHoverStart={() => setHovered(acc.id)}
              onHoverEnd={() => setHovered(null)}
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div 
                    key="expanded"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-white p-2 text-center"
                  >
                    <span className="font-bold text-xs leading-tight mb-1">{acc.name}</span>
                    <span className="font-black text-lg">+\${acc.price}</span>
                    <button className="mt-2 text-[10px] bg-white text-emerald-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider hover:bg-emerald-50">Add</button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400"
                  >
                    <Plus size={24} />
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
`
  },
  {
    name: 'FrequentlyBoughtTogether5',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

export default function FrequentlyBoughtTogether5({ data }: { data: any }) {
  const [cards, setCards] = useState([
    { id: 1, name: "Wireless Mouse", price: 49, color: "bg-blue-500" },
    { id: 2, name: "Mechanical Keyboard", price: 129, color: "bg-purple-500" },
    { id: 3, name: "Mousepad XXL", price: 29, color: "bg-emerald-500" }
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
          <div className="text-white font-black text-2xl">Total: \${total}</div>
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
                className={\`absolute inset-0 \${card.color} rounded-3xl p-8 flex flex-col justify-end shadow-2xl border border-white/20 origin-bottom\`}
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
                  <div className="font-bold text-lg mt-1">+\${card.price}</div>
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
`
  },
  {
    name: 'FrequentlyBoughtTogether6',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function FrequentlyBoughtTogether6({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Base Coffee Maker", price: 199, type: "MAIN", color: "bg-neutral-900", text: "text-white" },
    { id: 2, name: "Premium Beans", price: 24, type: "ADD-ON", color: "bg-amber-100", text: "text-amber-900" },
    { id: 3, name: "Ceramic Mug Set", price: 35, type: "ADD-ON", color: "bg-stone-200", text: "text-stone-900" },
    { id: 4, name: "Milk Frother", price: 45, type: "ADD-ON", color: "bg-neutral-100", text: "text-neutral-900" },
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
              className={\`\${item.color} \${item.text} rounded-2xl flex flex-col justify-end p-6 cursor-pointer overflow-hidden relative\`}
              animate={{ flex: isHovered ? 3 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Vertical Title (Always visible) */}
              <div className="absolute inset-y-0 left-4 py-8 flex items-end">
                <span className="font-black text-2xl uppercase tracking-widest -rotate-90 origin-bottom-left whitespace-nowrap">
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
                      <div className="text-4xl font-black mb-4">\${item.price}</div>
                      <button className="w-full py-3 bg-current text-white font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-80 transition-opacity mix-blend-difference">
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
`
  },
  {
    name: 'FrequentlyBoughtTogether7',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function FrequentlyBoughtTogether7({ data }: { data: any }) {
  const [assembled, setAssembled] = useState(false);

  const layers = [
    { id: 1, name: "Screen Protector", price: 29, color: "bg-cyan-400/80 backdrop-blur" },
    { id: 2, name: "Smartphone (Main)", price: 999, color: "bg-neutral-900" },
    { id: 3, name: "MagSafe Battery", price: 99, color: "bg-neutral-200" },
    { id: 4, name: "Leather Case", price: 59, color: "bg-amber-800" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Exploded View</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">See the full bundle layers</p>
      </div>

      <div className="relative w-64 h-96 mt-20 flex flex-col items-center justify-center perspective-[1000px]">
        {layers.map((layer, i) => {
          // Calculate isometric exploded Y offset
          const offsetY = assembled ? 0 : (i - 1.5) * 60;
          
          return (
            <motion.div
              key={layer.id}
              className={\`absolute w-48 h-64 \${layer.color} rounded-3xl border border-white/20 shadow-xl flex items-center justify-center text-center p-4\`}
              animate={{ 
                y: offsetY,
                rotateX: 60,
                rotateZ: -45,
                scale: assembled ? 1 : 0.9,
                zIndex: 10 - i
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: assembled ? i * 0.1 : (3-i) * 0.1 }}
            >
               <AnimatePresence>
                 {!assembled && (
                   <motion.div 
                     initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                     className="absolute -right-24 rotate-45 rotate-x-[-60deg] text-left"
                   >
                     <div className={\`font-black uppercase tracking-widest whitespace-nowrap \${i===1?'text-neutral-900':'text-neutral-500'}\`}>{layer.name}</div>
                     <div className="font-bold text-emerald-600">\${layer.price}</div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <button 
        onClick={() => setAssembled(!assembled)}
        className="mt-16 bg-neutral-900 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 transition-colors z-10 shadow-xl"
      >
        <Layers size={20} /> {assembled ? "Explode Bundle" : "Assemble & Buy All"}
      </button>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether8',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether8({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([1]); // Main item

  const items = [
    { id: 1, name: "Desk Mat", price: 30, type: 'main' },
    { id: 2, name: "Mouse", price: 80, type: 'acc' },
    { id: 3, name: "Keyboard", price: 150, type: 'acc' },
    { id: 4, name: "Wrist Rest", price: 20, type: 'acc' },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 1) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative font-mono text-white">
      
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold tracking-[0.3em] uppercase text-neutral-400">Minimal Matrix</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 relative z-10">
        {/* Connection Plus lines in center - decorative */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-full bg-neutral-800" />
          <div className="w-full h-px bg-neutral-800 absolute" />
        </div>

        {items.map((item) => {
          const isSel = selected.includes(item.id);
          const isMain = item.type === 'main';

          return (
            <motion.div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={\`w-40 h-40 border \${isSel ? 'border-emerald-500 bg-emerald-900/20' : 'border-neutral-800 bg-neutral-900/50'} flex flex-col items-center justify-center cursor-pointer transition-colors relative group\`}
              whileHover={{ scale: isMain ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <div className={\`text-3xl mb-2 \${isSel ? 'text-emerald-400' : 'text-neutral-600'}\`}>
                 {isMain ? '⬛' : '⬜'}
               </div>
               <div className={\`text-xs uppercase tracking-widest \${isSel ? 'text-emerald-300' : 'text-neutral-500'}\`}>{item.name}</div>
               <div className={\`text-sm font-bold mt-1 \${isSel ? 'text-white' : 'text-neutral-600'}\`}>\${item.price}</div>
               
               {!isSel && !isMain && (
                 <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <span className="bg-emerald-500 text-black font-bold px-3 py-1 text-xs">ADD +</span>
                 </div>
               )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-6 bg-neutral-900 px-8 py-4 rounded-full border border-neutral-800">
        <div className="text-neutral-500 uppercase tracking-widest text-sm">Bundle Total</div>
        <div className="text-3xl font-black text-emerald-400">\${total}</div>
        <button className="ml-4 bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition-colors">Buy</button>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether9',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function FrequentlyBoughtTogether9({ data }: { data: any }) {
  const [steps, setSteps] = useState([true, false, false]);

  const items = [
    { name: "Coffee Machine", price: 299 },
    { name: "1 Year Filters", price: 49 },
    { name: "Care Plan", price: 29 }
  ];

  const total = items.reduce((sum, item, i) => sum + (steps[i] ? item.price : 0), 0);
  const discount = steps.every(Boolean) ? 30 : 0; // $30 off if all selected

  const toggle = (index: number) => {
    if (index === 0) return;
    const newSteps = [...steps];
    newSteps[index] = !newSteps[index];
    setSteps(newSteps);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-rose-950 uppercase tracking-widest">Timeline Combo</h2>
        <p className="text-rose-600 font-bold mt-2 text-xs tracking-widest uppercase">Complete the timeline for a discount</p>
      </div>

      <div className="flex w-full max-w-3xl justify-between relative mb-16 px-8">
        {/* Progress Line */}
        <div className="absolute top-6 left-16 right-16 h-2 bg-rose-200 rounded-full z-0">
          <motion.div 
            className="h-full bg-rose-500 rounded-full"
            animate={{ width: \`\${(steps.filter(Boolean).length - 1) * 50}%\` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>

        {items.map((item, i) => {
          const active = steps[i];
          return (
            <div key={i} className="relative z-10 flex flex-col items-center cursor-pointer" onClick={() => toggle(i)}>
              <motion.div 
                className={\`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-colors \${active ? 'bg-rose-500 border-rose-200 text-white' : 'bg-white border-rose-200 text-rose-300'}\`}
                whileHover={{ scale: i === 0 ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {active ? <Check strokeWidth={3} /> : <span className="font-black">{i+1}</span>}
              </motion.div>
              <div className="mt-4 text-center">
                <div className={\`font-bold uppercase tracking-widest text-xs \${active ? 'text-rose-900' : 'text-rose-400'}\`}>{item.name}</div>
                <div className={\`font-black text-lg \${active ? 'text-rose-600' : 'text-rose-300'}\`}>+\${item.price}</div>
              </div>
            </div>
          );
        })}
      </div>

      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-rose-100 flex items-center justify-between w-full max-w-lg"
        layout
      >
        <div className="flex flex-col">
          <span className="text-rose-400 font-bold uppercase tracking-widest text-xs">Final Price</span>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-rose-950">\${total - discount}</span>
            {discount > 0 && <span className="text-rose-500 font-bold line-through mb-1">\${total}</span>}
          </div>
          {discount > 0 && <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest mt-1">Bundle Discount Applied!</span>}
        </div>

        <button className="w-16 h-16 bg-rose-950 rounded-2xl flex items-center justify-center text-white hover:bg-rose-800 transition-colors shadow-lg">
          <ArrowRight size={24} />
        </button>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether10',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether10({ data }: { data: any }) {
  const [hovered, setHovered] = useState(false);

  const main = { name: "Pro Headphones", price: 349, color: "bg-neutral-900" };
  const accessories = [
    { name: "Hard Case", price: 49, color: "bg-indigo-600" },
    { name: "Audio Cable", price: 29, color: "bg-purple-600" },
    { name: "Ear Pads", price: 39, color: "bg-fuchsia-600" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Parallax Stack</h2>
        <p className="text-indigo-600 font-bold mt-2 text-xs tracking-widest uppercase">Hover the product to reveal add-ons</p>
      </div>

      <div 
        className="relative w-64 h-80 mt-12 flex justify-center items-center cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hidden Accessories */}
        {accessories.map((acc, i) => {
          // Calculate fan out spread
          const angle = (i - 1) * 15; // -15, 0, 15
          const x = hovered ? (i - 1) * 140 : 0;
          const y = hovered ? Math.abs(i - 1) * 20 - 40 : 0;
          const rotate = hovered ? angle : 0;

          return (
            <motion.div
              key={i}
              className={\`absolute w-56 h-72 \${acc.color} rounded-3xl shadow-xl flex flex-col items-center justify-center text-white p-6 origin-bottom border border-white/20\`}
              animate={{ x, y, rotate }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="font-bold uppercase tracking-widest text-xs text-white/70">Add-on</span>
              <span className="font-black text-xl text-center mt-2">{acc.name}</span>
              <span className="font-bold text-white/90 mt-2">+\${acc.price}</span>
              <button className="mt-auto w-full py-2 bg-white/20 hover:bg-white/30 rounded-full font-bold text-sm uppercase tracking-widest transition-colors backdrop-blur-sm">Add</button>
            </motion.div>
          );
        })}

        {/* Main Product (Always on top) */}
        <motion.div 
          className={\`absolute w-64 h-80 \${main.color} rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 border-4 border-neutral-900 z-10\`}
          animate={{ scale: hovered ? 1.05 : 1, y: hovered ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <span className="font-bold uppercase tracking-widest text-xs text-neutral-500">Main Product</span>
          <span className="font-black text-3xl text-center mt-2 uppercase tracking-tighter leading-none">{main.name}</span>
          <span className="font-black text-emerald-400 text-xl mt-4">\${main.price}</span>
          
          <motion.div 
            className="absolute bottom-6 px-4 py-2 bg-neutral-800 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-400"
            animate={{ opacity: hovered ? 0 : 1 }}
          >
            Hover Me
          </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '15-frequently-bought-together', 'frequently-bought-together-' + comp.name.replace('FrequentlyBoughtTogether', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
