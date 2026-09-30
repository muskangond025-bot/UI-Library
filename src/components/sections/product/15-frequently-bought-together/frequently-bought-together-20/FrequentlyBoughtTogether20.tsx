import React, { useState } from 'react';
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
                className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors z-10 ${isSel ? 'bg-white border-2 border-white' : 'bg-black border border-neutral-700 hover:border-neutral-500'}`}
                style={{ left: `calc(50% + ${item.pos.x}px)`, top: `calc(50% + ${item.pos.y}px)` }}
                onClick={() => toggle(item.id)}
                whileHover={{ scale: 1.1 }}
              >
                {/* Label tooltips */}
                <div className={`absolute ${item.pos.y < 0 ? 'bottom-full mb-2' : 'top-full mt-2'} whitespace-nowrap text-center`}>
                  <div className={`text-xs font-bold ${isSel ? 'text-white' : 'text-neutral-500'}`}>{item.name}</div>
                  <div className={`text-[10px] ${isSel ? 'text-white/70' : 'text-neutral-700'}`}>+$${item.price}/mo</div>
                </div>
                
                {/* Node center point */}
                <div className={`w-2 h-2 rounded-full ${isSel ? 'bg-black' : 'bg-neutral-700'}`} />
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
        <motion.span key={total} className="text-2xl font-normal text-white">$${total}</motion.span>
      </motion.div>

    </div>
  );
}
