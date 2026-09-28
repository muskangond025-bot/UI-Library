import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

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

interface BestSeller4Props {
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

export function BestSeller4({ section }: BestSeller4Props) {
  const { content, style } = section;

  // Expecting at least 4 products for the bento layout. 
  // First is the massive hero, the rest are smaller tiles.
  const heroProduct = content.products[0];
  const sideProducts = content.products.slice(1, 4);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl text-left mb-12">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Hero Product - takes up 2 columns on desktop */}
        {heroProduct && (
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[500px] md:min-h-[600px] bg-white/5 border border-white/10">
            <img 
              src={heroProduct.image} 
              alt={heroProduct.name}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 left-6 w-16 h-16 rounded-full flex flex-col items-center justify-center shadow-2xl z-10" style={{ backgroundColor: style.accentColor, color: '#000' }}>
              <span className="text-xs font-bold uppercase leading-none">Rank</span>
              <span className="text-2xl font-black leading-none">#1</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              {heroProduct.badge && (
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-white/20">
                  {heroProduct.badge}
                </span>
              )}
              <p className="font-mono text-sm uppercase tracking-widest text-white/60 mb-2">{heroProduct.category}</p>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{heroProduct.name}</h3>
              
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-light text-white">{heroProduct.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold text-white">{heroProduct.rating}</span>
                  </div>
                </div>
                <button 
                  className="w-full md:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  style={{ backgroundColor: style.accentColor, color: '#000' }}
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Side Grid - takes up 1 column on desktop, stacking 3 smaller cards */}
        <div className="flex flex-col gap-6">
          {sideProducts.map((product, index) => (
            <div 
              key={product.id}
              className="relative flex-1 rounded-3xl overflow-hidden group bg-white/5 border border-white/10 min-h-[160px] md:min-h-0 cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
              
              <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-sm z-10">
                #{index + 2}
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white leading-tight mb-1">{product.name}</h4>
                <div className="flex justify-between items-end">
                  <p className="text-lg text-white/80">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs text-white/90">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
