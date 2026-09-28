import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection11Props {
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

export function FeaturedCollection11({ section }: FeaturedCollection11Props) {
  const { content, style } = section;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
            {content.subtitle}
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        <div className="text-sm opacity-50 uppercase tracking-wider font-mono">
          Click to Expand
        </div>
      </div>

      <div className="w-full max-w-7xl h-[80vh] flex flex-col md:flex-row gap-4">
        {content.collections.map((collection, index) => {
          const isExpanded = expandedId === collection.id;
          const isAnotherExpanded = expandedId !== null && expandedId !== collection.id;

          return (
            <motion.div
              layout
              key={collection.id}
              onClick={() => setExpandedId(isExpanded ? null : collection.id)}
              initial={{ borderRadius: 24 }}
              animate={{ 
                flex: isExpanded ? 3 : isAnotherExpanded ? 0.5 : 1,
                opacity: isAnotherExpanded ? 0.6 : 1,
                filter: isAnotherExpanded ? 'grayscale(80%) blur(2px)' : 'grayscale(0%) blur(0px)'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className={`relative overflow-hidden cursor-pointer group ${
                isAnotherExpanded ? 'hidden md:block' : 'block' // Hide shrunk ones on mobile to save space
              } md:block`}
              style={{ minHeight: isExpanded ? '100%' : '20%' }} // Mobile layout flexibility
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10" />
              
              <motion.img 
                layout="position"
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <motion.div 
                layout="position"
                className="absolute inset-0 z-20 p-8 flex flex-col justify-end"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-none">
                      {collection.title}
                    </h3>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-white/80 text-lg max-w-md mt-4"
                        >
                          {collection.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 hidden md:flex">
                    {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
