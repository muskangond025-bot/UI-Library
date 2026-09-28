import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductPurchaseSection19({ data }: { data: any }) {
  return (
    <div className="w-full bg-white text-black font-mono border-t border-b border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 border-r border-black flex flex-col justify-between">
          <div className="p-8 border-b border-black">
            <h1 className="text-5xl font-black uppercase tracking-tighter">{data.name}</h1>
          </div>
          
          <div className="flex-1 p-16 flex items-center justify-center bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2YwZjBmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')]">
            <img src={data.image} alt={data.name} className="max-w-full h-auto grayscale contrast-125 border border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all duration-300" />
          </div>
        </div>
        
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="p-8 border-b border-black flex justify-between items-end">
            <span className="text-sm uppercase tracking-widest text-gray-500">Retail Price</span>
            <span className="text-4xl font-bold">{data.price}</span>
          </div>
          
          <div className="flex-1 p-8">
            <ul className="space-y-4">
              {data.details.map((det: string, idx: number) => (
                <li key={idx} className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="uppercase text-sm">SPEC_{idx + 1}</span>
                  <span className="font-bold">{det}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full p-8 bg-black text-white text-xl font-bold uppercase flex justify-between items-center hover:bg-gray-900 transition-colors group">
            <span>Proceed to Checkout</span>
            <ArrowRight className="transform group-hover:translate-x-4 transition-transform duration-300" />
          </button>
        </div>
        
      </div>
    </div>
  );
}