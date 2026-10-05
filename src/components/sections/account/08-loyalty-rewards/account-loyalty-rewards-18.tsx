import React from 'react';

export function AccountLoyaltyRewards18() {
  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-amber-400 font-bold">L'ÉLITE MEMBERSHIP</span>
          <h1 className="text-4xl sm:text-6xl font-light uppercase tracking-wide">THE PRIVILEGE JOURNAL</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">BALANCE</span>
            <p className="text-5xl font-serif font-light text-white">2,450 <span className="text-xs font-sans text-neutral-400">PTS</span></p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Accumulated through curated acquisitions and editorial engagement.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">CURRENT TIER</span>
            <p className="text-3xl font-serif font-light text-white">SILVER PATRON</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Enjoy complimentary worldwide express delivery & seasonal preview access.</p>
          </div>

          <div className="p-8 bg-neutral-900 rounded-2xl border border-neutral-800 space-y-4">
            <span className="text-xs text-amber-400 uppercase tracking-widest font-bold">NEXT REWARD</span>
            <p className="text-2xl font-serif font-light text-white">$100 VIP GIFT</p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">Unlocks automatically upon reaching Gold status milestone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards18;
