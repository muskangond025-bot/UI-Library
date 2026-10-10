import React, { useState } from 'react';

export const GlobalProductGrid18: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('ALL');

  const products = [
    { id: 1, name: 'Prism Glass Watch', brand: 'CHRONO', price: '$520', oldPrice: '', rating: '4.9', badge: 'LIMITED', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Crystal Audio Pod', brand: 'HARMONY', price: '$210', oldPrice: '$260', rating: '4.7', badge: 'SALE', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Spatial Iris Camera Lens', brand: 'OPTICS', price: '$1,200', oldPrice: '', rating: '5.0', badge: 'PRO', img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Glow Ambient Pebble', brand: 'NEO', price: '$95', oldPrice: '$120', rating: '4.8', badge: 'BESTSELLER', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=600' }
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
      background: '#0f172a',
      color: '#f8fafc',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#ec4899' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#ec4899' }}>
              DRIBBBLE SHOT #18
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            DRIBBBLE GLASSMORPHISM PRISM PRODUCT CAROUSEL GRID #18
          </h2>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', padding: '0.35rem', borderRadius: '100px' }}>
          {['ALL', 'FEATURED', 'NEW ARRIVALS', 'BEST SELLERS'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                border: 'none',
                background: activeTab === tab ? '#ec4899' : 'transparent',
                color: activeTab === tab ? '#ffffff' : '#f8fafc',
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
            background: 'rgba(30, 41, 59, 0.7)',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), boxShadow 0.35s ease',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Image Container */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '80%', overflow: 'hidden', background: '#1e293b' }}>
              <img
                src={p.img}
                alt={p.name}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease'
                }}
              />
              
              {/* Badge */}
              <span style={{
                position: 'absolute', top: '16px', left: '16px', background: 'rgba(236, 72, 153, 0.2)', color: '#f472b6', fontSize: '0.65rem', fontWeight: 800, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px'
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
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ec4899' }}>{p.price}</span>
                  {p.oldPrice && <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.5 }}>{p.oldPrice}</span>}
                </div>

                <button
                  onClick={() => toggleCart(p.id)}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '16px',
                    background: cart.includes(p.id) ? '#10b981' : '#ec4899',
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
