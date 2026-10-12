import React, { useState, useRef, useEffect } from 'react';
import { 
  homeCategories, 
  productCategories, 
  cartCategories, 
  checkoutCategories, 
  orderCategories, 
  accountCategories, 
  offersCategories, 
  blogCategories, 
  aboutCategories, 
  contactCategories, 
  errorCategories, 
  globalCategories 
} from './navigationData';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function SectionLibraryNavbar({ activeCategory, onSelectCategory }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Close dropdown on outside click or scroll
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const navSections = [
    { key: 'home', label: 'HOME', categories: homeCategories },
    { key: 'product', label: 'PRODUCT', categories: productCategories },
    { key: 'cart', label: 'CART', categories: cartCategories },
    { key: 'checkout', label: 'CHECKOUT', categories: checkoutCategories },
    { key: 'order', label: 'ORDER', categories: orderCategories },
    { key: 'account', label: 'ACCOUNT', categories: accountCategories },
    { key: 'offers', label: 'OFFERS / DEALS', categories: offersCategories },
    { key: 'blog', label: 'BLOG', categories: blogCategories },
    { key: 'about', label: 'ABOUT', categories: aboutCategories },
    { key: 'contact', label: 'CONTACT', categories: contactCategories },
    { key: 'error', label: 'ERROR / EMPTY', categories: errorCategories },
    { key: 'global', label: 'GLOBAL MAJOR', categories: globalCategories },
  ];

  const handleSubcategoryClick = (id: string) => {
    onSelectCategory(id);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSectionActive = (section: (typeof navSections)[0]) => {
    if (activeCategory === section.key) return true;
    if (section.key === 'offers' && activeCategory === 'offers') return true;
    if (section.key === 'error' && (activeCategory === 'error' || activeCategory === 'error-empty')) return true;
    if (section.key === 'global' && (activeCategory === 'global' || activeCategory === 'global-major')) return true;
    return section.categories.some(c => c.id === activeCategory);
  };

  const handleOpenMenu = (key: string) => {
    const btn = activeBtnRefs.current[key];
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const dropdownWidth = 288; // w-72 = 18rem = 288px
      let left = rect.left;
      
      // If overflows window on right, align to right of the button
      if (left + dropdownWidth > window.innerWidth - 16) {
        left = Math.max(16, rect.right - dropdownWidth);
      }

      setDropdownPos({
        left,
        top: rect.bottom + 4,
        width: dropdownWidth
      });
      setOpenDropdown(key);
    }
  };

  const handleScrollNav = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const currentSection = navSections.find(s => s.key === openDropdown);

  return (
    <div ref={navRef} className="sticky top-0 z-[99999] w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex items-center px-4 lg:px-8 py-1.5 w-full max-w-[1920px] mx-auto gap-3">
        {/* FIXED LOGO ON LEFT */}
        <div 
          className="shrink-0 flex items-center gap-2 cursor-pointer bg-white py-1 pr-3 border-r border-gray-200" 
          onClick={() => handleSubcategoryClick(homeCategories[0].id)}
        >
          <div className="w-7 h-7 rounded-lg bg-black text-white font-black flex items-center justify-center text-[11px] tracking-tighter shadow-sm">
            UI
          </div>
          <h1 className="text-sm font-extrabold tracking-tight text-gray-900 uppercase whitespace-nowrap">
            UI LIBRARY
          </h1>
        </div>
        
        {/* HORIZONTALLY SCROLLABLE NAVIGATION ROW */}
        <div className="relative flex items-center flex-1 min-w-0">
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3.5 flex-nowrap py-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full scroll-smooth"
            onScroll={() => {
              if (openDropdown) {
                // Update dropdown position on horizontal scroll
                const btn = activeBtnRefs.current[openDropdown];
                if (btn) {
                  const rect = btn.getBoundingClientRect();
                  let left = rect.left;
                  if (left + 288 > window.innerWidth - 16) {
                    left = Math.max(16, rect.right - 288);
                  }
                  setDropdownPos({ left, top: rect.bottom + 4, width: 288 });
                }
              }
            }}
          >
            {navSections.map((sec) => {
              const active = isSectionActive(sec);
              const isOpen = openDropdown === sec.key;

              return (
                <div 
                  key={sec.key} 
                  className="relative flex items-center shrink-0"
                  onMouseEnter={() => handleOpenMenu(sec.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button 
                    ref={(el) => { activeBtnRefs.current[sec.key] = el; }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isOpen) {
                        setOpenDropdown(null);
                      } else {
                        handleOpenMenu(sec.key);
                      }
                    }}
                    className={`flex items-center gap-1 relative py-1.5 px-1 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                      active
                        ? 'text-black font-extrabold border-b-2 border-black'
                        : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                    }`}
                  >
                    {sec.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 opacity-60 ${isOpen ? 'rotate-180 text-black' : ''}`} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Optional sleek scroll indicators for narrow laptop screens */}
          <button 
            onClick={() => handleScrollNav('left')}
            className="hidden xl:flex p-1 text-gray-400 hover:text-black shrink-0 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft size={14} />
          </button>
          <button 
            onClick={() => handleScrollNav('right')}
            className="hidden xl:flex p-1 text-gray-400 hover:text-black shrink-0 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* PORTAL-LIKE FIXED DROPDOWN MENU (NEVER CLIPPED BY SCROLL CONTAINER) */}
      {openDropdown && currentSection && dropdownPos && (
        <div 
          className="fixed bg-white border border-gray-200 shadow-2xl rounded-xl py-2 max-h-[70vh] overflow-y-auto z-[999999]"
          style={{ 
            left: `${dropdownPos.left}px`, 
            top: `${dropdownPos.top}px`, 
            width: `${dropdownPos.width}px`,
            filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))' 
          }}
          onMouseEnter={() => setOpenDropdown(openDropdown)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="px-3 pb-1.5 mb-1 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase font-bold">
              {currentSection.label} SECTIONS
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold">
              {currentSection.categories.length}
            </span>
          </div>

          {currentSection.categories.map((cat, idx) => {
            const isCurrent = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => handleSubcategoryClick(cat.id)}
                className={`w-full text-left px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-between group/item ${
                  isCurrent
                    ? 'bg-black text-white font-bold'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                <span className="truncate">{cat.label}</span>
                <span className={`text-[10px] font-mono opacity-50 ml-2 group-hover/item:opacity-100 ${isCurrent ? 'text-white' : 'text-gray-400'}`}>
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
