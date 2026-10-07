import React from 'react';

interface PlaceholderProps {
  categoryName: string;
  variantNumber: number;
}

export function BlogPlaceholder({ categoryName, variantNumber }: PlaceholderProps) {
  const formattedVariant = variantNumber.toString().padStart(2, '0');
  
  return (
    <div className="w-full py-16 px-6 bg-slate-950 text-white font-sans border-y border-slate-800 rounded-3xl my-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="inline-block px-4 py-1.5 bg-slate-900 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest rounded-full border border-slate-700">
          {categoryName} • PLACEHOLDER {formattedVariant}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
          {categoryName} — Variant {formattedVariant}
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Placeholder layout reserved for {categoryName} variant {formattedVariant}. Ready for implementation.
        </p>
      </div>
    </div>
  );
}

export default BlogPlaceholder;
