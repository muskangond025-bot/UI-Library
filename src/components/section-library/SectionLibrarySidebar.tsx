import React from 'react';
import { LayoutGrid, Images, Tag, Star, Grid, Bookmark } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function SectionLibrarySidebar({ activeCategory, onSelectCategory }: SidebarProps) {
  const categories = [
    { id: 'hero', label: 'Hero Banners', icon: LayoutGrid },
    { id: 'hero-carousel', label: 'Hero Carousel', icon: Images },
    { id: 'promotional', label: 'Promotional Banners', icon: Tag },
    { id: 'featured-categories', label: 'Featured Categories', icon: Star },
    { id: 'category-grid', label: 'Category Grid', icon: Grid },
    { id: 'featured-collections', label: 'Featured Collections', icon: Bookmark },
    { id: 'product-grids', label: 'Product Grids', icon: Tag },
    { id: 'product-carousels', label: 'Product Carousels', icon: Images },
    { id: 'best-sellers', label: 'Best Sellers', icon: Star },
    { id: 'new-arrivals', label: 'New Arrivals', icon: Star },
    { id: 'trending-products', label: 'Trending Products', icon: Tag },
    { id: 'sale-products', label: 'Sale Products', icon: Tag },
    { id: 'flash-sale', label: 'Flash Sale', icon: Tag },
    { id: 'featured-product', label: 'Featured Product', icon: Star },
    { id: 'image-text', label: 'Image + Text', icon: LayoutGrid },
    { id: 'split-image', label: 'Split Image Content', icon: LayoutGrid },
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

  return (
    <aside className="w-64 border-r border-gray-200 bg-gray-50 h-screen flex flex-col fixed left-0 top-0 shrink-0 z-20">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900">UI Library</h1>
        <p className="text-sm text-gray-500 mt-1">Section Library</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {categories.map(cat => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}
            >
              <Icon size={18} />
              {cat.label}
            </button>
          )
        })}
      </nav>
    </aside>
  );
}
