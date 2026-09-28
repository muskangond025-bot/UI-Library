import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  growth: string;
}

interface Trending9Props {
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

export function Trending9({ section }: Trending9Props) {
  const { content, style } = section;

  // Simulate chart points (y-axis values from 0-100)
  const chartPoints = [20, 45, 60, 95];

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-32">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="relative w-full h-[600px] border-l-2 border-b-2 border-gray-200 mt-20 pt-10">
          
          {/* Trend Line (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d={`M 12.5 ${100 - chartPoints[0]} L 37.5 ${100 - chartPoints[1]} L 62.5 ${100 - chartPoints[2]} L 87.5 ${100 - chartPoints[3]}`}
              fill="none"
              stroke={style.accentColor}
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Data Points / Products */}
          <div className="absolute inset-0 flex justify-around w-full h-full">
            {content.products.map((product, index) => (
              <div key={product.id} className="relative w-1/4 h-full flex flex-col items-center">
                
                {/* Node on the line */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.3) + 0.5, type: "spring" }}
                  className="absolute w-4 h-4 rounded-full border-4 border-white shadow-lg z-20"
                  style={{ 
                    backgroundColor: style.accentColor,
                    bottom: `${chartPoints[index]}%`,
                    transform: 'translateY(50%)'
                  }}
                />

                {/* Product Card Above Node */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.3) + 0.7 }}
                  className="absolute w-[80%] max-w-[200px] z-10 cursor-pointer group"
                  style={{ bottom: `calc(${chartPoints[index]}% + 2rem)` }}
                >
                  <div className="w-full aspect-square bg-white rounded-xl shadow-md p-2 mb-3 overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all group-hover:-translate-y-2">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold uppercase tracking-tight mb-1">{product.name}</h3>
                    <p className="text-xs font-light text-gray-500">{product.price}</p>
                    <span className="text-[10px] font-bold uppercase text-green-500 tracking-widest mt-1 block">
                      Growth: {product.growth}
                    </span>
                  </div>
                </motion.div>

                {/* Dashed line to x-axis */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${chartPoints[index]}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.3) + 0.5, duration: 0.5 }}
                  className="absolute bottom-0 w-px border-l border-dashed border-gray-300 z-0"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
