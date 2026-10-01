const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';
fs.mkdirSync(baseDir, { recursive: true });

const variants = [
  { num: 1, name: 'CartItemsSection1', folder: 'cart-items-section-1', title: '01. Minimal Luxury Cart Item', desc: 'Ultra-refined minimalist horizontal cart row featuring fine typography, subtle border states, smooth opacity fade transitions, and clean quantity adjustment.', prodName: 'Aethelgard Silk Cashmere Overcoat', variant: 'Midnight Black / Size 50', unitPrice: 1250, originalPrice: 1450, badge: 'LUXURY EDITION', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6', styleTag: 'Minimalist / High Luxury' },
  { num: 2, name: 'CartItemsSection2', folder: 'cart-items-section-2', title: '02. Editorial Cart Line', desc: 'Spacious editorial cart line placing structured serif headings beside stacked variant parameters and inline price micro-interactions.', prodName: 'Atelier Minimalist Wool Blazer', variant: 'Oatmeal Tweed / Medium', unitPrice: 680, originalPrice: 780, badge: 'EDITORIAL PICK', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', styleTag: 'Editorial / Magazine' },
  { num: 3, name: 'CartItemsSection3', folder: 'cart-items-section-3', title: '03. Large Image Cart Item', desc: 'High-impact cart card anchored by an immersive portrait product image with floating status badges and scale zoom effects.', prodName: 'Lumina Signature Leather Handbag', variant: 'Cognac Brown / Gold Hardware', unitPrice: 940, originalPrice: 1100, badge: 'LIMITED STOCK', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3', styleTag: 'Visual / Large Portrait' },
  { num: 4, name: 'CartItemsSection4', folder: 'cart-items-section-4', title: '04. Compact Shopping Cart Row', desc: 'Ultra-dense table-inspired item row optimized for multi-item quick review with pill-shaped quantity controls and inline actions.', prodName: 'Nordic Ceramic Coffee Set', variant: 'Matte Charcoal / 4-Piece', unitPrice: 145, originalPrice: 180, badge: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa', styleTag: 'Dense / Multi-Item' },
  { num: 5, name: 'CartItemsSection5', folder: 'cart-items-section-5', title: '05. Split Product + Quantity Layout', desc: 'Dual-pane card splitting product identity on the left and quantity control panel on the right with sliding tab highlights.', prodName: 'Ergonomic Studio Monitor Headphones', variant: 'Matte Black / Wireless Pro', unitPrice: 350, originalPrice: 420, badge: 'IN STOCK', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', styleTag: 'Dual Pane / Segmented' },
  { num: 6, name: 'CartItemsSection6', folder: 'cart-items-section-6', title: '06. Floating Cart Item', desc: 'Glassmorphic floating elevated card featuring multi-layer backdrop blur, drop shadow elevation micro-interactions, and floating action triggers.', prodName: 'Apex Precision Automatic Timepiece', variant: 'Titanium Case / Sapphire Crystal', unitPrice: 2100, originalPrice: 2400, badge: 'EXCLUSIVITY SEAL', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', styleTag: 'Glassmorphic / Elevated' },
  { num: 7, name: 'CartItemsSection7', folder: 'cart-items-section-7', title: '07. Magazine-Style Cart Item', desc: 'High-fashion magazine layout with typographic contrast, subtle serif details, and custom action menu reveal.', prodName: 'Vogue Couture Silk Evening Gown', variant: 'Emerald Green / US 4', unitPrice: 1850, originalPrice: 2200, badge: 'RUNWAY SELECTION', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae', styleTag: 'Magazine / High Contrast' },
  { num: 8, name: 'CartItemsSection8', folder: 'cart-items-section-8', title: '08. Image-First Cart Item', desc: 'Full-bleed landscape thumbnail framing with subtle dark overlay details and instant quantity hover steppers.', prodName: 'Architectural Minimalist Desk Lamp', variant: 'Brushed Brass / Dimmable LED', unitPrice: 290, originalPrice: 340, badge: 'DESIGN AWARD 2026', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c', styleTag: 'Full Bleed / Landscape' },
  { num: 9, name: 'CartItemsSection9', folder: 'cart-items-section-9', title: '09. Horizontal Product Story Cart Item', desc: 'Narrative cart line embedding brief craft notes and materials provenance alongside unit prices.', prodName: 'Handcrafted Japanese Chef Knife', variant: 'Damascus Steel / Rosewood Handle', unitPrice: 480, originalPrice: 550, badge: 'MASTER CRAFT', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45', styleTag: 'Storytelling / Craft' },
  { num: 10, name: 'CartItemsSection10', folder: 'cart-items-section-10', title: '10. Stacked Cart Item', desc: 'Modern vertical block structure stacking image, options, and full-width touch-friendly controls for seamless mobile-first review.', prodName: 'Urban Commuter Waterproof Backpack', variant: 'Slate Grey / 25L Capacity', unitPrice: 195, originalPrice: 230, badge: 'ECO RECYCLED', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', styleTag: 'Vertical Stack / Touch' },
  { num: 11, name: 'CartItemsSection11', folder: 'cart-items-section-11', title: '11. Asymmetric Cart Item', desc: 'Asymmetric geometric framing with off-center image placement, offset badges, and animated line accent indicators.', prodName: 'Futuristic Modular Sneakers', variant: 'Neptune Blue / EU 42', unitPrice: 320, originalPrice: 380, badge: 'NEW ARRIVAL', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', styleTag: 'Asymmetric / Avant-Garde' },
  { num: 12, name: 'CartItemsSection12', folder: 'cart-items-section-12', title: '12. Expandable Cart Item Details', desc: 'Interactive accordion line item expanding warranty details, gift wrapping notes, and return policies upon toggle click.', prodName: 'Pro Studio DSLR Camera Body', variant: 'Full Frame 45MP / Body Only', unitPrice: 3400, originalPrice: 3800, badge: 'PRO GUARANTEE', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32', styleTag: 'Expandable Accordion' },
  { num: 13, name: 'CartItemsSection13', folder: 'cart-items-section-13', title: '13. Inline Variant Selector Cart Item', desc: 'Smart cart line enabling direct inline color and size variant adjustment without leaving the cart view.', prodName: 'Organic Linen Casual Shirt', variant: 'Sand Beige / Large', unitPrice: 110, originalPrice: 135, badge: '100% ORGANIC', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c', styleTag: 'Inline Variant Picker' },
  { num: 14, name: 'CartItemsSection14', folder: 'cart-items-section-14', title: '14. Layered Cart Item', desc: 'Multi-card depth layering with staggered shadow drops, subtle hover elevation, and floating removal prompts.', prodName: 'Velvet Accent Lounge Chair', variant: 'Mustard Yellow / Brass Legs', unitPrice: 890, originalPrice: 1050, badge: 'EXPRESS FREIGHT', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7', styleTag: 'Multi-Card Depth' },
  { num: 15, name: 'CartItemsSection15', folder: 'cart-items-section-15', title: '15. Premium Table-Style Cart Item', desc: 'Structured tabular line item with clean column dividers, bold total calculation highlight, and keyboard accessible actions.', prodName: 'Acoustic Soundproofing Wall Panels', variant: 'Walnut Finish / Pack of 8', unitPrice: 260, originalPrice: 310, badge: 'EASY INSTALL', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f', styleTag: 'Tabular / Grid Row' },
  { num: 16, name: 'CartItemsSection16', folder: 'cart-items-section-16', title: '16. Mobile-First Cart Item', desc: 'Optimized touch layout featuring large 48px target buttons, swipe action indicators, and bottom action bar.', prodName: 'Ultra-Lightweight Running Shoes', variant: 'Solar Red / Size 10.5', unitPrice: 160, originalPrice: 190, badge: 'FAST DISPATCH', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', styleTag: 'Mobile Touch Optimized' },
  { num: 17, name: 'CartItemsSection17', folder: 'cart-items-section-17', title: '17. Product Thumbnail Rail Cart Item', desc: 'Interactive item view with multi-angle thumbnail rail on hover and live image swapping micro-interactions.', prodName: 'Smart Fitness Tracking Watch', variant: 'Matte Silver / Silicone Band', unitPrice: 280, originalPrice: 330, badge: 'SMART DISPATCH', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1', styleTag: 'Thumbnail Rail Swap' },
  { num: 18, name: 'CartItemsSection18', folder: 'cart-items-section-18', title: '18. Interactive Cart Item', desc: 'Dynamic item card with live price calculation feedback glow, stock status indicators, and instant save-to-wishlist micro-animation.', prodName: '4K Ultra-Short Throw Projector', variant: 'Laser Engine / Metallic Grey', unitPrice: 2490, originalPrice: 2890, badge: 'LOW STOCK - 2 LEFT', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', styleTag: 'Dynamic Feedback Glow' },
  { num: 19, name: 'CartItemsSection19', folder: 'cart-items-section-19', title: '19. Visual Quantity-Control Cart Item', desc: 'Segmented touch slider for visual quantity adjustment with progress bar indicator and bulk savings notifications.', prodName: 'Artisan Whole Bean Coffee (1kg)', variant: 'Ethiopian Yirgacheffe / Medium Dark', unitPrice: 42, originalPrice: 50, badge: 'FRESH ROAST', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e', styleTag: 'Segmented Visual Slider' },
  { num: 20, name: 'CartItemsSection20', folder: 'cart-items-section-20', title: '20. Premium Commerce Line Item', desc: 'Flagship luxury ecommerce line item combining gold accent borders, serif typography, animated price counters, and complete state indicators.', prodName: 'Monogrammed Travel Suitcase', variant: 'Aluminum Silver / Carry-On 21"', unitPrice: 1150, originalPrice: 1350, badge: 'FLAGSHIP EDITION', image: 'https://images.unsplash.com/photo-1565026057447-ba90a3d773f4', styleTag: 'Flagship Luxury' }
];

variants.forEach(v => {
  const dirPath = path.join(baseDir, v.folder);
  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify({
    heading: v.title,
    description: v.desc,
    product: {
      name: v.prodName,
      image: v.image,
      variant: v.variant,
      size: "Standard",
      color: "Default",
      quantity: 1,
      unitPrice: v.unitPrice,
      originalPrice: v.originalPrice,
      discount: Math.round((1 - v.unitPrice / v.originalPrice) * 100) + "% OFF",
      currency: "$",
      availability: "in-stock",
      badge: v.badge,
      styleTag: v.styleTag,
      removeLabel: "Remove item",
      saveForLaterLabel: "Save for later",
      editLabel: "Edit options",
      ctaLabel: "View details"
    }
  }, null, 2);
  fs.writeFileSync(path.join(dirPath, `${v.folder}.json`), jsonContent, 'utf8');

  const tsxContent = `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart, ShieldCheck } from 'lucide-react';

export interface ${v.name}Props {
  data?: {
    heading?: string;
    description?: string;
    product?: {
      name?: string;
      image?: string;
      variant?: string;
      size?: string;
      color?: string;
      quantity?: number;
      unitPrice?: number;
      originalPrice?: number;
      discount?: string;
      currency?: string;
      availability?: string;
      badge?: string;
      styleTag?: string;
      removeLabel?: string;
      saveForLaterLabel?: string;
      editLabel?: string;
      ctaLabel?: string;
    };
  };
}

export const ${v.name}: React.FC<${v.name}Props> = ({ data }) => {
  const product = data?.product || {
    name: ${JSON.stringify(v.prodName)},
    image: ${JSON.stringify(v.image)},
    variant: ${JSON.stringify(v.variant)},
    quantity: 1,
    unitPrice: ${v.unitPrice},
    originalPrice: ${v.originalPrice},
    discount: '15% OFF',
    currency: '$',
    availability: 'in-stock',
    badge: ${JSON.stringify(v.badge)},
    styleTag: ${JSON.stringify(v.styleTag)},
    removeLabel: 'Remove item',
    saveForLaterLabel: 'Save for later'
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isSaved, setIsSaved] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [selectedVariant] = useState(product.variant || 'Standard');

  if (isRemoved) {
    return (
      <section className="py-8 px-4 bg-gray-50/50 dark:bg-gray-900/50 transition-all duration-500">
        <div className="max-w-4xl mx-auto text-center p-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Item removed from shopping cart.</p>
          <button
            onClick={() => setIsRemoved(false)}
            className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Undo removal
          </button>
        </div>
      </section>
    );
  }

  const totalPrice = (product.unitPrice || 100) * qty;

  return (
    <section className="py-10 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto mb-6 text-center sm:text-left">
        <div className="flex flex-wrap items-center gap-2 mb-2 justify-center sm:justify-start">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            {product.badge || ${JSON.stringify(v.badge)}}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {product.styleTag || ${JSON.stringify(v.styleTag)}}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          {data?.heading || ${JSON.stringify(v.title)}}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
          {data?.description || ${JSON.stringify(v.desc)}}
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Product Image */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Product Meta */}
            <div className="flex-1 w-full flex flex-col justify-between min-h-[140px]">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                      Variant: <span className="text-slate-700 dark:text-slate-300">{selectedVariant}</span>
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      {product.currency || '$'}{totalPrice.toLocaleString()}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs text-slate-400 line-through">
                        {product.currency || '$'}{(product.originalPrice * qty).toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> In Stock & Ready to Ship
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>Unit Price: {product.currency || '$'}{product.unitPrice}</span>
                </div>
              </div>

              {/* Quantity & Actions Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                
                {/* Quantity Control */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Qty:</span>
                  <div className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-0.5">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      aria-label="Decrease quantity"
                      className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-9 text-center text-xs font-bold text-slate-800 dark:text-slate-100">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      aria-label="Increase quantity"
                      className="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 text-xs font-medium">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={\`inline-flex items-center gap-1.5 transition-colors \${
                      isSaved
                        ? 'text-rose-600 dark:text-rose-400 font-bold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400'
                    }\`}
                  >
                    <Heart className={\`w-3.5 h-3.5 \${isSaved ? 'fill-current' : ''}\`} />
                    {isSaved ? 'Saved for Later' : product.saveForLaterLabel || 'Save for later'}
                  </button>

                  <button
                    onClick={() => setIsRemoved(true)}
                    className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    {product.removeLabel || 'Remove'}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
`;
  fs.writeFileSync(path.join(dirPath, `${v.name}.tsx`), tsxContent, 'utf8');
});

console.log('Successfully generated all 20 cart item variants!');
