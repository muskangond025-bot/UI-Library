import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation8({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex items-center justify-center relative overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="text-center relative z-10 pointer-events-none mix-blend-difference text-white">
        <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">The Fine Print</h2>
        <p className="text-lg opacity-80">Hover to reveal our transparent policy.</p>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          WebkitMaskImage: isHovering 
            ? `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`
            : `radial-gradient(0px circle at ${mousePos.x}px ${mousePos.y}px, black 40%, transparent 100%)`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {/* Revealed Content Layer */}
        <div className="absolute inset-0 bg-emerald-400 p-16 flex flex-col items-center justify-center text-emerald-950">
           <h3 className="text-4xl font-black mb-8 uppercase text-center border-b-4 border-emerald-950 pb-4">No Hidden Fees.</h3>
           <div className="grid grid-cols-2 gap-8 text-xl font-bold max-w-2xl">
             <p>✓ 100% Free Shipping on Returns</p>
             <p>✓ Zero Restocking Fees</p>
             <p>✓ 60 Days Return Window</p>
             <p>✓ Instant Credit Option</p>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
