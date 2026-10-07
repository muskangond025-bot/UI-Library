import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  number: string;
  title: string;
  label: string;
  description: string;
  badge: string;
  image: string;
  href?: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      eyebrow?: string;
      heading?: string;
      description?: string;
      categories?: CategoryItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 'percentage',
    number: '01',
    title: 'Percentage Discount Offers',
    label: 'UP TO 50% OFF',
    description: 'Tiered percentage savings across all premium collections and new seasonal arrivals.',
    badge: 'Storewide Deal',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    href: '/offers/percentage'
  },
  {
    id: 'bogo',
    number: '02',
    title: 'Buy 1 Get 1 Free Deals',
    label: 'DOUBLE VALUE',
    description: 'Mix & match selected apparel and accessory items to double your basket at zero cost.',
    badge: 'Popular Choice',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    href: '/offers/bogo'
  },
  {
    id: 'shipping',
    number: '03',
    title: 'Free Shipping Thresholds',
    label: '$0 COURIER FEE',
    description: 'Unlock complimentary door-to-door express freight on orders reaching $49 or more.',
    badge: 'Instant Unlock',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    href: '/offers/free-shipping'
  },
  {
    id: 'bank',
    number: '04',
    title: 'Partner Bank Cashbacks',
    label: '15% CASHBACK',
    description: 'Instant discount rewards applied at checkout when paying with participating card issuers.',
    badge: 'Card Perk',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
    href: '/offers/bank'
  }
];

export function OffersCategories1({ section }: SectionProps) {
  const settings = section?.settings || {};
  const eyebrow = settings.eyebrow || 'Design: Editorial Offer Index • Animation: Hover Image Slide & Underline Draw';
  const heading = settings.heading || 'Editorial Offer Categories Directory';
  const description = settings.description || 'Explore specialized promotional collections engineered for maximum savings.';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  const [activeCategory, setActiveCategory] = useState<CategoryItem>(categories[0]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 font-serif text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Editorial Header */}
        <div className="space-y-4 font-sans max-w-2xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest inline-block">
            {eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Directory List + Sticky Preview Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Category List */}
          <div className="lg:col-span-7 space-y-2 font-sans">
            {categories.map((cat) => {
              const isActive = activeCategory.id === cat.id;

              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`group p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-slate-900 border-amber-400/60 shadow-xl'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <span className={`text-xl font-mono font-black transition-colors ${
                        isActive ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-400'
                      }`}>
                        {cat.number}
                      </span>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-xl font-bold font-serif transition-transform duration-300 ${
                            isActive ? 'text-white translate-x-1' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {cat.title}
                          </h3>
                          <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 text-[10px] font-mono uppercase font-bold border border-amber-400/20">
                            {cat.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <div className={`p-2 rounded-xl transition-all ${
                      isActive ? 'bg-amber-400 text-slate-950 scale-110' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                    }`}>
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Underline Scale Bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 transition-transform duration-300 transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Floating Image Display Box */}
          <div className="lg:col-span-5 font-sans sticky top-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl p-4 space-y-4"
              >
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden relative">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold">
                    {activeCategory.badge}
                  </span>
                </div>

                <div className="p-2 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    CATEGORY OVERVIEW
                  </span>
                  <h4 className="text-lg font-bold font-serif text-white">{activeCategory.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {activeCategory.description}
                  </p>
                  
                  <div className="pt-2">
                    <a
                      href={activeCategory.href || '#'}
                      className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all"
                    >
                      <span>BROWSE {activeCategory.label}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersCategories1;
