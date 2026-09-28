const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/03-product-purchase-section');

const designs = [
  // 11. Immersive Full-Screen Visual
  {
    name: "ProductPurchaseSection11",
    folder: "product-purchase-section-11",
    json: {
      name: "Polaris Soundbar Max",
      price: "$899.00",
      description: "Room-filling 3D audio enclosed in an acoustic masterpiece.",
      image: "https://picsum.photos/seed/soundbar/1920/1080",
      features: ["Dolby Atmos", "Wi-Fi Streaming", "Voice Assistant"]
    },
    tsx: `import React from 'react';
import { Play } from 'lucide-react';

export default function ProductPurchaseSection11({ data }: { data: any }) {
  return (
    <div className="w-full relative h-[90vh] overflow-hidden bg-black text-white flex items-end md:items-center">
      {/* Background Image */}
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transform hover:scale-105 transition-transform duration-[20s] ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent md:bg-gradient-to-r md:from-black md:to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-0">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex gap-2">
            {data.features.map((feat: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20">
                {feat}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-2xl">{data.name}</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 drop-shadow-md">{data.description}</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <span className="text-4xl font-semibold">{data.price}</span>
            <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Pre-order
            </button>
            <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors backdrop-blur-md">
              <Play size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 12. Floating Subscription/Hardware Cards
  {
    name: "ProductPurchaseSection12",
    folder: "product-purchase-section-12",
    json: {
      name: "Smart Home Hub",
      image: "https://picsum.photos/seed/hub/800/800",
      tiers: [
        { name: "Starter", price: "$99", specs: ["Basic Hub", "2 Sensors", "App Control"] },
        { name: "Pro", price: "$199", specs: ["Advanced Hub", "5 Sensors", "Camera", "Cloud AI"], popular: true }
      ]
    },
    tsx: `import React from 'react';
import { Check } from 'lucide-react';

export default function ProductPurchaseSection12({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fafafa] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{data.name}</h1>
          <p className="text-lg text-gray-500">Choose the perfect setup for your home.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {/* Main Image */}
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden bg-white shadow-lg flex items-center justify-center p-8 group">
            <img src={data.image} alt={data.name} className="w-full h-auto object-contain transform group-hover:rotate-3 transition-transform duration-500" />
          </div>
          
          {/* Tiers */}
          {data.tiers.map((tier: any, idx: number) => (
            <div key={idx} className={\`w-full md:w-1/3 relative bg-white rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 \${tier.popular ? 'border-2 border-indigo-600 shadow-2xl' : 'border border-gray-100 shadow-lg'}\`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-4xl font-black text-indigo-600 mb-8">{tier.price}</p>
              
              <ul className="flex-1 space-y-4 mb-8">
                {tier.specs.map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <Check size={20} className="text-indigo-500" /> {spec}
                  </li>
                ))}
              </ul>
              
              <button className={\`w-full py-4 rounded-xl font-bold transition-colors \${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}\`}>
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 13. Minimal Floating Action Button
  {
    name: "ProductPurchaseSection13",
    folder: "product-purchase-section-13",
    json: {
      name: "AirLight Drone",
      price: "$1,299",
      image: "https://picsum.photos/seed/drone/1600/1000",
      specs: ["4K 60fps", "34m Flight Time", "Omnidirectional Obstacle Sensing"]
    },
    tsx: `import React, { useState } from 'react';
import { Plus, X, ShoppingCart } from 'lucide-react';

export default function ProductPurchaseSection13({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative h-[80vh] bg-white overflow-hidden font-sans">
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
      
      {/* Floating Action Button */}
      <button 
        onClick={() => setOpen(true)}
        className={\`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 \${open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}\`}
      >
        <Plus size={32} className="text-black" />
        <span className="absolute -bottom-8 whitespace-nowrap text-white font-bold drop-shadow-md uppercase tracking-widest text-sm">Discover</span>
      </button>

      {/* Drawer Overlay */}
      <div className={\`absolute inset-y-0 right-0 w-full max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl p-8 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col \${open ? 'translate-x-0' : 'translate-x-full'}\`}>
        <button onClick={() => setOpen(false)} className="self-end p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors mb-8">
          <X size={20} />
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
        <p className="text-2xl text-gray-500 mb-8">{data.price}</p>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-widest text-sm">Key Specs</h3>
          <ul className="space-y-4">
            {data.specs.map((spec: string, idx: number) => (
              <li key={idx} className="flex items-center gap-3 text-gray-600 pb-4 border-b border-gray-200 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full py-4 bg-black text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg active:scale-95">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}`
  },
  // 14. Neon Holographic RGB Card
  {
    name: "ProductPurchaseSection14",
    folder: "product-purchase-section-14",
    json: {
      name: "Quantum VR Headset",
      price: "$499.99",
      image: "https://picsum.photos/seed/vr/800/800",
      description: "Dive into the metaverse with dual 4K micro-OLED displays."
    },
    tsx: `import React from 'react';

export default function ProductPurchaseSection14({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0c] py-32 flex items-center justify-center overflow-hidden font-mono">
      <div className="relative group perspective-1000">
        
        {/* Animated RGB Background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        
        {/* The Card */}
        <div className="relative bg-[#111] border border-white/10 rounded-3xl p-8 max-w-md w-full flex flex-col items-center text-center transform transition-all duration-500 preserve-3d group-hover:rotate-y-6 group-hover:rotate-x-6 shadow-2xl">
          <div className="w-full aspect-square rounded-2xl overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
            <img src={data.image} alt={data.name} className="w-full h-full object-cover filter contrast-125" />
          </div>
          
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">{data.name}</h1>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{data.description}</p>
          <div className="text-4xl font-bold text-white mb-8 tracking-tighter shadow-cyan-500/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {data.price}
          </div>
          
          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] rounded hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300">
            Secure Order
          </button>
        </div>
      </div>
      
      <style>{\`
        @keyframes gradient-xy {
          0%, 100% { background-size: 400% 400%; background-position: 0% 0%; }
          50% { background-size: 200% 200%; background-position: 100% 100%; }
        }
        .animate-gradient-xy { animation: gradient-xy 15s ease infinite; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      \`}</style>
    </div>
  );
}`
  },
  // 15. Side-by-Side Dual Product Comparison / Add to Cart
  {
    name: "ProductPurchaseSection15",
    folder: "product-purchase-section-15",
    json: {
      left: { name: "Studio Display", price: "$1599", img: "https://picsum.photos/seed/disp1/800/800", specs: "Standard Glass" },
      right: { name: "Studio Display Pro", price: "$1899", img: "https://picsum.photos/seed/disp2/800/800", specs: "Nano-texture Glass" }
    },
    tsx: `import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProductPurchaseSection15({ data }: { data: any }) {
  return (
    <div className="w-full bg-white h-auto md:h-screen flex flex-col md:flex-row">
      {[data.left, data.right].map((prod: any, idx: number) => (
        <div key={idx} className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-gray-100 group hover:bg-gray-50 transition-colors duration-500 cursor-pointer">
          <div className="w-full max-w-sm aspect-square mb-12 transform group-hover:scale-105 transition-transform duration-700 ease-out relative">
            <img src={prod.img} alt={prod.name} className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{prod.name}</h2>
            <p className="text-gray-500 mb-4">{prod.specs}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-8">{prod.price}</p>
            
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500">
              Buy {prod.name} <ChevronRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}`
  },
  // 16. Dynamic Liquid Layout (Morphing shapes)
  {
    name: "ProductPurchaseSection16",
    folder: "product-purchase-section-16",
    json: {
      name: "Aqua Purifier",
      price: "$299",
      image: "https://picsum.photos/seed/purifier/800/1000",
      description: "Advanced filtration with an organic, fluid design."
    },
    tsx: `import React from 'react';

export default function ProductPurchaseSection16({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#e0f2fe] py-24 overflow-hidden relative font-sans">
      {/* Morphing background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] bg-white/40 backdrop-blur-2xl rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 p-8 flex items-center justify-center overflow-hidden group">
            <img src={data.image} alt={data.name} className="relative z-10 w-full h-auto object-cover rounded-2xl transform group-hover:-translate-y-4 transition-transform duration-700" />
            
            {/* Liquid drop effect on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-500/10 blur-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-black text-sky-900 mb-4">{data.name}</h1>
          <p className="text-xl text-sky-700 mb-8 max-w-md leading-relaxed">{data.description}</p>
          <p className="text-4xl font-bold text-sky-600 mb-10">{data.price}</p>
          
          <button className="px-10 py-5 bg-sky-600 text-white font-bold rounded-[30px] hover:rounded-[10px] transition-all duration-500 shadow-xl shadow-sky-600/30 hover:bg-sky-700 text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  // 17. E-Sports / Gamer Edition (Glitch, Clip-path, aggressive red)
  {
    name: "ProductPurchaseSection17",
    folder: "product-purchase-section-17",
    json: {
      name: "Predator X Mouse",
      price: "$129",
      image: "https://picsum.photos/seed/mouse/800/800",
      dpi: "25,600 DPI",
      weight: "63g"
    },
    tsx: `import React from 'react';
import { Target, Zap } from 'lucide-react';

export default function ProductPurchaseSection17({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0a] py-24 font-mono text-white relative border-y border-red-600">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 skew-x-12 transform origin-top-right border-l border-red-600/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="w-full md:w-1/2">
          <div 
            className="w-full aspect-square bg-[#111] p-8 relative group cursor-crosshair overflow-hidden"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          >
            {/* Hover Glitch overlay */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 mix-blend-color-dodge transition-opacity duration-75"></div>
            <img src={data.image} alt={data.name} className="w-full h-full object-cover grayscale contrast-150 group-hover:grayscale-0 transition-all duration-300" />
            <div className="absolute top-4 left-4 border-l-4 border-red-600 pl-2">
              <p className="text-red-500 font-bold tracking-widest uppercase text-sm animate-pulse">Target Acquired</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">{data.name}</h1>
          <p className="text-3xl font-bold text-red-600 mb-8">{data.price}</p>
          
          <div className="flex gap-6 mb-12">
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-l-2 border-red-600">
              <Target className="text-red-500" size={20} />
              <span className="font-bold">{data.dpi}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 border-l-2 border-red-600">
              <Zap className="text-red-500" size={20} />
              <span className="font-bold">{data.weight}</span>
            </div>
          </div>
          
          <button 
            className="w-full relative px-8 py-5 bg-red-600 text-white font-black text-xl italic tracking-wider uppercase group hover:bg-red-700 transition-colors"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0 100%, 0 30%)' }}
          >
            <span className="relative z-10 group-hover:animate-pulse">Equip Now</span>
            <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 group-hover:animate-ping"></div>
          </button>
        </div>
      </div>
    </div>
  );
}`
  },
  // 18. Eco / Organic / Natural 
  {
    name: "ProductPurchaseSection18",
    folder: "product-purchase-section-18",
    json: {
      name: "Bamboo Fiber Essential",
      price: "$45.00",
      description: "Breathable, sustainable, and incredibly soft against the skin.",
      image: "https://picsum.photos/seed/eco/800/1000",
      colors: ["#d2c6b4", "#8c9b83", "#5c6b73"]
    },
    tsx: `import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

export default function ProductPurchaseSection18({ data }: { data: any }) {
  const [color, setColor] = useState(0);

  return (
    <div className="w-full bg-[#f4ebd9] py-24 font-serif text-[#4a4238]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/5] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl relative">
              <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-[10s] ease-in-out" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#7c9a6f] mb-6">
              <Leaf size={20} />
              <span className="font-sans uppercase tracking-widest text-xs font-bold">100% Organic</span>
            </div>
            
            <h1 className="text-5xl font-medium mb-4 leading-tight">{data.name}</h1>
            <p className="font-sans text-lg text-[#7c7568] mb-8">{data.description}</p>
            <p className="text-3xl mb-12">{data.price}</p>
            
            <div className="mb-10">
              <h3 className="font-sans uppercase tracking-widest text-xs font-bold mb-4">Select Shade</h3>
              <div className="flex gap-4">
                {data.colors.map((hex: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setColor(idx)}
                    className={\`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 \${color === idx ? 'scale-110 shadow-lg' : 'hover:scale-105 opacity-80'}\`}
                    style={{ backgroundColor: hex }}
                  >
                    {color === idx && <div className="w-10 h-10 rounded-full border border-white/50"></div>}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-5 bg-[#4a4238] text-[#f4ebd9] font-sans uppercase tracking-widest text-sm rounded-full hover:bg-[#342f27] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 19. Monochrome Architect (Blueprint vibe)
  {
    name: "ProductPurchaseSection19",
    folder: "product-purchase-section-19",
    json: {
      name: "ARCH-1 Lamp",
      price: "£ 350",
      details: ["Aluminum Body", "LED 2700K", "Touch Dimmer"],
      image: "https://picsum.photos/seed/arch/800/800"
    },
    tsx: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductPurchaseSection19({ data }: { data: any }) {
  return (
    <div className="w-full bg-white text-black font-mono border-t border-b border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 border-r border-black flex flex-col justify-between">
          <div className="p-8 border-b border-black">
            <h1 className="text-5xl font-black uppercase tracking-tighter">{data.name}</h1>
          </div>
          
          <div className="flex-1 p-16 flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]">
            <img src={data.image} alt={data.name} className="max-w-full h-auto grayscale contrast-125 border border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all duration-300" />
          </div>
        </div>
        
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-8 border-b border-black flex justify-between items-end">
            <span className="text-sm uppercase tracking-widest text-gray-500">Retail Price</span>
            <span className="text-4xl font-bold">{data.price}</span>
          </div>
          
          <div className="flex-1 p-8">
            <ul className="space-y-4">
              {data.details.map((det: string, idx: number) => (
                <li key={idx} className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="uppercase text-sm">SPEC_{idx + 1}</span>
                  <span className="font-bold">{det}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full p-8 bg-black text-white text-xl font-bold uppercase flex justify-between items-center hover:bg-gray-900 transition-colors group">
            <span>Proceed to Checkout</span>
            <ArrowRight className="transform group-hover:translate-x-4 transition-transform duration-300" />
          </button>
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 20. Advanced 3D Flip Card Configuration
  {
    name: "ProductPurchaseSection20",
    folder: "product-purchase-section-20",
    json: {
      name: "The Collector's Edition",
      price: "$199.99",
      imageFront: "https://picsum.photos/seed/boxfront/600/800",
      imageBack: "https://picsum.photos/seed/boxback/600/800",
      description: "Limited run of 1,000 units globally."
    },
    tsx: `import React, { useState } from 'react';
import { RotateCw, ShoppingBag } from 'lucide-react';

export default function ProductPurchaseSection20({ data }: { data: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full bg-[#0f172a] py-24 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Flip Card Container */}
          <div className="w-full lg:w-1/2 perspective-1000">
            <div className={\`relative w-full max-w-sm mx-auto aspect-[3/4] transition-transform duration-1000 preserve-3d cursor-pointer shadow-2xl rounded-2xl \${flipped ? 'rotate-y-180' : ''}\`} onClick={() => setFlipped(!flipped)}>
              
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                <img src={data.imageFront} alt="Front" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2 text-white">
                  <RotateCw size={20} className="animate-spin-slow" />
                </div>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-800 rounded-2xl border border-gray-600 overflow-hidden">
                <img src={data.imageBack} alt="Back" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <p className="text-white font-mono text-sm">BOX CONTENTS:<br/>1. Core Unit<br/>2. Art Book<br/>3. Certificate of Authenticity</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-500/30">
              Limited Edition
            </div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{data.name}</h1>
            <p className="text-xl text-gray-400 mb-8">{data.description}</p>
            <p className="text-4xl font-black text-white mb-12">{data.price}</p>
            
            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-3">
              <ShoppingBag size={24} />
              Add to Collection
            </button>
          </div>
        </div>
      </div>
      
      <style>{\`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      \`}</style>
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
