import React from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery20({ data }: { data: any }) {
  const images = data?.settings?.images || [];
  
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
        <img src={images[0]} className="w-full h-full object-cover" alt="Main Product" />
        
        {/* Hotspot 1 */}
        <div className="absolute top-1/3 left-1/4 group">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white ring-4 ring-white/30 cursor-pointer"></span>
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur p-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-200">
              <img src={images[1]} className="w-full h-32 object-cover rounded-lg mb-2" alt="Detail 1" />
              <p className="text-xs font-medium text-gray-900 text-center">Premium Materials</p>
            </div>
          </div>
        </div>

        {/* Hotspot 2 */}
        <div className="absolute top-2/3 right-1/3 group">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-50 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white ring-4 ring-white/30 cursor-pointer"></span>
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur p-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-200">
              <img src={images[2]} className="w-full h-32 object-cover rounded-lg mb-2" alt="Detail 2" />
              <p className="text-xs font-medium text-gray-900 text-center">Attention to Detail</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}