import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoShowcase11Props {
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

export default function VideoShowcase11({ data }: VideoShowcase11Props) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const allVideos = [data.content.mainVideo, ...data.content.playlist];

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f8fafc] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 font-medium text-lg">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allVideos.map((video, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onHoverStart={() => setActiveVideo(video.title)}
              onHoverEnd={() => setActiveVideo(null)}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ${activeVideo === video.title ? 'scale-105 z-20 shadow-2xl shadow-blue-900/20' : 'scale-100 z-10'}`}
              style={{ aspectRatio: '9/16' }}
            >
              <img src={video.thumbnailUrl || data.content.mainVideo.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {video.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-2xl mb-2">{video.title}</h3>
                  <AnimatePresence>
                    {activeVideo === video.title && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-slate-300 text-sm line-clamp-3"
                      >
                        {(video as any).description || "Watch this amazing clip from our collection."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
