import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Equal, ShoppingBag, Check, ShieldCheck, Sparkles, CheckSquare, Square } from 'lucide-react';

export function OffersBundle1() {
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2, 3]);
  const [added, setAdded] = useState(false);

  const bundleProducts = [
    { id: 1, name: 'Pro Mirrorless Camera Body', price: 899, isMain: true, icon: '📷' },
    { id: 2, name: '50mm f/1.8 Prime Lens', price: 199, isMain: false, icon: '🔍' },
    { id: 3, name: 'Heavy-Duty Tripod Stand', price: 99, isMain: false, icon: '📐' },
  ];

  const toggleItem = (id: number) => {
    if (id === 1) return; // Main item cannot be unchecked
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalPrice = selectedItems.reduce((sum, id) => {
    const item = bundleProducts.find((p) => p.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const bundleDiscounted = totalPrice * 0.8; // 20% discount on total
  const savings = totalPrice - bundleDiscounted;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090d16] text-white rounded-3xl border border-blue-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
          <span>FREQUENTLY BOUGHT TOGETHER BUNDLE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-blue-300 tracking-tight">
          Frequently Bought Together Combo
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Combine complementary accessories with your main camera body & get instant 20% bundle savings!
        </p>
      </div>

      {/* Main Bundle Connector Layout Container */}
      <div className="w-full max-w-4xl relative z-10 space-y-8">
        {/* Plus (+) Connector Horizontal Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6">
          {bundleProducts.map((product, idx) => {
            const isChecked = selectedItems.includes(product.id);

            return (
              <React.Fragment key={product.id}>
                {idx > 0 && (
                  <div className="w-8 h-8 rounded-full bg-blue-950 border border-sky-400/40 flex items-center justify-center shrink-0">
                    <Plus className="w-4 h-4 text-sky-400" />
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => toggleItem(product.id)}
                  className={`w-full lg:w-1/3 p-5 rounded-2xl border-2 transition-all cursor-pointer text-left space-y-3 relative overflow-hidden ${
                    isChecked
                      ? 'bg-slate-900 border-sky-400 shadow-xl shadow-sky-600/20'
                      : 'bg-slate-950 border-slate-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{product.icon}</span>
                    {!product.isMain && (
                      <div className="text-sky-400">
                        {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-600" />}
                      </div>
                    )}
                    {product.isMain && (
                      <span className="px-2 py-0.5 rounded bg-sky-500 text-slate-950 text-[10px] font-mono font-black uppercase">
                        MAIN ITEM
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">{product.name}</h4>
                    <span className="text-xs font-mono font-bold text-sky-300 block mt-1">
                      ${product.price}.00
                    </span>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bundle Summary & CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-2 border-sky-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left"
        >
          <div>
            <div className="flex items-center gap-2 font-mono">
              <span className="text-xs text-slate-400 line-through">${totalPrice.toFixed(2)}</span>
              <span className="text-3xl font-black text-white">${bundleDiscounted.toFixed(2)}</span>
              <span className="px-2.5 py-1 rounded bg-emerald-500 text-slate-950 text-xs font-mono font-black uppercase shadow-md">
                SAVE ${savings.toFixed(2)} (20% OFF)
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Bundle includes {selectedItems.length} selected items with instant 20% discount.
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-8 py-4.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:brightness-110 text-white font-mono font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-600/30 active:scale-95 transition-all whitespace-nowrap"
          >
            {added ? <Check className="w-5 h-5 text-emerald-300" /> : <ShoppingBag className="w-5 h-5" />}
            <span>{added ? 'ALL ITEMS ADDED TO CART!' : `ADD BUNDLE TO CART (${selectedItems.length} ITEMS)`}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle1;
