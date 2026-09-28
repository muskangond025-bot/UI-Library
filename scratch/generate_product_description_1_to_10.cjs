const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, '../src/components/sections/product/04-product-description');

const designs = [
  // 1. Classic Editorial (2-column, Drop Cap)
  {
    name: "ProductDescription1",
    folder: "product-description-1",
    json: {
      headline: "A Masterclass in Engineering",
      subhead: "The details that make the difference.",
      content1: "Designing this product was a journey of elimination. We stripped away everything that wasn't strictly necessary, leaving only the purest expression of function and form. The unibody enclosure is machined from a single block of aerospace-grade aluminum, offering structural rigidity that feels incredibly dense and premium in the hand.",
      content2: "Every curve has been mathematically calculated to catch the light perfectly. We spent over 1,000 hours refining the tactile feedback of the control surfaces. It is a device that invites touch, and rewards you with a level of precision that you simply have to experience to believe.",
      image: "https://picsum.photos/seed/desc1/1200/600"
    },
    tsx: `import React from 'react';

export default function ProductDescription1({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-24 md:py-32 font-serif text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 text-center">{data.subhead}</h2>
        <h1 className="text-5xl md:text-7xl font-medium text-center mb-16 leading-tight">{data.headline}</h1>
        
        <div className="w-full aspect-[21/9] overflow-hidden mb-16">
          <img src={data.image} alt="Detail" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-lg leading-relaxed text-gray-700">
          <div className="w-full md:w-1/2">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-black first-letter:mr-3 first-letter:float-left">
              {data.content1}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p>{data.content2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  // 2. Sticky Scroll (Apple style)
  {
    name: "ProductDescription2",
    folder: "product-description-2",
    json: {
      blocks: [
        { title: "Incredibly Light.", text: "Weighing in at under 2 pounds, it redefines portability without compromising an ounce of performance." },
        { title: "Devastatingly Powerful.", text: "Powered by our next-generation neural engine, capable of 15 trillion operations per second." },
        { title: "Silently Brilliant.", text: "A revolutionary fanless thermal design keeps things running completely silent, even under heavy load." }
      ],
      image: "https://picsum.photos/seed/desc2/800/1200"
    },
    tsx: `import React from 'react';

export default function ProductDescription2({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#fbfbfd] relative font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Sticky Image */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative group">
            <img src={data.image} alt="Product" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[10s] ease-out" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>
        </div>
        
        {/* Scrolling Text */}
        <div className="w-full md:w-1/2 py-24 md:py-[30vh] px-8 lg:px-16 space-y-[30vh]">
          {data.blocks.map((block: any, idx: number) => (
            <div key={idx} className="max-w-md opacity-80 hover:opacity-100 transform hover:-translate-y-2 transition-all duration-500">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{block.title}</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">{block.text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 3. Immersive Parallax Video/Image Background
  {
    name: "ProductDescription3",
    folder: "product-description-3",
    json: {
      headline: "Born from the elements.",
      content: "Forged under immense pressure and extreme temperatures, the chassis represents a breakthrough in material science. It is completely impervious to water, dust, and time itself. The crystalline structure absorbs impacts while remaining impossibly thin.",
      image: "https://picsum.photos/seed/desc3/1920/1080"
    },
    tsx: `import React from 'react';

export default function ProductDescription3({ data }: { data: any }) {
  return (
    <div className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image with fixed attachment for parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed scale-110" 
        style={{ backgroundImage: \`url(\${data.image})\` }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white py-32">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">{data.headline}</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          {data.content}
        </p>
      </div>
    </div>
  );
}`
  },
  // 4. Magazine Layout (Asymmetrical)
  {
    name: "ProductDescription4",
    folder: "product-description-4",
    json: {
      quote: "It changes how you interact with the digital world.",
      para1: "We didn't set out to make something different. We set out to make something better. The interface fades away, leaving you directly connected to your work.",
      para2: "The haptic engine provides subtle, physical affirmations to your digital actions. It creates a seamless bridge between the physical and virtual.",
      img1: "https://picsum.photos/seed/mag1/800/1000",
      img2: "https://picsum.photos/seed/mag2/800/600"
    },
    tsx: `import React from 'react';

export default function ProductDescription4({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f5f5f0] py-24 font-serif text-[#333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#e0dfd5] translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img src={data.img1} alt="Product" className="relative z-10 w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-italic font-bold leading-snug mb-10 text-black border-l-4 border-black pl-8">
              "{data.quote}"
            </h2>
            <div className="space-y-6 text-lg font-sans text-gray-600 pl-8 md:pl-12">
              <p>{data.para1}</p>
              <p>{data.para2}</p>
            </div>
            
            <div className="mt-16 w-full max-w-md ml-auto relative group">
              <img src={data.img2} alt="Detail" className="w-full h-auto rounded shadow-xl group-hover:shadow-2xl transition-shadow duration-500" />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 5. Horizontal Story Scroll (Simulated with Flex overflow)
  {
    name: "ProductDescription5",
    folder: "product-description-5",
    json: {
      title: "The Story",
      chapters: [
        { title: "Conception", text: "It started as a sketch on a napkin.", img: "https://picsum.photos/seed/ch1/600/400" },
        { title: "Prototyping", text: "145 iterations later, we found the perfect curve.", img: "https://picsum.photos/seed/ch2/600/400" },
        { title: "Production", text: "Custom machinery was built just to manufacture the casing.", img: "https://picsum.photos/seed/ch3/600/400" },
        { title: "Realization", text: "The final product exceeds every expectation.", img: "https://picsum.photos/seed/ch4/600/400" }
      ]
    },
    tsx: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductDescription5({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <h2 className="text-5xl font-bold">{data.title}</h2>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ArrowRight size={20} className="animate-pulse" />
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 w-max">
          {data.chapters.map((chap: any, idx: number) => (
            <div key={idx} className="w-[80vw] sm:w-[400px] flex flex-col group">
              <div className="w-full aspect-[3/2] rounded-2xl overflow-hidden mb-6 relative">
                <img src={chap.img} alt={chap.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-mono text-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-200 group-hover:text-white transition-colors">{chap.title}</h3>
              <p className="text-gray-500 leading-relaxed">{chap.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{\`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      \`}</style>
    </div>
  );
}`
  },
  // 6. Glassmorphism Text Panels
  {
    name: "ProductDescription6",
    folder: "product-description-6",
    json: {
      headline: "Transparently Beautiful",
      paragraphs: [
        "By utilizing a revolutionary new polymer, we achieved a level of optical clarity previously thought impossible. The internal components are proudly displayed, a testament to the meticulous engineering inside.",
        "It doesn't just look good; the material is highly durable, resisting scratches and impacts while remaining surprisingly lightweight."
      ],
      image: "https://picsum.photos/seed/glass/1920/1080"
    },
    tsx: `import React from 'react';

export default function ProductDescription6({ data }: { data: any }) {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-24 font-sans">
      {/* Background */}
      <img src={data.image} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden group">
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight drop-shadow-md">{data.headline}</h2>
          
          <div className="space-y-6">
            {data.paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-xl text-white/90 leading-relaxed font-light drop-shadow">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      <style>{\`
        @keyframes shine {
          100% { left: 200%; }
        }
        .animate-shine { animation: shine 1.5s ease-out; }
      \`}</style>
    </div>
  );
}`
  },
  // 7. Typographic Grid (Brutalist)
  {
    name: "ProductDescription7",
    folder: "product-description-7",
    json: {
      title: "DESCRIPTION_SYS",
      meta: "VERSION 2.0 // BUILD 4099",
      text: "THE ARCHITECTURE DICTATES FUNCTION. NO SUPERFLUOUS ELEMENTS. EVERY LINE, EVERY ANGLE IS CALCULATED FOR MAXIMUM EFFICIENCY. THE INDUSTRIAL AESTHETIC IS NOT A STYLISTIC CHOICE, BUT THE INEVITABLE RESULT OF PURE ENGINEERING LOGIC. RAW STEEL AND EXPOSED FASTENERS CELEBRATE THE MECHANICAL NATURE OF THE OBJECT.",
      img: "https://picsum.photos/seed/brutal/800/800"
    },
    tsx: `import React from 'react';

export default function ProductDescription7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white text-black font-mono border-t-8 border-b-8 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="lg:col-span-4 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 bg-yellow-400 flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300">
            <h2 className="text-4xl font-black break-words">{data.title}</h2>
            <p className="text-sm font-bold mt-12">{data.meta}</p>
          </div>
          
          <div className="lg:col-span-8 grid grid-rows-2">
            <div className="row-span-1 p-8 md:p-12 border-b-4 border-black flex items-center bg-gray-100 hover:bg-white transition-colors">
              <p className="text-xl md:text-2xl font-bold uppercase leading-tight tracking-tight">
                {data.text}
              </p>
            </div>
            <div className="row-span-1 border-black relative overflow-hidden group">
              <img src={data.img} alt="Industrial" className="w-full h-full object-cover filter grayscale contrast-150 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rV7928GJiYmAwwQYAAEMwLw43d/7AAAAABJRU5ErkJggg==')] opacity-30"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}`
  },
  // 8. Dark Mode Cyber / Code style
  {
    name: "ProductDescription8",
    folder: "product-description-8",
    json: {
      funcName: "initializeDescription()",
      comments: [
        "// The core is built on a distributed ledger",
        "// ensuring immutable data integrity.",
        "// Latency is reduced to near-zero."
      ],
      code: "const architecture = new QuantumEngine({\n  cores: 128,\n  threads: 512,\n  cooling: 'Liquid N2'\n});\n\nawait architecture.boot();"
    },
    tsx: `import React from 'react';
import { Terminal } from 'lucide-react';

export default function ProductDescription8({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0d1117] py-24 font-mono text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          {/* Fake Window Header */}
          <div className="bg-[#010409] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-xs text-gray-500 flex items-center gap-2">
              <Terminal size={14} /> system.ts
            </span>
          </div>
          
          {/* Editor Body */}
          <div className="p-8 text-sm md:text-base leading-relaxed overflow-x-auto">
            <div className="text-purple-400 font-bold mb-6">
              function <span className="text-blue-400">{data.funcName}</span> {'{'}
            </div>
            
            <div className="pl-8 space-y-2 mb-6">
              {data.comments.map((c: string, i: number) => (
                <div key={i} className="text-gray-500 italic">{c}</div>
              ))}
            </div>
            
            <div className="pl-8 whitespace-pre text-gray-300">
              {data.code.split('\\n').map((line: string, i: number) => {
                // Extremely basic pseudo-syntax highlighting
                const highlighted = line
                  .replace(/const|new|await/g, match => \`<span class="text-pink-400">\${match}</span>\`)
                  .replace(/QuantumEngine/g, '<span class="text-yellow-200">QuantumEngine</span>')
                  .replace(/\\d+/g, match => \`<span class="text-blue-300">\${match}</span>\`)
                  .replace(/'[^']*'/g, match => \`<span class="text-green-300">\${match}</span>\`);
                
                return (
                  <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />
                );
              })}
            </div>
            
            <div className="text-purple-400 font-bold mt-6">
              {'}'}
            </div>
            
            <div className="mt-8 flex items-center text-green-400 animate-pulse">
              <span>$ system status: online</span><span className="w-2 h-4 bg-green-400 ml-1"></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 9. Organic / Eco Flow
  {
    name: "ProductDescription9",
    folder: "product-description-9",
    json: {
      title: "Rooted in Nature.",
      desc: "We source our materials exclusively from sustainable, regenerative farms. The processing uses zero harsh chemicals, relying instead on natural enzymes and ancient techniques that respect the earth.",
      image: "https://picsum.photos/seed/nature/1200/800"
    },
    tsx: `import React from 'react';

export default function ProductDescription9({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#f6f7f2] py-32 font-serif text-[#3d4538]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[4rem] overflow-hidden shadow-xl mb-24 group">
          <img src={data.image} alt="Nature" className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[15s] ease-in-out" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a5544]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 italic text-[#2c3328]">{data.title}</h2>
          <div className="w-12 h-px bg-[#8a9681] mx-auto mb-10"></div>
          <p className="text-xl md:text-2xl leading-loose font-light text-[#576150]">
            {data.desc}
          </p>
        </div>
        
      </div>
    </div>
  );
}`
  },
  // 10. Interactive Expand / Read More
  {
    name: "ProductDescription10",
    folder: "product-description-10",
    json: {
      headline: "Uncompromising Sound",
      intro: "A custom-built excursion driver delivers powerful bass, while a precisely engineered tweeter produces crisp, high frequencies.",
      extended: "The acoustic architecture has been completely redesigned to minimize distortion even at maximum volume. Computational audio algorithms run thousands of times per second to tune the output to your specific ear canal shape, ensuring a listening experience that is entirely personalized and profoundly moving. The result is a soundstage that feels impossibly wide for a device this compact."
    },
    tsx: `import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductDescription10({ data }: { data: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full bg-white py-24 md:py-40 font-sans">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10">{data.headline}</h2>
        
        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8">
          <p>{data.intro}</p>
        </div>
        
        <div className={\`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] \${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}\`}>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light pb-8">
            {data.extended}
          </p>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          {expanded ? (
            <>Read Less <ChevronUp size={20} /></>
          ) : (
            <>Read the Full Story <ChevronDown size={20} /></>
          )}
        </button>
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
