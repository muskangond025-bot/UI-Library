import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShippingDeliveryInformation4({ data }: { data: any }) {
  const [selected, setSelected] = useState(0);
  
  const regions = [
    { name: 'North America', time: '3-5 Days', cost: 'Free over $50' },
    { name: 'Europe', time: '5-7 Days', cost: '$15 Flat Rate' },
    { name: 'Asia Pacific', time: '7-10 Days', cost: '$25 Flat Rate' }
  ];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-50 flex items-center justify-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-black text-zinc-900 mb-8 uppercase tracking-tighter leading-none">Shipping<br/>Destinations</h2>
          <div className="space-y-4">
            {regions.map((region, i) => (
              <div 
                key={i}
                onClick={() => setSelected(i)}
                className={`cursor-pointer border-b-2 py-4 transition-colors duration-300 ${selected === i ? 'border-zinc-900' : 'border-zinc-200 hover:border-zinc-400'}`}
              >
                <h3 className={`text-2xl font-bold ${selected === i ? 'text-zinc-900' : 'text-zinc-400'}`}>
                  {region.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-zinc-900 text-white p-12 rounded-[2rem] h-full flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-zinc-400 font-bold uppercase tracking-widest mb-2">Estimated Time</div>
              <div className="text-5xl font-black mb-12">{regions[selected].time}</div>
              
              <div className="text-zinc-400 font-bold uppercase tracking-widest mb-2">Shipping Cost</div>
              <div className="text-4xl font-light">{regions[selected].cost}</div>
            </motion.div>
          </AnimatePresence>
          
          <motion.div 
            className="absolute -right-20 -bottom-20 text-[20rem] font-black text-zinc-800/50 leading-none pointer-events-none select-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            key={`bg-${selected}`}
            transition={{ duration: 0.5 }}
          >
            {selected + 1}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
