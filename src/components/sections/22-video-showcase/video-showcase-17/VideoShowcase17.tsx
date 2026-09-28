import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase17Props {
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

export default function VideoShowcase17({ data }: VideoShowcase17Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Starry Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(indigo 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200 font-light text-lg">{data.content.description}</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-indigo-950 border border-indigo-500/30 relative group shadow-[0_0_80px_rgba(79,70,229,0.2)] hover:shadow-[0_0_100px_rgba(139,92,246,0.3)] transition-shadow duration-700 cursor-pointer mb-16"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {!isPlaying ? (
            <>
              <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-900/40 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-indigo-900/50 backdrop-blur-md rounded-full border border-indigo-400/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:border-transparent transition-all shadow-[0_0_30px_rgba(167,139,250,0.5)]">
                  <svg className="w-10 h-10 text-indigo-200 group-hover:text-white ml-2 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{data.content.mainVideo.title}</h3>
                  <p className="text-indigo-200 text-sm max-w-xl">{data.content.mainVideo.description}</p>
                </div>
                <div className="bg-indigo-600/80 backdrop-blur-sm text-indigo-50 text-sm font-semibold px-4 py-1 rounded-full border border-indigo-400">
                  {data.content.mainVideo.duration}
                </div>
              </div>
            </>
          ) : (
            <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover relative z-20" />
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {data.content.playlist.map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-4 border border-indigo-500/20 group-hover:border-indigo-400/80 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.1)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-900/40">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-indigo-950/80 backdrop-blur-sm text-indigo-200 text-xs font-bold px-2 py-1 rounded">
                  {clip.duration}
                </div>
              </div>
              <h4 className="text-white font-semibold text-center group-hover:text-indigo-300 transition-colors">{clip.title}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
