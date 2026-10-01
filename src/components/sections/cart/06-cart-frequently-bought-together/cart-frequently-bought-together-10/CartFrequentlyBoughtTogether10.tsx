import React, { useState } from 'react';
import { Plus, Check, ShoppingBag, Sparkles, ShieldCheck, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface BundleProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  size?: string;
  color?: string;
  availableSizes?: string[];
  availableColors?: { name: string; hex: string }[];
}

export function CartFrequentlyBoughtTogether10({ data }: { data?: any }) {
  const defaultProducts: BundleProduct[] = [
    {
      id: 'item-1',
      name: 'Architectural Wool Blazer',
      category: 'Main Cart Item',
      price: 24900,
      originalPrice: 29900,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      badge: 'In Your Cart',
      rating: 4.9,
      reviews: 142,
      size: '40R',
      color: 'Midnight Navy',
      availableSizes: ['38R', '40R', '42R', '44R'],
      availableColors: [
        { name: 'Midnight Navy', hex: '#1e293b' },
        { name: 'Charcoal Gray', hex: '#334155' },
        { name: 'Onyx Black', hex: '#0f172a' }
      ]
    },
    {
      id: 'item-2',
      name: 'Silk Pocket Square & Tie Set',
      category: 'Recommended Pair',
      price: 4900,
      originalPrice: 6500,
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      badge: '25% OFF PAIR',
      rating: 4.8,
      reviews: 98,
      size: 'One Size',
      color: 'Emerald Geometric',
      availableColors: [
        { name: 'Emerald Geometric', hex: '#047857' },
        { name: 'Burgundy Paisley', hex: '#881337' },
        { name: 'Royal Gold Chevron', hex: '#b45309' }
      ]
    },
    {
      id: 'item-3',
      name: 'Handcrafted Brass Tie Bar',
      category: 'Styling Accent',
      price: 2900,
      originalPrice: 3800,
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
      badge: 'Bestseller Add-on',
      rating: 4.9,
      reviews: 215,
      size: 'Standard 5cm',
      color: 'Brushed Gold',
      availableColors: [
        { name: 'Brushed Gold', hex: '#d97706' },
        { name: 'Antique Silver', hex: '#94a3b8' },
        { name: 'Matte Gunmetal', hex: '#475569' }
      ]
    }
  ];

  const products: BundleProduct[] = data?.products || defaultProducts;
  const mainTitle = data?.title || 'Suiting Trio Overlap Ensemble';
  const mainSubtitle = data?.subtitle || 'Complete your wardrobe silhouette with curated complementary accents';

  // Selected items state (initially all selected for bundle discount)
  const [selectedIds, setSelectedIds] = useState<string[]>(products.map(p => p.id));
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'item-1': '40R',
    'item-2': 'One Size',
    'item-3': 'Standard 5cm'
  });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const toggleSelect = (id: string) => {
    // Prevent unchecking the main item if desired, or allow free toggle
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // Keep at least one item
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedProducts = products.filter(p => selectedIds.includes(p.id));
  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  const originalTotal = selectedProducts.reduce((sum, p) => sum + p.originalPrice, 0);
  
  // Extra 10% bundle bonus if all 3 selected
  const isFullBundle = selectedIds.length === products.length;
  const bundleDiscountPercentage = isFullBundle ? 20 : 12;
  const finalPrice = Math.round(rawTotal * (1 - (isFullBundle ? 0.1 : 0)));
  const totalSavings = originalTotal - finalPrice;

  const handleAddBundle = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }, 900);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl overflow-hidden relative shadow-2xl my-6 border border-slate-800/80">
      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Exclusive Overlap Bundle</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
          {mainTitle}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-light">
          {mainSubtitle}
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left / Center: Interactive Overlapping Card Deck (Silhouettes & Fan-Out Animation) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-lg relative py-8 px-4 flex justify-center items-center min-h-[380px]">
            {products.map((product, index) => {
              const isSelected = selectedIds.includes(product.id);
              const isHovered = hoveredProduct === product.id;

              // Structural Overlap Positions & Rotation Transforms
              let translateOffset = '';
              let zIndexClass = '';

              if (index === 0) {
                translateOffset = isHovered 
                  ? 'translate-x-[-110px] sm:translate-x-[-130px] -rotate-6 scale-105 z-30'
                  : 'translate-x-[-70px] sm:translate-x-[-90px] -rotate-3 z-10';
              } else if (index === 1) {
                translateOffset = isHovered
                  ? 'translate-y-[-15px] rotate-0 scale-110 z-40'
                  : 'translate-x-0 rotate-0 z-20';
              } else {
                translateOffset = isHovered
                  ? 'translate-x-[110px] sm:translate-x-[130px] rotate-6 scale-105 z-30'
                  : 'translate-x-[70px] sm:translate-x-[90px] rotate-3 z-10';
              }

              return (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => toggleSelect(product.id)}
                  className={`absolute w-52 sm:w-60 bg-slate-900/90 backdrop-blur-xl border ${
                    isSelected
                      ? isHovered
                        ? 'border-indigo-400 ring-2 ring-indigo-500/50 shadow-2xl shadow-indigo-500/20'
                        : 'border-slate-700/80 shadow-xl shadow-black/50'
                      : 'border-slate-800 opacity-60 filter grayscale'
                  } rounded-2xl p-4 cursor-pointer transition-all duration-500 ease-out select-none ${translateOffset}`}
                >
                  {/* Selection Checkbox Pill */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      0{index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelect(product.id);
                      }}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/30'
                          : 'bg-slate-800 text-slate-500 border border-slate-700'
                      }`}
                    >
                      <Check className={`w-3.5 h-3.5 stroke-[3] ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-slate-950 mb-3 group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    {product.badge && (
                      <span className="absolute top-2 left-2 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-2 right-2 text-[10px] font-mono text-emerald-400 font-bold bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded border border-emerald-500/30">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Product Details */}
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-100 truncate mb-1">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 truncate mb-2">
                    {product.category}
                  </p>

                  {/* Quick Color Swatch Preview */}
                  {product.availableColors && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[9px] text-slate-400 font-mono">Shade:</span>
                      <div className="flex items-center gap-1">
                        {product.availableColors.map((c) => (
                          <span
                            key={c.name}
                            className="w-2.5 h-2.5 rounded-full border border-slate-700 shadow-sm"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hover cards to fan out & inspect items. Click cards to toggle bundle inclusions.</span>
          </p>
        </div>

        {/* Right: Bundle Control Panel & Dynamic Price Calculator */}
        <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          
          {/* Bundle Perks & List */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  <span>Selected Bundle ({selectedProducts.length}/{products.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Customized for your current cart items</p>
              </div>

              {isFullBundle && (
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1 animate-pulse">
                  <Zap className="w-3 h-3 fill-emerald-400" />
                  <span>20% Bundle Tier</span>
                </span>
              )}
            </div>

            {/* Selected Items List */}
            <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1">
              {products.map((item) => {
                const isSelected = selectedIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-slate-800/60 border-slate-700/80 text-slate-100'
                        : 'bg-slate-950/40 border-slate-800/40 text-slate-500 opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleSelect(item.id)}
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-800 border border-slate-700 text-transparent'
                        }`}
                      >
                        ✓
                      </button>
                      <img src={item.image} alt={item.name} className="w-9 h-9 rounded-lg object-cover" />
                      <div>
                        <p className="text-xs font-medium truncate max-w-[160px] sm:max-w-[190px]">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          ₹{item.price.toLocaleString('en-IN')} <span className="line-through text-slate-500">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                        </p>
                      </div>
                    </div>

                    {/* Size Selector */}
                    {isSelected && item.availableSizes && (
                      <select
                        value={selectedSizes[item.id] || item.size}
                        onChange={(e) => setSelectedSizes({ ...selectedSizes, [item.id]: e.target.value })}
                        className="bg-slate-950 text-slate-200 border border-slate-700 text-[10px] rounded-lg px-2 py-1 focus:outline-none focus:border-indigo-500"
                      >
                        {item.availableSizes.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Savings Callout */}
            {totalSavings > 0 && (
              <div className="bg-gradient-to-r from-emerald-950/50 to-teal-950/50 border border-emerald-500/30 rounded-xl p-3 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-emerald-200 font-medium">Instant Bundle Savings</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  -₹{totalSavings.toLocaleString('en-IN')}
                </span>
              </div>
            )}
          </div>

          {/* Pricing Breakdown & Action CTA */}
          <div className="pt-4 border-t border-slate-800">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-mono tracking-wider block">Total Bundle Price</span>
                <span className="text-xs text-emerald-400 font-medium">Includes free express delivery</span>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    ₹{finalPrice.toLocaleString('en-IN')}
                  </span>
                  {originalTotal > finalPrice && (
                    <span className="text-xs text-slate-500 line-through font-mono">
                      ₹{originalTotal.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddBundle}
              disabled={isAdding || selectedProducts.length === 0}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                isAdded
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/40'
                  : isAdding
                  ? 'bg-indigo-700 text-white cursor-wait'
                  : selectedProducts.length > 0
                  ? 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.99]'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              {isAdding ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Adding Bundle to Cart...</span>
                </>
              ) : isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Bundle Added to Your Cart!</span>
                </>
              ) : (
                <>
                  <span>Add {selectedProducts.length} Items to Cart</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-indigo-400" /> 30-Day Easy Returns
              </span>
              <span>•</span>
              <span>100% Guaranteed Fit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CartFrequentlyBoughtTogether10;