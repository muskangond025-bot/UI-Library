import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface NewArrival8Props {
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

export function NewArrival8({ section }: NewArrival8Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full bg-cover"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row relative">
        
        {/* Sticky Left Sidebar */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 md:sticky md:top-0 md:h-screen flex flex-col justify-center border-r border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center text-xs">02</span>
              <p className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: style.accentColor }}>
                {content.subtitle}
              </p>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {content.title}
            </h2>
            <p className="text-lg opacity-60 max-w-sm mb-12">
              Our newest additions focus on architectural forms and premium materials designed to elevate your everyday spaces.
            </p>
            <button 
              className="px-8 py-4 border font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              Explore Collection
            </button>
          </motion.div>
        </div>

        {/* Scrolling Right Content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 flex flex-col gap-12 lg:gap-24">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col"
            >
              <div className="w-full aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden mb-8 group relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="max-w-[70%]">
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{product.name}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{product.description}</p>
                </div>
                <p className="text-2xl font-light" style={{ color: style.accentColor }}>
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Spacer for bottom padding to allow scrolling */}
          <div className="h-24 w-full" />
        </div>

      </div>
    </div>
  );
}
