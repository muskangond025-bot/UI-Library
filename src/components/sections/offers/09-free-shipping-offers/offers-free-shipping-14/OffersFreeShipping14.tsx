import React from 'react';
import { Shield, Sparkles, ArrowRight, Truck } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping14({ section }: SectionProps) {
  return (
    <section className="w-full py-20 px-4 bg-emerald-950 font-serif text-white border-y border-emerald-900/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Editorial High-Res Imagery */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/60 aspect-4/3 lg:aspect-auto h-[450px]">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
            alt="Luxury Parcel Delivery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-emerald-950/80 backdrop-blur-md border border-emerald-700/40 font-sans text-xs space-y-1">
            <span className="font-bold text-amber-300 uppercase tracking-widest block text-[10px]">WHITE-GLOVE SERVICE</span>
            <span className="font-bold text-white text-sm block">Direct Temperature-Controlled Transit</span>
            <p className="text-emerald-200/70">Every luxury order is packed in insulated eco-craft boxing.</p>
          </div>
        </div>

        {/* Right Luxury Statement */}
        <div className="space-y-8 font-sans">
          <div className="space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-900 border border-emerald-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
              LUXURY EDITORIAL BANNER
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
              Complimentary White-Glove Shipping On Every Order
            </h2>
            <p className="text-emerald-100/80 text-sm sm:text-base font-sans leading-relaxed">
              Experience zero delivery surcharges with pre-cleared customs, doorstep signatures, and climate-neutral logistics on all complimentary courier dispatches.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 border-y border-emerald-800/80 py-6 text-xs">
            <div className="space-y-1">
              <span className="text-amber-300 font-mono font-bold block text-sm">$0 Delivery Fee</span>
              <p className="text-emerald-200/70">No minimum order threshold for tier members.</p>
            </div>
            <div className="space-y-1">
              <span className="text-amber-300 font-mono font-bold block text-sm">24h Priority Handling</span>
              <p className="text-emerald-200/70">Immediate warehouse queue precedence.</p>
            </div>
          </div>

          <div className="pt-2">
            <button className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-amber-400/20 active:scale-95 transition-all">
              <span>EXPLORE PERKS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping14;
