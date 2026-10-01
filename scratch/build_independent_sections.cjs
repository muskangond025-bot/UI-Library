const fs = require('fs');
const path = require('path');

// 1. PRODUCT RECOMMENDED PRODUCTS (Discovery context)
const productBase = path.join(__dirname, '../src/components/sections/product/19-recommended-products');
if (!fs.existsSync(productBase)) fs.mkdirSync(productBase, { recursive: true });

for (let i = 1; i <= 20; i++) {
  const dirName = `product-recommended-products-${i}`;
  const dir = path.join(productBase, dirName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsxPath = path.join(dir, `ProductRecommendedProducts${i}.tsx`);
  const jsonPath = path.join(dir, `product-recommended-products-${i}.json`);

  const tsxCode = `import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function ProductRecommendedProducts${i}({ data }: { data?: any }) {
  const products = [
    { id: 1, name: "Minimalist Leather Cardholder", price: "₹4,999", badge: "98% Style Match", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800" },
    { id: 2, name: "Artisan Brass Key Carabiner", price: "₹3,499", badge: "Top Picked", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800" },
    { id: 3, name: "Executive Anodized Pen", price: "₹6,499", badge: "Complements Order", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800" },
    { id: 4, name: "Slim Bifold Money Clip", price: "₹5,499", badge: "Popular Pick", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800" }
  ];

  return (
    <div className="w-full min-h-[500px] bg-slate-950 text-white p-8 rounded-3xl font-sans border border-slate-800 my-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1">
            <Sparkles size={14} /> PRODUCT DISCOVERY VARIANT ${i < 10 ? '0' + i : i}
          </span>
          <h2 className="text-3xl font-serif text-white mt-1">Recommended For You</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">Curated product recommendations for your browsing style.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-4 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/5] bg-slate-800 rounded-xl overflow-hidden mb-4">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-amber-400 rounded border border-slate-800">
                  {p.badge}
                </span>
              </div>
              <h3 className="font-serif text-base text-white group-hover:text-amber-400 transition-colors">{p.name}</h3>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-base font-serif text-amber-400 font-bold">{p.price}</span>
              <button className="text-xs text-slate-300 hover:text-white flex items-center gap-1">
                <span>View Product</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

  const jsonCode = {
    title: `Product Recommended Products ${i < 10 ? '0' + i : i}`,
    description: `Product page recommendation grid variant ${i} focusing on discovery and related catalog items.`,
    context: "product-page-discovery"
  };

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonCode, null, 2), 'utf8');
}

// 2. CART RECOMMENDED PRODUCTS (Cart Add-ons context)
const cartBase = path.join(__dirname, '../src/components/sections/cart/07-cart-recommended-products');
if (!fs.existsSync(cartBase)) fs.mkdirSync(cartBase, { recursive: true });

const cartTitles = [
  "Compact Horizontal Recommendation Rail", "Complete The Look Compact Strip", "Add-on Recommendation Row",
  "Compact Horizontal Add-on Strip", "Connected Outfit Composition", "Frequently Added Combo Box",
  "Vertical Checkout List Rows", "Featured + Supporting Alternatives", "Swipeable Mobile Touch Rail",
  "You May Also Need Utility Checkboxes", "Cart-Aware Editorial Layout", "Compact Asymmetric Layout",
  "Quick-Add Rail", "Embedded Cart-Flow Section", "Category Navigation Tabs",
  "Minimal Editorial One More Thing", "Split Layout Complete Order", "Expandable Add-On Drawer",
  "Threshold-Driven Add-Ons", "Experimental Glassmorphic 3D Card"
];

for (let i = 1; i <= 20; i++) {
  const dirName = `cart-recommended-products-${i}`;
  const dir = path.join(cartBase, dirName);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const tsxPath = path.join(dir, `CartRecommendedProducts${i}.tsx`);
  const jsonPath = path.join(dir, `cart-recommended-products-${i}.json`);

  const tsxCode = `import React, { useState } from 'react';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function CartRecommendedProducts${i}({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-50/60 border border-emerald-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
            CART ADD-ON ${i < 10 ? '0' + i : i} — ${cartTitles[i-1]}
          </h4>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
          Cart Completion Context
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm gap-4">
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200" className="w-12 h-12 rounded-xl object-cover border border-slate-200" />
          <div>
            <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase block">RECOMMENDED CART ADD-ON</span>
            <h5 className="text-sm font-bold text-slate-900">Silk Pocket Square — Navy Print</h5>
            <span className="text-xs font-mono font-bold text-slate-600">₹499</span>
          </div>
        </div>

        <button 
          onClick={() => setAdded(!added)}
          className={\`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md \${
            added ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
          }\`}
        >
          {added ? <Check size={14} /> : <Plus size={14} />}
          <span>{added ? "Added To Cart" : "+ Quick Add"}</span>
        </button>
      </div>
    </div>
  );
}
`;

  const jsonCode = {
    title: `Cart Recommended Products ${i < 10 ? '0' + i : i} — ${cartTitles[i-1]}`,
    description: `Cart page completion and quick add-on recommendation variant ${i}.`,
    context: "cart-completion-add-on"
  };

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonCode, null, 2), 'utf8');
}

console.log("Independent components created for Product & Cart!");
