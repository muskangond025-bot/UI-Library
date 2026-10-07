import React, { useState, useEffect } from 'react';
import { Heart, Share2, ShoppingBag, ChevronLeft, ChevronRight, Sparkles, Clock, Star, ArrowRight } from 'lucide-react';

interface OfferProduct {
  id: number;
  title: string;
  subtitle: string;
  offerTag: string;
  validity: string;
  price: string;
  originalPrice: string;
  image: string;
  likes: number;
  bgGradient: string;
  accentColor: string;
  badge: string;
  description: string;
}

const PRODUCTS: OfferProduct[] = [
  {
    id: 1,
    title: "Weekend Coffee Ritual",
    subtitle: "Artisanal Brew & Special Cream",
    offerTag: "20% OFF",
    validity: "Valid only for Saturday & Sunday",
    price: "$9.99",
    originalPrice: "$12.50",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1000&auto=format&fit=crop",
    likes: 128,
    bgGradient: "from-amber-900/40 via-amber-950 to-stone-950",
    accentColor: "#d97706",
    badge: "WEEKEND SPECIAL",
    description: "Indulge in rich double-roasted espresso topped with creamy vanilla drizzle."
  },
  {
    id: 2,
    title: "Matcha Latte Supreme",
    subtitle: "Organic Japanese Uji Tea",
    offerTag: "FLAT 30% OFF",
    validity: "Limited Stock • Next 48 Hours",
    price: "$11.20",
    originalPrice: "$16.00",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=1000&auto=format&fit=crop",
    likes: 254,
    bgGradient: "from-emerald-950 via-teal-950 to-stone-950",
    accentColor: "#059669",
    badge: "FLASH SALE",
    description: "Ceremonial grade organic matcha whisked fresh with oat milk and honey."
  },
  {
    id: 3,
    title: "Iced Berry Fusion",
    subtitle: "Wild Berries & Cold Foam",
    offerTag: "BUY 1 GET 1",
    validity: "Special Happy Hours 2PM - 6PM",
    price: "$7.50",
    originalPrice: "$15.00",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop",
    likes: 412,
    bgGradient: "from-rose-950 via-purple-950 to-stone-950",
    accentColor: "#e11d48",
    badge: "BOGO DEAL",
    description: "Refreshing crushed strawberries and blackberries shaken with sparkling tonic."
  },
  {
    id: 4,
    title: "Dark Chocolate Mocha",
    subtitle: "70% Belgian Cocoa Blend",
    offerTag: "25% OFF",
    validity: "Midweek Boost Exclusive",
    price: "$8.99",
    originalPrice: "$11.99",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop",
    likes: 319,
    bgGradient: "from-stone-900 via-amber-950 to-black",
    accentColor: "#b45309",
    badge: "BEST SELLER",
    description: "Rich dark cocoa melted into steamed espresso with shaved chocolate curls."
  }
];

