const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'FrequentlyBoughtTogether16',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether16({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Noise Cancelling Pods", price: 249, img: "bg-neutral-800" },
    { id: 2, name: "Leather Folio", price: 129, img: "bg-stone-800" },
    { id: 3, name: "Fast Charger", price: 49, img: "bg-zinc-800" },
    { id: 4, name: "Screen Shield", price: 29, img: "bg-slate-800" },
  ];

  const total = 999 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-[600px] rounded-3xl bg-[#f5f5f7] flex flex-col items-center py-16 relative overflow-hidden font-sans">
      
      <div className="text-center mb-16 z-10 w-full px-8 flex justify-between items-end max-w-5xl">
        <div className="text-left">
          <h2 className="text-5xl font-semibold text-[#1d1d1f] tracking-tight">Mix. Match.</h2>
          <h2 className="text-5xl font-semibold text-[#86868b] tracking-tight">Make it yours.</h2>
        </div>
        <div className="text-right">
          <p className="text-[#86868b] text-sm font-medium mb-1">Total Package</p>
          <div className="text-3xl font-semibold text-[#1d1d1f]">$\`\${total}\`</div>
        </div>
      </div>

      <div className="flex gap-4 w-full max-w-5xl px-8 perspective-[2000px]">
        {items.map((item, i) => {
          const isSel = selected.includes(item.id);
          const isHovered = hovered === item.id;
          
          return (
            <motion.div
              key={item.id}
              onClick={() => toggle(item.id)}
              onHoverStart={() => setHovered(item.id)}
              onHoverEnd={() => setHovered(null)}
              className={\`relative flex-1 h-[300px] rounded-3xl cursor-pointer \${item.img} p-6 flex flex-col justify-between overflow-hidden group border-4 transition-colors \${isSel ? 'border-blue-500 shadow-2xl' : 'border-transparent'}\`}
              initial={false}
              animate={{ 
                rotateY: hovered !== null && hovered !== item.id ? (i > items.findIndex(x => x.id === hovered) ? -15 : 15) : 0,
                scale: isHovered ? 1.05 : 1,
                z: isHovered ? 50 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-0" />
              
              <div className="relative z-10 text-white/50 text-xs font-semibold uppercase tracking-widest">
                Add-on 0{i + 1}
              </div>

              <div className="relative z-10">
                <div className="text-white font-semibold text-xl leading-tight mb-2">{item.name}</div>
                <div className="flex items-center justify-between">
                  <div className="text-white/80 font-medium">+$\`\${item.price}\`</div>
                  <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors \${isSel ? 'bg-blue-500 border-blue-500' : 'border-white/50 group-hover:border-white'}\`}>
                    {isSel && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </div>
              </div>
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
    name: 'FrequentlyBoughtTogether17',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';

export default function FrequentlyBoughtTogether17({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Business Subscription", price: 120, desc: "Billed annually" },
    { id: 2, name: "Cloud Storage 2TB", price: 40, desc: "Encrypted sync" },
    { id: 3, name: "Premium Support", price: 15, desc: "24/7 Phone & Email" },
  ];

  const total = 299 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="p-12 min-h-[600px] rounded-3xl bg-[#f6f9fc] flex items-center justify-center relative overflow-hidden font-sans text-[#32325d]">
      
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] flex overflow-hidden">
        
        {/* Left Side: Base Product */}
        <div className="w-1/3 bg-[#6772e5] p-8 text-white flex flex-col justify-between">
          <div>
            <Box size={40} className="mb-6 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Pro Workspace</h2>
            <p className="text-[#e6ebf1] text-sm leading-relaxed">Everything you need to run your business online.</p>
          </div>
          <div>
            <div className="text-3xl font-light mb-6">$299<span className="text-sm text-[#e6ebf1] ml-1">/mo</span></div>
            <button className="w-full py-3 bg-[#32325d] text-white rounded-md font-bold text-sm shadow hover:shadow-lg hover:-translate-y-px transition-all flex items-center justify-center gap-2">
              Pay $\`\${total}\` <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Bento Grid Add-ons */}
        <div className="w-2/3 p-8 bg-white flex flex-col">
          <h3 className="text-lg font-bold mb-6 flex items-center justify-between">
            Recommended Add-ons
            <span className="text-sm font-normal text-[#8898aa]">{selected.length} selected</span>
          </h3>

          <div className="flex flex-col gap-4 flex-grow justify-center">
            {items.map(item => {
              const isSel = selected.includes(item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={\`group relative p-4 rounded-lg border cursor-pointer transition-all duration-300 overflow-hidden \${isSel ? 'border-[#6772e5] bg-[#f6f9fc]' : 'border-[#e6ebf1] hover:border-[#8898aa]'}\`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#6772e5]/5"
                    initial={false}
                    animate={{ opacity: isSel ? 1 : 0 }}
                  />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={\`w-5 h-5 rounded flex items-center justify-center transition-colors \${isSel ? 'bg-[#6772e5] text-white' : 'border-2 border-[#8898aa] group-hover:border-[#6772e5]'}\`}>
                        {isSel && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <div>
                        <div className={\`font-bold \${isSel ? 'text-[#32325d]' : 'text-[#525f7f]'}\`}>{item.name}</div>
                        <div className="text-[#8898aa] text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                    <div className={\`font-bold \${isSel ? 'text-[#6772e5]' : 'text-[#525f7f]'}\`}>
                      +$\`\${item.price}\`
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
`
  },
  {
    name: 'FrequentlyBoughtTogether18',
    content: `import React, { useState, useEffect } from 'react';
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
                className={\`p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300 flex flex-col h-40 justify-between \${isSel ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl' : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300'}\`}
              >
                <div className="flex justify-between items-start">
                  <div className="font-bold text-lg leading-tight w-2/3">{item.name}</div>
                  <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center \${isSel ? 'border-white bg-white text-black' : 'border-neutral-300'}\`}>
                    {isSel && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                </div>
                <div className={\`font-bold \${isSel ? 'text-white' : 'text-neutral-500'}\`}>
                  +$\`\${item.price}\`
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
                  <span>+$\`\${item.price}\`</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="pt-6 border-t border-neutral-200 mt-4">
            <div className="flex justify-between items-end mb-6">
              <span className="font-bold">Total</span>
              <motion.span key={total} className="text-2xl font-black">$\`\${total}\`</motion.span>
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
`
  },
  {
    name: 'FrequentlyBoughtTogether19',
    content: `import React, { useState, useRef } from 'react';
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
            <span className="font-black text-2xl">$\`\${total}\`</span>
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
                className={\`p-4 rounded-xl cursor-pointer flex justify-between items-center transition-colors \${isSel ? 'bg-emerald-50 border border-emerald-200' : 'bg-neutral-50 border border-transparent hover:bg-neutral-100'}\`}
              >
                <div className="flex items-center gap-4">
                  <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center \${isSel ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-neutral-300'}\`}>
                     {isSel && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <span className="font-bold text-neutral-900">{item.name}</span>
                </div>
                <span className="font-black text-emerald-600">+$\`\${item.price}\`</span>
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
`
  },
  {
    name: 'FrequentlyBoughtTogether20',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FrequentlyBoughtTogether20({ data }: { data: any }) {
  const [selected, setSelected] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Analytics API", price: 49, pos: { x: -120, y: -80 } },
    { id: 2, name: "SSO Login", price: 99, pos: { x: 120, y: -80 } },
    { id: 3, name: "Custom Domain", price: 19, pos: { x: -120, y: 80 } },
    { id: 4, name: "DDoS Protection", price: 149, pos: { x: 120, y: 80 } },
  ];

  const toggle = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = 0 + items.filter(i => selected.includes(i.id)).reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-black flex flex-col items-center justify-center relative overflow-hidden font-mono selection:bg-white selection:text-black">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="text-center absolute top-12 z-10 w-full text-white">
        <h2 className="text-2xl font-normal tracking-widest uppercase mb-2">Architecture</h2>
        <p className="text-neutral-500 text-sm">Select modules to attach to core</p>
      </div>

      <div className="relative w-[400px] h-[400px] flex items-center justify-center z-10">
        
        {/* Core Node */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          <span className="font-black text-black text-xs uppercase tracking-widest">Core</span>
        </div>

        {/* Lines and Accessory Nodes */}
        {items.map(item => {
          const isSel = selected.includes(item.id);
          
          return (
            <React.Fragment key={item.id}>
              {/* Connection Line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.line 
                  x1="200" y1="200" 
                  x2={200 + item.pos.x} y2={200 + item.pos.y}
                  stroke={isSel ? "#ffffff" : "#333333"}
                  strokeWidth={isSel ? 2 : 1}
                  strokeDasharray={isSel ? "0" : "4 4"}
                  initial={false}
                  animate={{ stroke: isSel ? "#ffffff" : "#333333" }}
                  transition={{ duration: 0.3 }}
                />
                {/* Flow animation along line if selected */}
                {isSel && (
                  <motion.circle 
                    r="3" fill="#ffffff"
                    animate={{
                      cx: [200 + item.pos.x, 200],
                      cy: [200 + item.pos.y, 200]
                    }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                )}
              </svg>

              {/* Node */}
              <motion.div 
                className={\`absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors z-10 \${isSel ? 'bg-white border-2 border-white' : 'bg-black border border-neutral-700 hover:border-neutral-500'}\`}
                style={{ left: \`calc(50% + \${item.pos.x}px)\`, top: \`calc(50% + \${item.pos.y}px)\` }}
                onClick={() => toggle(item.id)}
                whileHover={{ scale: 1.1 }}
              >
                {/* Label tooltips */}
                <div className={\`absolute \${item.pos.y < 0 ? 'bottom-full mb-2' : 'top-full mt-2'} whitespace-nowrap text-center\`}>
                  <div className={\`text-xs font-bold \${isSel ? 'text-white' : 'text-neutral-500'}\`}>{item.name}</div>
                  <div className={\`text-[10px] \${isSel ? 'text-white/70' : 'text-neutral-700'}\`}>+$\`\${item.price}\`/mo</div>
                </div>
                
                {/* Node center point */}
                <div className={\`w-2 h-2 rounded-full \${isSel ? 'bg-black' : 'bg-neutral-700'}\`} />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      <motion.div 
        className="absolute bottom-12 bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between w-full max-w-sm z-10"
        layout
      >
        <span className="text-white text-sm uppercase tracking-widest">Est. Monthly</span>
        <motion.span key={total} className="text-2xl font-normal text-white">$\`\${total}\`</motion.span>
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
