import React, { useState } from 'react';
import { Settings, RefreshCw, ZoomIn } from 'lucide-react';

export default function ProductPurchaseSection5({ data }: { data: any }) {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <div className="w-full bg-gray-50 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10"></div>
          
          {/* 3D Viewer Placeholder */}
          <div className="w-full lg:w-1/2 relative group flex justify-center">
            <div className={`w-full max-w-md aspect-square relative transition-transform duration-1000 ${isRotating ? 'animate-spin-slow' : ''}`}>
              <img src={data.image} alt={data.name} className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
            {/* Viewer Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200 px-6 py-3 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={() => setIsRotating(!isRotating)} className="text-gray-500 hover:text-blue-600 transition-colors">
                <RefreshCw size={20} className={isRotating ? 'animate-spin' : ''} />
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <ZoomIn size={20} />
              </button>
            </div>
          </div>
          
          {/* Configurator Panel */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
              <Settings size={14} /> Custom Builder
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
            <p className="text-gray-500 mb-8">{data.description}</p>
            
            <div className="space-y-6 mb-10">
              <div className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-900">Base Model</span>
                <span className="text-blue-700 font-bold">$699</span>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-600">Add Premium Armrests</span>
                <span className="text-gray-500">+$50</span>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer flex justify-between items-center transition-all">
                <span className="font-semibold text-gray-600">Add Headrest</span>
                <span className="text-gray-500">+$30</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total</p>
                <p className="text-3xl font-bold text-gray-900">{data.price}</p>
              </div>
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
                Build & Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}