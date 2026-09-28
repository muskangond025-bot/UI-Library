import React, { useState } from 'react';
import { Plus, X, ShoppingCart } from 'lucide-react';

export default function ProductPurchaseSection13({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative h-[80vh] bg-white overflow-hidden font-sans">
      <img src={data.image} alt={data.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
      
      {/* Floating Action Button */}
      <button 
        onClick={() => setOpen(true)}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      >
        <Plus size={32} className="text-black" />
        <span className="absolute -bottom-8 whitespace-nowrap text-white font-bold drop-shadow-md uppercase tracking-widest text-sm">Discover</span>
      </button>

      {/* Drawer Overlay */}
      <div className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl p-8 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setOpen(false)} className="self-end p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors mb-8">
          <X size={20} />
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
        <p className="text-2xl text-gray-500 mb-8">{data.price}</p>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-widest text-sm">Key Specs</h3>
          <ul className="space-y-4">
            {data.specs.map((spec: string, idx: number) => (
              <li key={idx} className="flex items-center gap-3 text-gray-600 pb-4 border-b border-gray-200 last:border-0">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="w-full py-4 bg-black text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg active:scale-95">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}