import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures8({ data }: { data: any }) {
  const features = [
    { title: "Water Resistant", path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { title: "Durable Glass", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Fast Charge", path: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Secure", path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
  ];

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        
        <h2 className="text-4xl md:text-5xl font-light text-neutral-400 mb-24">Built to last. <span className="text-black font-black">Guaranteed.</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center">
              <svg className="w-24 h-24 text-black mb-8 drop-shadow-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d={feat.path} 
                />
              </svg>
              <h3 className="text-xl font-bold tracking-widest uppercase">{feat.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
