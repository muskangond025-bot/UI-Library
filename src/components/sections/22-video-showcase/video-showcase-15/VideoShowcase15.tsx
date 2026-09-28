import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase15Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      mainVideo: { title: string; description: string; thumbnailUrl: string; videoUrl: string; duration: string; };
      playlist: { title: string; thumbnailUrl: string; duration: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function VideoShowcase15({ data }: VideoShowcase15Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Editorial Header */}
        <div className="border-b-2 border-black pb-8 mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-serif font-black text-black leading-none tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="font-sans font-bold uppercase tracking-widest text-xs text-gray-500 max-w-xs text-right hidden md:block">
            {data.content.description}
          </p>
        </div>

        {/* Main Video Article */}
        <div className="w-full aspect-[21/9] bg-gray-200 mb-8 relative overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? (
            <>
              <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                  <svg className="w-10 h-10 text-black ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 border border-black">
                <span className="font-sans font-bold uppercase text-xs tracking-widest text-black">Featured Video • {data.content.mainVideo.duration}</span>
              </div>
            </>
          ) : (
            <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover" />
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 font-serif text-2xl text-gray-800 leading-relaxed">
            <h3 className="text-4xl font-black text-black mb-4">{data.content.mainVideo.title}</h3>
            {data.content.mainVideo.description}
          </div>
          <div className="border-l border-gray-300 pl-12 font-sans hidden md:block text-gray-500 text-sm">
            Watch the full detailed breakdown of our platform's latest capabilities, focusing on workflow automation and team scaling.
          </div>
        </div>

        {/* Playlist Grid */}
        <div className="border-t-2 border-black pt-12">
          <h4 className="font-sans font-black uppercase text-xl text-black mb-8 tracking-widest">More Episodes</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-video bg-gray-200 mb-4 overflow-hidden relative border border-gray-300">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 border border-black">
                    <span className="font-sans font-bold uppercase text-[10px] tracking-widest text-black">{clip.duration}</span>
                  </div>
                </div>
                <h5 className="font-serif font-bold text-2xl text-black group-hover:underline underline-offset-4 decoration-2">{clip.title}</h5>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
