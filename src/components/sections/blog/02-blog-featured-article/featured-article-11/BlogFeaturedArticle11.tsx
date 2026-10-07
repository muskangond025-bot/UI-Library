import React from 'react';

export function BlogFeaturedArticle11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-10 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-6xl mx-auto bg-stone-950 border border-stone-800 rounded-2xl p-8 sm:p-12 shadow-[10px_10px_0px_#1c1917] relative">
        <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded-md shadow-md">
          SKEUOMORPHIC NOTE #11
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">
            {settings.title || 'TACTILE SKEUOMORPHIC JOURNAL & NOTE DESIGN'}
          </h2>
          <p className="text-stone-400 text-base leading-relaxed font-sans">
            {settings.excerpt || 'Bringing organic paper fold textures, embossed margins, and classic editorial weight into modern layouts.'}
          </p>
          <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
            <span>Elena Rostova • OCT 2026</span>
            <button className="underline text-amber-400 font-bold">Open Journal Note →</button>
          </div>
        </div>
      </div>
    </div>
  );
}