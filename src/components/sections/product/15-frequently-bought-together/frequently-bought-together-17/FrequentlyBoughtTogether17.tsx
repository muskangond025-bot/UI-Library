import React, { useState } from 'react';
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
              Pay $${total} <ArrowRight size={16} />
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
                  className={`group relative p-4 rounded-lg border cursor-pointer transition-all duration-300 overflow-hidden ${isSel ? 'border-[#6772e5] bg-[#f6f9fc]' : 'border-[#e6ebf1] hover:border-[#8898aa]'}`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#6772e5]/5"
                    initial={false}
                    animate={{ opacity: isSel ? 1 : 0 }}
                  />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${isSel ? 'bg-[#6772e5] text-white' : 'border-2 border-[#8898aa] group-hover:border-[#6772e5]'}`}>
                        {isSel && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <div>
                        <div className={`font-bold ${isSel ? 'text-[#32325d]' : 'text-[#525f7f]'}`}>{item.name}</div>
                        <div className="text-[#8898aa] text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                    <div className={`font-bold ${isSel ? 'text-[#6772e5]' : 'text-[#525f7f]'}`}>
                      +$${item.price}
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
