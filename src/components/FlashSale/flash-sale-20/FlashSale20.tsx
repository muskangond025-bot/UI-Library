import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale20Props {
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

export function FlashSale20({ section }: FlashSale20Props) {
  const { content, style } = section;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans bg-zinc-950"
      style={{ color: style.textColor }}
    >
      
      {/* The Vault Door (Click to open) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ scale: 1 }}
            exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-zinc-900"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            <div className="relative flex flex-col items-center cursor-pointer group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 rounded-full border-[16px] border-zinc-700 flex items-center justify-center bg-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
              >
                {/* Vault wheel spokes */}
                <div className="absolute w-full h-4 bg-zinc-700" />
                <div className="absolute w-4 h-full bg-zinc-700" />
                <div className="absolute w-full h-4 bg-zinc-700 rotate-45" />
                <div className="absolute w-full h-4 bg-zinc-700 -rotate-45" />
                
                <div className="w-32 h-32 rounded-full bg-yellow-600 border-8 border-yellow-700 z-10 flex items-center justify-center text-zinc-900 group-hover:bg-yellow-500 transition-colors">
                  <Lock size={40} className="group-hover:hidden" />
                  <Unlock size={40} className="hidden group-hover:block" />
                </div>
              </motion.div>
              <h2 className="text-4xl font-black uppercase mt-12 text-zinc-500 group-hover:text-yellow-500 transition-colors">
                Click to Open Vault
              </h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inside the Vault (The Content) */}
      <div className={`max-w-7xl mx-auto w-full relative z-10 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
        
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-yellow-500" style={{ textShadow: '0 0 40px rgba(234, 179, 8, 0.5)' }}>
            {content.title}
          </h2>
          <p className="text-xl font-bold tracking-[0.2em] uppercase mt-4 text-zinc-400">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={isOpen ? { opacity: 0, y: 50, scale: 0.9 } : false}
              animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : false}
              transition={{ delay: index * 0.2 + 1, type: "spring" }}
              className="bg-zinc-900 rounded-lg p-6 border-2 border-zinc-800 hover:border-yellow-500 transition-all group cursor-pointer shadow-2xl relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[200%] transition-all duration-1000 skew-x-12" />

              <div className="w-full aspect-square bg-black rounded-md overflow-hidden mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-center text-zinc-300">{product.name}</h3>
              
              <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
                <span className="text-sm line-through text-zinc-600 font-bold">{product.oldPrice}</span>
                <span className="text-3xl font-black text-yellow-500 drop-shadow-md">{product.newPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
