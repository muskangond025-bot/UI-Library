import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoShowcase9Props {
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

export default function VideoShowcase9({ data }: VideoShowcase9Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 text-lg">{data.content.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-slate-50 border border-slate-200 rounded-[2rem] p-4 md:p-8">
          
          {/* Main Video Area */}
          <div className="w-full lg:w-2/3">
            <div 
              className="w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden relative shadow-lg cursor-pointer group"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <>
                  <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
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
            
            <div className="mt-8 px-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{data.content.mainVideo.title}</h3>
              <p className="text-slate-600">{data.content.mainVideo.description}</p>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
            <h4 className="font-bold text-slate-900 mb-2 px-4 uppercase tracking-wide text-sm">Course Content</h4>
            
            {/* Active Main Video Tab */}
            <div 
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-colors ${activeTab === 0 ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-slate-100'}`}
              onClick={() => {setActiveTab(0); setIsPlaying(false);}}
            >
              <div className="w-8 text-center text-slate-400 font-bold">1</div>
              <div className="w-24 aspect-video rounded-lg overflow-hidden shrink-0 relative">
                <img src={data.content.mainVideo.thumbnailUrl} alt={data.content.mainVideo.title} className="w-full h-full object-cover" />
                {activeTab === 0 && <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full animate-pulse" /></div>}
              </div>
              <div>
                <h5 className={`font-semibold text-sm line-clamp-2 ${activeTab === 0 ? 'text-blue-600' : 'text-slate-900'}`}>{data.content.mainVideo.title}</h5>
                <p className="text-xs text-slate-500 mt-1">{data.content.mainVideo.duration}</p>
              </div>
            </div>

            {/* Sub Playlist */}
            {data.content.playlist.map((clip, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-colors ${activeTab === idx + 1 ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-slate-100'}`}
                onClick={() => setActiveTab(idx + 1)}
              >
                <div className="w-8 text-center text-slate-400 font-bold">{idx + 2}</div>
                <div className="w-24 aspect-video rounded-lg overflow-hidden shrink-0 relative">
                  <img src={clip.thumbnailUrl} alt={clip.title} className="w-full h-full object-cover" />
                  {activeTab === idx + 1 && <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full animate-pulse" /></div>}
                </div>
                <div>
                  <h5 className={`font-semibold text-sm line-clamp-2 ${activeTab === idx + 1 ? 'text-blue-600' : 'text-slate-900'}`}>{clip.title}</h5>
                  <p className="text-xs text-slate-500 mt-1">{clip.duration}</p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}
