import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge: string;
}

interface NewArrival1Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      description: string;
      ctaText: string;
      product: Product;
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function NewArrival1({ section }: NewArrival1Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-1 bg-current opacity-20" />
            <p className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            {content.title}
          </h2>
          
          <p className="text-lg md:text-xl opacity-70 max-w-md mb-12 leading-relaxed">
            {content.description}
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white shadow-xl hover:shadow-2xl transition-shadow"
            style={{ backgroundColor: style.accentColor }}
          >
            {content.ctaText}
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group"
        >
          <img 
            src={content.product.image} 
            alt={content.product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute top-6 right-6">
            <span className="px-4 py-2 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
              {content.product.badge}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{content.product.name}</h3>
            <p className="text-2xl font-light">{content.product.price}</p>
          </div>
        </motion.div>

      </div>
      
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter leading-none">
          NEW
        </h1>
      </div>
    </div>
  );
}
