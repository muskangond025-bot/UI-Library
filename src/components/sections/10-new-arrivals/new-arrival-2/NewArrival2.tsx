import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
}

interface NewArrival2Props {
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

export function NewArrival2({ section }: NewArrival2Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-20 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.3em] uppercase mb-4" 
            style={{ color: style.accentColor }}
          >
            {content.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 relative">
          
          {/* Main Large Item */}
          {content.products[0] && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 aspect-[4/5] relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              <img src={content.products[0].image} alt={content.products[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {content.products[0].badge && (
                <div className="absolute top-6 left-6 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
                  {content.products[0].badge}
                </div>
              )}
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{content.products[0].name}</h3>
                  <p className="text-2xl font-light text-white/80">{content.products[0].price}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          )}

          <div className="md:col-span-5 flex flex-col gap-8 md:gap-4">
            {/* Top Right Item */}
            {content.products[1] && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 min-h-[300px] relative group rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={content.products[1].image} alt={content.products[1].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {content.products[1].badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {content.products[1].badge}
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{content.products[1].name}</h3>
                  <p className="text-xl font-light text-white/80">{content.products[1].price}</p>
                </div>
              </motion.div>
            )}

            {/* Bottom Right Item */}
            {content.products[2] && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex-1 min-h-[300px] relative group rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={content.products[2].image} alt={content.products[2].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {content.products[2].badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {content.products[2].badge}
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{content.products[2].name}</h3>
                  <p className="text-xl font-light text-white/80">{content.products[2].price}</p>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
