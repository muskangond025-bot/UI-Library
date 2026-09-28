import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase5Props {
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

export default function VideoShowcase5({ data }: VideoShowcase5Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full font-sans bg-white" style={{ color: data.style.textColor }}>
      
      {/* Huge Edge-to-Edge Player */}
      <div className="w-full h-[60vh] md:h-[85vh] relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? (
          <>
            <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.2)] mb-8"
              >
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4">{data.content.mainVideo.title}</h2>
              <p className="text-lg md:text-2xl text-white/80 font-light max-w-3xl">{data.content.mainVideo.description}</p>
            </div>
          </>
        ) : (
          <video 
            src={data.content.mainVideo.videoUrl} 
            autoPlay 
            controls 
            className="w-full h-full object-cover"
          />
        )}
      </div>

    </div>
  );
}
