import React from 'react';

export default function ProductPurchaseSection9({ data }: { data: any }) {
  return (
    <div className="w-full bg-white py-12 md:py-24 border-y-8 border-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border-4 border-black">
          {/* Image */}
          <div className="border-b-4 lg:border-b-0 lg:border-r-4 border-black p-8 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjZTBlMGUwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
            <img src={data.image} alt={data.name} className="w-full max-w-md h-auto object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative z-10" />
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-black">{data.name}</h1>
              <div className="inline-block border-2 border-black px-4 py-1 text-2xl font-bold bg-yellow-400 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {data.price}
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full block text-center border-4 border-black py-4 text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors">
                ADD TO CART
              </button>
              <button className="w-full block text-center bg-black text-white py-4 text-2xl font-black uppercase hover:bg-yellow-400 hover:text-black transition-colors">
                BUY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}