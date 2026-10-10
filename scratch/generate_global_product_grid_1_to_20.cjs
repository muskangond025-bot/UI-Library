const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'src', 'components', 'sections', 'global', '06-product-grid');
fs.mkdirSync(baseDir, { recursive: true });

const themes = [
  { name: 'AURORA GLASS BENTO PRODUCT GRID', anim: 'FLOAT & GLOW INTERACTIVE HOVER', dark: false, bg: 'linear-gradient(135deg, #f0f4ff 0%, #e6eeef 100%)', text: '#0f172a', accent: '#3b82f6', border: 'rgba(255,255,255,0.8)' },
  { name: 'CYBERPUNK MATRIX HUD PRODUCT GRID', anim: 'GLITCH SHIMMER & SCANLINE PASS', dark: true, bg: '#050b14', text: '#38bdf8', accent: '#f43f5e', border: 'rgba(56, 189, 248, 0.3)' },
  { name: 'NEUMORPHIC SOFT EMBOSSED GRID', anim: 'TACTILE DEEP PRESS & ELEVATE', dark: false, bg: '#e0e5ec', text: '#2d3748', accent: '#6366f1', border: 'none' },
  { name: 'CLAYMORPHIC 3D POP CART GRID', anim: 'BOUNCE HOVER & 3D TILT CARDS', dark: false, bg: '#fff7ed', text: '#431407', accent: '#ea580c', border: 'rgba(251, 146, 60, 0.2)' },
  { name: 'SUB-ZERO CRYO FROST SHOWCASE', anim: 'ICE CRYSTAL SHADOW & FROST PULSE', dark: true, bg: '#030712', text: '#e0f2fe', accent: '#06b6d4', border: 'rgba(6, 182, 212, 0.3)' },
  { name: 'RETRO 8-BIT ARCADE COMMERCE', anim: 'PIXEL FLASH & BUTTON BOUNCE', dark: true, bg: '#180828', text: '#f472b6', accent: '#facc15', border: '#f472b6' },
  { name: 'SWISS ARCHITECTURAL MONOCHROME GRID', anim: 'GRID LINE DRAW & REVEAL OVERLAY', dark: false, bg: '#ffffff', text: '#000000', accent: '#dc2626', border: '#000000' },
  { name: 'GLASSMORPHIC PRISM DISPERSION GRID', anim: 'CHROMATIC REFRACTION & TILT', dark: true, bg: '#0f172a', text: '#f8fafc', accent: '#818cf8', border: 'rgba(255, 255, 255, 0.15)' },
  { name: 'GOLDEN LUXURY VINTAGE CATALOGUE', anim: 'GOLDEN GLIMMER & SILK CROSSFADE', dark: true, bg: '#09080e', text: '#fef08a', accent: '#eab308', border: 'rgba(234, 179, 8, 0.3)' },
  { name: 'BIOPHILIC ECO SPHERE DISPLAY', anim: 'LEAF ORBIT & NATURE BREATHING PULSE', dark: false, bg: '#f0fdf4', text: '#14532d', accent: '#16a34a', border: 'rgba(22, 163, 74, 0.2)' },
  { name: 'STICKER COLLAGE STREETWEAR GRID', anim: 'STICKER ROTATE ON HOVER & SLIDE-IN', dark: false, bg: '#fef2f2', text: '#18181b', accent: '#ef4444', border: '#18181b' },
  { name: 'VAPORWAVE 80S SYNTH GRID', anim: 'NEON GRID PASS & RETRO GLOW', dark: true, bg: '#1e1b4b', text: '#f472b6', accent: '#38bdf8', border: 'rgba(244, 114, 182, 0.4)' },
  { name: 'MINIMAL JAPANESE ZEN PRODUCT SPACES', anim: 'SOFT FADE & BOTANICAL SLOW DRAW', dark: false, bg: '#fdfbf7', text: '#27272a', accent: '#78716c', border: '#e7e5e4' },
  { name: 'SPACE EXPLORER ORBITAL PRODUCT MATRIX', anim: 'STAR DUST PARALLAX & GRAVITY PULL', dark: true, bg: '#020617', text: '#e2e8f0', accent: '#38bdf8', border: 'rgba(56, 189, 248, 0.2)' },
  { name: 'HOLOGRAPHIC 3D SPATIAL STOREFRONT', anim: 'HOLOGRAM SCAN & SPECTRUM SHINE', dark: true, bg: '#09090b', text: '#f4f4f5', accent: '#a855f7', border: 'rgba(168, 85, 247, 0.3)' },
  { name: 'EDITORIAL LUXURY FASHION LOOKBOOK', anim: 'ZOOM SMOOTH & METRIC SLIDE UP', dark: false, bg: '#fafaf9', text: '#1c1917', accent: '#44403c', border: '#e7e5e4' },
  { name: 'KINETIC DYNAMIC TYPOGRAPHIC GRID', anim: 'TEXT TICKER RUN & CARD ELEVATE', dark: true, bg: '#111827', text: '#f3f4f6', accent: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
  { name: 'TACTILE PAPER CUT ART CATALOGUE', anim: 'LAYER SHADOW DROP & UNFOLD', dark: false, bg: '#fffbe8', text: '#365314', accent: '#65a30d', border: '#d9f99d' },
  { name: 'BAUHAUS GEOMETRIC COLOR BLOCK GRID', anim: 'PRIMARY BLOCK SHIFT & ROTATE ICON', dark: false, bg: '#f8fafc', text: '#0f172a', accent: '#2563eb', border: '#0f172a' },
  { name: 'CYBER ORGANIC BIOPUNK MARKETPLACE', anim: 'BIO-CELL PULSE & TOXIC NEON HOVER', dark: true, bg: '#051d12', text: '#4ade80', accent: '#22c55e', border: 'rgba(74, 222, 128, 0.3)' }
];

for (let idx = 1; idx <= 20; idx++) {
  const compDir = path.join(baseDir, 'global-product-grid-' + idx);
  fs.mkdirSync(compDir, { recursive: true });
  const t = themes[idx - 1];

  const jsonContent = JSON.stringify({
    designName: t.name,
    animation: t.anim,
    theme: t.dark ? 'Dark Mode' : 'Light Theme'
  }, null, 2);
  fs.writeFileSync(path.join(compDir, 'global-product-grid-' + idx + '.json'), jsonContent);

  const tsxContent = `import React, { useState } from 'react';

export const GlobalProductGrid${idx}: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    { id: 1, name: 'Cybernetic Visual Visor', price: '$299.00', rating: '4.9', tag: 'BEST SELLER', img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Kinetic Spatial Watch', price: '$450.00', rating: '5.0', tag: 'LIMITED EDITION', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Acoustic Studio Pods', price: '$199.50', rating: '4.8', tag: 'NEW ARRIVAL', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Ergonomic Aero Pad', price: '$129.00', rating: '4.7', tag: 'HOT DEAL', img: 'https://images.unsplash.com/photo-1592840062661-a5a07293b61d?auto=format&fit=crop&q=80&w=600' }
  ];

  const toggleCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleFav = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div style={{
      width: '100%',
      padding: '3rem 1.5rem',
      background: '${t.bg}',
      color: '${t.text}',
      borderRadius: '24px',
      boxSizing: 'border-box',
      border: '${t.border}',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '${t.accent}', fontWeight: 700 }}>
            GLOBAL CATALOGUE DESIGN #${idx}
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, margin: '0.3rem 0 0 0', letterSpacing: '-0.5px' }}>
            ${t.name}
          </h2>
        </div>
        <div style={{ fontSize: '0.85rem', background: '${t.dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}', padding: '0.5rem 1rem', borderRadius: '100px', border: '${t.border}' }}>
          ANIMATION: <span style={{ color: '${t.accent}', fontWeight: 600 }}>${t.anim}</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            background: '${t.dark ? 'rgba(255,255,255,0.03)' : '#ffffff'}',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '${t.border}',
            boxShadow: '${t.dark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 25px rgba(0,0,0,0.05)'}',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative'
          }}>
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{
                position: 'absolute', top: '12px', left: '12px', background: '${t.accent}', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '4px 10px', borderRadius: '100px'
              }}>
                {p.tag}
              </span>
              <button 
                onClick={() => toggleFav(p.id)}
                style={{
                  position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', color: favorites.includes(p.id) ? '#f43f5e' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                ♥
              </button>
            </div>
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>★ {p.rating}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '${t.accent}' }}>{p.price}</span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 1rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h3>
              <button
                onClick={() => toggleCart(p.id)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: cart.includes(p.id) ? '#10b981' : '${t.accent}',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                {cart.includes(p.id) ? '✓ ADDED TO CART' : '+ ADD TO CART'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(compDir, `GlobalProductGrid${idx}.tsx`), tsxContent);
}
console.log('Successfully generated Global Product Grid 1 to 20!');
