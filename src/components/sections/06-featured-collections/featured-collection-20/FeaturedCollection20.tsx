import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection20Props {
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

export function FeaturedCollection20({ section }: FeaturedCollection20Props) {
  const { content, style } = section;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Divide into 3 columns
  const col1 = content.collections.filter((_, i) => i % 3 === 0);
  const col2 = content.collections.filter((_, i) => i % 3 === 1);
  const col3 = content.collections.filter((_, i) => i % 3 === 2);

  // Parallax speeds for columns
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]); // Moves down
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Moves up fast

  return (
    <div 
      ref={containerRef}
      className="relative h-[800px] md:h-screen w-full overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="absolute top-12 left-12 z-30 pointer-events-none mix-blend-difference">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
          {content.title}
        </h2>
      </div>

      <div className="relative min-h-[150vh] w-full px-4 md:px-12 flex justify-center gap-4 md:gap-8 pt-48 pb-[50vh]">
        
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 max-w-[400px]">
          {col1.map(collection => (
            <div key={collection.id} className="relative w-full rounded-2xl overflow-hidden group">
              <img src={collection.image} alt={collection.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">{collection.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 max-w-[400px] mt-24">
          {col2.map(collection => (
            <div key={collection.id} className="relative w-full rounded-2xl overflow-hidden group">
              <img src={collection.image} alt={collection.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">{collection.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 max-w-[400px]">
          {col3.map(collection => (
            <div key={collection.id} className="relative w-full rounded-2xl overflow-hidden group">
              <img src={collection.image} alt={collection.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase">{collection.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
