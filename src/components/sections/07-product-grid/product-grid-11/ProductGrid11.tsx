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

interface Featured {
  title: string;
  description: string;
  image: string;
}

interface ProductGrid11Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      featured: Featured;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function ProductGrid11({ section }: ProductGrid11Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-12 md:py-24 px-4 md:px-12 flex justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        
        {/* Left Side: Sticky Featured Content */}
        <div className="w-full lg:w-1/3 relative">
          <div className="lg:sticky lg:top-32 flex flex-col gap-8 h-fit">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
                {content.subtitle}
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                {content.title}
              </h2>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-xl group">
              <img 
                src={content.featured.image} 
                alt={content.featured.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">{content.featured.title}</h3>
                <p className="text-sm text-white/80">{content.featured.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Product Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:pt-32">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-md z-10">
                    {product.badge}
                  </div>
                )}
                
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
                
                <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-gray-200 transition-colors shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">{product.category}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-lg font-light">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
