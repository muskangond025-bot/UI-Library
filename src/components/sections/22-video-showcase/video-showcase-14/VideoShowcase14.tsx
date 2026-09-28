import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase14Props {
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

export default function VideoShowcase14({ data }: VideoShowcase14Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8 gap-8">
          <div>
            <div className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Command Center</div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-slate-400">{data.content.description}</p>
          </div>
          <div className="flex gap-8 text-right">
            <div>
              <div className="text-2xl font-bold text-white">4.8k</div>
              <div className="text-xs text-slate-500 uppercase">Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-xs text-slate-500 uppercase">Uptime</div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 relative group cursor-pointer shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:shadow-[0_0_50px_rgba(37,99,235,0.3)] transition-shadow duration-500"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <>
                  <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-80" />
                  
                  {/* Tech Overlay Lines */}
                  <div className="absolute top-0 bottom-0 left-1/4 w-px bg-blue-500/20" />
                  <div className="absolute top-0 bottom-0 right-1/4 w-px bg-blue-500/20" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-500/20" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-transparent transition-all">
                      <svg className="w-8 h-8 text-blue-500 group-hover:text-white ml-1 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md p-6 border-t border-slate-800 flex justify-between items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div>
                      <h3 className="text-white font-bold text-xl">{data.content.mainVideo.title}</h3>
                      <p className="text-slate-400 text-sm">{data.content.mainVideo.description}</p>
                    </div>
                    <span className="text-blue-400 font-mono text-sm">{data.content.mainVideo.duration}</span>
                  </div>
                </>
              ) : (
                <video src={data.content.mainVideo.videoUrl} autoPlay controls className="w-full h-full object-cover relative z-20" />
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Playlist Queue</h4>
            {data.content.playlist.map((clip, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 flex gap-4 cursor-pointer hover:bg-slate-800 hover:border-slate-600 transition-colors group"
              >
                <div className="w-20 aspect-video rounded-md overflow-hidden relative shrink-0">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-slate-200 text-sm font-semibold group-hover:text-blue-400 transition-colors line-clamp-2">{clip.title}</h5>
                  <span className="text-slate-500 text-xs mt-1 font-mono">{clip.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
