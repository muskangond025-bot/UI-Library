const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/02-product-information');

const designs = [
  // 11: Interactive Hotspots (Micro-interactions, Pulsing Dots, Tooltip Reveal)
  {
    name: "ProductInformation11",
    folder: "product-information-11",
    json: {
      title: "Interactive Engineering",
      image: "https://picsum.photos/seed/tech11/1200/800",
      hotspots: [
        { top: "30%", left: "40%", title: "Titanium Frame", desc: "Grade 5 titanium for maximum durability." },
        { top: "60%", left: "70%", title: "Thermal Core", desc: "Advanced liquid cooling system." },
        { top: "75%", left: "25%", title: "Taptic Engine", desc: "Precise haptic feedback vibration." }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation11({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src={data.image} alt="Product" className="w-full h-auto object-cover" />
          {data.hotspots.map((spot: any, idx: number) => (
            <div key={idx} className="absolute group" style={{ top: spot.top, left: spot.left }}>
              {/* Pulsing Dot */}
              <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <h4 className="text-sm font-bold text-white mb-1">{spot.title}</h4>
                <p className="text-xs text-gray-300">{spot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 12: Infinite Marquee / Infinite Menu (React Bits style)
  {
    name: "ProductInformation12",
    folder: "product-information-12",
    json: {
      title: "Endless Possibilities",
      items: [
        "Noise Cancellation", "Spatial Audio", "48hr Battery", "Water Resistant", 
        "Touch Controls", "Voice Assistant", "Multipoint Connect", "Custom EQ"
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation12({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-32 overflow-hidden">
      <h2 className="text-3xl font-light text-center text-gray-500 mb-16 uppercase tracking-widest">{data.title}</h2>
      
      {/* CSS Animation injected via style tag for Marquee */}
      <style>{\`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      \`}</style>

      <div className="relative flex overflow-x-hidden group whitespace-nowrap">
        <div className="animate-scroll flex gap-8 items-center">
          {/* Render twice for seamless loop */}
          {[...data.items, ...data.items].map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 hover:from-white hover:to-white transition-all duration-500 cursor-default">
                {item}
              </span>
              <span className="text-4xl text-blue-500">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 13: Sticky Scroll / Split Screen (Scroll-linked behavior)
  {
    name: "ProductInformation13",
    folder: "product-information-13",
    json: {
      image: "https://picsum.photos/seed/tech13/800/1200",
      sections: [
        { title: "Design", content: "Meticulously crafted from a single block of aerospace-grade aluminum. Every edge is diamond-cut." },
        { title: "Power", content: "The new M-series architecture delivers unprecedented performance while maintaining incredible battery life." },
        { title: "Display", content: "A screen so bright and color-accurate, it rivals professional reference monitors." }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation13({ data }: { data: any }) {
  return (
    <div className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        {/* Sticky Image Side */}
        <div className="w-full md:w-1/2 md:h-screen sticky top-0 flex items-center justify-center p-8">
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img src={data.image} alt="Showcase" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Scrolling Content Side */}
        <div className="w-full md:w-1/2 py-12 md:py-32 space-y-32 px-8">
          {data.sections.map((sec: any, idx: number) => (
            <div key={idx} className="min-h-[50vh] flex flex-col justify-center transform transition-all duration-700 hover:-translate-y-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">{sec.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 14: Glass Icons / Glassmorphism Cards (Hover distortion, glowing)
  {
    name: "ProductInformation14",
    folder: "product-information-14",
    json: {
      title: "Crystal Clear Quality",
      cards: [
        { label: "Lens", icon: "Camera" },
        { label: "Sensor", icon: "Aperture" },
        { label: "Focus", icon: "Focus" }
      ]
    },
    tsx: `import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation14({ data }: { data: any }) {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-32 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-20">{data.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card: any, idx: number) => {
            const Icon = (Icons as any)[card.icon] || Icons.Box;
            return (
              <div key={idx} className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/30 to-white/5 hover:to-white/30 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-2xl rounded-[23px] p-12 flex flex-col items-center gap-6 h-full shadow-2xl transition-all duration-500 group-hover:bg-white/20">
                  <div className="p-6 bg-white/5 rounded-full border border-white/10 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">{card.label}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}`
  },
  // 15: Stepper / Scroll Progress visualization
  {
    name: "ProductInformation15",
    folder: "product-information-15",
    json: {
      title: "The Manufacturing Process",
      steps: [
        { step: "01", title: "Milling", desc: "Precision CNC milling shapes the block." },
        { step: "02", title: "Anodizing", desc: "A protective oxide layer is added for color." },
        { step: "03", title: "Polishing", desc: "Diamond tools polish the edges to a mirror finish." }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation15({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f4f4f5] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-20 text-center">{data.title}</h2>
        
        <div className="relative border-l border-gray-300 ml-6 md:ml-12 space-y-24">
          {data.steps.map((step: any, idx: number) => (
            <div key={idx} className="relative pl-12 md:pl-20 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full group-hover:bg-black transition-colors duration-500">
                <div className="absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-150 group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start transform transition-transform duration-500 group-hover:translate-x-4">
                <div className="text-6xl font-black text-gray-300 group-hover:text-black transition-colors duration-500">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 16: Media Playback Aesthetic (Auto-play video styled)
  {
    name: "ProductInformation16",
    folder: "product-information-16",
    json: {
      title: "See it in action.",
      image: "https://picsum.photos/seed/tech16/1600/900"
    },
    tsx: `import React from 'react';
import { Play, VolumeX } from 'lucide-react';

export default function ProductInformation16({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-12">{data.title}</h2>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer bg-gray-900">
          <img src={data.image} alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
          
          {/* Fake Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform transition-transform duration-300 group-hover:scale-110">
              <Play fill="white" size={32} className="ml-2" />
            </div>
          </div>
          
          {/* Controls overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full max-w-md h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-1/3 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <VolumeX className="text-white ml-4" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 17: Hover Outline Fill (Large Typography)
  {
    name: "ProductInformation17",
    folder: "product-information-17",
    json: {
      words: ["FASTER.", "THINNER.", "LIGHTER."]
    },
    tsx: `import React from 'react';

export default function ProductInformation17({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <style>{\`
          .outline-text {
            color: transparent;
            -webkit-text-stroke: 2px #d1d5db;
            transition: all 0.5s ease;
          }
          .outline-text:hover {
            color: #111827;
            -webkit-text-stroke: 0px transparent;
            text-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
        \`}</style>

        {data.words.map((word: string, idx: number) => (
          <h1 key={idx} className="text-7xl md:text-9xl font-black uppercase outline-text cursor-default mb-8 tracking-tighter">
            {word}
          </h1>
        ))}
      </div>
    </div>
  );
}`
  },
  // 18: Card Stack / Accordion Layout
  {
    name: "ProductInformation18",
    folder: "product-information-18",
    json: {
      cards: [
        { title: "Sleek Aluminum", img: "https://picsum.photos/seed/tech18a/600/400" },
        { title: "Vibrant Display", img: "https://picsum.photos/seed/tech18b/600/400" },
        { title: "Tactile Keyboard", img: "https://picsum.photos/seed/tech18c/600/400" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation18({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#111] py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {data.cards.map((card: any, idx: number) => (
            <div key={idx} className="group relative h-32 md:h-48 rounded-2xl overflow-hidden cursor-pointer hover:h-64 md:hover:h-96 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-3xl md:text-5xl font-bold text-white tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 19: Cyber-Grid Glowing Borders
  {
    name: "ProductInformation19",
    folder: "product-information-19",
    json: {
      title: "Next-Gen Networking",
      specs: [
        { val: "10 Gbps", lbl: "Bandwidth" },
        { val: "1 ms", lbl: "Latency" },
        { val: "Wi-Fi 7", lbl: "Protocol" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation19({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24 relative" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-20 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.specs.map((spec: any, idx: number) => (
            <div key={idx} className="group relative bg-gray-900 rounded-xl p-12 border border-gray-800 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              {/* Glowing top line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">{spec.val}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">{spec.lbl}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 20: Animated Bento Entry (Cascade fade in on hover via group)
  {
    name: "ProductInformation20",
    folder: "product-information-20",
    json: {
      items: [
        { title: "Camera", span: "col-span-1 md:col-span-2 row-span-2", img: "https://picsum.photos/seed/tech20a/800/800" },
        { title: "Battery", span: "col-span-1 row-span-1", img: "https://picsum.photos/seed/tech20b/400/400" },
        { title: "Screen", span: "col-span-1 row-span-1", img: "https://picsum.photos/seed/tech20c/400/400" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductInformation20({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {data.items.map((item: any, idx: number) => (
            <div key={idx} className={\`relative rounded-3xl overflow-hidden \${item.span} shadow-lg opacity-80 hover:opacity-100 transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl\`}>
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6">
                <div className="px-4 py-2 bg-white/90 backdrop-blur rounded-full">
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                </div>
              </div>
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
