import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase6Props {
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

export default function VideoShowcase6({ data }: VideoShowcase6Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e293b]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12 border-4 border-black bg-yellow-400 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black uppercase text-black tracking-tighter mb-4 leading-none"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl font-bold text-black uppercase max-w-2xl">{data.content.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-3/4">
            <div className="w-full aspect-video border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
              {!isPlaying ? (
                <>
                  <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-center justify-center transition-all">
                      <svg className="w-12 h-12 text-black ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <h3 className="font-black text-black uppercase text-xl">{data.content.mainVideo.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 bg-yellow-400 border-4 border-black px-3 py-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-black text-black">
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
            </div>
          </div>

          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="w-full border-4 border-black bg-white p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer group"
              >
                <div className="w-full aspect-video border-2 border-black mb-3 overflow-hidden relative">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-black text-black uppercase text-sm mb-1">{clip.title}</h4>
                <div className="inline-block bg-black text-yellow-400 text-[10px] font-black uppercase px-2 py-1">
                  {clip.duration}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
