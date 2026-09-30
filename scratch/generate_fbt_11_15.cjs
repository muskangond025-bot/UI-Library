const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'FrequentlyBoughtTogether11',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, CheckSquare, Square } from 'lucide-react';

export default function FrequentlyBoughtTogether11({ data }: { data: any }) {
  const [selected, setSelected] = useState([1]); // Main item always selected

  const items = [
    { id: 1, name: "Studio Microphone", price: 199, isMain: true },
    { id: 2, name: "Boom Arm", price: 49 },
    { id: 3, name: "Pop Filter", price: 19 },
    { id: 4, name: "Shock Mount", price: 39 },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 1) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden font-mono text-sm">
      
      {/* Toggles */}
      <div className="flex flex-col gap-4 z-10 w-full max-w-xs">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Build Setup</h2>
        {items.map(item => {
          const isSel = selected.includes(item.id);
          return (
            <div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={\`flex items-center justify-between p-4 rounded-xl cursor-pointer border-2 transition-all \${isSel ? 'border-emerald-500 bg-emerald-500/10' : 'border-neutral-700 hover:border-neutral-500 bg-neutral-800'}\`}
            >
              <div className="flex items-center gap-3 text-white">
                {isSel ? <CheckSquare className="text-emerald-500" /> : <Square className="text-neutral-500" />}
                <span className={\`\${item.isMain ? 'font-black' : 'font-bold'}\`}>{item.name}</span>
              </div>
              <span className={isSel ? 'text-emerald-400 font-black' : 'text-neutral-400'}>\${item.price}</span>
            </div>
          );
        })}
      </div>

      {/* Receipt Printer */}
      <div className="relative w-64 flex flex-col items-center">
        {/* Printer Top */}
        <div className="w-72 h-16 bg-neutral-800 rounded-t-2xl border-b-4 border-black z-20 shadow-2xl flex items-center justify-center">
          <Printer className="text-neutral-500" />
        </div>
        
        {/* Receipt Paper */}
        <div className="w-64 bg-white text-black p-6 rounded-b-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 relative overflow-hidden">
          <div className="text-center font-black text-lg mb-6 border-b-2 border-dashed border-neutral-300 pb-4">
            RECEIPT
          </div>
          
          <div className="flex flex-col gap-2 min-h-[150px]">
            <AnimatePresence>
              {items.filter(i => selected.includes(i.id)).map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, x: 20, height: 0 }}
                  className="flex justify-between font-bold"
                >
                  <span>{item.name}</span>
                  <span>\${item.price}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-black flex justify-between font-black text-xl">
            <span>TOTAL</span>
            <motion.span 
              key={total}
              initial={{ scale: 1.5, color: '#10b981' }}
              animate={{ scale: 1, color: '#000000' }}
            >
              \${total}
            </motion.span>
          </div>
          
          {/* Jagged bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSI4Ij48cG9seWdvbiBwb2ludHM9IjAsMCAxMCw4IDIwLDAgMjAsOCAwLDgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-0" />
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether12',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether12({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([0]);

  const items = [
    { id: 0, name: "Tablet Pro", price: 799, isMain: true },
    { id: 1, name: "Stylus Pen", price: 129 },
    { id: 2, name: "Keyboard Folio", price: 199 },
    { id: 3, name: "Screen Guard", price: 29 },
    { id: 4, name: "Cloud Sync", price: 9 },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 0) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="w-[500px] h-[500px] rounded-full border border-blue-500 border-dashed" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="absolute w-[400px] h-[400px] rounded-full border border-purple-500 border-dotted" />
      </div>

      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-white uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Orbit Bundle</h2>
      </div>

      <div className="relative w-80 h-80 flex items-center justify-center z-10 mt-12">
        
        {/* Central Product */}
        <motion.div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] z-20 border-4 border-black"
          whileHover={{ scale: 1.1 }}
        >
          <span className="font-bold text-white text-xs uppercase tracking-widest text-center px-2">{items[0].name}</span>
        </motion.div>

        {/* Orbiting Accessories */}
        {items.slice(1).map((item, i) => {
          const isSel = selected.includes(item.id);
          const angle = (i * (360 / (items.length - 1))) * (Math.PI / 180);
          const radius = 160;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={item.id}
              className={\`absolute w-20 h-20 rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors z-10 \${isSel ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.8)]' : 'bg-neutral-900 text-neutral-400 border border-neutral-700 hover:border-white hover:text-white'}\`}
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{ x, y, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
              onClick={() => toggle(item.id)}
            >
              <span className="text-[10px] font-bold text-center px-1 leading-tight">{item.name}</span>
              <span className={\`text-xs font-black mt-1 \${isSel ? 'text-blue-600' : 'text-neutral-500'}\`}>+\${item.price}</span>
              
              {/* Selection Ring */}
              {isSel && (
                <motion.svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <motion.circle 
                    cx="50" cy="50" r="48" 
                    fill="none" stroke="#3b82f6" strokeWidth="4"
                    initial={{ strokeDasharray: "0 300" }}
                    animate={{ strokeDasharray: "300 300" }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-12 flex flex-col items-center z-10">
        <span className="text-neutral-500 font-bold uppercase tracking-[0.3em] text-xs mb-2">Total Package</span>
        <motion.div 
          key={total}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          \${total}
        </motion.div>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether13',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Percent } from 'lucide-react';

export default function FrequentlyBoughtTogether13({ data }: { data: any }) {
  const [level, setLevel] = useState(0); // 0: Main only, 1: +Acc1, 2: +Acc2, 3: +Acc3

  const items = [
    { name: "Camera Lens", price: 899 }, // Level 0
    { name: "UV Filter", price: 49 },    // Level 1
    { name: "Lens Hood", price: 29 },    // Level 2
    { name: "Cleaning Kit", price: 19 }  // Level 3
  ];

  const discounts = [0, 5, 10, 20]; // Percentage off based on level

  const totalRaw = items.slice(0, level + 1).reduce((sum, item) => sum + item.price, 0);
  const total = totalRaw * (1 - discounts[level] / 100);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-amber-400 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 w-full">
        <h2 className="text-4xl font-black text-amber-950 uppercase tracking-tighter">Unlock Savings</h2>
        <p className="text-amber-800 font-bold mt-2 text-sm tracking-widest uppercase">Drag slider to build bundle & save</p>
      </div>

      <div className="w-full max-w-3xl relative">
        {/* Track */}
        <div className="h-4 bg-amber-200 rounded-full relative shadow-inner overflow-hidden">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-amber-900"
            animate={{ width: \`\${(level / 3) * 100}%\` }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>

        {/* Nodes & Labels */}
        <div className="flex justify-between absolute top-0 left-0 w-full -mt-4">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center relative cursor-pointer" onClick={() => setLevel(i)}>
              <motion.div 
                className={\`w-12 h-12 rounded-full border-4 flex items-center justify-center font-black text-sm transition-colors z-10 \${level >= i ? 'bg-amber-950 border-amber-950 text-amber-400 shadow-xl' : 'bg-amber-100 border-amber-300 text-amber-400'}\`}
                whileHover={{ scale: 1.1 }}
              >
                {i === 0 ? '1' : '+' + i}
              </motion.div>
              
              <div className="mt-4 text-center absolute top-12 w-32 -ml-10">
                <div className={\`font-black uppercase tracking-widest text-xs \${level >= i ? 'text-amber-950' : 'text-amber-700'}\`}>{items[i].name}</div>
                {i > 0 && <div className={\`font-bold \${level >= i ? 'text-amber-800' : 'text-amber-600/50'}\`}>+\${items[i].price}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 w-full max-w-lg bg-amber-950 p-8 rounded-3xl text-white shadow-2xl flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-xs mb-2">
            <Percent size={14} /> {discounts[level]}% Bundle Discount
          </div>
          <div className="flex items-end gap-4">
            <motion.div 
              key={total}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl font-black"
            >
              \${total.toFixed(2)}
            </motion.div>
            {level > 0 && (
              <span className="text-xl font-bold text-neutral-500 line-through mb-1">\${totalRaw}</span>
            )}
          </div>
        </div>
        <button className="w-16 h-16 bg-amber-400 hover:bg-amber-300 text-amber-950 rounded-2xl flex items-center justify-center transition-colors">
          <ChevronRight size={32} strokeWidth={3} />
        </button>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether14',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether14({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Smart TV 55\"", price: 499, type: 'main' },
    { id: 2, name: "Soundbar", price: 199, position: { x: -80, y: 0 }, color: "bg-blue-500" },
    { id: 3, name: "Wall Mount", price: 49, position: { x: 0, y: -80 }, color: "bg-emerald-500" },
    { id: 4, name: "HDMI 4K", price: 19, position: { x: 80, y: 0 }, color: "bg-purple-500" },
  ];

  const total = items[0].price + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 z-10 w-full">
        <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em]">Puzzle Builder</h2>
        <p className="text-neutral-400 font-bold mt-2 text-xs tracking-widest uppercase">Click outer pieces to complete the bundle</p>
      </div>

      <div className="relative w-80 h-80 flex items-center justify-center z-10">
        {/* Main Center Piece */}
        <div className="absolute w-40 h-40 bg-neutral-800 border-2 border-neutral-700 flex flex-col items-center justify-center text-center z-20 shadow-2xl rounded-xl">
          <span className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest mb-1">Base</span>
          <span className="font-black text-white">{items[0].name}</span>
          <span className="font-bold text-emerald-400 mt-1">\${items[0].price}</span>
        </div>

        {/* Outer Puzzle Pieces */}
        {items.slice(1).map((item) => {
          const isSel = selected.includes(item.id);
          // When selected, snap to center (0,0), else stay at outer position
          const targetX = isSel ? 0 : item.position?.x! * 2;
          const targetY = isSel ? 0 : item.position?.y! * 2;
          const scale = isSel ? 1 : 0.9;
          
          return (
            <motion.div
              key={item.id}
              onClick={() => toggle(item.id)}
              className={\`absolute w-40 h-40 flex flex-col items-center justify-center cursor-pointer text-center p-2 z-10 rounded-xl shadow-lg border-2 border-transparent transition-colors \${isSel ? item.color : 'bg-neutral-800 hover:border-neutral-500'}\`}
              initial={false}
              animate={{ x: targetX, y: targetY, scale, opacity: isSel ? 0.8 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={\`\${isSel ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 flex flex-col items-center\`}>
                <span className="font-bold text-white text-sm">{item.name}</span>
                <span className="font-black text-neutral-400 mt-1">+\${item.price}</span>
                <span className="mt-2 text-[10px] font-black uppercase tracking-widest bg-white text-black px-2 py-1 rounded-full">Snap In</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="mt-16 bg-neutral-950 p-6 rounded-full border border-neutral-800 flex items-center gap-6 shadow-xl z-10"
        layout
      >
        <span className="text-neutral-500 font-bold uppercase tracking-widest text-sm">Bundle Total</span>
        <motion.span 
          key={total}
          initial={{ scale: 1.5, color: '#10b981' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="text-3xl font-black"
        >
          \${total}
        </motion.span>
        <button className="bg-white text-black px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-colors ml-4">
          Checkout
        </button>
      </motion.div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether15',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether15({ data }: { data: any }) {
  const [dispensed, setDispensed] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Cola", price: 2 },
    { id: 2, name: "Chips", price: 3 },
    { id: 3, name: "Candy", price: 1 },
    { id: 4, name: "Gum", price: 1 }
  ];

  const total = dispensed.reduce((sum, id) => sum + (items.find(i => i.id === id)?.price || 0), 199); // Base price $199

  const handleDispense = (id: number) => {
    setDispensed([...dispensed, id]);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-stone-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-8 z-10 w-full">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest">Vending Add-ons</h2>
        <p className="text-stone-400 font-bold mt-2 text-xs tracking-widest uppercase">Click an item to drop it in the bundle</p>
      </div>

      <div className="w-full max-w-sm bg-stone-800 p-6 rounded-t-3xl border-4 border-stone-950 shadow-2xl z-10 relative">
        {/* Glass Screen */}
        <div className="w-full h-48 bg-cyan-900/20 border-2 border-cyan-500/30 rounded-xl p-4 grid grid-cols-2 gap-4 relative overflow-hidden backdrop-blur-sm">
          {/* Reflection */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 pointer-events-none" />
          
          {items.map(item => (
            <div 
              key={item.id}
              onClick={() => handleDispense(item.id)}
              className="bg-stone-900 border border-stone-700 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-stone-700 transition-colors shadow-lg relative group"
            >
              <span className="font-bold text-white">{item.name}</span>
              <span className="text-emerald-400 font-black text-sm">+\${item.price}</span>
              
              {/* Push animation overlay */}
              <div className="absolute inset-0 bg-white/0 group-active:bg-white/20 transition-colors rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Dispenser Slot */}
        <div className="w-full h-16 bg-black rounded-xl mt-6 relative overflow-hidden border-t-8 border-stone-950 flex items-center p-2 gap-2">
          <AnimatePresence>
            {dispensed.map((id, i) => {
              const item = items.find(x => x.id === id);
              return (
                <motion.div
                  key={i}
                  initial={{ y: -100, opacity: 0, rotate: -20 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  className="bg-stone-700 px-3 py-1 rounded text-xs font-bold text-white shadow-lg"
                >
                  {item?.name}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full max-w-sm bg-stone-950 p-6 rounded-b-3xl border-4 border-t-0 border-stone-950 flex justify-between items-center z-10 shadow-2xl">
        <div>
          <div className="text-stone-500 font-bold text-[10px] uppercase tracking-widest">Main Product + {dispensed.length} Add-ons</div>
          <div className="text-3xl font-black text-white mt-1">\${total}</div>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-sm transition-colors">
          Pay
        </button>
      </div>

    </div>
  );
}
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '15-frequently-bought-together', 'frequently-bought-together-' + comp.name.replace('FrequentlyBoughtTogether', ''), comp.name + '.tsx');
  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
