import React from 'react';
import * as Icons from 'lucide-react';

export default function ProductInformation14({ data }: { data: any }) {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-32 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-20">{data.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card: any, idx: number) => {
            const Icon = (Icons as any)[card.icon] || Icons.Box;
            return (
              <div key={idx} className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/30 to-white/5 hover:to-white/30 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-2xl rounded-[23px] p-12 flex flex-col items-center gap-6 h-full shadow-2xl transition-all duration-500 group-hover:bg-white/20">
                  <div className="p-6 bg-white/5 rounded-full border border-white/10 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white tracking-wide">{card.label}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}