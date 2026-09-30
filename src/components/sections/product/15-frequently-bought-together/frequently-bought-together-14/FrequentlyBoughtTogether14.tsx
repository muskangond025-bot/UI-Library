import React, { useState, useEffect } from 'react';

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
                className={`flex items-center group cursor-pointer ${isSel ? 'text-white' : 'text-[#666] hover:text-[#999]'}`}
              >
                <span className="w-8">
                  {isSel ? <span className="text-emerald-500">[*]</span> : <span>[ ]</span>}
                </span>
                <span className="w-64">{item.name}</span>
                <span className="w-32 text-right border-b border-dotted border-[#333] group-hover:border-[#666] mx-4 flex-grow" />
                <span className="w-16 text-right">$${item.price}</span>
              </div>
            );
          })}
        </div>

        {/* Terminal Output */}
        <div className="p-6 bg-[#1a1a1a] border border-[#333] rounded-lg">
          <div className="flex justify-between items-center text-lg">
            <span>&gt; CALCULATING_TOTAL...</span>
            <span className="text-emerald-500">
              $${total}
              <span className={`inline-block w-3 h-5 ml-1 align-middle bg-emerald-500 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
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
