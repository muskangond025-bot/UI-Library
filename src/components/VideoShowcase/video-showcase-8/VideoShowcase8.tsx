import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase8Props {
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

export default function VideoShowcase8({ data }: VideoShowcase8Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-32 font-sans bg-[#050505] overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <p className="text-xl text-zinc-400">{data.content.description}</p>
      </div>

      <div className="w-full relative h-[600px] perspective-[2000px] flex items-center justify-center">
        
        {/* Central Main Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, z: -500 }}
          whileInView={{ opacity: 1, scale: 1, z: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="absolute z-30 w-[90%] md:w-[800px] aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-zinc-700/50 cursor-pointer group"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <>
              <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-500 transition-all">
                  <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
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

        {/* Left Floating Thumbnail */}
        {data.content.playlist[0] && (
          <motion.div 
            initial={{ opacity: 0, x: -200, z: -800, rotateY: 30 }}
            whileInView={{ opacity: 0.6, x: -300, z: -400, rotateY: 20 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ type: "spring", duration: 1, delay: 0.1 }}
            className="hidden md:block absolute z-20 w-[400px] aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
          >
            <img src={data.content.playlist[0].thumbnailUrl} alt={data.content.playlist[0].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            </div>
          </motion.div>
        )}

        {/* Right Floating Thumbnail */}
        {data.content.playlist[1] && (
          <motion.div 
            initial={{ opacity: 0, x: 200, z: -800, rotateY: -30 }}
            whileInView={{ opacity: 0.6, x: 300, z: -400, rotateY: -20 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="hidden md:block absolute z-20 w-[400px] aspect-video bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
          >
            <img src={data.content.playlist[1].thumbnailUrl} alt={data.content.playlist[1].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
