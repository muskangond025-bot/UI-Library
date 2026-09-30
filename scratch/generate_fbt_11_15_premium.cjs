const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'FrequentlyBoughtTogether11',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FrequentlyBoughtTogether11({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Premium Leather Case", price: 89, desc: "Hand-crafted Italian leather" },
    { id: 2, name: "Magnetic Charger", price: 49, desc: "Fast wireless charging" },
    { id: 3, name: "Sapphire Screen", price: 39, desc: "Edge-to-edge protection" },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="z-10 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center">
        
        {/* Main Product */}
        <div className="flex-shrink-0 w-80 h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div>
            <h3 className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-2">Main Product</h3>
            <h2 className="text-3xl font-black text-white leading-tight">Pro Device<br/>Ultra</h2>
          </div>
          <div>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">$999</div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-neutral-200 transition-colors">
              Add Bundle to Cart
            </button>
          </div>
        </div>

        {/* Glassmorphic Accessories */}
        <div className="flex-grow flex flex-col gap-4 w-full">
          {items.map((item, i) => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div
                key={item.id}
                onClick={() => toggle(item.id)}
                className={\`w-full p-6 rounded-2xl cursor-pointer backdrop-blur-md border transition-all duration-500 flex items-center justify-between group \${isSel ? 'bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'}\`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', damping: 20 }}
              >
                <div className="flex items-center gap-6">
                  <div className={\`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 \${isSel ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}\`}>
                    <motion.div animate={{ rotate: isSel ? 45 : 0 }} transition={{ type: 'spring' }}>
                      <Plus size={20} />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{item.name}</div>
                    <div className="text-white/50 text-sm mt-1">{item.desc}</div>
                  </div>
                </div>
                <div className="text-2xl font-black text-white/90">
                  +$\`\${item.price}\`
                </div>
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
    name: 'FrequentlyBoughtTogether12',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function FrequentlyBoughtTogether12({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Mechanical Keyboard", price: 149 },
    { id: 2, name: "Wireless Mouse", price: 79 },
    { id: 3, name: "Desk Mat XXL", price: 39 },
    { id: 4, name: "Monitor Arm", price: 99 },
    { id: 5, name: "Webcam 4K", price: 129 },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 1999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="min-h-[500px] rounded-3xl bg-[#0a0a0a] flex flex-col justify-center relative overflow-hidden font-sans border border-neutral-800">
      
      <div className="px-12 mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-2">Enhance your setup</h3>
          <h2 className="text-4xl font-black text-white tracking-tight">Add Accessories</h2>
        </div>
        <div className="text-right">
          <h3 className="text-neutral-500 text-xs font-bold tracking-[0.3em] uppercase mb-2">Total</h3>
          <motion.div key={total} className="text-4xl font-black text-white">$\`\${total}\`</motion.div>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group py-8">
        
        {/* Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate array for infinite seamless scroll */}
          {[...items, ...items].map((item, i) => {
            const isSel = selected.includes(item.id);
            return (
              <motion.div 
                key={i}
                onClick={() => toggle(item.id)}
                className={\`flex-shrink-0 w-[300px] h-[160px] rounded-2xl p-6 cursor-pointer border flex flex-col justify-between transition-colors \${isSel ? 'bg-white text-black border-white' : 'bg-neutral-900 text-white border-neutral-800 hover:border-neutral-600'}\`}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start">
                  <div className={\`w-8 h-8 rounded-full border-2 flex items-center justify-center \${isSel ? 'border-black' : 'border-neutral-600'}\`}>
                    <AnimatePresence>
                      {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check size={16} /></motion.div>}
                    </AnimatePresence>
                  </div>
                  <div className="text-xl font-black">+$\`\${item.price}\`</div>
                </div>
                <div className="font-bold text-lg tracking-wide">{item.name}</div>
              </motion.div>
            );
          })}
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
                className={\`h-64 rounded-2xl p-6 cursor-pointer border-2 transition-all flex flex-col justify-end \${isSel ? 'bg-emerald-500/20 border-emerald-500' : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'}\`}
              >
                <div className="text-white font-bold text-lg leading-tight mb-2">{item.name}</div>
                <div className={\`font-black text-2xl \${isSel ? 'text-emerald-400' : 'text-neutral-400'}\`}>+$\`\${item.price}\`</div>
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
            <span className="text-2xl font-black">$\`\${total}\`</span>
            <button 
              className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      \`}} />
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether14',
    content: `import React, { useState, useEffect } from 'react';

export default function FrequentlyBoughtTogether14({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([1]); // 1 is main
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { id: 1, name: "developer_laptop_m3", price: 1999, isMain: true },
    { id: 2, name: "ext_monitor_4k", price: 699 },
    { id: 3, name: "mech_keyboard_brown", price: 159 },
    { id: 4, name: "hub_thunderbolt_4", price: 249 },
  ];

  const total = items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    if (id === 1) return;
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-12 min-h-[600px] rounded-3xl bg-[#0d0d0d] flex items-center justify-center font-mono text-[#e5e5e5] border border-[#333]">
      
      <div className="w-full max-w-3xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-[#333]">
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <div className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="ml-4 text-xs text-neutral-500">~/shop/bundle.sh</span>
        </div>

        <div className="mb-8">
          <span className="text-[#666]"># SELECT ADDITIONAL HARDWARE TO COMPILE BUNDLE</span>
        </div>

        {/* Item List */}
        <div className="flex flex-col gap-2 mb-12">
          {items.map(item => {
            const isSel = selected.includes(item.id);
            return (
              <div 
                key={item.id}
                onClick={() => toggle(item.id)}
                className={\`flex items-center group cursor-pointer \${isSel ? 'text-white' : 'text-[#666] hover:text-[#999]'}\`}
              >
                <span className="w-8">
                  {isSel ? <span className="text-emerald-500">[*]</span> : <span>[ ]</span>}
                </span>
                <span className="w-64">{item.name}</span>
                <span className="w-32 text-right border-b border-dotted border-[#333] group-hover:border-[#666] mx-4 flex-grow" />
                <span className="w-16 text-right">$\`\${item.price}\`</span>
              </div>
            );
          })}
        </div>

        {/* Terminal Output */}
        <div className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg">
          <div className="flex justify-between items-center text-lg">
            <span>> CALCULATING_TOTAL...</span>
            <span className="text-emerald-500">
              $\`\${total}\`
              <span className={\`inline-block w-3 h-5 ml-1 align-middle bg-emerald-500 \${cursorVisible ? 'opacity-100' : 'opacity-0'}\`} />
            </span>
          </div>
          <div className="mt-6">
            <button className="bg-[#e5e5e5] text-[#0d0d0d] px-8 py-3 font-bold text-sm hover:bg-white transition-colors">
              EXECUTE_CHECKOUT
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether15',
    content: `import React, { useState } from 'react';
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
      <div className={\`transition-all duration-500 \${expanded ? 'filter blur-md scale-95 opacity-50' : ''}\`}>
        <div className="w-80 h-96 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-center border border-neutral-200">
          <h2 className="text-3xl font-black text-neutral-900">Studio Mic Pro</h2>
          <p className="text-neutral-500 font-bold mt-2">$499</p>
        </div>
      </div>

      {/* Dynamic Island */}
      <motion.div 
        layout
        className={\`absolute top-8 bg-black text-white rounded-[32px] overflow-hidden shadow-2xl z-50 \${expanded ? 'w-[400px] p-6' : 'w-48 h-16 p-2 cursor-pointer flex items-center justify-center hover:scale-105 transition-transform'}\`}
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
                      className={\`flex justify-between items-center p-4 rounded-2xl cursor-pointer transition-colors \${isSel ? 'bg-white text-black' : 'bg-neutral-900 text-white hover:bg-neutral-800'}\`}
                    >
                      <span className="font-bold">{item.name}</span>
                      <span className={\`font-black \${isSel ? 'text-black' : 'text-neutral-400'}\`}>+$\`\${item.price}\`</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-neutral-800 flex justify-between items-center">
                <div>
                  <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-1">Total Price</div>
                  <div className="text-3xl font-black">$\`\${total}\`</div>
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
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '15-frequently-bought-together', 'frequently-bought-together-' + comp.name.replace('FrequentlyBoughtTogether', ''), comp.name + '.tsx');
  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
