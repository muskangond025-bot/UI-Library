import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Truck, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping1({ section }: SectionProps) {
  const [cartTotal, setCartTotal] = useState<number>(45);
  const threshold = 100;
  const isUnlocked = cartTotal >= threshold;
  const progressPercent = Math.min(100, Math.round((cartTotal / threshold) * 100));

  const sampleProducts = [
    { id: 'p1', name: 'Leather Weekend Duffle', price: 35, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80' },
    { id: 'p2', name: 'Minimalist Wireless Headphones', price: 25, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80' },
    { id: 'p3', name: 'Matte Ceramic Travel Tumbler', price: 20, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 bg-yellow-400 font-mono text-slate-950">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Brutalist Header Card */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-4 border-black pb-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-black text-yellow-400 font-bold text-xs uppercase tracking-wider">
                NEO-BRUTALIST UNLOCKER
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                FREE EXPRESS SHIPPING THRESHOLD
              </h2>
              <p className="text-sm text-slate-700 font-sans font-medium max-w-lg">
                Add high-quality premium essentials to your order and unlock 100% free nationwide express delivery.
              </p>
            </div>
            
            {/* Direct Status Badge */}
            <div className="shrink-0">
              {isUnlocked ? (
                <div className="bg-green-400 border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle className="w-8 h-8 mx-auto text-black mb-1" />
                  <span className="font-black text-sm uppercase block">SHIPPING UNLOCKED!</span>
                  <span className="text-xs font-bold font-sans">You saved $15.00 delivery fee</span>
                </div>
              ) : (
                <div className="bg-orange-400 border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Truck className="w-8 h-8 mx-auto text-black mb-1 animate-bounce" />
                  <span className="font-black text-sm uppercase block">${threshold - cartTotal} AWAY</span>
                  <span className="text-xs font-bold font-sans">From zero delivery fee</span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Progress Meter */}
          <div className="pt-6 space-y-3">
            <div className="flex justify-between items-center text-sm font-bold">
              <span>CURRENT CART: ${cartTotal}.00</span>
              <span>FREE SHIPPING TARGET: ${threshold}.00</span>
            </div>
            
            <div className="w-full bg-slate-200 border-4 border-black h-8 relative p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <motion.div 
                className={`h-full border-r-2 border-black transition-all ${isUnlocked ? 'bg-green-400' : 'bg-black'}`}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Slider Control */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="text-xs font-bold uppercase flex items-center gap-2">
                <span>Simulate Cart Subtotal:</span>
                <input 
                  type="range" 
                  min="0" 
                  max="150" 
                  step="5" 
                  value={cartTotal} 
                  onChange={(e) => setCartTotal(Number(e.target.value))}
                  className="accent-black cursor-pointer w-44"
                />
              </label>
              
              <span className="text-xs font-sans font-semibold text-slate-800 bg-yellow-200 border-2 border-black px-3 py-1">
                {progressPercent}% Complete
              </span>
            </div>
          </div>
        </div>

        {/* Quick Add Product Suggestions */}
        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>ADD ITEMS TO FILL REMAINING ${Math.max(0, threshold - cartTotal)}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border-4 border-black p-4 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-3">
                  <div className="w-full h-40 bg-slate-100 border-2 border-black overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-yellow-400 border-2 border-black px-2 py-0.5 text-xs font-bold">
                      +${product.price}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm leading-snug font-sans text-slate-900 line-clamp-2">
                    {product.name}
                  </h4>
                </div>

                <button
                  onClick={() => setCartTotal((prev) => prev + product.price)}
                  className="mt-4 w-full bg-black hover:bg-yellow-400 hover:text-black text-white font-bold py-2.5 px-4 border-2 border-black text-xs uppercase flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-colors"
                >
                  <span>ADD TO CART</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Guarantee */}
        <div className="flex items-center justify-center gap-6 text-xs font-bold font-sans text-slate-900 border-t-2 border-black/20 pt-4">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Guaranteed Courier Delivery</span>
          <span>•</span>
          <span>No Surprise Customs Fees</span>
          <span>•</span>
          <span>Instant Order Tracking</span>
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping1;
