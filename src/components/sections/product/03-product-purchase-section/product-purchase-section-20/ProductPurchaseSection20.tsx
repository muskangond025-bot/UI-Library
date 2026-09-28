import React, { useState } from 'react';
import { RotateCw, ShoppingBag } from 'lucide-react';

export default function ProductPurchaseSection20({ data }: { data: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full bg-[#0f172a] py-24 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Flip Card Container */}
          <div className="w-full lg:w-1/2 perspective-1000">
            <div className={`relative w-full max-w-sm mx-auto aspect-[3/4] transition-transform duration-1000 preserve-3d cursor-pointer shadow-2xl rounded-2xl ${flipped ? 'rotate-y-180' : ''}`} onClick={() => setFlipped(!flipped)}>
              
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                <img src={data.imageFront} alt="Front" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2 text-white">
                  <RotateCw size={20} className="animate-spin-slow" />
                </div>
              </div>
              
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-800 rounded-2xl border border-gray-600 overflow-hidden">
                <img src={data.imageBack} alt="Back" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <p className="text-white font-mono text-sm">BOX CONTENTS:<br/>1. Core Unit<br/>2. Art Book<br/>3. Certificate of Authenticity</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-500/30">
              Limited Edition
            </div>
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{data.name}</h1>
            <p className="text-xl text-gray-400 mb-8">{data.description}</p>
            <p className="text-4xl font-black text-white mb-12">{data.price}</p>
            
            <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-3">
              <ShoppingBag size={24} />
              Add to Collection
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
      `}</style>
    </div>
  );
}