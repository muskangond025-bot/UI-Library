import React, { useState } from 'react';
import { Search, Download, FileText } from 'lucide-react';

export default function BrandInformation20({ data }: { data: any }) {
  const sections = data?.knowledgeSections || [];
  const [query, setQuery] = useState('');

  const filtered = sections.filter((s: any) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-20 px-4 bg-neutral-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{data?.eyebrow || 'KNOWLEDGE BASE'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Master Brand Knowledge Hub'}</h2>
          
          <div className="relative mt-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sustainability reports, ethics code..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((s: any, idx: number) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase">{s.category}</span>
                <h3 className="text-base font-bold text-white mt-1 mb-2">{s.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">{s.description}</p>
              </div>
              <a href={s.downloadLink} className="flex items-center gap-1 text-xs text-amber-400 font-semibold hover:text-amber-300">
                <Download className="w-3.5 h-3.5" /> Download Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
