import React, { useState, useEffect, useRef } from 'react';

export function OffersLimitedTime3() {
  const [copied, setCopied] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger physics burst EVERY TIME section enters viewport, reset when out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false); // Reset so it re-animates whenever scrolled back into view
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('ICONS20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 3D Isometric / Embossed Icons matching reference (Scissors, Download, Chat, Shopping Bag, Box, FaceID, Target, Clock)
  const iconsData = [
    // Scissors (Top Right Split Origin)
    { path: 'M14 6a2 2 0 10-4 0 2 2 0 004 0zM14 18a2 2 0 10-4 0 2 2 0 004 0z M6.7 15.3l10.6-10.6 M17.3 19.3L6.7 8.7', size: 84, top: '4%', right: '6%', delay: 0 },
    // Download Arrow
    { path: 'M12 3v12m0 0l-4-4m4 4l4-4M4 19h16', size: 76, top: '16%', right: '26%', delay: 0.1 },
    // Chat Bubble
    { path: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', size: 92, top: '34%', right: '4%', delay: 0.2 },
    // 3D Shopping Bag (Center Right)
    { path: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', size: 104, top: '54%', right: '35%', delay: 0.25 },
    // Target Radar
    { path: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-6a4 4 0 100-8 4 4 0 000 8z', size: 80, top: '68%', right: '10%', delay: 0.35 },
    // 3D Isometric Cube Box (Bottom Left)
    { path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', size: 98, top: '70%', right: '76%', delay: 0.4 },
    // Face ID Scanner (Bottom Center)
    { path: 'M9 3H5a2 2 0 00-2 2v4m0 6v4a2 2 0 002 2h4m6-18h4a2 2 0 012 2v4m0 6v4a2 2 0 01-2 2h-4M9 9h.01M15 9h.01M10 14a4 4 0 004 0', size: 90, top: '76%', right: '52%', delay: 0.45 },
    // Clock Badge
    { path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', size: 72, top: '80%', right: '30%', delay: 0.5 }
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[660px] bg-black text-white relative overflow-hidden font-sans antialiased py-16 px-6 sm:px-12 flex items-center justify-start select-none"
    >
      {/* 3D FLOATING / SPLITTING BALL ICONS BACKGROUND BURST ANIMATION */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {iconsData.map((icon, idx) => (
          <div
            key={idx}
            className={`absolute transition-all duration-1000 ease-out transform ${
              isInView
                ? 'opacity-40 scale-100 translate-x-0 translate-y-0 rotate-0'
                : 'opacity-0 scale-0 translate-x-60 -translate-y-60 rotate-45'
            }`}
            style={{
              top: icon.top,
              right: icon.right,
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              transitionDelay: `${isInView ? icon.delay : 0}s`,
            }}
          >
            {/* 3D Embossed Metallic Pill Tile Container */}
            <div className="w-full h-full p-4 rounded-[28px] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black border-2 border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.2)] flex items-center justify-center transform hover:rotate-6 transition-transform">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full text-neutral-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              >
                <path d={icon.path} />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* FOREGROUND MAIN CONTENT (Clear, Un-clipped, Zero Text Overlap) */}
      <div className="relative z-10 max-w-2xl space-y-8">
        
        {/* Top Logo Badge: Pixfort Icons */}
        <div className="inline-flex items-center gap-3 p-3 bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="w-12 h-12 rounded-xl bg-black p-1.5 border border-neutral-800 relative flex items-center justify-center overflow-hidden">
            {/* Colorful Icon Grid inside Badge */}
            <div className="grid grid-cols-2 gap-1 w-full h-full">
              <span className="bg-sky-400/80 rounded-sm" />
              <span className="bg-emerald-400/80 rounded-sm" />
              <span className="bg-blue-600/80 rounded-sm" />
              <span className="bg-lime-400/80 rounded-sm" />
            </div>
          </div>
          <div className="pr-2">
            <h4 className="text-base font-extrabold text-white tracking-tight leading-none">
              pixfort
            </h4>
            <span className="text-xs text-neutral-400 font-medium tracking-wide">icons</span>
          </div>
        </div>

        {/* Main Offer Title & Coupon Pill */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Lifetime 20% discount.
          </h1>

          {/* Coupon Code Pill */}
          <div className="flex flex-wrap items-center gap-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white pt-2">
            <span>Use coupon</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white text-black rounded-full font-black text-3xl sm:text-5xl tracking-wider hover:bg-neutral-200 active:scale-95 transition-all shadow-2xl cursor-pointer"
            >
              <span>ICONS20</span>
              <span className="text-xs font-bold px-3 py-1 bg-black text-white rounded-full uppercase tracking-widest">
                {copied ? 'COPIED!' : 'COPY'}
              </span>
            </button>
          </div>
        </div>

        {/* Non-working / Fake Text Link as Requested (Does not navigate or open external URLs) */}
        <div className="pt-4">
          <span className="text-neutral-400 font-medium text-lg tracking-wide select-none cursor-default">
            pixfort.com/icons
          </span>
        </div>

      </div>
    </div>
  );
}

export default OffersLimitedTime3;
