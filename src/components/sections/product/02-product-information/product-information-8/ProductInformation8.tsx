import React from 'react';

export default function ProductInformation8({ data }: { data: any }) {
  return (
    <div className="w-full bg-indigo-600 py-24 relative overflow-hidden">
      {/* Abstract background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <div>
              <p className="text-8xl lg:text-9xl font-black tracking-tighter mb-4">{data.stat}</p>
              <h2 className="text-3xl font-bold text-indigo-200 uppercase tracking-widest">{data.label}</h2>
            </div>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-lg">{data.description}</p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl p-2 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
              <img src={data.image} alt={data.label} className="w-full h-auto rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}