import React from 'react';
import { motion } from 'framer-motion';
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

interface BestSeller13Props {
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

export function BestSeller13({ section }: BestSeller13Props) {
  const { content, style } = section;

  // We need at least 3 products for this specific layout
  const topProduct = content.products[0];
  const sideProducts = content.products.slice(1, 3);

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* #1 Bestseller (Left diagonal slice on desktop) */}
      <div 
        className="w-full lg:w-[65%] min-h-[60vh] lg:min-h-screen relative group"
        style={{ 
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' // Diagonal right edge
        }}
      >
        <img 
          src={topProduct.image} 
          alt={topProduct.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black bg-white text-black shadow-2xl">
              #1
            </div>
            {topProduct.badge && (
              <span className="px-4 py-1 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                {topProduct.badge}
              </span>
            )}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">{topProduct.name}</h2>
          <p className="text-sm font-mono uppercase tracking-widest text-white/70 mb-8">{topProduct.category}</p>
          
          <div className="flex items-center gap-6 mb-12">
            <p className="text-4xl font-light">{topProduct.price}</p>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400"><Star size={20} fill="currentColor" /></div>
              <span className="font-bold text-xl">{topProduct.rating}</span>
            </div>
          </div>

          <button 
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform"
            style={{ backgroundColor: style.accentColor, color: '#fff' }}
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Ranks 2 & 3 (Right Side Column) */}
      <div className="w-full lg:w-[35%] flex flex-col lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
        
        {/* Title area replacing empty space */}
        <div className="p-8 lg:p-12 hidden lg:flex flex-col justify-end bg-transparent h-1/4">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-right">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-widest uppercase text-right" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
        </div>

        {/* Small Cards */}
        <div className="flex-1 flex flex-col sm:flex-row lg:flex-col p-4 lg:p-8 gap-4 justify-end h-3/4">
          {sideProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer shadow-xl border border-gray-200"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex flex-col items-center justify-center font-black bg-black text-white shadow-lg">
                <span className="text-lg leading-none">#{index + 2}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h4 className="text-2xl font-bold mb-2 leading-tight">{product.name}</h4>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-light">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="font-bold text-sm">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1024px) {
          .lg\\:w-\\[65\\%\\] { clip-path: none !important; }
        }
      `}} />
    </div>
  );
}
