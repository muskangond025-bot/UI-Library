import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Sun, Wind } from 'lucide-react';

export default function ProductCare1({ data }) {
  const [hovered, setHovered] = useState(null);
  
  const careItems = [
    { icon: <Shield size={32} />, title: 'Protection', desc: 'Keep away from sharp objects.' },
    { icon: <Droplets size={32} />, title: 'Cleaning', desc: 'Wipe with a damp cloth.' },
    { icon: <Sun size={32} />, title: 'Storage', desc: 'Store in a cool, dry place.' },
    { icon: <Wind size={32} />, title: 'Ventilation', desc: 'Allow to air out occasionally.' },
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,50,50,0.5),transparent_70%)]" />
      <h2 className="text-3xl font-light text-white mb-12 z-10 tracking-widest">PRODUCT CARE</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 w-full max-w-2xl">
        {careItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden cursor-pointer"
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="text-white/80 mb-4">{item.icon}</div>
            <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
            <p className="text-sm text-white/50">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
