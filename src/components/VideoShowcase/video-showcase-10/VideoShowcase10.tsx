import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase10Props {
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

export default function VideoShowcase10({ data }: VideoShowcase10Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#020617] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Blurred Ambient Background from Thumbnail */}
      <div 
        className="absolute inset-0 z-0 opacity-30 blur-[100px] scale-110 pointer-events-none"
        style={{ backgroundImage: `url(${data.content.mainVideo.thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-slate-950/80" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-300 text-lg font-light">{data.content.description}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 relative group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <>
              <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{data.content.mainVideo.title}</h3>
                <p className="text-slate-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">{data.content.mainVideo.duration}</p>
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
        </motion.div>

      </div>
    </div>
  );
}
