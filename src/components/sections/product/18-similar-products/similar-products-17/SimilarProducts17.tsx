import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Magnet, Check, ArrowRight } from 'lucide-react';

function MagneticButton({ item, onSelect, isSelected }: { item: any; onSelect: () => void; isSelected: boolean }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      setPosition({ x: distanceX * 0.25, y: distanceY * 0.25 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-full pt-4 border-t border-slate-800">
      <motion.button
        ref={btnRef}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 15 }}
        onClick={onSelect}
        className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95"
      >
        {isSelected ? (
          <span className="flex items-center gap-1 font-bold">
            <Check size={16} /> MAGNETICALLY SELECTED!
          </span>
        ) : (
          <>
            <Magnet size={16} />
            <span>MAGNETIC SELECT</span>
          </>
        )}
      </motion.button>
    </div>
  );
}

export default function SimilarProducts17({ data }: { data?: any }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    { id: 1, name: "Magnetic Wireless Power Bank 10K", price: "$89", diff: "Snap-On MagSafe", image: "https://images.unsplash.com/photo-1609592424009-4172f8a1a3fb?w=800&auto=format&fit=crop&q=80" },
    { id: 2, name: "Dual Magnetic Charging Stand", price: "$119", diff: "Fast 15W Qi2", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Magnetic Wallet & Phone Grip", price: "$49", diff: "RFID Shielding", image: "https://images.unsplash.com/photo-1622445268465-842886865239?w=800&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="w-full min-h-[640px] bg-slate-950 text-white p-6 md:p-12 rounded-3xl border border-slate-800 relative select-none flex flex-col justify-between font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
            17 / Magnetic CTA Interaction
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Magnetic CTA Buttons</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-xs">
          Interactive action buttons that physically attract towards mouse pointer coordinates on hover.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -6 }}
            className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between shadow-2xl group transition-all"
          >
            <div>
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-950 mb-4">
                <img src={item.image} alt={item.name || item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-2.5 left-2.5 bg-cyan-950/90 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded">
                  {item.diff}
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white">{item.name || item.title}</h3>
              <span className="text-xl font-black text-cyan-400 mt-1 block">{item.price}</span>
            </div>

            <MagneticButton
              item={item}
              isSelected={selectedId === item.id}
              onSelect={() => {
                setSelectedId(item.id);
                setTimeout(() => setSelectedId(null), 1800);
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-mono border-t border-slate-800 pt-4 text-center">
        Move cursor near action button to experience magnetic pull spring interaction
      </div>
    </section>
  );
}
