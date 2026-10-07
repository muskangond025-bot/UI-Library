import React, { useState } from 'react';
import { Sparkles, Check, Copy, Ticket, RefreshCw } from 'lucide-react';
import TearTicket from './TearTicket';

interface CouponItem {
  id: number;
  discount: string;
  subText: string;
  title: string;
  dateRange: string;
  condition: string;
  code: string;
  bgColor: string;
  stubBg: string;
}

const COUPONS: CouponItem[] = [
  {
    id: 1,
    discount: "70%",
    subText: "Off",
    title: "Limited Offer",
    dateRange: "08-AUG-2026 to 18-AUG-2026",
    condition: "For the first 2 items",
    code: "MEGA70OFF",
    bgColor: "#e84a5f",
    stubBg: "#d63e52"
  },
  {
    id: 2,
    discount: "50%",
    subText: "Off",
    title: "Weekend Pass",
    dateRange: "12-OCT-2026 to 20-OCT-2026",
    condition: "On orders above $99",
    code: "WEEKEND50",
    bgColor: "#3f72af",
    stubBg: "#336199"
  },
  {
    id: 3,
    discount: "30%",
    subText: "Off",
    title: "Flash Coupon",
    dateRange: "01-NOV-2026 to 10-NOV-2026",
    condition: "Sitewide All Products",
    code: "FLASH30NOW",
    bgColor: "#2b2e4a",
    stubBg: "#21243b"
  }
];

export function OffersLimitedTime8() {
  const [tornTickets, setTornTickets] = useState<Record<number, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleTear = (id: number) => {
    setTornTickets((prev) => ({ ...prev, [id]: true }));
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const handleReset = (id: number) => {
    setTornTickets((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="w-full min-h-screen bg-[#111318] text-white font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Background Studio Light */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header Info */}
      <div className="relative z-10 max-w-3xl text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30 backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span>REACTBITS TEAR TICKET • DRAG OR CLICK TO TEAR STUB</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          Interactive Tear Coupons
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto font-medium">
          Official ReactBits TearTicket physics! Drag the stub or click "Get Now" to tear off the ticket and reveal your code.
        </p>
      </div>

      {/* REACTBITS TEAR TICKETS CONTAINER */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-10">
        {COUPONS.map((coupon) => {
          const isTorn = tornTickets[coupon.id];

          return (
            <div key={coupon.id} className="relative flex flex-col items-center">
              
              <TearTicket
                width={520}
                height={220}
                stubSize={150}
                background={coupon.bgColor}
                stubBackground={coupon.stubBg}
                color="#ffffff"
                torn={isTorn}
                onTear={() => handleTear(coupon.id)}
                tilt={true}
                tiltMax={8}
                tearAngle={25}
                stretch={25}
                resistance={0.4}
                holes={10}
                holeSize={7}
                notch={8}
                radius={16}
                recenter={true}
                stub={
                  /* STUB CONTENT ON RIGHT (70% OFF) */
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none cursor-grab active:cursor-grabbing">
                    <h3 className="text-4xl sm:text-5xl font-black leading-none text-white tracking-tighter">
                      {coupon.discount}
                    </h3>
                    <span className="text-lg sm:text-2xl font-extrabold text-white/90 uppercase tracking-widest mt-1">
                      {coupon.subText}
                    </span>
                    <span className="text-[9px] text-white/70 font-semibold tracking-wider uppercase mt-2">
                      Drag to Tear
                    </span>
                  </div>
                }
              >
                {/* TICKET BODY CONTENT ON LEFT */}
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-white">
                  {isTorn ? (
                    /* REVEALED CODE STATE */
                    <div className="h-full flex flex-col items-center justify-center space-y-3 text-center animate-in fade-in zoom-in duration-300">
                      <div className="flex items-center gap-2">
                        <Ticket className="w-5 h-5 text-amber-300" />
                        <span className="text-xs font-black uppercase tracking-widest text-white">Coupon Unlocked!</span>
                      </div>

                      <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20 shadow-inner">
                        <span className="font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-widest">
                          {coupon.code}
                        </span>
                        <button
                          onClick={() => handleCopy(coupon.code)}
                          className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                          aria-label="Copy Promo Code"
                        >
                          {copiedCode === coupon.code ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      <div className="flex items-center gap-4 pt-1">
                        <span className="text-xs text-white/90 font-medium">
                          {copiedCode === coupon.code ? "Code Copied!" : "Click copy icon & apply"}
                        </span>
                        <button 
                          onClick={() => handleReset(coupon.id)}
                          className="text-xs underline text-white/70 hover:text-white flex items-center gap-1"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Reset</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* UNTORN TICKET DETAILS */
                    <>
                      <div className="space-y-1 text-left">
                        <h4 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-serif">
                          {coupon.title}
                        </h4>
                        <p className="text-xs text-white/80 font-medium">
                          {coupon.dateRange}
                        </p>
                        <p className="text-xs sm:text-sm text-white/90 font-semibold pt-1">
                          {coupon.condition}
                        </p>
                      </div>

                      <div className="pt-2 flex justify-start">
                        <button
                          onClick={() => handleTear(coupon.id)}
                          className="px-6 py-2 bg-white text-stone-900 hover:bg-stone-100 text-xs sm:text-sm font-bold rounded-full shadow-lg transition-transform active:scale-95 flex items-center gap-1.5"
                        >
                          <span>Get Now</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </TearTicket>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default OffersLimitedTime8;

