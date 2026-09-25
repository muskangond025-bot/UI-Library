import React from 'react';
import { SectionProps } from './types';

export function HeroBanner({ section }: SectionProps) {
  const { settings, styles } = section;

  // Extract alignment styles
  const alignment = styles.align === 'center' ? 'text-center items-center' : 
                    styles.align === 'right' ? 'text-right items-end' : 
                    'text-left items-start';
                    
  // Extract theme colors
  const themeClasses = styles.theme === 'dark' 
    ? 'bg-zinc-950 text-white' 
    : 'bg-white text-zinc-900';

  return (
    <section className={`w-full relative overflow-hidden py-32 md:py-48 min-h-[600px] flex items-center justify-center ${themeClasses}`}>
      
      {/* Background Image Layer */}
      {settings.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={settings.backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {styles.overlay && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        <div className={`flex flex-col max-w-4xl mx-auto ${alignment}`}>
          
          {/* Section Eyebrow */}
          {settings.eyebrow && (
            <span className="mb-6 text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-zinc-300 drop-shadow-md">
              {settings.eyebrow}
            </span>
          )}

          {/* Primary Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-balance leading-[1.1] drop-shadow-lg">
            {settings.title}
          </h1>

          {/* Supporting Description */}
          {settings.description && (
            <p className="text-xl md:text-2xl mb-12 text-zinc-200/90 max-w-2xl text-balance font-light leading-relaxed drop-shadow-md">
              {settings.description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-4 w-full sm:w-auto">
            {settings.primaryAction && (
              <a 
                href={settings.primaryAction.url}
                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 focus:outline-none w-full sm:w-auto shadow-xl"
              >
                {settings.primaryAction.label}
              </a>
            )}
            
            {settings.secondaryAction && (
              <a 
                href={settings.secondaryAction.url}
                className="inline-flex items-center justify-center px-10 py-4 text-base font-medium rounded-full border border-white/30 bg-black/20 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 focus:outline-none w-full sm:w-auto"
              >
                {settings.secondaryAction.label}
              </a>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
