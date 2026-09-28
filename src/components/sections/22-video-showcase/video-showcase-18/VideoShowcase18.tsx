import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase18Props {
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

export default function VideoShowcase18({ data }: VideoShowcase18Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full font-sans bg-white" style={{ color: data.style.textColor }}>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
        
        {/* Left Side: Header & Text */}
        <div className="bg-black text-white p-12 md:p-24 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-white text-black font-black uppercase text-xs px-3 py-1 mb-8 tracking-widest">
              Featured Video
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              {data.content.heading}
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-lg mb-12">
              {data.content.description}
            </p>
            
            <div className="space-y-6">
              <h4 className="text-xl font-black uppercase tracking-widest border-b-2 border-zinc-800 pb-2">Up Next</h4>
              {data.content.playlist.map((clip, idx) => (
                <div key={idx} className="flex justify-between items-center group cursor-pointer hover:bg-zinc-900 p-4 -mx-4 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-zinc-800 overflow-hidden shrink-0">
                      <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <h5 className="font-bold uppercase tracking-wider">{clip.title}</h5>
                  </div>
                  <span className="font-mono text-gray-500">{clip.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Massive Player */}
        <div className="bg-white p-6 md:p-12 flex flex-col justify-center relative cursor-pointer group" onClick={() => setIsPlaying(!isPlaying)}>
          <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-zinc-100 relative overflow-hidden group-hover:shadow-2xl transition-shadow">
            {!isPlaying ? (
              <>
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-3xl font-black text-black uppercase mb-2">{data.content.mainVideo.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-medium">{data.content.mainVideo.description}</p>
                    <span className="bg-black text-white font-bold text-xs uppercase px-3 py-1">{data.content.mainVideo.duration}</span>
                  </div>
                </div>
              </>
            ) : (
              <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover" />
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
