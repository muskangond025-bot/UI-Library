import React, { useState } from 'react';

export default function RecommendedProducts16({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-12 px-8 bg-white font-sans text-center my-4">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
        ONE MORE THING...
      </span>
      <h3 className="text-2xl font-serif text-slate-900 mb-2">Silk Pocket Square — Italian Twill</h3>
      <p className="text-xs font-mono text-slate-500 mb-6">₹499 • Designed to complete your tailored blazer</p>
      
      <button 
        onClick={() => setAdded(!added)}
        className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
      >
        {added ? "✓ Added To Cart" : "+ Add To Cart (₹499)"}
      </button>
    </div>
  );
}