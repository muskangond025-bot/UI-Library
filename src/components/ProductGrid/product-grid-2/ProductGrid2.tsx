import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid2Props {
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

export function ProductGrid2({ section }: ProductGrid2Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-7xl mb-16 flex flex-col md:flex-row justify-between items-end border-b pb-8" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono tracking-widest uppercase mb-4" 
            style={{ color: style.accentColor }}
          >
            {content.subtitle}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>
        <motion.a
          href="#"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white/70 transition-colors mt-6 md:mt-0"
        >
          View All <ArrowRight size={16} />
        </motion.a>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative aspect-[3/4] w-full overflow-hidden bg-[#18181b] cursor-pointer"
          >
            {/* Background Image (Always visible, zooms slightly on hover) */}
            <div className="absolute inset-0 bg-gray-900">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            {/* Default State Text (Fades out when sliding up) */}
            <div className="absolute bottom-6 left-6 z-20 transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {product.name}
              </h3>
              <p className="text-white/80 font-mono text-sm mt-1">{product.price}</p>
            </div>

            {/* Slide-up Drawer (Revealed on hover) */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-black/80 backdrop-blur-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-30">
              <span className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: style.accentColor }}>
                {product.category}
              </span>
              <h3 className="text-3xl font-bold mb-2 text-white">
                {product.name}
              </h3>
              <p className="text-xl font-light text-white/90 mb-6">
                {product.price}
              </p>
              
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-6 right-6 z-40 px-4 py-2 bg-black/50 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                {product.badge}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
