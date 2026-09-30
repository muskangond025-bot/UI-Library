import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReturnRefundInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#e5e5e5] flex flex-col items-center justify-center relative perspective-[1200px]">
      <div className="text-center absolute top-12">
        <h2 className="text-3xl font-bold text-neutral-800">Repacking Made Easy</h2>
        <p className="text-neutral-500">Hover the box to tape it shut.</p>
      </div>

      <motion.div 
        className="relative w-64 h-64 mt-16 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ rotateX: 10, rotateY: -15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Box Bottom */}
        <div className="absolute inset-0 bg-[#c4a484] shadow-2xl border border-[#a88665]" style={{ transform: "translateZ(-128px)" }} />
        
        {/* Box Back */}
        <div className="absolute inset-0 bg-[#b39171] border border-[#a88665]" style={{ transform: "rotateX(90deg) translateZ(128px)" }} />
        
        {/* Box Left */}
        <div className="absolute inset-0 bg-[#d5b596] border border-[#a88665]" style={{ transform: "rotateY(-90deg) translateZ(128px)" }} />
        
        {/* Box Right */}
        <div className="absolute inset-0 bg-[#c4a484] border border-[#a88665]" style={{ transform: "rotateY(90deg) translateZ(128px)" }} />
        
        {/* Box Front */}
        <div className="absolute inset-0 bg-[#d5b596] border border-[#a88665] flex items-center justify-center" style={{ transform: "translateZ(128px)" }}>
          <span className="font-mono text-[#a88665] border-2 border-[#a88665] p-2 rotate-12 opacity-50 font-bold">RETURN</span>
        </div>

        {/* Top Flap Left */}
        <motion.div 
          className="absolute inset-0 bg-[#d5b596] origin-left border border-[#a88665]"
          initial={{ rotateY: -90 }}
          animate={{ rotateY: isHovered ? 0 : -90 }}
          transition={{ duration: 0.5 }}
          style={{ transform: "rotateX(90deg) translateZ(-128px)" }}
        />

        {/* Top Flap Right */}
        <motion.div 
          className="absolute inset-0 bg-[#d5b596] origin-right border border-[#a88665]"
          initial={{ rotateY: 90 }}
          animate={{ rotateY: isHovered ? 0 : 90 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transform: "rotateX(90deg) translateZ(-128px)" }}
        />

        {/* Tape (Appears last) */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-8 bg-[#e8e4c9]/80 backdrop-blur-sm"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1.2 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          style={{ transform: "rotateX(90deg) translateZ(-129px) translateY(-50%)", originX: 0 }}
        />
      </motion.div>
    </div>
  );
}
