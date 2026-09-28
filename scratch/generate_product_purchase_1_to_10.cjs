const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/03-product-purchase-section');

const designs = [
  // 1. Clean & Minimal (Apple style)
  {
    name: "ProductPurchaseSection1",
    folder: "product-purchase-section-1",
    json: {
      name: "Aethel Pro Wireless Headphones",
      price: "$299.00",
      originalPrice: "$349.00",
      rating: 4.8,
      reviews: 1245,
      description: "Experience high-fidelity audio with industry-leading active noise cancellation.",
      colors: [
        { name: "Midnight Black", hex: "#1a1a1a" },
        { name: "Lunar Silver", hex: "#e2e8f0" },
        { name: "Ocean Blue", hex: "#1e3a8a" }
      ],
      features: ["Free Shipping", "30-Day Returns", "2-Year Warranty"],
      images: [
        "https://picsum.photos/seed/headphone1/800/800",
        "https://picsum.photos/seed/headphone2/800/800",
        "https://picsum.photos/seed/headphone3/800/800"
      ]
    },
    tsx: `import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingBag } from 'lucide-react';

export default function ProductPurchaseSection1({ data }: { data: any }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [mainImage, setMainImage] = useState(data.images[0]);
  const [qty, setQty] = useState(1);

  return (
    <div className="w-full bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Images */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100 aspect-square relative group">
              <img src={mainImage} alt={data.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 shrink-0">
              {data.images.map((img: string, idx: number) => (
                <button key={idx} onClick={() => setMainImage(img)} className={\`relative w-20 md:w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 \${mainImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'}\`}>
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Purchase Details */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(data.rating) ? 'currentColor' : 'none'} className={i < Math.floor(data.rating) ? '' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">{data.rating} ({data.reviews} reviews)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">{data.price}</span>
              {data.originalPrice && (
                <span className="text-lg text-gray-400 line-through mb-1">{data.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">{data.description}</p>
            
            {/* Colors */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Color</span>
                <span className="text-sm text-gray-500">{data.colors[selectedColor].name}</span>
              </div>
              <div className="flex gap-4">
                {data.colors.map((color: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={\`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 \${selectedColor === idx ? 'ring-2 ring-black ring-offset-2' : 'hover:scale-110'}\`}
                  >
                    <span className="w-8 h-8 rounded-full shadow-inner border border-gray-200" style={{ backgroundColor: color.hex }}></span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-full bg-white">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-5 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-l-full transition-colors">-</button>
                <span className="w-8 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-5 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-r-full transition-colors">+</button>
              </div>
              <button className="flex-1 bg-black text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <Truck size={24} className="text-gray-400" />
                <span className="text-xs font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <RefreshCw size={24} className="text-gray-400" />
                <span className="text-xs font-medium">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <ShieldCheck size={24} className="text-gray-400" />
                <span className="text-xs font-medium">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 2. Glassmorphism Floating Card
  {
    name: "ProductPurchaseSection2",
    folder: "product-purchase-section-2",
    json: {
      name: "Aura Smartwatch Series X",
      price: "$499.00",
      description: "Titanium case with sapphire crystal display and advanced health sensors.",
      image: "https://picsum.photos/seed/watch1/1200/800",
      options: ["41mm", "45mm"]
    },
    tsx: `import React, { useState } from 'react';

export default function ProductPurchaseSection2({ data }: { data: any }) {
  const [size, setSize] = useState(0);

  return (
    <div className="w-full relative min-h-screen flex items-center justify-center py-20 px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={data.image} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-70 animate-pulse"></div>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">{data.name}</h1>
          <p className="text-gray-300 leading-relaxed text-sm">{data.description}</p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-white/10 p-1 rounded-full flex gap-1 backdrop-blur-md border border-white/10">
            {data.options.map((opt: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSize(idx)}
                className={\`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 \${size === idx ? 'bg-white text-black shadow-lg' : 'text-white hover:bg-white/10'}\`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-end justify-center gap-2 mb-10">
          <span className="text-5xl font-black text-white drop-shadow-lg">{data.price}</span>
        </div>
        
        <button className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95">
          Pre-Order Now
        </button>
      </div>
    </div>
  );
}`
  },
  // 3. Dark Mode Cyberpunk
  {
    name: "ProductPurchaseSection3",
    folder: "product-purchase-section-3",
    json: {
      name: "Neon Deck Mechanical Keyboard",
      price: "$189.99",
      rating: 4.9,
      switches: ["Linear Red", "Tactile Brown", "Clicky Blue"],
      image: "https://picsum.photos/seed/keyboard/800/600"
    },
    tsx: `import React, { useState } from 'react';

export default function ProductPurchaseSection3({ data }: { data: any }) {
  const [sw, setSw] = useState(0);

  return (
    <div className="w-full bg-[#050505] py-24 font-mono text-white relative overflow-hidden">
      {/* Cyber grid bg */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-lg border border-gray-800 p-2">
              <img src={data.image} alt="Keyboard" className="w-full h-auto rounded object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <div className="text-pink-500 text-sm font-bold tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span> IN STOCK
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{data.name}</h1>
          </div>
          
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {data.price}
          </div>
          
          <div>
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Switch Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.switches.map((type: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setSw(idx)}
                  className={\`py-3 px-4 border rounded transition-all duration-300 uppercase text-xs font-bold tracking-wider \${sw === idx ? 'border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-cyan-950/30' : 'border-gray-800 text-gray-500 hover:border-gray-600'}\`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          <button className="w-full group relative inline-flex items-center justify-center px-8 py-5 font-bold text-black uppercase tracking-[0.1em] overflow-hidden rounded bg-cyan-400 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] mt-4">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
            <span className="relative">Initialize Purchase</span>
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  // 4. Editorial Fashion
  {
    name: "ProductPurchaseSection4",
    folder: "product-purchase-section-4",
    json: {
      name: "The Classic Trench",
      price: "$895",
      designer: "Studio Collection",
      image: "https://picsum.photos/seed/fashion/800/1200",
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    tsx: `import React, { useState } from 'react';

export default function ProductPurchaseSection4({ data }: { data: any }) {
  const [size, setSize] = useState("M");

  return (
    <div className="w-full bg-[#faf9f6] py-20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Image */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={data.image} alt="Trench" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full md:w-1/2 max-w-md flex flex-col justify-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 font-sans">{data.designer}</p>
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 italic">{data.name}</h1>
            <p className="text-3xl text-gray-900 mb-12">{data.price}</p>
            
            <div className="mb-12 font-sans border-t border-b border-gray-200 py-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium uppercase tracking-widest text-gray-900">Select Size</span>
                <button className="text-xs text-gray-500 underline uppercase tracking-widest hover:text-black">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {data.sizes.map((s: string) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={\`flex-1 py-3 text-sm font-medium transition-colors \${size === s ? 'bg-black text-white' : 'bg-transparent text-gray-600 hover:bg-gray-100'}\`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-5 bg-black text-white font-sans uppercase tracking-[0.2em] text-sm hover:bg-gray-800 transition-colors relative overflow-hidden group">
              <span className="relative z-10">Add to Bag</span>
              <div className="absolute inset-0 h-full w-0 bg-gray-700 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 5. Interactive 3D Configurator Vibe
  {
    name: "ProductPurchaseSection5",
    folder: "product-purchase-section-5",
    json: {
      name: "ErgoChair Pro+",
      price: "$699",
      description: "Customize your comfort with premium materials.",
      image: "https://picsum.photos/seed/chair/800/800"
    },
    tsx: `import React, { useState } from 'react';
import { Settings, RefreshCw, ZoomIn } from 'lucide-react';

export default function ProductPurchaseSection5({ data }: { data: any }) {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10"></div>
          
          {/* 3D Viewer Placeholder */}
          <div className="w-full lg:w-1/2 relative group flex justify-center">
            <div className={\`w-full max-w-md aspect-square relative transition-transform duration-1000 \${isRotating ? 'animate-spin-slow' : ''}\`}>
              <img src={data.image} alt={data.name} className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
            {/* Viewer Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-6 py-3 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={() => setIsRotating(!isRotating)} className="text-gray-500 hover:text-blue-600 transition-colors">
                <RefreshCw size={20} className={isRotating ? 'animate-spin' : ''} />
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <ZoomIn size={20} />
              </button>
            </div>
          </div>
          
          {/* Configurator Panel */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <Settings size={14} /> Custom Builder
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
            <p className="text-gray-500 mb-8">{data.description}</p>
            
            <div className="space-y-6 mb-10">
              <div className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-900">Base Model</span>
                <span className="text-blue-700 font-bold">$699</span>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-600">Add Premium Armrests</span>
                <span className="text-gray-500">+$50</span>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-600">Add Headrest</span>
                <span className="text-gray-500">+$30</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total</p>
                <p className="text-3xl font-bold text-gray-900">{data.price}</p>
              </div>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
                Build & Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 6. Bento Box Purchase Panel
  {
    name: "ProductPurchaseSection6",
    folder: "product-purchase-section-6",
    json: {
      name: "Sonic V2 Earbuds",
      price: "$149",
      image: "https://picsum.photos/seed/earbuds/800/800"
    },
    tsx: `import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductPurchaseSection6({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Image Bento */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] overflow-hidden shadow-sm relative group aspect-[4/3] lg:aspect-auto">
            <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full font-bold text-sm">
              New Release
            </div>
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Heart size={20} className="text-gray-600 hover:text-red-500 transition-colors" />
            </button>
          </div>
          
          {/* Details Bento */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex-1 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
              <p className="text-4xl font-black text-indigo-600 mb-6">{data.price}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> In Stock - Ships Today
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-[2rem] p-8 shadow-xl text-white transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex flex-col justify-between group">
              <div className="mb-6">
                <ShoppingCart size={32} className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold">Add to Cart</h3>
              </div>
              <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                <span className="text-gray-400 text-sm">Secure Checkout</span>
                <span className="font-mono bg-white/10 px-3 py-1 rounded text-sm group-hover:bg-indigo-500 transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 7. Split Layout Vertical Sliding
  {
    name: "ProductPurchaseSection7",
    folder: "product-purchase-section-7",
    json: {
      name: "Studio Desk Lamp",
      price: "$125.00",
      images: [
        "https://picsum.photos/seed/lamp1/800/1000",
        "https://picsum.photos/seed/lamp2/800/1000"
      ]
    },
    tsx: `import React from 'react';

export default function ProductPurchaseSection7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white relative font-sans">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Scrollable Images */}
        <div className="w-full lg:w-1/2 space-y-2 p-2">
          {data.images.map((img: string, idx: number) => (
            <div key={idx} className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-50">
              <img src={img} alt="Product" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Right: Sticky Details */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center lg:sticky lg:top-0 lg:h-screen">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <p className="text-2xl text-gray-500 mb-12">{data.price}</p>
            
            <div className="space-y-6 mb-12">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  A minimalist task light engineered for creative spaces. Features adjustable color temperature and a precision-machined aluminum arm.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Details</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Integrated LED (50,000 hr lifespan)</li>
                  <li>Touch-sensitive dimming</li>
                  <li>Weighted base with USB-C port</li>
                </ul>
              </div>
            </div>
            
            <button className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:translate-y-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 8. Bottom Drawer / Mobile-First Aesthetic
  {
    name: "ProductPurchaseSection8",
    folder: "product-purchase-section-8",
    json: {
      name: "Nomad Backpack",
      price: "$180",
      image: "https://picsum.photos/seed/bag/800/1200"
    },
    tsx: `import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function ProductPurchaseSection8({ data }: { data: any }) {
  return (
    <div className="w-full relative h-[800px] overflow-hidden bg-gray-100 flex items-center justify-center">
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Fake UI Header */}
      <div className="absolute top-0 w-full p-6 bg-gradient-to-b from-black/50 to-transparent flex justify-between text-white">
        <span className="font-medium tracking-wide">Brand</span>
        <span className="font-bold">{data.price}</span>
      </div>
      
      {/* Bottom Drawer (Always visible partially on desktop) */}
      <div className="absolute bottom-0 w-full max-w-md bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-8 transform transition-transform duration-500 hover:-translate-y-4 cursor-pointer group">
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 group-hover:bg-gray-300 transition-colors"></div>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
            <div className="flex gap-2 text-sm text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">25L</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Waterproof</span>
            </div>
          </div>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ChevronUp size={24} className="group-hover:animate-bounce" />
          </button>
        </div>
        <button className="w-full py-4 bg-black text-white rounded-2xl font-bold text-lg hover:shadow-lg transition-all active:scale-95">
          Buy Now
        </button>
      </div>
    </div>
  );
}`
  },
  // 9. Typography Heavy & Brutalist
  {
    name: "ProductPurchaseSection9",
    folder: "product-purchase-section-9",
    json: {
      name: "HEAVY DUTY BOOTS",
      price: "$250",
      image: "https://picsum.photos/seed/boots/800/800"
    },
    tsx: `import React from 'react';

export default function ProductPurchaseSection9({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-12 md:py-24 border-y-8 border-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border-4 border-black">
          {/* Image */}
          <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
            <img src={data.image} alt={data.name} className="w-full max-w-md h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative z-10" />
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black">{data.name}</h1>
              <div className="inline-block border-2 border-black px-4 py-1 text-2xl font-bold bg-yellow-400 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {data.price}
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full block text-center border-4 border-black py-4 text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors">
                ADD TO CART
              </button>
              <button className="w-full block text-center bg-black text-white py-4 text-2xl font-black uppercase hover:bg-yellow-400 hover:text-black transition-colors">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 10. Premium Jewelry/Luxury
  {
    name: "ProductPurchaseSection10",
    folder: "product-purchase-section-10",
    json: {
      name: "The Eternity Ring",
      price: "$2,450",
      description: "Handcrafted in 18k solid gold with pavé-set conflict-free diamonds.",
      image: "https://picsum.photos/seed/ring/800/800"
    },
    tsx: `import React from 'react';

export default function ProductPurchaseSection10({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f8f6f0] py-32 font-serif text-[#3a352a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 border border-[#e5dfd3] opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-1000 ease-out"></div>
            <div className="overflow-hidden">
              <img src={data.image} alt={data.name} className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <p className="text-sm tracking-[0.3em] uppercase text-[#8c8577] mb-6 font-sans">Fine Jewelry</p>
            <h1 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">{data.name}</h1>
            <p className="text-2xl tracking-widest mb-10 text-[#595244]">{data.price}</p>
            <p className="text-[#8c8577] font-sans font-light leading-loose mb-12 max-w-sm mx-auto md:mx-0">
              {data.description}
            </p>
            <button className="w-full md:w-auto px-12 py-4 border border-[#3a352a] text-[#3a352a] hover:bg-[#3a352a] hover:text-white transition-colors duration-500 font-sans tracking-[0.2em] uppercase text-xs">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  }
];

designs.forEach(design => {
  const compDir = path.join(sectionsDir, design.folder);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  // Write JSON
  fs.writeFileSync(
    path.join(compDir, design.folder + '.json'),
    JSON.stringify(design.json, null, 2),
    'utf8'
  );

  // Write TSX
  fs.writeFileSync(
    path.join(compDir, design.name + '.tsx'),
    design.tsx,
    'utf8'
  );
  
  console.log('Generated ' + design.name);
});
