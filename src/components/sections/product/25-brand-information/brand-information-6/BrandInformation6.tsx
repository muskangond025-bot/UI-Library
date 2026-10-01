import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin } from 'lucide-react';

export default function BrandInformation6({ data }: { data: any }) {
  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-amber-400 uppercase">{data?.eyebrow || 'GEOGRAPHIC ORIGIN'}</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">{data?.heading || 'Rooted in Milanese Architecture'}</h2>
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center gap-3 text-xs font-mono text-amber-300">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>{data?.coordinates || '45.4642° N, 9.1900° E'} • {data?.locationName || 'Milan & Biella, Italy'}</span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">{data?.regionHistory}</p>
          </div>

          <div className="lg:col-span-6 h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
            <img src={data?.originImage || "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80"} alt="Origin" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
