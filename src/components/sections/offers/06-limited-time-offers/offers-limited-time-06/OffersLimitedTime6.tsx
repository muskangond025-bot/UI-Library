import React, { useState, useEffect } from 'react';
import { ShoppingBag, Sparkles, Check, X, ShieldCheck } from 'lucide-react';
import GlareHover from '../offers-limited-time-01/GlareHover';

interface PolaroidItem {
  id: number;
  title: string;
  categoryTag: string;
  discountTag: string;
  validityText: string;
  price: string;
  originalPrice: string;
  image1: string;
  image2: string;
  item1Name: string;
  item2Name: string;
  description: string;
}

const BRIGHT_OFFERS: PolaroidItem[] = [
  {
    id: 1,
    title: "HOUSE SALE",
    categoryTag: "NEW ARRIVALS AT 10% OFF",
    discountTag: "THIS WEEK ONLY!",
    validityText: "Exclusive Limited Time Offer",
    price: "$180",
    originalPrice: "$200",
    image1: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    item1Name: "Pointed Leather Mules",
    item2Name: "Structured Tote Bag",
    description: "Handcrafted Italian leather essentials featuring soft warm tones and timeless elegance."
  },
  {
    id: 2,
    title: "AUTUMN VIBES",
    categoryTag: "SELECTED COATS AT 25% OFF",
    discountTag: "LIMITED STOCK!",
    validityText: "Valid Till Sunday Night",
    price: "$340",
    originalPrice: "$450",
    image1: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    item1Name: "Cashmere Trench Coat",
    item2Name: "Leather Shoulder Satchel",
    description: "Premium wool blend outerwear paired with minimal signature accessories for seasonal warmth."
  },
  {
    id: 3,
    title: "SUMMER RETREAT",
    categoryTag: "LUXURY FOOTWEAR FLAT 20% OFF",
    discountTag: "BUY 1 GET 1 50% OFF",
    validityText: "Flash Sale • Next 48 Hours",
    price: "$210",
    originalPrice: "$265",
    image1: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?q=80&w=1000&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    item1Name: "Artisanal Strappy Sandals",
    item2Name: "Woven Beach Carryall",
    description: "Lightweight resort chic collection crafted with natural textures and golden hardware details."
  }
];

