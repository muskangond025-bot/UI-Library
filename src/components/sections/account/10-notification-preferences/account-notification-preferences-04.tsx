import React from 'react';

export function AccountNotificationPreferences4() {
  return (
    <section className="w-full min-h-[650px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900">
          <div>
            <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-1">PREFERENCE REGISTRY</span>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">NOTIFICATION CONTROLS</h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase text-gray-900">SYSTEM READY</span>
        </div>

        <div className="space-y-6 divide-y divide-gray-100">
          <div className="pb-6 flex justify-between items-center font-mono text-xs">
            <div>
              <span className="text-gray-400 block mb-1">01 // TRANSACTIONAL ALERTS</span>
              <h3 className="text-lg font-light text-gray-900 uppercase">ORDER & DELIVERY UPDATES</h3>
            </div>
            <span className="font-bold border border-gray-900 px-4 py-2 uppercase">ENABLED</span>
          </div>

          <div className="pt-6 flex justify-between items-center font-mono text-xs">
            <div>
              <span className="text-gray-400 block mb-1">02 // MARKETING COMMUNICATIONS</span>
              <h3 className="text-lg font-light text-gray-900 uppercase">PROMOTIONS & DISCOUNTS</h3>
            </div>
            <span className="text-gray-400 border border-gray-200 px-4 py-2 uppercase">DISABLED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences4;
