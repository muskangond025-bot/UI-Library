import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection15Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      collections: Collection[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function FeaturedCollection15({ section }: FeaturedCollection15Props) {
  const { content, style } = section;
  const [cards, setCards] = useState(content.collections);

  const handleDragEnd = (event: any, info: any) => {
    // If dragged far enough on the X axis, swipe the card away
    if (Math.abs(info.offset.x) > 100) {
      setCards(prev => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        if (topCard) newCards.push(topCard);
        return newCards;
      });
    }
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden py-24 px-8"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center mb-12 md:mb-0 md:pr-12 z-20">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
          {content.title}
        </h2>
        <div className="flex gap-4 items-center">
          <div className="h-[1px] w-12 bg-current opacity-30" />
          <span className="text-sm uppercase tracking-widest opacity-50">Drag the top card</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative flex items-center justify-center perspective-[1000px]">
        <AnimatePresence>
          {cards.map((collection, index) => {
            const isTop = index === 0;
            const yOffset = index * 20;
            const scale = 1 - index * 0.05;
            const zIndex = cards.length - index;

            return (
              <motion.div
                key={collection.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ 
                  opacity: 1 - index * 0.2, 
                  scale: scale, 
                  y: yOffset,
                  zIndex: zIndex
                }}
                exit={{ opacity: 0, scale: 0.5, x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                drag={isTop ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isTop ? handleDragEnd : undefined}
                whileDrag={{ scale: 1.05, rotateZ: 5, cursor: "grabbing" }}
                className={`absolute w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ${isTop ? 'cursor-grab' : ''}`}
                style={{ originY: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 text-white pointer-events-none">
                  <span className="text-sm font-mono opacity-70 mb-2 block">
                    0{cards.findIndex(c => c.id === collection.id) + 1}
                  </span>
                  <h3 className="text-4xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-white/80 font-light">{collection.description}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
