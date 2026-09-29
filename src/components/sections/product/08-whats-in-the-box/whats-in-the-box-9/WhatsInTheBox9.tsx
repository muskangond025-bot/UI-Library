import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://picsum.photos/seed/s1/400/400" },
  { name: "Cable", img: "https://picsum.photos/seed/s2/400/400" },
  { name: "Adapter", img: "https://picsum.photos/seed/s3/400/400" },
  { name: "Manual", img: "https://picsum.photos/seed/s4/400/400" }
];

export default function WhatsInTheBox9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        
        <h2 className="text-5xl font-black text-black mb-20">Inside the box.</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative">
                {/* Silhouette / Grayscale filter */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-200 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-300 group-hover:text-black transition-colors duration-300">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
