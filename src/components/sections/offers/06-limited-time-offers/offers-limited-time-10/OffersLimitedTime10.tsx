import React, { useState } from 'react';
import { Sparkles, Trophy, ShoppingBag, Check, X, ShieldCheck } from 'lucide-react';

interface WheelSegment {
  label: string;
  code: string;
  color: string;
  bgHex: string;
}

const SEGMENTS: WheelSegment[] = [
  { label: "FLAT 50% OFF", code: "SPIN50OFF", color: "#ec4899", bgHex: "#be185d" },
  { label: "FREE SHIPPING", code: "FREESHIP", color: "#3b82f6", bgHex: "#1d4ed8" },
  { label: "FLAT 30% OFF", code: "SPIN30OFF", color: "#eab308", bgHex: "#a16207" },
  { label: "BUY 1 GET 1", code: "BOGODEAL", color: "#10b981", bgHex: "#047857" },
  { label: "FLAT 40% OFF", code: "SPIN40OFF", color: "#a855f7", bgHex: "#6b21a8" },
  { label: "20% EXTRA", code: "EXTRA20", color: "#f97316", bgHex: "#c2410c" }
];

export function OffersLimitedTime10() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonSegment, setWonSegment] = useState<WheelSegment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonSegment(null);

    // Random spin count + segment selection
    const randomSegmentIndex = Math.floor(Math.random() * SEGMENTS.length);
    const segmentAngle = 360 / SEGMENTS.length;
    // Calculate degree to land at pointer top (270 deg)
    const extraSpins = 5 * 360;
    const targetDegree = extraSpins + (360 - randomSegmentIndex * segmentAngle - segmentAngle / 2);

    setRotation((prev) => prev + targetDegree);

    setTimeout(() => {
      setIsSpinning(false);
      setWonSegment(SEGMENTS[randomSegmentIndex]);
      setIsModalOpen(true);
    }, 4500);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0a10] text-white font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Background Neon Spotlight */}
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header Info */}
      <div className="relative z-10 max-w-2xl text-center mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-pink-500/20 text-pink-300 border border-pink-500/30 backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
          <span>GAMIFIED CASINO NEON WHEEL SPIN</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          Spin to Win Discounts
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
          Spin the fortune wheel to unlock instant guaranteed discount promo codes & free shipping vouchers!
        </p>
      </div>

      {/* WHEEL CONTAINER */}
      <div className="relative z-10 w-full max-w-lg flex flex-col items-center justify-center">
        
        {/* WHEEL TOP POINTER ARROW */}
        <div className="relative z-30 -mb-5 w-8 h-10 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-400 filter drop-shadow-[0_4px_10px_rgba(251,191,36,0.8)]" />
        </div>

        {/* NEON SPIN WHEEL STAGE */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full p-4 bg-stone-900 border-[8px] border-pink-500/40 shadow-[0_0_80px_rgba(236,72,153,0.4)] flex items-center justify-center">
          
          {/* Outer Decorative Bulb Lights */}
          <div className="absolute inset-2 rounded-full border border-pink-400/30 pointer-events-none flex items-center justify-center">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d] animate-pulse"
                style={{
                  transform: `rotate(${i * 30}deg) translate(0, -190px)`
                }}
              />
            ))}
          </div>

          {/* ROTATING WHEEL SVG */}
          <div 
            className="w-full h-full rounded-full overflow-hidden shadow-2xl transition-transform duration-[4500ms] cubic-bezier(0.15, 0.9, 0.2, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {SEGMENTS.map((seg, idx) => {
                const angle = 360 / SEGMENTS.length;
                const startAngle = idx * angle;
                const endAngle = (idx + 1) * angle;

                const x1 = 50 + 50 * Math.cos((Math.PI * startAngle) / 180);
                const y1 = 50 + 50 * Math.sin((Math.PI * startAngle) / 180);
                const x2 = 50 + 50 * Math.cos((Math.PI * endAngle) / 180);
                const y2 = 50 + 50 * Math.sin((Math.PI * endAngle) / 180);

                const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 0 1 ${x2} ${y2} Z`;
                const textAngle = startAngle + angle / 2;

                return (
                  <g key={idx}>
                    <path d={pathData} fill={seg.bgHex} stroke="#18181b" strokeWidth="0.5" />
                    <text
                      x="72"
                      y="50"
                      fill="#ffffff"
                      fontSize="3.2"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textAngle}, 50, 50)`}
                    >
                      {seg.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* CENTER SPIN BUTTON HUB */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="absolute z-40 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl border-4 border-stone-900 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 disabled:opacity-80 cursor-pointer"
          >
            {isSpinning ? "Spinning..." : "SPIN NOW"}
          </button>

        </div>

      </div>

      {/* WINNING POPUP MODAL */}
      {isModalOpen && wonSegment && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-stone-900 border border-pink-500/40 text-white rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-center animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center mx-auto text-pink-400">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">CONGRATULATIONS! YOU WON</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{wonSegment.label}</h3>
            </div>

            <div className="flex items-center justify-center gap-2 bg-black/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 max-w-xs mx-auto">
              <span className="font-mono text-xl font-black text-amber-300 tracking-widest">
                {wonSegment.code}
              </span>
              <button
                onClick={() => handleCopy(wonSegment.code)}
                className="p-2 rounded-xl bg-amber-400 text-black hover:bg-amber-300 transition-colors"
                aria-label="Copy code"
              >
                {copied ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
              </button>
            </div>

            <p className="text-xs text-slate-400 font-medium">
              {copied ? "Promo code copied to clipboard!" : "Copy code & apply at checkout to claim discount"}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-white font-black text-xs tracking-wider uppercase rounded-full shadow-lg transition-transform active:scale-95"
              >
                Claim Discount Now
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
              <span>Offer Auto-Applied at Checkout • Valid for 15 Mins</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default OffersLimitedTime10;

