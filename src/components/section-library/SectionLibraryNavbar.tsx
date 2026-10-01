import React from 'react';
import { homeCategories, productCategories, cartCategories, checkoutCategories } from './navigationData';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function SectionLibraryNavbar({ activeCategory, onSelectCategory }: NavbarProps) {
  const isHomeActive = activeCategory === 'home' || homeCategories.some(c => c.id === activeCategory);
  const isProductActive = activeCategory === 'product' || productCategories.some(c => c.id === activeCategory);
  const isCartActive = activeCategory === 'cart' || cartCategories.some(c => c.id === activeCategory);
  const isCheckoutActive = activeCategory === 'checkout' || checkoutCategories.some(c => c.id === activeCategory);

  const handleSubcategoryClick = (id: string) => {
    onSelectCategory(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative z-[9999] w-full bg-white border-b border-gray-200">
      <div className="flex items-center px-8 lg:px-12 h-16 w-full max-w-[1600px] mx-auto">
        <div className="flex items-center gap-12 h-full">
          <h1 className="text-lg font-bold tracking-tight text-gray-900 uppercase whitespace-nowrap">UI LIBRARY</h1>
          
          <nav className="flex items-center gap-8 h-full">
            {/* HOME Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(homeCategories[0].id);
                }}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors h-full ${
                  isHomeActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                HOME
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[10000]">
                {homeCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSubcategoryClick(cat.id)}
                    className="text-left px-4 py-2 text-xs font-medium text-gray-600 hover:text-black hover:bg-gray-50 uppercase tracking-wider transition-colors"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(productCategories[0].id);
                }}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors h-full ${
                  isProductActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                PRODUCT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[10000]">
                {productCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSubcategoryClick(cat.id)}
                    className="text-left px-4 py-2 text-xs font-medium text-gray-600 hover:text-black hover:bg-gray-50 uppercase tracking-wider transition-colors"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CART Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(cartCategories[0].id);
                }}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors h-full ${
                  isCartActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                CART
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[10000]">
                {cartCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSubcategoryClick(cat.id)}
                    className="text-left px-4 py-2 text-xs font-medium text-gray-600 hover:text-black hover:bg-gray-50 uppercase tracking-wider transition-colors"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CHECKOUT Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(checkoutCategories[0].id);
                }}
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors h-full ${
                  isCheckoutActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`}
              >
                CHECKOUT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[10000]">
                {checkoutCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSubcategoryClick(cat.id)}
                    className="text-left px-4 py-2 text-xs font-medium text-gray-600 hover:text-black hover:bg-gray-50 uppercase tracking-wider transition-colors"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
