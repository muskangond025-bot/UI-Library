import React from 'react';

export function AccountAddressBook18() {
  return (
    <section className="w-full min-h-[600px] bg-stone-900 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-stone-800 pb-8 mb-12">
          <h1 className="text-5xl font-light tracking-tight text-white uppercase">LOCATIONS // N°01</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 bg-stone-800/40 p-8 border border-stone-700/50 rounded-2xl">
            <span className="text-xs uppercase font-sans tracking-widest text-stone-400">PRIMARY</span>
            <h2 className="text-3xl font-serif text-white mt-2">742 EVERGREEN TERRACE</h2>
            <p className="font-sans text-sm text-stone-300 mt-4 leading-relaxed">
              SPRINGFIELD, ILLINOIS 62704<br />
              RECIPIENT: ALEX MORGAN
            </p>
          </div>

          <div className="md:col-span-5 bg-stone-800/20 p-8 border border-stone-800 rounded-2xl">
            <span className="text-xs uppercase font-sans tracking-widest text-stone-400">SECONDARY</span>
            <h2 className="text-xl font-serif text-white mt-2">100 INNOVATION WAY</h2>
            <p className="font-sans text-xs text-stone-400 mt-2">
              SAN FRANCISCO, CA 94105
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook18;
