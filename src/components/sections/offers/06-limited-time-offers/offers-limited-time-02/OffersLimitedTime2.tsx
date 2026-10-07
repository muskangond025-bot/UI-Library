import React, { useState, useRef, useEffect } from 'react';

export function OffersLimitedTime2() {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const bottleColors = [
    { name: 'Emerald', bg: 'from-emerald-600 via-teal-700 to-emerald-950', cap: '#d4af37', label: 'Bouquet Perfume' },
    { name: 'Amber', bg: 'from-amber-600 via-yellow-700 to-amber-950', cap: '#e6c687', label: 'Royal Amber' },
    { name: 'Rose', bg: 'from-rose-600 via-pink-700 to-rose-950', cap: '#f5d6dc', label: 'Velvet Rose' }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title1: "Explore From",
      title2: "20% Discount",
      title3: "Perfume",
      color: 0,
      highlightText: "Special Offer Fragrance",
      discountBadge: "20% OFF",
    },
    {
      title1: "Discover Luxury",
      title2: "35% OFF Royal",
      title3: "Amber Elixir",
      color: 1,
      highlightText: "Royal Amber Special",
      discountBadge: "35% OFF",
    },
    {
      title1: "Feel The Fresh",
      title2: "50% FLAT SALE",
      title3: "Velvet Rose",
      color: 2,
      highlightText: "Velvet Rose Exclusive",
      discountBadge: "50% OFF",
    },
    {
      title1: "Premium Scent",
      title2: "BUY 1 GET 1",
      title3: "Oud Collection",
      color: 0,
      highlightText: "BOGO Oud Offer",
      discountBadge: "BOGO DEAL",
    },
    {
      title1: "Limited Edition",
      title2: "FLAT 40% OFF",
      title3: "Crystal Bloom",
      color: 1,
      highlightText: "Crystal Bloom Flash",
      discountBadge: "40% OFF",
    }
  ];

  const currentSlide = slides[activeSlide];
  const activeTheme = bottleColors[activeColor] || bottleColors[0];

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setActiveColor(slides[index].color);
  };

  // Smooth continuous Left-to-Right 360 degree turntable animation loop
  useEffect(() => {
    if (!isAutoRotate) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 25);
    return () => clearInterval(interval);
  }, [isAutoRotate]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setIsAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    setRotation((prev) => (prev + deltaX * 1.2) % 360);
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    setIsAutoRotate(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    setRotation((prev) => (prev + deltaX * 1.2) % 360);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="w-full min-h-screen bg-[#e3e8e2] text-neutral-900 font-sans antialiased py-10 px-4 sm:px-8 lg:px-12 flex items-center justify-center overflow-x-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
        
        {/* Left Side: Typography & Action Buttons */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 pr-0 lg:pr-4">
          <div className="space-y-2 transition-all duration-500 min-h-[220px]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
              {currentSlide.title1}
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
              {currentSlide.title2}
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-emerald-600 leading-[1.08]">
              {currentSlide.title3}
            </h1>
          </div>

          {/* Carousel dots indicator */}
          <div className="flex items-center gap-2 pt-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                aria-label={`Select slide ${idx + 1}`}
                className={`transition-all duration-300 ${
                  idx === activeSlide
                    ? 'w-8 h-2 bg-neutral-900 rounded-full'
                    : 'w-2 h-2 bg-neutral-400 hover:bg-neutral-600 rounded-full'
                }`}
              />
            ))}
          </div>

          {/* Explore Shop Button Pill */}
          <div className="flex items-center gap-3 pt-2">
            <button className="h-12 px-8 bg-black text-white text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-lg">
              Explore Shop
            </button>
            <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg">
              <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Bottom Highlighted Quote Pill - High Contrast & Clearly Visible */}
          <div className="pt-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-xl font-serif italic shadow-md">
              “
            </div>
            <div className="h-12 px-6 bg-emerald-500 text-white rounded-2xl border border-emerald-600 shadow-md flex items-center justify-between gap-4 font-bold text-sm hover:bg-emerald-600 transition-colors cursor-pointer">
              <span>{currentSlide.highlightText}</span>
              <span className="text-xs bg-black/30 px-2 py-0.5 rounded-full font-extrabold text-amber-300">
                {currentSlide.discountBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Mobile Mockup with Interactive Half-Circle 360° Arc Controller */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          
          {/* Primary Mobile Screen */}
          <div className="w-72 sm:w-80 bg-[#e6eae4] rounded-[44px] border-[8px] border-[#2c2b29] shadow-2xl p-5 flex flex-col justify-between space-y-4 shrink-0 relative overflow-hidden">
            
            {/* Dynamic Island Notch */}
            <div className="w-28 h-6 bg-black rounded-full mx-auto flex items-center justify-between px-4 z-20">
              <span className="w-2 h-2 bg-neutral-800 rounded-full" />
              <span className="w-2.5 h-2.5 bg-neutral-900 rounded-full" />
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-1 text-xs text-neutral-700">
              <span className="font-semibold">9:41</span>
              <div className="flex items-center gap-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Top Bar Actions */}
            <div className="flex items-center justify-between z-10">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm text-neutral-700 hover:bg-white transition-colors">
                ←
              </button>
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-sm text-neutral-700 hover:bg-white transition-colors">
                ♥
              </button>
            </div>

            {/* Color Swatch Dots */}
            <div className="flex justify-center items-center gap-3 py-1">
              <button
                onClick={() => setActiveColor(0)}
                className={`w-3.5 h-3.5 rounded-full bg-emerald-700 transition-transform ${activeColor === 0 ? 'scale-125 ring-2 ring-emerald-900 ring-offset-1' : ''}`}
              />
              <button
                onClick={() => setActiveColor(1)}
                className={`w-3.5 h-3.5 rounded-full bg-amber-500 transition-transform ${activeColor === 1 ? 'scale-125 ring-2 ring-amber-700 ring-offset-1' : ''}`}
              />
              <button
                onClick={() => setActiveColor(2)}
                className={`w-3.5 h-3.5 rounded-full bg-rose-500 transition-transform ${activeColor === 2 ? 'scale-125 ring-2 ring-rose-700 ring-offset-1' : ''}`}
              />
            </div>

            {/* 360 Interactive Product Canvas with Half-Circle Arc Rotator */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-64 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none my-2 group"
            >
              {/* 3D TURNTABLE PERFUME BOTTLE WITH Y-AXIS ROTATION */}
              <div
                className="relative flex flex-col items-center justify-center transition-transform duration-75 z-10"
                style={{
                  transform: `rotateY(${rotation}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 3D Bottle Cap */}
                <div className="relative w-12 h-10 rounded-t-xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 shadow-md flex items-center justify-center border border-amber-300">
                  <div className="w-8 h-2 bg-amber-100/60 rounded-full" />
                </div>

                {/* 3D Gold Neck Ring */}
                <div className="w-10 h-3 bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-200 shadow-inner my-0.5 rounded-sm border-t border-b border-amber-300" />

                {/* 3D Crystal Perfume Body */}
                <div className={`relative w-28 h-36 rounded-3xl bg-gradient-to-tr ${activeTheme.bg} shadow-2xl border-2 border-white/40 p-3 flex flex-col items-center justify-between backdrop-blur-md overflow-hidden`}>
                  
                  {/* Glass Reflection Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Facet Light Beam */}
                  <div className="absolute -top-10 -left-10 w-20 h-40 bg-white/20 transform rotate-45 pointer-events-none" />

                  {/* Gold Foil Metallic Label */}
                  <div className="relative z-10 w-full h-14 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300 rounded-xl border border-amber-400 shadow-md flex flex-col items-center justify-center px-1 text-center mt-4">
                    <span className="text-[9px] font-black tracking-widest text-neutral-900 uppercase leading-none">
                      {activeTheme.label}
                    </span>
                    <span className="text-[7px] font-semibold text-neutral-700 tracking-wider mt-1">
                      EAU DE PARFUM
                    </span>
                  </div>

                  {/* Bottom Fluid Glow */}
                  <div className="w-16 h-3 bg-white/20 rounded-full blur-sm mb-1" />
                </div>

                {/* Floor Shadow */}
                <div className="w-24 h-3 bg-black/30 rounded-full blur-sm transform translate-y-2" />
              </div>

              {/* Interactive Half-Circle Arc Rotator (Replaced pill badge) */}
              <div className="absolute bottom-1 inset-x-4 h-14 flex items-center justify-center pointer-events-auto">
                <svg viewBox="0 0 200 60" className="w-full h-14 overflow-visible">
                  {/* Dashed Half Circle Arc */}
                  <path
                    d="M 20 50 A 80 30 0 0 1 180 50"
                    fill="none"
                    stroke="#525252"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                  {/* Interactive Rotating Slider Handle along Half Circle Arc */}
                  <g
                    transform={`translate(${100 + 80 * Math.cos(((rotation - 90) * Math.PI) / 180)}, ${
                      50 + 30 * Math.sin(((rotation - 90) * Math.PI) / 180)
                    })`}
                    className="cursor-pointer hover:scale-125 transition-transform"
                  >
                    <circle r="12" fill="#000000" className="shadow-lg" />
                    <circle r="10" fill="#10b981" />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      360°
                    </text>
                  </g>
                </svg>
              </div>

              {/* Floating Shopping Bag Badge */}
              <button className="absolute bottom-2 right-2 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20">
                🛍️
              </button>
            </div>

            {/* Product Info Card */}
            <div className="bg-white rounded-3xl p-4 space-y-3 shadow-lg border border-neutral-100">
              <div>
                <h3 className="text-base font-extrabold text-neutral-900">{activeTheme.label}</h3>
                <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                  Handcrafted crystal bottle with interactive half-circle 360° turntable controls.
                </p>
              </div>

              {/* Price & Quantity Selector */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black text-neutral-900">$220</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-neutral-100 text-neutral-700 rounded-md">
                    -5%
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-2 py-1 text-xs font-bold">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-5 h-5 flex items-center justify-center text-neutral-600 hover:text-black"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-5 h-5 flex items-center justify-center text-neutral-600 hover:text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buy Now CTA */}
              <button className="w-full py-2.5 bg-black text-white text-xs font-extrabold rounded-full hover:bg-neutral-800 transition-colors shadow-md">
                Buy for ${220 * quantity}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default OffersLimitedTime2;
