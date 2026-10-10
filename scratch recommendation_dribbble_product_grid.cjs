const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'src', 'components', 'sections', 'global', '06-product-grid');

const dribbbleDesigns = [
  {
    num: 1,
    name: 'DRIBBBLE ULTRA-MINIMAL FLOATING PRODUCT TILES',
    anim: 'FLOAT UP & SOFT ELEVATION SHADOW',
    dark: false,
    bg: '#f8fafc',
    cardBg: '#ffffff',
    text: '#0f172a',
    accent: '#6366f1',
    badgeBg: '#e0e7ff',
    badgeText: '#4338ca',
    border: '1px solid #e2e8f0',
    products: [
      { id: 1, name: 'Minimalist Spatial Earbuds', brand: 'SONIC ART', price: '$240', oldPrice: '$290', rating: '4.9 (128)', badge: 'TRENDING', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600' },
      { id: 2, name: 'Sleek Ceramic Smart Ring', brand: 'AURA TECH', price: '$310', oldPrice: '', rating: '5.0 (89)', badge: 'HOT', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600' },
      { id: 3, name: 'Aluminum Desk Organiser', brand: 'CRAFT STUDIO', price: '$85', oldPrice: '$110', rating: '4.8 (210)', badge: 'SALE', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
      { id: 4, name: 'Tactile Wireless Keypad', brand: 'KEYKRAFT', price: '$175', oldPrice: '', rating: '4.7 (64)', badge: 'NEW', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    num: 2,
    name: 'DRIBBBLE BENTO BOX SPATIAL PRODUCT SHOWCASE',
    anim: 'BENTO TILT & GLOW SPECTRUM PASS',
    dark: true,
    bg: '#090d16',
    cardBg: 'rgba(255, 255, 255, 0.04)',
    text: '#f1f5f9',
    accent: '#38bdf8',
    badgeBg: 'rgba(56, 189, 248, 0.2)',
    badgeText: '#38bdf8',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    products: [
      { id: 1, name: 'Neural VR HMD Goggles', brand: 'CYBERLABS', price: '$899', oldPrice: '$999', rating: '5.0', badge: 'PRO EDITION', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600' },
      { id: 2, name: 'Holographic Studio Light', brand: 'LUMEN', price: '$149', oldPrice: '', rating: '4.9', badge: 'POPULAR', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
      { id: 3, name: 'Bionic Controller Dock', brand: 'NEXUS', price: '$120', oldPrice: '$150', rating: '4.8', badge: '-20%', img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&q=80&w=600' },
      { id: 4, name: 'Cryo-Cooled Soundbar', brand: 'CRYO', price: '$450', oldPrice: '', rating: '4.9', badge: 'NEW', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    num: 3,
    name: 'DRIBBBLE GLASSMORPHISM PRISM PRODUCT CAROUSEL GRID',
    anim: 'GLASS REFRACTION & MAGNIFYING ZOOM',
    dark: true,
    bg: '#0f172a',
    cardBg: 'rgba(30, 41, 59, 0.7)',
    text: '#f8fafc',
    accent: '#ec4899',
    badgeBg: 'rgba(236, 72, 153, 0.2)',
    badgeText: '#f472b6',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    products: [
      { id: 1, name: 'Prism Glass Watch', brand: 'CHRONO', price: '$520', oldPrice: '', rating: '4.9', badge: 'LIMITED', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
      { id: 2, name: 'Crystal Audio Pod', brand: 'HARMONY', price: '$210', oldPrice: '$260', rating: '4.7', badge: 'SALE', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
      { id: 3, name: 'Spatial Iris Camera Lens', brand: 'OPTICS', price: '$1,200', oldPrice: '', rating: '5.0', badge: 'PRO', img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600' },
      { id: 4, name: 'Glow Ambient Pebble', brand: 'NEO', price: '$95', oldPrice: '$120', rating: '4.8', badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    num: 4,
    name: 'DRIBBBLE CLAYMORPHIC 3D POP E-COMMERCE GRID',
    anim: '3D CLAY ELEVATION & BOUNCE ON CLICK',
    dark: false,
    bg: '#fff7ed',
    cardBg: '#ffffff',
    text: '#431407',
    accent: '#f97316',
    badgeBg: '#ffedd5',
    badgeText: '#ea580c',
    border: '2px solid #fed7aa',
    products: [
      { id: 1, name: 'Retro Pop Headphones', brand: 'PLAYFUL', price: '$160', oldPrice: '', rating: '4.9', badge: 'HOT POP', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600' },
      { id: 2, name: 'Bubble Game Console', brand: 'PIXEL', price: '$220', oldPrice: '$250', rating: '4.8', badge: 'FUN PICK', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600' },
      { id: 3, name: 'Smooth Clay Speaker', brand: 'SOUND3D', price: '$135', oldPrice: '', rating: '5.0', badge: 'NEW', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600' },
      { id: 4, name: 'Vibrant Aero Mouse', brand: 'GLIDE', price: '$75', oldPrice: '$95', rating: '4.7', badge: '-20%', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  {
    num: 5,
    name: 'DRIBBBLE LUXURY MONOCHROME EDITORIAL GRID',
    anim: 'IMAGE CURTAIN SLIDE & FINE LINE REVEAL',
    dark: false,
    bg: '#fafaf9',
    cardBg: '#ffffff',
    text: '#1c1917',
    accent: '#000000',
    badgeBg: '#f5f5f4',
    badgeText: '#27272a',
    border: '1px solid #e7e5e4',
    products: [
      { id: 1, name: 'Atelier Leather Duffel', brand: 'MAISON', price: '$790', oldPrice: '', rating: '5.0', badge: 'AUTUMN 26', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' },
      { id: 2, name: 'Handcrafted Minimal Tote', brand: 'MAISON', price: '$450', oldPrice: '', rating: '4.9', badge: 'ICONIC', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
      { id: 3, name: 'Sculptural Ceramic Vase', brand: 'STUDIO V', price: '$280', oldPrice: '', rating: '4.8', badge: 'LIMITED 50', img: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=600' },
      { id: 4, name: 'Titanium Mechanical Pen', brand: 'WRITING', price: '$190', oldPrice: '', rating: '5.0', badge: 'ESSENTIAL', img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600' }
    ]
  }
];

// Generate 1 to 20 based on Dribbble concepts
for (let idx = 1; idx <= 20; idx++) {
  const dIndex = (idx - 1) % dribbbleDesigns.length;
  const template = dribbbleDesigns[dIndex];
  const compDir = path.join(baseDir, `global-product-grid-${idx}`);
  fs.mkdirSync(compDir, { recursive: true });

  const tsxContent = `import React, { useState } from 'react';

export const GlobalProductGrid${idx}: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('ALL');

  const products = [
    { id: 1, name: '${template.products[0].name}', brand: '${template.products[0].brand}', price: '${template.products[0].price}', oldPrice: '${template.products[0].oldPrice}', rating: '${template.products[0].rating}', badge: '${template.products[0].badge}', img: '${template.products[0].img}' },
    { id: 2, name: '${template.products[1].name}', brand: '${template.products[1].brand}', price: '${template.products[1].price}', oldPrice: '${template.products[1].oldPrice}', rating: '${template.products[1].rating}', badge: '${template.products[1].badge}', img: '${template.products[1].img}' },
    { id: 3, name: '${template.products[2].name}', brand: '${template.products[2].brand}', price: '${template.products[2].price}', oldPrice: '${template.products[2].oldPrice}', rating: '${template.products[2].rating}', badge: '${template.products[2].badge}', img: '${template.products[2].img}' },
    { id: 4, name: '${template.products[3].name}', brand: '${template.products[3].brand}', price: '${template.products[3].price}', oldPrice: '${template.products[3].oldPrice}', rating: '${template.products[3].rating}', badge: '${template.products[3].badge}', img: '${template.products[3].img}' }
  ];

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
              DRIBBBLE SHOT #{idx}
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            ${template.name} ${idx > 5 ? '#' + idx : ''}
          </h2>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', background: '${template.dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'}', padding: '0.35rem', borderRadius: '100px' }}>
          {['ALL', 'FEATURED', 'NEW ARRIVALS', 'BEST SELLERS'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                border: 'none',
                background: activeTab === tab ? '${template.accent}' : 'transparent',
                color: activeTab === tab ? '#ffffff' : '${template.text}',
                padding: '0.45rem 1.1rem',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25 ease'
              }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem'
      }}>
        {products.map(p => (
          <div key={p.id} style={{
            background: '${template.cardBg}',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '${template.border}',
            backdropFilter: 'blur(16px)',
            boxShadow: '${template.dark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 15px 35px rgba(0,0,0,0.06)'}',
            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), boxShadow 0.35s ease',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '${template.dark ? '#1e293b' : '#f1f5f9'}' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'
                }}
              />
              
              {/* Badge */}
              <span style={{
                position: 'absolute', top: '16px', left: '16px', background: '${template.badgeBg}', color: '${template.badgeText}', fontSize: '0.65rem', fontWeight: 800, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px'
              }}>
                {p.badge}
              </span>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(p.id)}
                style={{
                  position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(8px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: wishlist.includes(p.id) ? '#ef4444' : '#0f172a', transition: 'transform 0.2s ease', fontSize: '1.1rem'
                }}>
                {wishlist.includes(p.id) ? '♥' : '♡'}
              </button>
            </div>

            {/* Product Meta */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, tracking: '1px', opacity: 0.6, textTransform: 'uppercase' }}>{p.brand}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '3px' }}>★ {p.rating}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.3 }}>{p.name}</h3>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '1.2rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '${template.accent}' }}>{p.price}</span>
                  {p.oldPrice && <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.5 }}>{p.oldPrice}</span>}
                </div>

                <button
                  onClick={() => toggleCart(p.id)}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '16px',
                    background: cart.includes(p.id) ? '#10b981' : '${template.accent}',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    boxShadow: cart.includes(p.id) ? '0 10px 20px rgba(16, 185, 129, 0.3)' : '0 10px 20px rgba(99, 102, 241, 0.25)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    gap: '0.5rem'
                  }}>
                  {cart.includes(p.id) ? (
                    <>
                      <span>✓</span> IN CART
                    </>
                  ) : (
                    <>
                      <span>+</span> ADD TO CART
                    </>
                  )}
                </button>
              </div>
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

console.log('Refreshed all 20 Global Product Grids with Dribbble inspired designs!');
