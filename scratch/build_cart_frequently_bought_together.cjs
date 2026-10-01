const fs = require('fs');
const path = require('path');

const cartFbtBase = path.join(__dirname, '../src/components/sections/cart/06-cart-frequently-bought-together');
if (!fs.existsSync(cartFbtBase)) fs.mkdirSync(cartFbtBase, { recursive: true });

const titles = [
  "Cart Impulse Combo Strip", "Cart Complementary Bundle", "Quick Checkout Add-On Pair",
  "Cart Multi-Item Discount Stack", "Cart Saver Accessory Set", "Instant Cart Pair Switch",
  "Cart Checkout Essentials Stack", "Cart Completion Pair Row", "Frequently Added Accessories Rail",
  "Cart Extra Savings Trio", "Cart Protection & Accessory Bundle", "Cart Upgrade Combo Card",
  "One-Click Cart Bundle Add", "Cart Order Enhancer Pair", "Cart Smart Accessory Slider",
  "Cart Custom Bundle Creator", "Cart Checklist Add-On Pair", "Cart Milestone Bundle Unlock",
  "Cart Dynamic Pair Selector", "Experimental Glassmorphic Cart Bundle"
];

for (let i = 1; i <= 20; i++) {
  const dirName = `cart-frequently-bought-together-${i}`;
  const dir = path.join(cartFbtBase, dirName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsxPath = path.join(dir, `CartFrequentlyBoughtTogether${i}.tsx`);
  const jsonPath = path.join(dir, `cart-frequently-bought-together-${i}.json`);

  const tsxCode = `import React, { useState } from 'react';
import { Plus, Check, ShoppingBag, Sparkles, CheckSquare, Square } from 'lucide-react';

export default function CartFrequentlyBoughtTogether${i}({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="w-full py-6 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 shadow-xl border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            CART FREQUENTLY BOUGHT TOGETHER ${i < 10 ? '0' + i : i} — ${titles[i-1]}
          </h4>
        </div>
        <span className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
          Cart Page Context
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800/80 p-4 rounded-2xl border border-slate-700 gap-4">
        <div className="flex items-center gap-4">
          <div onClick={() => setChecked1(!checked1)} className="flex items-center gap-2 cursor-pointer">
            {checked1 ? <CheckSquare className="text-emerald-400 w-5 h-5" /> : <Square className="text-slate-500 w-5 h-5" />}
            <span className="text-xs font-bold text-slate-200">Silk Pocket Square (₹499)</span>
          </div>
          <span className="text-emerald-400 font-bold">+</span>
          <div onClick={() => setChecked2(!checked2)} className="flex items-center gap-2 cursor-pointer">
            {checked2 ? <CheckSquare className="text-emerald-400 w-5 h-5" /> : <Square className="text-slate-500 w-5 h-5" />}
            <span className="text-xs font-bold text-slate-200">Silver Tie Bar (₹349)</span>
          </div>
        </div>

        <button 
          onClick={() => setAdded(!added)}
          className={\`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md \${
            added ? 'bg-emerald-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }\`}
        >
          {added ? <Check size={14} /> : <ShoppingBag size={14} />}
          <span>{added ? "Bundle Added" : \`Add Both to Cart (+₹\${(checked1 ? 499 : 0) + (checked2 ? 349 : 0)})\`}</span>
        </button>
      </div>
    </div>
  );
}
`;

  const jsonCode = {
    title: `Cart Frequently Bought Together ${i < 10 ? '0' + i : i} — ${titles[i-1]}`,
    description: `Cart page frequently bought together bundle variant ${i}.`,
    context: "cart-page-frequently-bought-together"
  };

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonCode, null, 2), 'utf8');
}

console.log("Cart Frequently Bought Together 20 components created!");
