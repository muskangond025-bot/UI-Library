import React from 'react';

export function AccountCouponsOffers15() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">PROMOTIONAL REGISTRY</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">AVAILABLE OFFERS</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">02 OFFERS</span>
        </div>

        <div className="space-y-6 divide-y divide-gray-100">
          <div className="pb-6 flex justify-between items-center">
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-1">01 // CODE: SAVE500</span>
              <h3 className="text-2xl font-light text-gray-900">₹500 DISCOUNT VOUCHER</h3>
            </div>
            <span className="text-xs font-mono font-bold border border-gray-900 px-4 py-2 uppercase">COPY CODE</span>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <div>
              <span className="text-xs font-mono text-gray-400 block mb-1">02 // CODE: FREESHIP</span>
              <h3 className="text-2xl font-light text-gray-900">FREE GLOBAL FREIGHT</h3>
            </div>
            <span className="text-xs font-mono font-bold border border-gray-900 px-4 py-2 uppercase">COPY CODE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers15;
