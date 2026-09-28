import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel7Props {
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

export function ProductCarousel7({ section }: ProductCarousel7Props) {
  const { content, style } = section;

  // Duplicate products to create an infinite scroll effect natively
  const duplicatedProducts = [...content.products, ...content.products];

  return (
    <div 
      className="relative min-h-screen w-full py-24 overflow-hidden flex flex-col justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center mb-16 relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          {content.title}
        </h2>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="relative w-full overflow-hidden whitespace-nowrap py-12 flex group">
        <div className="animate-marquee flex gap-8 whitespace-nowrap pl-8 group-hover:pause">
          {duplicatedProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="relative w-[300px] md:w-[400px] aspect-[4/5] shrink-0 rounded-2xl overflow-hidden cursor-pointer group/card"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-8 group-hover/card:translate-y-0 opacity-80 group-hover/card:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 to-transparent">
                {product.badge && (
                  <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white whitespace-normal leading-tight mb-2">{product.name}</h3>
                <div className="flex justify-between items-center whitespace-normal">
                  <p className="text-lg text-white/80 font-serif italic">{product.category}</p>
                  <p className="text-xl font-bold text-white">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
