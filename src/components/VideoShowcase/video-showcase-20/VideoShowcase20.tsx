import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoShowcase20Props {
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

export default function VideoShowcase20({ data }: VideoShowcase20Props) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const wallVideos = [
    data.content.mainVideo,
    ...data.content.playlist,
    data.content.mainVideo,
    ...data.content.playlist,
  ];

  const activeVideoData = activeVideo ? wallVideos.find(v => v.title === activeVideo) : null;

  return (
    <div className="w-full py-24 bg-black font-sans overflow-hidden relative min-h-screen flex flex-col" style={{ color: data.style.textColor }}>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
        >
          {data.content.heading}
        </motion.h2>
        <p className="text-xl text-zinc-400">{data.content.description}</p>
      </div>

      {/* Masonry-like Grid Wall */}
      <div className="flex-1 w-full px-4 pb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {wallVideos.map((video, idx) => {
            const isLarge = idx === 0 || idx === 5;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition-colors shadow-xl ${isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
                onClick={() => setActiveVideo(video.title)}
              >
                <img src={video.thumbnailUrl || data.content.mainVideo.thumbnailUrl} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h4 className="font-bold text-lg leading-tight shadow-black drop-shadow-md">{video.title}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal Player */}
      <AnimatePresence>
        {activeVideoData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white hover:text-red-500 transition-colors z-50"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="w-full max-w-6xl aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl relative"
            >
              <video 
                src={(activeVideoData as any).videoUrl || data.content.mainVideo.videoUrl} 
                autoPlay 
                controls 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
