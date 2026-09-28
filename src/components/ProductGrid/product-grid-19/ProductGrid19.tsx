import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid19Props {
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

function SpotlightCard({ product, accentColor }: { product: Product, accentColor: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="relative group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${accentColor}20,
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-2 z-10 h-full flex flex-col">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black mb-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full shadow-lg">
              {product.badge}
            </div>
          )}
        </div>
        
        <div className="px-4 pb-4 flex flex-col flex-grow justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-1 text-zinc-400">{product.category}</p>
            <h3 className="text-xl font-bold text-white mb-4">{product.name}</h3>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
            <p className="text-lg text-white">{product.price}</p>
            <span className="text-sm font-bold uppercase" style={{ color: accentColor }}>View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid19({ section }: ProductGrid19Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-6xl mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          {content.title}
        </h2>
        <p className="text-sm font-mono tracking-widest uppercase" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.products.map((product) => (
          <SpotlightCard key={product.id} product={product} accentColor={style.accentColor} />
        ))}
      </div>
    </div>
  );
}
