import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Check, Award, Scroll, Bookmark } from 'lucide-react';

export function OffersBundle13() {
  const [claimed, setClaimed] = useState(false);

  const handleClaimVoucher = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 3000);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#f4efe4] text-[#2c221e] rounded-3xl border-2 border-[#5c4a3e]/40 shadow-xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-serif">
      {/* Background Aged Paper Grain Texture Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#8c7355_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Masthead Header */}
      <div className="max-w-3xl mx-auto text-center space-y-2 mb-6 relative z-10">
        <div className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#7a6452] border-b border-t border-[#7a6452]/40 py-1 flex items-center justify-between px-4">
          <span>EST. 1928 • DAILY EDITION</span>
          <span>SPECIAL ADVERTISEMENT</span>
          <span>PRICE: 45% OFF</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-[#2c221e] tracking-tight uppercase border-b-4 border-double border-[#2c221e] pb-2 font-serif">
          THE DAILY BUNDLE GAZETTE
        </h1>
        <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-xl mx-auto italic font-sans font-medium">
          "Extra! Extra! Read all about the Vintage Fountain Pen & Leather Journal Combo Edition at an unbelievable rate!"
        </p>
      </div>

      {/* Main Newspaper Article Card */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#faf6ed] p-6 sm:p-9 border-2 border-[#2c221e] shadow-[8px_8px_0px_#5c4a3e] space-y-6 text-left"
        >
          {/* Rotated Vintage Rubber Ink Stamp Overlay */}
          <div className="absolute top-6 right-6 transform rotate-[-12deg] border-4 border-red-800 text-red-800 px-4 py-1.5 font-sans font-black text-xs sm:text-sm tracking-widest uppercase rounded opacity-90 pointer-events-none shadow-sm">
            VERIFIED BUNDLE • 45% OFF
          </div>

          {/* Article Headline */}
          <div className="space-y-1.5 pr-28">
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#7a6452]">
              ARTICLE NO. 409-B
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c221e] leading-snug">
              Grand Artisan Writing Suite
            </h2>
            <p className="text-xs sm:text-sm text-[#5c4a3e] font-sans leading-relaxed">
              Includes Handcrafted Brass Fountain Pen ($85) + Full-Grain Italian Leather Journal ($65) + Archival Ink Bottle ($25).
            </p>
          </div>

          {/* Gazette Table Breakdown */}
          <div className="border-t border-b border-[#2c221e] py-3 space-y-2 text-xs font-sans">
            <div className="flex justify-between font-bold text-[#2c221e] uppercase tracking-wider text-[11px] border-b border-[#5c4a3e]/30 pb-1">
              <span>ITEM CATALOG</span>
              <span>STANDARD VALUE</span>
            </div>
            <div className="flex justify-between text-[#4a3b30]">
              <span>1x Handcrafted Brass Fountain Pen</span>
              <span className="line-through">$85.00</span>
            </div>
            <div className="flex justify-between text-[#4a3b30]">
              <span>1x Full-Grain Italian Leather Journal</span>
              <span className="line-through">$65.00</span>
            </div>
            <div className="flex justify-between text-[#4a3b30]">
              <span>1x Midnight Black Archival Ink (50ml)</span>
              <span className="line-through">$25.00</span>
            </div>
          </div>

          {/* Price Gazette Box */}
          <div className="bg-[#f0e8d8] p-4 border border-[#2c221e] flex items-center justify-between font-serif">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#7a6452] block">
                TOTAL SEPARATE COST
              </span>
              <span className="text-sm text-[#7a6452] line-through font-sans">$175.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#2c221e] block">
                GAZETTE SPECIAL BUNDLE
              </span>
              <span className="text-2xl sm:text-4xl font-black text-[#2c221e]">$96.25</span>
            </div>
          </div>

          {/* Tear-Off Coupon Line & Action */}
          <div className="pt-2 border-t-2 border-dashed border-[#5c4a3e]/60 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#faf6ed] px-3 font-sans text-xs text-[#7a6452] flex items-center gap-1.5 font-bold">
              <Scissors className="w-4 h-4 text-[#2c221e]" /> TEAR HERE TO REDEEM GAZETTE OFFER
            </div>

            <button
              onClick={handleClaimVoucher}
              className="mt-3 w-full py-4 bg-[#2c221e] hover:bg-[#42342d] text-[#faf6ed] font-sans font-bold text-sm uppercase tracking-widest border border-[#2c221e] shadow-md transition-all flex items-center justify-center gap-2"
            >
              {claimed ? <Check className="w-4 h-4 text-emerald-400" /> : <Scroll className="w-4 h-4" />}
              <span>{claimed ? 'VOUCHER CLAIMED & SAVED!' : 'CLAIM GAZETTE BUNDLE VOUCHER ($96.25)'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersBundle13;
