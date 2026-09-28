import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery16({ data }: { data: any }) {
  const images = data?.settings?.images || [];

  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 rounded-[3rem] overflow-hidden group/pg16">
      <div className="relative w-64 h-80">
        {images.slice(0, 4).map((img: string, idx: number) => {
          const rotation = (idx - 1.5) * 10;
          const xOffset = (idx - 1.5) * 60;
          
          return (
            <motion.div
              key={idx}
              initial={{ rotate: rotation, x: 0 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="absolute inset-0 bg-white p-3 pb-12 rounded-lg shadow-xl border border-gray-100 transition-all duration-500 group-hover/pg16:!rotate-0"
              style={{
                transformOrigin: "bottom center"
              }}
              // When group is hovered, we spread them out via CSS combined with framer motion
              variants={{
                hover: { x: xOffset, rotate: 0 }
              }}
            >
              <div className="w-full h-full bg-gray-100 overflow-hidden rounded-sm">
                <img src={img} className="w-full h-full object-cover" alt="Polaroid" />
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Hack for group hover spreading */}
      <style>{`
        .group\\/pg16:hover > div > div:nth-child(1) { transform: translateX(-180px) rotate(-5deg) !important; }
        .group\\/pg16:hover > div > div:nth-child(2) { transform: translateX(-60px) rotate(-2deg) !important; }
        .group\\/pg16:hover > div > div:nth-child(3) { transform: translateX(60px) rotate(2deg) !important; }
        .group\\/pg16:hover > div > div:nth-child(4) { transform: translateX(180px) rotate(5deg) !important; }
      `}</style>
    </div>
  );
}