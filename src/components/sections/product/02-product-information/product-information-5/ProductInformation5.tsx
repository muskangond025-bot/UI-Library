import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation5({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
          {data.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.specs.map((spec: any, idx: number) => {
            const Icon = (Icons as any)[spec.icon] || Icons.CheckCircle;
            return (
              <div key={idx} className="bg-[#141414] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-gray-400 group-hover:text-white group-hover:bg-gray-800 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">{spec.label}</h3>
                <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                <p className="text-gray-500 text-sm">{spec.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}