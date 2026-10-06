import React, { useState, useEffect } from 'react';
import GlareHover from './GlareHover';

function TypewriterText({ text, delay = 150 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 2500);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, delay]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse opacity-80 font-normal">|</span>
    </span>
  );
}

export function OffersLimitedTime1() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans antialiased text-neutral-900"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2000&auto=format&fit=crop')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

        {/* Header Banner */}
        <div className="max-w-4xl w-full text-center mb-10 space-y-2">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-amber-400 text-black shadow-lg">
            Limited Time Offer • Scroll & Hover Glare
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase drop-shadow-md">
            Black Friday Ultimate Sale
          </h1>
          <p className="text-white text-sm sm:text-base max-w-xl mx-auto drop-shadow-sm font-medium">
            Interactive Swiss-style promotional posters featuring typewriter animation & dynamic React Bits GlareHover.
          </p>
        </div>

        {/* Grid of Posters wrapped in GlareHover */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
          
          {/* Poster 1: Pink Poster inside City Stand Mockup Frame */}
          <div className="p-3 bg-neutral-200 border-4 border-neutral-300 rounded-2xl shadow-2xl">
            <GlareHover
              width="100%"
              height="100%"
              background="#f4a8c4"
              borderRadius="12px"
              borderColor="#e288ab"
              glareColor="#ffffff"
              glareOpacity={0.45}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={850}
              autoAnimateOnScroll={true}
              className="shadow-inner hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative select-none overflow-hidden text-black min-h-[620px]">
                
                {/* Top Row: Title + Sale */}
                <div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-0">
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-black">
                        Black Friday
                      </h2>
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-black mt-1">
                        Ultimate
                      </h2>
                    </div>
                    
                    {/* Sale Subtitle */}
                    <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight text-black self-end">
                      Sale
                    </span>
                  </div>

                  {/* Middle Section: Starburst Badge + Info Text */}
                  <div className="mt-6 flex items-center justify-between gap-3">
                    {/* Starburst Badge with Smooth Breathing Pulsing Animation */}
                    <div className="shrink-0 flex items-center justify-center">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-700 hover:scale-110">
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute inset-0 w-full h-full text-white fill-current drop-shadow-md animate-[spin_12s_linear_infinite]"
                        >
                          <path d="M50 0 L58 15 L74 6 L75 24 L93 25 L85 41 L100 50 L85 59 L93 75 L75 76 L74 94 L58 85 L50 100 L42 85 L26 94 L25 76 L7 75 L15 59 L0 50 L15 41 L7 25 L25 24 L26 6 L42 15 Z" />
                        </svg>
                        <div className="relative text-center px-1 z-10">
                          <span className="block text-[10px] sm:text-xs font-black tracking-wider text-black uppercase leading-tight">
                            SPECIAL
                          </span>
                          <span className="block text-[10px] sm:text-xs font-black tracking-wider text-black uppercase leading-tight">
                            OFFER
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Text */}
                    <div className="space-y-2 text-[10px] sm:text-xs font-medium text-neutral-800 leading-snug max-w-[200px]">
                      <p>
                        Thanks for shopping — come back next year for more. In the meantime, enjoy our everyday low prices.
                      </p>
                      <div>
                        <p className="font-bold text-black uppercase tracking-wider text-[8px]">Follow us in:</p>
                        <p className="text-neutral-700 text-[9px]">Twitter, Facebook, Instagram</p>
                      </div>
                      <p className="font-semibold text-black text-[9px]">Scan QR for info</p>
                    </div>
                  </div>
                </div>

                {/* Center Typography: Date + Oval Badge + Huge Typewriter 85% */}
                <div className="my-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black">
                      25.11.22
                    </span>
                    
                    {/* Oval Badge LIMITED TIME */}
                    <div className="border border-black rounded-full px-3 py-0.5 transform -rotate-6 bg-transparent shadow-sm">
                      <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-black block">
                        LIMITED TIME
                      </span>
                    </div>
                  </div>

                  {/* Typewriter Animation for 85% Discount */}
                  <div className="leading-none text-left min-h-[96px] sm:min-h-[120px] flex items-center">
                    <span className="text-6xl sm:text-8xl font-black tracking-tighter text-black">
                      <TypewriterText text="85%" delay={180} />
                    </span>
                  </div>
                </div>

                {/* Bottom Footer: Brand + Address + QR Code */}
                <div className="pt-3 border-t border-black/20 flex justify-between items-end">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase leading-none">
                      GADJETS
                    </h3>
                    <h3 className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase leading-none mt-0.5">
                      SHOP
                    </h3>
                  </div>

                  <div className="hidden sm:block text-[8px] text-neutral-800 space-y-0.5 leading-tight">
                    <p className="font-bold text-black">312-922-857, 312-911-859</p>
                    <p>www.event.com</p>
                    <p>111 East Wacker Str.,</p>
                    <p>Chicago, IL 60601, USA</p>
                  </div>

                  {/* QR Code SVG */}
                  <div className="w-12 h-12 bg-white p-1 border border-black shadow-sm flex items-center justify-center rounded">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-black fill-current">
                      <path d="M2,2H10V10H2V2M4,4V8H8V4H4M11,2H13V4H11V2M14,2H22V10H14V2M16,4V8H20V4H16M2,14H10V22H2V14M4,16V20H8V16H4M14,14H17V17H14V14M19,14H22V17H19V14M17,17H20V20H17V17M14,19H17V22H14V19M19,19H22V22H19V19Z" />
                    </svg>
                  </div>
                </div>

              </div>
            </GlareHover>
          </div>

          {/* Poster 2: Yellow Poster */}
          <div className="p-3 bg-neutral-200/20 border-4 border-yellow-400/40 rounded-2xl shadow-2xl">
            <GlareHover
              width="100%"
              height="100%"
              background="#ffcc00"
              borderRadius="12px"
              borderColor="#e6b800"
              glareColor="#ffffff"
              glareOpacity={0.5}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={850}
              autoAnimateOnScroll={true}
              className="shadow-inner hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative select-none overflow-hidden text-black min-h-[620px]">
                
                {/* Top Row: Title + Sale */}
                <div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-0">
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-black">
                        Black Friday
                      </h2>
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-black mt-1">
                        Ultimate
                      </h2>
                    </div>
                    
                    {/* Sale Subtitle */}
                    <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight text-black self-end">
                      Sale
                    </span>
                  </div>

                  {/* Middle Section: Starburst Badge + Info Text */}
                  <div className="mt-6 flex items-center justify-between gap-3">
                    {/* Starburst Badge with Smooth Breathing Pulsing Animation */}
                    <div className="shrink-0 flex items-center justify-center">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-700 hover:scale-110">
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute inset-0 w-full h-full text-red-600 fill-current drop-shadow-md animate-[spin_12s_linear_infinite]"
                        >
                          <path d="M50 0 L55 12 L68 4 L68 18 L82 14 L77 28 L93 28 L83 40 L100 45 L86 54 L98 65 L82 69 L90 83 L74 81 L77 96 L63 88 L60 100 L50 90 L40 100 L37 88 L23 96 L26 81 L10 83 L18 69 L2 65 L14 54 L0 45 L17 40 L7 28 L23 28 L18 14 L32 18 L32 4 L45 12 Z" />
                        </svg>
                        <div className="relative text-center px-1 z-10 text-white">
                          <span className="block text-[10px] sm:text-xs font-black tracking-wider uppercase leading-tight">
                            SPECIAL
                          </span>
                          <span className="block text-[10px] sm:text-xs font-black tracking-wider uppercase leading-tight">
                            OFFER
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Text */}
                    <div className="space-y-2 text-[10px] sm:text-xs font-medium text-neutral-900 leading-snug max-w-[200px]">
                      <p>
                        Thanks for shopping — come back next year for more. In the meantime, enjoy our everyday low prices.
                      </p>
                      <div>
                        <p className="font-bold text-black uppercase tracking-wider text-[8px]">Follow us in:</p>
                        <p className="text-neutral-800 text-[9px]">Twitter, Facebook, Instagram</p>
                      </div>
                      <p className="font-semibold text-black text-[9px]">Scan QR for info</p>
                    </div>
                  </div>
                </div>

                {/* Center Typography: Date + Oval Badge + Huge Typewriter 85% */}
                <div className="my-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-black">
                      25.11.22
                    </span>
                    
                    {/* Oval Badge LIMITED TIME */}
                    <div className="border border-black rounded-full px-3 py-0.5 transform -rotate-6 bg-transparent shadow-sm">
                      <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-black block">
                        LIMITED TIME
                      </span>
                    </div>
                  </div>

                  {/* Typewriter Animation for 85% Discount */}
                  <div className="leading-none text-left min-h-[96px] sm:min-h-[120px] flex items-center">
                    <span className="text-6xl sm:text-8xl font-black tracking-tighter text-black">
                      <TypewriterText text="85%" delay={180} />
                    </span>
                  </div>
                </div>

                {/* Bottom Footer: Brand + Address + QR Code */}
                <div className="pt-3 border-t border-black/20 flex justify-between items-end">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase leading-none">
                      GADJETS
                    </h3>
                    <h3 className="text-lg sm:text-xl font-black tracking-tighter text-black uppercase leading-none mt-0.5">
                      SHOP
                    </h3>
                  </div>

                  <div className="hidden sm:block text-[8px] text-neutral-800 space-y-0.5 leading-tight">
                    <p className="font-bold text-black">312-922-857, 312-911-859</p>
                    <p>www.event.com</p>
                    <p>111 East Wacker Str.,</p>
                    <p>Chicago, IL 60601, USA</p>
                  </div>

                  {/* QR Code SVG */}
                  <div className="w-12 h-12 bg-white p-1 border border-black shadow-sm flex items-center justify-center rounded">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-black fill-current">
                      <path d="M2,2H10V10H2V2M4,4V8H8V4H4M11,2H13V4H11V2M14,2H22V10H14V2M16,4V8H20V4H16M2,14H10V22H2V14M4,16V20H8V16H4M14,14H17V17H14V14M19,14H22V17H19V14M17,17H20V20H17V17M14,19H17V22H14V19M19,19H22V22H19V19Z" />
                    </svg>
                  </div>
                </div>

              </div>
            </GlareHover>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OffersLimitedTime1;
