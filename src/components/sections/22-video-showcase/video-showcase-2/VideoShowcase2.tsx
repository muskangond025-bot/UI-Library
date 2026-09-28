import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase2Props {
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

export default function VideoShowcase2({ data }: VideoShowcase2Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left: Info & List */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-10"
          >
            {data.content.description}
          </motion.p>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Up Next</h3>
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex gap-4 items-center p-3 rounded-2xl hover:bg-slate-800/50 cursor-pointer transition-colors group border border-transparent hover:border-slate-700/50"
              >
                <div className="relative w-24 aspect-video rounded-xl overflow-hidden shrink-0">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors line-clamp-1">{clip.title}</h4>
                  <p className="text-slate-500 text-xs mt-1">{clip.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Main Video Player */}
        <div className="w-full lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                  >
                    <svg className="w-10 h-10 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Now Playing</span>
                    <span className="text-slate-300 text-sm font-semibold">{data.content.mainVideo.duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{data.content.mainVideo.title}</h3>
                  <p className="text-slate-300 line-clamp-1">{data.content.mainVideo.description}</p>
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
    </div>
  );
}
