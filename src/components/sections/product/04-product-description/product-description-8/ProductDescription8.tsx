import React from 'react';
import { Terminal } from 'lucide-react';

export default function ProductDescription8({ data }: { data: any }) {
  return (
    <div className="w-full bg-[#0d1117] py-24 font-mono text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          {/* Fake Window Header */}
          <div className="bg-[#010409] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-xs text-gray-500 flex items-center gap-2">
              <Terminal size={14} /> system.ts
            </span>
          </div>
          
          {/* Editor Body */}
          <div className="p-8 text-sm md:text-base leading-relaxed overflow-x-auto">
            <div className="text-purple-400 font-bold mb-6">
              function <span className="text-blue-400">{data.funcName}</span> {'{'}
            </div>
            
            <div className="pl-8 space-y-2 mb-6">
              {data.comments.map((c: string, i: number) => (
                <div key={i} className="text-gray-500 italic">{c}</div>
              ))}
            </div>
            
            <div className="pl-8 whitespace-pre text-gray-300">
              {data.code.split('\n').map((line: string, i: number) => {
                // Extremely basic pseudo-syntax highlighting
                const highlighted = line
                  .replace(/const|new|await/g, match => `<span class="text-pink-400">${match}</span>`)
                  .replace(/QuantumEngine/g, '<span class="text-yellow-200">QuantumEngine</span>')
                  .replace(/\d+/g, match => `<span class="text-blue-300">${match}</span>`)
                  .replace(/'[^']*'/g, match => `<span class="text-green-300">${match}</span>`);
                
                return (
                  <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />
                );
              })}
            </div>
            
            <div className="text-purple-400 font-bold mt-6">
              {'}'}
            </div>
            
            <div className="mt-8 flex items-center text-green-400 animate-pulse">
              <span>$ system status: online</span><span className="w-2 h-4 bg-green-400 ml-1"></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}