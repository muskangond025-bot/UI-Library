import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, ShieldCheck, Tag, Gift, RefreshCw } from 'lucide-react';

export function OffersCoupon4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const couponCode = 'GOLDVIP50';

  useEffect(() => {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions matching parent
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw Gold Metallic Scratch Surface
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#d97706');
    grad.addColorStop(0.3, '#fef08a');
    grad.addColorStop(0.5, '#b45309');
    grad.addColorStop(0.7, '#fef08a');
    grad.addColorStop(1, '#92400e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Scratch Prompt Text
    ctx.fillStyle = '#451a03';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH WITH CURSOR TO REVEAL ✨', canvas.width / 2, canvas.height / 2 + 5);

    setIsScratched(false);
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check scratch percentage
    checkScratchPercent();
  };

  const checkScratchPercent = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }

    const percent = (transparentPixels / (pixels.length / 4)) * 100;
    if (percent > 45) {
      setIsScratched(true);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-gradient-to-b from-amber-950 via-slate-950 to-black text-white rounded-3xl border border-amber-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center">
      {/* Background Ambient Gold Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>INTERACTIVE CANVAS SCRATCH CARD</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 tracking-tight font-serif">
          Golden VIP Scratch Voucher
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto font-sans">
          Scratch the golden foil card below with your mouse or finger to unlock your secret 50% discount code!
        </p>
      </div>

      {/* Main Scratch Card Component Container */}
      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/80 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-[0_25px_60px_rgba(217,119,6,0.25)] space-y-6 overflow-hidden text-left"
        >
          {/* Card Meta & Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest">
                GOLDEN REWARD MEMBER
              </span>
            </div>
            <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-bold font-mono">
              FLAT 50% OFF
            </span>
          </div>

          {/* Title Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Unlock Royal Gold Savings
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Scratch off the golden foil surface below to reveal your unique single-use promotional code.
            </p>
          </div>

          {/* Interactive Scratch Canvas Box */}
          <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-amber-950/90 shadow-inner flex items-center justify-center group select-none">
            {/* Hidden Secret Content underneath canvas */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 p-4 space-y-1">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-900">
                🎉 UNLOCKED DISCOUNTS CODE
              </span>
              <span className="text-2xl sm:text-4xl font-mono font-black tracking-widest select-all">
                {couponCode}
              </span>
              <span className="text-[11px] font-sans font-bold text-slate-900">
                Valid on all store categories for 48 hours
              </span>
            </div>

            {/* Canvas Scratch Foil Coating Overlay */}
            {!isScratched && (
              <canvas
                ref={canvasRef}
                onMouseDown={(e) => {
                  setIsDrawing(true);
                  scratch(e.clientX, e.clientY);
                }}
                onMouseMove={(e) => {
                  if (isDrawing) scratch(e.clientX, e.clientY);
                }}
                onMouseUp={() => setIsDrawing(false)}
                onMouseLeave={() => setIsDrawing(false)}
                onTouchStart={(e) => {
                  setIsDrawing(true);
                  scratch(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchMove={(e) => {
                  if (isDrawing) scratch(e.touches[0].clientX, e.touches[0].clientY);
                }}
                onTouchEnd={() => setIsDrawing(false)}
                className="absolute inset-0 w-full h-full cursor-pointer z-20 touch-none"
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={copyCode}
              disabled={!isScratched}
              className={`w-full py-4 rounded-xl font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                isScratched
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-amber-500/25 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>
                {isScratched
                  ? copied
                    ? 'COPIED TO CLIPBOARD!'
                    : `COPY CODE: ${couponCode}`
                  : 'SCRATCH CARD FIRST TO UNLOCK CODE'}
              </span>
            </button>

            {isScratched && (
              <button
                onClick={initCanvas}
                className="px-4 py-4 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 text-xs font-mono font-bold"
                title="Reset Scratch Foil"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-amber-400/80 pt-1">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Guaranteed 100% Verified Golden VIP Deal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon4;
