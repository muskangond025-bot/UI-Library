const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'src', 'components', 'sections', 'global', '07-product-carousel');

const carouselThemes = [
  { name: 'AURORA GLASS BENTO PRODUCT CAROUSEL', anim: 'SMOOTH SNAP HORIZONTAL SCROLL & FROST GLOW', dark: false, bg: 'linear-gradient(135deg, #f0f4ff 0%, #e6eeef 100%)', text: '#0f172a', accent: '#3b82f6', border: 'rgba(255,255,255,0.8)', cardBg: 'rgba(255,255,255,0.75)' },
  { name: 'CYBERPUNK MATRIX HUD CAROUSEL SLIDER', anim: 'GLITCH SHIMMER & HORIZONTAL SCAN TRACK', dark: true, bg: '#050b14', text: '#38bdf8', accent: '#f43f5e', border: 'rgba(56, 189, 248, 0.3)', cardBg: 'rgba(5, 11, 20, 0.8)' },
  { name: 'NEUMORPHIC SOFT EMBOSSED CAROUSEL', anim: 'TACTILE DEEP PRESS & DUAL SHADOW EMBOSS', dark: false, bg: '#e0e5ec', text: '#2d3748', accent: '#6366f1', border: 'none', cardBg: '#e0e5ec', neuo: true },
  { name: 'CLAYMORPHIC 3D POP PRODUCT CAROUSEL', anim: '3D CLAY ELEVATION & ELASTIC SCROLL BOUNCE', dark: false, bg: '#fff7ed', text: '#431407', accent: '#ea580c', border: '2px solid #fed7aa', cardBg: '#ffffff', clay: true },
  { name: 'SUB-ZERO CRYO FROST SLIDER CAROUSEL', anim: 'ICE CRYSTAL SHADOW & FROST PULSE TRACK', dark: true, bg: '#030712', text: '#e0f2fe', accent: '#06b6d4', border: 'rgba(6, 182, 212, 0.3)', cardBg: 'rgba(15, 23, 42, 0.7)' },
  { name: 'RETRO 8-BIT ARCADE COMMERCE SLIDER', anim: 'PIXEL FLASH & 8-BIT BUTTON BOUNCE TRACK', dark: true, bg: '#180828', text: '#f472b6', accent: '#facc15', border: '2px solid #f472b6', cardBg: '#2a0d45' },
  { name: 'SWISS ARCHITECTURAL MONOCHROME SLIDER', anim: 'GRID LINE DRAW & FINE LINE CROSSHAIR', dark: false, bg: '#ffffff', text: '#000000', accent: '#dc2626', border: '1px solid #000000', cardBg: '#ffffff' },
  { name: 'GLASSMORPHIC PRISM DISPERSION SLIDER', anim: 'CHROMATIC REFRACTION & PRISM LIGHT TILT', dark: true, bg: '#0f172a', text: '#f8fafc', accent: '#818cf8', border: 'rgba(255, 255, 255, 0.15)', cardBg: 'rgba(30, 41, 59, 0.7)' },
  { name: 'GOLDEN LUXURY VINTAGE CATALOGUE CAROUSEL', anim: 'GOLDEN GLIMMER & SILK CROSSFADE SLIDE', dark: true, bg: '#09080e', text: '#fef08a', accent: '#eab308', border: 'rgba(234, 179, 8, 0.3)', cardBg: 'rgba(24, 20, 15, 0.8)' },
  { name: 'BIOPHILIC ECO SPHERE DISPLAY CAROUSEL', anim: 'LEAF ORBIT & NATURE BREATHING PULSE TRACK', dark: false, bg: '#f0fdf4', text: '#14532d', accent: '#16a34a', border: 'rgba(22, 163, 74, 0.2)', cardBg: '#ffffff' },
  { name: 'NEUMORPHIC DUAL-INSET SOFT CAROUSEL', anim: 'TACTILE DUAL SHADOW EMBOSS & SOFT PRESS', dark: false, bg: '#e5e9f0', text: '#1e293b', accent: '#4f46e5', border: 'none', cardBg: '#e5e9f0', neuo: true },
  { name: 'CLAYMORPHIC PASTEL BUBBLE CAROUSEL', anim: 'SOFT 3D VOLUME & ELASTIC BOUNCE SCROLL', dark: false, bg: '#fce7f3', text: '#831843', accent: '#db2777', border: '2px solid #fbcfe8', cardBg: '#ffffff', clay: true },
  { name: 'VAPORWAVE 80S SYNTH RETRO CAROUSEL', anim: 'NEON GRID PASS & SYNTHWAVE PULSE TRACK', dark: true, bg: '#1e1b4b', text: '#f472b6', accent: '#38bdf8', border: 'rgba(244, 114, 182, 0.4)', cardBg: '#2e1065' },
  { name: 'MINIMAL JAPANESE ZEN SPACES CAROUSEL', anim: 'SOFT FADE & BOTANICAL SLOW PARALLAX', dark: false, bg: '#fdfbf7', text: '#27272a', accent: '#78716c', border: '1px solid #e7e5e4', cardBg: '#ffffff' },
  { name: 'SPACE EXPLORER ORBITAL CAROUSEL', anim: 'STAR DUST PARALLAX & GRAVITY PULL SCROLL', dark: true, bg: '#020617', text: '#e2e8f0', accent: '#38bdf8', border: 'rgba(56, 189, 248, 0.2)', cardBg: '#0f172a' },
  { name: 'HOLOGRAPHIC 3D SPATIAL CAROUSEL', anim: 'HOLOGRAM SCAN & SPECTRUM SHINE TRACK', dark: true, bg: '#09090b', text: '#f4f4f5', accent: '#a855f7', border: 'rgba(168, 85, 247, 0.3)', cardBg: '#18181b' },
  { name: 'EDITORIAL LUXURY FASHION LOOKBOOK SLIDER', anim: 'SMOOTH MODEL ZOOM & METRIC SLIDE UP', dark: false, bg: '#fafaf9', text: '#1c1917', accent: '#44403c', border: '1px solid #e7e5e4', cardBg: '#ffffff' },
  { name: 'NEUMORPHIC BRIGHT MATTE CAROUSEL', anim: 'SOFT INSET PRESS & DEEP EMBOSSED CARD', dark: false, bg: '#ebf0f5', text: '#111827', accent: '#2563eb', border: 'none', cardBg: '#ebf0f5', neuo: true },
  { name: 'BAUHAUS GEOMETRIC COLOR BLOCK CAROUSEL', anim: 'PRIMARY BLOCK SHIFT & ROTATE ICON SLIDE', dark: false, bg: '#f8fafc', text: '#0f172a', accent: '#2563eb', border: '2px solid #0f172a', cardBg: '#ffffff' },
  { name: 'CYBER ORGANIC BIOPUNK MARKETPLACE SLIDER', anim: 'BIO-CELL PULSE & TOXIC NEON HOVER TRACK', dark: true, bg: '#051d12', text: '#4ade80', accent: '#22c55e', border: 'rgba(74, 222, 128, 0.3)', cardBg: '#082f1e' }
];

