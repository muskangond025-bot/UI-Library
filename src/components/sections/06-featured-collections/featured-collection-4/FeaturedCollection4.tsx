import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection4Props {
  section: {
    content: {
      title: string;
      collections: Collection[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

function TiltCard({ collection, accentColor, index }: { collection: Collection, accentColor: string, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15; // Max 15deg
    const rotateYValue = ((x - centerX) / centerX) * 15; // Max 15deg

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-[500px] md:h-[600px] rounded-2xl cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl bg-black"
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src={collection.image} 
          alt={collection.title}
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        
        {/* Spotlight Glare */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            opacity: glare.opacity
          }}
        />

        <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2" style={{ textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
            {collection.title}
          </h3>
          <p className="text-lg font-light opacity-80 border-l-2 pl-4" style={{ borderColor: accentColor, transform: "translateZ(30px)" }}>
            {collection.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedCollection4({ section }: FeaturedCollection4Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-8 md:px-12 py-24 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center text-4xl md:text-6xl font-black uppercase tracking-widest mb-16"
      >
        {content.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {content.collections.map((collection, index) => (
          <TiltCard 
            key={collection.id} 
            collection={collection} 
            accentColor={style.accentColor} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}
