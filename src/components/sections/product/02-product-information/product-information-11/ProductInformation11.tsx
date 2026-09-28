import React from 'react';

export default function ProductInformation11({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-center">{data.title}</h2>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img src={data.image} alt="Product" className="w-full h-auto object-cover" />
          {data.hotspots.map((spot: any, idx: number) => (
            <div key={idx} className="absolute group" style={{ top: spot.top, left: spot.left }}>
              {/* Pulsing Dot */}
              <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <h4 className="text-sm font-bold text-white mb-1">{spot.title}</h4>
                <p className="text-xs text-gray-300">{spot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}