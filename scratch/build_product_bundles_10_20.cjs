const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/16-product-bundles');

function writeComponent(num, code) {
  const folder = `product-bundles-${num}`;
  const filePath = path.join(baseDir, folder, `ProductBundles${num}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// Generate components 10 to 20
for (let i = 10; i <= 20; i++) {
  const code = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Check, Star } from 'lucide-react';

export default function ProductBundles${i}({ data }: { data?: any }) {
  const [selected, setSelected] = useState([1]);

  const mainProduct = {
    name: "Enterprise Studio Hub ${i}",
    price: 399 + ${i} * 20,
    originalPrice: 499 + ${i} * 20,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=80"
  };

  const addOns = [
    { id: 1, name: "Pro Accessory Kit ${i}A", price: 89, originalPrice: 119, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=80" },
    { id: 2, name: "Heavy Duty Mount ${i}B", price: 49, originalPrice: 69, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80" }
  ];

  const total = mainProduct.price + addOns.filter(a => selected.includes(a.id)).reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 md:p-10 min-h-[650px] w-full rounded-[2.5rem] bg-slate-950 text-white flex flex-col items-center justify-between relative overflow-hidden font-sans border border-white/10 select-none">
      <div className="text-center z-10 max-w-xl">
        <span className="px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
          Bundle Layout ${i}
        </span>
        <h2 className="text-3xl font-extrabold text-white">Interactive Production Kit ${i}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl z-10 my-4">
        <div className="bg-slate-900 border-2 border-blue-500/50 rounded-3xl p-4 text-center">
          <img src={mainProduct.image} alt={mainProduct.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
          <h3 className="font-bold text-xs">{mainProduct.name}</h3>
          <span className="text-sm font-black text-white">\${mainProduct.price}</span>
        </div>

        {addOns.map(item => {
          const isSel = selected.includes(item.id);
          return (
            <div 
              key={item.id}
              onClick={() => setSelected(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
              className={\`bg-slate-900 border rounded-3xl p-4 text-center cursor-pointer transition-all \${isSel ? 'border-blue-500 shadow-md' : 'border-white/10 opacity-70'}\`}
            >
              <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-2xl mb-2" />
              <h3 className="font-bold text-xs">{item.name}</h3>
              <span className="text-sm font-black text-blue-400">+\${item.price}</span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-3xl bg-slate-900 border border-white/10 p-4 rounded-3xl flex justify-between items-center z-10">
        <div>
          <span className="text-xs text-slate-400 block">Total Production Bundle</span>
          <span className="text-2xl font-black text-blue-400">\${total}</span>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-2">
          <ShoppingBag size={16} /> Add Bundle ${i} to Cart
        </button>
      </div>
    </div>
  );
}
`;
  writeComponent(i, code);
}

console.log('ProductBundles 10 to 20 built successfully!');
