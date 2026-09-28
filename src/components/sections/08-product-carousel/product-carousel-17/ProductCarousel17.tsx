import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel17Props {
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

export function ProductCarousel17({ section }: ProductCarousel17Props) {
  const { content, style } = section;
  const [flippedStates, setFlippedStates] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
          {content.title}
        </h2>
        <p className="text-sm font-bold tracking-widest uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 px-[10vw] md:px-[20vw] pb-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {content.products.map((product) => {
          const isFlipped = flippedStates[product.id] || false;

          return (
            <div 
              key={product.id}
              className="w-[80vw] md:w-[350px] shrink-0 snap-center perspective-1000 cursor-pointer aspect-[3/4]"
              onClick={() => toggleFlip(product.id)}
            >
              <div 
                className="w-full h-full relative transition-transform duration-700 preserve-3d"
                style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-6 left-6 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end">
                     <p className="text-white/70 font-mono text-xs uppercase tracking-widest mb-1">{product.category}</p>
                     <h3 className="text-2xl font-bold text-white leading-tight">{product.name}</h3>
                  </div>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl border border-gray-200 p-8 flex flex-col justify-between items-center text-center"
                  style={{ transform: 'rotateY(180deg)', backgroundColor: style.backgroundColor, color: style.textColor }}
                >
                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: style.accentColor }}>Product Details</p>
                    <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">{product.name}</h3>
                    <p className="text-gray-500 mb-8 leading-relaxed">Experience premium quality and craftsmanship with this exclusive piece, designed to elevate your everyday lifestyle.</p>
                  </div>
                  
                  <div className="w-full">
                    <p className="text-4xl font-light mb-6">{product.price}</p>
                    <button 
                      className="w-full py-4 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-105 transition-transform shadow-lg"
                      style={{ backgroundColor: style.accentColor }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}} />
    </div>
  );
}
