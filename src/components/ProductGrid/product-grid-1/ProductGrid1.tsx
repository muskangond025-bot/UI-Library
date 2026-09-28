import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid1Props {
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

const GlassIconButton = ({ icon: Icon, delay }: { icon: any, delay: number }) => (
  <motion.button 
    initial={{ opacity: 0, y: 20 }}
    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-gray-900 shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
    style={{ transitionDelay: `${delay}ms`, transitionProperty: 'opacity, transform' }}
  >
    <Icon size={20} strokeWidth={1.5} />
  </motion.button>
);

export function ProductGrid1({ section }: ProductGrid1Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full max-w-[1600px] mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
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
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            {content.title}
          </motion.h2>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="px-6 py-3 border-2 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
          style={{ borderColor: style.accentColor }}
        >
          View All
        </motion.button>
      </div>

      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {content.products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col cursor-pointer"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 rounded-lg mb-6">
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white text-xs font-bold uppercase tracking-wider text-black rounded-sm shadow-sm">
                  {product.badge}
                </div>
              )}
              
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-4 px-4">
                <GlassIconButton icon={Heart} delay={0} />
                <GlassIconButton icon={ShoppingBag} delay={75} />
                <GlassIconButton icon={Eye} delay={150} />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                {product.category}
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                {product.name}
              </h3>
              <p className="text-lg font-light text-gray-700">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
