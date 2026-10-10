import React, { useState } from 'react';

export const GlobalProductGrid14: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('ALL');

  const products = [
    { id: 1, name: 'Retro Pop Headphones', brand: 'PLAYFUL', price: '$160', oldPrice: '', rating: '4.9', badge: 'HOT POP', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Bubble Game Console', brand: 'PIXEL', price: '$220', oldPrice: '$250', rating: '4.8', badge: 'FUN PICK', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Smooth Clay Speaker', brand: 'SOUND3D', price: '$135', oldPrice: '', rating: '5.0', badge: 'NEW', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Vibrant Aero Mouse', brand: 'GLIDE', price: '$75', oldPrice: '$95', rating: '4.7', badge: '-20%', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600' }
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
      background: '#fff7ed',
      color: '#431407',
      borderRadius: '28px',
      boxSizing: 'border-box',
      border: '2px solid #fed7aa',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span style={{ height: '8px', width: '8px', borderRadius: '50%', background: '#f97316' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#f97316' }}>
              DRIBBBLE SHOT #14
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.8px' }}>
            DRIBBBLE CLAYMORPHIC 3D POP E-COMMERCE GRID #14
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
                background: activeTab === tab ? '#f97316' : 'transparent',
                color: activeTab === tab ? '#ffffff' : '#431407',
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
            border: '2px solid #fed7aa',
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
                position: 'absolute', top: '16px', left: '16px', background: '#ffedd5', color: '#ea580c', fontSize: '0.65rem', fontWeight: 800, padding: '5px 12px', borderRadius: '100px', letterSpacing: '0.5px'
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
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#f97316' }}>{p.price}</span>
                  {p.oldPrice && <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', opacity: 0.5 }}>{p.oldPrice}</span>}
                </div>

                <button
                  onClick={() => toggleCart(p.id)}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '16px',
                    background: cart.includes(p.id) ? '#10b981' : '#f97316',
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