export function OffersLimitedTime6() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Auto-switch offers every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BRIGHT_OFFERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentOffer = BRIGHT_OFFERS[currentIndex];

  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] text-[#2c2825] font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Soft Linen Textured Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-3xl" />
      </div>

      {/* Top Editorial Banner */}
      <div className="relative z-10 max-w-3xl text-center mb-8 space-y-2">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-stone-200/60 text-stone-800 border border-stone-300/50 shadow-sm backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
          <span>ReactBits Glare & Floating Polaroid Showcase</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 tracking-tight">
          Editorial Offer Gallery
        </h1>
      </div>

      {/* MAIN BRIGHT STAGE WITH FLOATING POLAROID CARDS & GLARE HOVER */}
      <div className="relative z-10 w-full max-w-5xl bg-white/70 border border-stone-200/80 rounded-3xl p-6 sm:p-12 shadow-[0_20px_70px_rgba(215,195,175,0.25)] backdrop-blur-md">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT POLAROID CARD (Floating with -rotate-6 & GlareHover) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-105">
              <GlareHover
                width="280px"
                height="340px"
                background="#ffffff"
                borderRadius="12px"
                borderColor="#e7e3dc"
                glareColor="#ffffff"
                glareOpacity={0.6}
                glareAngle={-35}
                glareSize={250}
                transitionDuration={700}
                className="shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-3 flex flex-col bg-white"
              >
                <div className="w-full h-60 rounded-lg overflow-hidden bg-stone-100 relative group">
                  <img 
                    src={currentOffer.image1} 
                    alt={currentOffer.item1Name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Top Soft Light Glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none" />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-serif italic text-base text-stone-800">{currentOffer.item1Name}</h4>
                  <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-widest block mt-0.5">Signature Item</span>
                </div>
              </GlareHover>
            </div>

            {/* Left Bottom Tag */}
            <div className="mt-6 text-center">
              <h3 className="font-serif italic text-xl sm:text-2xl text-amber-900 tracking-wider font-medium">
                {currentOffer.discountTag}
              </h3>
            </div>
          </div>

          {/* CENTER EDITORIAL TYPOGRAPHY & CALL TO ACTION */}
          <div className="lg:col-span-4 space-y-6 text-center px-2">
            <div className="space-y-1">
              <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-stone-900 tracking-wide">
                {currentOffer.title}
              </h2>
              <p className="text-xs sm:text-sm font-serif uppercase tracking-widest text-stone-600 font-semibold pt-1">
                {currentOffer.categoryTag}
              </p>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light max-w-xs mx-auto">
              {currentOffer.description}
            </p>

            <div className="pt-2 flex flex-col items-center gap-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-stone-900">{currentOffer.price}</span>
                <span className="text-sm text-stone-400 line-through font-light">{currentOffer.originalPrice}</span>
              </div>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="px-8 py-3 bg-[#2c2825] hover:bg-stone-800 text-white text-xs font-semibold tracking-widest uppercase rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop House Offer</span>
              </button>
            </div>
          </div>

          {/* RIGHT POLAROID CARD (Floating with rotate-6 & GlareHover) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="transform rotate-6 hover:rotate-0 transition-transform duration-500 hover:scale-105">
              <GlareHover
                width="280px"
                height="340px"
                background="#ffffff"
                borderRadius="12px"
                borderColor="#e7e3dc"
                glareColor="#ffffff"
                glareOpacity={0.6}
                glareAngle={-35}
                glareSize={250}
                transitionDuration={700}
                className="shadow-[0_25px_50px_rgba(0,0,0,0.15)] p-3 flex flex-col bg-white"
              >
                <div className="w-full h-60 rounded-lg overflow-hidden bg-stone-100 relative group">
                  <img 
                    src={currentOffer.image2} 
                    alt={currentOffer.item2Name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Soft Directional Light Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/30 via-transparent to-black/10 pointer-events-none" />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-serif italic text-base text-stone-800">{currentOffer.item2Name}</h4>
                  <span className="text-[10px] font-semibold text-amber-800 uppercase tracking-widest block mt-0.5">Featured Pairing</span>
                </div>
              </GlareHover>
            </div>
          </div>

        </div>

        {/* BOTTOM PAGINATION DOTS */}
        <div className="mt-10 pt-4 border-t border-stone-200/60 flex items-center justify-center gap-2">
          {BRIGHT_OFFERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to offer ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-stone-900' : 'w-2 bg-stone-300 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>

      </div>

      {/* SHOPPING DRAWER MODAL */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white text-stone-900 rounded-3xl p-6 shadow-2xl border border-stone-200 space-y-5 animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img src={currentOffer.image1} alt={currentOffer.item1Name} className="w-20 h-20 rounded-xl object-cover border border-stone-200" />
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-800">{currentOffer.validityText}</span>
                <h4 className="text-lg font-serif text-stone-900 mt-0.5">{currentOffer.title}</h4>
                <span className="text-sm font-bold text-stone-800">{currentOffer.price} <span className="text-stone-400 line-through text-xs ml-1">{currentOffer.originalPrice}</span></span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-light">
              {currentOffer.description}
            </p>

            <div className="pt-2 border-t border-stone-200 space-y-3">
              <button
                onClick={() => {
                  setAddedToCart(true);
                  setTimeout(() => {
                    setAddedToCart(false);
                    setIsDrawerOpen(false);
                  }, 1500);
                }}
                className={`w-full py-3 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg flex items-center justify-center gap-2 transition-all ${
                  addedToCart ? 'bg-emerald-700 text-white' : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Confirm Order</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Complimentary House Shipping & Easy Returns</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default OffersLimitedTime6;

