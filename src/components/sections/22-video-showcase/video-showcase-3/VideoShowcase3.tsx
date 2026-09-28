import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase3Props {
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

export default function VideoShowcase3({ data }: VideoShowcase3Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#f9fafb] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto"
        >
          {data.content.description}
        </motion.p>

        {/* Floating Glass Player */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video rounded-[3rem] p-4 bg-white/40 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] group"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden relative cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-blue-600 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating Meta Tag */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{data.content.mainVideo.duration}</span>
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
        </motion.div>

      </div>
    </div>
  );
}
