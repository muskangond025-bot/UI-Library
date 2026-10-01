const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';

const variants = [
  { num: 1, name: 'CartItemsSection1', folder: 'cart-items-section-1', title: '01. Editorial Horizontal Cart Item', desc: 'Generous editorial layout placing a large portrait product image on the left, structured metadata in the center, and pricing alongside stacked quantity controls on the right.', badge: 'EDITORIAL LUXURY', styleTag: 'Editorial / Horizontal' },
  { num: 2, name: 'CartItemsSection2', folder: 'cart-items-section-2', title: '02. Vertical Stacked Cart Item', desc: 'Fully vertical composition with full-width top product image, centered title and variant badge, followed by bottom pricing, quantity stepper, and full-width action bar.', badge: 'VERTICAL STACK', styleTag: 'Vertical / Stacked' },
  { num: 3, name: 'CartItemsSection3', folder: 'cart-items-section-3', title: '03. Image Dominant Overlap Cart Item', desc: 'Product image dominates the item card while a floating glassmorphic information card overlaps the bottom right with price and quantity integrated.', badge: 'IMAGE DOMINANT', styleTag: 'Image Focus / Overlap' },
  { num: 4, name: 'CartItemsSection4', folder: 'cart-items-section-4', title: '04. Split Screen 50/50 Cart Item', desc: 'Dual-column 50/50 mini product detail layout featuring left high-resolution image and right detailed product parameters, pricing, quantity, and checkout actions.', badge: 'SPLIT 50/50', styleTag: 'Mini Detail View' },
  { num: 5, name: 'CartItemsSection5', folder: 'cart-items-section-5', title: '05. Ultra-Compact Cart Line Row', desc: 'Ultra-dense single line item featuring micro thumbnail, inline product title, inline price, compact quantity control, and subtle remove link for high-density carts.', badge: 'COMPACT ROW', styleTag: 'High Density / Line' },
  { num: 6, name: 'CartItemsSection6', folder: 'cart-items-section-6', title: '06. Asymmetric Editorial Cart Item', desc: 'Intentionally off-center asymmetric composition pairing a wide product image on the left with a narrow right metadata block and floating offset price badge.', badge: 'ASYMMETRIC', styleTag: 'Editorial / Off-Center' },
  { num: 7, name: 'CartItemsSection7', folder: 'cart-items-section-7', title: '07. Product Story Magazine Item', desc: 'Storytelling composition embedding craft notes, material provenance bullet points, and high-contrast typographic hierarchy alongside product image.', badge: 'CRAFT STORY', styleTag: 'Storytelling / Magazine' },
  { num: 8, name: 'CartItemsSection8', folder: 'cart-items-section-8', title: '08. Card with Expandable Details', desc: 'Interactive accordion line item showing compact summary by default and expanding on click to reveal warranty, care instructions, and return policy details.', badge: 'EXPANDABLE ACCORDION', styleTag: 'Interactive / Accordion' },
  { num: 9, name: 'CartItemsSection9', folder: 'cart-items-section-9', title: '09. Image + Overlay Information Item', desc: 'Full image backdrop framing where product title, variant, price, quantity controls, and actions overlay the bottom gradient mask without a separate card container.', badge: 'OVERLAY GRADIENT', styleTag: 'Full Image / Gradient Overlay' },
  { num: 10, name: 'CartItemsSection10', folder: 'cart-items-section-10', title: '10. Structured Table-Style Line Item', desc: 'Tabular ecommerce grid separating Product, Options, Unit Price, Quantity, Subtotal, and Action into clear structured columns with vertical dividers.', badge: 'TABULAR GRID', styleTag: 'Table / Multi-Column' },
  { num: 11, name: 'CartItemsSection11', folder: 'cart-items-section-11', title: '11. Floating Product Panel Item', desc: 'Multi-depth elevation layout where the product thumbnail is visually detached on the left and information sits in an overlapping floating panel on the right.', badge: 'FLOATING PANEL', styleTag: 'Depth / Overlapping Panels' },
  { num: 12, name: 'CartItemsSection12', folder: 'cart-items-section-12', title: '12. High-Fashion Magazine Layout', desc: 'Editorial magazine layout featuring oversized typographic title, serif metadata, and custom quote block alongside editorial product photography.', badge: 'MAGAZINE EDITORIAL', styleTag: 'High Fashion / Magazine' },
  { num: 13, name: 'CartItemsSection13', folder: 'cart-items-section-13', title: '13. Vertical Product Rail Item', desc: 'Vertical rhythm composition featuring a left image rail with stacked right metadata, vertical quantity stepper column, and bottom action bar.', badge: 'VERTICAL RAIL', styleTag: 'Vertical Rail Rhythm' },
  { num: 14, name: 'CartItemsSection14', folder: 'cart-items-section-14', title: '14. Multi-Layered Overlapping Card Item', desc: 'Three-tiered visual depth composition layering background shadow card, product image card, and floating price/action control card.', badge: 'LAYERED DEPTH', styleTag: 'Multi-Layer / 3D Depth' },
  { num: 15, name: 'CartItemsSection15', folder: 'cart-items-section-15', title: '15. Minimal Typography-Focused Item', desc: 'Image-light layout using bold typographic hierarchy, generous letter spacing, and clean rule dividers as the primary visual structure.', badge: 'MINIMAL TYPOGRAPHY', styleTag: 'Typography First / No Heavy Cards' },
  { num: 16, name: 'CartItemsSection16', folder: 'cart-items-section-16', title: '16. Mobile-First Touch Cart Item', desc: 'Designed from mobile-first principles with full-width touch targets (48px buttons), stacked controls, and responsive desktop transformation.', badge: 'MOBILE TOUCH FIRST', styleTag: 'Mobile First / Touch Targets' },
  { num: 17, name: 'CartItemsSection17', folder: 'cart-items-section-17', title: '17. Inline Control Integrated Item', desc: 'Controls integrated directly into the product text flow where variant, unit price, quantity stepper, and remove action flow seamlessly in one inline block.', badge: 'INLINE CONTROLS', styleTag: 'Integrated Flow / Inline' },
  { num: 18, name: 'CartItemsSection18', folder: 'cart-items-section-18', title: '18. Featured Spotlight Cart Item', desc: 'Prominent spotlight layout with gold border accents, expanded craft summary, gift packaging selector, and high-contrast price badge.', badge: 'FEATURED SPOTLIGHT', styleTag: 'Spotlight / Premium Accent' },
  { num: 19, name: 'CartItemsSection19', folder: 'cart-items-section-19', title: '19. Interactive Drawer Expansion Item', desc: 'Default view shows a clean item card with interactive expansion trigger revealing image gallery thumbnails, option pickers, and live price calculator.', badge: 'INTERACTIVE DRAWER', styleTag: 'Drawer Expansion / Gallery' },
  { num: 20, name: 'CartItemsSection20', folder: 'cart-items-section-20', title: '20. Experimental Avant-Garde Cart Item', desc: 'Experimental luxury composition with diagonal background cuts, floating offset badges, vertical rotated label text, and glassmorphic control pill.', badge: 'AVANT-GARDE EXPERIMENTAL', styleTag: 'Experimental / Avant-Garde' }
];

variants.forEach(v => {
  const dirPath = path.join(baseDir, v.folder);
  fs.mkdirSync(dirPath, { recursive: true });

  const jsonContent = JSON.stringify({
    heading: v.title,
    description: v.desc,
    product: {
      name: 'Aethelgard Cashmere & Leather Craft Item',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800',
      variant: 'Midnight Black / Size 50',
      quantity: 1,
      unitPrice: 1250,
      originalPrice: 1450,
      discount: '15% OFF',
      currency: '$',
      availability: 'in-stock',
      badge: v.badge,
      styleTag: v.styleTag,
      descriptionText: 'Handcrafted from 100% Mongolian cashmere and full-grain Italian leather hardware.',
      removeLabel: 'Remove item',
      saveForLaterLabel: 'Save for later'
    }
  }, null, 2);
  fs.writeFileSync(path.join(dirPath, v.folder + '.json'), jsonContent, 'utf8');
});

console.log('Successfully updated JSON metadata files!');
