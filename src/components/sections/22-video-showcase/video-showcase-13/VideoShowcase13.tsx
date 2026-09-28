import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase13Props {
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

export default function VideoShowcase13({ data }: VideoShowcase13Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const allVideos = [data.content.mainVideo, ...data.content.playlist];

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 text-xl max-w-2xl">{data.content.description}</p>
        </div>

        {/* Staggered Row Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 h-[600px]">
          
          {/* Main Video (Center, Large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full md:w-[600px] h-[400px] md:h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl z-20 relative group cursor-pointer border-8 border-white"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white font-bold text-3xl mb-2 text-shadow-sm">{data.content.mainVideo.title}</h3>
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">{data.content.mainVideo.duration}</span>
                </div>
              </>
            ) : (
              <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover" />
            )}
          </motion.div>

          {/* Side Videos (Smaller, behind) */}
          {data.content.playlist.slice(0, 2).map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: idx === 0 ? 30 : -30 }}
              transition={{ delay: 0.2 }}
              className={`hidden md:block w-[300px] h-[350px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-xl z-10 relative group cursor-pointer border-4 border-white ${idx === 0 ? 'order-first' : 'order-last'}`}
            >
              <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-bold text-lg leading-tight mb-2">{clip.title}</h4>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  );
}
