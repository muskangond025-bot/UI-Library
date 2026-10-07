import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Check, X, ShieldCheck, Tag, Zap, Clock } from 'lucide-react';
import GlareHover from '../offers-limited-time-01/GlareHover';

interface DealProduct {
  id: number;
  badge: string;
  headline: string;
  highlightText: string;
  price: string;
  originalPrice: string;
  saveAmount: string;
  image: string;
  category: string;
  description: string;
  accentBg: string;
  accentText: string;
}

const DEALS: DealProduct[] = [
  {
    id: 1,
    badge: "IT WAS ON",
    headline: "BLACK FRIDAY",
    highlightText: "DEAL",
    price: "$1499",
    originalPrice: "$1999",
    saveAmount: "SAVE $500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "Sneakers & Streetwear",
    description: "Exclusive Black Friday drop featuring limited edition obsidian kicks with ultra-boost cushioning.",
    accentBg: "bg-pink-500 text-white",
    accentText: "text-pink-500"
  },
  {
    id: 2,
    badge: "FLASH OFFER",
    headline: "CYBER MONDAY",
    highlightText: "SPECIAL",
    price: "$899",
    originalPrice: "$1299",
    saveAmount: "SAVE $400",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Studio Acoustics",
    description: "Pro magnetic planar wireless studio headphones with active ambient noise isolation.",
    accentBg: "bg-yellow-400 text-black",
    accentText: "text-yellow-400"
  },
  {
    id: 3,
    badge: "WEEKEND PASS",
    headline: "HOLIDAY GRAND",
    highlightText: "SAVINGS",
    price: "$1199",
    originalPrice: "$1599",
    saveAmount: "SAVE $400",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Luxury Horology",
    description: "Swiss automatic titanium chronograph with scratch-resistant double-domed sapphire crystal.",
    accentBg: "bg-cyan-400 text-black",
    accentText: "text-cyan-400"
  }
];

export function OffersLimitedTime7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEALS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentDeal = DEALS[currentIndex];

  return (
    <div className="w-full min-h-screen bg-[#0e0e11] text-white font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Studio Glow Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      {/* Top Header Label */}
      <div className="relative z-10 max-w-3xl text-center mb-6 space-y-2">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-pink-500/20 text-pink-400 border border-pink-500/30 backdrop-blur-md shadow-lg">
          <Zap className="w-3.5 h-3.5 text-pink-400 fill-current animate-bounce" />
          <span>REACTBITS GLARE & CONTINUOUS TICKER MARQUEE</span>
        </span>
      </div>

      {/* MAIN BLACK FRIDAY HIGH-CONTRAST STAGE */}
      <div className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-white/10">
        
        {/* ReactBits GlareHover Canvas Wrapper */}
        <GlareHover
          width="100%"
          height="auto"
          background="#0a0a0c"
          borderRadius="24px"
          borderColor="#27272a"
          glareColor="#ffffff"
          glareOpacity={0.45}
          glareAngle={-30}
          glareSize={250}
          transitionDuration={750}
          className="p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Top Brand & Badge Bar */}
          <div className="flex items-center justify-between z-20 relative mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-400 text-black font-black text-xs uppercase tracking-wider rounded-md transform -rotate-3 shadow-md">
                {currentDeal.badge}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold text-slate-200">
              <Clock className="w-3.5 h-3.5 text-pink-500" />
              <span>Rotates Every 3s</span>
            </div>
          </div>

          {/* MAIN HERO CONTENT & HANGING GRAPHIC ELEMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20 my-4">
            
            {/* Left Typography & Hanging Badges */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              <div className="space-y-0 leading-none">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase drop-shadow-md">
                  {currentDeal.headline}
                </h1>
                <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase mt-1 ${currentDeal.accentText} drop-shadow-lg`}>
                  {currentDeal.highlightText}
                </h1>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
                {currentDeal.description}
              </p>

              {/* Price & Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-white">{currentDeal.price}</span>
                  <span className="text-base text-slate-500 line-through font-bold">{currentDeal.originalPrice}</span>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black rounded-md ml-1">
                    {currentDeal.saveAmount}
                  </span>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className={`px-8 py-3.5 ${currentDeal.accentBg} font-black text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-2xl transition-transform transform hover:scale-105 active:scale-95 flex items-center gap-2`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Claim Deal Now</span>
                </button>
              </div>

            </div>

            {/* Right Product Image inside Floating Frame */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <img 
                  key={currentDeal.id}
                  src={currentDeal.image} 
                  alt={currentDeal.headline}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-black">
                  <span className="px-2 py-1 bg-black/70 backdrop-blur-md rounded border border-white/20">{currentDeal.category}</span>
                  <span className="text-amber-300 font-mono text-base">{currentDeal.price}</span>
                </div>
              </div>
            </div>

          </div>

          {/* CONTINUOUS TICKER MARQUEE TAPE AT BOTTOM */}
          <div className="mt-8 pt-4 border-t border-white/10 relative overflow-hidden bg-black/60 backdrop-blur-md rounded-xl py-2.5">
            <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] items-center gap-8 text-xs font-black tracking-widest text-slate-300 uppercase">
              <span className="flex items-center gap-2"><Tag className="w-3.5 h-3.5 text-pink-500" /> LIMITED TIME OFFER</span>
              <span>•</span>
              <span className="text-amber-400">SAVE UP TO $500 ON SELECT ITEMS</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-yellow-400" /> FREE EXPRESS SHIPPING</span>
              <span>•</span>
              <span className="text-pink-400">BLACK FRIDAY DEAL EXCLUSIVE</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Tag className="w-3.5 h-3.5 text-cyan-400" /> LIMITED TIME OFFER</span>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {DEALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to deal ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-pink-500' : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
              />
            ))}
          </div>

        </GlareHover>

      </div>

      {/* CHECKOUT DRAWER MODAL */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-stone-900 text-white rounded-3xl p-6 border border-stone-800 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img src={currentDeal.image} alt={currentDeal.headline} className="w-20 h-20 rounded-xl object-cover border border-white/10" />
              <div>
                <span className="text-[10px] font-mono uppercase text-pink-400">{currentDeal.category}</span>
                <h4 className="text-base font-black text-white mt-0.5">{currentDeal.headline} {currentDeal.highlightText}</h4>
                <span className="text-sm font-black text-amber-400">{currentDeal.price} <span className="text-stone-400 line-through text-xs ml-1">{currentDeal.originalPrice}</span></span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              {currentDeal.description}
            </p>

            <div className="pt-2 border-t border-stone-800 space-y-3">
              <button
                onClick={() => {
                  setAddedToCart(true);
                  setTimeout(() => {
                    setAddedToCart(false);
                    setIsDrawerOpen(false);
                  }, 1500);
                }}
                className={`w-full py-3 text-xs font-black tracking-widest uppercase rounded-full shadow-xl flex items-center justify-center gap-2 transition-all ${
                  addedToCart ? 'bg-emerald-600 text-white' : 'bg-pink-500 hover:bg-pink-400 text-white'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Deal Reserved Successfully</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Confirm Order Now</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Complimentary Insured Shipping • 100% Price Lock Guarantee</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default OffersLimitedTime7;

