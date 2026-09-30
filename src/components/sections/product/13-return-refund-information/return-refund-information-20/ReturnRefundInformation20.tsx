import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation20({ data }: { data: any }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This is a simplified "scratch" concept. In a real highly interactive DOM, 
  // you'd use HTML5 Canvas to actually scratch pixels. Here we use an expanding clipPath
  // triggered by hover duration or click to simulate revealing the card underneath.
  
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-rose-900">Scratch to Reveal</h2>
        <p className="text-rose-500">Click the gray card to scratch off the coating.</p>
      </div>

      <div 
        className="relative w-full max-w-md h-64 rounded-2xl shadow-xl cursor-crosshair overflow-hidden border-4 border-white"
        onClick={() => setIsRevealed(true)}
      >
        {/* Hidden Content */}
        <div className="absolute inset-0 bg-white p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-3xl font-black text-rose-600 mb-2">WINNER!</h3>
          <p className="text-neutral-600 font-bold">Just kidding, but our returns are free anyway.</p>
          <p className="text-sm text-neutral-400 mt-4">100% Refund guaranteed for 60 days.</p>
        </div>

        {/* Scratch-off Coating Layer */}
        <motion.div 
          className="absolute inset-0 bg-neutral-300 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isRevealed ? 0 : 1,
            scale: isRevealed ? 1.5 : 1,
            filter: isRevealed ? "blur(10px)" : "blur(0px)"
          }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23a3a3a3\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/>%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/>%3C/g%3E%3C/svg%3E")' }}
        >
          <span className="font-black text-4xl text-neutral-400 uppercase tracking-widest drop-shadow-md">
            ? ? ?
          </span>
        </motion.div>
      </div>

      {isRevealed && (
        <button 
          className="mt-8 px-6 py-2 bg-rose-200 text-rose-800 rounded-full font-bold hover:bg-rose-300 transition"
          onClick={() => setIsRevealed(false)}
        >
          Reset Card
        </button>
      )}
    </div>
  );
}
