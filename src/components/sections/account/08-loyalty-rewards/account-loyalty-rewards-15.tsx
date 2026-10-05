import React from 'react';

export function AccountLoyaltyRewards15() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">MEMBERSHIP RECORD</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">LOYALTY PRIVILEGES</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">2,450 PTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400">ACTIVE STATUS</h3>
            <p className="text-5xl font-light text-gray-900">SILVER TIER</p>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              Minimalist loyalty tracking centered around pure typography, restrained layout metrics, and subtle progress rules.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-gray-100">
            <div className="pb-4 flex justify-between items-center font-mono text-xs">
              <span>01 // FREE EXPRESS DELIVERY</span>
              <span className="font-bold">UNLOCKED</span>
            </div>
            <div className="pt-4 flex justify-between items-center font-mono text-xs text-gray-400">
              <span>02 // GOLD CONCIERGE ACCESS</span>
              <span>3,000 PTS NEEDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountLoyaltyRewards15;
