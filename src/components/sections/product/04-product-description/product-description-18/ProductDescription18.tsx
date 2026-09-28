import React from 'react';

export default function ProductDescription18({ data }: { data: any }) {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center py-24 px-4 font-sans relative overflow-hidden">
      {/* Background with slow zoom */}
      <div className="absolute inset-0">
        <img src="https://picsum.photos/seed/bg18/1920/1080" alt="Background" className="w-full h-full object-cover opacity-40 scale-100 hover:scale-110 transition-transform duration-[20s]" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">Precision Engineered.</h2>
          <p className="text-xl text-gray-400 font-light">Hover to explore the architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.cards.map((card: any, idx: number) => {
            const gradientColors = [
              "from-blue-600/30",
              "from-indigo-600/30",
              "from-purple-600/30"
            ];
            const gradient = gradientColors[idx % gradientColors.length];

            return (
              <div 
                key={idx} 
                className="group relative h-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 overflow-hidden cursor-pointer hover:bg-white/20 hover:-translate-y-4 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${gradient} to-transparent`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-auto transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    0{idx + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{card.title}</h3>
                    <div className="h-0 overflow-hidden group-hover:h-24 transition-all duration-500 ease-out">
                      <p className="text-gray-300 mt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}