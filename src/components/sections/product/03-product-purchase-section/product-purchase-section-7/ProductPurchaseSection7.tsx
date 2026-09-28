import React from 'react';

export default function ProductPurchaseSection7({ data }: { data: any }) {
  return (
    <div className="w-full bg-white relative font-sans">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Scrollable Images */}
        <div className="w-full lg:w-1/2 space-y-2 p-2">
          {data.images.map((img: string, idx: number) => (
            <div key={idx} className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-50">
              <img src={img} alt="Product" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Right: Sticky Details */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center lg:sticky lg:top-0 lg:h-screen">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <p className="text-2xl text-gray-500 mb-12">{data.price}</p>
            
            <div className="space-y-6 mb-12">
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  A minimalist task light engineered for creative spaces. Features adjustable color temperature and a precision-machined aluminum arm.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Details</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Integrated LED (50,000 hr lifespan)</li>
                  <li>Touch-sensitive dimming</li>
                  <li>Weighted base with USB-C port</li>
                </ul>
              </div>
            </div>
            
            <button className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:translate-y-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}