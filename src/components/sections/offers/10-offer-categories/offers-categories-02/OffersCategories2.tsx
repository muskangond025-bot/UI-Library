import React from 'react';
import { Percent, Gift, Truck, CreditCard, ArrowUpRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  discountText: string;
  description: string;
  iconName: string;
  size: 'large' | 'medium' | 'small';
  href?: string;
  image?: string;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      description?: string;
      categories?: CategoryItem[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 'bento-1',
    title: 'Percentage Deals',
    discountText: 'UP TO 50% OFF',
    description: 'Instant site-wide discounts on featured apparel, tech, & accessories.',
    iconName: 'Percent',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    href: '/offers/percentage'
  },
  {
    id: 'bento-2',
    title: 'Buy 1 Get 1 Free',
    discountText: 'BOGO UNLOCKED',
    description: 'Double items in your bag with zero extra charges.',
    iconName: 'Gift',
    size: 'medium',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    href: '/offers/bogo'
  },
  {
    id: 'bento-3',
    title: 'Free Express Shipping',
    discountText: '$0 FREIGHT',
    description: 'Complimentary shipping on orders over $49.',
    iconName: 'Truck',
    size: 'small',
    href: '/offers/free-shipping'
  },
  {
    id: 'bento-4',
    title: 'Bank & Card Offers',
    discountText: '15% CASHBACK',
    description: 'Instant partner card discounts.',
    iconName: 'CreditCard',
    size: 'small',
    href: '/offers/bank'
  }
];

export function OffersCategories2({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Offer Category Bento Grid';
  const description = settings.description || 'Explore offers organized into dynamic asymmetric bento blocks.';
  const categories = settings.categories || DEFAULT_CATEGORIES;

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white font-sans border-y border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-xl">
          <span className="px-3.5 py-1 rounded-full bg-slate-800 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider border border-slate-700 inline-block">
            Design: Asymmetric Bento Grid • Animation: Hover Depth Elevation & Image Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-400 text-sm">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Tile */}
          {categories[0] && (
            <div className="md:col-span-2 bg-slate-950 rounded-3xl border border-slate-800 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8 group hover:border-indigo-500/50 transition-colors">
              <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-500">
                <img src={categories[0].image} alt={categories[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-indigo-600 text-white font-mono text-xs font-bold uppercase">
                  FEATURED CATEGORY
                </span>
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/20 text-white group-hover:bg-indigo-600 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-3xl sm:text-5xl font-black text-indigo-400 tracking-tight block">
                  {categories[0].discountText}
                </span>
                <h3 className="text-2xl font-bold text-white">{categories[0].title}</h3>
                <p className="text-slate-300 text-sm max-w-lg leading-relaxed">
                  {categories[0].description}
                </p>
              </div>
            </div>
          )}

          {/* Medium Tile */}
          {categories[1] && (
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6 group hover:border-purple-500/50 transition-colors">
              <div className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-500">
                <img src={categories[1].image} alt={categories[1].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/40 font-mono text-[10px] font-bold uppercase">
                  BOGO PERK
                </span>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/20 text-white group-hover:bg-purple-600 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <span className="text-2xl font-black text-purple-300 block">{categories[1].discountText}</span>
                <h3 className="text-xl font-bold text-white">{categories[1].title}</h3>
                <p className="text-slate-400 text-xs">{categories[1].description}</p>
              </div>
            </div>
          )}

          {/* Small Tiles */}
          {categories.slice(2).map((cat) => (
            <div key={cat.id} className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase">{cat.discountText}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white">{cat.title}</h4>
                <p className="text-xs text-slate-400">{cat.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OffersCategories2;
