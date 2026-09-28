import React from 'react';

interface ImageText6Props {
  data: {
    content: {
      heading: string;
      subheading: string;
      description: string;
      features: string[];
      primaryAction: {
        label: string;
        url: string;
      };
      image: {
        url: string;
        alt: string;
      };
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
      imageAlignment: 'left' | 'right';
    };
  };
}

export default function ImageText6({ data }: ImageText6Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  return (
    <div 
      className="w-full min-h-screen py-24 px-6 md:px-12 flex items-center font-mono overflow-hidden border-b-8"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor, borderColor: data.style.textColor }}
    >
      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
        
        {/* Text Area */}
        <div className={`flex flex-col ${isImageRight ? 'order-first' : 'order-last'}`}>
          <div className="inline-block w-fit px-4 py-2 border-4 mb-8 font-black uppercase text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" style={{ borderColor: data.style.textColor }}>
            {data.content.subheading}
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8" style={{ textShadow: `4px 4px 0px ${data.style.textColor}40` }}>
            {data.content.heading}
          </h2>
          
          <p className="text-xl md:text-2xl font-bold mb-12 border-l-8 pl-6 leading-relaxed" style={{ borderColor: data.style.textColor }}>
            {data.content.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {data.content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white border-4 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default" style={{ borderColor: data.style.textColor }}>
                <span className="text-2xl font-black">{idx + 1}.</span>
                <span className="font-bold uppercase text-sm tracking-wider">{feature}</span>
              </div>
            ))}
          </div>

          <a 
            href={data.content.primaryAction.url}
            className="inline-block w-fit px-12 py-6 border-4 font-black uppercase text-2xl bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 transition-all"
            style={{ borderColor: data.style.textColor, color: data.style.textColor }}
          >
            {data.content.primaryAction.label}
          </a>
        </div>

        {/* Image Area */}
        <div className="relative">
          <div className="relative z-10 w-full aspect-[4/5] bg-white border-8 shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:scale-[1.02] transition-transform duration-300" style={{ borderColor: data.style.textColor }}>
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Decorative background shapes */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-8 z-0" style={{ borderColor: data.style.textColor, backgroundColor: data.style.backgroundColor }} />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 border-8 z-20" style={{ borderColor: data.style.textColor, backgroundColor: data.style.accentColor }} />
        </div>

      </div>
    </div>
  );
}
