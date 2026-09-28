import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  sku: string;
}

interface Sale11Props {
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

export function Sale11({ section }: Sale11Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex justify-center bg-[#E5E7EB]"
      style={{ color: style.textColor }}
    >
      
      {/* The Receipt */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        className="w-full max-w-sm bg-white p-8 shadow-2xl relative"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, rgba(0,0,0,0.05) 100%)',
          backgroundSize: '100% 20px'
        }}
      >
        {/* Receipt jagged top */}
        <div 
          className="absolute -top-2 left-0 right-0 h-4 bg-white"
          style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%, 100% 100%, 0% 100%)' }}
        />
        
        <div className="font-mono text-center mb-8 border-b-2 border-dashed border-black/20 pb-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{content.title}</h2>
          <p className="text-xs uppercase tracking-widest opacity-60">{content.subtitle}</p>
          <p className="text-xs mt-2 opacity-60">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
        </div>

        <div className="font-mono flex flex-col gap-6 border-b-2 border-dashed border-black/20 pb-8 mb-8">
          {content.products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer hover:bg-black/5 p-2 -mx-2 rounded transition-colors"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold uppercase text-sm w-3/5">{product.name}</span>
                <span className="text-sm font-bold w-2/5 text-right">{product.newPrice}</span>
              </div>
              <div className="flex justify-between items-center text-xs opacity-60">
                <span>SKU: {product.sku}</span>
                <span className="line-through">{product.oldPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="font-mono">
          <div className="flex justify-between items-center font-bold text-lg mb-2">
            <span>TOTAL SAVINGS</span>
            <span>$155.00</span>
          </div>
          <div className="text-center mt-12 mb-4">
            <svg className="w-full h-16 opacity-80" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Fake barcode */}
              {Array.from({ length: 30 }).map((_, i) => (
                <rect key={i} x={i * 3 + (Math.random() * 2)} y="0" width={Math.random() > 0.5 ? 1 : 2} height="100" fill="black" />
              ))}
            </svg>
            <p className="text-xs mt-2 opacity-50 tracking-[0.3em]">THANK YOU</p>
          </div>
        </div>

        {/* Receipt jagged bottom */}
        <div 
          className="absolute -bottom-2 left-0 right-0 h-4 bg-white"
          style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%, 100% 0%, 0% 0%)' }}
        />
      </motion.div>
    </div>
  );
}
