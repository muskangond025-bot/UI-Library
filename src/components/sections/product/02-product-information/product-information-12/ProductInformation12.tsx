import React from 'react';

export default function ProductInformation12({ data }: { data: any }) {
  return (
    <div className="w-full bg-black py-32 overflow-hidden">
      <h2 className="text-3xl font-light text-center text-gray-500 mb-16 uppercase tracking-widest">{data.title}</h2>
      
      {/* CSS Animation injected via style tag for Marquee */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex overflow-x-hidden group whitespace-nowrap">
        <div className="animate-scroll flex gap-8 items-center">
          {/* Render twice for seamless loop */}
          {[...data.items, ...data.items].map((item: string, idx: number) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400 hover:from-white hover:to-white transition-all duration-500 cursor-default">
                {item}
              </span>
              <span className="text-4xl text-blue-500">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}