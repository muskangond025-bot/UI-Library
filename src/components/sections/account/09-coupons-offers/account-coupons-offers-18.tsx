import React from 'react';

export function AccountCouponsOffers18() {
  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-amber-400 font-bold">L'ÉLITE OFFERS</span>
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">THE DISCOUNT EDITION</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">FEATURED DISCOUNTS</span>
            <p className="text-5xl font-serif font-light text-white">₹1,500 <span className="text-xs font-sans text-neutral-400">OFF</span></p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Exclusive patron discount valid on curated luxury outerwear.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">VIP FREIGHT</span>
            <p className="text-4xl font-serif font-light text-white">FREE EXPRESS</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Complimentary priority delivery across all international orders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers18;
