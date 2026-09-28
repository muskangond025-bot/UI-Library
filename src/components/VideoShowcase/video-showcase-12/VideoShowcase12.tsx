import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase12Props {
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

export default function VideoShowcase12({ data }: VideoShowcase12Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full min-h-[800px] flex flex-col lg:flex-row font-sans bg-black overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Left: Full Bleed Video */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative cursor-pointer group" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? (
          <>
            <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center scale-90 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <svg className="w-10 h-10 text-black ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <span className="bg-white text-black font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-sm">
                {data.content.mainVideo.duration}
              </span>
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

      {/* Right: Info & Playlist */}
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg mb-16 max-w-lg"
        >
          {data.content.description}
        </motion.p>

        <div className="flex flex-col gap-8">
          <h4 className="text-zinc-600 font-bold uppercase tracking-widest text-xs">More Videos</h4>
          {data.content.playlist.map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-32 aspect-video rounded-xl overflow-hidden relative border border-zinc-800 group-hover:border-zinc-500 transition-colors">
                <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-white text-lg group-hover:text-zinc-300 transition-colors">{clip.title}</h5>
                <p className="text-zinc-500 text-sm mt-1">{clip.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
