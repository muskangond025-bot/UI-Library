import React from 'react';
import { homeCategories, productCategories, cartCategories, checkoutCategories, orderCategories, accountCategories, offersCategories, blogCategories, aboutCategories, contactCategories, errorCategories, globalCategories } from './navigationData';
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
  const isOrderActive = activeCategory === 'order' || orderCategories.some(c => c.id === activeCategory);
  const isAccountActive = activeCategory === 'account' || accountCategories.some(c => c.id === activeCategory);
  const isOffersActive = activeCategory === 'offers' || offersCategories.some(c => c.id === activeCategory);
  const isBlogActive = activeCategory === 'blog' || blogCategories.some(c => c.id === activeCategory);
  const isAboutActive = activeCategory === 'about' || aboutCategories.some(c => c.id === activeCategory);
  const isContactActive = activeCategory === 'contact' || contactCategories.some(c => c.id === activeCategory);
  const isErrorActive = activeCategory === 'error' || activeCategory === 'error-empty' || errorCategories.some(c => c.id === activeCategory);
  const isGlobalActive = activeCategory === 'global' || activeCategory === 'global-major' || globalCategories.some(c => c.id === activeCategory);

  const handleSubcategoryClick = (id: string) => {
    onSelectCategory(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-[9999] w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex items-center px-6 lg:px-10 py-2.5 w-full max-w-[1850px] mx-auto gap-6">
        {/* FIXED LOGO ON LEFT */}
        <div className="shrink-0 flex items-center gap-2.5 cursor-pointer bg-white py-1 pr-4 border-r border-gray-200 z-[10001]" onClick={() => handleSubcategoryClick(homeCategories[0].id)}>
          <div className="w-8 h-8 rounded-xl bg-black text-white font-black flex items-center justify-center text-xs tracking-tighter shadow-md">
            UI
          </div>
          <h1 className="text-base font-extrabold tracking-tight text-gray-900 uppercase whitespace-nowrap">
            UI LIBRARY
          </h1>
        </div>
        
        {/* SINGLE LINE FLEX NAV WITH VISIBLE HOVER DROPDOWNS */}
        <nav className="flex items-center gap-4 lg:gap-6 flex-wrap py-1 flex-1 justify-start z-[10000]">
            {/* HOME Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(homeCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isHomeActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                HOME
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
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
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isProductActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                PRODUCT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
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
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isCartActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                CART
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
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
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isCheckoutActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                CHECKOUT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
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

            {/* ORDER Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(orderCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isOrderActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                ORDER
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {orderCategories.map((cat) => (
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

            {/* ACCOUNT Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(accountCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isAccountActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                ACCOUNT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {accountCategories.map((cat) => (
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

            {/* OFFERS / DEALS Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(offersCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isOffersActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                OFFERS / DEALS
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {offersCategories.map((cat) => (
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

            {/* BLOG Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(blogCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isBlogActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                BLOG
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {blogCategories.map((cat) => (
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

            {/* ABOUT Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(aboutCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isAboutActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                ABOUT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {aboutCategories.map((cat) => (
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

            {/* CONTACT Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(contactCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isContactActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                CONTACT
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {contactCategories.map((cat) => (
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

          
            {/* ERROR / EMPTY Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(errorCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isErrorActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                ERROR / EMPTY
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {errorCategories.map((cat) => (
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

          
            {/* GLOBAL MAJOR Dropdown */}
            <div className="group relative h-full flex items-center">
              <button 
                onClick={() => {
                  handleSubcategoryClick(globalCategories[0].id);
                }}
                className={`flex items-center gap-1 relative py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isGlobalActive
                    ? 'text-black border-b-2 border-black font-extrabold'
                    : 'text-gray-500 hover:text-black border-b-2 border-transparent'
                }`}
              >
                GLOBAL MAJOR
                <ChevronDown size={14} className="opacity-50" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 flex flex-col py-2 max-h-[70vh] overflow-y-auto z-[20000] mt-1">
                {globalCategories.map((cat) => (
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
  );
}

