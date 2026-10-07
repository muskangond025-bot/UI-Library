import React, { useState } from 'react';
import { ShoppingCart, Plus, Check, Truck, ArrowUpRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping6({ section }: SectionProps) {
  const [subtotal, setSubtotal] = useState<number>(38);
  const target = 50;
  const remaining = Math.max(0, target - subtotal);
  const percent = Math.min(100, Math.round((subtotal / target) * 100));

  const addOns = [
    { id: 'a1', title: 'Organic Cotton Socks (3-Pack)', price: 12, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=300&q=80' },
    { id: 'a2', title: 'Stainless Travel Keychain Multi-tool', price: 15, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80' },
    { id: 'a3', title: 'Natural Matte Lip Balm Duo', price: 14, image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <section className="w-full py-12 px-4 bg-slate-100 font-sans text-slate-900 border-y border-slate-300">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Drawer Style Container */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-xl p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                CART DRAWER ADD-ON UNLOCKER
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {remaining === 0 ? '🎉 Free Shipping Unlocked!' : `Add $${remaining}.00 More to Unlock FREE Delivery`}
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shrink-0">
              <ShoppingCart className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold">Subtotal: ${subtotal}.00</span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
              <span>Current Cart: ${subtotal}</span>
              <span>Free Delivery Goal: ${target}</span>
            </div>
          </div>

          {/* Sub-15 Add-ons Grid */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Quick Add-On Items Under $15:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {addOns.map((item) => (
                <div key={item.id} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200" />
                    <div className="space-y-0.5">
                      <h5 className="font-bold text-xs leading-snug line-clamp-2">{item.title}</h5>
                      <span className="text-xs font-black text-blue-600">${item.price}.00</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubtotal(prev => prev + item.price)}
                    className="w-full py-2 px-3 rounded-lg bg-white hover:bg-blue-600 hover:text-white border border-slate-300 hover:border-blue-600 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Quick Add (+${item.price})</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping6;
