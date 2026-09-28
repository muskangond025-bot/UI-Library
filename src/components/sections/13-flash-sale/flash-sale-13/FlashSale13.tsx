import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale13Props {
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

export function FlashSale13({ section }: FlashSale13Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-24 relative">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter relative z-10">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.5em] uppercase mt-4 text-gray-400">
            {content.subtitle}
          </p>

          {/* Background Laser Cut Line */}
          <motion.div 
            animate={{ left: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 w-[200px] h-[4px] blur-[2px] z-20 pointer-events-none"
            style={{ backgroundColor: style.accentColor, boxShadow: `0 0 20px ${style.accentColor}` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="w-full aspect-[3/4] bg-zinc-900 overflow-hidden relative mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Diagonal Cut Line on hover */}
                <div 
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-transparent group-hover:bg-emerald-500 origin-top-right rotate-45 transform scale-x-0 group-hover:scale-x-150 transition-transform duration-500 shadow-[0_0_10px_#10B981]" />
                </div>
                
                {/* Scissors Icon */}
                <div className="absolute top-4 right-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <Scissors size={24} />
                </div>
              </div>

              <div className="flex flex-col relative">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 truncate">{product.name}</h3>
                
                <div className="relative h-12 overflow-hidden">
                  <div className="absolute inset-0 flex items-center transform group-hover:-translate-y-full transition-transform duration-500">
                    <span className="text-2xl font-medium text-gray-500">{product.oldPrice}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-3xl font-black" style={{ color: style.accentColor }}>{product.newPrice}</span>
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
