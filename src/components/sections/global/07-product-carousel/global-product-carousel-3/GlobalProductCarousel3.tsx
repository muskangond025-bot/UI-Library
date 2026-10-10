import React, { useRef, useState } from 'react';

export const GlobalProductCarousel3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
  {
    "id": 1,
    "name": "Spatial VR Visor Ultra",
    "price": "$899",
    "oldPrice": "$999",
    "rating": "5.0",
    "badge": "PRO EDITION",
    "img": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 2,
    "name": "Kinetic Titanium Watch",
    "price": "$450",
    "oldPrice": "$520",
    "rating": "4.9",
    "badge": "BESTSELLER",
    "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 3,
    "name": "Acoustic Studio Pods",
    "price": "$199",
    "oldPrice": "",
    "rating": "4.8",
    "badge": "NEW ARRIVAL",
    "img": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 4,
    "name": "Ergonomic Aero Controller",
    "price": "$129",
    "oldPrice": "$150",
    "rating": "4.7",
    "badge": "HOT DEAL",
    "img": "https://images.unsplash.com/photo-1592840062661-a5a07293b61d?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 5,
    "name": "Ceramic Smart Ring",
    "price": "$310",
    "oldPrice": "",
    "rating": "5.0",
    "badge": "TRENDING",
    "img": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 6,
    "name": "Spatial Iris Camera Lens",
    "price": "$1,200",
    "oldPrice": "",
    "rating": "5.0",
    "badge": "LIMITED 50",
    "img": "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 7,
    "name": "Tactile Wireless Keypad",
    "price": "$175",
    "oldPrice": "$210",
    "rating": "4.8",
    "badge": "POPULAR",
    "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=600"
  },
  {
    "id": 8,
    "name": "Atelier Leather Duffel",
    "price": "$790",
    "oldPrice": "",
    "rating": "5.0",
    "badge": "AUTUMN 26",
    "img": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600"
  }
];

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
      background: '#e0e5ec',
      color: '#2d3748',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: '15px 15px 35px #b8bdc5, -15px -15px 35px #ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#6366f1' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#6366f1' }}>
              DESIGN #3 • NEUO
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            NEUMORPHIC SOFT EMBOSSED DUAL-SHADOW CAROUSEL
          </h2>
        </div>

        {/* Animation Detail Badge & Control Arrows */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ fontSize: '0.8rem', background: 'rgba(0,0,0,0.05)', padding: '0.5rem 1.2rem', borderRadius: '100px', border: 'none' }}>
            ANIMATION: <span style={{ color: '#6366f1', fontWeight: 700 }}>TACTILE DEEP PRESS & DUAL SHADOW EMBOSS</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={scrollLeft}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: '#e0e5ec',
                color: '#2d3748',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '5px 5px 12px #b8bdc5, -5px -5px 12px #ffffff'
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
                background: '#6366f1',
                color: '#ffffff',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '5px 5px 12px #b8bdc5, -5px -5px 12px #ffffff'
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
              background: '#e0e5ec',
              borderRadius: '30px',
              overflow: 'hidden',
              border: 'none',
              boxShadow: '10px 10px 20px #b8bdc5, -10px -10px 20px #ffffff',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0
            }}>
            {/* Product Image */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '#f1f5f9' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute', top: '14px', left: '14px', background: '#6366f1', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '4px 10px', borderRadius: '100px'
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
                  <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#6366f1' }}>{p.price}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 1rem 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h3>
              </div>

              <button
                onClick={() => toggleCart(p.id)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '50px',
                  background: cart.includes(p.id) ? '#10b981' : '#6366f1',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  boxShadow: '4px 4px 10px #b8bdc5, -4px -4px 10px #ffffff',
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
