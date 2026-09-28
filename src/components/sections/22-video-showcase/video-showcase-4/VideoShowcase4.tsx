import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase4Props {
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

export default function VideoShowcase4({ data }: VideoShowcase4Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-12 border-l-4 border-[#00ff41] pl-6 flex flex-col items-start">
          <div className="px-3 py-1 border border-[#00ff41] text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            SYSTEM_VIDEO_FEED
          </div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black uppercase text-white tracking-widest mb-2"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-gray-400 tracking-widest">&gt; {data.content.description}_</p>
        </div>

        {/* Cyberpunk Frame Player */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-video p-[2px] bg-gradient-to-br from-[#00ff41] to-purple-600 rounded-sm mb-12 shadow-[0_0_30px_rgba(0,255,65,0.2)]"
        >
          <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-10" />
            
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="border border-[#00ff41] bg-[#00ff41]/10 px-8 py-3 text-[#00ff41] font-bold uppercase tracking-widest backdrop-blur-sm group-hover:bg-[#00ff41] group-hover:text-black transition-colors">
                    [ INITIATE PLAYBACK ]
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-20 text-[#00ff41] text-xs uppercase tracking-widest font-bold bg-black/60 px-2 py-1 border border-[#00ff41]/50">
                  REC • {data.content.mainVideo.duration}
                </div>
                
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                  <div className="w-2 h-2 bg-[#00ff41] animate-ping" />
                  <div className="text-[#00ff41] text-[10px] tracking-widest font-bold">STREAM_ACTIVE</div>
                </div>
              </>
            ) : (
              <video 
                src={data.content.mainVideo.videoUrl} 
                autoPlay 
                controls 
                className="w-full h-full object-cover z-20 relative"
              />
            )}
          </div>
        </motion.div>

        {/* Data readout style playlist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.content.playlist.map((clip, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-zinc-800 p-4 hover:border-[#00ff41]/50 transition-colors cursor-pointer group flex items-center gap-4"
            >
              <div className="w-16 h-12 relative overflow-hidden border border-zinc-700 group-hover:border-[#00ff41]">
                <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
              <div>
                <div className="text-[10px] text-pink-500 uppercase font-bold mb-1 tracking-widest">FILE_{idx + 1} // {clip.duration}</div>
                <h4 className="text-white text-xs uppercase tracking-widest font-bold group-hover:text-[#00ff41] transition-colors">{clip.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
