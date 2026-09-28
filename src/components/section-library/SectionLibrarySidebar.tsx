import React, { useState } from 'react';
import { LayoutGrid, Images, Tag, Star, Grid, Bookmark, ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function SectionLibrarySidebar({ activeCategory, onSelectCategory }: SidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    home: true,
    product: false
  });

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  const homeCategories = [
    { id: 'hero-banner', label: 'Hero Banner', icon: LayoutGrid },
    { id: 'hero-carousel', label: 'Hero Carousel', icon: Images },
    { id: 'promotional-banner', label: 'Promotional Banner', icon: Tag },
    { id: 'featured-categories', label: 'Featured Categories', icon: Star },
    { id: 'category-grid', label: 'Category Grid', icon: Grid },
    { id: 'featured-collections', label: 'Featured Collections', icon: Bookmark },
    { id: 'product-grid', label: 'Product Grid', icon: Tag },
    { id: 'product-carousel', label: 'Product Carousel', icon: Images },
    { id: 'best-sellers', label: 'Best Sellers', icon: Star },
    { id: 'new-arrivals', label: 'New Arrivals', icon: Star },
    { id: 'trending-products', label: 'Trending Products', icon: Tag },
    { id: 'sale-products', label: 'Sale Products', icon: Tag },
    { id: 'flash-sale', label: 'Flash Sale', icon: Tag },
    { id: 'featured-product', label: 'Featured Product', icon: Star },
    { id: 'image-text', label: 'Image + Text', icon: LayoutGrid },
    { id: 'split-image-content', label: 'Split Image Content', icon: LayoutGrid },
    { id: 'promotional-cards', label: 'Promotional Cards', icon: Bookmark },
    { id: 'why-choose-us', label: 'Why Choose Us', icon: Star },
    { id: 'brand-showcase', label: 'Brand Showcase', icon: Grid },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'customer-reviews', label: 'Customer Reviews', icon: Star },
    { id: 'video-showcase', label: 'Video Showcase', icon: Images },
    { id: 'blog-highlights', label: 'Blog Highlights', icon: LayoutGrid },
    { id: 'buying-guide', label: 'Buying Guide', icon: Bookmark },
    { id: 'faq', label: 'FAQ', icon: LayoutGrid },
    { id: 'newsletter', label: 'Newsletter', icon: Bookmark },
  ];

  const productCategories = [
    { id: 'product-gallery', label: 'Product Gallery', icon: Grid },
    { id: 'product-information', label: 'Product Information', icon: Grid },
    { id: 'product-purchase-section', label: 'Product Purchase Section', icon: Grid },
    { id: 'product-description', label: 'Product Description', icon: Grid },
    { id: 'product-highlights', label: 'Product Highlights', icon: Grid },
    { id: 'product-specifications', label: 'Product Specifications', icon: Grid },
    { id: 'product-features', label: 'Product Features', icon: Grid },
    { id: 'what-s-included', label: "What's Included", icon: Grid },
    { id: 'size-guide', label: 'Size Guide', icon: Grid },
    { id: 'product-care', label: 'Product Care', icon: Grid },
    { id: 'warranty-information', label: 'Warranty Information', icon: Grid },
    { id: 'shipping-delivery-information', label: 'Shipping & Delivery Information', icon: Grid },
    { id: 'return-refund-information', label: 'Return & Refund Information', icon: Grid },
    { id: 'payment-information', label: 'Payment Information', icon: Grid },
    { id: 'frequently-bought-together', label: 'Frequently Bought Together', icon: Grid },
    { id: 'product-bundles', label: 'Product Bundles', icon: Grid },
    { id: 'related-products', label: 'Related Products', icon: Grid },
    { id: 'similar-products', label: 'Similar Products', icon: Grid },
    { id: 'recommended-products', label: 'Recommended Products', icon: Grid },
    { id: 'customer-reviews-product', label: 'Customer Reviews', icon: Grid },
    { id: 'review-summary', label: 'Review Summary', icon: Grid },
    { id: 'customer-review-gallery', label: 'Customer Review Gallery', icon: Grid },
    { id: 'questions-answers', label: 'Questions & Answers', icon: Grid },
    { id: 'product-faq', label: 'Product FAQ', icon: Grid },
    { id: 'brand-information', label: 'Brand Information', icon: Grid },
  ];

  const padNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <aside className="w-80 border-r border-gray-200 bg-gray-50 h-screen flex flex-col fixed left-0 top-0 shrink-0 z-20">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900">UI Library</h1>
        <p className="text-sm text-gray-500 mt-1">Section Library</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* HOME PAGE Group */}
        <div>
          <button 
            onClick={() => toggleGroup('home')}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 rounded-md transition-colors"
          >
            <span>HOME PAGE</span>
            {expandedGroups['home'] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {expandedGroups['home'] && (
            <div className="mt-1 ml-2 space-y-1">
              {homeCategories.map((cat, index) => {
                // Ensure correct matching. Note: the old IDs had 'hero' instead of 'hero-banner' but let's stick to user's ids.
                // The grid uses 'hero' for Banner... wait, grid uses 'hero', 'hero-carousel', 'promotional', 'featured-categories', 'category-grid', 'featured-collections', 'product-grids', 'product-carousels', 'best-sellers', 'new-arrivals', 'trending-products', 'sale-products', 'flash-sale', 'featured-product', 'image-text', 'split-image', 'promotional-cards', 'why-choose-us', 'brand-showcase', 'testimonials', 'customer-reviews', 'video-showcase', 'blog-highlights', 'buying-guide', 'faq', 'newsletter'.
                // I must map the ID to the one expected by SectionLibraryGrid.tsx!
                const mappedId = 
                  cat.id === 'hero-banner' ? 'hero' : 
                  cat.id === 'promotional-banner' ? 'promotional' : 
                  cat.id === 'product-grid' ? 'product-grids' : 
                  cat.id === 'product-carousel' ? 'product-carousels' : 
                  cat.id === 'split-image-content' ? 'split-image' : 
                  cat.id;

                const isActive = activeCategory === mappedId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(mappedId)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                  >
                    <span className="w-5 text-xs text-gray-400 font-mono text-right shrink-0">{padNum(index + 1)}</span>
                    <span className="truncate">{cat.label}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* PRODUCT Group */}
        <div>
          <button 
            onClick={() => toggleGroup('product')}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-200 rounded-md transition-colors"
          >
            <span>PRODUCT</span>
            {expandedGroups['product'] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {expandedGroups['product'] && (
            <div className="mt-1 ml-2 space-y-1">
              {productCategories.map((cat, index) => {
                const mappedId = cat.id === 'customer-reviews-product' ? 'customer-reviews' : cat.id; // Assuming the grid component handles this, wait, grid has two 'customer-reviews'? Product has its own 'customer-reviews' category in grid but wait, the grid code has 'customer-reviews' for both? Let's check. Actually, the original categories array had 'customer-reviews' twice, but grid expects 'customer-reviews' for both? Yes, if it is the same ID.
                const isActive = activeCategory === mappedId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(mappedId)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
                  >
                    <span className="w-5 text-xs text-gray-400 font-mono text-right shrink-0">{padNum(index + 1)}</span>
                    <span className="truncate">{cat.label}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

      </nav>
    </aside>
  );
}