export function OffersLimitedTime4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    PRODUCTS.forEach((p) => {
      initial[p.id] = p.likes;
    });
    return initial;
  });

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const toggleLike = (id: number) => {
    setIsLiked((prev) => {
      const current = !!prev[id];
      setLikeCounts((counts) => ({
        ...counts,
        [id]: current ? counts[id] - 1 : counts[id] + 1
      }));
      return { ...prev, [id]: !current };
    });
  };

  const getProductAtOffset = (offset: number) => {
    const index = (currentIndex + offset + PRODUCTS.length) % PRODUCTS.length;
    return { product: PRODUCTS[index], realIndex: index };
  };

  const prevItem = getProductAtOffset(-1);
  const currentItem = getProductAtOffset(0);
  const nextItem = getProductAtOffset(1);

  return (
    <div className="w-full min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans antialiased text-white overflow-hidden relative">
      
      {/* Dynamic Background Glow derived from active product */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${currentItem.product.accentColor}, transparent 70%)`
        }}
      />

      {/* Header Info */}
      <div className="relative z-10 max-w-3xl text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span>AUTOPLAY • 3 SECONDS ROTATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">
          Mobile App Showcase
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
          Interactive mobile mockup featuring 3D peek carousel cards with automatic 3-second transitions.
        </p>
      </div>

      {/* Carousel Container with Left/Right Navigation */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-center min-h-[580px]">
        
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Offer"
          className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Offer"
          className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white shadow-2xl backdrop-blur-md transition-transform hover:scale-110 active:scale-95 focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* 3D Phone & Side Cards Stage */}
        <div className="relative w-full max-w-4xl flex items-center justify-center py-6">

          {/* LEFT SIDE PRODUCT (PEEK PREVIEW) */}
          <div 
            onClick={() => setCurrentIndex(prevItem.realIndex)}
            className="hidden md:block absolute left-4 lg:left-12 z-10 w-[270px] cursor-pointer transform -rotate-6 scale-90 opacity-60 hover:opacity-90 hover:scale-95 transition-all duration-700 ease-out filter brightness-75 hover:brightness-100"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-3">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src={prevItem.product.image} 
                  alt={prevItem.product.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-black text-[10px] font-black rounded-md shadow">
                  {prevItem.product.offerTag}
                </div>
              </div>
              <div className="mt-3 px-1 text-center">
                <h4 className="font-bold text-sm text-amber-200 truncate">{prevItem.product.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{prevItem.product.validity}</p>
              </div>
            </div>
          </div>

          {/* CENTER MOBILE MOCKUP CONTAINER */}
          <div className="relative z-30 w-[310px] sm:w-[350px] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-[6px] border-stone-800 ring-1 ring-white/20">
            
            {/* Phone Screen Frame */}
            <div className="relative w-full bg-stone-950 rounded-[38px] overflow-hidden flex flex-col border border-stone-800">
              
              {/* Phone Top Notch / Camera & Header */}
              <div className="bg-stone-900/90 backdrop-blur-md px-5 pt-3 pb-2 flex items-center justify-between border-b border-stone-800/60 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-stone-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-200">Explore Offers</span>
                </div>

                {/* Speaker / Punch Hole camera */}
                <div className="w-3.5 h-3.5 rounded-full bg-black ring-2 ring-stone-700" />

                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px]">3s Auto</span>
                </div>
              </div>

              {/* Main Product Card inside Mobile Screen */}
              <div className="relative p-3.5 flex flex-col justify-between min-h-[480px]">
                
                {/* Active Product Image Box with Instagram/Promo Layout */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
                  <div className="relative aspect-square w-full">
                    <img 
                      key={currentItem.product.id}
                      src={currentItem.product.image} 
                      alt={currentItem.product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                    {/* Offer Tag Banner overlay */}
                    <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
                      <span className="px-2.5 py-1 bg-amber-500 text-black text-[10px] font-extrabold tracking-wider uppercase rounded-md shadow-lg">
                        {currentItem.product.offerTag}
                      </span>
                      <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-amber-300 text-[9px] font-semibold rounded border border-amber-400/30">
                        {currentItem.product.badge}
                      </span>
                    </div>

                    {/* Order Now Callout */}
                    <button className="absolute top-3 right-3 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-xs rounded-full shadow-lg flex items-center gap-1 transition-transform active:scale-95">
                      <span>Order now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {/* Product Name Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-black text-white leading-tight drop-shadow-md">
                        {currentItem.product.title}
                      </h3>
                      <p className="text-[11px] text-amber-200/90 font-medium">
                        {currentItem.product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Promo Banner Strip inside card */}
                  <div className="bg-amber-600 text-black text-center text-[10px] font-extrabold py-1 px-2 tracking-wide uppercase">
                    {currentItem.product.validity}
                  </div>
                </div>

                {/* Social Actions (Like, Share, Bookmark) & Price */}
                <div className="mt-3 px-1 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => toggleLike(currentItem.product.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-rose-500 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 transition-transform ${isLiked[currentItem.product.id] ? 'fill-rose-500 text-rose-500 scale-110' : 'text-slate-300'}`} 
                        />
                        <span>{likeCounts[currentItem.product.id]}</span>
                      </button>

                      <button className="text-slate-300 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through mr-1.5">
                        {currentItem.product.originalPrice}
                      </span>
                      <span className="text-base font-black text-amber-400">
                        {currentItem.product.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {currentItem.product.description}
                  </p>

                  {/* Pagination Dots */}
                  <div className="pt-2 flex items-center justify-center gap-1.5">
                    {PRODUCTS.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? 'w-6 bg-amber-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                  </div>

                </div>

                {/* Mobile Bottom Bar Navigation */}
                <div className="mt-3 pt-2 border-t border-stone-800 flex justify-around text-slate-400 text-xs">
                  <button className="flex flex-col items-center gap-0.5 text-amber-400">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-[9px] font-bold">Offers</span>
                  </button>
                  <button className="flex flex-col items-center gap-0.5 hover:text-slate-200">
                    <Star className="w-4 h-4" />
                    <span className="text-[9px]">Featured</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT (PEEK PREVIEW) */}
          <div 
            onClick={() => setCurrentIndex(nextItem.realIndex)}
            className="hidden md:block absolute right-4 lg:right-12 z-10 w-[270px] cursor-pointer transform rotate-6 scale-90 opacity-60 hover:opacity-90 hover:scale-95 transition-all duration-700 ease-out filter brightness-75 hover:brightness-100"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-stone-900 to-stone-950 p-3">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <img 
                  src={nextItem.product.image} 
                  alt={nextItem.product.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-2 right-2 px-2 py-1 bg-amber-500 text-black text-[10px] font-black rounded-md shadow">
                  {nextItem.product.offerTag}
                </div>
              </div>
              <div className="mt-3 px-1 text-center">
                <h4 className="font-bold text-sm text-amber-200 truncate">{nextItem.product.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{nextItem.product.validity}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default OffersLimitedTime4;

