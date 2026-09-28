import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

export default function ProductPurchaseSection6({ data }: { data: any }) {
  return (
    <div className="w-full bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Image Bento */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] overflow-hidden shadow-sm relative group aspect-[4/3] lg:aspect-auto">
            <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full font-bold text-sm">
              New Release
            </div>
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Heart size={20} className="text-gray-600 hover:text-red-500 transition-colors" />
            </button>
          </div>
          
          {/* Details Bento */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex-1 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
              <p className="text-4xl font-black text-indigo-600 mb-6">{data.price}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> In Stock - Ships Today
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-[2rem] p-8 shadow-xl text-white transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer flex flex-col justify-between group">
              <div className="mb-6">
                <ShoppingCart size={32} className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold">Add to Cart</h3>
              </div>
              <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                <span className="text-gray-400 text-sm">Secure Checkout</span>
                <span className="font-mono bg-white/10 px-3 py-1 rounded text-sm group-hover:bg-indigo-500 transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}