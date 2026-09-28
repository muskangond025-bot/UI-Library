import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller9Props {
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

export function BestSeller9({ section }: BestSeller9Props) {
  const { content, style } = section;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProduct = content.products.find(p => p.id === selectedId);

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center justify-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-6xl text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.products.map((product, index) => (
          <motion.div
            layoutId={`card-${product.id}`}
            key={product.id}
            onClick={() => setSelectedId(product.id)}
            className="relative bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-shadow"
          >
            <motion.div layoutId={`image-container-${product.id}`} className="w-full aspect-square relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-md z-10" style={{ backgroundColor: style.accentColor, color: '#fff' }}>
                {index + 1}
              </div>
            </motion.div>
            
            <motion.div layoutId={`content-${product.id}`} className="p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">{product.category}</p>
              <h3 className="text-xl font-bold mb-4">{product.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-lg font-light">{product.price}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <span className="font-bold text-sm">{product.rating}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal View */}
      <AnimatePresence>
        {selectedId && selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedProduct.id}`}
                className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl pointer-events-auto relative"
                style={{ color: style.textColor }}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center z-10 transition-colors"
                >
                  <X size={20} />
                </button>

                <motion.div layoutId={`image-container-${selectedProduct.id}`} className="w-full md:w-1/2 aspect-square md:aspect-auto">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div layoutId={`content-${selectedProduct.id}`} className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  {selectedProduct.badge && (
                    <span className="self-start px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 border" style={{ borderColor: style.accentColor, color: style.accentColor }}>
                      {selectedProduct.badge}
                    </span>
                  )}
                  <p className="text-sm font-mono uppercase tracking-widest text-gray-500 mb-2">{selectedProduct.category}</p>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">{selectedProduct.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-8">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{selectedProduct.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <p className="text-4xl font-light mb-8">{selectedProduct.price}</p>
                  
                  <button 
                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity text-white"
                    style={{ backgroundColor: style.accentColor }}
                  >
                    Add to Cart
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
