const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'src', 'components', 'sections', 'global', '07-product-carousel');
fs.mkdirSync(baseDir, { recursive: true });

const dribbbleDesigns = [
  {
    num: 1,
    name: 'DRIBBBLE SPATIAL 3D PRODUCT CAROUSEL',
    anim: '3D PERSPECTIVE PARALLAX & HORIZONTAL SLIDE',
    dark: true,
    bg: '#090d16',
    cardBg: 'rgba(255, 255, 255, 0.04)',
    text: '#f1f5f9',
    accent: '#38bdf8',
    badgeBg: 'rgba(56, 189, 248, 0.2)',
    badgeText: '#38bdf8',
    border: '1px solid rgba(255, 255, 255, 0.08)'
  },
  {
    num: 2,
    name: 'DRIBBBLE GLASSMORPHIC PRISM SLIDER',
    anim: 'GLASS SHIMMER & CHROMATIC REFRACTION',
    dark: true,
    bg: '#0f172a',
    cardBg: 'rgba(30, 41, 59, 0.7)',
    text: '#f8fafc',
    accent: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.2)',
    badgeText: '#f472b6',
    border: '1px solid rgba(255, 255, 255, 0.12)'
  },
  {
    num: 3,
    name: 'DRIBBBLE NEUMORPHIC SOFT EMBOSSED CAROUSEL',
    anim: 'TACTILE DEEP PRESS & DUAL SHADOW EMBOSS',
    dark: false,
    bg: '#e0e5ec',
    cardBg: '#e0e5ec',
    text: '#2d3748',
    accent: '#6366f1',
    badgeBg: '#c3c7ce',
    badgeText: '#4338ca',
    border: 'none'
  },
  {
    num: 4,
    name: 'DRIBBBLE CLAYMORPHIC 3D POP SLIDER',
    anim: '3D CLAY ELEVATION & BOUNCE HOVER',
    dark: false,
    bg: '#fff7ed',
    cardBg: '#ffffff',
    text: '#431407',
    accent: '#f97316',
    badgeBg: '#ffedd5',
    badgeText: '#ea580c',
    border: '2px solid #fed7aa'
  },
  {
    num: 5,
    name: 'DRIBBBLE LUXURY MONOCHROME EDITORIAL CAROUSEL',
    anim: 'IMAGE CURTAIN SLIDE & FINE LINE DRAW',
    dark: false,
    bg: '#fafaf9',
    cardBg: '#ffffff',
    text: '#1c1917',
    accent: '#000000',
    badgeBg: '#f5f5f4',
    badgeText: '#27272a',
    border: '1px solid #e7e5e4'
  }
];

const sampleProducts = [
  { id: 1, name: 'Spatial VR Headset Pro', price: '$899.00', oldPrice: '$999.00', rating: '5.0', badge: 'PRO', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Minimal Kinetic Watch', price: '$350.00', oldPrice: '$420.00', rating: '4.9', badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Acoustic Studio Pods', price: '$199.50', oldPrice: '', rating: '4.8', badge: 'NEW', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Tactile Aero Pad', price: '$129.00', oldPrice: '$150.00', rating: '4.7', badge: '-15%', img: 'https://images.unsplash.com/photo-1592840062661-a5a07293b61d?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Ceramic Smart Ring', price: '$290.00', oldPrice: '', rating: '5.0', badge: 'HOT', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' }
];

for (let idx = 1; idx <= 20; idx++) {
  const dIndex = (idx - 1) % dribbbleDesigns.length;
  const template = dribbbleDesigns[dIndex];
  const compDir = path.join(baseDir, `global-product-carousel-${idx}`);
  fs.mkdirSync(compDir, { recursive: true });

  const tsxContent = `import React, { useState } from 'react';

export const GlobalProductCarousel${idx}: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = ${JSON.stringify(sampleProducts, null, 2)};

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + products.length) % products.length);
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
      background: '${template.bg}',
      color: '${template.text}',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: '${template.border}',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '${template.accent}' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '${template.accent}' }}>
              GLOBAL CAROUSEL DESIGN #${idx}
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            ${template.name} ${idx > 5 ? '#' + idx : ''}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={handlePrev}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '${template.border}',
              background: '${template.cardBg}',
              color: '${template.text}',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}>
            ←
          </button>
          <button
            onClick={handleNext}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              background: '${template.accent}',
              color: '#ffffff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
              transition: 'all 0.2s ease'
            }}>
            →
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div style={{ overflow: 'hidden', padding: '0.5rem 0' }}>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          transform: \`translateX(-\${scrollIndex * 300}px)\`,
          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
          {products.map((p) => (
            <div key={p.id} style={{
              minWidth: '280px',
              maxWidth: '280px',
              background: '${template.cardBg}',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '${template.border}',
              backdropFilter: 'blur(16px)',
              boxShadow: '${template.dark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 15px 35px rgba(0,0,0,0.06)'}',
              transition: 'transform 0.35s ease',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '${template.dark ? '#1e293b' : '#f1f5f9'}' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'
                  }}
                />
                <span style={{
                  position: 'absolute', top: '16px', left: '16px', background: '${template.badgeBg}', color: '${template.badgeText}', fontSize: '0.65rem', fontWeight: 800, padding: '5px 12px', borderRadius: '100px'
                }}>
                  {p.badge}
                </span>
                <button
                  onClick={() => toggleWishlist(p.id)}
                  style={{
                    position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(8px)', border: 'none', cursor: 'pointer', color: wishlist.includes(p.id) ? '#ef4444' : '#0f172a'
                  }}>
                  {wishlist.includes(p.id) ? '♥' : '♡'}
                </button>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b' }}>★ {p.rating}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '${template.accent}' }}>{p.price}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 1rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h3>
                </div>

                <button
                  onClick={() => toggleCart(p.id)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '14px',
                    background: cart.includes(p.id) ? '#10b981' : '${template.accent}',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                  {cart.includes(p.id) ? '✓ ADDED' : '+ ADD TO CART'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
`;
  fs.writeFileSync(path.join(compDir, `GlobalProductCarousel${idx}.tsx`), tsxContent);
}

console.log('Successfully generated Global Product Carousel 1 to 20!');
