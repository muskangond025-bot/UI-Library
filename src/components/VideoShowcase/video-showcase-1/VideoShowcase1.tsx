import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoShowcase1Props {
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

export default function VideoShowcase1({ data }: VideoShowcase1Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            {data.content.description}
          </motion.p>
        </div>

        {/* Main Player */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl mb-8 group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <>
              <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl mb-2">{data.content.mainVideo.title}</h3>
                <p className="text-slate-300 line-clamp-2 w-3/4">{data.content.mainVideo.description}</p>
              </div>
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-semibold">
                {data.content.mainVideo.duration}
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

        {/* Playlist Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.content.playlist.map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4">
                <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                  {clip.duration}
                </div>
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{clip.title}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
