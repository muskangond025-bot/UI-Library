import React from 'react';
import { Play, VolumeX } from 'lucide-react';

export default function ProductInformation16({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-12">{data.title}</h2>
        
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer bg-gray-900">
          <img src={data.image} alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />
          
          {/* Fake Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform transition-transform duration-300 group-hover:scale-110">
              <Play fill="white" size={32} className="ml-2" />
            </div>
          </div>
          
          {/* Controls overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full max-w-md h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-1/3 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
            <VolumeX className="text-white ml-4" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}