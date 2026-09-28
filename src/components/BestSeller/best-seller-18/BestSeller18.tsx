import React from 'react';
import { motion } from 'framer-motion';
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

interface BestSeller18Props {
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

export function BestSeller18({ section }: BestSeller18Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl relative min-h-[800px] flex flex-col md:block">
        
        <div className="md:absolute md:top-12 md:left-12 z-20 mb-12 text-center md:text-left">
          <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        {/* The Grid / Freeform Layout */}
        <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0">
          
          {/* #1 Product - Massive and Center/Right */}
          {content.products[0] && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-12 md:w-5/12 aspect-[4/5] md:aspect-square bg-white/5 rounded-[2rem] border border-white/10 p-6 flex flex-col justify-end overflow-hidden group cursor-pointer z-10"
            >
              <img 
                src={content.products[0].image} 
                alt={content.products[0].name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              
              <div className="absolute top-6 left-6 w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl bg-white text-black shadow-2xl">
                #1
              </div>

              <div className="relative z-10">
                {content.products[0].badge && (
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    {content.products[0].badge}
                  </span>
                )}
                <h3 className="text-4xl lg:text-5xl font-bold mb-2">{content.products[0].name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-light">{content.products[0].price}</p>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={20} fill="currentColor" />
                    <span className="font-bold text-lg text-white">{content.products[0].rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* #2 Product - Top Left / Middle */}
          {content.products[1] && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:absolute md:top-[25%] md:left-12 md:w-3/12 aspect-square bg-white/5 rounded-3xl border border-white/10 p-5 flex flex-col justify-end overflow-hidden group cursor-pointer z-0 md:hover:z-20"
            >
              <img 
                src={content.products[1].image} 
                alt={content.products[1].name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg bg-black text-white shadow-xl">
                #2
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 leading-tight">{content.products[1].name}</h3>
                <p className="text-xl font-light">{content.products[1].price}</p>
              </div>
            </motion.div>
          )}

          {/* #3 Product - Bottom Left */}
          {content.products[2] && (
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:absolute md:bottom-12 md:left-[15%] md:w-4/12 aspect-[16/9] bg-white/5 rounded-3xl border border-white/10 p-5 flex flex-col justify-end overflow-hidden group cursor-pointer z-20"
            >
              <img 
                src={content.products[2].image} 
                alt={content.products[2].name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg bg-black text-white shadow-xl">
                #3
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold mb-1">{content.products[2].name}</h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={12} fill="currentColor" />
                    <span className="font-bold text-xs text-white">{content.products[2].rating}</span>
                  </div>
                </div>
                <p className="text-2xl font-light">{content.products[2].price}</p>
              </div>
            </motion.div>
          )}

          {/* #4 Product - Bottom Center/Right (floating behind #1) */}
          {content.products[3] && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:absolute md:-bottom-8 md:right-[35%] md:w-3/12 aspect-square bg-white/5 rounded-full border-4 border-[#18181B] p-5 flex flex-col items-center justify-center text-center overflow-hidden group cursor-pointer z-0"
            >
              <img 
                src={content.products[3].image} 
                alt={content.products[3].name}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 block">Rank #4</span>
                <h3 className="text-lg font-bold mb-1">{content.products[3].name}</h3>
                <p className="text-sm font-light">{content.products[3].price}</p>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
