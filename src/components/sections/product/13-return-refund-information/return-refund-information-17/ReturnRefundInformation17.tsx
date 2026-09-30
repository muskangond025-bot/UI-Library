import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function ReturnRefundInformation17({ data }: { data: any }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current && !clicked) {
      const rect = buttonRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(Math.pow(e.clientX - cx, 2) + Math.pow(e.clientY - cy, 2));
      
      if (distance < 150) {
        // Magnet pull
        setPosition({
          x: (e.clientX - cx) * 0.3,
          y: (e.clientY - cy) * 0.3
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div className="absolute top-12 text-center pointer-events-none">
        <h2 className="text-3xl font-bold text-neutral-800">Magnetic Action</h2>
        <p className="text-neutral-500">Move your cursor near the button.</p>
      </div>

      <AnimatePresence>
        {!clicked && (
          <motion.button
            ref={buttonRef}
            className="w-48 h-48 bg-neutral-900 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-2xl z-20"
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            onClick={() => {
              setClicked(true);
              setPosition({ x: 0, y: 0 });
            }}
            exit={{ scale: 30, opacity: 0, transition: { duration: 1 } }}
          >
            <MousePointer2 className="mb-2 opacity-50" />
            Click Me
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {clicked && (
          <motion.div 
            className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center z-10 text-white p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-5xl font-black mb-8">Return Policy Unlocked</h2>
            <p className="text-xl max-w-2xl text-center text-neutral-400 leading-relaxed mb-8">
              We process refunds immediately upon carrier scan. No waiting weeks for warehouse processing.
            </p>
            <button 
              className="px-8 py-3 bg-white text-neutral-900 rounded-full font-bold"
              onClick={() => setClicked(false)}
            >
              Reset
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
