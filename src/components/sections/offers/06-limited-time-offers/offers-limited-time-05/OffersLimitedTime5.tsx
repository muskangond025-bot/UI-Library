import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, ShieldCheck, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

interface LuxuryProduct {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  specifications: string[];
}

const LUXURY_OFFERS: LuxuryProduct[] = [
  {
    id: 1,
    title: "Aurora Cristal Eau de Parfum",
    subtitle: "50ml • Hand-cut Crystal Vessel & Pure Golden Elixir",
    tagline: "ANTIGRAVITY ZERO-G EDITION",
    price: "$295",
    originalPrice: "$420",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    category: "Luxury Fragrance",
    rating: 4.9,
    reviews: 428,
    description: "An ethereal fusion of rare Bulgarian Rose, Italian Bergamot, and Aged Amber. Levitating in weightless crystal composition.",
    specifications: ["50ml Natural Vaporisateur", "Limited Batch No. 042", "24h Long-Lasting Sillage"]
  },
  {
    id: 2,
    title: "Nautilus Horizon Chronograph",
    subtitle: "40mm • Brushed Titanium & Sapphire Crystal",
    tagline: "CHRONO PRECISION",
    price: "$1,850",
    originalPrice: "$2,400",
    discount: "SAVE $550",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Horology",
    rating: 5.0,
    reviews: 312,
    description: "Precision Swiss automatic movement suspended in zero-gravity obsidian studio lighting with reflective glare reduction.",
    specifications: ["Swiss Automatic Calibre", "100m Water Resistant", "Grade 5 Titanium Case"]
  },
  {
    id: 3,
    title: "Onyx Acoustic Masterwork",
    subtitle: "Active Noise Cancelling • Planar Magnetic Drivers",
    tagline: "STUDIO AUDIO",
    price: "$499",
    originalPrice: "$650",
    discount: "23% OFF",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Acoustic Tech",
    rating: 4.9,
    reviews: 580,
    description: "Handcrafted lambskin memory foam earcups floating effortlessly over dark slate studio reflection.",
    specifications: ["Planar Magnetic Transducers", "45-Hour Battery Life", "Lossless Bluetooth 5.3"]
  }
];

export function OffersLimitedTime5() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LUXURY_OFFERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = LUXURY_OFFERS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + LUXURY_OFFERS.length) % LUXURY_OFFERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LUXURY_OFFERS.length);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Studio Lighting Background Environment */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Overhead Key Spotlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-slate-700/20 via-slate-800/10 to-transparent rounded-full blur-3xl" />
        {/* Soft Ambient Warm Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-t from-amber-900/10 via-amber-950/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header Info */}
      <div className="relative z-10 max-w-3xl text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-neutral-300 backdrop-blur-md shadow-2xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="tracking-wider uppercase text-[11px]">Cinematic Zero-Gravity Studio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-serif">
          The Antigravity Collection
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto font-light tracking-wide leading-relaxed">
          Hyper-realistic studio composition featuring zero-G floating luxury assets & diffused contact shadows.
        </p>
      </div>

      {/* Studio Stage */}
      <div className="relative z-10 w-full max-w-5xl bg-neutral-900/40 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
        
        {/* Navigation Arrows - Positioned cleanly outside content margin */}
        <button 
          onClick={handlePrev} 
          aria-label="Previous Product"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button 
          onClick={handleNext}
          aria-label="Next Product" 
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Product Information & Specifications */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 px-2.5 py-1 bg-amber-400/10 border border-amber-400/20 rounded-md">
                  {currentProduct.discount}
                </span>
                <span className="text-xs text-neutral-400 font-light">
                  {currentProduct.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-normal text-white leading-snug">
                {currentProduct.title}
              </h1>

              <p className="text-xs text-neutral-400 font-light tracking-wide">
                {currentProduct.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {currentProduct.description}
            </p>

            {/* Specifications Bullet List */}
            <div className="space-y-1.5 pt-1 border-t border-white/5 text-left max-w-md mx-auto lg:mx-0">
              {currentProduct.specifications.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Price & Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-white">{currentProduct.price}</span>
                <span className="text-sm text-neutral-500 line-through font-light">{currentProduct.originalPrice}</span>
              </div>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="px-8 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Acquire Product</span>
              </button>
            </div>
          </div>

          {/* Right Column: Zero-Gravity Levitating Product Display */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 relative min-h-[380px]">
            
            {/* FLOATING ZERO-G CONTAINER WITH LEVITATION ANIMATION */}
            <div className="relative w-64 sm:w-80 aspect-square flex items-center justify-center">
              
              {/* Soft Radial Backlight */}
              <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent blur-2xl rounded-full" />

              {/* Levitating Product Image */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 animate-[bounce_6s_ease-in-out_infinite] transform transition-transform duration-700 hover:scale-105">
                <img 
                  key={currentProduct.id}
                  src={currentProduct.image} 
                  alt={currentProduct.title}
                  className="w-full h-full object-cover filter contrast-105 brightness-95" 
                />
                
                {/* Subtle Lens Flare Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Realistic Diffused Contact Shadow floating underneath */}
              <div className="absolute -bottom-8 w-56 h-6 bg-black/80 rounded-full blur-md transform scale-90 animate-[pulse_6s_ease-in-out_infinite]" />
            </div>

          </div>

        </div>

        {/* Bottom Pagination Indicators */}
        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-center gap-2">
          {LUXURY_OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Select item ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

      </div>

      {/* LUXURY ACQUISITION DRAWER */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#121216] border border-white/10 text-white rounded-3xl p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img src={currentProduct.image} alt={currentProduct.title} className="w-20 h-20 rounded-xl object-cover border border-white/10" />
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400">{currentProduct.category}</span>
                <h4 className="text-base font-serif text-white mt-0.5">{currentProduct.title}</h4>
                <span className="text-sm font-serif text-neutral-300">{currentProduct.price}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {currentProduct.description}
            </p>

            <div className="pt-2 border-t border-white/5 space-y-3">
              <button
                onClick={() => {
                  setAddedToCart(true);
                  setTimeout(() => {
                    setAddedToCart(false);
                    setIsDrawerOpen(false);
                  }, 1500);
                }}
                className={`w-full py-3 text-xs font-bold tracking-widest uppercase rounded-full shadow-xl flex items-center justify-center gap-2 transition-all ${
                  addedToCart ? 'bg-emerald-600 text-white' : 'bg-white text-black hover:bg-neutral-200'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Confirm Order</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Complimentary Insured Worldwide Shipping & Authenticity Certificate</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default OffersLimitedTime5;

