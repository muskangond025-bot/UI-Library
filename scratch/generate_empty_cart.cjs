const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'cart', '09-empty-cart-section');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const defaultSettings = {
  title: "Your Cart Is Empty",
  subtitle: "Explore our latest collections to find items you'll love",
  primaryCta: {
    label: "Start Shopping",
    href: "/shop"
  },
  categories: [
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Trending Apparel", href: "/apparel" },
    { name: "Accessories", href: "/accessories" }
  ]
};

const variants = [
  {
    id: 1,
    title: "Empty Cart 01 — Classic Centered Empty State",
    desc: "Centered composition with a minimal cart icon, clear messaging, and a primary shopping action.",
    motion: "Subtle cart icon entrance",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection1({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl animate-pulse">
          <ShoppingBag className="w-9 h-9 text-indigo-400" />
        </div>
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">01 / CLASSIC CENTERED</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-sm">{settings.subtitle}</p>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection1;`
  },
  {
    id: 2,
    title: "Empty Cart 02 — Editorial Typography",
    desc: "Bold oversized typography reading 'YOUR CART IS EMPTY' with small supporting text and offset CTA.",
    motion: "Directional typography entrance",
    code: `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EmptyCartSection2({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-4">02 / EDITORIAL TYPOGRAPHY</span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-600 uppercase">
            YOUR<br />CART IS<br />EMPTY.
          </h2>
        </div>
        <div className="max-w-sm">
          <p className="text-sm text-neutral-400 mb-6">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all">
            <span>{settings.primaryCta?.label || 'Explore Catalog'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection2;`
  },
  {
    id: 3,
    title: "Empty Cart 03 — Split Empty State",
    desc: "Desktop split-screen layout with message and CTA on the left and a large visual artwork on the right.",
    motion: "Split-panel independent entrance",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight, Compass } from 'lucide-react';

export function EmptyCartSection3({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">03 / SPLIT EMPTY STATE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{settings.title}</h2>
          <p className="text-sm text-slate-400 mb-8 max-w-md">{settings.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" />
              <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
            </button>
            <button className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs flex items-center gap-2 border border-slate-700 transition-all">
              <Compass className="w-4 h-4" />
              <span>Browse Categories</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 h-72 sm:h-96 rounded-2xl overflow-hidden relative border border-slate-800 bg-slate-950">
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80" alt="Empty Cart Artwork" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 text-xs font-mono text-emerald-400 bg-slate-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
            0 Items Currently In Cart
          </span>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection3;`
  },
  {
    id: 4,
    title: "Empty Cart 04 — Illustration-First",
    desc: "A large custom empty-cart visual dominates the section with secondary text and CTA below.",
    motion: "Meaningful floating illustration motion",
    code: `import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function EmptyCartSection4({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-lg mx-auto text-center flex flex-col items-center">
        <div className="w-full h-64 rounded-3xl overflow-hidden mb-8 relative border border-neutral-800 bg-neutral-900 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80" alt="Empty Cart Visual" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          <span className="absolute top-4 left-4 text-xs font-mono font-bold text-amber-400 bg-black/80 px-3 py-1 rounded-full border border-amber-500/30">
            04 / ILLUSTRATION HERO
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{settings.title}</h2>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all">
          <span>{settings.primaryCta?.label || 'Discover Collection'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection4;`
  },
  {
    id: 5,
    title: "Empty Cart 05 — Minimal Line Art",
    desc: "Generous whitespace featuring a clean line-art cart illustration with single strong CTA.",
    motion: "Progressive SVG line drawing",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export function EmptyCartSection5({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Line Art Illustration */}
        <div className="w-24 h-24 mb-6 text-indigo-400">
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="22" cy="54" r="4" />
            <circle cx="48" cy="54" r="4" />
            <path d="M6 10h10l8 32h28l6-22H20" />
            <path d="M32 20v10M27 25h10" strokeDasharray="2 2" />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">05 / MINIMAL LINE ART</span>
        <h2 className="text-xl font-bold tracking-tight text-white mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8 font-light max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs tracking-wider uppercase flex items-center gap-2 transition-all">
          <span>{settings.primaryCta?.label || 'Begin Shopping'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection5;`
  },
  {
    id: 6,
    title: "Empty Cart 06 — Shopping Journey",
    desc: "Visual 4-step progress flow (Empty Cart -> Explore -> Add Items -> Checkout) with Step 1 highlighted.",
    motion: "Path and step progression animation",
    code: `import React from 'react';
import { ShoppingBag, Search, PlusCircle, CreditCard, ArrowRight } from 'lucide-react';

export function EmptyCartSection6({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  const steps = [
    { num: "01", label: "Empty Cart", icon: ShoppingBag, active: true },
    { num: "02", label: "Explore Items", icon: Search, active: false },
    { num: "03", label: "Add Selection", icon: PlusCircle, active: false },
    { num: "04", label: "Easy Checkout", icon: CreditCard, active: false }
  ];

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / SHOPPING JOURNEY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">{settings.title}</h2>

        {/* 4-Step Progress Track */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className={\`p-4 rounded-2xl border text-center transition-all \${
                s.active ? 'bg-cyan-500/10 border-cyan-400 text-white ring-2 ring-cyan-400/30' : 'bg-slate-950/60 border-slate-800 text-slate-500'
              }\`}>
                <div className="w-8 h-8 rounded-full bg-slate-800 mx-auto mb-2 flex items-center justify-center">
                  <Icon className={\`w-4 h-4 \${s.active ? 'text-cyan-400' : 'text-slate-500'}\`} />
                </div>
                <span className="text-[10px] font-mono block text-slate-400">{s.num}</span>
                <span className="text-xs font-bold">{s.label}</span>
              </div>
            );
          })}
        </div>

        <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>Start Step 2: Explore Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection6;`
  },
  {
    id: 7,
    title: "Empty Cart 07 — Asymmetric Editorial",
    desc: "Off-center layout placing empty-state text on the left and offset graphic visual on the right.",
    motion: "Asymmetric directional entrance",
    code: `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EmptyCartSection7({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 pr-0 md:pr-8">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">07 / ASYMMETRIC EDITORIAL</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">YOUR BAG IS CURRENTLY UNFILLED.</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-lg">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all">
            <span>{settings.primaryCta?.label || 'Browse New Arrivals'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center">
          <div className="h-60 rounded-2xl overflow-hidden mb-4 bg-neutral-950">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Collection Preview" className="w-full h-full object-cover" />
          </div>
          <span className="text-xs font-mono text-purple-400 block font-bold uppercase">Curated Catalog</span>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection7;`
  },
  {
    id: 8,
    title: "Empty Cart 08 — Full-Width Empty State",
    desc: "Unboxed full-bleed container with expansive typography, large visual, and full-width CTA banner.",
    motion: "Horizontal full-width reveal",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export function EmptyCartSection8({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 border-y border-slate-800 py-12">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">08 / FULL-WIDTH UNBOXED</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">{settings.title}</h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">{settings.subtitle}</p>
        </div>
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-2 shadow-xl shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection8;`
  },
  {
    id: 9,
    title: "Empty Cart 09 — Floating Object",
    desc: "A 3D glassmorphic floating shopping bag icon with subtle ambient movement and clean text.",
    motion: "Subtle floating vertical motion",
    code: `import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export function EmptyCartSection9({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* Floating 3D Object */}
        <div className="w-24 h-24 rounded-3xl bg-indigo-600/20 border border-indigo-500/40 backdrop-blur-xl flex items-center justify-center mb-6 shadow-2xl animate-bounce">
          <ShoppingBag className="w-12 h-12 text-indigo-400" />
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-1">09 / FLOATING OBJECT</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25">
          {settings.primaryCta?.label || 'Discover Products'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection9;`
  },
  {
    id: 10,
    title: "Empty Cart 10 — Empty Cart + Category Entry",
    desc: "Empty state header accompanied by direct quick-jump category entry pills (Men, Women, Accessories).",
    motion: "Staggered category option entrance",
    code: `import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export function EmptyCartSection10({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / CATEGORY ENTRY DIRECTORY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

        {/* Quick Category Jump Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(settings.categories || defaultSettings.categories).map((c: any) => (
            <button key={c.name} className="px-4 py-2.5 bg-slate-950 border border-slate-800 hover:border-amber-400 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all">
              <Tag className="w-3.5 h-3.5 text-amber-400" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>{settings.primaryCta?.label || 'Browse All Categories'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection10;`
  },
  {
    id: 11,
    title: "Empty Cart 11 — CTA-First",
    desc: "High-impact visual CTA hero banner asking 'READY TO SHOP?' as the dominant focal element.",
    motion: "CTA emphasis transition",
    code: `import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export function EmptyCartSection11({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
        <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">11 / CTA-FIRST HERO</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">READY TO SHOP?</h2>
        <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

        <button className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-slate-200 text-slate-950 font-extrabold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl">
          <ShoppingBag className="w-4 h-4" />
          <span>{settings.primaryCta?.label || 'START SHOPPING NOW'}</span>
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection11;`
  },
  {
    id: 12,
    title: "Empty Cart 12 — Cart Silhouette",
    desc: "Large stylized shopping bag outline with integrated message and embedded CTA.",
    motion: "Silhouette outline self-drawing animation",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export function EmptyCartSection12({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto bg-slate-900 border-2 border-dashed border-slate-700 rounded-3xl p-8 text-center flex flex-col items-center">
        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">12 / CART SILHOUETTE</span>
        <h2 className="text-2xl font-bold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>{settings.primaryCta?.label || 'Fill Your Cart'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection12;`
  },
  {
    id: 13,
    title: "Empty Cart 13 — Product Discovery Bridge",
    desc: "Empty cart banner bridging directly into curated collection links and discovery action.",
    motion: "Discovery bridge transition",
    code: `import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';

export function EmptyCartSection13({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-950 border border-slate-800 rounded-3xl p-8">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1">13 / DISCOVERY BRIDGE</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{settings.title}</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md">{settings.subtitle}</p>
        </div>
        <button className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap">
          <Compass className="w-4 h-4" />
          <span>{settings.primaryCta?.label || 'Explore Discovery'}</span>
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection13;`
  },
  {
    id: 14,
    title: "Empty Cart 14 — Horizontal Empty State",
    desc: "Horizontal linear layout (Visual | Message | CTA) for desktop, stacking cleanly on mobile.",
    motion: "Coordinated left-to-right horizontal entrance",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection14({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-indigo-400 block font-bold">14 / HORIZONTAL LINEAR</span>
            <h3 className="text-lg font-bold text-white">{settings.title}</h3>
            <p className="text-xs text-slate-400">{settings.subtitle}</p>
          </div>
        </div>

        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap">
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection14;`
  },
  {
    id: 15,
    title: "Empty Cart 15 — Premium Luxury Minimal",
    desc: "Ultra-minimal luxury aesthetic with 'CART / 00' indicator, refined serif typography, and sleek link.",
    motion: "Subtle typography transition",
    code: `import React from 'react';

export function EmptyCartSection15({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-24 px-6 lg:px-12 bg-black text-white font-serif">
      <div className="max-w-lg mx-auto text-center">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">CART / 00</span>
        <h2 className="text-3xl sm:text-4xl font-normal tracking-wide text-neutral-100 mb-4 font-serif italic">Nothing here yet.</h2>
        <p className="text-xs font-sans text-neutral-400 max-w-xs mx-auto mb-8 font-light tracking-wide">{settings.subtitle}</p>
        <button className="text-xs font-sans font-bold tracking-widest uppercase text-white underline underline-offset-8 hover:text-amber-400 transition-colors">
          {settings.primaryCta?.label || 'DISCOVER THE COLLECTION'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection15;`
  },
  {
    id: 16,
    title: "Empty Cart 16 — Interactive Empty Cart",
    desc: "Interactive empty shopping bag graphic that responds to hover and cursor focus with tilt dynamics.",
    motion: "Interactive hover/focus response",
    code: `import React, { useState } from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

export function EmptyCartSection16({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <div 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={\`w-24 h-24 rounded-3xl bg-slate-900 border cursor-pointer flex items-center justify-center mb-6 transition-all duration-300 \${
            hovered ? 'border-indigo-400 scale-110 shadow-2xl shadow-indigo-500/20 rotate-6' : 'border-slate-800'
          }\`}
        >
          <ShoppingBag className={\`w-10 h-10 transition-colors \${hovered ? 'text-indigo-400' : 'text-slate-500'}\`} />
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">16 / INTERACTIVE RESPONSIVE</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider">
          {settings.primaryCta?.label || 'Start Shopping'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection16;`
  },
  {
    id: 17,
    title: "Empty Cart 17 — Vertical Centered Journey",
    desc: "Vertical roadmap guiding the user from 'CART 0 ITEMS' down through 'DISCOVER & SHOP'.",
    motion: "Vertical path progression",
    code: `import React from 'react';
import { ArrowDown, ShoppingBag } from 'lucide-react';

export function EmptyCartSection17({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase">CART STATUS: 0 ITEMS</span>
        <ArrowDown className="w-4 h-4 text-indigo-400 my-2 animate-bounce" />
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <ArrowDown className="w-4 h-4 text-indigo-400 my-2 animate-bounce" />
        <p className="text-xs text-slate-400 mb-6 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider">
          {settings.primaryCta?.label || 'Discover Products'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection17;`
  },
  {
    id: 18,
    title: "Empty Cart 18 — Art Direction Lifestyle",
    desc: "Editorial lifestyle background frame with overlay text panel inviting the user to start a collection.",
    motion: "Controlled art-directed visual reveal",
    code: `import React from 'react';
import { ArrowRight } from 'lucide-react';

export function EmptyCartSection18({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-neutral-800 bg-neutral-900 h-96 flex items-center p-8 sm:p-12">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80" alt="Lifestyle Art" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        
        <div className="relative z-10 max-w-md">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">18 / ART DIRECTION LIFESTYLE</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-300 mb-6">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection18;`
  },
  {
    id: 19,
    title: "Empty Cart 19 — Compact Cart Empty State",
    desc: "High-density compact layout tailored for cart drawers and sidebars with micro-actions.",
    motion: "Short fast micro-interaction",
    code: `import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection19({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-10 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-sm mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
        <div className="w-10 h-10 rounded-lg bg-slate-800 mx-auto mb-3 flex items-center justify-center text-indigo-400">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-1">19 / COMPACT DRAWER LAYOUT</span>
        <h3 className="text-sm font-bold text-white mb-1">{settings.title}</h3>
        <p className="text-[11px] text-slate-400 mb-4">{settings.subtitle}</p>
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5">
          <span>{settings.primaryCta?.label || 'Shop Now'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection19;`
  },
  {
    id: 20,
    title: "Empty Cart 20 — Award-Level Experimental Empty State",
    desc: "Oversized editorial typography, 3D floating glass layers, asymmetric positioning, and cinematic motion.",
    motion: "Layered premium transition & 3D depth shift",
    code: `import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function EmptyCartSection20({ data }: { data?: any }) {
  const settings = data?.section?.settings || ${JSON.stringify(defaultSettings)};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-3">20 / AWARD-LEVEL EXPERIMENTAL</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 mb-4">
            0 ITEMS IN BAG.
          </h2>
          <p className="text-sm text-slate-400 max-w-md mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl shadow-indigo-500/30">
            <span>{settings.primaryCta?.label || 'Start Shopping Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 text-center shadow-2xl relative">
          <Sparkles className="w-8 h-8 text-indigo-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-lg font-bold text-white mb-2">Curated Experience</h3>
          <p className="text-xs text-slate-400">Discover hand-picked collections crafted for elevated aesthetic tastes.</p>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection20;`
  }
];

// Write files
variants.forEach(v => {
  const dir = path.join(baseDir, `empty-cart-section-${v.id}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const tsxPath = path.join(dir, `EmptyCartSection${v.id}.tsx`);
  fs.writeFileSync(tsxPath, v.code);

  const jsonPath = path.join(dir, `empty-cart-section-${v.id}.json`);
  const jsonContent = {
    title: v.title,
    description: v.desc,
    animation: v.motion,
    section: {
      settings: {
        title: v.title,
        description: v.desc,
        subtitle: defaultSettings.subtitle,
        primaryCta: defaultSettings.primaryCta,
        categories: defaultSettings.categories
      }
    }
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
});

console.log("Successfully generated all 20 Empty Cart Section variants!");
