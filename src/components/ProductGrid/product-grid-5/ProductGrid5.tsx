import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid5Props {
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

function TiltCard({ product, accentColor }: { product: Product, accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "0%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "0%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-square rounded-2xl cursor-pointer"
    >
      <div 
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
        style={{ transform: "translateZ(0px)" }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Glare effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
            mixBlendMode: "overlay"
          }}
        />
      </div>

      <div 
        className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="flex justify-between items-start">
          {product.badge && (
            <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
              {product.badge}
            </span>
          )}
          <span className="text-white text-lg font-bold shadow-sm">{product.price}</span>
        </div>
        
        <div>
          <p className="text-white/80 text-xs font-mono uppercase tracking-widest mb-1 drop-shadow-md" style={{ color: accentColor }}>
            {product.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
            {product.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductGrid5({ section }: ProductGrid5Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden perspective-1000"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1400px] mb-20 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono tracking-widest uppercase mb-4" 
          style={{ color: style.accentColor }}
        >
          {content.subtitle}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
        >
          {content.title}
        </motion.h2>
      </div>

      <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
            style={{ marginTop: index % 2 === 1 ? '10%' : '0' }} // Staggered layout
          >
            <TiltCard product={product} accentColor={style.accentColor} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
