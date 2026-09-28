import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection10Props {
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

function WindowCard({ collection, scrollYProgress, index }: { collection: Collection, scrollYProgress: any, index: number }) {
  // Parallax for the image behind the "window"
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  // Fade and slide for the text block as it approaches the center
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-8 md:px-24 snap-center">
      {/* The Window (Clip Path) */}
      <div className="absolute inset-0 md:inset-y-24 md:inset-x-32 rounded-[3rem] overflow-hidden">
        <motion.img 
          src={collection.image}
          alt={collection.title}
          style={{ y, scale: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Content */}
      <motion.div 
        style={{ opacity: textOpacity, scale: textScale }}
        className="relative z-10 flex flex-col items-center text-center p-8 backdrop-blur-sm bg-black/30 rounded-3xl border border-white/10"
      >
        <span className="text-sm font-mono tracking-widest uppercase mb-4 text-white/70">
          Chapter 0{index + 1}
        </span>
        <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">
          {collection.title}
        </h3>
        <p className="text-xl md:text-2xl font-light text-white/90 max-w-xl">
          {collection.description}
        </p>
      </motion.div>
    </div>
  );
}

export function FeaturedCollection10({ section }: FeaturedCollection10Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div 
      ref={containerRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {/* Intro Slide */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center snap-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-mono uppercase tracking-widest mb-6" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-[8vw] font-black uppercase tracking-tighter leading-none mb-8">
            {content.title}
          </h2>
          <div className="w-[1px] h-24 bg-current mx-auto opacity-30 origin-top animate-pulse" />
        </motion.div>
      </div>

      {content.collections.map((collection, index) => (
        <WindowCard 
          key={collection.id} 
          collection={collection} 
          scrollYProgress={scrollYProgress} 
          index={index} 
        />
      ))}
    </div>
  );
}
