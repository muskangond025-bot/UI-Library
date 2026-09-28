const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/02-product-information');

const designs = [
  // 1: Glassmorphism Split Layout
  {
    name: "ProductInformation1",
    folder: "product-information-1",
    json: {
      title: "Premium Active Noise Cancelling",
      subtitle: "Immersive Sound",
      description: "Experience pure audio with our advanced active noise cancelling technology. Block out the world and dive into your music.",
      specs: [
        { label: "Battery", value: "30 Hours" },
        { label: "Weight", value: "250g" },
        { label: "Bluetooth", value: "5.2" }
      ],
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop"
    },
    tsx: `import React from 'react';

export default function ProductInformation1({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-3">{data.subtitle}</p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{data.title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{data.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {data.specs.map((spec: any, idx: number) => (
                <div key={idx} className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white">
                  <p className="text-sm text-gray-500 mb-1 font-medium">{spec.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 2: Bento Box Grid
  {
    name: "ProductInformation2",
    folder: "product-information-2",
    json: {
      title: "Designed for the Future",
      description: "Every detail has been meticulously crafted to provide the ultimate user experience.",
      features: [
        { title: "Aerospace Grade", text: "Machined from a single block of aluminum.", span: "col-span-1 md:col-span-2", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
        { title: "Water Resistant", text: "IP68 rated for ultimate protection.", span: "col-span-1", img: "https://images.unsplash.com/photo-1520615967073-a60965e63442?q=80&w=800&auto=format&fit=crop" },
        { title: "All-Day Battery", text: "Up to 48 hours of mixed usage.", span: "col-span-1", img: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=800&auto=format&fit=crop" },
        { title: "Neural Engine", text: "Powered by advanced AI for real-time processing.", span: "col-span-1 md:col-span-2", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation2({ data }: { data: any }) {
  return (
    <div className="w-full bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{data.title}</h2>
          <p className="text-xl text-gray-400">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.features.map((feat: any, idx: number) => (
            <div key={idx} className={\`relative overflow-hidden rounded-3xl group \${feat.span} aspect-[4/3] md:aspect-auto\`}>
              <img src={feat.img} alt={feat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">{feat.title}</h3>
                <p className="text-gray-300">{feat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 3: Editorial Typography Focus
  {
    name: "ProductInformation3",
    folder: "product-information-3",
    json: {
      headline: "The Art of Simplicity.",
      paragraphs: [
        "We stripped away the unnecessary to focus on what truly matters. The result is an object of pure function and beauty.",
        "Crafted with precision, every curve and edge serves a purpose. The tactile feedback is designed to be deeply satisfying."
      ],
      stats: [
        { number: "0.4mm", label: "Tolerance" },
        { number: "100%", label: "Recycled" }
      ],
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop"
    },
    tsx: `import React from 'react';

export default function ProductInformation3({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f9f9f7] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl lg:text-7xl font-serif font-medium text-gray-900 leading-tight mb-8">
                {data.headline}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                {data.paragraphs.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-gray-300">
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <p className="text-4xl font-light text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <img src={data.image} alt="Product" className="w-full h-auto object-cover rounded-sm shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 4: Minimalist Feature Tabs
  {
    name: "ProductInformation4",
    folder: "product-information-4",
    json: {
      title: "Technical Excellence",
      tabs: [
        { name: "Performance", content: "Equipped with our latest generation processor, delivering 2x faster speeds while using 30% less power.", image: "https://images.unsplash.com/photo-1591337676887-a21b84d12f8e?q=80&w=1000&auto=format&fit=crop" },
        { name: "Display", content: "A stunning edge-to-edge OLED display with 120Hz refresh rate and peak brightness of 2000 nits.", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop" },
        { name: "Connectivity", content: "Next-gen Wi-Fi 7 and Bluetooth 5.3 ensure you are always connected at the highest possible speeds.", image: "https://images.unsplash.com/photo-1544228428-c11ccce9545c?q=80&w=1000&auto=format&fit=crop" }
      ]
    },
    tsx: `import React, { useState } from 'react';

export default function ProductInformation4({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">{data.title}</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 space-y-2">
            {data.tabs.map((tab: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={\`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 \${
                  activeTab === idx ? 'bg-black text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }\`}
              >
                <h3 className="text-lg font-bold mb-2">{tab.name}</h3>
                <div className={\`overflow-hidden transition-all duration-300 \${activeTab === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}\`}>
                  <p className={\`text-sm \${activeTab === idx ? 'text-gray-300' : 'text-gray-500'}\`}>{tab.content}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full lg:w-2/3 h-[500px] rounded-2xl overflow-hidden relative shadow-2xl">
            {data.tabs.map((tab: any, idx: number) => (
              <img
                key={idx}
                src={tab.image}
                alt={tab.name}
                className={\`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 \${activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}\`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 5: Dark Mode Tech Specs Grid
  {
    name: "ProductInformation5",
    folder: "product-information-5",
    json: {
      title: "Core Specifications",
      specs: [
        { icon: "Cpu", label: "Processor", value: "M3 Pro Chip", desc: "12-core CPU, 18-core GPU" },
        { icon: "MemoryStick", label: "Memory", value: "Up to 36GB", desc: "Unified memory architecture" },
        { icon: "HardDrive", label: "Storage", value: "Up to 4TB", desc: "Superfast SSD storage" },
        { icon: "Monitor", label: "Display", value: "14.2-inch", desc: "Liquid Retina XDR display" },
        { icon: "Battery", label: "Battery", value: "18 hours", desc: "Video playback on a single charge" },
        { icon: "Wifi", label: "Wireless", value: "Wi-Fi 6E", desc: "802.11ax and Bluetooth 5.3" }
      ]
    },
    tsx: `import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation5({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.specs.map((spec: any, idx: number) => {
            const Icon = (Icons as any)[spec.icon] || Icons.CheckCircle;
            return (
              <div key={idx} className="bg-[#141414] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-gray-400 group-hover:text-white group-hover:bg-gray-800 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">{spec.label}</h3>
                <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                <p className="text-gray-500 text-sm">{spec.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`
  },
  // 6: Lifestyle Image with Floating Cards
  {
    name: "ProductInformation6",
    folder: "product-information-6",
    json: {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
      cards: [
        { title: "Ergonomic Design", text: "Crafted to fit perfectly, reducing fatigue during long sessions.", position: "top-10 left-10" },
        { title: "Premium Materials", text: "Soft memory foam wrapped in breathable synthetic leather.", position: "bottom-20 right-10" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation6({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[600px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
          <img src={data.image} alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute inset-0 p-6 lg:p-12 hidden md:block">
            {data.cards.map((card: any, idx: number) => (
              <div key={idx} className={\`absolute \${card.position} bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-sm border border-white/50 transition-transform duration-500 hover:scale-105\`}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile view for cards */}
          <div className="md:hidden absolute bottom-0 left-0 w-full p-4 space-y-4">
            {data.cards.map((card: any, idx: number) => (
              <div key={idx} className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                <h3 className="text-md font-bold text-gray-900 mb-1">{card.title}</h3>
                <p className="text-gray-600 text-xs">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 7: Zig-Zag Alternating Layout
  {
    name: "ProductInformation7",
    folder: "product-information-7",
    json: {
      blocks: [
        { title: "Flawless Integration", text: "Works seamlessly with your existing workflow. No complex setup required, just plug and play.", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop" },
        { title: "Military-Grade Security", text: "Your data is protected by end-to-end encryption and strict access controls at the hardware level.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {data.blocks.map((block: any, idx: number) => (
          <div key={idx} className={\`flex flex-col gap-12 items-center \${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}\`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-[1.02]">
                <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{block.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{block.text}</p>
              <button className="mt-8 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  // 8: Large Stat Counter & Graphic
  {
    name: "ProductInformation8",
    folder: "product-information-8",
    json: {
      stat: "99.9%",
      label: "Color Accuracy",
      description: "Factory calibrated to cover 100% of sRGB and 98% of DCI-P3 color spaces for true-to-life representation.",
      image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1000&auto=format&fit=crop"
    },
    tsx: `import React from 'react';

export default function ProductInformation8({ data }: { data: any }) {
  return (
    <div className="w-full bg-indigo-600 py-24 relative overflow-hidden">
      {/* Abstract background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <div>
              <p className="text-8xl lg:text-9xl font-black tracking-tighter mb-4">{data.stat}</p>
              <h2 className="text-3xl font-bold text-indigo-200 uppercase tracking-widest">{data.label}</h2>
            </div>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-lg">{data.description}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <img src={data.image} alt={data.label} className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 9: Card Carousel / Horizontal Scroll Info
  {
    name: "ProductInformation9",
    folder: "product-information-9",
    json: {
      title: "Discover the Details",
      cards: [
        { title: "Precision Crafted", text: "CNC machined chassis for perfect alignment.", icon: "Crosshair" },
        { title: "Thermal Control", text: "Vapor chamber cooling keeps temps low.", icon: "Thermometer" },
        { title: "Spatial Audio", text: "Six-speaker sound system with force-cancelling.", icon: "Volume2" },
        { title: "Studio Mics", text: "Three-mic array with directional beamforming.", icon: "Mic" }
      ]
    },
    tsx: `import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation9({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.title}</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((card: any, idx: number) => {
            const Icon = (Icons as any)[card.icon] || Icons.Info;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-start group">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`
  },
  // 10: Deep Dive Text with Embedded Images
  {
    name: "ProductInformation10",
    folder: "product-information-10",
    json: {
      title: "An engineering marvel.",
      content: "Building something this powerful required us to rethink everything. From the custom silicon architecture to the microscopic details of the thermal management system. We didn't just iterate; we completely reimagined what a device in this category could be.",
      images: [
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=800&auto=format&fit=crop"
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation10({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-8">{data.title}</h2>
        <p className="text-xl md:text-3xl font-light text-gray-500 leading-relaxed mb-20 max-w-4xl mx-auto">
          {data.content}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {data.images.map((img: string, idx: number) => (
            <div key={idx} className={\`rounded-2xl overflow-hidden shadow-2xl \${idx === 1 ? 'md:mt-16' : ''}\`}>
              <img src={img} alt="Detail" className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
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
