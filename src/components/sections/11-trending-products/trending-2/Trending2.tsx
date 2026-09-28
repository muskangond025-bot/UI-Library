import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending2Props {
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

export function Trending2({ section }: Trending2Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-12 w-full">
                {/* Rank Number */}
                <span 
                  className="text-4xl md:text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity w-12 md:w-24"
                  style={{ color: style.accentColor }}
                >
                  0{index + 1}
                </span>

                {/* Product Image */}
                <div className="w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 pr-4">
                  <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-6">
                    <span className="text-lg md:text-xl font-light opacity-60">
                      {product.price}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:flex">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
