import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
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

interface BestSeller15Props {
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

export function BestSeller15({ section }: BestSeller15Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mousePos.x, springConfig);
  const smoothY = useSpring(mousePos.y, springConfig);

  useEffect(() => {
    smoothX.set(mousePos.x);
    smoothY.set(mousePos.y);
  }, [mousePos, smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-24"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-0 right-0 text-center z-20 pointer-events-none">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 z-10">
        {content.products.map((product, index) => {
          // Calculate individual parallax depth based on index
          const depth = (index % 2 === 0 ? 1 : -1) * (index + 1) * 20;

          return (
            <motion.div
              key={product.id}
              style={{
                x: useSpring(mousePos.x * depth, springConfig),
                y: useSpring(mousePos.y * depth, springConfig)
              }}
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-white group cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl bg-white text-black shadow-lg">
                {index + 1}
              </div>

              {product.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {product.badge}
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-mono uppercase tracking-widest text-white/70 mb-1">{product.category}</p>
                <h3 className="text-2xl font-bold mb-2 leading-tight">{product.name}</h3>
                <div className="flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-xl font-light">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={14} fill="currentColor" />
                    <span className="font-bold text-sm text-white">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
