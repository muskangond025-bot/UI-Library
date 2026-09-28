import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid12Props {
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

function CursorFollowerCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Center the image on the cursor
    mouseX.set(e.clientX - rect.left - 150); // 150 is half the image width
    mouseY.set(e.clientY - rect.top - 200);  // 200 is half the image height
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full py-16 md:py-24 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group px-4 overflow-hidden"
    >
      <div className="z-10 pointer-events-none mb-4 md:mb-0">
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-300">
          {product.name}
        </h3>
        <p className="text-sm font-mono uppercase tracking-widest text-gray-500 mt-2">{product.category}</p>
      </div>

      <div className="z-10 pointer-events-none flex items-center gap-6">
        {product.badge && (
          <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-sm">
            {product.badge}
          </span>
        )}
        <p className="text-2xl md:text-3xl font-light">{product.price}</p>
      </div>

      {/* The Floating Image */}
      <motion.div
        className="absolute top-0 left-0 w-[300px] aspect-[3/4] pointer-events-none z-0 overflow-hidden shadow-2xl rounded-lg hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          rotate: isHovered ? 5 : 0 
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 }, rotate: { duration: 0.3 } }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform scale-110"
        />
      </motion.div>
    </div>
  );
}

export function ProductGrid12({ section }: ProductGrid12Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-5xl px-4 mb-24 text-center">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-6xl md:text-8xl font-serif italic">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col border-t border-gray-200">
        {content.products.map((product) => (
          <CursorFollowerCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
