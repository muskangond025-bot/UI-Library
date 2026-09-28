import React from 'react';

export default function ProductDescription20({ data }: { data: any }) {
  return (
    <div className="w-full bg-black text-white py-32 overflow-hidden font-sans">
      
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <p className="text-3xl md:text-5xl font-light leading-snug text-gray-300">
          {data.textTop}
        </p>
      </div>
      
      {/* Infinite Marquee Interruption */}
      <div className="w-full bg-white text-black py-8 transform -rotate-2 scale-105 my-16 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee inline-block">
            <span className="text-5xl md:text-7xl font-black tracking-tighter mx-4">{data.marqueeText.repeat(4)}</span>
          </div>
          <div className="animate-marquee inline-block">
            <span className="text-5xl md:text-7xl font-black tracking-tighter mx-4">{data.marqueeText.repeat(4)}</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center mt-16">
        <p className="text-3xl md:text-5xl font-light leading-snug text-gray-300">
          {data.textBottom}
        </p>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}