const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/04-product-description');

const designs = [
  // 11. Alternating Zig-Zag Grid
  {
    name: "ProductDescription11",
    folder: "product-description-11",
    json: {
      blocks: [
        { title: "Precision Crafted", text: "Every component is meticulously designed to work in perfect harmony. We eliminated everything unnecessary.", img: "https://picsum.photos/seed/desc11a/800/800" },
        { title: "Seamless Integration", text: "It doesn't just look good, it acts as a natural extension of your workflow, syncing instantly.", img: "https://picsum.photos/seed/desc11b/800/800" },
        { title: "Built to Last", text: "Using aerospace-grade materials ensures that it will look and perform flawlessly for years to come.", img: "https://picsum.photos/seed/desc11c/800/800" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductDescription11({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {data.blocks.map((block: any, idx: number) => (
          <div key={idx} className={\`flex flex-col md:flex-row items-center gap-16 \${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}\`}>
            <div className="w-full md:w-1/2 group">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src={block.img} alt={block.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{block.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">{block.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  // 12. Monolithic Typography Overlap
  {
    name: "ProductDescription12",
    folder: "product-description-12",
    json: {
      backgroundText: "INNOVATION",
      headline: "Rewriting the Rules.",
      content: "We didn't look at what was already out there. We looked at what was fundamentally possible. By ignoring conventional boundaries, we were able to create an architecture that fundamentally changes how you interact with your environment. It is unapologetically bold.",
      image: "https://picsum.photos/seed/desc12/1200/600"
    },
    tsx: `import React from 'react';

export default function ProductDescription12({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f4f4f5] py-40 relative overflow-hidden font-sans">
      
      {/* Background massive text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="text-[15vw] font-black text-gray-200 tracking-tighter opacity-50 select-none">
          {data.backgroundText}
        </h1>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl p-12 md:p-24 rounded-3xl shadow-2xl border border-white">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">{data.headline}</h2>
          <p className="text-2xl text-gray-700 leading-loose font-light mb-16 max-w-3xl">
            {data.content}
          </p>
          
          <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-inner group">
            <img src={data.image} alt="Showcase" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 13. Image with Accordion Details
  {
    name: "ProductDescription13",
    folder: "product-description-13",
    json: {
      image: "https://picsum.photos/seed/desc13/800/1200",
      details: [
        { title: "Aerospace Aluminum", text: "Machined from a single solid block of Grade 5 Titanium for unmatched durability." },
        { title: "Sapphire Crystal", text: "The display is protected by lab-grown sapphire, making it virtually scratch-proof." },
        { title: "Liquid Cooling", text: "A micro-fluidic chamber dissipates heat instantly, maintaining peak performance." }
      ]
    },
    tsx: `import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProductDescription13({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-black py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Large Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <img src={data.image} alt="Detail" className="relative z-10 w-full h-auto rounded-xl object-cover" />
        </div>
        
        {/* Accordion */}
        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="text-3xl text-gray-500 font-light mb-12">Anatomy of a masterpiece.</h2>
          {data.details.map((det: any, idx: number) => (
            <div 
              key={idx} 
              className={\`border-b border-gray-800 pb-6 transition-all duration-500 \${active === idx ? 'pt-6' : 'pt-4 cursor-pointer hover:bg-white/5 px-4 rounded-t-lg'}\`}
              onClick={() => setActive(idx)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={\`text-2xl font-bold transition-colors \${active === idx ? 'text-white' : 'text-gray-500'}\`}>{det.title}</h3>
                <ChevronRight className={\`transition-transform duration-500 \${active === idx ? 'rotate-90 text-white' : 'text-gray-600'}\`} />
              </div>
              <div className={\`overflow-hidden transition-all duration-500 ease-in-out \${active === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}\`}>
                <p className="text-lg text-gray-400 leading-relaxed">{det.text}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 14. Neon Outlines / Laser Reveal (Dark Mode)
  {
    name: "ProductDescription14",
    folder: "product-description-14",
    json: {
      headline: "Quantum Speed",
      text: "The new architecture bypasses traditional bottlenecks by utilizing a multi-threaded quantum bridge. Data isn't just processed; it is anticipated. The result is a system that responds before you even finish your thought.",
      features: ["Zero Latency", "120Hz Polling", "Predictive AI"]
    },
    tsx: `import React from 'react';

export default function ProductDescription14({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#050505] py-32 overflow-hidden font-mono flex items-center justify-center relative">
      {/* Background laser lines */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="relative group max-w-4xl w-full mx-4 z-10">
        
        {/* Animated Gradient Border Layer */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
        
        {/* Content Box */}
        <div className="relative bg-black rounded-xl p-12 md:p-20 text-center border border-white/10">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10 uppercase tracking-widest">{data.headline}</h2>
          <p className="text-xl text-gray-400 leading-loose mb-16">
            {data.text}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {data.features.map((feat: string, idx: number) => (
              <div key={idx} className="px-6 py-3 bg-gray-900 border border-cyan-900/50 rounded-full text-cyan-400 text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{\`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
      \`}</style>
    </div>
  );
}`
  },
  // 15. Full Width Image Slices
  {
    name: "ProductDescription15",
    folder: "product-description-15",
    json: {
      slices: [
        { text: "Breathtaking clarity.", img: "https://picsum.photos/seed/slice1/1920/400" },
        { text: "Infinite contrast.", img: "https://picsum.photos/seed/slice2/1920/400" },
        { text: "True-to-life color.", img: "https://picsum.photos/seed/slice3/1920/400" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductDescription15({ data }: { data: any }) {
  return (
    <div className="w-full bg-white font-sans flex flex-col">
      {data.slices.map((slice: any, idx: number) => (
        <div key={idx} className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden group cursor-crosshair">
          <img src={slice.img} alt="Visual" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              {slice.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}`
  },
  // 16. Minimalist Centered Column (Medium-style)
  {
    name: "ProductDescription16",
    folder: "product-description-16",
    json: {
      headline: "The Philosophy of Less.",
      p1: "In a world of constant noise, we sought to create a device that represents pure silence. The form factor is completely unadorned, relying solely on its proportions to communicate intent.",
      quote: "True luxury is the absence of friction.",
      p2: "By removing ports, buttons, and seams, we didn't just simplify the design; we revolutionized the manufacturing process. It is sealed perfectly, rendering it utterly impervious to the elements while offering a tactile experience that feels carved from stone.",
      img: "https://picsum.photos/seed/desc16/1000/600"
    },
    tsx: `import React from 'react';

export default function ProductDescription16({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fffdfa] py-24 md:py-40 font-serif text-[#222]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-16 text-center">{data.headline}</h1>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-16 font-light">
          {data.p1}
        </p>
        
        {/* Full bleed breakout image */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-16 px-4 md:px-0 md:max-w-5xl">
          <img src={data.img} alt="Design" className="w-full h-auto rounded-sm shadow-xl" />
        </div>
        
        <blockquote className="text-3xl md:text-4xl font-italic text-center text-indigo-900 border-y border-gray-200 py-12 mb-16">
          "{data.quote}"
        </blockquote>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
          {data.p2}
        </p>
        
      </div>
    </div>
  );
}`
  },
  // 17. Hover-to-Reveal Story Grid
  {
    name: "ProductDescription17",
    folder: "product-description-17",
    json: {
      items: [
        { img: "https://picsum.photos/seed/desc17a/600/600", title: "Sight", text: "Vibrant P3 color gamut brings every pixel to life." },
        { img: "https://picsum.photos/seed/desc17b/600/600", title: "Sound", text: "Spatial audio envelopes you in a 360-degree soundscape." },
        { img: "https://picsum.photos/seed/desc17c/600/600", title: "Touch", text: "Haptic engines respond instantly to your lightest tap." },
        { img: "https://picsum.photos/seed/desc17d/600/600", title: "Speed", text: "Instantaneous response times thanks to custom silicon." }
      ]
    },
    tsx: `import React from 'react';

export default function ProductDescription17({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-900 py-24 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.items.map((item: any, idx: number) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-black">
              
              {/* Image that fades out */}
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-500 group-hover:opacity-10" />
              
              {/* Text that is revealed */}
              <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
              
              {/* Initial Title */}
              <div className="absolute bottom-6 left-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold drop-shadow-md">{item.title}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
  },
  // 18. Stacked Cards Parallax (CSS sticky layout)
  {
    name: "ProductDescription18",
    folder: "product-description-18",
    json: {
      cards: [
        { title: "Stage 1: The Core", desc: "Forging the central processing unit.", color: "bg-blue-600" },
        { title: "Stage 2: The Shell", desc: "Milling the unibody enclosure.", color: "bg-indigo-600" },
        { title: "Stage 3: The Polish", desc: "Diamond cutting the chamfered edges.", color: "bg-purple-600" }
      ]
    },
    tsx: `import React from 'react';

export default function ProductDescription18({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-100 py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 relative space-y-[50vh] pb-[50vh]">
        {data.cards.map((card: any, idx: number) => (
          <div 
            key={idx} 
            className={\`\${card.color} sticky text-white rounded-[3rem] p-16 shadow-2xl flex flex-col justify-center min-h-[60vh] transition-transform duration-500\`}
            style={{ top: \`calc(10vh + \${idx * 40}px)\` }}
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mb-8">
              0{idx + 1}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{card.title}</h2>
            <p className="text-2xl font-light opacity-90 max-w-2xl">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  // 19. 3D Isometric Float
  {
    name: "ProductDescription19",
    folder: "product-description-19",
    json: {
      headline: "Dimensional Design",
      desc: "Every angle serves a purpose. The isometric layout reveals how densely packed and perfectly aligned the internal components truly are.",
      img: "https://picsum.photos/seed/iso/800/800"
    },
    tsx: `import React from 'react';

export default function ProductDescription19({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* Floating Isometric Image */}
        <div className="w-full md:w-1/2 flex justify-center relative perspective-1000">
          <div className="w-full max-w-md aspect-square relative transform rotate-x-[30deg] rotate-y-[-30deg] rotate-z-[10deg] animate-float shadow-[30px_30px_60px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden group">
            <img src={data.img} alt="Isometric" className="w-full h-full object-cover filter contrast-125 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">{data.headline}</h2>
          <p className="text-2xl text-gray-500 leading-relaxed font-light">
            {data.desc}
          </p>
        </div>
        
      </div>
      
      <style>{\`
        .perspective-1000 { perspective: 1000px; }
        @keyframes float {
          0% { transform: rotateX(30deg) rotateY(-30deg) rotateZ(10deg) translateY(0px); }
          50% { transform: rotateX(30deg) rotateY(-30deg) rotateZ(10deg) translateY(-20px); }
          100% { transform: rotateX(30deg) rotateY(-30deg) rotateZ(10deg) translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      \`}</style>
    </div>
  );
}`
  },
  // 20. Dynamic Marquee Interruption
  {
    name: "ProductDescription20",
    folder: "product-description-20",
    json: {
      textTop: "We started with a blank canvas and a single question: How do we make the impossible, possible?",
      marqueeText: "FASTER • LIGHTER • STRONGER • SMARTER • ",
      textBottom: "The answer lay not in adding features, but in rethinking the very foundation of the technology itself."
    },
    tsx: `import React from 'react';

export default function ProductDescription20({ data }: { data: any }) {
  return (
    <div className="w-full bg-black text-white py-32 overflow-hidden font-sans">
      
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <p className="text-3xl md:text-5xl font-light leading-snug text-gray-300">
          {data.textTop}
        </p>
      </div>
      
      {/* Infinite Marquee Interruption */}
      <div className="w-full bg-white text-black py-8 transform -rotate-2 scale-105 my-16 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-block">
            <span className="text-5xl md:text-7xl font-black tracking-tighter mx-4">{data.marqueeText.repeat(4)}</span>
          </div>
          <div className="animate-marquee inline-block">
            <span className="text-5xl md:text-7xl font-black tracking-tighter mx-4">{data.marqueeText.repeat(4)}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center mt-16">
        <p className="text-3xl md:text-5xl font-light leading-snug text-gray-300">
          {data.textBottom}
        </p>
      </div>

      <style>{\`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
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
