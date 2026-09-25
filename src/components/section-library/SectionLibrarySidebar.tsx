import React from 'react';
import { LayoutGrid, Images } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function SectionLibrarySidebar({ activeCategory, onSelectCategory }: SidebarProps) {
  const categories = [
    { id: 'hero', label: 'Hero Banners', icon: LayoutGrid },
    { id: 'hero-carousel', label: 'Hero Carousel', icon: Images },
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
