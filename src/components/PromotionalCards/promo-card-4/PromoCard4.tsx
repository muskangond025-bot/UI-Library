import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard4Props {
  data: {
    content: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      code: string;
      cta: { text: string; url: string };
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function PromoCard4({ data }: PromoCard4Props) {
  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative z-10 w-full max-w-4xl"
      >
        {/* CSS Coupon shape using clip-path or complex borders. We will use a flex container with distinct sections */}
        <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl text-black overflow-hidden relative">
          
          {/* Jagged border separation (SVG) */}
          <div className="hidden md:flex absolute left-[60%] top-0 bottom-0 -ml-3 z-20 flex-col justify-between py-2 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-orange-600 shadow-inner" style={{ backgroundColor: data.style.backgroundColor }} />
            ))}
          </div>

          <div className="flex md:hidden absolute top-[60%] left-0 right-0 -mt-3 z-20 flex-row justify-between px-2 pointer-events-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-orange-600 shadow-inner" style={{ backgroundColor: data.style.backgroundColor }} />
            ))}
          </div>

          {/* Left Side: Offer Details */}
          <div className="w-full md:w-[60%] p-10 md:p-16 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-gray-300 relative">
            <span className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-max mb-6">
              {data.content.badge}
            </span>
            <h2 className="text-7xl md:text-[6rem] font-black leading-none tracking-tighter text-black mb-2">
              {data.content.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wider">
              {data.content.subtitle}
            </h3>
            <p className="text-gray-600 font-medium text-lg max-w-md">
              {data.content.description}
            </p>
          </div>

          {/* Right Side: Action */}
          <div className="w-full md:w-[40%] bg-gray-50 p-10 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
            
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Use Promo Code</p>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl px-8 py-4 mb-8 relative group cursor-pointer hover:border-black transition-colors w-full">
              <span className="text-2xl md:text-3xl font-mono font-black tracking-widest text-black select-all">
                {data.content.code}
              </span>
              <div className="absolute inset-0 bg-black text-white flex items-center justify-center font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                Click to Copy
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={data.content.cta.url}
              className="w-full block bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest shadow-xl shadow-black/20"
              style={{ backgroundColor: data.style.backgroundColor }}
            >
              {data.content.cta.text}
            </motion.a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
