import React from 'react';
import { Star } from 'lucide-react';

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

interface BestSeller7Props {
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

export function BestSeller7({ section }: BestSeller7Props) {
  const { content, style } = section;

  // Duplicate for seamless infinite scrolling
  const marqueeProducts = [...content.products, ...content.products];

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center mb-16 px-4">
        <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap group">
        <div className="flex animate-marquee group-hover:pause">
          {marqueeProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="inline-flex flex-col w-[280px] md:w-[350px] mx-4 shrink-0 transition-transform duration-300 hover:-translate-y-4 cursor-pointer"
            >
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative mb-6 shadow-xl border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Ranking Tag */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex flex-col items-center justify-center font-black shadow-lg bg-white/90 backdrop-blur-sm text-black">
                  <span className="text-[10px] leading-none uppercase">Rank</span>
                  <span className="text-xl leading-none">{(index % content.products.length) + 1}</span>
                </div>

                {product.badge && (
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="px-2">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-2xl font-bold mb-2 truncate whitespace-normal leading-tight">{product.name}</h3>
                
                <div className="flex justify-between items-center mt-4">
                  <p className="text-2xl font-light">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
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
