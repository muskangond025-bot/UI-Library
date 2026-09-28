import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase19Props {
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

export default function VideoShowcase19({ data }: VideoShowcase19Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-[#09090b] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-12 border-l-4 border-pink-500 pl-6">
          <div className="text-pink-500 text-xs font-bold uppercase tracking-widest mb-2 inline-block">
            [ MEDIA_ARCHIVE.sys ]
          </div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mb-2 tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-500 text-sm">{'//'} {data.content.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-3/4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-video bg-zinc-950 border border-pink-500 relative group cursor-pointer p-1"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="w-full h-full relative overflow-hidden bg-black">
                {!isPlaying ? (
                  <>
                    <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="border border-pink-500 bg-pink-500/20 text-pink-500 px-6 py-2 uppercase font-bold tracking-widest backdrop-blur-sm group-hover:bg-pink-500 group-hover:text-black transition-colors flex items-center gap-2">
                        <div className="w-2 h-2 bg-current animate-pulse" />
                        Execute Playback
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 bg-black border border-pink-500/50 text-pink-500 text-[10px] px-2 py-1 uppercase font-bold tracking-widest">
                      DUR: {data.content.mainVideo.duration}
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border-l-2 border-pink-500 p-3 max-w-md">
                      <h3 className="text-white font-bold uppercase text-lg mb-1">{data.content.mainVideo.title}</h3>
                      <p className="text-zinc-400 text-xs lowercase">"{data.content.mainVideo.description}"</p>
                    </div>
                  </>
                ) : (
                  <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover relative z-20" />
                )}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-4">
            <div className="text-pink-500 text-xs font-bold uppercase tracking-widest border-b border-zinc-800 pb-2 mb-2">
              Queue_List
            </div>
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 hover:border-pink-500/50 p-2 cursor-pointer group transition-colors flex gap-4"
              >
                <div className="w-24 aspect-video bg-black relative border border-zinc-800 overflow-hidden shrink-0">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  <div className="absolute bottom-1 right-1 bg-black text-pink-500 text-[8px] px-1 border border-pink-500/50">{clip.duration}</div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-white text-xs font-bold uppercase tracking-wider group-hover:text-pink-400 transition-colors mb-1 line-clamp-2">{clip.title}</div>
                  <div className="text-zinc-600 text-[10px] uppercase">ID: 0x{Math.floor(Math.random() * 10000)}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
