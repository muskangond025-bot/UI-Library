import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingBag } from 'lucide-react';

export default function ProductPurchaseSection1({ data }: { data: any }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [mainImage, setMainImage] = useState(data.images[0]);
  const [qty, setQty] = useState(1);

  return (
    <div className="w-full bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Images */}
          <div className="w-full lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
            <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100 aspect-square relative group">
              <img src={mainImage} alt={data.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible w-full md:w-24 shrink-0">
              {data.images.map((img: string, idx: number) => (
                <button key={idx} onClick={() => setMainImage(img)} className={`relative w-20 md:w-full aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${mainImage === img ? 'border-black' : 'border-transparent hover:border-gray-300'}`}>
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Purchase Details */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(data.rating) ? 'currentColor' : 'none'} className={i < Math.floor(data.rating) ? '' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">{data.rating} ({data.reviews} reviews)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
            <div className="flex items-end gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">{data.price}</span>
              {data.originalPrice && (
                <span className="text-lg text-gray-400 line-through mb-1">{data.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">{data.description}</p>
            
            {/* Colors */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Color</span>
                <span className="text-sm text-gray-500">{data.colors[selectedColor].name}</span>
              </div>
              <div className="flex gap-4">
                {data.colors.map((color: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${selectedColor === idx ? 'ring-2 ring-black ring-offset-2' : 'hover:scale-110'}`}
                  >
                    <span className="w-8 h-8 rounded-full shadow-inner border border-gray-200" style={{ backgroundColor: color.hex }}></span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-full bg-white">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-5 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-l-full transition-colors">-</button>
                <span className="w-8 text-center font-semibold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-5 py-3 text-gray-600 hover:text-black hover:bg-gray-50 rounded-r-full transition-colors">+</button>
              </div>
              <button className="flex-1 bg-black text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <Truck size={24} className="text-gray-400" />
                <span className="text-xs font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <RefreshCw size={24} className="text-gray-400" />
                <span className="text-xs font-medium">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-gray-500">
                <ShieldCheck size={24} className="text-gray-400" />
                <span className="text-xs font-medium">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}