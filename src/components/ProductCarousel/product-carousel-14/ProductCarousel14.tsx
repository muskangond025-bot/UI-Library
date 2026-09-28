import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductCarousel14Props {
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

export function ProductCarousel14({ section }: ProductCarousel14Props) {
  const { content, style } = section;
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse pos for lens
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const activeProduct = content.products[activeIndex];

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 flex flex-col md:flex-row items-center justify-center gap-12"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/3 flex flex-col">
        <h2 className="text-3xl font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.title}
        </h2>
        <p className="text-sm text-gray-500 font-mono uppercase mb-12">
          {content.subtitle}
        </p>

        <div className="flex flex-col gap-6">
          {content.products.map((product, idx) => (
            <button 
              key={product.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left border-l-4 pl-6 py-2 transition-all ${idx === activeIndex ? 'border-black opacity-100' : 'border-gray-200 opacity-40 hover:opacity-100'}`}
              style={{ borderColor: idx === activeIndex ? style.accentColor : '' }}
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter">{product.name}</h3>
              <p className="font-serif italic">{product.price}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-2xl">
        <div 
          className="relative w-full aspect-square bg-gray-100 overflow-hidden cursor-crosshair group"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              ref={imageRef}
              key={activeProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={activeProduct.image}
              alt={activeProduct.name}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Lens effect overlay */}
          {isHovering && (
            <motion.div 
              className="absolute pointer-events-none rounded-full border-2 border-white shadow-xl overflow-hidden hidden md:block"
              style={{
                width: 200,
                height: 200,
                top: `calc(${mousePos.y}% - 100px)`,
                left: `calc(${mousePos.x}% - 100px)`,
                backgroundImage: `url(${activeProduct.image})`,
                backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                backgroundSize: '250%', // Magnification level
                backgroundRepeat: 'no-repeat'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}

          {activeProduct.badge && (
            <span className="absolute top-6 right-6 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
              {activeProduct.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
