const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'FrequentlyBoughtTogether16',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Scissors } from 'lucide-react';

export default function FrequentlyBoughtTogether16({ data }: { data: any }) {
  const [tickets, setTickets] = useState([
    { id: 1, name: "Extended Warranty", price: 49 },
    { id: 2, name: "Premium Setup", price: 99 },
    { id: 3, name: "Priority Support", price: 29 }
  ]);
  const [torn, setTorn] = useState<number[]>([]);

  const total = 999 + torn.reduce((sum, id) => sum + (tickets.find(t => t.id === id)?.price || 0), 0);

  const handleTear = (id: number) => {
    if (!torn.includes(id)) {
      setTorn([...torn, id]);
    }
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#E94560] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      <div className="text-center mb-12 z-10 w-full text-white">
        <h2 className="text-4xl font-black uppercase tracking-widest drop-shadow-lg">Bundle Tickets</h2>
        <p className="font-bold mt-2 text-xs tracking-widest uppercase opacity-80 flex items-center justify-center gap-2">
          <Scissors size={14} /> Tear a ticket to add to bundle
        </p>
      </div>

      <div className="flex gap-4 z-10 mb-16">
        {tickets.map(ticket => {
          const isTorn = torn.includes(ticket.id);
          return (
            <div key={ticket.id} className="relative w-32 h-64 flex flex-col perspective-[1000px]">
              {/* Ticket Top (Stub) */}
              <div className="w-full h-1/4 bg-[#533483] rounded-t-xl border-2 border-white/20 border-b-0 flex flex-col items-center justify-center text-white/50 relative">
                <Ticket size={24} />
                <span className="text-[8px] uppercase tracking-widest mt-1">Bundle Add-on</span>
                
                {/* Perforation Line */}
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-transparent border-b-4 border-dotted border-[#E94560] z-20" />
              </div>

              {/* Ticket Bottom (Tearable) */}
              <AnimatePresence>
                {!isTorn && (
                  <motion.div 
                    className="w-full h-3/4 bg-white rounded-b-xl shadow-2xl border-2 border-t-0 border-white/20 cursor-pointer flex flex-col items-center justify-center text-center p-4 origin-top"
                    onClick={() => handleTear(ticket.id)}
                    whileHover={{ rotateX: 20, y: -5 }}
                    exit={{ rotateX: 60, y: 200, opacity: 0, transition: { duration: 0.6 } }}
                  >
                    <div className="font-black text-xl text-[#533483] mb-2 uppercase leading-tight">{ticket.name}</div>
                    <div className="font-bold text-[#E94560] text-2xl">+{'$'}{ticket.price}</div>
                    <div className="mt-auto px-4 py-2 bg-[#16213E] text-white text-[10px] uppercase font-bold rounded-full w-full">Tear to Add</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <motion.div 
        className="w-full max-w-sm bg-[#16213E] p-6 rounded-3xl shadow-2xl flex items-center justify-between z-10 border-4 border-[#533483]"
        layout
      >
        <div>
          <div className="text-white/50 font-bold text-xs uppercase tracking-widest mb-1">Total Due</div>
          <div className="text-4xl font-black text-white">{'$'}{total}</div>
        </div>
        <div className="text-right">
          <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">{torn.length} Tickets Added</div>
          <button className="bg-[#E94560] text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform">Checkout</button>
        </div>
      </motion.div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether17',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PackagePlus, Check } from 'lucide-react';

export default function FrequentlyBoughtTogether17({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Laptop Sleeve", price: 39 },
    { id: 2, name: "USB-C Hub", price: 59 },
    { id: 3, name: "Wireless Mouse", price: 49 },
    { id: 4, name: "Stand", price: 29 },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 1299 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12 w-full">
        <h2 className="text-3xl font-black text-white uppercase tracking-widest">Carousel Builder</h2>
      </div>

      {/* Carousel Track */}
      <div className="flex gap-6 overflow-x-auto pb-8 w-full max-w-4xl px-8 snap-x snap-mandatory hide-scrollbar">
        {items.map(item => {
          const isSel = selected.includes(item.id);
          
          return (
            <motion.div 
              key={item.id}
              onClick={() => toggle(item.id)}
              className={\`min-w-[200px] h-[280px] rounded-3xl cursor-pointer flex flex-col items-center justify-center relative p-6 snap-center border-4 transition-colors \${isSel ? 'bg-indigo-900/40 border-indigo-500' : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'}\`}
              whileHover="hover"
            >
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* SVG Progress Circle drawn on hover */}
                <motion.svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <motion.circle 
                    cx="50" cy="50" r="46" 
                    fill="transparent" 
                    stroke={isSel ? "#6366f1" : "#404040"} 
                    strokeWidth="4"
                    variants={{
                      hover: { strokeDasharray: "289 289", strokeDashoffset: 0 },
                    }}
                    initial={{ strokeDasharray: "289 289", strokeDashoffset: isSel ? 0 : 289 }}
                    animate={{ strokeDashoffset: isSel ? 0 : 289 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
                
                {isSel ? <Check size={32} className="text-indigo-400" /> : <PackagePlus size={32} className="text-neutral-500" />}
              </div>

              <div className="text-center">
                <div className="font-bold text-white text-lg leading-tight mb-1">{item.name}</div>
                <div className="text-indigo-400 font-black">+{'$'}{item.price}</div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="fixed bottom-8 bg-white text-black p-4 px-8 rounded-full shadow-2xl flex items-center gap-6 z-50 font-black uppercase tracking-widest text-sm border-4 border-indigo-500"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>Base Laptop + {selected.length}</span>
        <div className="w-px h-6 bg-neutral-300" />
        <span className="text-2xl">{'$'}{total}</span>
      </motion.div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether18',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether18({ data }: { data: any }) {
  const [capsules, setCapsules] = useState<{id: number, text: string, price: number}[]>([]);
  const [crank, setCrank] = useState(0);

  const options = [
    { text: "Mystery Care Plan", price: 29 },
    { text: "Surprise Accessory", price: 19 },
    { text: "Premium Upgrade", price: 49 }
  ];

  const handleCrank = () => {
    if (capsules.length >= 3) return;
    setCrank(c => c + 360);
    setTimeout(() => {
      setCapsules([...capsules, { id: Date.now(), ...options[Math.floor(Math.random() * options.length)] }]);
    }, 500);
  };

  const total = 299 + capsules.reduce((s, c) => s + c.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#FFF5E4] flex flex-col md:flex-row items-center justify-center gap-16 relative overflow-hidden">
      
      {/* Gacha Machine */}
      <div className="relative w-64 h-96 bg-[#FF9494] rounded-t-[5rem] rounded-b-2xl border-8 border-[#FFE3E1] shadow-[0_20px_50px_rgba(255,148,148,0.5)] flex flex-col items-center p-4">
        
        <div className="absolute -top-12 bg-white text-[#FF9494] px-6 py-2 rounded-full font-black uppercase tracking-widest shadow-xl rotate-[-5deg]">
          Bundle Gacha
        </div>

        {/* Glass Dome */}
        <div className="w-full h-48 bg-white/40 rounded-t-[4rem] border-4 border-white/60 mb-4 relative overflow-hidden">
           {/* Fake capsules inside */}
           <div className="absolute bottom-2 left-4 w-12 h-12 bg-yellow-400 rounded-full border-2 border-white opacity-80" />
           <div className="absolute bottom-6 right-6 w-12 h-12 bg-blue-400 rounded-full border-2 border-white opacity-80" />
           <div className="absolute bottom-12 left-10 w-12 h-12 bg-green-400 rounded-full border-2 border-white opacity-80" />
        </div>

        {/* Mechanism */}
        <div className="flex items-center gap-4 relative">
          <div className="w-16 h-16 bg-[#FFE3E1] rounded-full border-4 border-white flex items-center justify-center relative cursor-pointer" onClick={handleCrank}>
            <motion.div 
              className="w-12 h-4 bg-white rounded-full absolute"
              animate={{ rotate: crank }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="text-white font-black uppercase text-xs tracking-widest leading-tight">Turn to add<br/>random addon</div>
        </div>

        {/* Output Tray */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-12 bg-[#FFE3E1] rounded-xl border-4 border-white/50 overflow-hidden flex items-center justify-center">
          <div className="w-24 h-8 bg-black/10 rounded-lg shadow-inner" />
        </div>
      </div>

      {/* Cart Summary */}
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-black text-[#FF9494] uppercase tracking-widest mb-6">Your Bundle</h2>
        
        <div className="flex flex-col gap-4 mb-8">
          <div className="bg-white p-4 rounded-2xl flex justify-between font-bold border-2 border-[#FFE3E1]">
            <span>Base Product</span>
            <span>$299</span>
          </div>
          
          <AnimatePresence>
            {capsules.map(cap => (
              <motion.div 
                key={cap.id}
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                className="bg-[#FFE3E1] p-4 rounded-2xl flex items-center gap-4 font-bold border-2 border-[#FF9494]"
              >
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white shadow-md flex-shrink-0" />
                <div className="flex-grow">{cap.text}</div>
                <div className="text-[#FF9494] font-black">+{'$'}{cap.price}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="border-t-4 border-[#FF9494] pt-4 flex justify-between items-end">
          <span className="font-bold text-[#FF9494] uppercase tracking-widest text-sm">Total</span>
          <motion.span key={total} className="text-5xl font-black text-[#FF9494]" initial={{ scale: 1.5 }} animate={{ scale: 1 }}>
            {'$'}{total}
          </motion.span>
        </div>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether19',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether19({ data }: { data: any }) {
  const [cart, setCart] = useState<{name: string, price: number}[]>([]);

  const beltItems = [
    { name: "Camera Case", price: 49 },
    { name: "Extra Battery", price: 29 },
    { name: "Memory Card", price: 39 },
    { name: "Lens Pen", price: 15 },
    { name: "Tripod", price: 199 }
  ];

  const total = 999 + cart.reduce((s, i) => s + i.price, 0);

  const addToCart = (item: any) => setCart([...cart, item]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      <div className="text-center mb-16 z-10 w-full text-white">
        <h2 className="text-4xl font-black uppercase tracking-widest">Checkout Belt</h2>
        <p className="font-bold mt-2 text-xs tracking-widest uppercase text-emerald-400">Click items on the belt to grab them</p>
      </div>

      {/* Belt Mechanism */}
      <div className="w-[120%] h-32 bg-neutral-800 border-y-8 border-neutral-950 flex items-center relative overflow-hidden -mx-8 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Belt Texture */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_90%,#111_90%,#111_100%)] bg-[length:40px_100%]"
          animate={{ x: [0, -40] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Items on Belt */}
        <motion.div 
          className="flex gap-16 absolute left-0"
          animate={{ x: [800, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {beltItems.map((item, i) => (
            <div 
              key={i} 
              className="w-32 h-20 bg-neutral-100 rounded-xl flex flex-col items-center justify-center text-black font-bold shadow-xl border-b-4 border-neutral-300 cursor-pointer hover:bg-emerald-100 hover:scale-110 transition-transform"
              onClick={() => addToCart(item)}
            >
              <span className="text-xs uppercase tracking-widest text-center px-2">{item.name}</span>
              <span className="text-emerald-600 font-black mt-1">+{'$'}{item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 bg-neutral-950 p-6 rounded-3xl border border-neutral-800 flex items-center justify-between w-full max-w-xl z-10"
        layout
      >
        <div className="flex gap-2">
          {cart.length === 0 && <span className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Belt items drop here...</span>}
          {cart.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ scale: 0, y: -50 }} animate={{ scale: 1, y: 0 }}
              className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-[10px] text-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            >
              {item.name}
            </motion.div>
          ))}
        </div>
        
        <div className="text-right ml-8 border-l-2 border-neutral-800 pl-8">
          <div className="text-neutral-500 font-bold text-xs uppercase tracking-widest mb-1">Total Payload</div>
          <motion.div key={total} className="text-3xl font-black text-white" initial={{ color: '#10b981' }} animate={{ color: '#ffffff' }}>
            {'$'}{total}
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether20',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function FrequentlyBoughtTogether20({ data }: { data: any }) {
  const [rightItems, setRightItems] = useState<{id: number, name: string, price: number, weight: number}[]>([]);

  const mainProduct = { name: "Pro Espresso Machine", price: 1299, weight: 10 };
  const accessories = [
    { id: 1, name: "Grinder", price: 299, weight: 4 },
    { id: 2, name: "Tamper", price: 49, weight: 1 },
    { id: 3, name: "Knock Box", price: 39, weight: 2 },
  ];

  const handleAdd = (acc: any) => {
    if (!rightItems.find(i => i.id === acc.id)) {
      setRightItems([...rightItems, acc]);
    }
  };

  const rightWeight = rightItems.reduce((s, i) => s + i.weight, 0);
  const tilt = Math.max(-15, Math.min(15, (rightWeight - mainProduct.weight) * 2)); // Calculate scale tilt angle

  const total = mainProduct.price + rightItems.reduce((s, i) => s + i.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden font-mono">
      
      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Value Balance</h2>
        <p className="text-neutral-500 font-bold mt-2 text-xs tracking-widest uppercase">Click accessories to add to the scale</p>
      </div>

      <div className="flex gap-4 mt-8 mb-24 z-20">
        {accessories.map(acc => {
          const isAdded = rightItems.find(i => i.id === acc.id);
          return (
            <button 
              key={acc.id}
              onClick={() => handleAdd(acc)}
              disabled={!!isAdded}
              className={\`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-colors \${isAdded ? 'bg-neutral-300 text-neutral-500' : 'bg-neutral-900 text-white hover:bg-neutral-700 shadow-xl'}\`}
            >
              + {acc.name} ({'$'}{acc.price})
            </button>
          );
        })}
      </div>

      {/* The Physical Scale */}
      <div className="relative flex flex-col items-center mt-12 w-full max-w-lg">
        
        {/* Scale Beam */}
        <motion.div 
          className="w-full h-4 bg-neutral-800 rounded-full relative z-10"
          animate={{ rotate: tilt }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {/* Left Plate (Main Product) */}
          <div className="absolute left-8 -top-12 flex flex-col items-center" style={{ transform: \`rotate(\${-tilt}deg)\` }}>
            <div className="w-1 h-12 bg-neutral-400 absolute top-0" />
            <div className="w-32 h-4 bg-neutral-600 rounded-full mt-12 absolute -left-16" />
            
            <div className="w-24 h-24 bg-blue-600 absolute bottom-4 rounded-xl flex items-center justify-center text-white text-center font-bold p-2 shadow-2xl border-4 border-black">
              {mainProduct.name}
            </div>
          </div>

          {/* Right Plate (Accessories) */}
          <div className="absolute right-8 -top-12 flex flex-col items-center" style={{ transform: \`rotate(\${-tilt}deg)\` }}>
            <div className="w-1 h-12 bg-neutral-400 absolute top-0" />
            <div className="w-40 h-4 bg-neutral-600 rounded-full mt-12 absolute -left-20" />
            
            <div className="absolute bottom-4 flex gap-1 flex-wrap-reverse justify-center w-36">
              {rightItems.length === 0 && <span className="text-neutral-400 font-bold text-xs">Empty</span>}
              {rightItems.map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  className="w-10 h-10 bg-emerald-500 rounded flex flex-col items-center justify-center text-white text-[8px] font-black leading-tight border border-black shadow-lg"
                >
                  +{item.weight}w
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Scale Base */}
        <div className="w-12 h-32 bg-gradient-to-r from-neutral-700 to-neutral-900 border-x-4 border-black z-0 rounded-t-full -mt-2" />
        <div className="w-48 h-8 bg-black rounded-t-2xl shadow-2xl flex items-center justify-center text-emerald-400 font-black text-xl">
          {'$'}{total}
        </div>
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
