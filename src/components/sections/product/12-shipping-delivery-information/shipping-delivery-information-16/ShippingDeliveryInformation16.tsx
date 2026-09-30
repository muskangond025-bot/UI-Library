import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation16({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative">
      <h2 className="text-3xl font-bold text-white mb-2 z-20 pointer-events-none">X-Ray Logistics</h2>
      <p className="text-zinc-500 mb-8 z-20 pointer-events-none">Hover to reveal the hidden route network.</p>

      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl h-64 bg-zinc-900 rounded-3xl overflow-hidden cursor-crosshair border border-zinc-800"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dark Top Layer */}
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-zinc-800 font-bold text-xl tracking-widest uppercase">Classified Map</span>
        </div>

        {/* Hidden Map Layer exposed by mask */}
        <motion.div 
          className="absolute inset-0 z-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"
          animate={{
            WebkitMaskImage: isHovered 
              ? `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`
              : `radial-gradient(0px circle at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        >
          {/* Overlay to make it look like night vision/xray */}
          <div className="absolute inset-0 bg-blue-600/30 mix-blend-color" />
          
          {/* Fake route lines drawn on top */}
          <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none">
             <path d="M 50 100 Q 200 200 400 50 T 700 150" fill="none" stroke="#fff" strokeWidth="4" strokeDasharray="5 5" />
             <circle cx="50" cy="100" r="8" fill="#fff" />
             <circle cx="700" cy="150" r="8" fill="#fff" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
