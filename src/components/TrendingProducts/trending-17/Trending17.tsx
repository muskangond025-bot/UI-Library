import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  heat: string;
}

interface Trending17Props {
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

export function Trending17({ section }: Trending17Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/20 pb-8">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
              {content.subtitle}
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
            {['Extreme', 'High', 'Medium', 'Low'].map(heat => (
              <div key={heat} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60">
                <div className={`w-3 h-3 rounded-full ${
                  heat === 'Extreme' ? 'bg-red-500' : 
                  heat === 'High' ? 'bg-orange-500' : 
                  heat === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                }`} />
                {heat}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.products.map((product, index) => {
            const heatColor = product.heat === 'Extreme' ? 'rgba(239,68,68,0.7)' : 
                              product.heat === 'High' ? 'rgba(249,115,22,0.7)' : 
                              'rgba(234,179,8,0.7)';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group aspect-video rounded-3xl overflow-hidden cursor-pointer bg-white/5"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Thermal Gradient Map Overlay */}
                <div 
                  className="absolute inset-0 opacity-80 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${heatColor} 0%, rgba(0,0,0,0.8) 100%)`
                  }}
                />

                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Flame size={16} style={{ color: style.accentColor }} />
                  <span className="text-xs font-bold uppercase tracking-widest">{product.heat} Heat</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <h3 className="text-3xl font-bold uppercase tracking-tight leading-none text-white">{product.name}</h3>
                  <p className="text-2xl font-light text-white">{product.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