const catalogProducts = [
  { id: 1, name: 'Spatial VR Visor Ultra', price: '$899', oldPrice: '$999', rating: '5.0', badge: 'PRO EDITION', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Kinetic Titanium Watch', price: '$450', oldPrice: '$520', rating: '4.9', badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Acoustic Studio Pods', price: '$199', oldPrice: '', rating: '4.8', badge: 'NEW ARRIVAL', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Ergonomic Aero Controller', price: '$129', oldPrice: '$150', rating: '4.7', badge: 'HOT DEAL', img: 'https://images.unsplash.com/photo-1592840062661-a5a07293b61d?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Ceramic Smart Ring', price: '$310', oldPrice: '', rating: '5.0', badge: 'TRENDING', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Spatial Iris Camera Lens', price: '$1,200', oldPrice: '', rating: '5.0', badge: 'LIMITED 50', img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600' },
  { id: 7, name: 'Tactile Wireless Keypad', price: '$175', oldPrice: '$210', rating: '4.8', badge: 'POPULAR', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600' },
  { id: 8, name: 'Atelier Leather Duffel', price: '$790', oldPrice: '', rating: '5.0', badge: 'AUTUMN 26', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' }
];

for (let idx = 1; idx <= 20; idx++) {
  const t = carouselThemes[idx - 1];
  const compDir = path.join(baseDir, `global-product-carousel-${idx}`);
  fs.mkdirSync(compDir, { recursive: true });

  const tsxContent = `import React, { useRef, useState } from 'react';

export const GlobalProductCarousel${idx}: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = ${JSON.stringify(catalogProducts, null, 2)};

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const toggleCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div style={{
      width: '100%',
      padding: '3rem 2rem',
      background: '${t.bg}',
      color: '${t.text}',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: '${t.border}',
      boxShadow: '${t.neuo ? '15px 15px 35px #b8bdc5, -15px -15px 35px #ffffff' : t.clay ? '0 20px 40px rgba(251, 146, 60, 0.15)' : 'none'}',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '${t.accent}' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '${t.accent}' }}>
              DESIGN #${idx} ${t.neuo ? '• NEUMORPHIC' : t.clay ? '• CLAYMORPHIC' : ''}
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            ${t.name}
          </h2>
        </div>

        {/* Animation Detail Badge & Arrows */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', background: '${t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}', padding: '0.5rem 1.2rem', borderRadius: '100px', border: '${t.border}' }}>
            ANIMATION: <span style={{ color: '${t.accent}', fontWeight: 700 }}>${t.anim}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={scrollLeft}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '${t.neuo ? 'none' : t.border}',
                background: '${t.cardBg}',
                color: '${t.text}',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '${t.neuo ? '5px 5px 12px #b8bdc5, -5px -5px 12px #ffffff' : '0 4px 15px rgba(0,0,0,0.1)'}'
              }}>
              ←
            </button>
            <button
              onClick={scrollRight}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: '${t.accent}',
                color: '#ffffff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '${t.neuo ? '5px 5px 12px #b8bdc5, -5px -5px 12px #ffffff' : '0 6px 20px rgba(0,0,0,0.25)'}'
              }}>
              →
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div 
        ref={containerRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        {products.map(p => (
          <div 
            key={p.id} 
            style={{
              minWidth: '290px',
              maxWidth: '290px',
              scrollSnapAlign: 'start',
              background: '${t.cardBg}',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '${t.border}',
              boxShadow: '${t.neuo ? '9px 9px 20px #c2c8d2, -9px -9px 20px #ffffff' : t.dark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 15px 35px rgba(0,0,0,0.06)'}',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0
            }}>
            {/* Product Image */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '${t.dark ? '#1e293b' : '#f1f5f9'}' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute', top: '14px', left: '14px', background: '${t.accent}', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '4px 10px', borderRadius: '100px'
              }}>
                {p.badge}
              </span>
              <button
                onClick={() => toggleWishlist(p.id)}
                style={{
                  position: 'absolute', top: '14px', right: '14px', width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', border: 'none', cursor: 'pointer', color: wishlist.includes(p.id) ? '#ef4444' : '#0f172a'
                }}>
                {wishlist.includes(p.id) ? '♥' : '♡'}
              </button>
            </div>

            {/* Product Metadata */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>★ {p.rating}</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '${t.accent}' }}>{p.price}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 1rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h3>
              </div>

              <button
                onClick={() => toggleCart(p.id)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '${t.neuo ? '50px' : '14px'}',
                  background: cart.includes(p.id) ? '#10b981' : '${t.accent}',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: '${t.neuo ? '4px 4px 10px #b8bdc5, -4px -4px 10px #ffffff' : 'none'}',
                  transition: 'all 0.2s ease'
                }}>
                {cart.includes(p.id) ? '✓ IN CART' : '+ ADD TO CART'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(compDir, `GlobalProductCarousel${idx}.tsx`), tsxContent);
}

console.log('Successfully updated all 20 Global Product Carousels with smooth native horizontal scrolling, rich Neumorphic & Claymorphic styles, and exact title/animation formatting!');
