import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Copy, Check, RefreshCw, ShoppingBag, ShieldCheck } from 'lucide-react';

export function OffersLimitedTime9() {
  const [isScratched, setIsScratched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  const promoCode = "MYSTERY50GOLD";

  // Initialize Canvas Gold Foil Layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Gold Metallic Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.3, '#fff2a3');
    grad.addColorStop(0.5, '#aa771c');
    grad.addColorStop(0.7, '#ffd700');
    grad.addColorStop(1, '#8b6508');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Overlay text instructions on foil
    ctx.fillStyle = '#3a2703';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH HERE WITH CURSOR ✨', width / 2, height / 2 + 6);
  }, []);

  // Scratch Drawing Logic
  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2, false);
    ctx.fill();

    // Check scratch percentage
    calculateScratchPercent();
  };

  const calculateScratchPercent = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percent = Math.round((transparentPixels / (pixels.length / 4)) * 100);
    setScratchPercent(percent);

    if (percent > 45) {
      setIsScratched(true);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    scratch(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetCanvas = () => {
    setIsScratched(false);
    setScratchPercent(0);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'source-over';
    const width = canvas.width;
    const height = canvas.height;

    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.3, '#fff2a3');
    grad.addColorStop(0.5, '#aa771c');
    grad.addColorStop(0.7, '#ffd700');
    grad.addColorStop(1, '#8b6508');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#3a2703';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH HERE WITH CURSOR ✨', width / 2, height / 2 + 6);
  };

  return (
    <div className="w-full min-h-screen bg-[#0d0e12] text-white font-sans antialiased py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Ambient Radial Spotlight */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header Info */}
      <div className="relative z-10 max-w-2xl text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>CANVAS SCRATCH-OFF MYSTERY COUPON</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
          Scratch & Save Big
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto font-medium">
          Drag your cursor over the gold foil to scratch off the layer and reveal your guaranteed mystery discount!
        </p>
      </div>

      {/* MAIN SCRATCH CARD CONTAINER */}
      <div className="relative z-10 w-full max-w-xl bg-stone-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col items-center space-y-6">
        
        {/* Top Product Header */}
        <div className="w-full flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl font-black">
              50%
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white leading-tight">Golden Mystery Ticket</h3>
              <p className="text-xs text-amber-400/90 font-semibold">Valid on all luxury items</p>
            </div>
          </div>

          <span className="px-3 py-1 bg-stone-800 text-slate-300 text-xs font-bold rounded-full border border-stone-700">
            {scratchPercent}% Scratched
          </span>
        </div>

        {/* SCRATCH CANVAS STAGE */}
        <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-stone-950 flex flex-col items-center justify-center p-6 text-center">
          
          {/* REVEALED PROMO CODE CONTENT UNDERNEATH */}
          <div className="space-y-3 z-10 flex flex-col items-center">
            <span className="text-xs font-black tracking-widest uppercase text-amber-400">
              🎉 MYSTERY OFFER UNLOCKED!
            </span>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-amber-500/40">
              <span className="font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                {promoCode}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-2 rounded-xl bg-amber-500 text-black hover:bg-amber-400 transition-colors"
                aria-label="Copy Code"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              {copied ? "Code copied to clipboard!" : "Apply this code at checkout for FLAT 50% OFF"}
            </p>
          </div>

          {/* OVERLAY GOLD FOIL CANVAS */}
          {!isScratched && (
            <canvas
              ref={canvasRef}
              width={380}
              height={200}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleTouchMove}
              className="absolute inset-0 w-full h-full cursor-crosshair z-20 transition-opacity duration-500"
            />
          )}

        </div>

        {/* Bottom Actions & Controls */}
        <div className="w-full flex items-center justify-between pt-2 text-xs font-semibold">
          <button
            onClick={handleResetCanvas}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Scratch Foil</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black rounded-full shadow-lg transition-transform active:scale-95 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{copied ? "Copied!" : "Copy & Shop"}</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Guaranteed Instant Offer • Valid for 24 Hours Only</span>
        </div>

      </div>

    </div>
  );
}

export default OffersLimitedTime9;

