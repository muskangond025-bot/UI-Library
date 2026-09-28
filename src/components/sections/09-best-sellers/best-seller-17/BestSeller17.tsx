import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller17Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function BestSeller17({ section }: BestSeller17Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="px-4 md:px-12 lg:px-24 mb-16 max-w-4xl">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          {content.title}
        </h2>
        <p className="text-lg md:text-xl opacity-70 max-w-xl leading-relaxed">
          Swipe through our most beloved pieces, curated just for you. These are the items our community can't stop talking about.
        </p>
      </div>

      <div className="w-full relative">
        <div 
          className="flex overflow-x-auto hide-scrollbar gap-8 md:gap-16 px-4 md:px-12 lg:px-24 pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {content.products.map((product, index) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="shrink-0 snap-start relative w-[85vw] md:w-[450px] flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Large Rank Number behind the image (mix blend) */}
                <div className="absolute -left-4 -top-8 text-[150px] font-black opacity-20 pointer-events-none mix-blend-exclusion text-white z-10 transition-opacity group-hover:opacity-10">
                  {index + 1}
                </div>

                {product.badge && (
                  <span className="absolute top-6 right-6 px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest z-20">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold" style={{ color: style.accentColor }}>0{index + 1} //</span>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60">{product.category}</p>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">{product.name}</h3>
                
                <div className="flex justify-between items-center w-full border-t border-black/10 pt-4">
                  <p className="text-2xl font-light">{product.price}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star size={14} fill={style.accentColor} stroke={style.accentColor} />
                      <span className="font-bold text-sm">{product.rating}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
