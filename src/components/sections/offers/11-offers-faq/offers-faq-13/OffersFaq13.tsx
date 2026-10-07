import React, { useState } from 'react';

interface OrbitNode {
  id: string;
  label: string;
  question: string;
  answer: string;
  angle: number;
}

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: {
      heading?: string;
      nodes?: OrbitNode[];
    };
    styles?: Record<string, any>;
  };
}

const DEFAULT_NODES: OrbitNode[] = [
  { id: '1', label: 'ELIGIBILITY', question: 'How do I check if my order is eligible?', answer: 'Eligibility evaluates live in cart subtotal tracking.', angle: 0 },
  { id: '2', label: 'USAGE', question: 'Where do I enter promotional voucher codes?', answer: 'Enter voucher codes at checkout payment authorization.', angle: 60 },
  { id: '3', label: 'EXPIRY', question: 'What happens when a voucher timer expires?', answer: 'Codes must be redeemed prior to timer expiration.', angle: 120 },
  { id: '4', label: 'PAYMENT', question: 'Can I combine bank cashback with sales?', answer: 'Bank rebates stack automatically at payment gateway.', angle: 180 },
  { id: '5', label: 'SHIPPING', question: 'What is the free express shipping threshold?', answer: 'Free air delivery activates on $49+ subtotals.', angle: 240 },
  { id: '6', label: 'RETURNS', question: 'How are refunds handled for promo items?', answer: 'Refunds calculate on net price paid after offer allocation.', angle: 300 }
];

export function OffersFaq13({ section }: SectionProps) {
  const settings = section?.settings || {};
  const heading = settings.heading || 'Circular Offer FAQ Navigator';
  const nodes = settings.nodes || DEFAULT_NODES;

  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeNode = nodes[activeIdx] || nodes[0];

  return (
    <section className="w-full py-16 px-4 bg-slate-950 font-sans text-white border-y border-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
            Design: Circular FAQ Navigator • Animation: 360° Rotational Orbit & Center Crossfade
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{heading}</h2>
        </div>

        {/* Circular Radial Canvas */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-800 animate-[spin_60s_linear_infinite]" />

          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 border-2 border-cyan-500/50 p-4 flex flex-col items-center justify-center text-center shadow-2xl relative z-10 space-y-1">
            <span className="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-widest">{activeNode.label}</span>
            <h3 className="text-xs font-bold text-white leading-snug">{activeNode.question}</h3>
          </div>

          {nodes.map((node, idx) => {
            const isActive = activeIdx === idx;
            const radius = 140;
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <button
                key={node.id}
                onClick={() => setActiveIdx(idx)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-[10px] uppercase transition-all duration-300 z-20 ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 border-white shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-125'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600'
                }`}
              >
                {node.label.slice(0, 4)}
              </button>
            );
          })}
        </div>

        {/* Selected Topic Details Box */}
        <div className="max-w-md mx-auto bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-2 shadow-xl">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">{activeNode.label} ANSWER</span>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">{activeNode.answer}</p>
        </div>

      </div>
    </section>
  );
}

export default OffersFaq13;
