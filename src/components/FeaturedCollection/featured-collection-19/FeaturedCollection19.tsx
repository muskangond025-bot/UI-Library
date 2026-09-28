import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface FeaturedCollection19Props {
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

export function FeaturedCollection19({ section }: FeaturedCollection19Props) {
  const { content, style } = section;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCollection = content.collections.find(c => c.id === selectedId);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl mb-16 text-center">
        <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 relative z-10">
        {content.collections.map((collection) => (
          <motion.div
            layoutId={`card-${collection.id}`}
            key={collection.id}
            onClick={() => setSelectedId(collection.id)}
            className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <motion.img 
              layoutId={`image-${collection.id}`}
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            <motion.div 
              layoutId={`title-container-${collection.id}`}
              className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest text-center">
                {collection.title}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {selectedId && selectedCollection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl h-[80vh] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            >
              <motion.img 
                layoutId={`image-${selectedId}`}
                src={selectedCollection.image}
                alt={selectedCollection.title}
                className="w-full md:w-2/3 h-1/2 md:h-full object-cover"
              />
              <div className="w-full md:w-1/3 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-white text-black relative">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
                <motion.div layoutId={`title-container-${selectedId}`}>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-black">
                    {selectedCollection.title}
                  </h3>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-600 font-light leading-relaxed"
                >
                  {selectedCollection.description}
                  <br/><br/>
                  Experience a seamless transition using shared layout animations. The visual weight transfers perfectly from the grid item into this full-bleed presentation mode.
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
