import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase7Props {
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

export default function VideoShowcase7({ data }: VideoShowcase7Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-light text-slate-800 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 font-light">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          
          {/* Main Hero Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 lg:row-span-3 rounded-[2rem] overflow-hidden relative group shadow-lg cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{data.content.mainVideo.duration}</span>
                  <h3 className="text-3xl font-semibold text-white mb-2">{data.content.mainVideo.title}</h3>
                  <p className="text-slate-200 font-light text-lg">{data.content.mainVideo.description}</p>
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

          {/* Side Tiles */}
          {data.content.playlist.slice(0, 3).map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="lg:col-span-1 lg:row-span-1 rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md"
            >
              <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-auto opacity-0 group-hover:opacity-100 transition-opacity self-end">
                  <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-lg mb-1 leading-tight">{clip.title}</h4>
                <span className="text-slate-300 text-sm">{clip.duration}</span>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}
