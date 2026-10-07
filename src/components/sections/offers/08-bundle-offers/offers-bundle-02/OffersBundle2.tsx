import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, ShieldCheck, Sparkles, Trash2 } from 'lucide-react';

export function OffersBundle2() {
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 2]);
  const [claimed, setClaimed] = useState(false);

  const availableItems = [
    { id: 1, name: 'Vitamin C Brightening Serum', price: '$45', tag: 'Skincare' },
    { id: 2, name: 'Hydrating Facial Cleanser', price: '$35', tag: 'Skincare' },
    { id: 3, name: 'Niacinamide Pore Toner', price: '$38', tag: 'Skincare' },
    { id: 4, name: 'Hyaluronic Acid Gel Cream', price: '$42', tag: 'Skincare' },
  ];

  const handleToggle = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const handleClaim = () => {
    if (selectedIds.length < 3) return;
    setClaimed(true);
    setTimeout(() => setClaimed(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0d0914] text-white rounded-3xl border border-purple-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>BUILD YOUR OWN BUNDLE (BYOB) TRAY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300 tracking-tight">
          Build Your Own Skincare Trio
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Pick 3 skincare items from our catalog to unlock flat 30% bundle savings + free gift box.
        </p>
      </div>

      {/* Catalog Grid */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 mb-8">
        {availableItems.map((item) => {
          const isSelected = selectedIds.includes(item.id);

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => handleToggle(item.id)}
              className={`p-5 rounded-2xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 border-purple-400 shadow-lg shadow-purple-600/30'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-300 uppercase">
                  {item.tag}
                </span>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                  isSelected ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                <span className="text-sm font-mono font-black text-purple-300 block mt-1">
                  {item.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Sticky Tray */}
      <div className="w-full max-w-2xl relative z-10">
        <div className="p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border-2 border-purple-500/40 shadow-2xl space-y-5 text-left">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono font-bold">
              <span className="text-slate-300">Bundle Slot Fill ({selectedIds.length}/3 Items Selected)</span>
              <span className="text-purple-300">
                {selectedIds.length === 3 ? '🎉 30% BUNDLE UNLOCKED!' : `ADD ${3 - selectedIds.length} MORE ITEM`}
              </span>
            </div>
            <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-purple-500/30 p-0.5">
              <motion.div
                animate={{ width: `${(selectedIds.length / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 rounded-full"
              />
            </div>
          </div>

          {/* CTA Action */}
          <button
            onClick={handleClaim}
            disabled={selectedIds.length < 3}
            className={`w-full py-4 rounded-xl font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all ${
              selectedIds.length === 3
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:brightness-110 text-white shadow-purple-600/30 active:scale-95'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
            }`}
          >
            {claimed ? <Check className="w-4 h-4 text-white" /> : <ShoppingBag className="w-4 h-4" />}
            <span>
              {selectedIds.length === 3
                ? claimed
                  ? 'TRIO BUNDLE ADDED TO CART!'
                  : 'ADD 3-ITEM BUNDLE TO CART (30% OFF)'
                : `SELECT ${3 - selectedIds.length} MORE ITEM TO UNLOCK BUNDLE`}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OffersBundle2;
