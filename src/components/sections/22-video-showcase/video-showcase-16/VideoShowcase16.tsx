import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase16Props {
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

export default function VideoShowcase16({ data }: VideoShowcase16Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfccb] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d9f99d] rounded-[100px] rotate-45 -z-10 translate-x-1/3 -translate-y-1/4 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bef264] rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black text-[#3f6212] mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-[#4d7c0f] font-medium text-lg">{data.content.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full aspect-video rounded-[3rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(101,163,13,0.15)] border-4 border-[#d9f99d] relative group cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <>
                  <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#3f6212]/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/80 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(101,163,13,0.2)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#84cc16] transition-all">
                      <svg className="w-10 h-10 text-[#4d7c0f] group-hover:text-white ml-2 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 bg-[#bef264] text-[#14532d] px-4 py-1 rounded-full font-bold text-sm shadow-md">
                    {data.content.mainVideo.duration}
                  </div>
                </>
              ) : (
                <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover" />
              )}
            </motion.div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6 relative">
            <div className="absolute -left-6 top-1/2 bottom-0 w-px bg-dashed border-l-2 border-dashed border-[#bef264] hidden lg:block" />
            
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white rounded-[2rem] p-4 shadow-[0_10px_30px_rgba(101,163,13,0.05)] border-2 border-transparent hover:border-[#bef264] flex items-center gap-4 cursor-pointer group relative z-10"
              >
                <div className="w-24 aspect-square rounded-2xl overflow-hidden shrink-0 relative">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#14532d] group-hover:text-[#4d7c0f] transition-colors mb-1">{clip.title}</h4>
                  <span className="bg-[#f7fee7] text-[#65a30d] text-xs font-bold px-2 py-1 rounded-full uppercase">{clip.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
