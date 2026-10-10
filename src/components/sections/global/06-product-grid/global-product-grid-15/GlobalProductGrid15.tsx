import React, { useState } from 'react';

export const GlobalProductGrid15: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('ALL');

  const products = [
    { id: 1, name: 'Atelier Leather Duffel', brand: 'MAISON', price: '$790', oldPrice: '', rating: '5.0', badge: 'AUTUMN 26', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Handcrafted Minimal Tote', brand: 'MAISON', price: '$450', oldPrice: '', rating: '4.9', badge: 'ICONIC', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Sculptural Ceramic Vase', brand: 'STUDIO V', price: '$280', oldPrice: '', rating: '4.8', badge: 'LIMITED 50', img: 'https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Titanium Mechanical Pen', brand: 'WRITING', price: '$190', oldPrice: '', rating: '5.0', badge: 'ESSENTIAL', img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600' }
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
      background: '#fafaf9',
      color: '#1c1917',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: '1px solid #e7e5e4',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#000000' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#000000' }}>
              DRIBBBLE SHOT #15
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            DRIBBBLE LUXURY MONOCHROME EDITORIAL GRID #15
          </h2>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(0,0,0,0.04)', padding: '0.35rem', borderRadius: '100px' }}>
          {['ALL', 'FEATURED', 'NEW ARRIVALS', 'BEST SELLERS'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                border: 'none',
                background: activeTab === tab ? '#000000' : 'transparent',
                color: activeTab === tab ? '#ffffff' : '#1c1917',
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
            background: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #e7e5e4',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), boxShadow 0.35s ease',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '#f1f5f9' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'
                }}
              />
              
              {/* Badge */}
              <span style={{
                position: 'absolute', top: '16px', left: '16px', background: '#f5f5f4', color: '#27272a', fontSize: '0.65rem', fontWeight: 800, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px'
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
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#000000' }}>{p.price}</span>
                  {p.oldPrice && <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.5 }}>{p.oldPrice}</span>}
                </div>

                <button
                  onClick={() => toggleCart(p.id)}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '16px',
                    background: cart.includes(p.id) ? '#10b981' : '#000000',
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
