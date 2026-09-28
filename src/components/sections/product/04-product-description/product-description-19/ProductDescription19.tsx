import React, { useState } from 'react';

export default function ProductDescription19({ data }: { data: any }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(1); // Default to middle panel open

  const panels = [
    {
      title: "Aerodynamics",
      subtitle: "Wind-tunnel tested geometry.",
      desc: "Every curve is mathematically optimized to reduce drag coefficient.",
      img: "https://picsum.photos/seed/panel1/1000/1200"
    },
    {
      title: "Power",
      subtitle: "Unleash raw energy.",
      desc: "A custom-built neural engine capable of 20 trillion operations per second.",
      img: "https://picsum.photos/seed/panel2/1000/1200"
    },
    {
      title: "Control",
      subtitle: "Absolute precision.",
      desc: "Tactile feedback surfaces map perfectly to human ergonomic ranges.",
      img: "https://picsum.photos/seed/panel3/1000/1200"
    }
  ];

  return (
    <div className="w-full h-screen bg-[#050505] flex items-center justify-center p-4 md:p-12 font-sans">
      <div className="w-full h-full max-w-7xl flex flex-col md:flex-row gap-4 overflow-hidden rounded-[2rem]">
        
        {panels.map((panel, idx) => {
          const isActive = activeIdx === idx;
          
          return (
            <div 
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`relative h-full rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'md:flex-[4] flex-[4]' : 'md:flex-[1] flex-[1]'}`}
            >
              {/* Background Image */}
              <img 
                src={panel.img} 
                alt={panel.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-out"
                style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 whitespace-nowrap">
                    {panel.title}
                  </h2>
                </div>
                
                <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'max-h-40 opacity-100 delay-200' : 'max-h-0 opacity-0'}`}>
                  <h3 className="text-xl text-blue-400 mb-4 whitespace-nowrap">{panel.subtitle}</h3>
                  <p className="text-gray-300 md:max-w-md line-clamp-3">
                    {panel.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}