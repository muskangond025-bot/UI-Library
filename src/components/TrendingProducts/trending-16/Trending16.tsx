import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  queries: string;
}

interface Trending16Props {
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

export function Trending16({ section }: Trending16Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-sans"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Fake Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="w-full h-14 rounded-full border border-gray-300 shadow-sm flex items-center px-6 hover:shadow-md transition-shadow bg-white">
            <Search size={20} className="text-gray-400 mr-4" />
            <input 
              type="text" 
              value={content.title}
              readOnly
              className="flex-1 bg-transparent outline-none text-xl font-medium text-black"
            />
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold shadow-sm cursor-pointer">
              G
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-6">
            <button className="px-6 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded text-sm text-black">
              All Results
            </button>
            <button className="px-6 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded text-sm text-black">
              Images
            </button>
            <button className="px-6 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded text-sm text-black">
              Shopping
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold group-hover:underline text-black truncate mb-1">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  <span className="text-gray-500">{product.queries}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
